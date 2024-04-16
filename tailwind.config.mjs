/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,mdx,svelte,ts,tsx,vue}'], // removed md to make markdown syntax work?
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
