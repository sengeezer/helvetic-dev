import Intro from './Intro';
import About from './About';
import PastWork from './PastWork';
import Contact from './Contact';

const Main = () => (
  <main className="clearfix">
    <section>
      <Intro />
      <About />
      <PastWork />
    </section>
    <section>
      <Contact />
    </section>
  </main>
);

export default Main;
