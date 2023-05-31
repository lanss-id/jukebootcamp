<template>
  <div class="mt-0">
      <NuxtLayout :name="header"/>
      <div class="w-11/12 mx-auto">
          <section class = "my-2">
              <h3 class="text-4xl font-bold">Temukan berbagai macam hotel</h3>
              <p class="text-base font-[500] text-black/[0.8]">Top rekomendasi kami untuk memulai journey perjalanan kamu
              </p>
              <div
                  class="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] grid-rows-[repeat(auto,550px)] gap-y-8 gap-6 my-4">
                  <div>
                  </div>
              </div>
          </section>
      </div>
      <NuxtLayout :name="footer" />
  </div>
</template>

<script setup>
definePageMeta({
  layout: false,
})
</script>