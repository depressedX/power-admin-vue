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
      prop="topupValue"
      label="充值金额"/>
    <el-table-column
      prop="topupNum"
      label="充值度数"/>
    <el-table-column
      prop="date"
      label="时间"/>
  </el-table>
</template>

<script>
  export default {
    name: "flow-record-table",
    data() {
      return {
        mockedData: [
          {
            roomName: '305',
            floor: 3,
            areaName: '软件园',
            buildingName: '6号公寓',
            topupValue: 20.01,
            topupNum: 50,
            date:'2017-1-6'
          },
          {
            roomName: '302',
            floor: 3,
            areaName: '软件园',
            buildingName: '教学楼3区',
            topupValue: 20.01,
            topupNum: 50,
            date:'2017-1-6'
          },
          {
            roomName: '101',
            floor: 1,
            areaName: '软件园',
            buildingName: '1号食堂',
            topupValue: 20.01,
            topupNum: 50,
            date:'2017-1-6'
          },
          {
            roomName: '102',
            floor: 1,
            areaName: '软件园',
            buildingName: '2号食堂',
            topupValue: 20.01,
            topupNum: 50,
            date:'2017-1-6'
          }
        ],
      }
    },
  }
</script>

<style scoped>

</style>
