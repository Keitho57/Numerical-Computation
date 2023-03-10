module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    // Ensure these match with .storybook/preview.js
    screens: {
      xs: '375px',
      sm: '600px',
      md: '900px',
      lg: '1200px',
      xl: '1536px',
    },
    colors: {
      background: '#3AAFA9',
      button: '#17252A',
      accent: '#2B7A78',
      primary: '#FEFFFF',
      secondary: '#DEF2F1',
      red: '#FF0000',
    },
  },
  plugins: [],
};
