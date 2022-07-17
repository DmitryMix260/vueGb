export default ({
  state: {
    paymentsList: [],
    paymentsParams: []
  },
  getters: {
    paymentsList: (state) => state.paymentsList,
    paymentsParams: (state) => state.paymentsParams
  },
  mutations: {
    SET_PAYMENTS_LIST (state, paymentsList) {
      state.paymentsList = paymentsList
    },
    ADD_PAYMENTS_DATA (state, payment) {
      state.paymentsList.push(payment)
    },
    UPDATE_PAYMENTS_DATA (state, payment) {
      state.paymentsList.splice((payment.index - 1), 1, (payment))
    },
    REMOVE_PAYMENTS_DATA (state, payment) {
      state.paymentsList.splice((payment - 1), 1)
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
            category: 'Transport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Education',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Sport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Food',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Transport',
            value: 360
          },
          {
            date: '24.03.2020',
            category: 'Education',
            value: 532
          }
        ]

        commit('SET_PAYMENTS_LIST', initialPaymentsList)
      }, 1000)
    },
    addNewPayments ({ commit }, payment) {
      commit('ADD_PAYMENTS_DATA', payment)
    },
    updatePayments ({ commit }, payment) {
      commit('UPDATE_PAYMENTS_DATA', payment)
    },
    removePayments ({ commit }, payment) {
      commit('REMOVE_PAYMENTS_DATA', payment)
    }
  }
})
