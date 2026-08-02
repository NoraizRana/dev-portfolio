import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FULL_TEXT = "noraiz.dev"

export default function Preloader() {
  // Lazy initializer: check synchronously so there is never a frame where
  // the preloader shows and then immediately hides for returning visitors
  // or users with prefers-reduced-motion enabled.
  const [done, setDone] = useState<boolean>(() => {
    return (
      !!sessionStorage.getItem("preloader_done") ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    )
  })
  const [typed, setTyped] = useState("")

  useEffect(() => {
    if (done) return

    let i = 0
    const typer = setInterval(() => {
      i++
      setTyped(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) clearInterval(typer)
    }, 60)

    const finish = setTimeout(() => {
      setDone(true)
      sessionStorage.setItem("preloader_done", "1")
    }, 1400)

    return () => {
      clearInterval(typer)
      clearTimeout(finish)
    }
  }, [done])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          aria-hidden="true"
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg"
          initial={{ opacity: 1 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } }}
        >
          <div className="font-mono text-sm text-text-off md:text-base">
            <span className="text-neon-green">{"$ "}</span>
            {typed}
            <span className="animate-blink text-neon-green">_</span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
