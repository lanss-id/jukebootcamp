<template>
  <NuxtLayout name="navbar"></NuxtLayout>
  <NuxtLayout name="hero">
    <template #judul>
      Layouting Animate
        <span class="bg-clip-text font-bold text-transparent bg-gradient-to-r from-accent to-accent-focus">
          Tailwind CSS
        </span>
    </template>
    <template #deskripsi>
      Hai, <span class="font-bold"> Alan disini👋,</span> Saya mencoba buat web sederhana bertema Layouting Tailwind CSS.
    </template>
  </NuxtLayout>
  <NuxtLayout name="animate-content"></NuxtLayout>
  <TheFooter />
</template>

<script setup>
  definePageMeta({
    layout: 'false',
  });
</script>
