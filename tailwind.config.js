/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    enabled: process.env.NODE_ENV === "publish",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
