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
        'hero-pattern': "url('../../public/hero-image.jpeg')",
        'first-card': "url('../../public/virus-removal.jpeg')",
        'second-card': "url('../../public/hardware-repair.jpeg')",
        'third-card': "url('../../public/data-recovery.jpeg')",
      },
      colors: {
        'primary': '#385AC7',
        'secondary': '#7585B8',
      }
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.items-normal': {
          alignItems: 'normal',
        },
      };

      addUtilities(newUtilities, ['responsive', 'hover']);
    },
  ],
}
export default config
