const state = {
    products:[]
}

const mutations = {

    updateProducts(state, data) {
        data = eval(data)
        state.products = data
    },

    resetSession(state){
        state.products = []
    }
}

const actions = {

    updateProducts({ commit }, data) {
        commit('updateProducts', data)
    },

    resetSession({ commit }) {
        commit('resetSession')
    }
}

const getters = {

    products: (state) => {
      return state.products
    },

}

export default {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
}
