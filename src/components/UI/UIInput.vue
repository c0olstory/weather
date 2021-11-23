<template>
  <input
    type="text"
    class="input"
    :value="modelValue"
    @input="updateInput"
  >
</template>

<script>

export default {
  name: 'UIInput',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput(e) {
      this.$emit('update:modelValue', e.target.value)
    }
  }

}
</script>

<style lang="scss">
  .input {
    padding: 8px 20px;
    font-size: 18px;
    border: 1px solid #2c3e50;
    border-radius: 3px;
    transition: all 0.3s ease;
    &:focus {
      box-shadow: 0 0 6px 4px rgb(0 0 0 / 20%);
    }
  }
</style>