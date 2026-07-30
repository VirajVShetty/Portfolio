# Viraj Shetty — Portfolio

A personal portfolio website built to showcase my work in data science, model risk management, and applied ML. Live site for credentials, projects, and experience — built for both desktop and mobile.

## About

I'm a Data Scientist II at Elevate Credit, working in Model Risk Management — governing, monitoring, and validating the models that decide who gets credit. This site is a single-page showcase of that work: experience, projects, certifications, and technical skills, along with quick links out to my profiles on LinkedIn, GitHub, HackerRank, CodeChef, Tableau Public, Kaggle, X, Credly, and Credential.net.

## Tech Stack

- **Framework:** React 19 + Vite 7
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4, shadcn/ui components (Radix UI primitives)
- **Animation:** Framer Motion
- **Theming:** next-themes (light/dark mode, dark by default)
- **Routing:** wouter
- **Data fetching:** TanStack React Query
- **Icons:** lucide-react, react-icons (Simple Icons + Font Awesome)
- **Package management:** pnpm workspaces

## Features

- Responsive, single-page layout with smooth-scroll navigation and an active-section-aware nav bar
- Light/dark theme toggle
- Resume download button in the nav
- Scrolling tech-stack marquee, responsive down to mobile widths
- Certifications section supporting both Credly and Credential.net (Accredible) verification links
- Social/profile links row on the landing section

## Project Structure

This repo is a pnpm workspace monorepo. The site itself lives under `artifacts/portfolio`:
