export type ProjectCategory = "MERN" | "AI+NLP" | "FRONTEND"

export interface Project {
  id: string
  slug: string
  number: string
  title: string
  category: ProjectCategory
  stack: string[]
  description: string
  badge?: string
  thumbnail: string
  thumbnailWidth: number
  thumbnailHeight: number
  thumbnailSmall: string
  thumbnailSmallWidth: number
  thumbnailSmallHeight: number
  overview: string
  challenges: string[]
  solutions: string[]
  github?: string
  live?: string | null
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "collaborink",
    number: "01",
    title: "COLLABORINK",
    category: "MERN",
    stack: ["MERN", "Socket.io", "JWT", "Docker", "Vitest"],
    description:
      "Real-time team collaboration platform with Kanban boards, live chat, file sharing, and notifications across 8 modules.",
    thumbnail: "/projects/collaborink.webp",
    thumbnailWidth: 1672,
    thumbnailHeight: 941,
    thumbnailSmall: "/projects/collaborink-sm.webp",
    thumbnailSmallWidth: 399,
    thumbnailSmallHeight: 224,
    overview:
      "CollaborInk is a full-stack team collaboration platform combining Kanban task management, real-time chat, file sharing, and notifications across 8 feature modules. It syncs state over WebSocket (Socket.io) with JWT authentication and automatic token refresh, holding API response times under 100ms in local load testing.",
    challenges: [
      "Keeping real-time chat and Kanban state in sync across clients under load.",
      "Refreshing JWT sessions transparently without interrupting active socket connections.",
      "Reaching meaningful automated test coverage on a real-time, stateful system.",
    ],
    solutions: [
      "WebSocket (Socket.io) event layer with server-side state reconciliation across all 8 modules.",
      "Automatic JWT token refresh flow that re-authenticates sockets without dropping sessions.",
      "60%+ test coverage with Vitest and React Testing Library, containerized with Docker for reproducible deployment.",
    ],
    github: "https://github.com/NoraizRana/collaborink-platform",
    live: null,
  },
  {
    id: "2",
    slug: "steganox-website",
    number: "02",
    title: "STEGANOX WEBSITE",
    category: "FRONTEND",
    stack: ["Next.js 15", "Tailwind CSS v4", "Spline 3D", "SEO"],
    description:
      "Multi-phase audit and overhaul of a production company website — critical bug fixes, SEO, and full UI polish.",
    thumbnail: "/projects/steganox-website.webp",
    thumbnailWidth: 1672,
    thumbnailHeight: 941,
    thumbnailSmall: "/projects/steganox-website-sm.webp",
    thumbnailSmallWidth: 399,
    thumbnailSmallHeight: 224,
    overview:
      "Led a multi-phase audit and overhaul of Steganox's production website. Diagnosed and fixed a critical Spline 3D bug that was loading the asset on every page via the root layout, rebuilt the font pipeline with next/font, added structured metadata and Open Graph tags for SEO, and led a full responsiveness and UI polish pass across the navbar, footer, and testimonials carousel.",
    challenges: [
      "A heavy Spline 3D scene was mounting globally via the root layout, tanking load time on every route.",
      "Inconsistent font loading was causing layout shift across pages.",
      "No structured SEO metadata existed for social sharing or search indexing.",
    ],
    solutions: [
      "Scoped the Spline 3D mount to only the routes that need it, cutting unnecessary global load weight.",
      "Migrated the font pipeline to next/font for automatic optimization and zero layout shift.",
      "Added full Open Graph, Twitter card, and structured metadata, plus a responsiveness pass across key components.",
    ],
    live: "https://steganox.com",
  },
  {
    id: "3",
    slug: "aoa-teaching-assistant",
    number: "03",
    title: "AOA TEACHING ASSISTANT",
    category: "AI+NLP",
    stack: ["Python", "TF-IDF", "MERN", "Web Speech API"],
    description:
      "Final year project — AI Q&A engine for algorithms. Custom NLP over 15,000+ entries, voice input, no external AI APIs.",
    badge: "FYP",
    thumbnail: "/projects/aoa-teaching-assistant.webp",
    thumbnailWidth: 1672,
    thumbnailHeight: 941,
    thumbnailSmall: "/projects/aoa-teaching-assistant-sm.webp",
    thumbnailSmallWidth: 399,
    thumbnailSmallHeight: 224,
    overview:
      "Led a 3-person team building a domain-specific teaching assistant for Analysis of Algorithms. Built a custom NLP retrieval pipeline using TF-IDF vectorization and cosine similarity over a 15,000+ question-answer dataset, reaching 79% answer accuracy in supervisor evaluation with no external AI APIs. Added voice interaction via the Web Speech API, plus JWT authentication with Admin and Student role-based access and per-user query history.",
    challenges: [
      "Building accurate retrieval over 15,000+ entries without a heavyweight LLM or external AI APIs.",
      "Handling noisy, real-world voice transcripts as query input.",
      "Serving a Python NLP engine alongside a MERN stack with role-based access control.",
    ],
    solutions: [
      "Hand-tuned TF-IDF vectorizer with cosine similarity ranking, reaching 79% accuracy in supervisor evaluation.",
      "Transcript normalization and fuzzy matching before scoring incoming voice queries.",
      "Python microservice exposed through an Express gateway, with JWT auth and Admin/Student RBAC plus per-user query history.",
    ],
    github: "https://github.com/NoraizRana/aoa-virtual-assistant",
    live: null,
  },
  {
    id: "4",
    slug: "accurates",
    number: "04",
    title: "ACCURATES",
    category: "FRONTEND",
    stack: ["React", "Exchange Rate API", "TailwindCSS"],
    description: "Real-time multi-currency conversion tool.",
    thumbnail: "/projects/accurates.webp",
    thumbnailWidth: 1672,
    thumbnailHeight: 941,
    thumbnailSmall: "/projects/accurates-sm.webp",
    thumbnailSmallWidth: 399,
    thumbnailSmallHeight: 224,
    overview:
      "Accurates is a snappy currency conversion tool that pulls live exchange rates and converts across multiple currencies instantly, with a clean responsive interface.",
    challenges: [
      "Avoiding excessive API calls on every keystroke.",
      "Presenting many currencies without clutter.",
    ],
    solutions: [
      "Debounced input + cached rate snapshots.",
      "Searchable currency selector with sensible defaults.",
    ],
    github: "https://github.com/NoraizRana/AccuRates-A-Currency-Converter-App",
    live: null,
  },
  {
    id: "5",
    slug: "portfolio-v1",
    number: "05",
    title: "PORTFOLIO V1",
    category: "FRONTEND",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "First iteration. Pure vanilla, fully responsive.",
    thumbnail: "/projects/portfolio-v1.webp",
    thumbnailWidth: 1693,
    thumbnailHeight: 929,
    thumbnailSmall: "/projects/portfolio-v1-sm.webp",
    thumbnailSmallWidth: 409,
    thumbnailSmallHeight: 224,
    overview:
      "The first iteration of my personal portfolio, built with pure vanilla HTML, CSS, and JavaScript. Fully responsive and hand-crafted with no frameworks.",
    challenges: [
      "Achieving responsiveness without a utility framework.",
      "Keeping the codebase organized in vanilla JS.",
    ],
    solutions: [
      "Mobile-first CSS with custom media queries.",
      "Modular JS with clear separation of concerns.",
    ],
    github: "https://github.com/NoraizRana/Noraiz-Portfolio",
    live: null,
  },
]

export const filterTabs: ("ALL" | ProjectCategory)[] = ["ALL", "MERN", "AI+NLP", "FRONTEND"]