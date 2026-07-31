import { lazy, Suspense } from "react"

const Contact = lazy(() => import("@/components/sections/Contact"))

export default function ContactPage() {
  return (
    <div className="pt-24">
      <Suspense fallback={<div className="h-24" />}>
        <Contact />
      </Suspense>
    </div>
  )
}
