import work from '../content/pastWork';
import projectsData from '../content/projects';

import Accordion from './Accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const PastWork = () => {
  const { projects } = projectsData;

  return (
    <Card variant="section">
      <CardHeader className="space-y-8">
        <div className="space-y-2">
          <CardTitle>{work.title}</CardTitle>
          <CardDescription>{work.intro}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <Accordion data={work.positions} />

        <div className="space-y-4 rounded-sm border border-border bg-shell p-4 md:p-5">
          <div className="space-y-2">
            <h3 className="text-[2rem] font-normal leading-tight text-foreground">
              {projectsData.title}
            </h3>
            <p className="text-[1.5rem] leading-relaxed text-muted-foreground">
              {projectsData.intro}
            </p>
          </div>
          <ul className="space-y-4">
            {projects.map((project) => (
              <li key={project.url} className="rounded-sm border border-border bg-card px-4 py-4">
                <h4 className="text-[1.6rem] font-semibold text-foreground">{project.title}</h4>
                <p className="mt-2 text-[1.5rem] leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <a className="mt-3 inline-block text-[1.4rem] text-primary" href={project.url}>
                  {project.url}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default PastWork;
