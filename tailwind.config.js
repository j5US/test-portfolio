/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // or any other HTML files you're using
    "./src/**/*.{js,jsx,ts,tsx}" // Make sure to include your React files
  ],
  theme: {
    extend: {
      colors: {
        background: "rgba(var(--background))",
        "blog-outline": "rgba(var(--blog-outline))",
        "project-outline": "rgba(var(--project-outline))",
        "link-border": "rgba(var(--link-border))",
        "nav-background": "rgba(var(--nav-background))",
        "nav-border": "rgba(var(--nav-border))",
        "active-tab": "rgba(var(--active-tab))",
        "close-btn-bg": "rgba(var(--close-btn-bg))",
        "close-btn-edge": "rgba(var(--close-btn-edge))",
        "slider-tile": "rgba(var(--slider-tile))",
      },
    },
    screens: {
      'sm': '375px',
      'md': '800px',
      'lg': '1200px',
    },
  },
  plugins: [],
}