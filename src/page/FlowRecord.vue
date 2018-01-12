<template>
  <el-card class="flow-record-table">
    <flow-record-table/>
  </el-card>
</template>

<script>
  import FlowRecordTable from '../components/FlowRecordTable'

  export default {
    name: "flow-record",
    components: {
      FlowRecordTable
    }
  }
</script>

<style scoped>
  .flow-record-table {
    margin-top: 2em;
  }
</style>
