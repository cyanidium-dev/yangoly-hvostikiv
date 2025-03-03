import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/modules/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/shared/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        tabxl: "1101px",
        xl: "1366px",
        laptop: "1512px",
        desk: "1920px",
      },
      colors: {
        dark: {
          DEFAULT: "#140A01",
        },
        primary: {
          white: {
            DEFAULT: "#F8F7F7",
            hover: "#E8E7EF",
            active: "#D8D7DF",
          },
          black: {
            DEFAULT: "#262827",
            hover: "#363837",
            active: "#464847",
          },
          orange: {
            DEFAULT: "#FF9332",
            hover: "#FF8322",
            active: "#FF7312",
          },
          gray: {
            DEFAULT: "#797979",
            "100": "#F8F7F7",
            hover: "#898989",
            active: "#999999",
          },
          green: {
            DEFAULT: "#34AD5D",
          },
        },
        background: {
          gray: {
            DEFAULT: "#F8F7F7",
          },
        },
      },
      fontFamily: {
        raleway: ["var(--font-raleway)", "serif"],
        arial: ["Arial Black", "serif"],
      },
      animation: {
        marquee: "marquee 40s linear infinite",
        marquee2: "marquee2 40s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      boxShadow: {
        blogCard: "0px 4px 24px 3px rgba(104, 104, 104, 0.12)",
      },
    },
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};
export default config;
