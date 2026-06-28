import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import toast from "react-hot-toast"
import confetti from "canvas-confetti"
import { IconArrowRight, IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from "@tabler/icons-react"

const schema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  budget: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more"),
})

type FormData = z.infer<typeof schema>

const socials = [
  { label: "LinkedIn", icon: IconBrandLinkedin, href: "https://linkedin.com/noraiz-rana" },
  { label: "GitHub", icon: IconBrandGithub, href: "https://github.com/noraizrana" },
  { label: "WhatsApp", icon: IconBrandWhatsapp, href: "https://wa.me/+923495880361" },
]

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) })

  const onSubmit = async (data: FormData) => {
    // Frontend stub — simulate a backend round-trip.
    await new Promise((r) => setTimeout(r, 900))
    console.log("[v0] Contact form submitted:", data)
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#39ff14", "#ff2d78", "#ffd60a"],
    })
    toast.success("Message sent. I'll be in touch.", {
      style: { background: "#111", color: "#39ff14", border: "1px solid #39ff14", borderRadius: 0 },
    })
    reset()
  }

  const inputClass =
    "w-full border-b border-line bg-transparent py-3 font-sans text-text-white outline-none transition-colors focus:border-neon-green"

  return (
    <section id="contact" className="section-contain relative px-[8%] py-24">
      <div className="relative z-10">
        <span className="ghost-number absolute -top-20 left-0 text-[120px] md:text-[200px]">06</span>
        <span className="font-mono text-sm text-neon-green">06 / LET&apos;S WORK</span>
      </div>

      <h2 className="mt-6 font-display text-5xl uppercase leading-[0.9] text-text-white sm:text-7xl md:text-[100px]">
        Have a project?
        <br />
        <span className="text-neon-green">Let&apos;s talk.</span>
      </h2>

      <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-20">
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

        <div>
          <a
            href="mailto:noraizrana389@gmail.com"
            className="block font-display text-3xl text-text-white transition-colors hover:text-neon-green md:text-4xl"
          >
            → nr@email.com
          </a>

          <ul className="mt-10 space-y-4">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-3 font-mono text-sm uppercase tracking-wider text-text-off transition-colors hover:text-neon-green"
                >
                  <s.icon size={18} />
                  {s.label}
                  <IconArrowRight
                    size={14}
                    className="text-neon-green opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-12 inline-flex items-center gap-3 border border-line px-4 py-3">
            <span className="h-2.5 w-2.5 animate-blink rounded-full bg-neon-green" />
            <span className="font-mono text-xs uppercase tracking-[0.15em] text-text-white">
              Open to work
            </span>
          </div>
          <p className="mt-3 font-mono text-xs text-text-muted">Sargodha, Pakistan</p>
        </div>
      </div>
    </section>
  )
}
