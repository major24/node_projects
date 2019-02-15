import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  customers: []
}

export const CUSTOMERS = 'CUSTOMERS';

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  fetchCustomers (state) {
    // get data from api
    let data = [{"id":24, "name": "Steve Ricci", "phone": "416-555-1111"},
                  {"id":25, "name": "John Jonathan", "phone": "647-787-2222"}];
    state.customers = data;
  },
  clearCustomers (state) {
    state.customers = [];
  },
  updateCustomer (state, payload) {
    console.log('in mutations');
    console.log(state);
    console.log(payload);
    state.customers = state.customers.map((e) => {
      if (e.id === payload.id) {
        return { ...e, ...{"phone": payload.phone}}
      }
      return e;
    });
    console.log(state.customers);
  },

  increment (state) {
    state.count++
  },
  decrement (state) {
    state.count--
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  fetchCustomers: ({ commit }) => commit('fetchCustomers'),
  clearCustomers: ({ commit }) => commit('clearCustomers'),
  updateCustomer: ({ commit }, payload) => {
    commit('updateCustomer', payload);
  },

  increment: ({ commit }) => commit('increment'),
  decrement: ({ commit }) => commit('decrement'),
  incrementIfOdd ({ commit, state }) {
    if ((state.count + 1) % 2 === 0) {
      commit('increment')
    }
  },
  incrementAsync ({ commit }) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        commit('increment')
        resolve()
      }, 1000)
    })
  }
}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd',
  customers: () => state.customers
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
});
