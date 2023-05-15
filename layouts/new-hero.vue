<script lang="ts" setup></script>

<template>
  <section class="dark">
    <div
      class="hero min-h-screen bg-neutral-100 dark:bg-[#062534] transparent-wave dark:text-white"
    >
      <div class="hero-content flex-col lg:flex-row space-y-7">
        <div class="mx-auto px-7 2xl:px-36">
          <h1 class="md:text-center text-5xl 2xl:text-7xl font-semibold">
            Tugas Juke Bootcamp 
            <span
              class=" bg-clip-text font-bold text-transparent bg-gradient-to-r from-accent to-accent-focus"
              >Tailwind CSS</span
            >
          </h1>
          <p class="py-6 md:text-center md:mt-4 2xl:text-xl">
            Hai, <span class="font-bold"> Alan disini👋.</span> Kali ini masuk pada tugas ke 4 dengan perintah men-deploy kedalam github dan menambahkan direktori <code>layouts</code>
          </p>
        </div>
      </div>
    </div>
    <slot />
  </section>
</template>

<style scoped></style>
