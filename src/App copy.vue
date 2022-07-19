<template>
  <div id="app">
    <header>
      <div> My personal costs</div>
      <nav @click.prevent="pushHistory($event)">
        <router-link to="dashboard" class="route-link">Dashboard</router-link>
        <router-link to="about" class="route-link">About</router-link>
        <router-link to="notfound" class="route-link">Not Found</router-link>
      </nav>
    </header>
    <main>
      <router-view/>
      <ModalWindowAddPayment
        v-if="showModal"
        :settings="settings"
      />
      <ContextWindowUpdatePayment
        v-if="showContext"
        :settings="settings"
      />
    </main>
  </div>
</template>

<script>
import ModalWindowAddPayment from './components/ModalWindowAddPayment.vue'
import ContextWindowUpdatePayment from './components/ContextWindowUpdatePayment.vue'

export default {
  name: 'App',
  data () {
    return {
      showModal: false,
      showContext: false,
      settings: {
        title: '',
        content: '',
        value: '',
        category: '',
        date: 0,
        index: 0
      },
      page: ''
    }
  },
  methods: {
    setPage () {
      this.page = window.location.pathname.slice(1)
    },
    pushHistory (e) {
      if (!e.target.classList.contains('route-link')) return
      window.history.pushState({}, '', e.target.href)
      this.setPage()
    },
    modalOpen (settings) {
      this.settings = settings
      this.showModal = true
    },
    contextOpen (settings) {
      this.settings = settings
      this.showContext = true
    },
    modalClose () {
      this.settings = {}
      this.showModal = false
      this.showContext = false
    }
  },
  components: {
    ModalWindowAddPayment,
    ContextWindowUpdatePayment
  },
  created () {
    this.setPage()
    this.$modal.EventBus.$on('show', this.modalOpen)
    this.$modal.EventBus.$on('hide', this.modalClose)
    this.$context.EventBus.$on('show', this.contextOpen)
    this.$context.EventBus.$on('hide', this.modalClose)
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
.header {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.route-link {
  margin: 0px 5px;
  text-decoration: none;
}
</style>
