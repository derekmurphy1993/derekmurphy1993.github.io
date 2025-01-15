/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				display: ["Sofia Sans Extra Condensed", "serif"],
			},
			keyframes: {
				refine: {
					"0%": {
						left: "0%",
					},
					"20%": {
						left: "-50%",
					},
					"40%": {
						left: "0%",
					},
					"60%": {
						left: "50%",
					},
					"80%": {
						left: "0%",
					},
					"100%": {
						left: "0%",
					},
				},
			},
			animation: {
				"refine-slide": "refine 2s infinite",
			},
		},
	},
	plugins: [],
};
