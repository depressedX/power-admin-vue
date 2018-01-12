<template>
  <div>
    <el-card class="login-card">
      <div slot="header" style="text-align: left">
        <span>登陆</span>
      </div>
      <el-form
        :label-position="'left'"
        label-width="80px"
        ref="form"
        :model="form"
        :rules="formRules">
        <el-form-item
          label="账号"
          prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password">
          <el-input v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item label="记住密码" prop="rememberMe">
          <el-switch
            active-color="#13ce66"
            inactive-color="#ff4949"
            v-model="form.rememberMe">
          </el-switch>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm">提交</el-button>
          <el-button @click="forgetPassword">忘记密码</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
  import store from '../state/store'

  let commit = store.commit,
    dispatch = store.dispatch

  let wrongPassword = false

  let formRules = {
    username:[
      {
        required:true,
        message:'账号不能为空'
      }
    ],
    password:[
      {
        required:true,
        message:'密码不能为空'
      },
      {
        validator(rule,value,callback){
          let errors = []
          if (wrongPassword){
            errors.push(new Error('密码错误'))
          }
          callback(errors)
        }
      }
    ]
  }

  export default {
    name: "login",
    data() {
      return {
        // 表单数据
        form: {
          username: '',
          password: '',
          rememberMe: false,
        },

        formRules

      }
    },
    methods: {
      submitForm() {
        this.$refs.form.validate(okey => {
          if (okey) {
            console.log('login success')
            commit('login')
            this.$message('登陆成功')


            this.$router.replace({name: 'repair'})

          } else {
            console.log('not OK')
            return false
          }
        })
      },
      forgetPassword() {
      }
    }
  }
</script>

<style scoped>
  .login-card {
    width: 500px;
    margin: auto;

  }
</style>
