import React from 'react';

import Intro from './Intro';
import About from './About';
import PastWork from './PastWork';

const Main = () => (
  <main className="clearfix">
    <section>
      <Intro />
      <About />
      <PastWork />
    </section>
    <section>
      Section 2
    </section>
  </main>
);

export default Main;
