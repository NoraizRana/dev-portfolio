import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface NeonButtonProps {
  children: React.ReactNode
  to?: string
  onClick?: () => void
  variant?: "filled" | "outline"
  className?: string
  cursor?: string
}

export default function NeonButton({
  children,
  to,
  onClick,
  variant = "filled",
  className,
  cursor,
}: NeonButtonProps) {
  const base =
    "inline-flex items-center gap-2 font-display text-base uppercase tracking-wide px-8 py-3.5 transition-colors duration-100"
  const styles =
    variant === "filled"
      ? "bg-neon-green text-black border border-neon-green hover:bg-transparent hover:text-neon-green"
      : "bg-transparent text-neon-green border border-neon-green hover:bg-neon-green hover:text-black"

  const classes = cn(base, styles, className)

  if (to) {
    return (
      <Link to={to} className={classes} data-cursor={cursor}>
        {children}
      </Link>
    )
  }
  return (
    <button onClick={onClick} className={classes} data-cursor={cursor}>
      {children}
    </button>
  )
}
