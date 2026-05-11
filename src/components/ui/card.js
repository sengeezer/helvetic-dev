import * as React from 'react';
import { cva } from 'class-variance-authority';

import { cn } from '../../lib/utils';

const cardVariants = cva('rounded-lg border shadow-sm', {
  variants: {
    variant: {
      default: 'border-border bg-card text-card-foreground',
      section: 'border-border bg-background text-foreground',
      panel: 'border-panel-border bg-panel text-foreground',
      inset: 'border-border bg-surface text-surface-foreground',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

const Card = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div ref={ref} className={cn(cardVariants({ variant }), className)} {...props} />
));
Card.displayName = 'Card';

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-3 p-5 sm:p-6 lg:p-7', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      'text-[2.4rem] font-semibold leading-[1.1] tracking-[-0.03em] text-foreground sm:text-[2.8rem]',
      className,
    )}
    {...props}
  />
));
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-[1.5rem] leading-relaxed text-muted-foreground sm:text-[1.6rem]', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('p-5 pt-0 sm:p-6 sm:pt-0 lg:p-7 lg:pt-0', className)} {...props} />
));
CardContent.displayName = 'CardContent';

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center px-5 pb-5 pt-0 sm:px-6 sm:pb-6 lg:px-7 lg:pb-7', className)}
    {...props}
  />
));
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter };
