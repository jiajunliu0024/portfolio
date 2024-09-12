/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "grid-pattern":
          "linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 0), linear-gradient(to bottom, rgba(0,0,0,0.3) 1px, transparent 0)",
      },
      transformOrigin: {
        "100-0-0": "100% 0 0",
      },
    },
  },
  plugins: [],
};

// module.exports = {
//   theme: {
//     extend: {
//       backgroundSize: {
//         "60px": "60px 60px",
//       },
//       margin: {
//         "-50p": "-50%",
//       },

//       width: {
//         "200vw": "200vw",
//       },
//       backgroundImage: {
//         "grid-pattern":
//           "linear-gradient(to right, rgba(0,0,0,0.3) 1px, transparent 0), linear-gradient(to bottom, rgba(0,0,0,0.3) 1px, transparent 0)",
//       },
//     },
//   },
//   plugins: [],
// };
