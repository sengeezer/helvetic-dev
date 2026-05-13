const GITHUB_API_URL = 'https://api.github.com/graphql';
const DEFAULT_GITHUB_LOGIN = 'sengeezer';
const DEFAULT_PINNED_REPOSITORY_COUNT = 6;
const DEFAULT_PROJECT_DESCRIPTION = 'Description coming soon.';

const PINNED_REPOSITORIES_QUERY = `
  query PinnedRepositories($login: String!, $count: Int!) {
    user(login: $login) {
      pinnedItems(first: $count, types: REPOSITORY) {
        nodes {
          ... on Repository {
            id
            name
            description
            url
            owner {
              login
            }
          }
        }
      }
    }
  }
`;

const normalizeRepository = (repository) => {
  if (!repository?.name || !repository?.url || !repository?.owner?.login) {
    return null;
  }

  return {
    slug: `${repository.owner.login}/${repository.name}`,
    title: repository.name,
    description: repository.description?.trim() || DEFAULT_PROJECT_DESCRIPTION,
    repositoryUrl: repository.url,
  };
};

export const getPinnedRepositories = async ({
  count = DEFAULT_PINNED_REPOSITORY_COUNT,
  login = process.env.GITHUB_PINNED_USERNAME || DEFAULT_GITHUB_LOGIN,
  token = process.env.GITHUB_TOKEN,
} = {}) => {
  if (!token) {
    throw new Error(
      'GITHUB_TOKEN environment variable is required. Set it in Vercel project settings or your local .env file to a GitHub personal access token with read access to public repositories (for example, no extra scopes for public data).',
    );
  }

  const response = await fetch(GITHUB_API_URL, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: PINNED_REPOSITORIES_QUERY,
      variables: {
        count,
        login,
      },
    }),
  });

  const rawPayload = await response.text();
  let payload = null;

  if (rawPayload) {
    try {
      payload = JSON.parse(rawPayload);
    } catch {
      payload = null;
    }
  }

  if (!response.ok) {
    const message =
      payload?.message || `GitHub GraphQL request failed with status ${response.status}.`;
    throw new Error(message);
  }

  if (!payload) {
    throw new Error('GitHub GraphQL response was empty or not valid JSON.');
  }

  if (Array.isArray(payload?.errors) && payload.errors.length > 0) {
    throw new Error(payload.errors.map((error) => error.message).join('; '));
  }

  const repositories = payload?.data?.user?.pinnedItems?.nodes;

  if (!Array.isArray(repositories)) {
    throw new Error('Expected pinned repositories array in response, but got invalid structure.');
  }

  return repositories.map(normalizeRepository).filter(Boolean);
};

export { normalizeRepository };
