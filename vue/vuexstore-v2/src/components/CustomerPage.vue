<template>
  <div>
    <h3>Customer Page</h3>
    <button @click="fetchCustomers">Fetch Customers</button>
    <button @click="clearCustomers">Clear Customers</button>
    <button @click="updateCustomer">Update Customer(25)</button>
    <br />
    <span>debug: {{ $store.state.customers }}</span>
    <br />
    <span>debug: {{ customers }} </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CustomerPage',
  data () {
    return {
    }
  },
  methods: {
      ...mapActions([
          'clearCustomers'
      ]),
      fetchCustomers() {
        console.log('fetching customers..');
        this.$store.dispatch('fetchCustomers');
      },
      updateCustomer(){
          console.log('updating customer');
          const payload = {"id": 25, "phone": "444-666-8899"};
          this.$store.dispatch('updateCustomer', payload);
      }
  },
  computed: {
      ...mapGetters([
          'customers'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>