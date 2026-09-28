// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://new.girlgeekacademy.com',
	redirects: {
		'/work-with-us/schools': '/work-with-us/#schools',
		'/work-with-us/libraries': '/work-with-us/#libraries',
		'/work-with-us/corporates': '/work-with-us/#corporates',
		'/work-with-us/women-in-tech': '/work-with-us/#women-in-tech',
		'/work-with-us/conferences': '/work-with-us/#conferences',
		'/work-with-us/government': '/work-with-us/#government',
		'/work-with-us/media': '/work-with-us/#media',
		'/case-studies/missmakescode-teacher-training': '/missmakescode/#impact',
	},
});
