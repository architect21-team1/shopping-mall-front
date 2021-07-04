import Vue from 'vue'
import Vuex from 'vuex'
import order from '@/store/modules/order'
import refund from '@/store/modules/refund'
import product from '@/store/modules/product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    bannercolor: "light-gray"
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    order,
    refund,
    product,
  }
})
