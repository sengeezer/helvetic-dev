import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            <p className="roleSummary">{summary}</p>
            <h4>Projects</h4>
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
                      <ReactMarkdown children={project.text} />
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

AccordionItem.propTypes = {
  company: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  projects: PropTypes.array.isRequired,
};

export default AccordionItem;
