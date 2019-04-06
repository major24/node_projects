<template>
  <div class="hello">
    <h3>{{ msg }}</h3>
    <hr />
    <div>
      <div>Disclosure:</div>
      <div>Title: {{disclosure.title}}</div>
      <div>Instructions: {{disclosure.instructions}}</div>
      <div>Content: {{disclosure.content.english}}</div>
    </div>
    <hr />
    <button @click="onContinue">Continue..</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Test object binding',
      disclosure: {
        title: 'My Disc Title',
        instructions: 'My Instructions',
        content: {
          english: 'eng',
          french: 'fr'
        }
      }
    }
  },
  methods: {
    onContinue: function () {
      console.log('on continue...')
      const data = {
        title: 'AAA Title',
        instructions: 'AAA Instructions',
        content: {
          english: 'AAA eng',
          french: 'AAA fr'
        }
      }
      this.disclosure = data
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
