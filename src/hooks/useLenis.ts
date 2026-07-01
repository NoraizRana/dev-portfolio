import { useEffect } from "react"
import Lenis from "lenis"
import { usePrefersReducedMotion } from "./useMediaQuery"

export function useLenis() {
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      lerp: 0.12,        // was 0.08 — faster feel, less JS per frame
      duration: 1.1,     // was 1.4
      smoothWheel: true,
      // Only smooth on desktop — mobile has native momentum scroll
      // which is already buttery and free.
      prevent: (node) => node.closest("[data-lenis-prevent]") !== null,
    })

    let rafId = 0
    function raf(time: number) {
      lenis.raf(time)
      rafId = requestAnimationFrame(raf)
    }
    rafId = requestAnimationFrame(raf)

    return () => {
      cancelAnimationFrame(rafId)
      lenis.destroy()
    }
  }, [reduced])
}