<template>
  <div class="cities">
    <h2 class="cities__h2">List of cities</h2>
    <div v-if="!isLoading">
    <router-link
      :to="city.name"
      class="cities__link day"
      v-for="city in listData"
      :key="city.id"
    >
    <img :src="`http://openweathermap.org/img/w/${city.weather[0].icon}.png`" alt="icon">
    <p class="cities__name">{{city.name}}</p>
    <p class="cities__temp">{{Math.round(city.main.temp)}}&deg;C</p>
    </router-link>
    </div>
    <div v-else><img src="../assets/load.gif" alt="loading"></div>
    <div v-if="message" class="error">{{message}}</div>
  </div>
</template>

<script>


import { mapState } from 'vuex'

export default {
  name: 'Cities',
  data() {
    return {
      // load: this.$store.state.isLoading
    }
  },
  methods: {
  },
  computed: {
    ...mapState({
      listData: state => state.listData,
      isLoading: state => state.isLoading,
      message: state => state.message
    }),
    
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.cities {

		&__h2 {
      margin-bottom: 30px;
		}

		&__link {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 20px;
      border: 1px solid #ccc;
      border-radius: 5px;
      box-shadow: 0 2px 3px 1px rgb(0 0 0 / 20%);
      transition: all 0.3s ease;
      color: #2c3e50;
      &:not(:last-child) {
        margin-bottom: 20px;
      }
      @media (any-hover: hover) {
        &:hover {
          box-shadow: 0 1px 6px 3px rgb(0 0 0 / 20%);
        }
      }
		}

		&__icon {
		}

		&__name {
      font-size: 24px;

		}

		&__temp {
		}
}

</style>