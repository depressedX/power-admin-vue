<template>
  <div class="heading">
    <user-center
      class="user-center"/>
    <the-heading-title/>
  </div>
</template>

<script>
  import TheHeadingTitle from './TheHeadingTitle'
  import UserCenter from '../UserCenter'
  import store from '../../state/store'

  export default {
    name: "the-heading",
    components: {
      TheHeadingTitle,
      UserCenter
    },
    data(){
      return{
        store
      }
    }
  }
</script>

<style scoped>
  .heading{
    padding: 1em 0;
  }
  .user-center{
    float: right;
  }
</style>
