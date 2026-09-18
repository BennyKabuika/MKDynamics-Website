import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: { DEFAULT: 'var(--paper)', 2: 'var(--paper-2)' },
        ink: { DEFAULT: 'var(--ink)', 2: 'var(--ink-2)' },
        line: { DEFAULT: 'var(--line)', navy: 'var(--line-navy)' },
        night: 'var(--night)',
        navy: { DEFAULT: 'var(--navy)', 2: 'var(--navy-2)' },
        'on-navy': { DEFAULT: 'var(--on-navy)', 2: 'var(--on-navy-2)' },
        gold: { DEFAULT: 'var(--gold)', 2: 'var(--gold-2)', ink: 'var(--gold-ink)' },
        success: 'var(--success)',
        danger: 'var(--danger)',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-display)', 'var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.165, 0.84, 0.44, 1)',
        'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
        'in-out-cubic': 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      letterSpacing: {
        display: '-0.03em',
      },
    },
  },
  plugins: [],
};
export default config;
