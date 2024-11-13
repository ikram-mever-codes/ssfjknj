import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        button: "#319FD4",
        buttonSecondary: "#4285F4",
        buttonHover: "#2678A6",
        primary: "#102634",
        active: "#006FBA",
        activeHover: "#3367D6",
        hoverPrimary: "#1a3e5b",
        background: "#E5E9F0",
        text: "#333333",
        selected: "#F0F1F1",
        text2: "#65676B",
        white: "#FFFFFF",
        gentleBorder: "#CCD6DD",
      },
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        brand: ["Nova Square", "sans-serif"],
        secondary: ["Dm Sans", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "5px",
        sm: "4px",
        lg: "8px",
      },
      borderWidth: {
        gentle: "1px",
        normal: "2px",
      },
      padding: {
        standard: "10px",
        general: "20px",
      },
      spacing: {
        "5px": "5px",
        "10px": "10px",
        "15px": "15px",
        "25px": "25px",
        "30px": "30px",
      },
      boxShadow: {
        light: "0px 1px 2px rgba(0, 0, 0, 0.1)",
        DEFAULT: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        heavy: "0px 0px 7px rgba(0, 0, 0, 0.2)",
      },
      borderColor: {
        gentle: "#CCD6DD",
        primary: "#102634",
      },
    },
  },
  plugins: [],
};

export default config;
