# Nikhitha A | Portfolio

Personal portfolio of Nikhitha A, a Java backend developer based in Bengaluru.
It covers my experience, skills, and projects built with Spring Boot, Spring Security, JWT, Spring Cloud and MySQL.

**Live site:** https://portfolio-five-liart-88.vercel.app

## Built with

- React 19 and Vite 7
- Tailwind CSS v4 and shadcn/ui (Radix UI)
- Framer Motion for animation
- wouter for routing

## Project structure

```
public/          Static files: photo, resume PDF, favicon, social preview image
src/
  components/    Page sections (Hero, About, Skills, Experience, Projects, ...)
    ui/          shadcn/ui primitives
  pages/         404 page
  App.jsx        Layout and routing
  index.css      Tailwind entry point and theme tokens
```

## Run locally

Requires Node.js 18 or newer.

```bash
npm install
npm run dev       # http://localhost:5173
npm run build     # production build in dist/
npm run preview   # preview the production build
```

## Updating content

| To change | Edit |
| --- | --- |
| Projects and GitHub links | `src/components/Projects.jsx` |
| Skills | `src/components/Skills.jsx` |
| Experience | `src/components/Experience.jsx` |
| Certifications | `src/components/Education.jsx` |
| Resume PDF | replace `public/nikhitha-resume.pdf` and update the date in `src/components/Resume.jsx` |
| Page title and social preview | `index.html` and `public/opengraph.jpg` |

If you add a custom domain, update the `og:url`, `og:image` and `twitter:image` tags in `index.html`.

## Deploy

Deployed on Vercel. Vercel detects the Vite preset, and `vercel.json` pins the build command,
output directory, and a rewrite so all routes serve `index.html`.

## Contact

nikhitha2206@gmail.com | [GitHub](https://github.com/nikhitha164) | [LinkedIn](https://www.linkedin.com/in/nikhitha12/)
