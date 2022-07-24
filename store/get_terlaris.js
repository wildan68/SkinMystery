const end_point = 'https://rapid-api.retas.dev/api/unstable/v2.0/store/find/items?page=1&item_limit=10'

export const state = () => {
    return {
        products: [],
    }
}

export const mutations = {
    setProducts(state, products) {
        state.products = products
    }
}

export const actions = {
    async getTerlaris({ commit }) {
        const response = await this.$axios.get(end_point)
        commit('setProducts', response.data.data.items)
    }
}

export const getters = {}