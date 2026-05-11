import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const Intro = () => (
  <Card variant="panel">
    <CardHeader>
      <CardTitle>Welcome</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4 text-[1.6rem] leading-relaxed">
      <p>Thank you for your interest in my work.</p>
      <p>
        Information not included in my <a href="/resume.pdf">resume</a>, including additional
        biographical information, may be found below.
      </p>
      <p>Fabio M. Albertin</p>
    </CardContent>
  </Card>
);

export default Intro;
