/**
 * YouTube embeds for program / case-study pages.
 * Add more: paste id + title from youtube.com/@girlgeekacademy (or Share → embed).
 * Channel: https://www.youtube.com/@girlgeekacademy
 */
export type Video = {
	id: string;
	title: string;
	/** Optional note shown under the title */
	note?: string;
	/** Uploaded by someone other than Girl Geek Academy */
	external?: boolean;
};

export const videos = {
	/** Brand / origin — The Project (Network Ten) */
	theProject: {
		id: '9R4a_NL9prY',
		title: 'Girl Geek Academy on The Project',
		note: 'Network Ten',
		external: true,
	},
	scopeTv: {
		id: 'f5IZCOp8eMg',
		title: 'Girl Geek Academy on Scope TV',
		note: 'Season 5 · Ep 33',
	},
	todayShow: {
		id: 'tD3aMraXzqQ',
		title: 'Sarah Moran on The Today Show',
		note: '11 Feb 2019',
	},
	unWomen: {
		id: 'OqKIvXK8DA8',
		title: 'Sarah Moran — UN Women #CrackingTheCode',
		note: 'IWD 2023',
	},
	downloadThisShow: {
		id: 'qkFabVNQ7VA',
		title: 'Download This Show',
		note: 'Feb 2020',
	},

	sheHacks2016: {
		id: 'G5D8Q8qyPl4',
		title: '#SheHacks 2016',
	},
	sheHacks2017: {
		id: 'cROLjgOndts',
		title: '#SheHacks 2017',
	},
	sheHacksHacker: {
		id: 'jlnF5wPfTOs',
		title: 'Hacker — #SheHacks',
	},
	sheHacksHipster: {
		id: 'vDtxWV3ZkrU',
		title: 'Hipster — #SheHacks',
	},
	sheHacksHustler: {
		id: 'HdCcBtml64Q',
		title: 'Hustler — #SheHacks',
	},
	sheHacksIncubator: {
		id: 'U7x7YXxfKVk',
		title: 'SheHacks Incubator launch',
	},

	microsoftMondays: {
		id: 'bltU_nb0Df0',
		title: 'Microsoft Mondays — Girl Geek Academy × Microsoft AI series',
	},
	aiHighHustlers: {
		id: 'k7lAcdQ_Xu0',
		title: 'AI High — Hustlers career workshop',
	},
	aiHigh3d: {
		id: 'Xf6UyzE8F80',
		title: 'AI High — Learning 3D art',
	},
	aiHighPixel: {
		id: 'OikNYwBNGfQ',
		title: 'AI High — Learning to make pixel art',
	},

	aglGirlsInEnergy: {
		id: '63zLjXucd80',
		title: 'AGL × Girl Geek Academy — Girls in Energy',
		note: 'Corporate work experience',
	},
	nabPartnership: {
		id: '6XawmMS4WsM',
		title: 'NAB × Girl Geek Academy',
		note: 'Girl Geek in Residence · Bobby Films',
		external: true,
	},
	highSchoolHolidays: {
		id: 'eQilfhPwyDA',
		title: 'High school holiday programs',
	},

	abcBreakfast: {
		id: 'Ekjq15h4Dhc',
		title: 'Girl Geek Academy on ABC Breakfast',
		note: '5 July 2019',
	},
	abcNewsCoding: {
		id: '6oNkrWz2qJU',
		title: 'ABC News — women and girls coding workshops',
		note: '2019',
	},
	abcBeyondAwesomeSamoa: {
		id: 'zrJ1CA-lowE',
		title: "Beyond Awesome: Samoa's geek girls",
		note: 'ABC Pacific · Tagilima Neemia & GGA Samoa',
		external: true,
	},
	abcEducationGames: {
		id: '89_OYp73gCQ',
		title: 'Sarah Moran — ABC Education · Education in Games Summit',
		note: 'ABC Education',
		external: true,
	},

	sunsilkEngineering: {
		id: 'owJjKWO4aZM',
		title: 'Rethink Pink: Engineering Empowered',
	},
	sunsilkHair: {
		id: '0Lio9CmexAM',
		title: 'Rethink Pink: The Science of Hair',
	},
	sunsilkMaths: {
		id: 'BOyOmQfJgYg',
		title: 'Rethink Pink: Maths for the Real World',
	},
	sunsilkTechForTwo: {
		id: 'bgJ6h9Ayln4',
		title: 'Rethink Pink: Tech for Two',
	},

	missMakes3d: {
		id: 'e6XVLteBSeg',
		title: 'Miss Makes 3D at Scienceworks',
		note: 'Museum Victoria partnership',
	},

	booksAlexMiles: {
		id: 'DzNcsY6BAyI',
		title: 'Alex Miles on TODAY Extra — Girl Geeks books',
		note: '17 Oct 2019',
	},

	lisyKaneAdobe: {
		id: 'Z3Yad57Wng0',
		title: 'Meet game producer Lisy Kane in one minute',
		note: 'Adobe Asia Pacific · Girl Geek Academy co-founder',
		external: true,
	},
	lisyKaneNissan: {
		id: 'nZHdtTfGeXQ',
		title: 'My Life with a Nissan LEAF — Lisy Kane',
		note: 'Nissan · Girl Geek Academy co-founder',
		external: true,
	},
} as const satisfies Record<string, Video>;

export const sheHacksVideos: Video[] = [
	videos.sheHacks2016,
	videos.sheHacks2017,
	videos.sheHacksHacker,
	videos.sheHacksHipster,
	videos.sheHacksHustler,
	videos.sheHacksIncubator,
];

export const aiHighVideos: Video[] = [
	videos.microsoftMondays,
	videos.aiHighHustlers,
	videos.aiHigh3d,
	videos.aiHighPixel,
];

export const microsoftMondaysVideos: Video[] = [videos.microsoftMondays];

export const sunsilkVideos: Video[] = [
	videos.sunsilkEngineering,
	videos.sunsilkHair,
	videos.sunsilkMaths,
	videos.sunsilkTechForTwo,
];

export const workExperienceVideos: Video[] = [videos.highSchoolHolidays];

/** Corporate delivery proof — Work with Us */
export const workWithUsVideos: Video[] = [
	videos.aglGirlsInEnergy,
	videos.nabPartnership,
	videos.lisyKaneAdobe,
	videos.lisyKaneNissan,
];

export const aboutVideos: Video[] = [
	videos.theProject,
	videos.lisyKaneAdobe,
	videos.abcBreakfast,
	videos.abcNewsCoding,
	videos.abcBeyondAwesomeSamoa,
	videos.downloadThisShow,
	videos.scopeTv,
	videos.todayShow,
	videos.unWomen,
	videos.abcEducationGames,
];

/** Miss Makes 3D (e6XVLteBSeg) is linked from old WP but currently unavailable on YouTube — re-add when public again. */
export const sheMakesVideos: Video[] = [];

export const booksVideos: Video[] = [videos.booksAlexMiles];

export const missMakesCodeVideos: Video[] = [];
