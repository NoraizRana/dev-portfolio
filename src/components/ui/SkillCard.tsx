import type { SkillCategory } from "@/data/skills"

export default function SkillCard({ category }: { category: SkillCategory }) {
  return (
    <div className="group border border-line border-t-4 border-t-neon-green bg-surface-1 p-6 transition-colors duration-300 hover:border-neon-green hover:bg-surface-2">
      <h3 className="mb-4 font-condensed text-2xl font-bold uppercase text-text-white">
        {category.title}
      </h3>
      <ul className="space-y-2">
        {category.skills.map((s) => (
          <li key={s} className="flex items-center gap-2 font-mono text-[13px] text-text-off">
            <span className="text-neon-green">▪</span>
            {s}
          </li>
        ))}
      </ul>
    </div>
  )
}
