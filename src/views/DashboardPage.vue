<template>
    <div>
      <button class="btnPayForm" @click="addPayment">Add payment</button>
      <paymentsDisplay :items="paymentsList" />
    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
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
    paymentsDisplay
  },
  methods: {
    setValueRoute () {
      this.valueRoute = +this.$route.query.value
    },
    setCategoryRoute () {
      this.categoryRoute = this.$route.params.categoryRoute
    },
    addPayment () {
      this.$modal.show({ title: 'Add new payment', content: 'payForm' })
    },
    ...mapMutations([
      // 'SET_PAYMENTS_LIST',
      // 'ADD_PAYMENTS_DATA',
      // 'SET_CATEGORY_LIST',
      // 'ADD_CATEGORY_LIST'
    ]),
    ...mapActions([
      'fetchData',
      // 'addNewPayments',
      // 'addNewCategorys'
      'fetchCategoryListData'
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

<style lang="scss">
.btnPayForm {
  display: inline-block;
  box-sizing: border-box;
  padding: 0 15px;
  outline: none;
  border: 1px solid #7952b3;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background-color: #7952b3;
  cursor: pointer;
  user-select: none;
  appearance: none;
  touch-action: manipulation;
}
.btnPayForm:focus {
  box-shadow: 0 0 0 1px rgb(121 82 179 / 25%);
}
.btnPayForm:hover {
  background-color: #61428f;
  border-color: #61428f;
}
.btnPayForm:active {
  background-color: #61428f !important;
  border-color: #61428f !important;
}
</style>
