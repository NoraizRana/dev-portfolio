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

function ProfileFrame() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 80 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.6, ease: [0.76, 0, 0.24, 1] }}
      className="relative flex items-center justify-center w-full lg:w-auto mt-12 lg:mt-0"
    >
      {/* Outer slow-rotating dashed ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{
          width: "calc(100% + 56px)",
          height: "calc(100% + 56px)",
          border: "1px dashed rgba(57,255,20,0.18)",
        }}
      />

      {/* Inner counter-rotating ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
        className="absolute pointer-events-none"
        style={{
          width: "calc(100% + 28px)",
          height: "calc(100% + 28px)",
          border: "1px solid rgba(57,255,20,0.08)",
        }}
      />

      {/* Corner neon brackets */}
      <div className="absolute top-0 left-0 w-7 h-7 border-t-2 border-l-2 border-neon-green z-10" />
      <div className="absolute top-0 right-0 w-7 h-7 border-t-2 border-r-2 border-neon-green z-10" />
      <div className="absolute bottom-0 left-0 w-7 h-7 border-b-2 border-l-2 border-neon-green z-10" />
      <div className="absolute bottom-0 right-0 w-7 h-7 border-b-2 border-r-2 border-neon-green z-10" />

      {/* Scan line */}
      <motion.div
        animate={{ y: ["0%", "100%", "0%"] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "linear" }}
        className="absolute left-0 right-0 h-[1.5px] z-20 pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(57,255,20,0.6), transparent)",
        }}
      />

      {/* Image wrapper */}
      <div
        className="relative overflow-hidden"
        style={{ width: 260, height: 320 }}
      >
        {/* Very subtle green glow — bottom left only */}
        <div
          className="absolute -bottom-6 -left-6 w-32 h-32 pointer-events-none z-10"
          style={{
            background: "radial-gradient(ellipse, rgba(57,255,20,0.15) 0%, transparent 70%)",
            filter: "blur(12px)",
          }}
        />

        {/* Actual photo — no filter, no grayscale, no color change */}
        <img
          src="/profile.jpg"
          alt="Noraiz Rana"
          className="w-full h-full object-cover object-top relative z-0"
        />

        {/* Very light neon bottom fade only */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background: "linear-gradient(to top, rgba(57,255,20,0.07) 0%, transparent 40%)",
          }}
        />
      </div>

      {/* Available badge */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 border border-neon-green bg-bg px-4 py-2 whitespace-nowrap z-30"
      >
        <span className="relative flex h-2 w-2 flex-shrink-0">
          <span className="animate-ping absolute inline-flex h-full w-full bg-neon-green opacity-75" />
          <span className="relative inline-flex h-2 w-2 bg-neon-green" />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-widest text-neon-green">
          Available for work
        </span>
      </motion.div>

      {/* Stack label — right */}
      <motion.div
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.4 }}
        className="absolute -right-3 top-10 border border-line bg-bg px-3 py-2 z-30 hidden sm:block"
      >
        <p className="font-mono text-[10px] text-neon-green uppercase tracking-widest">Stack</p>
        <p className="font-mono text-[10px] text-text-muted mt-0.5">MERN + AI</p>
      </motion.div>

      {/* Years label — left */}
      <motion.div
        initial={{ opacity: 0, x: -16 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5 }}
        className="absolute -left-3 bottom-16 border border-line bg-bg px-3 py-2 z-30 hidden sm:block"
      >
        <p className="font-display text-2xl text-neon-green leading-none">3+</p>
        <p className="font-mono text-[10px] text-text-muted uppercase tracking-wider mt-0.5">Yrs</p>
      </motion.div>
    </motion.div>
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
    <section className="section-contain relative min-h-screen flex items-center overflow-hidden px-[8%] pt-24 pb-20">
      {/* Grid bg */}
      <div
        ref={gridRef}
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(57,255,20,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(57,255,20,0.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="pointer-events-none absolute -right-20 top-10 -z-10 h-[420px] w-[520px] bg-neon-green opacity-[0.03]"
        style={{ clipPath: "polygon(20% 0, 100% 10%, 90% 100%, 0 85%)" }}
      />

      <div className="w-full grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-20 items-center">

        {/* LEFT */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 font-mono text-sm text-neon-green"
          >
            noraiz@dev:~$ <span className="animate-blink">_</span>
          </motion.div>

          <h1 className="font-display text-[56px] uppercase leading-[0.85] sm:text-[80px] md:text-[110px] lg:text-[120px]">
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
              href="/noraiz-rana-cv.pdf"
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

        {/* RIGHT */}
        <ProfileFrame />
      </div>

      <div className="absolute bottom-8 right-8 hidden rotate-90 origin-bottom-right md:block">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-text-muted">
          Scroll to explore ↓
        </span>
      </div>
    </section>
  )
}