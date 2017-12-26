<template>
  <div>
    <img :src="logo" class="heading__logo"/>
    <div class="heading__title">电力管理系统</div>
  </div>
</template>

<script>
  import logo from '../../assets/logo.jpg'
    export default {
        name: "the-heading-title",
      data(){
          return{
            logo
          }
      }
    }
</script>

<style scoped>
  .heading__logo{
    height: 46px;
    object-fit: contain;
    vertical-align: middle;
  }
  .heading__title{
    display: inline-block;
    line-height: 46px;
    box-sizing: border-box;
    border-bottom: 1px solid black;
    font-size: 1.75rem;
    color: #666666;
    font-weight: bold;
    vertical-align: middle;
    padding-left: 1em;
    padding-right: 5em;
  }
</style>
