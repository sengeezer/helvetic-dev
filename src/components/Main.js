import Intro from './Intro';
import About from './About';
import PastWork from './PastWork';
import Contact from './Contact';

const Main = () => (
  <main className="bg-background px-3 py-4 sm:px-4 md:px-6 md:py-6">
    <div className="grid gap-6 lg:grid-cols-[minmax(0,7fr)_minmax(18rem,3fr)] lg:items-start">
      <section className="space-y-6">
        <Intro />
        <About />
        <PastWork />
      </section>
      <aside className="space-y-6">
        <Contact />
      </aside>
    </div>
  </main>
);

export default Main;
