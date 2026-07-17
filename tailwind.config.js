/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#08080a',
          900: '#0c0c0f',
          850: '#101013',
          800: '#141418',
          750: '#1a1a1f',
          700: '#222229',
          600: '#2c2c35',
          500: '#3a3a45',
        },
        gold: {
          50: '#fbf6e9',
          100: '#f6ecc6',
          200: '#efd98a',
          300: '#e8c456',
          400: '#d8af3a',
          500: '#c29a2e',
          600: '#a87f24',
          700: '#83631f',
          800: '#5e4717',
          900: '#3d2d10',
        },
        wine: {
          50: '#fbe9ea',
          100: '#f2c4c6',
          200: '#e29396',
          300: '#cf5e63',
          400: '#b23a40',
          500: '#8f2a30',
          600: '#74222a',
          700: '#5b1a22',
          800: '#43131b',
          900: '#2c0c12',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(208,175,58,0.18), 0 18px 60px -20px rgba(208,175,58,0.28)',
        'glow-wine': '0 0 0 1px rgba(178,58,64,0.22), 0 18px 60px -20px rgba(178,58,64,0.35)',
        card: '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 24px 60px -32px rgba(0,0,0,0.8)',
      },
      backgroundImage: {
        'grid-faint':
          'linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)',
        'radial-gold':
          'radial-gradient(60% 60% at 50% 0%, rgba(208,175,58,0.14), transparent 70%)',
        'radial-wine':
          'radial-gradient(50% 50% at 80% 20%, rgba(178,58,64,0.16), transparent 70%)',
      },
      keyframes: {
        floaty: {
          '0%,100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%,100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        drawLine: {
          '0%': { strokeDashoffset: '1200' },
          '100%': { strokeDashoffset: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        floaty: 'floaty 6s ease-in-out infinite',
        ticker: 'ticker 40s linear infinite',
        pulseGlow: 'pulseGlow 4s ease-in-out infinite',
        drawLine: 'drawLine 3s ease-out forwards',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
};
