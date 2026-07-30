import { lazy, Suspense, useEffect, useRef, useState } from "react"
import Hero from "@/components/sections/Hero"
import Marquee from "@/components/sections/Marquee"

// Sections below the fold — lazy load so the browser only parses
// their JS after Hero + Marquee are already painted.
const About      = lazy(() => import("@/components/sections/About"))
const Skills     = lazy(() => import("@/components/sections/Skills"))
const Projects   = lazy(() => import("@/components/sections/Projects"))
const Experience = lazy(() => import("@/components/sections/Experience"))
const Education  = lazy(() => import("@/components/sections/Education"))
const Contact    = lazy(() => import("@/components/sections/Contact"))

function SectionFallback() {
  return <div className="h-24" />
}

export default function HomePage() {
  const sentinelRef = useRef<HTMLDivElement>(null)
  const [mountContact, setMountContact] = useState(false)

  useEffect(() => {
    const el = sentinelRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setMountContact(true)
          observer.disconnect()
        }
      },
      { rootMargin: "100% 0px" },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <>
      {/* Above the fold — load immediately */}
      <Hero />
      <Marquee />

      {/* Below the fold — load lazily as user scrolls */}
      <Suspense fallback={<SectionFallback />}>
        <About />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Skills />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Projects />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Experience />
      </Suspense>
      <Suspense fallback={<SectionFallback />}>
        <Education />
      </Suspense>
      {/* Sentinel: mount Contact only when this is ~1 viewport away */}
      <div ref={sentinelRef} aria-hidden="true" />
      {mountContact ? (
        <Suspense fallback={<div className="min-h-[64rem]" />}>
          <Contact />
        </Suspense>
      ) : (
        <div className="min-h-[64rem]" />
      )}
    </>
  )
}