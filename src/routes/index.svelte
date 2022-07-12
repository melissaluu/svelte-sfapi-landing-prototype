<script context="module" lang="ts">
	export const prerender = true;
	import {client} from '../scripts/sfapi';

  export async function load() {
		const QUERY = `
			query Collection($handle: String, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
			collection(handle: $handle) {
				id
				handle
				title
				products(first: 3) {
					nodes {
						id
						title
						description
						onlineStoreUrl
						featuredImage {
							id
							width
							height
							url
							altText
						}
						variants(first:1) {
							nodes {
								id
							}
						}
					}
				}
			}
		}
	`;

    const {data: {collection}, error} = await client
			.query(QUERY, {"handle": "get-ready-for-vacation"})
			.toPromise();

    return {
      status: error ? error : 'ok',
      props: {
        collection
      }
    };
  }
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import ProductTile from '$lib/ProductTile.svelte';
	import { mutation, operationStore, query } from '@urql/svelte';
	export let collection: any;

	const createCart = mutation({
		query: `
			mutation CartCreate(
				$input: CartInput!
				$country: CountryCode
				$language: LanguageCode
			) @inContext(country: $country, language: $language) {
				cartCreate(input: $input) {
					userErrors {
						message
						code
						field
					}
					cart {
						id
						checkoutUrl
					}
				}
			}
		`
	});

	async function buyCollection() {
		const lines = collection.products.nodes.map(((product: any) => {
			return {
				merchandiseId: product.variants.nodes[0].id,
				quantity: 1,
			}
		}));

		const cart = await createCart({input: {lines}})


		if (cart.data.cartCreate.cart.checkoutUrl) {
			window.location.replace(cart.data.cartCreate.cart.checkoutUrl);
		} else {
			alert('Error creating cart - please try again!')
		}
	}

	const updatedCollection = operationStore(`
			query Collection($handle: String, $country: CountryCode, $language: LanguageCode) @inContext(country: $country, language: $language) {
			collection(handle: $handle) {
				id
				handle
				title
				products(first: 3) {
					nodes {
						id
						priceRange {
							maxVariantPrice {
								currencyCode
								amount
							}
							minVariantPrice {
								currencyCode
								amount
							}
						}
					}
				}
			}
		}
	`, {"handle": "get-ready-for-vacation"});

	query(updatedCollection);

	function getProducts(original: any, updated: any) {
		if (updated.fetching || updated.error) {
			return original.products.nodes;
		}

		const updatedProducts = updated.data.collection.products.nodes;

		const data = original.products.nodes.map((product: any) => {
			const priceRange = updatedProducts.find((prod: any) => prod.id === product.id).priceRange;

			return {
				...product,
				priceRange,
			}
		});
		return data;
	}

	$: products = getProducts(collection, $updatedCollection);
</script>

<svelte:head>
	<title>Be vacation ready</title>
	<meta name="description" content="Happy Breeze landing prototype" />
</svelte:head>

<section style={`--bg-img-url: url("${base}/tropical-beach-sunrise.jpg");`} class="hero">
	<div class="row-span-3 col-start-2 row-start-2 col-span-3 mt-4">
		<img src="./a-beach-shack-on-stilts.jpg" class="-rotate-6 rounded-md border-4 border-white m-2 w-72 shadow-sm" width=275 alt="">
	</div>
	<div class="col-start-1 row-start-1 col-span-3 row-span-2 flex justify-end">
		<img src="./standing-on-a-dock-close-up.jpg" class="-rotate-12 rounded-md border-4 border-white m-2 w-64 shadow-sm" width=250 alt="">
	</div>
	<div class="row-span-2 col-start-3 row-start-1 col-span-2">
		<img src="./vacation-town-stroll.jpg" class="rotate-12 rounded-md border-4 border-white m-2 w-80 shadow-sm mt-4" width=275 alt="">
	</div>
	<div class="header">
		<h1 class="text-3xl inline-block text-white">
			Ready to relax and recharge?
		</h1>	
		<h2 class="text-xl inline-block mt-2 text-white whitespace-normal">
			Getting ready to step away from everyday life and recharge? Get your vacation essentials now!
		</h2>
		<div class="mt-6">
			<a href="https://happy-breeze.myshopify.com/" class="px-6 py-3 rounded-md bg-orange-500 shadow-md text-white">Shop for your vacation</a>
		</div>
	</div>
</section>

<section class="mt-7 px-8 py-4">
	<p class="text-lg text-gray-600">Everyone needs time for themselves - it's essential to having a balanced and healthy lifestyle. Be ready for your vacation and get the essentials now!</p>
	<h2 class="mt-12 text-2xl text-gray-600 uppercase">Featured essential products</h2>
	<div>
		{#each products as product }
			<ProductTile product={product} />
		{/each}
	</div>
	<div class="mt-12 flex align-middle justify-center">
		<button on:click={buyCollection} class="px-6 py-4 bg-orange-500 text-white rounded-md uppercase tracking-wide">Buy vacation essentials now</button>
	</div>
</section>

<style>
.hero {
	@apply grid bg-cover min-w-min bg-center bg-green-800 bg-opacity-20;
	grid-template-columns: 1fr 25px 25px 1fr 2fr;
	grid-template-rows: 1fr 1fr 50px;
	padding: 2rem 4rem;
	background-image: var(--bg-img-url);
}
.header {
	@apply col-start-5 row-span-3 flex flex-col justify-center align-middle whitespace-nowrap;
	margin-left: 5.5rem;
}
</style>
