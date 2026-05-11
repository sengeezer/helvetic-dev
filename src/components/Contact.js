import contact from '../content/contact';

import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const platforms = [
  { label: 'LinkedIn', url: contact.platforms.linkedin },
  { label: 'X', url: contact.platforms.x },
  { label: 'Facebook', url: contact.platforms.facebook },
  { label: 'GitHub', url: contact.platforms.github },
  { label: 'Blog', url: contact.platforms.blog },
];

const Contact = () => (
  <Card variant="panel" className="overflow-hidden">
    <CardHeader className="space-y-4">
      <p className="text-[1.15rem] font-semibold uppercase tracking-[0.25em] text-muted-foreground">
        Connect
      </p>
      <CardTitle>{contact.title}</CardTitle>
      <CardDescription>Find me on the following platforms.</CardDescription>
    </CardHeader>
    <CardContent className="space-y-5">
      <ul className="grid gap-3 text-[1.5rem] leading-relaxed sm:grid-cols-2 xl:grid-cols-1">
        {platforms.map((platform) => (
          <li key={platform.label}>
            <a
              className="flex items-center justify-between rounded-lg border border-border bg-shell px-4 py-3 font-medium text-primary no-underline transition hover:-translate-y-0.5 hover:shadow-sm"
              href={platform.url}
            >
              {platform.label}
              <span aria-hidden="true" className="text-[1.2rem] text-muted-foreground">
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
      <Alert variant="disclaimer" className="rounded-lg">
        <div className="rounded-md bg-primary px-3 py-2 text-primary-foreground">
          <AlertTitle className="mb-0 text-[1.4rem] font-semibold">{contact.disclaimer.title}</AlertTitle>
        </div>
        <AlertDescription className="px-1 pt-3 text-[1.3rem] text-foreground">
          {contact.disclaimer.content}
        </AlertDescription>
      </Alert>
    </CardContent>
  </Card>
);

export default Contact;
