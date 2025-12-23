/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './app.vue',
  ],
  theme: {
    container: {
      center: true,
      padding: '15px',
      screens: {
        DEFAULT: '768px',
      },
    },
    extend: {
      colors: {
        accent: {
          DEFAULT: '#2563eb',
          light: '#3b82f6',
        },
        primary: '#1f2937',
        muted: '#6b7280',
        bg: {
          DEFAULT: '#ffffff',
          card: '#f9fafb',
        },
        border: '#e5e7eb',
      },
      spacing: {
        xs: '8px',
        sm: '16px',
        md: '24px',
        lg: '32px',
        xl: '48px',
        '2xl': '64px',
        '3xl': '96px',
      },
    },
  },
  plugins: [],
}
