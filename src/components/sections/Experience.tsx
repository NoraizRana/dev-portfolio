import SectionHeader from "@/components/ui/SectionHeader"
import { experience } from "@/data/experience"

export default function Experience() {
  return (
    <section id="experience" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="04" title="Experience" />

      <div className="border-t border-line">
        {experience.map((row) => (
          <div
            key={row.company}
            className="group grid grid-cols-1 gap-2 border-b border-line py-8 transition-colors hover:bg-surface-1 md:grid-cols-[200px_1fr_1fr] md:gap-8"
          >
            <span className="border-l-2 border-transparent pl-4 font-mono text-xs uppercase tracking-wider text-text-muted transition-colors group-hover:border-neon-green">
              {row.period}
            </span>
            <div>
              <span className="font-condensed text-2xl font-bold uppercase text-text-white">
                {row.company}
              </span>
              <span className="ml-2 font-mono text-sm text-neon-green">→ {row.role}</span>
            </div>
            <p className="font-sans text-sm leading-relaxed text-text-off">{row.achievement}</p>
          </div>
        ))}
      </div>

      <p className="mt-12 max-w-3xl font-serif text-2xl italic leading-snug text-text-off md:text-3xl">
        Every line of code at these companies was a real product, real deadline, real user.
      </p>
    </section>
  )
}
