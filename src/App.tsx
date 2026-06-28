import { Suspense, lazy } from "react"
import { Routes, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"
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

  return (
    <SmoothScroll>
      <Preloader />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />
      <Toaster position="bottom-right" />
      <main className="min-h-screen pt-0">
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
  )
}
