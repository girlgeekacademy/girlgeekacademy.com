export const SITE = 'https://girlgeekacademy.com';

/** Plain address for copy-to-clipboard CTAs (no mailto). */
export const CONTACT_EMAIL = 'hello@girlgeekacademy.com';

export const urls = {
	home: '/',
	about: '/about/',
	books: '/books/',
	shop: '/shop/',
	shopThankYou: '/shop/thank-you/',
	refundReturns: '/refund-returns/',

	// Programs catalogue
	missMakesCode: '/missmakescode/',
	sheHacks: '/shehacks/',
	sheHacksSwift: '/shehacksswift/',
	sheMakesGames: '/shemakesgames/',
	sheMakes: '/shemakes/',
	sheFlies: '/sheflies/',

	// Work with Us (single page + section anchors)
	workWithUs: '/work-with-us/',
	formats: '/work-with-us/#formats',
	schools: '/work-with-us/#schools',
	libraries: '/work-with-us/#libraries',
	corporates: '/work-with-us/#corporates',
	womenInTech: '/work-with-us/#women-in-tech',
	conferences: '/work-with-us/#conferences',
	government: '/work-with-us/#government',
	media: '/work-with-us/#media',

	// Research & Impact
	report: '/submission-to-the-national-diversity-in-stem-review/',
	caseStudies: '/case-studies/',
	caseSunsilk: '/case-studies/sunsilk/',
	caseMicrosoft: '/case-studies/microsoft-mondays/',
	caseAiHigh: '/case-studies/ai-high/',
	/** Prefer program page impact section; old case URL redirects there */
	caseMissMakesCode: '/missmakescode/#impact',
	caseMissMakesCodeTeachers: '/missmakescode/#impact',

	// Legacy paths still in codebase (not in new nav; redirects later)
	aiHigh: '/ai-high/',
	microsoft: '/microsoft/',
	highSchool: '/high-school/',

	welcomePack:
		'https://drive.google.com/file/d/1K2kcxV6-anX0ZM0RHhSLXOcZ3wtHc-JW/view?usp=sharing',
	twitter: 'https://twitter.com/girlgeekacademy',
	facebook: 'https://www.facebook.com/girlgeekacademy/',
	linkedin: 'https://www.linkedin.com/company/girlgeekacademy/',
	youtube: 'https://www.youtube.com/girlgeekacademy',
	instagram: 'https://instagram.com/girlgeekacademy',
	/** Prefer EmailCta / CONTACT_EMAIL for UI; keep mailto for rare plain links. */
	email: `mailto:${CONTACT_EMAIL}`,
} as const;
