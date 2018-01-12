<template>
  <div>
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
        ref="accountListUpload"
        action="test"
        :account-list="accountList"
        :auto-upload="false"
        accept="application/vnd.ms-excel">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitAccountListUpload">上传到服务器</el-button>
        <div slot="tip" class="upload-tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>
    <el-card class="function-card">
      <div slot="header">
        <span>批量导入房间信息</span>
      </div>
      <el-upload
        ref="accountListUpload"
        action="test"
        :account-list="accountList"
        :auto-upload="false"
        accept="application/vnd.ms-excel">
        <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
        <el-button style="margin-left: 10px;" size="small" type="success" @click="submitAccountListUpload">上传到服务器</el-button>
        <div slot="tip" class="upload-tip">只能上传jpg/png文件，且不超过500kb</div>
      </el-upload>
    </el-card>
  </div>
</template>

<script>
  export default {
    name: "function",
    data() {
      return {
        massTopupForm: {
          value: 0,
          accountList: []
        }
      }
    },
    methods:{
      submitUpload() {
        this.$refs.upload.submit();
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
