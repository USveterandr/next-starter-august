/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        primary: 'var(--primary)',
        secondary: 'var(--secondary)',
        gold: {
          DEFAULT: 'var(--gold)',
          light: 'var(--gold-light)',
          medium: 'var(--gold-medium)',
          dark: 'var(--gold-dark)',
        },
        'luxury-blue': 'var(--luxury-blue)',
        'luxury-navy': 'var(--luxury-navy)',
        'luxury-charcoal': 'var(--luxury-charcoal)',
        'accent-green': 'var(--accent-green)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        playfair: ['Playfair Display', 'serif'],
      },
    },
  },
  plugins: [],
}
