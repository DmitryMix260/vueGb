<template>
  <div id="app">
    <header>
      <div> My personal costs</div>
    </header>
    <main>
      <payForm
        @addPayment="addNewPayments"
        @addNewCategorys="addNewCategorys"
        :categoryList="categoryList"/>
      <paymentsDistlay :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import payForm from './components/payForm.vue'
import paymentsDistlay from './components/paymentsDisplay.vue'

export default {
  name: 'App',
  methods: {
    ...mapMutations([
      'SET_PAYMENTS_LIST',
      'ADD_PAYMENTS_DATA',
      'SET_CATEGORY_LIST',
      'ADD_CATEGORY_LIST'
    ]),
    ...mapActions([
      'fetchData',
      'addNewPayments',
      'fetchCategoryListData',
      'addNewCategorys'
    ])
  },
  computed: {
    ...mapGetters([
      'paymentsList',
      'categoryList'
    ])
  },
  components: {
    payForm,
    paymentsDistlay
  },
  created () {
    this.fetchData()
    this.fetchCategoryListData()
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  margin-bottom: 60px;
}
</style>
