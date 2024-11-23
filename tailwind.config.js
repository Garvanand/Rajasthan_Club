const plugin = require('tailwindcss/plugin');

const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  });
});

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        sandReveal: {
          '0%': {
            'background-image': 'linear-gradient(to right, #FFD700, #F4A460)',
            'background-clip': 'text',
            '-webkit-background-clip': 'text',
            color: 'transparent',
          },
          '100%': {
            'background-image': 'none',
            color: '#8B4513',
          },
        },
        glow: {
          '0%': {
            'text-shadow': '0 0 5px #FFD700, 0 0 10px #FFD700',
          },
          '50%': {
            'text-shadow': '0 0 20px #FFD700, 0 0 30px #F4A460',
          },
          '100%': {
            'text-shadow': '0 0 5px #FFD700, 0 0 10px #FFD700',
          },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' },
        },
        pulseSlow: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0.5 },
          '100%': { opacity: 1 },
        },
      },
      animation: {
        sandReveal: 'sandReveal 3s ease forwards',
        glow: 'glow 2s infinite alternate',
        typing: 'typing 4s steps(30, end) forwards',
        pulseSlow: 'pulseSlow 5s cubic-bezier(0.4, 0.2, 0.6, 1) infinite',
      },
    },
  },
  plugins: [rotateY],
};
