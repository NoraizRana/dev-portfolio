import { useEffect, useRef, useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import SectionHeader from "@/components/ui/SectionHeader"
import StatsRow from "@/components/ui/StatsRow"
import { IconArrowRight } from "@tabler/icons-react"

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function useCountUp(end: number, decimals: number, durationSecs: number, active: boolean): string {
  const [value, setValue] = useState(0)
  const rafRef = useRef(0)
  const startRef = useRef(0)

  useEffect(() => {
    if (!active) return
    startRef.current = 0
    const step = (ts: number) => {
      if (startRef.current === 0) startRef.current = ts
      const progress = Math.min((ts - startRef.current) / (durationSecs * 1000), 1)
      setValue(easeOutExpo(progress) * end)
      if (progress < 1) rafRef.current = requestAnimationFrame(step)
      else setValue(end)
    }
    rafRef.current = requestAnimationFrame(step)
    return () => cancelAnimationFrame(rafRef.current)
  }, [active, end, durationSecs])

  return value.toFixed(decimals)
}

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.4 })
  const cgpa = useCountUp(3.36, 1, 1.6, inView)

  return (
    <section id="about" className="section-contain relative px-[8%] py-24">
      <SectionHeader number="01" title="About Me" />

      <div className="grid gap-12 md:grid-cols-[60%_40%] md:gap-16">
        <div>
          <p className="relative font-serif text-3xl italic leading-tight text-text-white md:text-4xl">
            <span className="absolute -left-6 -top-6 font-serif text-7xl text-neon-pink opacity-60">
              &ldquo;
            </span>
            I write code that ships, not code that sits in tutorials.
          </p>

          <div className="mt-10 space-y-6 font-sans text-base leading-relaxed text-text-off">
            <p>BS IT from University of Sargodha, class of 2026.</p>
            <p>
              At Steganox AI, I build real products — not demos. My FYP (AoA Virtual Teaching
              Assistant) runs a custom TF-IDF NLP engine with 15000+ Q&amp;A entries on algorithms.
            </p>
            <p>
              I don&apos;t just use AI tools — I build them. And I&apos;m looking for a team that
              needs someone who can do both.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-6">
            <a
              href="#"
              className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-neon-green"
            >
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              Download my CV
            </a>
            <a
              href="https://github.com/noraizrana"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-neon-green"
            >
              <IconArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              View my GitHub
            </a>
          </div>
        </div>

        <div ref={ref}>
          <div className="text-right">
            <span className="font-display text-[120px] leading-none text-neon-green md:text-[160px]">
              {cgpa}
            </span>
            <p className="font-mono text-xs uppercase tracking-[0.15em] text-text-muted">
              CGPA / 4.0
            </p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-8"
          >
            <StatsRow label="Projects Built" value="10+" />
            <StatsRow label="Internships" value="2" />
            <StatsRow label="Graduation Year" value="2026" />
            <StatsRow label="Location" value="Sargodha, PK" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
