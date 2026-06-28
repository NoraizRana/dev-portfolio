import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const FULL_TEXT = "initializing noraiz.dev..."

export default function Preloader() {
  const [done, setDone] = useState(false)
  const [typed, setTyped] = useState("")
  const [ready, setReady] = useState(false)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    let i = 0
    const typer = setInterval(() => {
      i++
      setTyped(FULL_TEXT.slice(0, i))
      if (i >= FULL_TEXT.length) {
        clearInterval(typer)
        setTimeout(() => setReady(true), 250)
      }
    }, 55)

    const prog = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 12
        return next >= 100 ? 100 : next
      })
    }, 90)

    const finish = setTimeout(() => setDone(true), 2600)

    return () => {
      clearInterval(typer)
      clearInterval(prog)
      clearTimeout(finish)
    }
  }, [])

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9998] flex flex-col items-center justify-center bg-bg"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="font-mono text-sm md:text-base text-text-off">
            <span className="text-neon-green">{"> "}</span>
            {typed}
            <span className="animate-blink text-neon-green">_</span>
          </div>
          {ready && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="mt-4 font-mono text-sm text-neon-green tracking-widest"
            >
              [ READY ]
            </motion.div>
          )}
          <div className="absolute bottom-0 left-0 h-[2px] w-full bg-line">
            <div
              className="h-full bg-neon-green transition-[width] duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
