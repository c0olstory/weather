<template>
  <div>
    <UIModal v-model:show="ModalShow">
      <span class="modal__title">Add new city</span>
      <div class="modal__block">
        <UIInput
          v-model="city"
          type="text"
          placeholder="City"
          class="modal__input"
          v-focus
        />
        <UIButton @click="addCity(city)">Add</UIButton>
      </div>
    </UIModal>
    <UIButton @click="showModal" class="btn">Add new city</UIButton>
  </div>
</template>

<script>
import { mapActions } from 'vuex'


export default {
  components: {
  },
  name: 'AddCity',
  data() {
    return {
      city: '',
      ModalShow: false,
    }
  },
  methods: {
    ...mapActions ({
      fetchAddCity: 'fetchAddCity'
    }),
    showModal() {
      this.ModalShow = true
    },
    closeModal() {
      this.ModalShow = false
    },
    addCity(city) {
      this.closeModal()
      this.fetchAddCity(city)
      this.city=''
    }
  }

}
</script>

<style lang="scss">
.modal {

  &__title {
    font-size: 24px;
    display: inline-block;
    margin-bottom: 30px;
  }
  &__input {
    margin-right: 20px;
    @media (max-width: 480px) {
      margin-right: 0;
      margin-bottom: 20px;
    }
  }
  &__block {
  @media (max-width: 480px) {
    display: flex;
    flex-direction: column;      
  }
 }
}
</style>