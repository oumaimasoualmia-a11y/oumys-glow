import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette from Oumy's Glow logo
        cream: {
          50: '#fdf9f5',
          100: '#faf3ea',
          200: '#f5e7d4',
          DEFAULT: '#F8F2EC',
        },
        rose: {
          blush: '#E8C4B8',
          powder: '#D4A5A0',
          deep: '#C47E7A',
          light: '#F2D9D5',
        },
        gold: {
          light: '#F0D5A0',
          DEFAULT: '#C9A96E',
          dark: '#A8813C',
          rich: '#B8945A',
        },
        mocha: {
          light: '#6B4C3B',
          DEFAULT: '#4A2C2A',
          dark: '#3D1F1E',
        },
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        script: ['var(--font-dancing)', 'cursive'],
      },
      backgroundImage: {
        'gold-gradient': 'linear-gradient(135deg, #C9A96E 0%, #F0D5A0 50%, #C9A96E 100%)',
        'cream-gradient': 'linear-gradient(180deg, #fdf9f5 0%, #F8F2EC 100%)',
        'rose-gradient': 'linear-gradient(135deg, #F2D9D5 0%, #E8C4B8 100%)',
      },
      boxShadow: {
        'gold': '0 4px 20px rgba(201, 169, 110, 0.25)',
        'gold-lg': '0 8px 40px rgba(201, 169, 110, 0.35)',
        'soft': '0 2px 15px rgba(0, 0, 0, 0.06)',
        'card': '0 4px 24px rgba(74, 44, 42, 0.08)',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
