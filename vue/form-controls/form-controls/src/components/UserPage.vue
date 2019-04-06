<template>
  <div class="users">
    <h3>Users Page</h3>
    <hr />
    <button id="getSampleData" @click="getSampleData">Get Sample Data</button>
    <button id="getUsers" @click="getUsers">Get Users</button>
    <button id="add" @click="onAdd(5, 7)">Add</button>
    <button id="subtract" @click="onSubtract(6, 2)">Subtract</button>
    <hr />
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
    <div id="math-result">{{mathResult}}</div>
    <div id="msg">{{msg}}</div>
  </div>
</template>

<script>
import { getSampleData, getUsersFromAPI } from '../services/userService'
import * as math from '../services/math'

export default {
  name: 'Users',
  data () {
    return {
      users: [],
      msg: '..',
      mathResult: 0
    }
  },
  methods: {
    getUsers () {
      getUsersFromAPI()
        .then((resp) => {
          // console.log(resp.data)
          this.users = resp.data
        })
    },
    getSampleData () {
      this.msg = getSampleData()
    },
    onAdd (a, b) {
      this.mathResult = math.add(a, b)
    },
    onSubtract (a, b) {
      this.mathResult = math.subtract(a, b)
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
