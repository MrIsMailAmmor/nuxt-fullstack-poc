// ✅ This page is only rendered on the client (no server/SEO).
<script setup>
definePageMeta({
  spa: true,
});
</script>

<template>
  <div>
    <h1>🛠️ Admin Panel (SPA only)</h1>
    <NuxtLink to="/">Back Home</NuxtLink>
  </div>
</template>
