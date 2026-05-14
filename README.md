# Helvetic.dev

NextJS-powered online CV.

## Styling

- The app now uses Tailwind CSS with shadcn-style UI primitives.
- Preserved color tokens live in `src/styles/globals.css`.
- Shared UI building blocks live in `src/components/ui`.
- Semantic token mapping keeps the original brand palette intact:
  - `page` = dark teal page background
  - `primary` = red header accent
  - `background` / `surface` = pale yellow content surfaces
  - `panel` = stronger yellow card surfaces
  - `accent` = peach accordion trigger
  - `disclaimer` = pink callout surface

## GitHub pinned repositories

- The Projects section is populated from pinned repositories on GitHub at build time.
- Set `GITHUB_TOKEN` in Vercel project environment variables so build-time static generation can query the GitHub GraphQL API. No write permissions are required.
- Optionally set `GITHUB_PINNED_USERNAME` to override the GitHub username to query. It defaults to `sengeezer`.
- If the token is missing or GitHub data cannot be fetched, the Projects section keeps its heading/copy and shows a temporary unavailable message instead of outdated static entries.

## Credits

* The accordion is now built with Radix UI using the shadcn/ui component pattern.
