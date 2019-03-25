<template>
  <div class="users">
    <h3>Users Page</h3>
    <hr />
    <button @click="getUsers">Get Users</button>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          ID: {{user.id}} - NAME: {{user.name}} - ADDR: {{user.address.street}}
        </li>
      </ul>
    </div>
    <hr />

    <div>
      {{users}}
    </div>
  </div>
</template>

<script>
import userService from '../services/userService'

export default {
  name: 'Users',
  data () {
    return {
      users: [],
      msg: ''
    }
  },
  methods: {
    getUsers () {
      console.log('getting user from public api')
      userService.getUsers()
        .then((resp) => {
          console.log(resp.data)
          this.users = resp.data
        })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
