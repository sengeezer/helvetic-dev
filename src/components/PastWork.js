import work from '../content/pastWork';
import projectsData from '../content/projects';
import { projectsPropType } from '../lib/projectPropTypes';

import Accordion from './Accordion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const PastWork = ({ projects }) => {
  return (
    <Card variant="section">
      <CardHeader className="space-y-4">
        <p className="text-[1.15rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Experience
        </p>
        <div className="space-y-3">
          <CardTitle>{work.title}</CardTitle>
          <CardDescription className="max-w-4xl">{work.intro}</CardDescription>
        </div>
      </CardHeader>
      <CardContent className="space-y-8">
        <Accordion data={work.positions} />

        <Card variant="inset" className="space-y-4">
          <CardHeader className="space-y-2 pb-0">
            <p className="text-[1.15rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
              Independent work
            </p>
            <h3 className="text-[2rem] font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-[2.2rem]">
              {projectsData.title}
            </h3>
            <p className="text-[1.5rem] leading-relaxed text-muted-foreground sm:text-[1.6rem]">
              {projectsData.intro}
            </p>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-4 xl:grid-cols-2">
              {projects.map((project) => {
                const primaryUrl = project.homepageUrl || project.repositoryUrl;
                const primaryLabel = project.homepageUrl ? 'Live site' : 'Repository';

                return (
                  <li key={project.slug} className="rounded-lg border border-border bg-card px-4 py-4">
                    <h4 className="text-[1.65rem] font-semibold tracking-[-0.02em] text-foreground">
                      {project.title}
                    </h4>
                    {project.primaryLanguage || project.stars ? (
                      <div className="mt-3 flex flex-wrap gap-2 text-[1.2rem] font-medium uppercase tracking-[0.15em] text-muted-foreground">
                        {project.primaryLanguage ? (
                          <span className="rounded-full border border-border px-2 py-1">
                            {project.primaryLanguage}
                          </span>
                        ) : null}
                        {project.stars ? (
                          <span className="rounded-full border border-border px-2 py-1">
                            ★ {project.stars}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                    <p className="mt-2 text-[1.5rem] leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3 text-[1.4rem] font-medium">
                      <a className="break-words text-primary" href={primaryUrl}>
                        {primaryLabel} ↗
                      </a>
                      {project.homepageUrl && project.repositoryUrl ? (
                        <a className="break-words text-primary" href={project.repositoryUrl}>
                          GitHub repo ↗
                        </a>
                      ) : null}
                    </div>
                  </li>
                );
              })}
            </ul>
          </CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

PastWork.propTypes = {
  projects: projectsPropType,
};

export default PastWork;
