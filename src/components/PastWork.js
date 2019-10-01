import React from 'react';

import work from '../content/pastWork';

import Accordion from './Accordion';

const PastWork = () => (
  <div className="pastWork">
    <h2>{work.title}</h2>
    <p>{work.intro}</p>
    <Accordion data={work.positions} />
  </div>
);

export default PastWork;
