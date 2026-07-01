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
  overview: string
  challenges: string[]
  solutions: string[]
  github?: string
  live?: string
}

export const projects: Project[] = [
  {
    id: "1",
    slug: "collaborink",
    number: "01",
    title: "COLLABORINK",
    category: "MERN",
    stack: ["MERN", "Socket.io", "JWT", "RBAC"],
    description:
      "Real-time collaboration platform with live editing, role-based access, and instant sync.",
    thumbnail: "/projects/collaborink.png",
    overview:
      "CollaborInk is a production-grade real-time collaboration platform that lets teams co-author documents with sub-100ms sync. It implements granular role-based access control and JWT-secured sessions across a horizontally scalable Socket.io layer.",
    challenges: [
      "Keeping concurrent edits conflict-free under heavy load.",
      "Enforcing role-based permissions at both API and socket layers.",
      "Maintaining presence state across reconnects.",
    ],
    solutions: [
      "Operational-transform style merge with server arbitration.",
      "Shared middleware that validates JWT + RBAC on every socket event.",
      "Heartbeat + reconnection buffer to restore presence seamlessly.",
    ],
    github: "https://github.com/NoraizRana/collaborink-platform",
    live: "#",
  },
  {
    id: "2",
    slug: "aoa-teaching-assistant",
    number: "02",
    title: "AOA TEACHING ASSISTANT",
    category: "AI+NLP",
    stack: ["Python", "TF-IDF", "MERN", "Web Speech API"],
    description:
      "Final year project — AI Q&A engine for algorithms. Custom NLP, 15000+ entries, voice input support.",
    badge: "FYP",
    thumbnail: "/projects/aoa-teaching-assistant.png",
    overview:
      "The AoA Virtual Teaching Assistant answers algorithm questions using a custom TF-IDF NLP engine trained on 228 curated Q&A entries. It supports voice input via the Web Speech API and surfaces ranked answers in real time.",
    challenges: [
      "Building accurate retrieval without a heavyweight LLM.",
      "Handling noisy voice transcripts.",
      "Serving the NLP engine alongside a MERN stack.",
    ],
    solutions: [
      "Hand-tuned TF-IDF vectorizer with cosine ranking over 228 entries.",
      "Transcript normalization + fuzzy matching before scoring.",
      "Python microservice exposed through an Express gateway.",
    ],
    github: "https://github.com/NoraizRana/aoa-virtual-assistant",
    live: "#",
  },
  {
    id: "3",
    slug: "accurates",
    number: "03",
    title: "ACCURATES",
    category: "FRONTEND",
    stack: ["React", "Exchange Rate API", "TailwindCSS"],
    description: "Real-time multi-currency conversion tool.",
    thumbnail: "/projects/accurates.png",
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
    live: "#",
  },
  {
    id: "4",
    slug: "portfolio-v1",
    number: "04",
    title: "PORTFOLIO V1",
    category: "FRONTEND",
    stack: ["HTML", "CSS", "JavaScript"],
    description: "First iteration. Pure vanilla, fully responsive.",
    thumbnail: "/projects/portfolio-v1.png",
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
    live: "#",
  },
]

export const filterTabs: ("ALL" | ProjectCategory)[] = ["ALL", "MERN", "AI+NLP", "FRONTEND"]