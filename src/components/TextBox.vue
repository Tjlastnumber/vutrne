<script>
export default {
  name: 'TextBox',
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    value: {
      type: [ String, Number ],
      default: undefined,
    },
    text: {
      type: String,
      default: '',
    },
    mode: {
      type: String,
      default: 'label', /* edit, label */
    },
  },
  data() {
    return {
      edit: false,
    }
  },
  computed: {
    isEdit() {
      return this.mode === 'edit'
    },
  },
  methods: {
    editMode() {
      this.edit = true
      this.$nextTick(() => {
        this.$refs.editor.focus()
        this.$refs.editor.select()
      })
    },
    commit(e) {
      this.edit = false
      this.$emit('input', e.target.value)
      this.$el.focus()
    },
  },
}
</script>

<template>
  <div
    class="textbox"
    @dblclick="editMode()"
    @keyup.enter.self.stop="editMode"
  >
    <span
      v-if="text"
      class="inline-block w-1/4 font-medium text-left shrink-0"
      @click="editMode()"
    >
      {{ text }}
    </span>
    <div class="flex flex-1">
      <input
        v-if="isEdit || edit"
        v-bind="$attrs"
        ref="editor"
        type="textbox"
        class="w-full p-2 border outline-none grow rounded-md border-light-disabled focus:ring-1 focus:ring-primary dark:bg-dark-disabled duration-300"
        :value="value"
        @input.stop.prevent="$emit('input', $event.target.value)"
        @blur="commit"
        @keyup.enter="commit"
      >
      <slot v-else>
        <span class="w-auto p-2 m-px">{{ value }}</span>
      </slot>
    </div>
  </div>
</template>

<style>

.textbox {
  @apply flex items-center justify-between w-full text-xs text-center outline-none gap-2 text-light-primary dark:text-dark dark:text-dark-primary rounded-sm;
}

</style>
