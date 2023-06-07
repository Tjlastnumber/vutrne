<script>
export default {
  name: 'VVInput',
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'input',
  },
  props: {
    label: {
      type: String,
      default: '',
    },
    name: {
      type: String,
      default: '',
    },
    value: {
      type: [ String, Number ],
      default: undefined,
    },
  },
  data() {
    return {
      onFocus: false,
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
    labelFocus() {
      const border = this.onFocus ? '1px solid var(--border-color)' : ''
      return {
        outline: border,
        border,
      }
    },
  },
  methods: {
    handleFocus() {
      this.onFocus = true
    },
    handleBlur() {
      this.onFocus = false
    },
    handleMouseWheel(e) {
      if (typeof this.value === 'number') {
        const delta = e.deltaY > 0 ? -1 : 1
        this.$emit('changed', this.value + delta)
      }
    },
  },
}
</script>

<template>
  <div>
    <label class="vv-input" :style="labelFocus">
      <span v-tooltip="name" class="vv-input__name"> {{ label }} </span>
      <input
        class="vv-input__value"
        v-bind="$attrs"
        :value="value"
        @mousewheel.prevent="handleMouseWheel"
        @focus="handleFocus"
        @blur="handleBlur"
        v-on="inputListeners"
      >
    </label>
  </div>
</template>

<style>
.vv-input {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border: 1px solid transparent;
  outline: 1px solid transparent;
  border-radius: 2px;
  outline-offset: -2px;
  width: 100%;
  height: 30px;
}

.vv-input:hover {
  border: 1px solid var(--inactive-color);
}

.vv-input__name {
  width: 32px;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: var(black-color);
  font-weight: 600;
  user-select: none;
  font-family: initial;
  font-size: 11px;
  flex: 0 0 32px;
}

.vv-input__value {
  width: auto;
  min-width: 0;
  height: 28px;
  border: 1px solid transparent !important;
  outline: medium !important;
  color: var(black-color);
  fill: var(black-color);
  border-radius: 2px;
  cursor: default;
  padding: 0;
  margin: 0;
  font-size: 11px;
  font-family: Inter, sans-serif;
}
</style>
