/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: 'var(--bg-paper)',
        surface: 'var(--bg-surface)',
        ink: 'var(--text-ink)',
        muted: 'var(--text-muted)',
        rule: 'var(--border-rule)',
        cobalt: 'var(--accent-cobalt)',
        signal: 'var(--accent-signal)',
      },
      fontFamily: {
        serif: ['"Instrument Serif"', '"Noto Serif SC"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"Noto Sans SC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
    },
  },
  plugins: [],
};
