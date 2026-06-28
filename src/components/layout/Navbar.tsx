import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { IconMenu2, IconX } from "@tabler/icons-react"

const NAV_LINKS = [
  { label: "ABOUT", to: "/about" },
  { label: "WORK", to: "/work" },
  { label: "BLOG", to: "/blog" },
  { label: "CONTACT", to: "/contact" },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-line bg-[rgba(10,10,10,0.95)] backdrop-blur-md">
      <nav className="flex items-center justify-between px-[6%] py-4">
        <Link to="/" className="flex items-center gap-1" aria-label="Home">
          <span className="font-display text-xl tracking-wide text-text-white">NR</span>
          <span className="animate-blink font-display text-xl text-neon-green">_</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="group relative font-mono text-[11px] uppercase tracking-[0.15em] text-text-off transition-colors hover:text-text-white"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-neon-green transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <button
            onClick={() => navigate("/contact")}
            className="border border-neon-green bg-transparent px-4 py-2 font-mono text-[11px] uppercase tracking-[0.15em] text-neon-green transition-colors duration-100 hover:bg-neon-green hover:text-black"
          >
            HIRE ME
          </button>
        </div>

        <button
          className="text-text-white md:hidden"
          onClick={() => setOpen(true)}
          aria-label="Open menu"
        >
          <IconMenu2 size={28} />
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[80] flex flex-col bg-bg md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            <div className="flex items-center justify-between px-[6%] py-4">
              <span className="font-display text-xl text-text-white">NR_</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-text-white">
                <IconX size={28} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-[6%]">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.08 }}
                >
                  <Link
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className="font-display text-5xl uppercase text-text-white transition-colors hover:text-neon-green"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
