<template>
  <div class="header">
    <span>Header Page: </span>
    <h3>{{ headerTitle }}</h3>
    <hr />
  </div>
</template>

<script>
export default {
  name: 'HeaderPage',
  data () {
    return {
      headerTitle: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
    text-align: left;
    padding-left: 30px;
}
</style>
