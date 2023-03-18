<template>
  <div
    id="projects"
    class="flex flex-col w-full h-full"
  >
    <div class="w-full">
      <HeaderPanel :brand="brand" />
    </div>
    <nav
      class="fixed inset-y-0 z-20 w-1/6 px-8 py-4 bg-white border-r dark:border-slate-900 top-14 col-start-2 duration-500 dark:bg-black-80"
    >
      <ul>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
        <li class="flex self-center">
          <span class="mb-4 mr-4">📂</span><span> Test </span>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
import HeaderPanel from '@/pages/layout/HeaderPanel'
// import SidebarPanel from '@/pages/layout/SidebarPanel'

export default {
  name: 'ProjectsPage',
  components: {
    HeaderPanel
    // SidebarPanel
  },
  data () {
    return {
      brand: 'Visuel'
    }
  }
}
</script>

<style scoped>
/* code... */
</style>
