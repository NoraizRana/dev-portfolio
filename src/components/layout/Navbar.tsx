import { useEffect, useRef, useState } from "react"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { IconMenu2, IconX } from "@tabler/icons-react"
import { usePrefersReducedMotion } from "@/hooks/useMediaQuery"
import { EMAIL, LOCATION, SOCIALS } from "@/data/contact"

const NAV_LINKS = [
  { label: "ABOUT",   to: "/about"   },
  { label: "WORK",    to: "/work"    },
  { label: "BLOG",    to: "/blog"    },
  { label: "CONTACT", to: "/contact" },
]

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const navigate  = useNavigate()
  const location  = useLocation()
  const reduced   = usePrefersReducedMotion()

  const menuButtonRef = useRef<HTMLButtonElement>(null)
  const navRef        = useRef<HTMLDivElement>(null)

  // Lock body scroll while mobile nav is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [open])

  // Focus trap + Escape handler while mobile nav is open;
  // cleanup restores focus to the hamburger button on close.
  useEffect(() => {
    if (!open) return

    const nav = navRef.current
    if (!nav) return

    // Move focus inside the overlay on open
    const focusables = Array.from(nav.querySelectorAll<HTMLElement>(FOCUSABLE))
    focusables[0]?.focus()

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false)
        return
      }
      if (e.key !== "Tab" || focusables.length === 0) return

      const first = focusables[0]
      const last  = focusables[focusables.length - 1]

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault()
          last.focus()
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault()
          first.focus()
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)
    return () => {
      document.removeEventListener("keydown", handleKeyDown)
      // Restore focus to the hamburger when the overlay closes
      menuButtonRef.current?.focus()
    }
  }, [open])

  // Close mobile nav on route change
  useEffect(() => { setOpen(false) }, [location.pathname])

  return (
    <>
      <header className="fixed left-0 top-0 z-50 w-full border-b border-line bg-[rgba(10,10,10,0.95)] backdrop-blur-md">
        <nav className="flex items-center justify-between px-[6%] py-4">
          <Link to="/" className="flex items-center gap-1" aria-label="Home">
            <span className="font-display text-xl tracking-wide text-text-white">NR</span>
            <span aria-hidden="true" className="animate-blink font-display text-xl text-neon-green">_</span>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="group relative font-mono text-[11px] uppercase tracking-[0.15em] text-text-off transition-colors hover:text-text-white"
              >
                {l.label}
                <span aria-hidden="true" className="absolute -bottom-1 left-0 h-px w-0 bg-neon-green transition-all duration-300 group-hover:w-full" />
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
            ref={menuButtonRef}
            className="text-text-white md:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            <IconMenu2 size={28} />
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            ref={navRef}
            id="mobile-nav"
            role="dialog"
            aria-label="Navigation menu"
            aria-modal="true"
            className="fixed left-0 top-0 z-[80] flex h-[100dvh] w-full flex-col bg-bg md:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: [0.76, 0, 0.24, 1] }}
          >
            {/* Top bar — logo + close */}
            <div className="flex items-center justify-between px-[6%] py-4">
              <span className="font-display text-xl text-text-white">NR_</span>
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="text-text-white">
                <IconX size={28} />
              </button>
            </div>

            {/* Nav list — anchored at ~30 % from top */}
            <nav className="mt-[20dvh] border-t border-line px-[6%]">
              {NAV_LINKS.map((l, i) => {
                const active = location.pathname === l.to
                return (
                  <motion.div
                    key={l.to}
                    initial={reduced ? false : { opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={
                      reduced
                        ? { duration: 0 }
                        : { delay: 0.05 + i * 0.04, duration: 0.35, ease: [0.76, 0, 0.24, 1] }
                    }
                    className="border-b border-line"
                  >
                    <Link
                      to={l.to}
                      onClick={() => setOpen(false)}
                      className="group flex items-baseline gap-3 py-4"
                    >
                      <span aria-hidden="true" className="w-6 font-mono text-xs text-neon-green">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span aria-hidden="true" className="font-mono text-xs text-neon-green">/</span>
                      <span
                        className={`font-display text-5xl uppercase leading-tight transition-colors duration-150 ${
                          active
                            ? "text-neon-green"
                            : "text-text-white group-hover:text-neon-green"
                        }`}
                      >
                        {l.label}
                      </span>
                    </Link>
                  </motion.div>
                )
              })}
            </nav>

            <div className="flex-1" />

            {/* Meta block */}
            <div className="px-[6%] pb-10">
              <div aria-hidden="true" className="mb-5 h-px w-full bg-neon-green" />
              <a
                href={`mailto:${EMAIL}`}
                className="block font-mono text-xs text-text-off transition-colors hover:text-neon-green"
              >
                {EMAIL}
              </a>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                {SOCIALS.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted transition-colors hover:text-neon-green"
                  >
                    {s.label}
                  </a>
                ))}
              </div>
              <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.15em] text-text-muted">
                {LOCATION}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
