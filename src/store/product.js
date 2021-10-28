import { GetProductAPI, GetSearchProductAPI } from '../api';
export default {
    namespaced: true,
    state: {
        products: []
    },
    mutations: {
        SET_PRODUCT: (state, payloads) => state.products = payloads
    },
    actions: {
        getProduct: (context) => {
            GetProductAPI().then(res => {
                if (res.done) context.commit('SET_PRODUCT', res.products)
            })
        },
        getFilteredProducts: (context, query) => {
            GetSearchProductAPI(query).then(res => {
                if (res.done) context.commit('SET_PRODUCT', res.products)
            })
        }
    },
    getters: {
        products: (state) => state.products
    }
}