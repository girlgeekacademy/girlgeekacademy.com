/**
 * Shop catalog + Stripe Payment Link config.
 *
 * Stripe Dashboard setup (AUD):
 * 1. Create Products + one-time Prices: Beanie $29.00, Books $49.95
 * 2. Create Shipping rates: "Australia" $5.00, "International" $20.00
 * 3. Create a Payment Link per product with shipping address collection,
 *    both shipping rates attached, success URL → /shop/thank-you/
 * 4. Paste the buy.stripe.com URLs into paymentLink below
 */
export const shippingRates = {
	australia: { label: 'Australia', amount: 5 },
	international: { label: 'International', amount: 20 },
} as const;

export type ShopProduct = {
	id: string;
	name: string;
	price: number;
	description: string;
	/** Stripe Payment Link URL — leave empty until Dashboard links are ready */
	paymentLink: string;
};

export const products: ShopProduct[] = [
	{
		id: 'beanie',
		name: 'Girl Geek Beanie',
		price: 29,
		description:
			'Stay warm and geeky. Soft knit beanie with Girl Geek Academy vibes — perfect for coding sessions, school runs, and winter adventures.',
		paymentLink: 'https://buy.stripe.com/4gM7sL7Jv9hP7BVeUEcfK00',
	},
	{
		id: 'books',
		name: 'Girl Geeks: Book Series (4 Books)',
		price: 49.95,
		description:
			'Get ya geek on with this girl gang as they design, make, game, hack, code & more! Written for girls aged 7-12 to encourage coding, gaming, and STEM.',
		paymentLink: 'https://buy.stripe.com/aFabJ1d3Pcu1bSbdQAcfK01',
	},
];

export function formatAud(amount: number): string {
	return amount.toLocaleString('en-AU', {
		style: 'currency',
		currency: 'AUD',
	});
}
