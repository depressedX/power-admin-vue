<template>
  <el-card class="repairment-table">
    <repairement-table/>
  </el-card>
</template>

<script>
  import RepairementTable from '../components/RepairmentTable'

  export default {
    name: "repair",
    components: {
      RepairementTable
    }
  }
</script>

<style scoped>

</style>
