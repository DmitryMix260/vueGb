<template>
    <div class="paymentsDisplay">
      <div class="paymentsList">
        <div>#</div>
        <div>Date</div>
        <div>Category</div>
        <div>Value</div>
      </div>
      <div class="paymentsList" v-for="(item, index) in paginatedData" :key="index">
        <div>{{ indexPaginateData (index, pageNumber, size) }}</div>
        <div>{{ item.date }}</div>
        <div>{{ item.category }}</div>
        <div>{{ item.value }}</div>
        <div>
          <button
          class="btnPayForm"
          @click="contextUpdate(indexPaginateData (index, pageNumber, size),
          item.date,
          item.category,
          item.value
          )">Update</button>
          <button
          class="btnPayForm"
          @click="contextRemove(indexPaginateData (index, pageNumber, size))">Del</button>
        </div>
        </div>
      <div class="paginatePayList">
      <button @click="prevPage" :disabled="pageNumber === 0">
        Previous
      </button>
      <button v-for="n in pageCount" :key="n" @click="itemPage(n)"> {{ n }} </button>
      <button @click="nextPage" :disabled="pageNumber >= pageCount - 1">
        Next
      </button>
    </div>
    </div>
</template>

<script>
export default {
  name: 'paymentsDistlay',
  data () {
    return {
      pageNumber: 0,
      size: 3,
      indexPaginate: 0
    }
  },
  props: {
    items: {
      type: Array,
      required: true,
      default: () => ([])
    }
  },
  methods: {
    indexPaginateData (index, pageNumber, size) {
      return index + (pageNumber * size) + 1
    },
    // Открываем форму обновления и передаем в нее параметры
    contextUpdate (
      index,
      date,
      category,
      value
    ) {
      this.$context.show({
        title: 'Update payments',
        content: 'UpdatePayments',
        index,
        date,
        category,
        value
      })
    },
    contextRemove (index) {
      this.$context.show({
        title: 'Remove payments?',
        content: 'RemovePayments',
        index
      })
    },
    nextPage () {
      this.pageNumber++
    },
    prevPage () {
      this.pageNumber--
    },
    itemPage (n) {
      this.pageNumber = n - 1
    }
  },
  computed: {
    pageCount () {
      return Math.ceil(this.items.length / this.size)
    },
    paginatedData () {
      const start = this.pageNumber * this.size
      const end = start + this.size
      return this.items.slice(start, end)
    }
  },
  created () {
    this.pageNumber = 0
  }
}
</script>

<style lang="scss">
.paymentsList{
    display: grid;
    margin: 5px;
    border-bottom: 1px solid rgb(139, 126, 126);
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 16px;
}
.paginatePayList button{
  display: inline-block;
  box-sizing: border-box;
  padding: 0 5px;
  margin: 0 5px 5px 0;
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
.paginatePayList button:focus{
  box-shadow: 0 0 0 1px rgb(121 82 179 / 25%);
}
.paginatePayList button:hover{
  background-color: #61428f;
  border-color: #61428f;
}
.paginatePayList button:active{
  background-color: #61428f !important;
  border-color: #61428f !important;
}
.paginatePayList button:disabled{
  pointer-events: none;
  opacity: 0.65;
}
</style>
