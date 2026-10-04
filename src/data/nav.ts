import { urls } from './urls';

export type NavLink = { label: string; href: string };
export type NavGroup = { label: string; children: NavLink[] };

export const programsNav: NavLink[] = [
	{ label: 'MissMakesCode', href: urls.missMakesCode },
	{ label: 'AI High', href: urls.aiHigh },
	{ label: 'SheHacks', href: urls.sheHacks },
	{ label: 'SheHacksSwift', href: urls.sheHacksSwift },
	{ label: 'SheMakesGames', href: urls.sheMakesGames },
	{ label: 'SheMakes', href: urls.sheMakes },
	{ label: 'SheFlies', href: urls.sheFlies },
];

export const workWithUsNav: NavLink[] = [
	{ label: 'Overview', href: urls.workWithUs },
	{ label: 'Formats', href: urls.formats },
	{ label: 'Schools', href: urls.schools },
	{ label: 'Libraries', href: urls.libraries },
	{ label: 'Corporates', href: urls.corporates },
	{ label: 'Women in tech', href: urls.womenInTech },
	{ label: 'Conferences', href: urls.conferences },
	{ label: 'Government', href: urls.government },
	{ label: 'Media', href: urls.media },
];

export const researchNav: NavLink[] = [
	{ label: 'Tech is compulsory', href: urls.techInSchools },
	{ label: 'Diversity in STEM review', href: urls.report },
	{ label: 'Case studies', href: urls.caseStudies },
	{ label: 'Sunsilk', href: urls.caseSunsilk },
	{ label: 'Microsoft Mondays', href: urls.caseMicrosoft },
	{ label: 'AI High', href: urls.caseAiHigh },
	{ label: 'Games Career Incubator', href: urls.caseGamesIncubator },
	{ label: 'Gender Equality Game Jam', href: urls.caseGameJam },
	{ label: '#SheMakesChange', href: urls.caseSheMakesChange },
	{ label: 'MissMakesCode', href: urls.caseMissMakesCode },
];

export const mainNav: Array<NavLink | NavGroup> = [
	{ label: 'Home', href: urls.home },
	{ label: 'About', href: urls.about },
	{ label: 'Programs', children: programsNav },
	{ label: 'Work with Us', children: workWithUsNav },
	{ label: 'Policy & Impact', children: researchNav },
	{ label: 'News', href: urls.news },
	{ label: 'Books', href: urls.books },
];

