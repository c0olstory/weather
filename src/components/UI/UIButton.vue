<template>
  <button class="button"> 
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'UIButton',

}
</script>

<style lang="scss">
  .button {
    padding: 10px 20px;
    background-color: #1976d2;
    color: #fff;
    border-radius: 3px;
    box-shadow: 0 2px 3px 1px rgb(0 0 0 / 20%);
    transition: all 0.3s ease;
    &:hover {
      box-shadow: 0 0 6px 4px rgb(0 0 0 / 20%);
      background-color: #115293;
    }
  }
</style>