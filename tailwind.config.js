/** @type {import('tailwindcss').Config} */
module.exports = {
  // Specify files to scan for class names
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  // Customize default theme
  theme: {
    extend: {}, // Add custom theme extensions here
  },
  // Add Tailwind plugins
  plugins: [],
}

