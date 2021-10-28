import { } from '../api';
export default {
  namespaced: true,
  state: {
    carts: []
  },
  mutations: {
    ADD_TO_CART: (state, { payloads, getters, rootGetters }) => {
      let stockProduct = rootGetters['product/getProductById'](payloads.id)
      if (stockProduct.isStock) {
        stockProduct.isStock -= 1
        let product = getters.getProductById(payloads.id)
        if (!product) state.carts = [...state.carts, payloads]
        else product.quantity += 1
      }
    },
    REMOVE_FROM_CART: (state, { item, rootGetters }) => {
      let stockProduct = rootGetters['product/getProductById'](item.id)
      stockProduct.isStock = item.quantity
      state.carts = [...state.carts.filter(cartItem => cartItem.id !== item.id)]
    },
    INCREASE: (state, { id, getters, rootGetters }) => {
      let stockProduct = rootGetters['product/getProductById'](id)
      if (stockProduct.isStock) {
        stockProduct.isStock -= 1
        let product = getters.getProductById(id);
        product.quantity += 1
      }
    },
    DECREASE: (state, { id, getters, rootGetters }) => {
      let product = getters.getProductById(id);
      if (product.quantity > 0) {
        let stockProduct = rootGetters['product/getProductById'](id)
        stockProduct.isStock += 1
        if( product.quantity > 1 ){
          product.quantity -= 1
        }else{
          state.carts = [...state.carts.filter(cartItem => cartItem.id !== id)]
        }
      }
    },
  },
  actions: {
    addToCarts: ({ commit, getters, rootGetters }, payloads) => {
      commit('ADD_TO_CART', { payloads, getters, rootGetters })
    },
    removeFromCarts: ({ commit, rootGetters }, item) => {
      commit('REMOVE_FROM_CART', { item, rootGetters })
    },
    incriseProducts: ({ commit, getters, rootGetters }, id) => {
      commit('INCREASE', { id, getters, rootGetters });
    },
    decriseProducts: ({ commit, getters, rootGetters }, id) => {
      commit('DECREASE', { id, getters, rootGetters });
    }
  },
  getters: {
    carts: state => state.carts,
    getProductById: state => id => state.carts.find(item => item.id === id),
    total: state => state.carts.reduce((amount, item) => amount + (item.price * item.quantity), 0)
  }
}