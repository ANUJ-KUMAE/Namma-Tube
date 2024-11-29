// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 15s linear infinite", // Define the scroll animation with duration and type
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" }, // Start position (from the left)
          "100%": { transform: "translateX(-100%)" }, // End position (shifted to the left)
        },
      },
    },
  },
  plugins: [],
};
