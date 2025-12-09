/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "brand-blue": "#1E3A8A",
        "brand-cyan": "#06B6D4",
        "brand-sand": "#F3F4F6",
      },
    },
  },
  plugins: [],
};

