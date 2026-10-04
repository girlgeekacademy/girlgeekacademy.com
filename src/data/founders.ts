import type { Photo } from './library';
import { photo } from './library';
import { videos, type Video } from './videos';
import { urls } from './urls';

/**
 * The five Girl Geek Academy founders. Powers /about/ and each /about/<slug>/ page.
 *
 * To update a founder's page, edit her entry here:
 * - `lens` is her own take on GGA, in her words. The "In her words" section only appears once it's filled in.
 * - `posts` are news post file names from src/content/news/ (without .md).
 * - `photos` use paths from src/assets/library/.
 */
export type Founder = {
	slug: string;
	name: string;
	role: string;
		/** Running Girl Geek Academy today (shown under "Running Girl Geek Academy today" on About). */
	active: boolean;
	/** Set to false to list her on About without her own /about/<slug>/ page. */
	hasPage?: boolean;
	/** One or two lines for the About page card. */
	summary: string;
	portrait?: Photo;
	bio: string[];
	/** What she has built or led at GGA. */
	contributions: string[];
	/** Her own lens on GGA, in her words. Leave empty until she writes it. */
	lens?: string[];
	quote?: { text: string; source: string };
	related?: { label: string; href: string }[];
	videos: Video[];
	photos: Photo[];
	posts: string[];
};

const groupSelfie = photo('photos/GGA_group_1.jpg', 'A selfie of the five Girl Geek Academy founders', 'The five founders');

