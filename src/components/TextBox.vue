<script>
const _mode = {
  input: 'input',
  label: 'label',
}
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
      default: _mode.label, /* input, label */
    },
  },
  data() {
    return {
      edit: false,
    }
  },
  computed: {
    inputListeners() {
      return Object.assign({}, this.$listeners, {
        input: (event) => {
          this.$emit('input', event.target.value)
        },
      })
    },
    isEdit() {
      return this.mode === _mode.input
    },
  },
  methods: {
    editMode() {
      this.edit = true
      this.$nextTick(() => {
        this.$refs.editor.select()
      })
    },
    commit(e) {
      this.edit = false
      this.$emit('submit', e.target.value)
    },
  },
}
</script>

<template>
  <label
    class="textbox"
    @dblclick="editMode()"
    @keyup.enter.self.stop="editMode()"
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
        class="w-full p-2 border outline-none grow rounded-md border-light-disabled focus:ring-1 focus:ring-primary dark:bg-dark-disabled duration-300"
        :value="value"
        @blur="commit"
        @keyup.enter="commit"
        v-on="inputListeners"
      >
      <slot v-else>
        <span class="w-auto p-2 m-px">{{ value }}</span>
      </slot>
    </div>
  </label>
</template>

<style>

.textbox {
  @apply flex items-center justify-between w-full text-left text-xs outline-none gap-1 text-light-primary dark:text-dark dark:text-dark-primary rounded-sm;
}

</style>
