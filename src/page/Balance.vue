<template>
  <el-card class="balance-table">
    <balance-table/>
  </el-card>
</template>

<script>
  import BalanceTable from '../components/BalanceTable'

  export default {
    name: "balance",
    components: {
      BalanceTable
    }
  }
</script>

<style scoped>

  .balance-table {
    margin-top: 2em;
  }
</style>
