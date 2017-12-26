<template>
  <div>
    <the-heading/>
    <the-navigator/>
    <router-view/>
  </div>
</template>

<script>
  import TheHeading from './components/heading/TheHeading'
  import TheNavigator from './components/navigator/TheNavigator'
export default {
  name: 'app',
  components:{
    TheHeading,
    TheNavigator
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
