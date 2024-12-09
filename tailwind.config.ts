import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Dark background for dark mode
        background: "#101010", // #0a0a0a as default
        // Bright green foreground for primary elements
        foreground: "#a6f000", // #a6f000 as default
        card: {
          DEFAULT: "#1e1e1e", // #101010 for cards (card background)
          foreground: "#ffffff", // White for text on cards
        },
        primary: {
          DEFAULT: "#88e000", // Matches #a6f000 (primary button color)
          foreground: "#0a0a0a", // Black text on green
        },
        muted: {
          DEFAULT: "#262626", // Slightly lighter for contrast (muted elements)
          foreground: "#b3b3b3", // Subtle gray text
        },
        border: "#333333", // Borders slightly lighter than #101010
        ring: "#88e000", // Slightly lighter green for hover focus rings
      },
      borderRadius: {
        lg: "0.5rem",
        md: "calc(0.5rem - 2px)",
        sm: "calc(0.5rem - 4px)",
      },
      backgroundImage: {
        'gradient-to-r': 'linear-gradient(to right, #0a0a0a, #88e000)', // Gradient background
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
