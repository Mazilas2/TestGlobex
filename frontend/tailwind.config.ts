import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom': '0 0 20px 0 rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        'proxima-nova': ['"Proxima Nova"', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
export default config;
