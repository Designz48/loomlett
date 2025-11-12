// workers-site/index.js
/**
 * This is the smallest possible Worker that just hands the request
 * off to the static‑site assets that Wrangler uploaded.
 *
 * `env.ASSETS` is automatically bound when you have a [site] block.
 */
export default {
  async fetch(request, env, ctx) {
    // Forward the request to the static‑site asset handler.
    // If the asset does not exist, Cloudflare will return a 404.
    return env.ASSETS.fetch(request);
  },
};
