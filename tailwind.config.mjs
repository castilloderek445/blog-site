/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				my_color: '#4dcb7a',
			},
			screens: {
				'mdlg': '700px', // Adjust the value as needed
			  },
		},
	},
	plugins: [],
}
