<template>
  <div id="app">
    <calcComponents />
  </div>
</template>

<script>
import calcComponents from './components/calcComponents.vue'

export default {
  name: 'App',
  components: {
    calcComponents
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
}
</style>
