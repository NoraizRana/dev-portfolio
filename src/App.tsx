import { Suspense, lazy, useEffect, useRef } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence, MotionConfig } from "framer-motion"
import { Toaster } from "react-hot-toast"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import CustomCursor from "@/components/layout/CustomCursor"
import Preloader from "@/components/layout/Preloader"
import ScrollProgress from "@/components/layout/ScrollProgress"
import SmoothScroll from "@/components/layout/SmoothScroll"
import PageTransition from "@/components/layout/PageTransition"

const HomePage = lazy(() => import("@/pages/HomePage"))
const WorkPage = lazy(() => import("@/pages/WorkPage"))
const WorkDetailPage = lazy(() => import("@/pages/WorkDetailPage"))
const AboutPage = lazy(() => import("@/pages/AboutPage"))
const BlogPage = lazy(() => import("@/pages/BlogPage"))
const ContactPage = lazy(() => import("@/pages/ContactPage"))

function Fallback() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <span className="animate-blink font-mono text-sm text-neon-green">loading...</span>
    </div>
  )
}

export default function App() {
  const location = useLocation()
  const isFirst = useRef(true)

  // On route change, move focus to main content after page transition
  useEffect(() => {
    if (isFirst.current) { isFirst.current = false; return }
    const id = setTimeout(() => {
      document.getElementById("main-content")?.focus()
    }, 600)
    return () => clearTimeout(id)
  }, [location.pathname])

  return (
    <MotionConfig reducedMotion="user">
      <SmoothScroll>
        {/* Skip-to-content — hidden until focused, keyboard users only */}
        <a
          href="#main-content"
          className="fixed top-0 left-4 -translate-y-full focus-visible:translate-y-16 z-[9999] bg-neon-green px-4 py-2 font-mono text-xs uppercase text-black transition-transform"
        >
          Skip to content
        </a>
        <Preloader />
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <Toaster position="bottom-right" />
        {/* tabIndex={-1} makes <main> programmatically focusable for skip link and route-change focus */}
        <main id="main-content" tabIndex={-1} className="min-h-screen pt-0 focus:outline-none">
          <AnimatePresence mode="wait">
            <Suspense fallback={<Fallback />}>
              <Routes location={location} key={location.pathname}>
                <Route
                  path="/"
                  element={
                    <PageTransition>
                      <HomePage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/work"
                  element={
                    <PageTransition>
                      <WorkPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/work/:slug"
                  element={
                    <PageTransition>
                      <WorkDetailPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/about"
                  element={
                    <PageTransition>
                      <AboutPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/blog"
                  element={
                    <PageTransition>
                      <BlogPage />
                    </PageTransition>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <PageTransition>
                      <ContactPage />
                    </PageTransition>
                  }
                />
              </Routes>
            </Suspense>
          </AnimatePresence>
        </main>
        <Footer />
      </SmoothScroll>
    </MotionConfig>
  )
}
