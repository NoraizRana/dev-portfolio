import { useEffect, useState } from "react"

export function useMousePosition() {
  const [pos, setPos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    let raf = 0
    const handler = (e: MouseEvent) => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => setPos({ x: e.clientX, y: e.clientY }))
    }
    window.addEventListener("mousemove", handler, { passive: true })
    return () => {
      window.removeEventListener("mousemove", handler)
      cancelAnimationFrame(raf)
    }
  }, [])

  return pos
}
