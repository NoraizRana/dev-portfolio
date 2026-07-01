import { lazy, Suspense } from "react"
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
  return <div className="h-24" /> // placeholder height while loading
}

export default function HomePage() {
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
      <Suspense fallback={<SectionFallback />}>
        <Contact />
      </Suspense>
    </>
  )
}