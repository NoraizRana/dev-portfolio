export interface ExperienceRow {
  period: string
  company: string
  role: string
  achievement: string
}

export const experience: ExperienceRow[] = [
  {
    period: "DEC 2025 – PRESENT",
    company: "Steganox",
    role: "Associate Software Engineer",
    achievement:
      "Own end-to-end delivery of 12 production features — 25+ REST endpoints and 6 admin dashboard modules with role-based access across 3 user roles — cutting average endpoint response time from 180ms to 95ms.",
  },
  {
    period: "JUN 2025 – OCT 2025",
    company: "AppVerse Technologies",
    role: "Frontend Developer Intern",
    achievement:
      "Shipped 20+ reusable React and Tailwind CSS components powering 12 live screens, integrated with 20+ backend REST endpoints — cutting build time per new screen by 40%.",
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