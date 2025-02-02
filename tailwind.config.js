/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        seconday: "var(--secondary)",
        tertiary: "var(--tertiary)",
        neutral: "var(--neutral)",
        neutral_variant: "var(--neutral_variant)",
        primary: "var(--primary)",
        border: "#BFC1FF",
        buttonSt: "#BFC1FFB2",
        buttonEnd: "#F9B1DC12",
        searchBase: "#ADBCFF3D",
        searchBack: "#FFFFFF12",
        searchFont: "#98A1C0",
        searchBackground: "#8C9199",
        homeColor: "#E1E2E9",
        homesubfont: "#C2C7CF",
      },
      screens: {
        "2xl": "1440px",
        "lg.5": "1175",
        "sm-landscape": {
          raw: `(max-width:700px) and (orientation:landscape)`,
        },
      },
      fontSize: {
        "22x": "22px",
        "4.5xl": "45px",
        "5.5xl": "57px",
        "3.5xl": "32px",
        xs: "12px",
        "2.5xl": "28px",
        "1.5xl": "22px",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-radial-t":
          "radial-gradient(circle at top,var(--tw-gradient-stops))",
        "gradient-radial-tl":
          "radial-gradient(circle at top left,var(--tw-gradient-stops))",
        "gradient-radial-b":
          "radial-gradient(circle at bottom left,var(--tw-gradient-stops))",
        "gradient-radial-br":
          "radial-gradient(circle at bottom right,var(--tw-gradient-stops))",
        "gradient-radial-l":
          "radial-gradient(circle at left,var(--tw-gradient-stops))",
        "gradient-radial-br":
          "radial-gradient(circle at bottom right,var(--tw-gradient-stops))",
        "gradient-radial-tr":
          "radial-gradient(circle at top right,var(--tw-gradient-stops))",
        "gradient-radial-r":
          "radial-gradient(circle at right,var(--tw-gradient-stops))",
      },
      borderWidth: {
        1: "1px",
      },
      width: {
        88: "350px",
        90: "370px",
        custom: "calc(100%-2rem)",
        "custom-half": "calc((100% - 2rem) / 2)",
        78: "296px",
      },
      height: {
        85: "350px",
        88: "360px",
        90: "370px",
        92: "400px",
        100: "420px",
      },
      fontFamily: {
        roboto: ["Roboto", "sans-serif"],
        opensans: ["OpenSans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
