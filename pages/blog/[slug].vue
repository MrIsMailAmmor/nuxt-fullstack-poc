<script setup>
const route = useRoute();
</script>

<template>
  <div>
    <h2>Blog Post: {{ route.params.slug }}</h2>
    <NuxtLink to="/">Back Home</NuxtLink>
  </div>
</template>
