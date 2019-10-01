import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import ProjectText from './ProjectText';

class AccordionItem extends Component {
  state = { opened: false }

  render() {
    const {
      props: { company, summary, projects },
      state: { opened },
    } = this;

    return (
      <div
        className={`accordion-item${opened ? ' accordion-item--opened' : ''}`}
        onClick={() => this.setState({ opened: !opened }) }
      >
        <div className="accordion-item__line">
          <h3 className="accordion-item__title">
            Work for&nbsp;
            {company}
          </h3>
          <span className="accordion-item__icon" />
        </div>
        <div className="accordion-item__inner">
          <div className="accordion-item__content">
            {summary}
            <ul>
              {projects.map((project, pKey) => {
                const key1 = pKey + Math.random() * 10;
                return (
                  <li key={key1}>
                    <h5>
                      <a href={project.link}>{project.title}</a>
                      &nbsp;
                      <span className="time">{project.time}</span>
                    </h5>
                    <ProjectText>
                      <ReactMarkdown source={project.text} />
                    </ProjectText>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default AccordionItem;
