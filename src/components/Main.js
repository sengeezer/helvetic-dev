import React from 'react';

import Intro from './Intro';
import About from './About';
import PastWork from './PastWork';
import Contact from './Contact';
import { data } from '../content/accordion-sample';
import Accordion from './Accordion';

const Main = () => (
  <main className="clearfix">
    <section>
      <Intro />
      <About />
      <PastWork />
      <Accordion data={data} />
    </section>
    <section>
      <Contact />
    </section>
  </main>
);

export default Main;
