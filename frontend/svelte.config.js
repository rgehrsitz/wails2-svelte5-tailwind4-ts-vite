import { sveltePreprocess } from 'svelte-preprocess'
// Enable source maps in development and for editor support, but disable for production builds.
// We detect a production build if the npm lifecycle event is 'build' or if 'build' is in the arguments.
const isProductionBuild = process.env.npm_lifecycle_event === 'build' || process.argv.includes('build');

export default {
  // Consult https://github.com/sveltejs/svelte-preprocess
  // for more information about preprocessors
  preprocess: sveltePreprocess({ sourceMap: !isProductionBuild })
}
