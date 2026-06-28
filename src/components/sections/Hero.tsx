import { useEffect, useRef } from "react"
import { motion } from "framer-motion"
import { TypeAnimation } from "react-type-animation"
import { IconArrowRight } from "@tabler/icons-react"
import NeonButton from "@/components/ui/NeonButton"
import { random } from "@/lib/utils"
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery"

function AnimatedName({ text, outline }: { text: string; outline?: boolean }) {
  const reduced = usePrefersReducedMotion()
  return (
    <span className="flex">
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          initial={
            reduced
              ? { opacity: 0 }
              : {
                  opacity: 0,
                  x: random(-300, 300),
                  y: random(-200, 200),
                  rotate: random(-30, 30),
                }
          }
          animate={{ opacity: 1, x: 0, y: 0, rotate: 0 }}
          transition={{ delay: 0.4 + i * 0.06, type: "spring", stiffness: 120, damping: 12 }}
          className={outline ? "text-stroke-green" : "text-text-white"}
        >
          {char}
        </motion.span>
      ))}
    </span>
  )
}

export default function Hero() {
  const gridRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = gridRef.current
    if (!el) return
    let raf = 0
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * 20
        const y = (e.clientY / window.innerHeight - 0.5) * 20
        el.style.transform = `translate3d(${x}px, ${y}px, 0)`
      })
    }
    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <section className="section-contain relative flex min-h-screen items-center overflow-hidden px-[8%] pt-24">
      {/* Animated grid background */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      {/* Neon shapes */}
      <div
        className="pointer-events-none absolute -right-20 top-10 -z-10 h-[420px] w-[520px] bg-neon-green opacity-[0.03]"
        style={{ clipPath: "polygon(20% 0, 100% 10%, 90% 100%, 0 85%)" }}
      />
      <div
        className="pointer-events-none absolute -left-10 bottom-10 -z-10 h-[280px] w-[360px] bg-neon-pink opacity-[0.02]"
        style={{ clipPath: "polygon(0 0, 100% 30%, 70% 100%, 0 70%)" }}
      />

      <div className="w-full">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 font-mono text-sm text-neon-green"
        >
          noraiz@dev:~$ <span className="animate-blink">_</span>
        </motion.div>

        <h1 className="font-display text-[64px] uppercase leading-[0.85] sm:text-[88px] md:text-[140px]">
          <AnimatedName text="NORAIZ" />
          <AnimatedName text="RANA" outline />
        </h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
          className="my-8 h-px bg-neon-green"
        />

        <div className="grid gap-8 md:grid-cols-[60%_40%] md:gap-0">
          <div className="md:border-r md:border-line md:pr-8">
            <div className="font-condensed text-2xl text-text-white md:text-[28px]">
              <TypeAnimation
                sequence={[
                  "Full-Stack MERN Developer",
                  2000,
                  "AI Integration Specialist",
                  2000,
                  "Real-Time Systems Builder",
                  2000,
                  "Open Source Contributor",
                  2000,
                  "Remote-Ready Developer",
                  2000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
                cursor
              />
            </div>
          </div>
          <div className="md:pl-8">
            <p className="font-sans text-sm leading-relaxed text-text-muted">
              Building production-grade applications from Sargodha, PK. Currently at Steganox AI.
              Fresh grad, serious craft.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-wider text-neon-green">
              10+ projects · GPA 3.4 · 2+ years
            </p>
          </div>
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <NeonButton to="/work" cursor="VIEW">
            VIEW MY WORK
          </NeonButton>
          <a
            href="noraiz-rana-cv.pdf"
            className="group inline-flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-text-off transition-colors hover:text-neon-green"
          >
            / Download CV
            <IconArrowRight
              size={16}
              className="text-neon-green transition-transform group-hover:translate-x-1"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 hidden rotate-90 origin-bottom-right md:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          Scroll to explore ↓
        </span>
      </div>
    </section>
  )
}
