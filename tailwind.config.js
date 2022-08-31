const defaultTheme = require('tailwindcss/defaultTheme')
/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["*.{html,js}"],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				'comf': ['Comfortaa', 'sans-serif'],
				'lora': ['Lora', 'serif'],
				'numito': ['Nunito', 'sans-serif'],
				'libre': ['Libre Baskerville', 'serif'],
				'monte': ['Montserrat', 'sans-serif'],
				sans: ['Nunito', ...defaultTheme.fontFamily.sans]
			}
		},
	},
	plugins: [],
}
