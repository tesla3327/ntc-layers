export default defineNuxtConfig({
  // Only the blog layer needs Nuxt Content
  modules: ['@nuxt/content'],

  // Slight reconfiguration based on https://davestewart.co.uk/blog/nuxt-layers/#nuxt-content
  content: {
    sources: {
      blog: {
        driver: 'fs',
        prefix: '/blog',
        base: './blog/content',
      }
    }
  }
});