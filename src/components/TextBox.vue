<template>
  <div
    class="flex items-center justify-between w-full gap-2 text-light-primary dark:text-dark dark:text-dark-primary"
    @dblclick="editMode()"
  >
    <span
      v-show="text"
      class="w-1/3 text-xs font-medium text-left min-w-1/3"
    >
      {{ text }}
    </span>
    <input
      v-if="isEdit || edit"
      v-bind="$attrs"
      ref="editor"
      type="textbox"
      class="w-full p-2 text-xs border outline-none grow rounded-md border-light-disabled ring-2 ring-transparent hover:ring-blue-400 focus:ring-blue-500 dark:bg-dark-disabled duration-300"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @blur="commit"
      @keyup.enter="commit"
    >
    <slot v-else>
      <span>{{ value }}</span>
    </slot>
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
  data () {
    return {
      edit: false
    }
  },
  computed: {
    isEdit () {
      return this.state === 'edit'
    }
  },
  methods: {
    editMode () {
      this.edit = true
      this.$nextTick(() => {
        this.$refs.editor.focus()
        this.$refs.editor.select()
      })
    },
    commit (e) {
      this.edit = false
      this.$emit('input', e.target.value)
    }
  }
}
</script>

<style>

</style>
