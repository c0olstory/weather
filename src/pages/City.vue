<template>
  <div class="container">
    <h1 class="h1">Weather in {{ getArrItem($route.params.name).name }}</h1>
    
    <UIButton @click="$router.push('/')" class="btn">Back</UIButton>
    <div class="city day">
      <img
        :src="`http://openweathermap.org/img/w/${activeCity.weather[0].icon}.png`" 
        alt="icon"
        class="city__img"
      >
      <p class="city__text">{{activeCity.weather[0].description}}</p>
      <p class="city__text">{{Math.round(activeCity.main.temp)}}&deg;C</p>

      <p class="city__speed">wind speed: {{activeCity.wind.speed}} m/s</p>
      <p>Direction of the wind: {{sectors[(activeCity.wind.deg / 22.5).toFixed(0)]}}</p>

    </div>
  </div>
</template>

<script>

import { mapGetters, mapState } from 'vuex'


export default {
  name: 'city',
  data() {
    return {
      name: this.$route.params.name,
      city: null,
      sectors: ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"]
    }
  },
  methods: {
  },
  computed: {
    ...mapGetters({
      getArrItem: 'getArrItem'
    }),
    ...mapState({
      activeCity: 'activeCity'
    }),
  },
  mounted() {
  }
}
</script>

<style lang="scss">
.city {
  font-size: 18px;
  border: 1px solid #2c3e50;
  border-radius: 10px;
  width: 600px;
  display: flex;
  flex-direction: column;
  margin: auto;
  padding: 20px;
  @media(max-width: 768px) {
    width: 100%;
  }
	&__text {
    margin-bottom: 20px;
	}
	&__speed {
    margin-bottom: 20px;
	}
  &__img {
    width: 100px;
    margin: auto;
  }
}

</style>