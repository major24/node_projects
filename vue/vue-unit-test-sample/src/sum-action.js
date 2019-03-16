
// import ExtService from './externalService';
import math from './math';

export default {
  template: `
    <div>
      <span class="sum">{{ sum }}</span>
      <button @click="add(n1,n2)">Add</button>
    </div>
  `,

  data () {
    return {
      sum: 0,
      n1: 0,
      n2: 0
    }
  },

  methods: {
    add (n1, n2) {
      console.log('add method is called.');
      //this.sum = math.add(n1, n2);
    },
  }
}