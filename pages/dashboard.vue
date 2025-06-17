// ✅ This page is rendered on each request.

<script setup>
definePageMeta({
  ssr: true,
});
</script>

<template>
  <div>
    <h1>📊 Server-rendered Dashboard</h1>
    <NuxtLink to="/admin">Go to Admin Panel (SPA)</NuxtLink>
  </div>
</template>
