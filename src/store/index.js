import {createStore} from "vuex"
import axios from "axios";

export default createStore({
  state: {
    cities: ['Moscow', 'London', 'Dubai'],
    listData: [],
    activeCity: null,
    key: 'b25e2a09ac19df0a0e0f212a9926a0f7',
    isLoading: false,
    message: '',
    city: {
      isDay: true,
    }
  },
  getters: {
    getArrItem: (state) => (name) => {
      return state.activeCity = state.listData.find(item => item.name === name);
    }
  },
  mutations: {
    setCities(state, city) {
      state.listData.push(city)
    },
    setLoading(state, bool) {
      state.isLoading = bool
    },
    setMessage(state, message) {
      state.message = message
    }
  },
  actions: {
    fetchCities({state, commit}) {
      try {
        commit('setLoading', true)
        commit('setMessage', '')
        state.cities.forEach(async (city) => {
          await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${state.key}&units=metric`)
          .then((response) => {
            commit('setCities', response.data) 
          }).catch((e) => {
            state.message = e.message
          })
        })
      } catch (e) {
        alert(e.message)
        commit('setLoading', false);
      } finally {
        commit('setLoading', false);
      }
    },
    async fetchAddCity({state, commit}, payload) {
      try {
        commit('setLoading', true)
        commit('setMessage', '')
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${payload}&appid=${state.key}&units=metric`)
        .then((response) => {
        commit('setCities', response.data)
        })
      } catch (e) {
        state.message = e.message
        commit('setLoading', false);
      } finally {
        commit('setLoading', false);
      }
    }
  }    
})

