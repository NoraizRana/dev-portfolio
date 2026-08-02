import { lazy, Suspense } from "react"

const Contact = lazy(() => import("@/components/sections/Contact"))

export default function ContactPage() {
  return (
    <div className="pt-24">
      {/* Standalone route needs an h1; Contact section renders h2 */}
      <h1 className="sr-only">Contact Noraiz Rana</h1>
      <Suspense fallback={<div className="h-24" />}>
        <Contact />
      </Suspense>
    </div>
  )
}
