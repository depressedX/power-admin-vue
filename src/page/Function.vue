<template>
  <div>
    <el-card class="function-card">
      <div slot="header">
        <span>修改电价</span>
      </div>
      <el-form
        :inline="true"
        label-position="left"
        label-width="80px"
        ref="price"
        :model="priceForm"
        :rules="{value:{required:true,type:'number'}}">
        <el-form-item
          label="电价"
          prop="value">
          <el-input v-model.number="priceForm.value"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">修改</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="function-card">
      <div slot="header" class="clearfix">
        <span>集中充值(月初免费电量)</span>
      </div>
      <el-form
        :inline="true"
        label-position="left"
        label-width="80px"
        ref="massTopup"
        :model="massTopupForm"
        :rules="{value:{required:true,type:'number'}}">
        <el-form-item
          label="金额"
          prop="value">
          <el-input v-model.number="massTopupForm.value"/>
        </el-form-item>
        <el-form-item>
          <el-button type="primary">充值</el-button>
        </el-form-item>
      </el-form>
    </el-card>
    <el-card class="function-card">
      <div slot="header">
        <span>批量导入管理员</span>
      </div>
      <el-upload
        ref="managerListUpload"
        action="test"
        :file-list="managerList"
        :auto-upload="false"
        accept="application/vnd.ms-excel">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitManagerListUpload">上传到服务器</el-button>
        <div slot="tip" class="upload-tip">只能上传xls文件，且不超过xxxkb</div>
      </el-upload>
    </el-card>
    <el-card class="function-card">
      <div slot="header">
        <span>批量导入房间信息</span>
      </div>
      <el-upload
        ref="roomListUpload"
        action="test"
        :file-list="roomList"
        :auto-upload="false"
        accept="application/vnd.ms-excel">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitManagerListUpload">上传到服务器</el-button>
        <div slot="tip" class="upload-tip">只能上传xls文件，且不超过xxxkb</div>
      </el-upload>
    </el-card>
    <el-card class="function-card">
      <div slot="header">
        <span>批量导入用户</span>
      </div>
      <el-upload
        ref="userListUpload"
        action="test"
        :file-list="userList"
        :auto-upload="false"
        accept="application/vnd.ms-excel">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUserListUpload">上传到服务器</el-button>
        <div slot="tip" class="upload-tip">只能上传xls文件，且不超过xxxkb</div>
      </el-upload>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "function",
    data() {
      return {
        priceForm:{
          value:0
        },
        massTopupForm: {
          value: 0
        },
        userList: [],
        roomList:[],
        managerList:[]
      }
    },
    methods:{
      submitUserListUpload() {
        this.$refs.upload.submit()
      },
      submitRoomListUpload() {
        this.$refs.upload.submit()
      },
      submitManagerListUpload() {
        this.$refs.upload.submit()
      },
      handleRemove(file, fileList) {
        console.log(file, fileList);
      },
      handlePreview(file) {
        console.log(file);
      }
    }
  }
</script>

<style scoped>
  .upload-tip{
    font-size: 12px;
    margin: .7em 0;
  }
  .function-card{
    margin-top: 1em;
  }
</style>
