/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		fontFamily: {
			Raleway: '"Raleway" , sans-serif',
			Poppins: '"Poppins", sans-serif',
		},
		screens: {
			// sm: 'px',
			// md: 'px',
			lg: '1110px',
			// xl: '1280px',
		},
		colors: {
			orange: 'rgb(255, 193, 7)',
			white: 'rgb(255, 255, 255)',
			black: 'rgb(0, 0, 0)',
		},
		// minHeight: ({ theme }) => ({
		// 	'calc(100vh-80px)': 'calc(100vh - 80px)',
		// }),
		// transitionProperty: {
		// 	anim: ' ',
		// },
		// transitionDuration: {
		// 	anim: '1s',
		// },
		fontSize: {
			base: ['16px', '24px'],
		},
		container: ({ theme }) => ({
			// screens: {
			// sm: 'px',
			// md: 'px',
			// lg: '1120px',
			// xl: '1280px',
			// },
			center: 'true',
		}),
		extend: {},
	},
	plugins: [],
}
