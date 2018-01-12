<template>
  <div>
    <el-button type="text" class="user-center__text">{{userCenterText}}</el-button>
    <img :src="accountUserIcon" class="user-center__icon"/>
  </div>
</template>

<script>
  import accountUserIcon from '../assets/account_user.png'
  import store from '../state/store'
  let state = store.state

  export default {
    name: "user-center",
    data(){
      return{
        accountUserIcon,
      }
    },
    computed:{
      userCenterText(){
        return state.isLogin?'注销':'登陆'
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
