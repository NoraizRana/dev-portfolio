import type { Config } from "tailwindcss"

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        surface: {
          1: "#111111",
          2: "#1a1a1a",
        },
        neon: {
          green: "#39ff14",
          pink: "#ff2d78",
          yellow: "#ffd60a",
        },
        text: {
          white: "#ffffff",
          off: "#e5e5e5",
          muted: "#666666",
        },
        line: {
          DEFAULT: "#222222",
          accent: "rgba(57,255,20,0.3)",
        },
      },
      fontFamily: {
        display: ["Anton", "Impact", "sans-serif"],
        condensed: ["'Barlow Condensed'", "sans-serif"],
        sans: ["'IBM Plex Sans'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "monospace"],
        serif: ["Fraunces", "Georgia", "serif"],
      },
      borderRadius: {
        none: "0",
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        "marquee-reverse": {
          from: { transform: "translateX(-50%)" },
          to: { transform: "translateX(0)" },
        },
      },
      animation: {
        blink: "blink 1s step-end infinite",
        marquee: "marquee 20s linear infinite",
        "marquee-reverse": "marquee-reverse 20s linear infinite",
      },
    },
  },
  plugins: [],
} satisfies Config
