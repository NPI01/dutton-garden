import type { Config } from "tailwindcss";

/**
 * Dandyland design tokens.
 *
 * The palette is drawn from Dan Dutton's actual place — the clay-pink
 * stucco and butter-yellow trim of the studio, the green metal roof,
 * fieldstone paths, moss, winter bark, faded Kentucky sky — and the
 * flower reds/yellows/blues/pinks of the paintings, used only as accents.
 *
 * Nothing here is neon. Backgrounds live in soil, paper, and clay; the
 * paintings supply the loud color.
 */
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Grounds & darks
        soil: "#241a12", // deep worked earth
        loam: "#3a2c1e", // tilled brown
        bark: "#5a4632", // tree bark / tobacco
        tobacco: "#7a5c3c",
        aged: "#171310", // aged black, for theatrical grounds

        // Papers & creams
        cream: "#f4ead4", // warm cream
        paper: "#e9dcbf", // faded paper
        parchment: "#dfcfa8",
        chalk: "#f8f2e4",

        // Clay & walls (the studio exterior)
        clay: "#c9825f", // salmon stucco
        terracotta: "#b25a3b",
        rust: "#9a4a2c",
        ochre: "#c98a3e",

        // Greens (roof, moss, leaves, woods)
        moss: "#6e7b4a",
        leaf: "#4c6b3a",
        pine: "#2c3a26",
        verdigris: "#5c7a68", // oxidized copper
        sage: "#9aa079",

        // Sky & stone
        sky: "#a7c0cd", // faded winter sky
        stone: "#9c968a",
        slate: "#5f6b6b",

        // Flower accents — from the paintings, used sparingly
        bloomred: "#c1362f",
        bloomgold: "#e0a72e",
        bloomblue: "#3e6b8c",
        bloompink: "#d5789b",
        bloomviolet: "#7b5aa0",
      },
      fontFamily: {
        // Display: the supplied Vank face, via CSS variable from next/font
        display: ["var(--font-vank)", "Georgia", "serif"],
        // Body: literary serif
        serif: ["var(--font-spectral)", "Georgia", "serif"],
        // Handwritten annotations
        hand: ["var(--font-caveat)", "cursive"],
      },
      letterSpacing: {
        label: "0.28em",
      },
      boxShadow: {
        frame: "0 2px 2px rgba(23,19,16,0.2), 0 12px 40px -12px rgba(23,19,16,0.55)",
        lift: "0 20px 60px -20px rgba(23,19,16,0.7)",
      },
      transitionTimingFunction: {
        curtain: "cubic-bezier(0.16, 1, 0.3, 1)",
        soil: "cubic-bezier(0.43, 0.13, 0.23, 0.96)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(1.2rem)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "slow-drift": {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
      animation: {
        "fade-up": "fade-up 1s cubic-bezier(0.16,1,0.3,1) both",
        "slow-drift": "slow-drift 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
