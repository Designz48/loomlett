/** @type {import('tailwindcss').Config} */
module.exports = {
  // -----------------------------------------------------------------
  // 1️⃣ Files Tailwind should scan
  // -----------------------------------------------------------------
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  // -----------------------------------------------------------------
  // 2️⃣ Theme extensions (brand colors & typography)
  // -----------------------------------------------------------------
  theme: {
    extend: {
      colors: {
        // Medium pink / salmon
        primary: "#FF6F91",

        // Optional soft accent
        accent: "#FFE5E9",
      },
      fontFamily: {
        // Bouncy sans‑serif (Poppins from Google Fonts)
        sans: ["Poppins", "system-ui", "sans-serif"],
      },
    },
  },

  // -----------------------------------------------------------------
  // 3️⃣ Plugins
  // -----------------------------------------------------------------
  // No plugins needed for line‑clamp in Tailwind v3.3+; the utilities
  // are available out‑of‑the‑box (e.g., `line-clamp-3`).
  plugins: [],
};
