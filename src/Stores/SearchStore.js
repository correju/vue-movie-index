import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    searchResult: []
  },
  mutations: {
    setSearchResult (state, data) {
      state.searchResult = data
    }
  },
  actions: {
    searchListSetter ({commit, state}, data) {
      commit('setSearchResult', data)
    }
  }
})
