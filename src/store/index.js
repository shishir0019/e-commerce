import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import product from './product'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tax: 0,
    discountOnItems: 0,
    discountOnSubTotal: 0,
    currency: '$'
  },
  mutations: {
  },
  actions: {
    initialization: (context) => {
      context.dispatch('product/getProduct');
    }
  },
  getters:{
    tax: state => state.tax,
    discountOnItems: state => state.discountOnItems,
    discountOnSubTotal: state => state.discountOnSubTotal,
    currency: state => state.currency
  },
  modules: {
    cart,
    product
  }
})
