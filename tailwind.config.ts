import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-100%)' },
        },
        scaleIn: {
          '0%': { transform: 'scale(4)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeOut: {
          '0%': { opacity: '1' },
          '100%': { opacity: '0' },
        },
      },
      animation: {
        'scale-in': 'scaleIn 0.95s ease-out forwards',
        'fade-out': 'fadeOut 1s ease-out forwards',
        'infinite-scroll': 'infinite-scroll 25s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};
export default config;
