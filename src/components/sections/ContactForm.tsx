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
  website: z.string().optional(),
})

type FormData = z.infer<typeof schema>

const inputClass =
  "w-full border-b border-line bg-transparent py-3 font-sans text-text-white transition-colors focus:border-neon-green"

const labelClass = "font-mono text-[11px] uppercase tracking-[0.15em] text-text-muted"
const errorClass = "mt-1 font-mono text-xs text-neon-pink"

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

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const { default: confetti } = await import("canvas-confetti")
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#39ff14", "#ff2d78", "#ffd60a"],
        })
      }

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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
      {/* Honeypot — spam protection. DO NOT MODIFY: must stay hidden, unlabelled,
          out of tab order, and aria-hidden. Real users never fill this. */}
      <div style={{ display: "none" }} aria-hidden="true">
        <input
          {...register("website")}
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      <div>
        <label htmlFor="contact-name" className={labelClass}>
          Name
        </label>
        <input
          id="contact-name"
          className={inputClass}
          placeholder="Your name"
          required
          aria-required="true"
          aria-invalid={!!errors.name}
          aria-describedby="contact-name-error"
          {...register("name")}
        />
        <p
          id="contact-name-error"
          aria-live="polite"
          className={errors.name ? errorClass : "sr-only"}
        >
          {errors.name?.message ?? ""}
        </p>
      </div>

      <div>
        <label htmlFor="contact-email" className={labelClass}>
          Email
        </label>
        <input
          id="contact-email"
          className={inputClass}
          placeholder="you@email.com"
          type="email"
          required
          aria-required="true"
          aria-invalid={!!errors.email}
          aria-describedby="contact-email-error"
          {...register("email")}
        />
        <p
          id="contact-email-error"
          aria-live="polite"
          className={errors.email ? errorClass : "sr-only"}
        >
          {errors.email?.message ?? ""}
        </p>
      </div>

      <div>
        <label htmlFor="contact-budget" className={labelClass}>
          Budget (optional)
        </label>
        <input
          id="contact-budget"
          className={inputClass}
          placeholder="$"
          {...register("budget")}
        />
      </div>

      <div>
        <label htmlFor="contact-message" className={labelClass}>
          Message
        </label>
        <textarea
          id="contact-message"
          className={inputClass + " min-h-[120px] resize-y"}
          placeholder="What are we building?"
          required
          aria-required="true"
          aria-invalid={!!errors.message}
          aria-describedby="contact-message-error"
          {...register("message")}
        />
        <p
          id="contact-message-error"
          aria-live="polite"
          className={errors.message ? errorClass : "sr-only"}
        >
          {errors.message?.message ?? ""}
        </p>
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
