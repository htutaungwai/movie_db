module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {},
    fontFamily: {
      body: ["Poppins", "ui-sans-serif"],
    },
  },
  plugins: [require("daisyui")],
};
