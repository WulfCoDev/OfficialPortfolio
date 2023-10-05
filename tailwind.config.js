module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      primary: 'Roboto',
      secondary: 'Dela Gothic One',
      tertiary: 'Pixelify Sans',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
      },
      backgroundImage: {
        site: "url('https://xmple.com/wallpaper/black-blue-gradient-linear-3840x2160-c2-000000-0000cd-a-105-f-14.svg')",
        about: "url('../src/assets/me.png')",
        skills: "url('../src/assets/react.png')",
      },
    },
  },
  plugins: [],
};