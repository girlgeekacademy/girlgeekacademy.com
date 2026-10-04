import type { ImageMetadata } from 'astro';

/**
 * Image library migrated from the old WordPress site (src/assets/library/).
 * Look images up by path relative to that folder, e.g. lib('photos/LetterBoard.jpg').
 * A wrong path fails the build rather than rendering a broken image.
 */
const files = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/library/**/*.{png,jpg,jpeg,gif,webp,svg}',
	{ eager: true },
);

export function lib(path: string): ImageMetadata {
	const mod = files[`../assets/library/${path}`];
	if (!mod) throw new Error(`Image not found in src/assets/library: ${path}`);
	return mod.default;
}

export type Photo = { src: ImageMetadata; alt: string; caption?: string };

/** Shorthand for building gallery entries. */
export const photo = (path: string, alt: string, caption?: string): Photo => ({
	src: lib(path),
	alt,
	caption,
});
