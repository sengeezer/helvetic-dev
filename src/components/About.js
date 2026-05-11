import bio from '../content/bio';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const About = () => (
  <Card variant="section" className="h-full">
    <CardHeader className="space-y-4">
      <p className="text-[1.15rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Background
      </p>
      <CardTitle>{bio.title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <div className="rounded-lg border border-border bg-shell px-4 py-4">
        <p className="text-[1.2rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Citizenship
        </p>
        <p className="mt-2 text-[1.7rem] font-medium text-foreground">{bio.nationality}</p>
      </div>
      <div className="rounded-lg border border-border bg-shell px-4 py-4">
        <p className="text-[1.2rem] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Extracurricular interests
        </p>
        <ul className="mt-3 list-disc space-y-2 pl-6 text-[1.55rem] leading-relaxed marker:text-primary">
          {bio.interests.map((interest) => (
            <li key={interest}>{interest}</li>
          ))}
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default About;
