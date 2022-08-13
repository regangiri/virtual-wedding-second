const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6D6855",
        secondary: "#E2B99D",
        accent: "#B19780",
        palewhite: "#F6F6F6",
        choco: "#7C8996",
        button: "#fff",
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
        serif: ["Lora", ...defaultTheme.fontFamily.serif],
        typography: ["Dancing Script"],
        satisfy: ["Satisfy, cursive"],
        vibes: ["'Great Vibes', cursive"],
      },
    },
  },
  plugins: [],
};
