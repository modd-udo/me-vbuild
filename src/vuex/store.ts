import * as Vue from 'vue'
import * as Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0
}

const mutations = {
  INCREMENT: function (state, amount) {
    state.count = state.count + amount
  }
}

export default new Vuex.Store({
  state,
  mutations
})
