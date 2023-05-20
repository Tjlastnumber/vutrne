<template>
  <div
    class="flex items-center justify-between w-full text-center gap-2 text-light-primary dark:text-dark dark:text-dark-primary"
    @dblclick="editMode()"
  >
    <span
      v-if="text"
      class="inline-block w-1/4 text-xs font-medium text-left shrink-0"
      @click="$refs.editor.focus()"
    >
      {{ text }}
    </span>
    <div class="flex flex-1">
      <input
        v-if="isEdit || edit"
        v-bind="$attrs"
        ref="editor"
        type="textbox"
        class="w-full p-2 text-xs border outline-none grow rounded-md border-light-disabled focus:border-primary dark:bg-dark-disabled duration-300"
        :value="value"
        @input="$emit('input', $event.target.value)"
        @blur="commit"
        @keyup.enter="commit"
      >
      <slot v-else>
        <span class="w-auto p-2 m-px">{{ value }}</span>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: {
      type: [ String, Number ],
      default: undefined
    },
    text: {
      type: String,
      default: ''
    },
    state: {
      type: String,
      default: 'edit' /* edit, label */
    }
  },
  data() {
    return {
      edit: false
    }
  },
  computed: {
    isEdit() {
      return this.state === 'edit'
    }
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
    }
  }
}
</script>

<style>

</style>
