<template>
  <div class="textbox">
    <h3>{{ msg }}</h3>
    <div>
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="fname" 
                v-bind:value="user.firstName"
                v-on:input="user.firstName = $event.target.value" />

        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lname" 
                v-bind:value="user.lastName"
                v-on:input="user.lastName = $event.target.value" />
        <br /><br />
        <div>
            <span>Full Name: (computed) {{fullName}}</span>
        </div>
        <hr />

        <div>
            <p>Radio buttons</p>
            <input type="radio" id="el_ont" name="province"
                    value = "ont"
                    :checked="user.province === 'ont'"
                    v-on:click="user.province = $event.target.value" />
            <label for="ont">Ontario</label>

            <input type="radio" id="el_que" name="province"
                    value = "que"
                    :checked="user.province === 'que'" 
                    v-on:input="user.province = $event.target.value" />
            <label for="que">Quebec</label>

            <input type="radio" id="el_bcc" name="province"
                    value = "bcc"
                    :checked="user.province === 'bcc'" 
                    v-on:input="user.province = $event.target.value"/>
            <label for="bcc">British Columbia</label>
        </div>
        <hr />

        <div>
            <p>Checkboxes (languages)</p>
            <input type="checkbox" id="java" value="java" v-model="user.languages">
            <label for="java">Java</label>
            <input type="checkbox" id="python" value="python" v-model="user.languages">
            <label for="python">Python</label>
            <input type="checkbox" id="csharp" value="csharp" v-model="user.languages">
            <label for="csharp">CSharp</label>
            <br />
            <span>Checked names: {{ user.languages }}</span>
        </div>
        <hr />

        <div>
            <p>Textbox - validate onblur reset onfocus</p>
            <label for="phone">Phone Number</label>
            <input type="text" id="phone" name="phone" maxlength="10"
                v-bind:value="user.phone"
                v-on:input="user.phone = $event.target.value" 
                @focus="onfocus_phone"
                @blur="onblur_phone"
                />
            <br />
            <span id="err-phone">{{errorPhone.message}}</span>
        </div>


        <br />
        <div>
            <button @click="update">Update</button>
            <div>
                <span>debug: {{debug}}</span>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HtmlControls',
  data () {
    return {
      msg: 'Html Controls',
      user: {
          "firstName": "Steve",
          "lastName": "Richard",
          "province": "que",
          "languages": ["java", "csharp"],
          "phone": ""
      },
      
      debug: '...',
      "errorPhone": {"message": ""}
    }
  },
  methods: {
      update: function() {
          console.log('update clicked..');
          let data = {}
          data = {...data, 
            "fn": this.user.firstName,
            "ln": this.user.lastName,
            "prov": this.user.province,
            "languages": this.user.languages
          }
          this.debug = data;
      },

      onfocus_phone: function(event) {
        console.log('onfocus - phone ');
        console.log(event.target);
        this.errorPhone.message = "";
      },

      onblur_phone: function(event) {
        console.log('onblur - phone');
        const target = event.target;
        console.log(target);
        console.log(target.value);
        if (target.value && target.value != "") {
            // input has value
            if (target.value.length != 10) {
                // validate for 10 digit
                this.errorPhone.message = "Invalid number. Should be 10 digits.";
            } else {
                // validate for area code (800, 888 etc..)
                // get area code
                const areaCode = target.value.substring(0,3);
                console.log(areaCode);
                if (areaCode ==  800 || areaCode == 888) {
                    this.errorPhone.message = "Invalid area code. Should not be 800 or 888";
                }
            }
        }
      }
  },
  computed: {
      // computed getter
      fullName: function() {
          return this.user.firstName + ' ' + this.user.lastName
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>