# Wovie Prollo Portfolio

Single-page portfolio built with TanStack Start (React 19), Tailwind CSS 4, and Nitro, deployed on Vercel.

## Editing content

All copy, links, and project data live in `src/data/site.ts`:

- `profile.photo`: profile photo (file in `public/`)
- `profile.heroVisual`: set to an image path to replace the built-in hero workflow diagram
- `booking.url`: Calendly link used by the Book a Call embed
- `proofPoints`, `caseStudies`, `tools`: only add claims documented in `public/resume.pdf` or project materials.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
```

## Resume

`public/resume.pdf` is generated from `resume/resume.html` (same branding and
facts as the site). To update it, edit the HTML, open it in Chrome, then
Print > Save as PDF with Paper "Letter", Margins "None", and "Background
graphics" ticked, and save over `public/resume.pdf`.
