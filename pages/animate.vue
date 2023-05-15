<template>
  <NuxtLayout name="navbar"></NuxtLayout>
  <NuxtLayout name="hero"></NuxtLayout>
  <NuxtLayout name="animate-content"></NuxtLayout>
  <TheFooter />
</template>

<script setup>
  definePageMeta({
    layout: 'false',
  });
</script>
