import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px' },
    extend: {
      colors: {
        bg: 'var(--bg)', elevated: 'var(--bg-elevated)', border: 'var(--border)',
        primary: 'var(--text-primary)', secondary: 'var(--text-secondary)',
        accent: 'var(--accent)', 'accent-strong': 'var(--accent-strong)',
        'accent-contrast': 'var(--accent-contrast)', glow: 'var(--glow)',
      },
      fontFamily: { display: ['Space Grotesk', 'sans-serif'], body: ['Inter', 'sans-serif'], mono: ['JetBrains Mono', 'monospace'] },
      maxWidth: { content: '1120px' },
      transitionTimingFunction: { editorial: 'cubic-bezier(0.22, 1, 0.36, 1)' },
    },
  },
  plugins: [],
} satisfies Config
