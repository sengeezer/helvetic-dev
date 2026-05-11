import contact from '../content/contact';

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';

const platforms = [
  { label: 'LinkedIn', url: contact.platforms.linkedin },
  { label: 'X', url: contact.platforms.x },
  { label: 'Facebook', url: contact.platforms.facebook },
  { label: 'GitHub', url: contact.platforms.github },
  { label: 'Blog', url: contact.platforms.blog },
];

const Contact = () => (
  <Card variant="panel">
    <CardHeader>
      <CardTitle>{contact.title}</CardTitle>
    </CardHeader>
    <CardContent className="space-y-5">
      <ul className="space-y-2 text-[1.5rem] leading-relaxed">
        {platforms.map((platform) => (
          <li key={platform.label}>
            <a className="font-medium text-primary" href={platform.url}>
              {platform.label}
            </a>
          </li>
        ))}
      </ul>
      <aside className="overflow-hidden rounded-sm border border-disclaimer-border bg-disclaimer">
        <h3 className="bg-primary px-3 py-2 text-[1.6rem] font-medium text-primary-foreground">
          {contact.disclaimer.title}
        </h3>
        <p className="px-3 py-3 text-[1.2rem] leading-relaxed text-foreground">
          {contact.disclaimer.content}
        </p>
      </aside>
    </CardContent>
  </Card>
);

export default Contact;
