// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        flow: {
          from: { strokeDashoffset: "0" },
          to: { strokeDashoffset: "-300" },
        },
      },
      animation: {
        flow: "flow 6s linear infinite",
      },
    },
  },
  plugins: [],
};
