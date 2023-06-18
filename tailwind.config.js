/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('./images/pattern-bg-desktop.png')",
        "hero-pattern-mobile": "url('./images/pattern-bg-mobile.png')",
      },
    },
    colors: {
      "very-dark-gray": "hsl(0, 0%, 17%)",
      "dark-gray": "hsl(0, 0%, 59%)",
    },
  },
  plugins: [],
};
