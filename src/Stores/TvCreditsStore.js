import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    tvCredits: []
  },
  mutations: {
    setTvCredits (state, data) {
      state.tvCredits = data
    }
  },
  actions: {
    tvCreditsSetter ({commit, state}, data) {
      commit('setTvCredits', data)
    }
  }
})
