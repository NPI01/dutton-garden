import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        garden: {
          // Theme colors (switches via theme toggle)
          // Wild: neon colors, Elegant: pastels
          cream: '#E5E5E5', // Light for wild, changes to #FBF7F0 in elegant
          moss: '#00D9A3', // Electric turquoise (wild) / #7A9B76 (elegant)
          violet: '#B645D6', // Neon purple (wild) / #9B7BA3 (elegant)
          coral: '#FF6B9D', // Hot pink (wild) / #F4A6A3 (elegant)
          earth: '#FFB627', // Bright yellow (wild) / #8B7355 (elegant)
          midnight: '#0A0A0F', // Black (wild) / #2C3E50 (elegant)
          lime: '#C6FF00', // Wild only
          cyan: '#00E5FF', // Wild only
          magenta: '#FF00E5', // Wild only
          orange: '#FF6B00', // Wild only
        },
        // Elegant theme (preserved for easy switching)
        elegant: {
          cream: '#FBF7F0',
          moss: '#7A9B76',
          violet: '#9B7BA3',
          coral: '#F4A6A3',
          earth: '#8B7355',
          midnight: '#2C3E50',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        brush: ['Homemade Apple', 'cursive'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;

