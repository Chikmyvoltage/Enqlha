/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
	keyframes: {
		loader: {
			"0%": {
				"-webkit-transform": "rotate(0deg)",
				transform: "rotate(0deg)",
				border: "4px solid rgb(243,213,213)",
				"border-left-color": "transparent"
			},
			"50%": {
				"-webkit-transform": "rotate(180deg)",
				transform: "rotate(180deg)",
				border: "4px solid rgb(50,21,21)",
				"border-left-color": "transparent"
			},
			"100%": {
				"-webkit-transform": "rotate(360deg)",
				transform: "rotate(360deg)",
				border: "4px solid rgb(243,213,213)",
				"border-left-color": "transparent"
			}
		}
	},
	animation: {
		loader: "loader 0.7s linear infinite"
	}
    },
  },
  plugins: [],
}
