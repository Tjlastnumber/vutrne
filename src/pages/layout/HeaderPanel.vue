<template>
  <div>
    <header
      class="sticky top-0 z-40 flex-none w-full bg-white border-b border-gray-200 dark:border-gray-600 duration-500 dark:bg-black-80 supports-backdrop-blur:bg-white/60"
    >
      <div class="mx-auto max-w-screen-2xl">
        <div
          class="px-8 py-4 font-mono text-black dark:text-white duration-500"
        >
          <div
            class="relative flex flex-row items-center justify-between text-xs font-normal"
          >
            <div
              id="home-link"
              class="font-extrabold text-base"
            >
              <router-link to="/">
                {{ brand }}
              </router-link>
            </div>
            <slot />
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
      default: 'Visuel'
    }
  }
}
</script>

<style></style>
