import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card';

const Intro = () => (
  <Card variant="panel" className="h-full">
    <CardHeader className="space-y-4">
      <div className="space-y-2">
        <p className="text-[1.15rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          Introduction
        </p>
        <CardTitle>Welcome</CardTitle>
      </div>
      <CardDescription className="max-w-2xl text-muted-foreground">
        Thank you for your interest in my work.
      </CardDescription>
    </CardHeader>
    <CardContent className="space-y-4 text-[1.6rem] leading-relaxed sm:text-[1.7rem]">
      <p>
        Information not included in my <a href="/resume.pdf">resume</a>, including additional
        biographical information, may be found below.
      </p>
    </CardContent>
    <CardFooter className="flex-col items-start gap-4 border-t border-panel-border">
      <a
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-[1.4rem] font-semibold text-primary-foreground no-underline transition hover:brightness-95"
        href="/resume.pdf"
      >
        View resume
      </a>
      <p className="text-[1.4rem] text-muted-foreground">Fabio M. Albertin</p>
    </CardFooter>
  </Card>
);

export default Intro;
