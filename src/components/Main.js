import PropTypes from 'prop-types';

import Intro from './Intro';
import About from './About';
import PastWork from './PastWork';
import Contact from './Contact';

const Main = ({ projects }) => (
  <main className="bg-background px-3 py-4 sm:px-5 sm:py-5 lg:px-6 lg:py-6 xl:px-8 xl:py-8">
    <div className="grid gap-6 xl:grid-cols-[minmax(0,1.65fr)_minmax(22rem,1fr)] xl:items-start">
      <section className="space-y-6 lg:space-y-8">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)]">
          <Intro />
          <About />
        </div>
        <PastWork projects={projects} />
      </section>
      <aside className="space-y-6 xl:sticky xl:top-8">
        <Contact />
      </aside>
    </div>
  </main>
);

Main.propTypes = {
  projects: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default Main;
