/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./public/**/*.{html,js}'],
	theme: {
		fontFamily: {
			Raleway: '"Raleway" , sans-serif',
			Poppins: '"Poppins", sans-serif',
			OpenSans: '"Open Sans", sans-serif',
			icons: 'bootstrap-icons !important',
		},
		screens: {
			// sm: 'px',
			md: '786px',
			lg: '1110px',
			// xl: '1280px',
		},
		colors: {
			primary: 'rgb(255, 193, 7)',
			// primary: 'red',
			white: 'rgb(255, 255, 255)',
			black: 'rgb(0, 0, 0)',
			offWhite: '#f5f5f5',
			gray: '#414c64',
			lightGray: '#848484',
			transparent: 'rgb(0, 0, 0, 0)',

			sectBg: '#f7f8fa',
			orange: 'rgb(255, 193, 7)',
			magenta: '#e80368',
			yellow: '#ffbb2c',
			cyan: '#47aeff',
			lightCyan: '#11dbcf',
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
		extend: {
			backgroundImage: {
				bannerBg:
					'url(https://bootstrapmade.com/demo/templates/Baker/assets/img/hero-bg.jpg)',
			},
		},
	},
	plugins: [],
}
