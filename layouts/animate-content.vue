<script lang="ts" setup></script>

<template>
  <section class="bg-[#72c9c9] text-white pb-6">
    <h1 class="text-center text-2xl font-bold tracking-wider pt-12 lg:text-4xl">
      Animasi <span class="block tracking-wide font-semib">kartu skeleton</span>
    </h1>
    <div class="container px-6 py-10 mx-auto animate-pulse">
      <div
        class="grid grid-cols-1 gap-8 mt-4 xl:mt-12 xl:gap-12 sm:grid-cols-2 xl:grid-cols-4 lg:grid-cols-3"
      >
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
        <div class="w-full">
          <div class="card-skeleton"></div>
          <h1 class="h1-skeleton"></h1>
          <p class="p-skeleton"></p>
        </div>
      </div>
    </div>
    <slot />
  </section>
</template>

<style scoped></style>
