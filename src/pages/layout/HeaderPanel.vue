<template>
  <div>
    <header
      class="sticky top-0 z-40 flex-none w-full bg-white border-b dark:bg-black-80 duration-500 lg:z-50 lg:border-b lg:border-slate-900/10 lg:dark:border-slate-700 supports-backdrop-blur:bg-white/60"
    >
      <div class="mx-auto max-w-screen-2xl">
        <div
          class="px-8 py-4 font-mono font-extrabold text-black dark:text-white"
        >
          <div class="relative flex items-center">
            <router-link to="/">
              {{ brand }}
            </router-link>
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'HeaderPanel',
  props: {
    brand: {
      type: String,
      default: ''
    }
  }
}
</script>

<style></style>
