/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		colors: {
			lightGray: '#979aa1',
			black: '#000',
			white: '#ffff',
			blue: '#2563EA',
			transparent: 'transparent',
		},
		fontFamily: {
			Poppins: ['Poppins', 'sans-serif'],
		},
		extend: {},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
