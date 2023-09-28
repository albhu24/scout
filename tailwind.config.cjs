module.exports = {
  content: ["./client/**/*.{js,jsx}", "./client/**/*.html"],
  theme: {
    extend: {
      colors: {
        primary: "#1B73E8",
      },
    },
  },
  plugins: [require("daisyui")],
};
