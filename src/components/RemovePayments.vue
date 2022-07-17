<template>
    <div class="payForm">
        <button class="btnPayForm" @click="removePayment(index)">Yes</button>
        <button class="btnPayForm" @click="close">No</button>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'RemovePayments',
  props: {
    settings: {
      type: Object,
      default () { return {} }
    }
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    ...mapActions([
      'removePayments'
    ]),
    removePayment (index) {
      this.removePayments(index)
    },
    close () {
      this.$context.EventBus.$emit('hide')
    }
  },
  computed: {
    ...mapGetters([
      'paymentsList'
    ])
  },
  created () {
    this.index = this.settings?.index
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
