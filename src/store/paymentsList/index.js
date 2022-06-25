export default ({
  state: {
    paymentsList: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENTS_DATA (state, payment) {
      state.paymentsList.push(payment)
    }
  },
  actions: {
    fetchData ({ commit }) {
      setTimeout(() => {
        const initialPaymentsList = [
          {
            date: '28.03.2020',
            category: 'Food',
            value: 169
          },
          {
            date: '25.03.2020',
            category: 'Нога',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Рука',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Голова',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Зубы',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Пальцы',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 532
          }
        ]

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    addNewPayments ({ commit }, payment) {
      commit('ADD_PAYMENTS_DATA', payment)
    }
  }
})
