<template>
  <router-view></router-view>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {

  },
  methods: {
    ...mapActions ({
      fetchCities: 'fetchCities'
    })
  },
  mounted() {
    this.fetchCities()
  }
}
</script>

<style lang="scss">
  $fontFamily: Avenir, Helvetica, Arial, sans-serif;
  $fontSize: 78px;
  $minWidth: 320px;
  $maxWidthContainer: 1270;
#app {
  font-family: $fontFamily;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
@import '@/ui/mixins';
@import '@/ui/null';
@import '@/ui/ui';

.day {
  background: linear-gradient(to bottom left, #d7d3ac, #ffffff);
}
// .night {
//   background: linear-gradient(to bottom left, #4854a2, #3d3d3d);
//   color: white;
// }
.btn {
  margin-bottom: 20px;
}
.error {
  color: darkred;
  font-size: 22px;
  margin-top: 20px;
}
</style>
