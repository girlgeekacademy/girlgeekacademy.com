import { getCollection, type CollectionEntry } from 'astro:content';
import { newsCategories } from '../content.config';

export type NewsPost = CollectionEntry<'news'>;
export type NewsCategory = (typeof newsCategories)[number];

export { newsCategories };

export const categorySlug = (category: NewsCategory) =>
	category.toLowerCase().replace(/\s+/g, '-');

export const newsPostUrl = (post: NewsPost) => `/news/${post.id}/`;
export const newsCategoryUrl = (category: NewsCategory) => `/news/category/${categorySlug(category)}/`;

/** Published posts, newest first. */
export async function getNewsPosts(): Promise<NewsPost[]> {
	const posts = await getCollection('news', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const formatNewsDate = (date: Date) =>
	date.toLocaleDateString('en-AU', { day: 'numeric', month: 'long', year: 'numeric' });