export const founders: Founder[] = [
	{
		slug: 'sarah-moran',
		name: 'Sarah Moran',
		role: 'Co-founder & CEO',
		active: true,
		summary:
			'Learned to code at five, got pushed out of tech in Year 10, and has been fighting to stop it happening to other girls ever since.',
		portrait: photo('graphics/Artboard-71Sunsilk.png', 'Sarah Moran in pink glasses and a red top'),
		bio: [
			'Sarah learned to code when she was five and got pushed out of tech in Year 10 (her teacher didn’t understand the code behind her website — despite it being very excellent). She gets angry when women and girls who are good at tech get pushed out, so she fights to stop it happening to others.',
			'Winner of The Australian Women’s Weekly Women of the Future (2018) — then a judge — a UN Women Australia speaker, and a regular technology commentator on The Today Show. Telling the Girl Geek Academy story, finding great people to work with, and making sure there’s always money in the bank is her job as CEO.',
		],
		contributions: [
			'Leads Girl Geek Academy as CEO: the story, the people and the money in the bank.',
			'Built AI High with Lisy Kane, first delivered with the Telstra Foundation.',
			'Leads our policy work, from our submission to the national Diversity in STEM Review to our campaign to make sure tech is taught to every student until the end of Year 8.',
			'Speaks and comments on women, girls and technology, from The Today Show to UN Women Australia and the ABC.',
		],
		quote: {
			text: 'Gender inequality in STEM industries limits progress and innovation. The experiences of diverse women and girls is crucial in solving the problems that shape our lives.',
			source: 'Sarah Moran, Girl Geek Academy CEO',
		},
		related: [
			{ label: 'Tech is compulsory. Is it at your school?', href: urls.techInSchools },
			{ label: 'Our Diversity in STEM Review submission', href: urls.report },
			{ label: 'AI High', href: urls.aiHigh },
		],
		videos: [videos.todayShow, videos.unWomen, videos.abcEducationGames],
		photos: [groupSelfie],
		posts: [
			'abc-splash-talks-with-ceo-sarah-moran',
			'ceo-sarah-moran-and-helen-sultana-cast-in-common-sense',
			'our-ceo-speaks-at-web-summit-in-portugal-on-hacking-the-gender-divide-in-investing-and-company-leadership',
			'girl-geek-academy-tours-experts-in-residence-shruti-shah-and-sydney-thomas-by-sarah-moran',
			'introducing-girl-geeks-the-book-series',
		],
	},
	{
		slug: 'lisy-kane',
		name: 'Lisy Kane',
		role: 'Co-founder & games producer',
		active: true,
		summary:
			'Award-winning videogames producer who started SheMakesGames and co-built AI High.',
		portrait: photo('graphics/Artboard-3nissan.png', 'Lisy Kane speaking on camera in front of a neon sign'),
		bio: [
			'Lisy is a videogames producer with a global footprint — the only Australian on Forbes 30 Under 30: Games (2017). At Melbourne studio League of Geeks her work includes award-winning title Armello; she oversees international releases across Steam, PlayStation, Xbox, Switch and mobile.',
			'She’s in high demand on the speaker circuit for gaming, tech and STEM education — including for NASA — and can often be found streaming DOTA 2 on Twitch.',
		],
		contributions: [
			'Curated Australia’s first all-female game-making day in 2015, which grew into SheMakesGames.',
			'Built AI High with Sarah Moran, first delivered with the Telstra Foundation.',
			'Champions longer careers for women and non-binary people in games.',
		],
		quote: {
			text: 'We need more women and non-binary talent in senior games roles, and to make sure they have extended careers.',
			source: 'Lisy Kane, Girl Geek Academy co-founder',
		},
		related: [
			{ label: 'SheMakesGames', href: urls.sheMakesGames },
			{ label: 'Games Career Incubator', href: urls.caseGamesIncubator },
			{ label: 'AI High', href: urls.aiHigh },
		],
		videos: [videos.lisyKaneAdobe, videos.lisyKaneNissan],
		photos: [groupSelfie],
		posts: [
			'co-founder-lisy-kane-is-named-forbes-30-under-30-for-2016',
			'co-founder-lisy-kane-named-mcv-pacifics-outstanding-achiever-of-the-year-for-2017',
			'introducing-girl-geeks-the-book-series',
		],
	},
	{
		slug: 'amanda-watts',
		name: 'Amanda Watts',
		role: 'Co-founder & chief hipster',
		active: true,
		summary:
			'The artist behind Girl Geek Academy’s brand, from pixels to paint, and owner of branding agency Design Junkies.',
		bio: [
			'Using the keyboard as her paintbrush, Amanda is the artist behind Girl Geek Academy’s vibrant branding — from pixels to paint.',
			'She owns marketing and branding agency Design Junkies (10+ years) and co-founded a startup with a fellow founder she met at the first #SheHacks in 2014.',
		],
		contributions: [
			'Created Girl Geek Academy’s brand and pixel-art world.',
			'With the Design Junkies team, designed the MissMakesCode brand.',
			'Kicked off #SheHacksVIC in Warragul with Sarah.',
		],
		related: [
			{ label: 'MissMakesCode', href: urls.missMakesCode },
			{ label: 'SheHacks', href: urls.sheHacks },
		],
		videos: [],
		photos: [groupSelfie],
		posts: [
			'australian-prime-minister-helps-girl-geek-academy-scale-missmakescode-in-2017',
			'shehacksvic-kicks-off-in-warragul',
			'introducing-girl-geeks-the-book-series',
		],
	},
	{
		slug: 'april-staines',
		name: 'April Staines',
		role: 'Co-founder & chief maker',
		active: true,
		summary: 'Chief maker: 3D printing, props and droids, and co-author of Girl Geeks: Making Magic.',
		portrait: photo(
			'photos/April-staines-April-Storm-Props-She-Flies.jpeg',
			'April Staines holding a pilot helmet beside her 3D-printed droids and props',
		),
		bio: [
			'April was a geek before geek was even a word. She runs April Storm Props — digitally fabricated and 3D-printed costume props for fans and cosplay — and even built her own working droid, R2-QT.',
			'When she outgrew her home with printers, she moved to a farm: unlike most farmers, she gets up to turn on her 16 3D printers before her day job as a distinguished engineer at NAB. She co-authored Girl Geeks: Making Magic to inspire girls into space and making.',
		],
		contributions: [
			'Co-wrote Girl Geeks: Making Magic, the fourth book in the Girl Geeks series.',
			'Brings making, 3D printing and props to SheMakes and SheFlies, inspiring girls to explore space through making.',
		],
		related: [
			{ label: 'SheMakes', href: urls.sheMakes },
			{ label: 'SheFlies', href: urls.sheFlies },
			{ label: 'Girl Geeks books', href: urls.books },
		],
		videos: [],
		photos: [groupSelfie],
		posts: ['introducing-girl-geeks-the-book-series'],
	},
	{
		slug: 'tammy-butow',
		name: 'Tammy Butow',
				role: 'Co-founder & Empress of Chaos',
		active: false,
		hasPage: false,
		summary: 'Chaos engineer who sat the five of us down in 2014 and said: we’re starting a company.',
		bio: [
			'Tammy has the coolest job of anyone you’ll ever meet — breaking things on purpose by running chaos experiments, which earned her the nickname Empress of Chaos. Based in Florida after San Francisco, she’s VP of Reliability at Gremlin.',
			'She started at 10, building and fixing computers and ridding family friends’ machines of viruses. As a Site Reliability Engineer she’s kept the lights on at places like Dropbox, DigitalOcean and NAB.',
		],
		contributions: [
			'Sat the five of us down in 2014 and said: you’re awesome, you’re awesome, you’re awesome and you’re awesome — we’re starting a company.',
		],
		related: [{ label: 'SheHacks', href: urls.sheHacks }],
		videos: [],
		photos: [groupSelfie],
		posts: ['introducing-girl-geeks-the-book-series'],
	},
];

export const founderUrl = (f: Founder) => `${urls.about}${f.slug}/`;

/** Founders who have their own page. */
export const foundersWithPages = founders.filter((f) => f.hasPage !== false);
