<script lang="ts" setup></script>

<template>
  <nav class="navbar fixed top-0 bg-[#72c9c9] z-10 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 2xl:py-6">
    <div class="container px-7 md:px-12 2xl:px-18 flex justify-between">
      <NuxtLink to="/"
        class="font-semibold text-xl 2xl:text-3xl text-white hover:bg-[#72c9c9] transition ease-in-out hover:delay-150 duration-300 hover:scale-90 px-6 py-4 hover:shadow-md rounded-md"
        >Juke Bootcamp</NuxtLink
      >
      <div class="dropdown dropdown-end">
      <label tabindex="0" class="btn btn-ghost btn-circle text-white scale-150">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
      </label>
      <ul tabindex="0" class="mt-3 p-2 shadow text-lg font-semibold menu dropdown-content bg-base-100 rounded-box w-72">
        <li><NuxtLink to="/">Home</NuxtLink></li>
        <li><NuxtLink to="/tutorial">Tutorial</NuxtLink></li>
        <li><NuxtLink to="/animate">Animate Card</NuxtLink></li>  
      </ul>
    </div>
    </div>
    <slot />
  </nav>  
</template>

<style scoped></style>
