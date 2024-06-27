import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', "@nuxtjs/html-validator", "nuxt-hydration"],
  devtools: { enabled: true },
  experimental: {
    componentIslands: {
      // Must be set to 'deep' to enable nested interactive components
      selectiveClient: 'deep',
    },
    // Must be enabled for SSR fallback to work
    clientFallback: true,
  },
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});