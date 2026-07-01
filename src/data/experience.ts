export interface ExperienceRow {
  period: string
  company: string
  role: string
  achievement: string
}

export const experience: ExperienceRow[] = [
  {
    period: "2025–PRESENT",
    company: "Steganox AI",
    role: "AI-Assisted Web Developer",
    achievement: "Building AI-integrated client products with React + Node.js.",
  },
  {
    period: "2024(4 months)",
    company: "AppVerse Technologies",
    role: "Frontend Developer Intern",
    achievement: "Shipped responsive UI components with React to production.",
  },
]

export interface EducationRow {
  period: string
  institution: string
  degree: string
  detail: string
  marks?: string
  percentage?: string
}

export const education: EducationRow[] = [
  {
    period: "2022–2026",
    institution: "University of Sargodha",
    degree: "BS Information Technology",
    detail: "GPA: 3.4/4.0",
  },
  {
    period: "2020–2022",
    institution: "Intermediate (FSc Pre-Engineering)",
    degree: "Higher Secondary Education",
    detail: "1061 / 1100",
    marks: "1061 / 1100",
    percentage: "96.5%",
  },
  {
    period: "2018–2020",
    institution: "Matriculation (Science)",
    degree: "Secondary School Certificate",
    detail: "1027 / 1100",
    marks: "1027 / 1100",
    percentage: "93.4%",
  },
]