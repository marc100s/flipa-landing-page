const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter Variable", ...defaultTheme.fontFamily.sans],
        primary: ["Stencil", ...defaultTheme.fontFamily.sans],
        secondary: ["Caveat", "cursive"],
      },
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        text: {
          light: "var(--color-text-light)",  
          dark: "var(--color-text-dark)",    
          default: "var(--color-text-light)", // Default for text-default
        },
      },
      backgroundColor: {
        default: "var(--color-background)",
        offset: "var(--color-background-offset)",
      },
      borderColor: {
        default: "var(--color-border)",
      },
    },
  },
  corePlugins: {
    fontSize: false, // Custom fonts, sizes handled manually or with fluid type plugin
  },
  plugins: [require("tailwindcss-fluid-type")],
  output: './dist/output.css',
};