import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('../..//public/hero-image.jpeg')",
      },
      colors: {
        'primary': '#385AC7',
        'secondary': '#7585B8',
      }
    },
  },
  plugins: [],
}
export default config
