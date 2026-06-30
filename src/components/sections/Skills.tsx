import { useRef } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import SectionHeader from "@/components/ui/SectionHeader"
import SkillCard from "@/components/ui/SkillCard"
import { skillCategories, proficiencies } from "@/data/skills"

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })

  return (
    <section id="skills" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="02" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>

      <div ref={ref} className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {proficiencies.map((p, i) => (
          <div key={p.name}>
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
              <span className="text-text-off">{p.name}</span>
              <span className="text-neon-green">
                {inView ? <CountUp end={p.value} duration={1.2} suffix="%" /> : "0%"}
              </span>
            </div>
            <div className="h-2 w-full bg-surface-2">
              <motion.div
                className="h-full bg-neon-green"
                initial={{ width: "0%" }}
                animate={inView ? { width: `${p.value}%` } : { width: "0%" }}
                transition={{
                  duration: 1.2,
                  delay: i * 0.1,
                  ease: [0.65, 0, 0.35, 1],
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}