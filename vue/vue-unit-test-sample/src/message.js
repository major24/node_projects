export default {
    template: `
      <div>
        <span class="title">{{ title }}</span>
        <span class="message">{{ message.firstmsg }} {{ message.secondmsg }}</span>
      </div>
    `,

    data () {
      return {
      }
    },

    props: {
        title: '',
        message: {
            firstmsg: '',
            secondmsg: ''
        }
    },

    methods: {
    }
  }