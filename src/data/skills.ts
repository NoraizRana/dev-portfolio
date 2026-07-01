export interface SkillCategory {
  title: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Vite", "TailwindCSS", "Framer Motion", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express.js", "REST APIs", "Socket.io", "JWT", "Helmet"],
  },
  {
    title: "Database & Cloud",
    skills: ["MongoDB", "Mongoose", "MySQL", "Oracle 21c", "Firebase (basic)"],
  },
  {
    title: "AI & Tooling",
    skills: ["Python", "TF-IDF NLP", "Web Speech API", "Postman", "VS Code", "GitHub", "Claude", "ChatGPT"],
  },
]

export interface Proficiency {
  name: string
  value: number
}

export const proficiencies: Proficiency[] = [
  { name: "React", value: 84 },
  { name: "Node.js", value: 80 },
  { name: "MongoDB", value: 72 },
  { name: "Python", value: 60 },
  { name: "Socket.io", value: 75 },
  { name: "TailwindCSS", value: 90 },
]
