import { IconBrandLinkedin, IconBrandGithub, IconBrandWhatsapp } from "@tabler/icons-react"
import type { ElementType } from "react"

export const EMAIL = "noraizrana389@gmail.com"
export const LOCATION = "LAHORE, PK"

export const SOCIALS: Array<{ label: string; icon: ElementType; href: string }> = [
  { label: "LinkedIn", icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/noraiz-rana-291277344/" },
  { label: "GitHub",   icon: IconBrandGithub,   href: "https://github.com/noraizrana" },
  { label: "WhatsApp", icon: IconBrandWhatsapp,  href: "https://wa.me/+923495880361" },
]
