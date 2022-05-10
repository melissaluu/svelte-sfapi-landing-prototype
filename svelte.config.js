import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = process.env.NODE_ENV === 'development';
console.log('dev', dev)
/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		vite: {
			optimizeDeps: {
				exclude: ['@urql/svelte'],
			}
		},
		paths: {
			base: dev ? '' : '/svelte-sfapi-landing-prototype',
			assets: dev ? '' : 'https://melissaluu.github.io/svelte-sfapi-landing-prototype',
		},
		appDir: 'app',
		prerender: {onError: 'continue'},
	
	}
};

export default config;
