<template>
  <el-table
    :data="mockedData"
    style="width: 100%">
    <el-table-column
      prop="roomName"
      label="房间编号"
      sortable>
    </el-table-column>
    <el-table-column
      prop="floor"
      label="楼层"/>
    <el-table-column
      prop="buildingName"
      label="楼宇"/>
    <el-table-column
      prop="areaName"
      label="区域"/>
    <el-table-column
      label="操作">
      <template slot-scope="scope">
        <el-button size="small" type="primary" close-transition>充值</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
  export default {
    name: "balance-table",
    data() {
      return {
        mockedData: [
          {
            roomName: '305',
            floor: 3,
            areaName: '软件园',
            buildingName: '6号公寓'
          },
          {
            roomName: '302',
            floor: 3,
            areaName: '软件园',
            buildingName: '教学楼3区'
          },
          {
            roomName: '101',
            floor: 1,
            areaName: '软件园',
            buildingName: '1号食堂'
          },
          {
            roomName: '102',
            floor: 1,
            areaName: '软件园',
            buildingName: '2号食堂'
          },
        ],
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
