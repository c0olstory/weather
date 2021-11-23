<template>
  <div
    class="modal"
    v-if="show"
    @click.stop="hideModal"
  >
    <div class="modal__content" @click.stop>
      <slot></slot>
      <div class="modal__close" @click.stop="hideModal"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UIModal',
  props: {
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    hideModal() {
      this.$emit('update:show', false)
    }
  }

}
</script>

<style lang="scss">
  .modal {
    display: flex;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.7);
    position: fixed;
		&__content {
      margin: auto;
      border-radius: 10px;
      padding: 30px;
      background: #fff;
      min-width: 100px;
      min-width: 300px;
      position: relative;
      @media (max-width: 480px) {
        width: 280px;
      }
		}
    &__close {
      width: 18px;
      height: 18px;
      position: absolute;
      top: 15px;
      right: 15px;
      cursor: pointer;
      z-index: 30;
      background: url("../../assets/close.svg") 0 0 no-repeat;
      transition: all 0.3s ease 0s;
      @media(any-hover: hover) {
        &:hover {
          transform: rotate(90deg);
        }
      }
    }
}

</style>