/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      primary: ["var(--font-roboto-condensed)", "sans-serif"],
      secondary: ["var(--font-montserrat)", "sans-serif"],
      tertiary: ["var(--font-anton)", "sans-serif"],
      quaternary: ["var(--font-nunito)", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#007ddf", 
        secondary: "#1f2b76",
      },
    },
  },
  plugins: [],
};
