/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        scroll: "scroll 5s linear infinite  ",
        scrollHorizontal: "scrollHorizontal 10s linear infinite",
        scrollHorizontal12s: "scrollHorizontal 12s linear infinite",
        scrollHorizontal15s: "scrollHorizontal 15s linear infinite",
        "slide-in-up": "slide-in-up 0.5s forwards",
        "slide-out-down": "slide-out-down 0.5s forwards",
        "fade-out-up": "fadeOutUp 0.3s forwards",
        "fade-in-up": "fadeInUp 0.3s forwards",
        "fade-out-up-reverse": "fadeOutUpReverse 0.3s forwards",
        "fade-in-up-reverse": "fadeInUpReverse 0.3s forwards",
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateY(0px)" },
          "100%": { transform: "translateY(-100%)" },
        },
        scrollHorizontal: {
          "0%": { transform: "translateX(0px)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "slide-in-up": {
          "0%": { transform: "translateY(100%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        "slide-out-down": {
          "0%": { transform: "translateY(0)", opacity: "1" },
          "100%": { transform: "translateY(100%)", opacity: "0" },
        },
        fadeOutUp: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "0",
            transform: "translateY(-10px)",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        fadeInUpReverse: {
          "0%": {
            opacity: "1",
            transform: "translateY(-10px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },

        fadeOutUpReverse: {
          "0%": {
            opacity: "1",
            transform: "translateY(0)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(10px)",
          },
        },
      },
    },
  },
  plugins: [],
};
