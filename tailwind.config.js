// tailwind.config.js
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}", // Add any other paths as needed
  ],
  theme: {
    extend: {
      fontFamily: {
        monter: ["Montserrat", "sans-serif"], // Use Inter for the default sans font
      },
    },
  },
  plugins: [],
};
