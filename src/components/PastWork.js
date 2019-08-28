import React from 'react';

import work from '../content/pastWork';
import Role from './Role';

const PastWork = () => (
  <div className="pastWork">
    <h2>Past Work</h2>
    <p>{work.intro}</p>
    <ul>
      <li>
        <Role
          company={work.cs.company}
          summary={work.cs.summary}
          project1={work.cs.projects[0]}
        />
      </li>
      <li>
        <Role
          company={work.mf.company}
          summary={work.mf.summary}
          project1={work.mf.projects[0]}
        />
      </li>
      <li>
        <Role
          company={work.offd.company}
          summary={work.offd.summary}
          project1={work.offd.projects[0]}
        />
      </li>
      <li>
        <Role
          company={work.cog.company}
          summary={work.cog.summary}
          project1={work.cog.projects[0]}
          project2={work.cog.projects[1]}
        />
      </li>
      <li>
        <Role
          company={work.zappos.company}
          summary={work.zappos.summary}
          project1={work.zappos.projects[0]}
          project2={work.zappos.projects[1]}
        />
      </li>
    </ul>
  </div>
);

export default PastWork;
