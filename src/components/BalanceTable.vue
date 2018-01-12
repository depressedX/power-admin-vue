<template>
  <el-card class="balance-table">
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
  </el-card>
</template>

<script>
  export default {
    name: "balance-table",
    data() {
      return {
        mockedData: [
          {
            id: 12,
            area: '千佛山',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '哈哈哈'
          },
          {
            id: 12,
            area: '千佛山',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '哈哈哈'
          },
          {
            id: 12,
            area: '千佛山',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '哈哈哈'
          },
          {
            id: 12,
            area: '千佛山',
            room: '305',
            studentId: 132,
            reportDate: '2017-1-15',
            finishTime: '2017-1-20',
            status: '未解决',
            description: '哈哈哈'
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

  .balance-table{
    margin-top: 2em;
  }
</style>
