<template>
    <div class="calc">
        <div class="main">
            <input type="number" v-model.number="op1">
            <input type="number" v-model.number="op2">
            = {{ result }}
        </div>
        <div>
          <button @click="sum">+</button>
          <button @click="sub">-</button>
          <button @click="mult">*</button>
          <button @click="div">/</button>
        </div>
    </div>
</template>

<script>

export default {
  name: 'calcComponents',
  data () {
    return {
      op1: 0,
      op2: 0,
      result: 0
    }
  },
  methods: {
    sum () {
      this.result = this.op1 + this.op2
    },
    sub () {
      this.result = this.op1 - this.op2
    },
    mult () {
      this.result = this.op1 * this.op2
    },
    div () {
      this.result = this.op1 / this.op2
    }
  }
}
</script>

<style scoped lang="scss">

</style>
