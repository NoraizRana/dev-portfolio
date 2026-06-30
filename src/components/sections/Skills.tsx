import SectionHeader from "@/components/ui/SectionHeader"
import SkillCard from "@/components/ui/SkillCard"
import { skillCategories } from "@/data/skills"

export default function Skills() {
  return (
    <section id="skills" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="02" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>
    </section>
  )
}