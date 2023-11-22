/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				lavender: "#B7B0E4",
			},
		},
	},
	plugins: ["prettier-plugin-tailwindcss"],
};
