/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        parchment: {
          50:  '#FAFAF8',
          100: '#F4F2EE',
          200: '#E8E5DF',
          300: '#D6D1C8',
        },
        ink: {
          900: '#1A1714',
          700: '#3D3830',
          500: '#6B6560',
          300: '#A8A29C',
        },
        forest: {
          900: '#1E3A2F',
          700: '#2D5444',
          100: '#E8F0EB',
          50:  '#F2F7F4',
        },
      },
      fontFamily: {
        display: ['Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '7xl': ['4.5rem', { lineHeight: '1.05', letterSpacing: '-0.02em' }],
        '6xl': ['3.75rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        '5xl': ['3rem',    { lineHeight: '1.1',  letterSpacing: '-0.015em' }],
        '4xl': ['2.25rem', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        prose:    '68ch',
        readable: '75ch',
        content:  '1100px',
      },
      spacing: {
        section: '7rem',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color:      theme('colors.ink.700'),
            lineHeight: '1.8',
            fontFamily: theme('fontFamily.body').join(', '),
            h1: { fontFamily: theme('fontFamily.display').join(', '), color: theme('colors.ink.900') },
            h2: { fontFamily: theme('fontFamily.display').join(', '), color: theme('colors.ink.900') },
            h3: { fontFamily: theme('fontFamily.display').join(', '), color: theme('colors.ink.900') },
            a:  { color: theme('colors.forest.900'), textDecoration: 'underline', textDecorationColor: theme('colors.forest.100') },
            'a:hover': { textDecorationColor: theme('colors.forest.700') },
            blockquote: { borderLeftColor: theme('colors.forest.900'), color: theme('colors.ink.700') },
          },
        },
      }),
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
