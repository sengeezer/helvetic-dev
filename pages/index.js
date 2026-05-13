import { getPinnedRepositories } from '../src/lib/github';
import { projectsPropType } from '../src/lib/projectPropTypes';
import Header from '../src/components/Header';
import Main from '../src/components/Main';
import Footer from '../src/components/Footer';

export default function Home({ projects }) {
  return (
    <div className="min-h-screen bg-page px-2 py-4 sm:px-4 sm:py-6 xl:px-5">
      <div className="mx-auto flex w-full max-w-screen-2xl flex-col overflow-hidden rounded-[1.2rem] border border-border bg-shell shadow-shell">
        <Header />
        <Main projects={projects} />
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  try {
    const projects = await getPinnedRepositories();

    return {
      props: {
        projects,
      },
    };
  } catch (error) {
    console.warn(`Projects unavailable from GitHub. ${error.message}`);

    return {
      props: {
        projects: [],
      },
    };
  }
}

Home.propTypes = {
  projects: projectsPropType,
};
