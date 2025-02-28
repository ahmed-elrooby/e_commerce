/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
       primary:"#FFFFFF",
       secondary:"#F5F5F5",
       secondary2:"#DB4444",
       borderColor:"#D9D9D9",
       bgcolor:"#000000",
       starColor:"#FFAD33",
       button:"#00FF66",
       text:"#FAFAFA"
      },
    },
  },
  plugins: [],
};
