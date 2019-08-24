import React from 'react';

const Role = ({ company, summary, project1 }) => (
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
        <p>{project1.text}</p>
      </li>
    </ul>
  </div>
);

export default Role;
