<template>
  <div id="app">
    <header>
      <div> My personal costs</div>
    </header>
    <main>
      <payForm @addPayment="addNewPayments"/>
      <paymentsDistlay :items="paymentsList" />
    </main>
  </div>
</template>

<script>
import payForm from './components/payForm.vue'
import paymentsDistlay from './components/paymentsDisplay.vue'

export default {
  name: 'App',
  data () {
    return {
      paymentsList: []
    }
  },
  methods: {
    fechData () {
      return [
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
    },
    addNewPayments (data) {
      this.paymentsList.push(data)
    }
  },
  components: {
    payForm,
    paymentsDistlay
  },
  created () {
    this.paymentsList = this.fechData()
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
