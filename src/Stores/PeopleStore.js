import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
export default new Vuex.Store({
  state: {
    person: {}
  },
  mutations: {
    setPerson (state, data) {
      state.person = data
    }
  },
  actions: {
    personSetter ({commit, state}, data) {
      commit('setPerson', data)
    }
  }
})
