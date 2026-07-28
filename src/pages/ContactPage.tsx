import { lazy, Suspense, useEffect } from "react"

const Contact = lazy(() => import("@/components/sections/Contact"))

export default function ContactPage() {
  useEffect(() => {
    const prefetch = () => import("@/components/sections/Contact")
    if ("requestIdleCallback" in window) requestIdleCallback(prefetch)
    else setTimeout(prefetch, 2000)
  }, [])

  return (
    <div className="pt-24">
      <Suspense fallback={<div className="min-h-[64rem]" />}>
        <Contact />
      </Suspense>
    </div>
  )
}
