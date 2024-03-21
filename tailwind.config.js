/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1400px",
      "xs": "450px",
      "sm": "640px",
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px'
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
        "sm": "768px"
      },
    },
    extend: {
      backgroundImage: {
        'cipher-background': "url('https://images.unsplash.com/photo-1515879218367-8466d910aaa4')",
        'torsion-background': "url('https://images.unsplash.com/photo-1595787142842-7404bc60470d')",
        'venture-background': "url('https://images.unsplash.com/photo-1444653614773-995cb1ef9efa')",
        'rovisp-background': "url('https://images.unsplash.com/photo-1517420704952-d9f39e95b43e')",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require('@tailwindcss/typography')],
}