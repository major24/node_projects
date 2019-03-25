<template>
  <div class='textbox'>
    <h3>{{ msg }}</h3>
    <div>
      <label for='fname'>First Name</label>
      <input type='text' id='fname' name='fname'
        v-bind:value='user.firstName'
        v-on:input='user.firstName = $event.target.value' />

      <label for='lname'>Last Name</label>
      <input type='text' id='lname' name='lname'
        v-bind:value='user.lastName'
        v-on:input='user.lastName = $event.target.value' />
      <br /><br />
      <div>
        <span id='fullname'>Full Name: (computed) {{fullName}}</span>
      </div>
      <hr />

      <div>
        <p>Radio buttons - [provinces]</p>
        <div>
          <span v-for="prov in provinces" :key="prov">
            <input type='radio' :id="prov" name='province'
              :value="prov"
              :checked="user.province === prov"
              v-on:click='user.province = $event.target.value' />
            <label for="prov">{{prov}}</label>
          </span>
        </div>
      </div>
      <hr />

      <div>
        <p>Checkboxes - [Languages]</p>
        {{user.languages}}
        <ul>
          <li v-for="lang in prefLanguages" :key=lang.code>
            <input type='checkbox' :id="lang.code"
              :value="lang.code"
              v-model="user.languages">
            <label for="lang.code">{{lang.name}} - {{lang.code}}</label>
          </li>
        </ul>
      </div>
      <hr />

      <div>
        <p>Textbox - validate onblur reset onfocus</p>
        <label for='phone'>Phone Number</label>
        <input type='text' id='phone' name='phone' maxlength='10'
            v-bind:value='user.phone'
            v-on:input='user.phone = $event.target.value'
            @focus='onFocusPhone'
            @blur='onBlurPhone'
            />
        <br />
        <span id='err-phone'>{{errorMessage.phone}}</span>
      </div>
      <hr />

      <div>
        <p>Selection with three states: true, false, undefined</p>
        <p>Do you agree to call you?</p>
        <div>
          CurrStatus: {{user.callme}}
          <br />
          <span>
            <input type='radio' id="mob-yes" name='callme'
              :checked="user.callme === true"
              v-on:click="user.callme = true" />
            <label for="mob-yes">Yes</label>

            <input type='radio' id="mob-no" name='callme'
              :checked="user.callme === false"
              v-on:click="user.callme = false" />
            <label for="mob-no">No</label>

            <button @click="onClearCallme">Clear</button>
          </span>
        </div>
      </div>

      <br />
      <div>
          <button @click='update'>Update</button>
          <div>
            <span>debug: {{debug}}</span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
import isValidPhone from '../services/validatePhone'

export default {
  name: 'HtmlControls',
  data () {
    return {
      msg: 'Html Controls',
      user: {
        'firstName': 'Steve',
        'lastName': 'Richard',
        'province': 'QC',
        'languages': ['JS', 'PY'],
        'phone': '',
        'callme': true
      },
      prefLanguages: [
        {
          name: 'Java',
          code: 'JV'
        },
        {
          name: 'Javascript',
          code: 'JS'
        },
        {
          name: 'Python',
          code: 'PY'
        },
        {
          name: 'Go Lang',
          code: 'GO'
        }
      ],
      provinces: ['ON', 'QC', 'BC', 'NB', 'AB'],
      debug: '...',
      errorMessage: {
        phone: ''
      }
    }
  },
  methods: {
    update: function () {
      // console.log('update clicked..')
      let data = {}
      data = {
        ...data,
        'fn': this.user.firstName,
        'ln': this.user.lastName,
        'prov': this.user.province,
        'languages': this.user.languages
      }
      this.debug = data
    },

    onFocusPhone (event) {
      console.log(event.target)
      this.errorMessage.phone = ''
    },

    onBlurPhone (event) {
      const target = event.target
      // console.log(target)
      // console.log(target.value)
      if (target.value && target.value !== '') {
        // input has value
        if (!isValidPhone(target.value)) {
          this.errorMessage.phone = 'Invalid number. Should be 10 digits and not 800 number.'
        }
      }
    },

    onClearCallme () {
      console.log(this.user.callme)
      this.user.callme = null
      console.log(this.user.callme)
    }

  },

  computed: {
    // computed getter
    fullName: function () {
      return this.user.firstName + ' ' + this.user.lastName
    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style scoped>

</style>
