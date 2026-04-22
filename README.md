# Arslaan Portfolio

A personal portfolio site built with Vite, React, TypeScript, and Tailwind CSS.

## Project structure

```text
arslaan-portfolio/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Navbar.tsx
│   │   ├── Projects.tsx
│   │   └── Skills.tsx
│   ├── data/
│   │   └── projects.ts
│   ├── pages/
│   │   ├── Home.tsx
│   │   └── ProjectPage.tsx
│   ├── types/
│   │   └── project.ts
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting started

```bash
npm install
npm run dev
```

## Notes

- Routing is set up with `react-router-dom`.
- Shared project metadata is centralized in `src/data/projects.ts`.
- The contact form is currently UI-only and does not send messages to a backend.
