/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#0b1020",
        panel: "#111a32",
        brand: "#7c3aed",
        accent: "#06b6d4",
      },
      fontFamily: {
        heading: ['"Sora"', "sans-serif"],
        body: ['"Inter"', "sans-serif"],
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(124,58,237,0.2), 0 20px 40px rgba(2,6,23,0.55)",
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at 20% 20%, rgba(124,58,237,0.35), transparent 48%), radial-gradient(circle at 80% 10%, rgba(6,182,212,0.25), transparent 45%)",
      },
    },
  },
  plugins: [],
}
