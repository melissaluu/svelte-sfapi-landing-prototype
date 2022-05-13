<script context="module" lang="ts">
	import {client} from '../scripts/sfapi';

  export async function load() {
		const QUERY = `
			query {
				shop {
					id
					name
					description
				}
			}
		`;

    const {data: {shop}, error} = await client
			.query(QUERY)
			.toPromise();
			
    return {
      status: error ? error : 'ok',
      props: {
        shop
      }
    };
  }
</script>

<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { initClient } from '@urql/svelte';
	
	export let shop: any;

	$: shop = shop;

	initClient({
		url: 'https://happy-breeze.myshopify.com/api/2022-04/graphql',
		fetchOptions: () => ({
			headers: {
				'Content-Type': 'application/json',
				Accept: 'application/json',
				'X-Shopify-Storefront-Access-Token': 'f8d666e5c7ea78ece514ec7c8a560be4',
			},
		}),
	});

</script>



<Header shopName={shop.name} />

<main>
	<slot />
</main>

<footer class="mt-28 py-4 text-center text-xs bg-black text-white">
	{shop.name} &copy; 2022
</footer>
