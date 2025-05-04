/** @type {import('tailwindcss').Config} */
const config = {
	theme: {
		extend: {
			fontFamily: {
				kudry: ['var(--font-kudry)'],
				kurle: ['var(--font-kurle)'],
			},
			keyframes: {
				marquee: {
					'0%': { transform: 'translateX(0%)' },
					'100%': { transform: 'translateX(-50%)' }, // зависит от кол-ва повторов
				},
			},
			animation: {
				marquee: 'marquee 7s linear infinite',
			},
		},
	},
};

export default config;
