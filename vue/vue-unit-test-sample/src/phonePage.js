// phonePage.js

export default {
  template: `
    <div>
      <div>
        Phone Number: 
        <input type="text" id="phone" :value="phone" @blur="onBlur" />
      </div>
      <div>
        <span>{{error}}</span>
      </div>
      <button @click="validate">Validate</button>
    </div>
  `,

  data () {
    return {
      phone: '',
      error: ''
    }
  },

  methods: {
    validate () {
      console.log('in validate');
    },
    validatePhoneNumber(number) {
      if (number.match(/[0-9]/)) {
        return true;
      }
      return false;
    },
    onBlur(event) {
      console.log('in blur ftn');
      const num = event.target.value;
      if (!this.validatePhoneNumber(num)) {
        this.error = 'Invalid phone number!'
      }
    }
  }
}