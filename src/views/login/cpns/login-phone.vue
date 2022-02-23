<template>
  <div class="login-phone">
    <el-form :model="phoneForm">
      <el-form-item label="手机号" prop="phone">
        <el-input v-model="phoneForm.phone" placeholder="请输入手机号"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="code">
        <div class="get-coode">
          <el-input
            v-model="phoneForm.code"
            type="password"
            placeholder="请输验证码"
          ></el-input>
          <el-button type="primary">发送验证码</el-button>
        </div>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
let phoneForm = reactive({
  phone: '',
  code: ''
})
</script>

<style scoped lang="less">
.get-coode{
  display: flex;
  .el-input{
    margin-right: 8px;
  }
}
</style>
