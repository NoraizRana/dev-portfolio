import { lazy, Suspense, useEffect, useRef, useState } from "react"
import { IconArrowRight, IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from "@tabler/icons-react"

const ContactForm = lazy(() => import("./ContactForm"))

const socials = [
  { label: "LinkedIn", icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/noraiz-rana-291277344/" },
  { label: "GitHub",   icon: IconBrandGithub,   href: "https://github.com/noraizrana" },
  { label: "WhatsApp", icon: IconBrandWhatsapp,  href: "https://wa.me/+923495880361" },
]

// Measured rendered height of ContactForm at desktop width — keeps layout stable
// while the form chunk loads.  Re-measure if form fields change.
const FORM_PH = "524px"

export default function Contact() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [mountForm, setMountForm] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMountForm(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="contact" className="section-contain relative px-[8%] py-24">
      <div className="relative z-10">
        <span className="ghost-number absolute -top-20 left-0 text-[120px] md:text-[200px]">06</span>
        <span className="font-mono text-sm text-neon-green">06 / LET&apos;S WORK</span>
      </div>

      <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-text-white sm:text-7xl md:text-[100px]">
        Have a project?
        <br />
        <span className="text-neon-green">Let&apos;s talk.</span>
      </h2>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
        {/* Form column — lazy-loaded; rest of section is always in DOM */}
        <div>
          <div ref={sentinelRef} aria-hidden="true" />
          {mountForm ? (
            <Suspense fallback={<div style={{ minHeight: FORM_PH }} />}>
              <ContactForm />
            </Suspense>
          ) : (
            <div style={{ minHeight: FORM_PH }} />
          )}
        </div>

        {/* Info column — always rendered for crawlers, find-in-page, screen readers */}
        <div>
          <a
            href="mailto:noraizrana389@gmail.com"
            className="block font-display text-3xl text-text-white transition-colors hover:text-neon-green md:text-4xl"
          >
            → noraizrana389@gmail.com
          </a>

          <ul className="mt-10 space-y-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-text-off transition-colors hover:text-neon-green"
                >
                  <s.icon size={18} />
                  {s.label}
                  <IconArrowRight
                    size={14}
                    className="text-neon-green opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 inline-flex items-center gap-3 border border-line px-4 py-3">
            <span className="h-2.5 w-2.5 animate-blink rounded-full bg-neon-green" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-white">
              Open to work
            </span>
          </div>
          <p className="mt-3 font-mono text-xs text-text-muted">Lahore, Pakistan</p>
        </div>
      </div>
    </section>
  )
}
