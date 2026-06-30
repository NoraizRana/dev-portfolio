import { useEffect, useRef, useState } from "react"
import { useMediaQuery } from "@/hooks/useMediaQuery"

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const hasFinePointer = useMediaQuery("(hover: hover) and (pointer: fine)")
  const [label, setLabel] = useState<string | null>(null)
  const [hovering, setHovering] = useState(false)

  const mouse = useRef({ x: 0, y: 0 })
  const current = useRef({ x: 0, y: 0 })
  const rafId = useRef(0)
  const idleTimer = useRef(0)

  useEffect(() => {
    if (!hasFinePointer) return
    document.documentElement.classList.add("cursor-active")

    let isLooping = false

    const startLoop = () => {
      if (isLooping) return
      isLooping = true
      loop()
    }

    const stopLoop = () => {
      isLooping = false
      cancelAnimationFrame(rafId.current)
    }

    const loop = () => {
      current.current.x += (mouse.current.x - current.current.x) * 0.15
      current.current.y += (mouse.current.y - current.current.y) * 0.15
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0) translate(-50%, -50%)`
      }

      const dx = mouse.current.x - current.current.x
      const dy = mouse.current.y - current.current.y
      const settled = Math.abs(dx) < 0.1 && Math.abs(dy) < 0.1

      if (isLooping && !settled) {
        rafId.current = requestAnimationFrame(loop)
      } else {
        isLooping = false
      }
    }

    const onMove = (e: MouseEvent) => {
      mouse.current = { x: e.clientX, y: e.clientY }
      startLoop()

      // Debounce hover-target lookup; closest() walks the DOM tree which
      // is comparatively expensive to run on every single mousemove tick.
      clearTimeout(idleTimer.current)
      idleTimer.current = window.setTimeout(() => {
        const target = e.target as HTMLElement
        const interactive = target.closest("[data-cursor]") as HTMLElement | null
        if (interactive) {
          setHovering(true)
          setLabel(interactive.getAttribute("data-cursor") || "VIEW")
        } else if (target.closest("a, button")) {
          setHovering(true)
          setLabel(null)
        } else {
          setHovering(false)
          setLabel(null)
        }
      }, 16)
    }

    window.addEventListener("mousemove", onMove, { passive: true })
    return () => {
      window.removeEventListener("mousemove", onMove)
      stopLoop()
      clearTimeout(idleTimer.current)
      document.documentElement.classList.remove("cursor-active")
    }
  }, [hasFinePointer])

  if (!hasFinePointer) return null

  const expanded = hovering

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[9999] flex items-center justify-center will-change-transform"
      style={{ mixBlendMode: "difference" }}
    >
      <div
        className="flex items-center justify-center border border-neon-green bg-neon-green text-[9px] font-mono uppercase tracking-widest text-black transition-all duration-200"
        style={{
          width: expanded ? (label ? 88 : 48) : 8,
          height: expanded ? (label ? 88 : 48) : 8,
          backgroundColor: expanded ? "transparent" : "#39ff14",
          color: expanded ? "#39ff14" : "#000",
          borderRadius: "9999px",
        }}
      >
        {label}
      </div>
    </div>
  )
}