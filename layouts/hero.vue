<script lang="ts" setup></script>

<template>
  <section class="dark">
    <div
      class="hero min-h-screen bg-neutral-100 dark:bg-[#062534] transparent-wave dark:text-white"
    >
      <div class="hero-content flex-col lg:flex-row space-y-7">
        <div class="mx-auto px-7">
          <h1 class="text-5xl 2xl:text-7xl font-semibold md:text-center">
            <slot name="judul" />
          </h1>
          <p class="py-6 md:text-center md:mt-4 2xl:text-xl">
            <slot name="deskripsi" />
          </p>
        </div>
      </div>
    </div>
    <slot />
  </section>
</template>

<style scoped></style>
