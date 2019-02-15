<template>
  <div id="app">
      <header-page></header-page>
      <nav-page></nav-page>
      <router-view/>
  </div>
</template>

<script>
import NavPage from '@/components/header-nav/NavPage'
import HeaderPage from '@/components/header-nav/HeaderPage'

export default {
  name: 'app',
components: { NavPage, HeaderPage }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
