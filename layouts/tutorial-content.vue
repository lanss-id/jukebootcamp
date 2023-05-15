<script lang="ts" setup></script>

<template>
  <section class="min-h-screen bg-[#72c9c9] text-white">
    <ul class="px-12 md:px-24 lg:px-56 xl:px-[30rem] space-y-12">
          <li class="">
            <p class="font-bold text-3xl capitalize">langkah pertama</p>
            <p class="font-normal text-lg mt-3 mb-5">Install tailwind css dengan memasukan command prompt via npm dibawah ini:</p>
            <div class="mockup-code">
              <pre data-prefix=">"><code>npm install -D tailwindcss</code></pre>
              <pre
                data-prefix=">"
                class="text-warning"
              ><code>npx tailwindcss init</code></pre>
            </div>
          </li>
          <li>
            <p class="font-bold text-3xl capitalize">langkah kedua</p>
            <p class="font-normal text-lg mt-3 mb-5">Konfigurasikan Tamplate file kamu didalam file <b>tailwind.config.js</b> :</p>
            <div class="mockup-code">
              <pre><code>module.export = {</code></pre>
              <pre class="text-warning"><code>  content: ["./src/**/*.{html,js}"],</code></pre>
              <pre><code>  theme: {</code></pre>
              <pre><code>    extend: {},</code></pre>
              <pre><code>  },</code></pre>
              <pre><code>  plugins: [],</code></pre>
              <pre><code>}</code></pre>
            </div>
          </li>
          <li>
            <p class="font-bold text-3xl capitalize">langkah ketiga</p>
            <p class="font-normal text-lg mt-3 mb-5">Tambahkan direktif tailwind ke css kamu tambah <b>@tailwind</b> :</p>
            <div class="mockup-code">
              <pre class="text-success"><code>@tailwind <span class="text-white">base;</span></code></pre>
              <pre class="text-success"><code>@tailwind <span class="text-white">components;</span></code></pre>
              <pre class="text-success"><code>@tailwind <span class="text-white">utilities;</span></code></pre>
            </div>
          </li>
          <li>
            <p class="font-bold text-3xl capitalize">langkah keempat</p>
            <p class="font-normal text-lg mt-3 mb-5">Masukan perintah CLI untuk memulai tailwind css sesuai dengan tamplate dan kelas yang kamu buat:</p>
            <div class="mockup-code pr-5">
              <pre data-prefix=">"><code>npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch</code></pre>
            </div>
          </li>
          <li>
            <p class="font-bold text-3xl capitalize">langkah terakhir</p>
            <p class="font-normal text-lg mt-3 mb-5">Masukan file output css kamu ke dalam project html kamu menggunakan tag <b>link</b>:</p>
            <div class="mockup-code pr-5">
              <pre><code>html</code></pre>
              <pre><code>   head</code></pre>
              <pre class="text-success"><code>     link href="output.css"</code></pre>
              <pre><code>   /head</code></pre>
              <pre><code>   body</code></pre>
              <pre class="text-success"><code>     h1 class="text-3xl font-bold underline"</code></pre>
              <pre><code>       hello world</code></pre>
              <pre><code>     /h1</code></pre>
              <pre><code>   /body</code></pre>
              <pre><code>/html</code></pre>
            </div>
          </li>
          <div class="mb-44 text-[#72c9c9]">.</div>
          <div class="mb-44 text-[#72c9c9]">.</div>
          <div class="mb-44 text-[#72c9c9] bg-transparent bg-[url('/bottom.svg')]">.</div>
    </ul>
    <slot />
  </section>
</template>

<style scoped></style>
