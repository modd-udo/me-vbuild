<template>
  <div class="hello">
    <h1 @click="setMsg">{{ msg }}</h1>
    <h2>Count is {{ counterValue }}</h2>
  </div>
</template>

<script>
  import { getCount } from '../vuex/getters'
  export default {
    data () {
      return {
        // note: changing this line won't causes changes
        // with hot-reload because the reloaded component
        // preserves its current state and we are modifying
        // its initial state.
        msg: 'Hello World!'
      }
    },
    methods: {
      setMsg () {
        this.msg = window.prompt('New Message', this.msg)
      }
    },
    vuex: {
      getters: {
        counterValue: getCount
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
</style>
