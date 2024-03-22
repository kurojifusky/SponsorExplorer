import type { Config } from "tailwindcss"
import typographyPlugin from "@tailwindcss/typography"

export default {
  darkMode: "class",
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        sb: {
          sponsor: "var(--sb-sponsor)",
          selfpromo: "var(--sb-selfpromo)",
          "exclusive-access": "var(--sb-exclusive-access)",
          interaction: "var(--sb-interaction)",
          highlight: "var(--sb-highlight)",
          intermission: "var(--sb-intermission)",
          endcards: "var(--sb-endcards)",
          preview: "var(--sb-preview)",
          filler: "var(--sb-filler)",
          "non-music": "var(--sb-non-music)"
        }
      }
    }
  },
  plugins: [typographyPlugin]
} satisfies Config