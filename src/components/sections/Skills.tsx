import { useEffect, useRef } from "react"
import anime from "animejs"
import { useInView } from "react-intersection-observer"
import CountUp from "react-countup"
import SectionHeader from "@/components/ui/SectionHeader"
import SkillCard from "@/components/ui/SkillCard"
import { skillCategories, proficiencies } from "@/data/skills"

export default function Skills() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 })
  const animated = useRef(false)

  useEffect(() => {
    if (inView && !animated.current) {
      animated.current = true
      anime({
        targets: ".skill-fill",
        width: (el: HTMLElement) => el.getAttribute("data-width") + "%",
        easing: "easeInOutQuart",
        duration: 1200,
        delay: anime.stagger(100),
      })
    }
  }, [inView])

  return (
    <section id="skills" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="02" title="Skills" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillCategories.map((cat) => (
          <SkillCard key={cat.title} category={cat} />
        ))}
      </div>

      <div ref={ref} className="mt-16 grid gap-x-12 gap-y-8 md:grid-cols-2">
        {proficiencies.map((p) => (
          <div key={p.name}>
            <div className="mb-2 flex items-center justify-between font-mono text-[11px] uppercase tracking-wider">
              <span className="text-text-off">{p.name}</span>
              <span className="text-neon-green">
                {inView ? <CountUp end={p.value} duration={1.2} suffix="%" /> : "0%"}
              </span>
            </div>
            <div className="h-2 w-full bg-surface-2">
              <div
                className="skill-fill h-full bg-neon-green"
                data-width={p.value}
                style={{ width: "0%" }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
