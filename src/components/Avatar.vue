<template>
  <div
    class="flex items-center justify-center w-6 h-6 text-center rounded-full cursor-pointer place-content-center text-light bg-dark dark:text-light-primary dark:bg-light"
  >
    <img
      v-if="imgUrl"
      class="rounded-full"
      width="20"
      height="20"
      :src="imgUrl"
    >
    <span v-else>{{ firstName }}</span>
  </div>
</template>

<script>
export default {
  name: 'Avatar', // eslint-disable-line
  props: {
    firstName: {
      type: String,
      default: 'A'
    },
    imgUrl: {
      type: String,
      default () {
        const i = Math.random() * 10
        return `http://randomuser.me/portraits/women/${i.toFixed()}.jpg`
      }
    }
  }
}
</script>
