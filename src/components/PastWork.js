import React from 'react';

import work from '../content/pastWork';
import Role from './Role';

const PastWork = () => (
  <div className="pastWork">
    <h2>Past Work</h2>
    <p>{work.intro}</p>
    <ul>
      <li>
        <Role company={work.cs.company} summary={work.cs.summary} project1={work.cs.projects[0]} />
      </li>
    </ul>
  </div>
);

export default PastWork;
