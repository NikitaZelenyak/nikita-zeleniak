import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      transitionTimingFunction: {
        "bg-blink": "cubic-bezier(0.2, 0.8, 0.2, 1);",
        "bg-smooth": "cubic-bezier(0.25, 0.1, 0.25, 1)",
        "scale-bouncy": "cubic-bezier(0.68, -0.55, 0.27, 1.55)",
        "opacity-smooth": "cubic-bezier(0.42, 0, 0.58, 1)",
      },

      colors: {
        WhiteColor: {
          DEFAULT: "rgb(250, 240, 240)",
        },
        BodyColor: {
          DEFAULT: " rgb(249, 249, 249)",
        },
        MainColor: {
          DEFAULT: "rgb(8, 89, 252)",
        },
        HoverMainColor: {
          DEFAULT: "rgb(10, 70, 191)",
        },
        AccentColor: {
          DEFAULT: "rgb(227, 150, 18)",
        },

        // Brand Colors
        HTML5: "#E34F26",
        CSS: "#1572B6",
        JavaScript: "#F7DF1E",
        TypeScript: "#3178C6",
        React: "#61DAFB",
        NextJS: "#000000",
        Redux: "#764ABC",
        Tailwind: "#38B2AC",
        RTKQuery: "#764ABC", // Same as Redux
        StyledComponents: "#DB7093",
        NodeJS: "#339933",
        MongoDB: "#47A248",
        RESTAPI: "#E44D27",
        Sitecore: "#D52B1E",
        Formik: "#FF7F50",

        // Social Media Colors
        Facebook: "#1877F2",
        Twitter: "#1DA1F2",
        Instagram: "#E4405F",
        LinkedIn: "#0077B5",
        YouTube: "#FF0000",
        GitHub: "#181717",
        WhatsApp: "#25D366",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [require("@xpd/tailwind-3dtransforms")],
};
export default config;
