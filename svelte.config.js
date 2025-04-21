<<<<<<< HEAD
import adapter from '@sveltejs/adapter-auto';
=======
import adapter from '@sveltejs/adapter-cloudflare';
>>>>>>> b8e9f07 (combine files)

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
		// If your environment is not supported, or you settled on a specific environment, switch out the adapter.
		// See https://svelte.dev/docs/kit/adapters for more information about adapters.
		adapter: adapter()
	}
};

<<<<<<< HEAD
export default config;
=======
export default config;
>>>>>>> b8e9f07 (combine files)
