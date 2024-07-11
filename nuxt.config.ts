import tailwindTypography from '@tailwindcss/typography';

export default defineNuxtConfig({
  extends: ['green', 'red', 'private', 'blog'],

  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    config: {
      plugins: [tailwindTypography],
    },
  },
});