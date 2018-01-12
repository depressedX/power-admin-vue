<template>
    <el-table
      :data="mockedData"
      style="width: 100%">
      <el-table-column
        prop="id"
        label="报修ID"
        sortable>
      </el-table-column>
      <el-table-column
        prop="area"
        label="校区"/>
      <el-table-column
        prop="room"
        label="房间"/>
      <el-table-column
        prop="studentId"
        label="报修学生ID"/>
      <el-table-column
        prop="reportDate"
        label="报修日期"/>
      <el-table-column
        prop="finishTime"
        label="解决时间"/>
      <el-table-column
        prop="status"
        label="状态"
        :filters="statusFilter"
        :filter-method="filterStatus"
        filter-placement="bottom-end">
        <template slot-scope="scope">
          <el-tag close-transition>{{scope.row.status}}
          </el-tag>
        </template>
      </el-table-column>
      <el-table-column
        prop="description"
        label="描述"/>
    </el-table>
</template>

<script>
  export default {
    name: "repairment-table",
    data() {
      return {
        mockedData: [
          {
            id: 1,
            area: '软件园',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '问题描述'
          },
          {
            id: 5,
            area: '洪家楼',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '问题描述'
          },
          {
            id: 7,
            area: '千佛山',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '问题描述'
          },
          {
            id: 8,
            area: '中心校区',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '问题描述'
          },
        ],
        statusFilter: [
          {text: '未受理', value: '未受理'},
          {text: '已受理', value: '已受理'},
          {text: '已解决', value: '已解决'},
          {text: '无法解决', value: '无法解决'},
        ]
      }
    },
    methods: {
      filterStatus(value, row) {
        return row.status === value;
      }
    }
  }
</script>

<style scoped>
</style>
