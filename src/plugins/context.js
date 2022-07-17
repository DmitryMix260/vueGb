export default {
  install (Vue) {
    if (this.installed) return
    this.installed = true
    Vue.prototype.$context = {
      EventBus: new Vue(),
      show (settings) {
        this.EventBus.$emit('show', settings)
      },
      hide () {
        this.EventBus.$emit('close')
      }
    }
  }
}
