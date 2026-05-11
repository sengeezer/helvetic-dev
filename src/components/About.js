import bio from '../content/bio';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const About = () => (
  <Card variant="section">
    <CardHeader>
      <CardTitle>{bio.title}</CardTitle>
    </CardHeader>
    <CardContent>
      <ul className="list-disc space-y-3 pl-6 text-[1.6rem] leading-relaxed marker:text-primary">
        <li>
          <strong>Citizenship:</strong> {bio.nationality}
        </li>
        <li>
          <strong>Extracurricular interests:</strong>
          <ul className="mt-3 list-[circle] space-y-2 pl-6 marker:text-primary">
            {bio.interests.map((interest) => (
              <li key={interest}>{interest}</li>
            ))}
          </ul>
        </li>
      </ul>
    </CardContent>
  </Card>
);

export default About;
