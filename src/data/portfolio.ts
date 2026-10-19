export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Resume", href: "#resume" },
  { label: "Work", href: "#work" },
  { label: "Contact", href: "#contact" },
] as const;

export const SERVICES = [
  {
    number: "01",
    title: "Frontend Web Development",
    description:
      "Development of modern web applications using React, TypeScript, and Tailwind CSS. Clean code, responsive design, and smooth user experience.",
    icon: "code",
  },
  {
    number: "02",
    title: "Landing Pages",
    description:
      "Custom, fast-loading landing pages built from design specs. Fully responsive, clean layout, and structured for optimal Core Web Vitals.",
    icon: "layout",
  },
  {
    number: "03",
    title: "UI Refactoring & Redesigns",
    description:
      "Updating legacy or outdated frontends into modern React components. Performance optimizations, responsive UI fixes, and modern styling.",
    icon: "refresh",
  },
  {
    number: "04",
    title: "Maintenance & Performance",
    description:
      "Code maintenance, UI adjustments, and frontend performance audits to keep web interfaces responsive, up-to-date, and error-free.",
    icon: "zap",
  },
] as const;

export const EXPERIENCE = [
  {
    role: "Senior Frontend Developer",
    company: "Freelance",
    period: "2021 — Present",
    description:
      "Delivering end-to-end web solutions for clients across fintech, SaaS, and e-commerce. Leading architecture decisions and mentoring junior developers.",
  },
  {
    role: "Full-Stack Developer",
    company: "NovaTech Solutions",
    period: "2018 — 2021",
    description:
      "Built and maintained 20+ client applications. Led the migration to React and TypeScript, reducing bug reports by 40% and improving load times by 60%.",
  },
  {
    role: "Frontend Developer",
    company: "PixelCraft Agency",
    period: "2016 — 2018",
    description:
      "Crafted responsive, pixel-perfect interfaces for startup clients. Collaborated closely with designers to implement complex animations and interactions.",
  },
] as const;

export const EDUCATION = [
  {
    degree: "B.S. Computer Science",
    school: "University of Technology",
    period: "2012 — 2016",
    description:
      "Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors.",
  },
  {
    degree: "Frontend Masters — Advanced React",
    school: "Frontend Masters",
    period: "2020",
    description:
      "Deep dive into React patterns, performance optimization, and concurrent rendering techniques.",
  },
] as const;

export const SKILLS = [
  { category: "Frontend", items: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "Vite"] },
  { category: "Backend", items: ["Node.js", "Express", "PostgreSQL", "GraphQL", "REST APIs"] },
  { category: "Tools & DevOps", items: ["Git", "Docker", "CI/CD", "AWS", "Vercel", "Cloudflare"] },
] as const;

export const ABOUT_ME = [
  "I'm a freelance web developer with 8+ years of experience building fast, accessible, and beautiful web applications.",
  "I believe great software is born at the intersection of engineering excellence and thoughtful design. Every project I take on gets my full attention — from the first wireframe to the final deployment.",
  "When I'm not coding, you'll find me contributing to open-source projects, writing technical articles, or exploring the latest web platform APIs.",
] as const;

export const PROJECTS = [
  {
    title: "FinTrack Dashboard",
    description:
      "A real-time financial analytics dashboard with interactive charts, portfolio tracking, and AI-powered insights. Built for a fintech startup.",
    tech: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    link: "#",
    mockup: "dashboard",
  },
  {
    title: "EcoCommerce",
    description:
      "A sustainable e-commerce platform with carbon footprint tracking on every purchase. Achieved 98+ Lighthouse scores across all pages.",
    tech: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
    link: "#",
    mockup: "ecommerce",
  },
  {
    title: "CollabSpace",
    description:
      "A real-time collaborative whiteboard and project management tool. Supports 100+ concurrent users with conflict-free replicated data types.",
    tech: ["React", "WebSockets", "CRDTs", "Node.js"],
    link: "#",
    mockup: "collab",
  },
] as const;

export const CONTACT_INFO = {
  email: "manuelscl.dev@gmail.com",
  phone: "(+505) 58587005",
  location: "Managua, Nicaragua",
};
