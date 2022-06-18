import Vue from 'vue'
import Vuex from 'vuex'
import categoryList from './categoryList'
import paymentsList from './paymentsList'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    categoryList,
    paymentsList
  }
})
