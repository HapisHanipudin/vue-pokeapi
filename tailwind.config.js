/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}", "./**/*.{html,js}"],
  theme: {
    extend: {
      animation: {
        notif: "notif 3s ease-in-out 1",
        notifBar: "notifBar 3s ease-in-out 1",
      },
      keyframes: {
        notif: {
          "0%, 100%": {
            opacity: 0,
            transform: "translateY(-125%)",
          },
          "25%, 75%": {
            opacity: 1,
            transform: "translateY(0)",
          },
        },
        notifBar: {
          "0%, 25%": {
            transform: "translateX(-100%)",
          },
          "75%, 100%": {
            transform: "translateX(0)",
          },
        },
      },
    },
  },
  plugins: [],
};
