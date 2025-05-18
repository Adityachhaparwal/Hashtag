/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          900: '#0A1929',
          800: '#0F2942',
          700: '#153E5C',
        },
        charcoal: {
          900: '#1E293B',
          800: '#334155',
          700: '#475569',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Merriweather', 'Georgia', 'serif'],
      },
      boxShadow: {
        'inner-light': 'inset 0 2px 4px 0 rgba(255, 255, 255, 0.05)',
      },
      animation: {
        fadeIn: 'fadeIn 0.5s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};