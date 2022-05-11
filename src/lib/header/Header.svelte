<script lang="ts">
	import { page } from '$app/stores';
	import { base } from '$app/paths';
	export let shopName: string;
</script>

<header class="mt-auto px-4 py-2 flex justify-between bg-gray-100">
	<div>
		<a href="https://happy-breeze.myshopify.com/" class="text-green-800 text-xl">
			{shopName}
		</a>
	</div>

	<nav>
		<ul class="flex">
			<li class:active={$page.url.pathname === '/'}><a sveltekit:prefetch href="{base}/">Home</a></li>
			<li class:active={$page.url.pathname === '/about'}>
				<a sveltekit:prefetch href="{base}/about">About</a>
			</li>
			<!-- <li class:active={$page.url.pathname === '/todos'}>
				<a sveltekit:prefetch href="{base}/todos">Todos</a>
			</li> -->
		</ul>
	</nav>
</header>


<style>
	.active {
		color: #33856b;
	}

	li {
		@apply px-3 text-lg;
	}
</style>