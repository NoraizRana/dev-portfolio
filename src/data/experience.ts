export interface ExperienceRow {
  period: string
  company: string
  role: string
  achievement: string
}

export const experience: ExperienceRow[] = [
  {
    period: "2024–PRESENT",
    company: "Steganox AI",
    role: "AI-Assisted Web Developer",
    achievement: "Building AI-integrated client products with React + Node.js.",
  },
  {
    period: "2023",
    company: "AppVerse Technologies",
    role: "Frontend Developer Intern",
    achievement: "Shipped responsive UI components from Figma to production.",
  },
]

export interface EducationRow {
  period: string
  institution: string
  degree: string
  detail: string
}

export const education: EducationRow[] = [
  {
    period: "2022–2026",
    institution: "University of Sargodha",
    degree: "BS Information Technology",
    detail: "GPA: 3.4/4.0",
  },
]
