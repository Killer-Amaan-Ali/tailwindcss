console.log('Tailwind is running')
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
		// screens: {
		// 	sm: '768px',
		// 	md: '900px',
		// 	lg: '1170px',
		// 	// xl: '1280px',
		// },
		screens: {
			sm: '768px',
			md: '900px',
			lg: '1280px',
			xl: '1336px',
		},
		colors: {
			primarys: {
				// 100: 'rgb(255, 193, 7)',
				// 200: '#ffce3a',
				100: 'red',
				200: '#ff3a3a'
			},

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
			screens: {
			sm: '640px',
			md: '768px',
			lg: '1120px',
			xl: '1170px',
			},
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
