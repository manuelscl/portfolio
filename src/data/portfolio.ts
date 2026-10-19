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


export const EDUCATION = [
  {
    degree: "Oracle Next Education F2 T4 Front-end",
    school: "Alura Latam",
    period: "2022 - 2023",
    description:
      "Focused on software engineering, algorithms, and human-computer interaction. Graduated with honors.",
  },

] as const;

export const SKILLS = [
  { category: "Frontend", items: ["HTML5", "CSS3", "React", "TypeScript", "Tailwind CSS", "Vite"] },
  { category: "Tools & DevOps", items: ["Git", "GitHub", "Docker", "AWS"] },
] as const;

export const ABOUT_ME = [
  "I’m a Frontend Developer working mainly with React, TypeScript, JavaScript, and Tailwind CSS.",
  "I focus on building clean components, managing application state efficiently, and making sure layouts look good on all devices. I care about speed, clean Git workflows, and writing code that is easy to read and maintain.",
  "I learn by building real projects, solving problems hands-on, and constantly improving my core web development skills.",
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
