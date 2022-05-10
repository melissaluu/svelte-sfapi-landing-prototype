<script lang="ts">
	import Header from '$lib/header/Header.svelte';
	import '../app.css';
	import { initClient } from '@urql/svelte';

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



<Header />

<main>
	<slot />
</main>

<footer>
	<p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p>
</footer>

<style>
	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 1024px;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 40px;
	}

	footer a {
		font-weight: bold;
	}

	@media (min-width: 480px) {
		footer {
			padding: 40px 0;
		}
	}
</style>
