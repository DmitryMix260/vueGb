<template>
    <div class="wrapper">
        <div class="content">
            <div>{{ title }}</div>
            <div class="content">
                <component
                v-if="settings.content"
                :is="settings.content"
                :settings="settings"/>
            </div>
        </div>
    </div>
</template>

<script>

export default {
  name: 'ContextWindowUpdatePayment',
  props: {
    settings: {
      type: Object,
      default () { return {} }
    }
  },
  components: {
    UpdatePayments: () => import(/* webpackChunkName: "UpdatePayments" */'./UpdatePayments.vue'),
    RemovePayments: () => import(/* webpackChunkName: "UpdatePayments" */'./RemovePayments.vue')
  },
  methods: {
    close () {
      this.$context.EventBus.$emit('hide')
    }
  },
  computed: {
    title () {
      return this.settings?.title || 'Context window'
    }
  }
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: 0;
  left: 0;
}
.content {
  position: relative;
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
}
</style>
