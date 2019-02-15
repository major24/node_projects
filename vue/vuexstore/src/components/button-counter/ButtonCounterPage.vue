<template>
  <div>
    <span>count: {{ $store.state.count }} - even Or Odd: {{ evenOrOdd }}</span>
    <div>
      <button @click="increment">+</button>
      <button @click="decrement">-</button>
      <button @click="incrementAsync">+(async)</button>
      
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
   methods: mapActions([
    'increment',
    'decrement',
    'incrementIfOdd',
    'incrementAsync'
  ]),
  computed: mapGetters([
    'evenOrOdd'
  ]),
  data () {
    return {
    }
  },
  components: {
  }
}
</script>
