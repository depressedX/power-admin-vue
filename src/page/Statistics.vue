<template>
  <div>
    <el-card class="function-card">
      <div slot="header">
        <span>用电量</span>
      </div>
      <line-chart :data="{'2017-01-01': 11, '2017-01-02': 6, '2017-01-03': 8, '2017-01-04': 4, '2017-01-5': 7}"/>
    </el-card>
    <el-card class="function-card">
      <div slot="header">
        <span>用电比例</span>
      </div>
      <pie-chart :data="[['空调', 44], ['洗衣机', 10],['电灯', 16],['其他', 30]]"></pie-chart>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "statistics"
    }
</script>

<style scoped>

</style>
