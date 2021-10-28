import { } from '../api';
export default {
  namespaced: true,
  state: {
    carts: []
  },
  mutations: {
    ADD_TO_CART: (state, { payloads, getters }) => {
      let product = getters.getProductById(payloads.id)
      if (!product) state.carts = [...state.carts, payloads]
      else product.quantity += 1
    },
    INCREASE: (state, { id, getters }) => {
      let product = getters.getProductById(id);
      product.quantity += 1
    },
    DECREASE: (state, { id, getters }) => {
      let product = getters.getProductById(id);
      if (product.quantity > 1) product.quantity -= 1
    },
  },
  actions: {
    addToCarts: ({ commit, getters }, payloads) => {
      commit('ADD_TO_CART', { payloads, getters })
    },
    incriseProducts: ({ commit, getters }, id) => {
      commit('INCREASE', { id, getters });
    },
    decriseProducts: ({ commit, getters }, id) => {
      commit('DECREASE', { id, getters });
    }
  },
  getters: {
    carts: state => state.carts,
    getProductById: state => id => state.carts.find(item => item.id === id),
    total: state => state.carts.reduce((amount, item) => amount + (item.price * item.quantity), 0)
  }
}