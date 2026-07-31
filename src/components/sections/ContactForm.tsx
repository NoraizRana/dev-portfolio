import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"
import { IconArrowRight } from "@tabler/icons-react"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more"),
})

type FormData = z.infer<typeof schema>

const inputClass =
  "w-full border-b border-line bg-transparent py-3 font-sans text-text-white outline-none transition-colors focus:border-neon-green"

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })
      const result = await res.json()
      if (!res.ok) throw new Error(result.error || "Failed to send email")

      const { default: confetti } = await import("canvas-confetti")
      confetti({
        particleCount: 120,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#39ff14", "#ff2d78", "#ffd60a"],
      })

      toast.success("Message sent. I'll be in touch. Thank You.", {
        style: {
          background: "#111",
          color: "#39ff14",
          border: "1px solid #39ff14",
          borderRadius: 0,
        },
      })
      reset()
    } catch (err) {
      console.error(err)
      toast.error("Failed to send message.", {
        style: { background: "#111", color: "#ff4d4f" },
      })
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Name
        </label>
        <input className={inputClass} {...register("name")} placeholder="Your name" />
        {errors.name && <p className="mt-1 font-mono text-xs text-neon-pink">{errors.name.message}</p>}
      </div>
      <div>
        <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Email
        </label>
        <input className={inputClass} {...register("email")} placeholder="you@email.com" />
        {errors.email && <p className="mt-1 font-mono text-xs text-neon-pink">{errors.email.message}</p>}
      </div>
      <div>
        <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Budget (optional)
        </label>
        <input className={inputClass} {...register("budget")} placeholder="$" />
      </div>
      <div>
        <label className="font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted">
          Message
        </label>
        <textarea
          className={inputClass + " min-h-[120px] resize-y"}
          {...register("message")}
          placeholder="What are we building?"
        />
        {errors.message && (
          <p className="mt-1 font-mono text-xs text-neon-pink">{errors.message.message}</p>
        )}
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        className="flex w-full items-center justify-center gap-2 border border-neon-green bg-transparent py-4 font-display text-lg uppercase tracking-wide text-neon-green transition-colors duration-100 hover:bg-neon-green hover:text-black disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send it"}
        <IconArrowRight size={20} />
      </button>
    </form>
  )
}
