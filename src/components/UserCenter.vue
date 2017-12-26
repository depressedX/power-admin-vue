<template>
  <div>
    <el-button type="text" class="user-center__text">login</el-button>
    <img :src="accountUserIcon" class="user-center__icon"/>
  </div>
</template>

<script>
  import accountUserIcon from '../assets/account_user.png'
  export default {
    name: "user-center",
    data(){
      return{
        accountUserIcon
      }
    }
  }
</script>

<style scoped>
  .user-center__icon{
    vertical-align: middle;
  }
  .user-center__text{
    /*color: #6c6c6c;*/
    margin: 0 1em;
  }
</style>
