import React from 'react';

import work from '../content/pastWork';
import projectsData from '../content/projects';

import Accordion from './Accordion';

const PastWork = () => {
  const { projects } = projectsData;
  return (
    <div className="pastWork">
      <div className="employment">
        <h2>{work.title}</h2>
        <p>{work.intro}</p>
        <Accordion data={work.positions} />
      </div>
      <div className="projects">
        <h2>{projectsData.title}</h2>
        <p>{projectsData.intro}</p>
        <ul className="projects__list">
        {projects.map((project, pKey) => {
          const key1 = pKey + Math.random() * 10;
          return (
            <li key={key1}>
              <h4>{project.title}</h4>
              <p>{project.description}</p>
              <a href={project.url}>{project.url}</a>
            </li>
          );
        })}
        </ul>
      </div>
    </div>
  )
};

export default PastWork;
