<template>
  <NuxtLayout name="navbar"></NuxtLayout>
  <NuxtLayout name="tutorial-hero"></NuxtLayout>
  <NuxtLayout name="tutorial-content"></NuxtLayout>
  <TheFooter />
</template>

<script setup>
  definePageMeta({
    layout: 'false',
  });
</script>
