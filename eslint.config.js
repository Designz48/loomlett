// eslint.config.js
import js from "@eslint/js"
import globals from "globals"
import { defineConfig } from "eslint/config"

/**
 * Minimal ESLint configuration for a Vite + React (plain‑JS) project.
 *
 * • Core JS rules via @eslint/js
 * • React linting via the classic "plugin:react/recommended" preset
 * • Prettier integration (eslint-config-prettier + eslint-plugin-prettier)
 * • Browser globals
 */
export default defineConfig({
  // Files this config applies to
  files: ["**/*.{js,mjs,cjs,jsx}"],

  // Global variables (window, document, etc.)
  languageOptions: {
    globals: globals.browser,
  },

  // Extend the recommended rule sets (classic style)
  extends: [
    "eslint:recommended",          // core ESLint rules
    "plugin:react/recommended",    // React‑specific rules
    "plugin:prettier/recommended" // Run Prettier as an ESLint rule & disable conflicts
  ],

  // Project‑specific rule tweaks
  rules: {
    // Vite + React 18 auto‑imports React, so we don’t need the old pragma rule
    "react/react-in-jsx-scope": "off",

    // Enforce Prettier formatting as an ESLint error
    "prettier/prettier": ["error"],

    // Allow console statements but warn about them
    "no-console": "warn",
  },
})
