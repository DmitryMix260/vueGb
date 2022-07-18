<template>
  <div class="calc" id="calc">
    <div class="main">
      <input type="number" v-model.number="op1" name="op1">
      <input type="number" v-model.number="op2" name="op2">
      = {{ result }}
    </div>
    <div>
      <button @click="sum" name="sum">+</button>
      <button @click="sub" name="sub">-</button>
      <button @click="mult" name="mult">*</button>
      <button @click="div" name="div">/</button>
      <button @click="pow" name="pow">^n</button>
      <button @click="trunc" name="trunc">trunc</button>
    </div>
    <div>
      <label for="checkbox">
        <input
        type="checkbox"
        id="checkbox"
        v-model="checked"
        name="checkbox"> Отобразить экранную клавиатуру
      </label>
    </div>
    <div class="buttonNumber" v-show="checked">
      <div>
        <input
        type="radio"
        id="op1"
        value="op1"
        v-model="picked"
        name='op1Radio'>
        <label for="op1">Первый операнд</label>
        <input
        type="radio"
        id="op2"
        value="op2"
        v-model="picked"
        name='op2Radio'>
        <label for="op2">Второй операнд</label>
      </div>
      <button
      v-for="number in numbers"
      :key="number"
      :name="number"
      @click="addToInput(number)">
      {{ number }}</button>
      <button @click="delFromInput" name="delButton">Del</button>
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
      result: 0,
      numbers: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
      checked: false,
      picked: ''
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
    },
    pow () {
      this.result = Math.pow(this.op1, this.op2)
    },
    trunc () {
      this.result = Math.trunc(this.op1 / this.op2)
    },
    addToInput (number) {
      this[this.picked] = this[this.picked] * 10 + number
    },
    delFromInput () {
      this[this.picked] = Math.trunc(this[this.picked] / 10)
    }
  }
}
</script>

<style lang="scss">
#calc :nth-last-child(n) {
  margin-bottom: 10px;
}
button {
  margin-left: 5px;
}
</style>
