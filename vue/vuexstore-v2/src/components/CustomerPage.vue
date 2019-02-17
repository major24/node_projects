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
    
    <hr/>
    <div>Phone Numbers - all data from oecp</div>
    <button @click="fetchAllPhoneNumbersOecp">Fetch All Phone Numbers(oecp)</button>
    <br />
    <span>debug: {{ phoneNumbers }}</span>
    <br />
    
    <hr />
    <div>Phone Numbers - get from two sources, but return one (oecp, ts2)</div>
    <input type="text" id="phone-search" name="phone-search" 
          v-bind:value="search.userid"
          v-on:input="search.userid = $event.target.value" />
    <button @click="fetchPhoneNumbersTs2OrOecp">Fetch All Phone Numbers(ts2 or oecp)</button>
    <br />
    <span>debug: {{ phoneNumbersTs2Oecp }}</span>

  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'CustomerPage',
  data () {
    return {
      "search": {
        "userid": 24
      }
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
      },
      fetchAllPhoneNumbersOecp(){
        this.$store.dispatch('fetchAllPhoneNumbersOecp');
      },
      fetchPhoneNumbersTs2OrOecp() {
        console.log(this.search.userid);
        const payload = {"id": this.search.userid};
        this.$store.dispatch('fetchPhoneNumbersTs2OrOecp', payload);
      }
  },
  computed: {
      ...mapGetters([
          'customers',
          'phoneNumbers',
          'phoneNumbersTs2Oecp'
      ])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>