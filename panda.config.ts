import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      // tokens: {
      //   colors: {
      //     foreground: { value: "#2C2C2C" },
      //   },
      // },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
