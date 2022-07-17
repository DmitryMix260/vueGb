<template>
    <div class="payForm">
        <div class="payAddStyle" @click="show = !show">
          <button class="btnPayForm"
          @click="addCategory"
          > ADD NEW CATEGORY</button>
            <input type="text" placeholder="Payment amount" v-model="value">
            <select v-model="category" id="type">
              <option
                v-for="category of categoryList"
                :value="category"
                :key="category"
              >
                {{ category }}
              </option>
            </select>
            <input type="text" placeholder="Payment date" v-model="date">
            <button class="btnPayForm" @click="addPayment">ADD +</button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'payForm',
  data () {
    return {
      value: '',
      category: '',
      date: ''
    }
  },
  methods: {
    ...mapActions([
      'addNewPayments'
    ]),
    addCategory () {
      this.$modal.show({ title: 'Add new category', content: 'AddNewCategory' })
    },
    addPayment () {
      const data = {
        value: +this.value,
        category: this.category,
        date: this.date || this.paymentDate
      }
      // Добавляем новую строку и очищаем форму
      this.addNewPayments(data)
      this.value = ''
      this.category = ''
      this.date = ''
    },
    setValue () {
      this.value = this.$route.query.value !== undefined ? +this.$route.query.value : ''
      this.category = this.$route.params.categoryRoute !== undefined ? this.$route.params.categoryRoute : ''
      this.date = this.paymentDate
    }
  },
  computed: {
    ...mapGetters([
      'categoryList'
    ]),
    paymentDate () {
      const paymentDate = new Date()
      const day = paymentDate.getDate()
      const month = paymentDate.getMonth() + 1
      const year = paymentDate.getFullYear()
      return `${day}.${month}.${year}`
    }
  },
  created () {
    this.setValue()
  }
}
</script>

<style lang="scss">
.payAddStyle {
  border: 1px solid rgb(139, 126, 126);
  padding: 2px;
  margin-bottom: 15px;
  display: flex;
  flex-direction: column;
}
.payAddNewCategory {
  border: 1px solid rgb(139, 126, 126);
  padding: 2px;
  margin: 2px 10px;
}
.payAddStyle input, button, select {
  margin: 2px 10px;
}
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
