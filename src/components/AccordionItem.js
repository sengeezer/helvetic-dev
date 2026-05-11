import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

import ProjectText from './ProjectText';
import {
  AccordionContent,
  AccordionItem as UiAccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const AccordionItem = ({ company, summary, projects }) => (
  <UiAccordionItem value={company}>
    <AccordionTrigger>Work for {company}</AccordionTrigger>
    <AccordionContent>
      <div className="space-y-5">
        {summary ? (
          <p className="text-[1.5rem] leading-relaxed text-muted-foreground">{summary}</p>
        ) : null}
        <div className="space-y-4">
          <h4 className="text-[1.6rem] font-semibold text-foreground">Projects</h4>
          <ul className="space-y-5">
            {projects.map((project) => (
              <li key={`${company}-${project.title}`}>
                <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                  <h5 className="text-[1.5rem] font-semibold leading-relaxed text-foreground">
                    <a className="text-primary" href={project.link}>
                      {project.title}
                    </a>
                  </h5>
                  {project.time ? (
                    <span className="text-[1.3rem] text-muted-foreground">{project.time}</span>
                  ) : null}
                </div>
                <ProjectText>
                  <ReactMarkdown>{project.text}</ReactMarkdown>
                </ProjectText>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AccordionContent>
  </UiAccordionItem>
);

AccordionItem.propTypes = {
  company: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  projects: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      time: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default AccordionItem;
