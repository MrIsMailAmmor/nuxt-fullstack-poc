// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  devtools: { enabled: true },
  runtimeConfig: {
    // Private server-side config
    databaseUrl: process.env.DATABASE_URL,

    // Public config accessible also on client
    public: {
      apiSecret: process.env.API_SECRET,
    },
  },
});
