# Content Map

## Canonical source

- Keep portfolio copy in `src/content/portfolio.ts`.
- Keep rendering logic in `src/App.tsx`.
- Keep styling in `src/styles.css`.
- Keep deployment hints in `.github/workflows/deploy.yml`.

## Current profile data

- Name: Abin Sumesh John
- Headline: IT Developer | CI/CD, Automation & Application Lifecycle
- Location: Montreal, QC (Willing to Relocate)
- Email: abinsjohn1998@gmail.com
- Phone: +1 (438) 464-0859
- GitHub: https://github.com/AbinSumeshJohn

## Section order

1. Hero
2. About
3. Experience
4. Projects
5. Skills
6. Education
7. Certifications
8. Recognition and leadership
9. Contact

## Update rules

- If the user changes resume copy, update the content file first.
- If a new section is needed, add a new data type and render it once in the app.
- If the user wants a dynamic backend later, replace the static content source adapter instead of duplicating content.
- Do not repeat resume bullets in comments, docs, or multiple components.
- Prefer compact arrays and shared render helpers over bespoke markup for each item.
