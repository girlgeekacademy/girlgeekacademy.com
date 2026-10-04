/**
 * "Schools getting it right" list for /tech-in-schools/.
 *
 * Nominations only: a school is added after GGA has checked its published
 * Year 7 and 8 handbook and confirmed that EVERY student studies BOTH
 * Digital Technologies and Design and Technologies in BOTH Year 7 and Year 8
 * (the Australian Curriculum intent, as used in McMaster et al., 2026).
 *
 * To add a school: append an entry below with a link to the handbook and the
 * date you checked it. Keep `checked` in YYYY-MM-DD format.
 */

export type TechSchool = {
	name: string;
	suburb: string;
	state: 'QLD' | 'NSW' | 'VIC' | 'SA' | 'WA' | 'TAS' | 'NT' | 'ACT';
	sector: 'Government' | 'Catholic' | 'Independent';
	/** Link to the published handbook or curriculum guide we checked */
	handbookUrl: string;
	/** Date checked, YYYY-MM-DD */
	checked: string;
};

export const techSchools: TechSchool[] = [
	// { name: 'Example State High School', suburb: 'Example', state: 'QLD', sector: 'Government', handbookUrl: 'https://…', checked: '2026-10-01' },
];

/** Brisbane Times coverage. Paste the article URL here to turn the headline into a link. */
export const brisbaneTimesArticle = {
	headline: 'The curriculum quirk pushing Queensland girls out of tech careers',
	author: 'Catherine Strohfeldt',
	date: '3 July 2026',
	url: '',
	quote:
		'The lack of consistency means that they’re not exposed to it enough to want to get good at it.',
};

/** Pre-filled nomination email (plain mailto: no form service needed). */
const nominationBody = `Hi Girl Geek Academy,

I'd like to nominate a school for the "Schools getting it right" list.

School name:
Suburb / town:
State:
Sector (Government / Catholic / Independent):
Link to the Year 7 and 8 handbook or curriculum guide:

Is Digital Technologies compulsory for every student in Year 7? (yes / no / not sure)
In Year 8?
Is Design and Technologies compulsory for every student in Year 7?
In Year 8?

My connection to the school (parent, student, teacher, other):
`;

export const nominationMailto = `mailto:hello@girlgeekacademy.com?subject=${encodeURIComponent(
	'School nomination: tech in Years 7 and 8',
)}&body=${encodeURIComponent(nominationBody)}`;
