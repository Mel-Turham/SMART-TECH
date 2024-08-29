/** @type {import('tailwindcss').Config} */
const { nextui } = require('@nextui-org/react');
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,ts,jsx,tsx}',
		'./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		fontFamily: {
			Poppins: ['Poppins', 'sans-serif'],
		},
		extend: {
			backgroundImage: {
				'bg-hero': 'url(assets/images/hero.jpg)',
			},
		},
	},
	darkMode: 'class',
	plugins: [nextui()],
};
