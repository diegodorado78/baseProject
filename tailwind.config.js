/* eslint-disable no-undef */
const { nextui } = require("@nextui-org/react");
const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "Satoshi-Bold": ["Satoshi Bold"],
        "Satoshi-Italic": ["Satoshi Italic"],
        "Satoshi-Light": ["Satoshi Light"],
        "Satoshi-Medium": ["Satoshi Medium"],
        "Satoshi-Regular": ["Satoshi Regular"],
      },
      colors: {
        "main-color": "#A1A1A1",
        "second-color": "#D9D9D9",
        "main-bg": "#EDF1F0",
        "second-bg": "#F0F2F5",
        "success-color": "#3BC357",
        "danger-color": "#F94D54",
        "info-color": "#F6B822",
      },
      screens: {
        xs: "390px",
        ...defaultTheme.screens,
      },
    },
  },

  darkMode: "class",
  plugins: [
    nextui(),
    function ({ addUtilities }) {
      const customUtilities = {
        ".xs-width": {
          width: "calc(100vw - 32px)",
        },
        ".sm-width": {
          width: "563px",
        },
        ".md-width": {
          width: "675px",
        },
        ".lg-width": {
          width: "901px",
        },
        ".xl-width": {
          width: "1126px",
        },
      };

      addUtilities(customUtilities);
    },
  ],
};
