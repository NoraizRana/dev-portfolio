import SectionHeader from "@/components/ui/SectionHeader"
import { education } from "@/data/experience"

export default function Education() {
  return (
    <section id="education" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="05" title="Education" />

      <div className="border-t border-line">
        {education.map((row) => (
          <div
            key={row.institution}
            className="grid grid-cols-1 gap-2 border-b border-line py-8 md:grid-cols-[200px_1fr_1fr] md:gap-8"
          >
            <span className="font-mono text-xs uppercase tracking-wider text-text-muted">
              {row.period}
            </span>
            <span className="font-condensed text-2xl font-bold uppercase text-text-white">
              {row.institution}
            </span>
            <div>
              <p className="font-sans text-sm text-text-off">{row.degree}</p>
              <p className="mt-1 font-mono text-sm text-neon-green">{row.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-l-8 border-neon-green bg-surface-1 p-6 md:p-8">
        <span className="font-mono text-xs uppercase tracking-[0.15em] text-neon-green">
          Final Year Project
        </span>
        <h3 className="mt-2 font-condensed text-2xl font-bold uppercase text-text-white md:text-3xl">
          AoA Virtual Teaching Assistant
        </h3>
        <p className="mt-2 font-mono text-sm text-text-off">
          TF-IDF NLP · MERN Stack · Web Speech API · 228 Q&amp;A entries
        </p>
        <p className="mt-2 font-sans text-sm text-text-muted">
          Supervisor: Dr. Khalid Mehmood Aamir
        </p>
      </div>
    </section>
  )
}
