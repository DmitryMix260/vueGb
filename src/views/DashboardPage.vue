<template>
    <div>
        <payForm
        @addPayment="addNewPayments"
        @addNewCategorys="addNewCategorys"
        :categoryList="categoryList"/>
      <paymentsDisplay :items="paymentsList" />
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import payForm from '../components/payForm.vue'
import paymentsDisplay from '../components/paymentsDisplay.vue'
export default {
  name: 'dashboardPage',
  data () {
    return {
      categoryRoute: '',
      valueRoute: 0
    }
  },
  components: {
    payForm,
    paymentsDisplay
  },
  methods: {
    setValueRoute () {
      this.valueRoute = +this.$route.query.value
    },
    setCategoryRoute () {
      this.categoryRoute = this.$route.params.categoryRoute
    },
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
  created () {
    this.setValueRoute()
    this.setCategoryRoute()
    this.fetchData()
    this.fetchCategoryListData()
  }
}
</script>
