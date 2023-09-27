/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "../../packages/ui-components/**/*.{js,ts,jsx,tsx}",
    "../../apps/**/src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/**/src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../apps/**/src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
};
