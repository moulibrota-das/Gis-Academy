/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        darkGreen: "var(--color-dark-green)",
        green: "var(--color-green)",
        offWhite: "var(--color-off-white)",
        lightYellow: "var(--color-light-yellow)",
        beige: "var(--color-beige)",
        oliveGreen: "var(--color-olive-green)",
        mossGreen: "var(--color-moss-green)",
        forestGreen: "var(--color-forest-green)",
        deepGreen: "var(--color-deep-green)",
      },
      fontFamily: {
        heading: ["var(--font-heading)"],
        body: ["var(--font-body)"],
        montserrat: ["Montserrat", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      aspectRatio: {
        "4/3": "4/3",
      },
    },
  },
  plugins: [],
};
