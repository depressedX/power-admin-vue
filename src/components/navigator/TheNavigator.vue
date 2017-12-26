<template>
  <div>
    <el-menu mode="horizontal" active-text-color="#e51919" text-color="#6c6c6c" :router="true">
      <el-menu-item
        class="nav__item"
        v-for="(navItem,index) in routesInfo"
        :route="{name:navItem.routeName}"
        :key="index"
        :index="String(index)">
        {{navItem.navName}}
      </el-menu-item>
    </el-menu>
    <div class="line"/>
  </div>
</template>

<script>
  import routesManifest from '../../router/manifest'

  export default {
    name: "the-navigator",
    data() {
      return {
        routesInfo: routesManifest.routes
      }
    }
  }
</script>

<style scoped>
</style>
