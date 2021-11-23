<template>
  <div class="container">
    <h1 class="h1">Weather</h1>
    <AddCity />
    <Cities />
  </div>
</template>

<script>

import AddCity from '@/components/AddCity'
import Cities from '@/components/Cities'

export default {
  name: 'home',
  components: {
    AddCity,
    Cities
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.h1 {
  margin-bottom: 20px;
}
</style>
