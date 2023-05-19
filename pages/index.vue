<template>
    <NuxtLayout name="navbar"></NuxtLayout>
    <NuxtLayout name="hero">
      <template #judul>
        Tugas Juke Bootcamp <span class=" bg-clip-text font-bold text-transparent bg-gradient-to-r from-accent to-accent-focus">Tailwind CSS</span>
      </template>
      <template #deskripsi>
         Hai, <span class="font-bold"> Alan disini👋.</span> Kali ini masuk pada tugas ke 6. Perintah membuat pages baru dan nesting route dengan parameter <code>id</code> 
        <p>silahkan klik <code>new-project</code> pada nav button untuk melihat hasil previewnya</p>
      </template>
    </NuxtLayout>
    <LightFooter />
  </template>
  
  <script setup>
    definePageMeta({
      layout: 'false',
    });
  </script>