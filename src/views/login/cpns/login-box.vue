<template>
  <div class="login-box">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" :stretch="true" class="demo-tabs">
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><User /></el-icon>账号登录
          </span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <span>
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <login-phone></login-phone>
      </el-tab-pane>
    </el-tabs>

    <div class="account-control">
      <el-checkbox v-model="keepPassword">记住密码</el-checkbox>
      <el-link type="primary">忘记密码</el-link>
    </div>
    <el-button class="login-btn" type="primary" @click="loginClick">登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { User, Iphone } from '@element-plus/icons-vue'
import loginAccount from './login-account.vue'
import loginPhone from './login-phone.vue'

let keepPassword = ref(true)
let accountRef = ref<InstanceType<typeof loginAccount>>()
const loginClick = () => {
  accountRef.value?.accountClick()
}
</script>

<style scoped lang="less">
.login-box {
  width: 320px;
  margin-bottom: 160px;
  .title {
    text-align: center;
  }
}
.account-control {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 5px;
}
.login-btn {
  margin-top: 5px;
  width: 100%;
}
</style>
