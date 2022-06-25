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
    </main>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    setPage () {
      this.page = window.location.pathname.slice(1)
    },
    pushHistory (e) {
      if (!e.target.classList.contains('route-link')) return
      window.history.pushState({}, '', e.target.href)
      this.setPage()
    }
  },
  created () {
    this.setPage()
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
