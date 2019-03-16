// phonePage.js

export default {
  template: `
    <div>

      <div>
        Phone Mobile: 
        <input type="text" id="phone-mobile" :value="phoneNumber.mobile" @blur="onBlur" />
      </div>
      <div>
        <span>{{error}}</span>
      </div>

      <div>
        Phone Home: 
        <input type="text" id="phone-home" :value="phoneNumber.home" @blur="onBlur" />
      </div>
      <div>
        <span>{{error}}</span>
      </div>

    </div>
  `,

  data () {
    return {
      phoneNumber: {
        mobile: '',
        home: ''
      },
      error: ''
    }
  },

  methods: {
    validatePhoneNumber(number) {
      if (number.match(/[0-9]/)) {
        return true;
      }
      return false;
    },
    onBlur(event) {
      console.log('in blur fn');
      const num = event.target.value;
      if (!this.validatePhoneNumber(num)) {
        this.error = 'Invalid phone number!'
      }
    }
  }
}