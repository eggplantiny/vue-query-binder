<template>
  <div>
    Hello World!
  </div>
</template>

<script>

import ComputedQuery from '../../src/mixins/ComputedQuery'
const computedQuery = new ComputedQuery({ prefix: 'generated_', suffix: '' })

export default {
  name: 'HelloWorld',
  mixins: [computedQuery],
  computed: {
    hello () {
      return 'Hello World'
    }
  }
}
</script>


<style scoped>
</style>
