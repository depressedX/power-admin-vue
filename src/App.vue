<template>
  <div>
    <the-heading/>
    <the-navigator v-if="isLogin"/>
    <router-view/>
  </div>
</template>

<script>
  import TheHeading from './components/heading/TheHeading'
  import TheNavigator from './components/navigator/TheNavigator'

  import store from './state/store'
  let state = store.state

  export default {
    name: 'app',
    components: {
      TheHeading,
      TheNavigator
    },
    computed: {
      isLogin: () => state.isLogin
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>
