# Helvetic.dev

NextJS-powered online CV.

## Styling

- The app now uses Tailwind CSS with shadcn-style UI primitives.
- Preserved color tokens live in `src/styles/globals.css`.
- Shared UI building blocks live in `src/components/ui`.
- Semantic token mapping keeps the original brand palette intact:
  - `page` = dark teal page background
  - `primary` = red header accent
  - `background` / `surface` = pale yellow content surfaces
  - `panel` = stronger yellow card surfaces
  - `accent` = peach accordion trigger
  - `disclaimer` = pink callout surface

## Credits

* The accordion is now built with Radix UI using the shadcn/ui component pattern.
