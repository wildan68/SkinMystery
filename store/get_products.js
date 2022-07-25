const end_point = `https://rapid-api.retas.dev/api/unstable/v2.0/store/find/items?page=`


export const state = () => {
    return {
        products: [],
        page: 1,
    }
}

export const mutations = {
    setProducts(state, products) {
        state.products = products
    },
    loadMore(state, products) {
        state.products = [...state.products, ...products]
    },
    setPage(state, page) {
        state.page = page
    }
}

export const actions = {
    // get product awal
    async getProducts({ commit }, page) {
        const response = await this.$axios.get(end_point + page)
        commit('setProducts', response.data.data.items)
    },
    // muat lebih banyak
    async getMoreProducts({ commit, state }) {
        commit('setPage', state.page + 1)
        const response = await this.$axios.get(end_point + state.page)
        commit('loadMore', response.data.data.items)
    }
}

export const getters = {}