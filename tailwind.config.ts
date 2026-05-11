import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#05070a',
        graphite: '#11151c',
        panel: '#171c25',
        lime: '#a3ff12',
        cyan: '#21d4fd',
        ember: '#ff7a1a',
        rose: '#ff3d71'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif']
      },
      boxShadow: {
        glow: '0 24px 80px rgba(163, 255, 18, 0.18)',
        cyan: '0 18px 60px rgba(33, 212, 253, 0.18)'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' }
        },
        swipe: {
          '0%, 100%': { transform: 'rotate(-3deg) translateX(0)' },
          '50%': { transform: 'rotate(4deg) translateX(12px)' }
        },
        pulseBadge: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.04)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        swipe: 'swipe 5s ease-in-out infinite',
        pulseBadge: 'pulseBadge 2.8s ease-in-out infinite'
      }
    }
  },
  plugins: []
} satisfies Config;
