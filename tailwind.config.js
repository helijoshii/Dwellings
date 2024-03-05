/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    screens: {
      xxs: "380px",
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1600px",
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1200px",
      },
    },
    // extend: {},
    extend: {
      fontFamily: {
        "Poppins": "Poppins",
        "bebas": "'Bebas Neue'",
        "Jakarta": "'Plus Jakarta Sans'",
      },
      colors: {
        white: "#fff",
        text: "#1e1c1a",
        blue: "#6637EE",
        orange: "#FD5D11",
        gray: {
          "100": "#fffdf9",
          "200": "rgba(255, 255, 255, 0.7)",
          "300": "rgba(255, 253, 249, 0.7)",
          "400": "rgba(255, 253, 249, 0.3)",
          "500": "rgba(255, 253, 249, 0.6)",
          "600": "rgba(255, 255, 255, 0.3)",
        },
        "p-text": "#504c48",
        "bg-color": "#fff0e3",
        "primary-color": "#d99655",
        dimgray: "rgba(80, 76, 72, 0.7)",
      },
      backgroundImage:
        {
          'videoBg': "url('../assets/img/Images.png')"
          
        },
      },
  },
  plugins: [],
};
