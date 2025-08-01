// mi-monorepo/tailwind.config.js
module.exports = {
  content: [
    './packages/website/**/*.{js,ts,jsx,tsx,html}',
    './packages/website/src/**/*.{js,ts,jsx,tsx,html}',
    './packages/ui/**/*.{js,ts,jsx,tsx,html}',
    './packages/ui/src/**/*.{js,ts,jsx,tsx,html}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};