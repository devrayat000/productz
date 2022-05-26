const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['src/**/*.{html,js,jsx,ts,tsx,json}', './index.html'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: 'hsl(26, 100%, 55%)',
					pale: 'hsl(25, 100%, 94%)'
				},
				neutral: {
					'vark-blue': 'hsl(220, 13%, 13%)',
					'grayish-blue': 'hsl(220, 14%, 75%)',
					'light-grayish-blue': 'hsl(223, 64%, 98%)',
					'dark-grayish-blue': 'hsl(219, 9%, 45%)'
				}
			},
			fontFamily: {
				sans: ["'Kumbh Sans'", ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: [
		// require('daisyui'),
		require('@tailwindcss/typography')
	]
};
