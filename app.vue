<template>
  <nav
    class="navbar fixed top-0 bg-[#72c9c9] z-10 shadow-md backdrop-filter backdrop-blur-lg bg-opacity-50 2xl:py-6"
  >
    <div class="container px-7 md:px-12 2xl:px-18">
      <a
        href="#"
        class="font-semibold text-xl 2xl:text-3xl text-white hover:bg-[#72c9c9] transition ease-in-out hover:delay-150 duration-300 hover:scale-90 px-6 py-4 hover:shadow-md rounded-md"
        >Juke Bootcamp</a
      >
    </div>
  </nav>
  <section class="dark">
    <div
      class="hero min-h-screen bg-neutral-100 dark:bg-[#062534] transparent-wave dark:text-white"
    >
      <div class="hero-content flex-col lg:flex-row space-y-7">
        <div class="mx-auto px-7">
          <h1 class="text-5xl 2xl:text-7xl font-bold">
            Layouting
            <span
              class="bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent-focus"
              >Tailwind CSS</span
            >
          </h1>
          <p class="py-6 md:text-center md:mt-4 2xl:text-xl">
            Hai, <span class="font-bold"> Alan disini👋,</span> Saya mencoba
            buat web sederhana bertema Layouting Tailwind CSS.
          </p>
        </div>
      </div>
    </div>
  </section>
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
  </section>
</template>
