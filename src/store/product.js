import { GetProductAPI, GetSearchProductAPI } from '../api';
export default {
    namespaced: true,
    state: {
        products: [],
        filteredProducts: []
    },
    mutations: {
        SET_PRODUCT: (state, payloads) => state.products = payloads,
        SET_FILTERED_PRODUCT: (state, payloads) => state.filteredProducts = payloads,
    },
    actions: {
        getProduct: (context) => {
            GetProductAPI().then(res => {
                if (res.done) context.commit('SET_PRODUCT', res.products)
                if (res.done) context.commit('SET_FILTERED_PRODUCT', res.products)
            })
        },
        getFilteredProducts: (context, query) => {
            GetSearchProductAPI(query).then(res => {
                if (res.done) context.commit('SET_FILTERED_PRODUCT', res.products)
            })
        }
    },
    getters: {
        products: (state) => state.products,
        getFilteredProducts: (state) => state.filteredProducts,
        getProductById: state => id => state.products.find(item => item.id === id),
    }
}