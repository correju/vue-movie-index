import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    movieCredits: []
  },
  mutations: {
    setMovieCredits (state, data) {
      state.movieCredits = data
    }
  },
  actions: {
    movieCreditsSetter ({commit, state}, data) {
      commit('setMovieCredits', data)
    }
  }
})
