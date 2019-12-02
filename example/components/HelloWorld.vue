<template>
  <div>
    Hello World!
  </div>
</template>

<script>

// import ComputedQuery from '../../src/mixins/ComputedQuery'
// const computedQuery = new ComputedQuery({ prefix: 'hello_', suffix: '_world' })

export default {
  name: 'HelloWorld',
  // mixins: [computedQuery],
  computed: {
    hello () {
      return 'Hello World'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
