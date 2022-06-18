export default ({
  state: {
    categoryList: []
  },
  getters: {
    categoryList: (state) => state.categoryList
  },
  mutations: {
    SET_CATEGORY_LIST (state, categoryList) {
      state.categoryList = categoryList
    },
    ADD_CATEGORY_DATA (state, categoryList) {
      state.categoryList.push(categoryList)
    }
  },
  actions: {
    fetchCategoryListData ({ commit }) {
      setTimeout(() => {
        const initialCategoryList = ['Food', 'Transport', 'Education', 'Sport']
        commit('SET_CATEGORY_LIST', initialCategoryList)
      }, 1000)
    },
    addNewCategorys ({ commit }, categoryList) {
      commit('ADD_CATEGORY_DATA', categoryList)
    }
  }
})
