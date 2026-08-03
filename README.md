# NexoCRM Marketing Website

A complete, production-ready marketing website for NexoCRM, a 360° CRM platform. Built with a focus on premium UI/UX, modern aesthetics, deep dark mode themes, and high-quality glassmorphism animations.
## Tech Stack

- **Framework**: Next.js 14+ (App Router)
- **Styling**: Tailwind CSS
- **Component Animations**: Framer Motion (page transitions, micro-interactions)
- **Scroll Animations**: GSAP + ScrollTrigger (parallax, pinned sections, marquee)
- **Icons**: Lucide React
- **Language**: TypeScript

## Folder Structure

- `src/app`: Next.js App Router (pages, layout, globals.css)
- `src/components/layout`: Shared layout components (Navbar, Footer)
- `src/components/sections`: Landing page sections (Hero, Features, Integrations, WhyChooseUs, Contact)
- `src/components/ui`: Reusable UI components
- `src/lib`: Utilities (e.g., Tailwind class merger)
- `public`: Static assets

## Getting Started

1. Clone the repository and navigate into the directory.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

1. Push your code to a Git repository (GitHub, GitLab, Bitbucket).
2. Import the project into Vercel.
3. Vercel will automatically detect the Next.js framework, install dependencies, and build the project.
4. Your site will be live on a custom `*.vercel.app` domain.
