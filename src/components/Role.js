import React from 'react';

import ProjectText from './ProjectText';

const Role = ({
  company,
  summary,
  project1,
  project2,
}) => (
  <div className="role">
    <h3>
      Work for&nbsp;
      {company}
    </h3>
    <p>{summary}</p>
    <h4>Projects</h4>
    <ul>
      <li>
        <h5>
          <a href={project1.link}>{project1.title}</a>
          &nbsp;
          <span className="time">{project1.time}</span>
        </h5>
        <ProjectText>
          <p>{project1.text}</p>
        </ProjectText>
      </li>
      {
        project2 && (
        <li>
          <h5>
            <a href={project2.link}>{project2.title}</a>
            &nbsp;
            <span className="time">{project2.time}</span>
          </h5>
          <ProjectText>
            <p>{project2.text}</p>
          </ProjectText>
        </li>
        )
      }
    </ul>
  </div>
);

export default Role;
