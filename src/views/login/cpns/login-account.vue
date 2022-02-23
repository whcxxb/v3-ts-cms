<template>
  <div class="login-account">
    <el-form
      ref="accountFormRef"
      label-width="60px"
      :model="accountForm"
      :rules="rules"
      class="account-form"
    >
      <el-form-item label="账号" prop="username">
        <el-input v-model="accountForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input
          v-model="accountForm.password"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref, defineExpose } from 'vue'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
let accountForm = reactive({
  username: '',
  password: ''
})
let rules = reactive({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    },
  ],
  password: [
    {
      required: true,
      message: '请输入密码',
      trigger: 'blur'
    }
  ]
})
let accountFormRef = ref<InstanceType<typeof ElForm>>()
const accountClick = () => {
  if (!accountFormRef.value) return
  accountFormRef.value.validate((valid) => {
    if (valid) {
      ElMessage({
        message: '登录成功',
        type: 'success'
      })
    } else {
      ElMessage({
        message: '表单验证失败',
        type: 'error'
      })
      return false
    }
  })
}
defineExpose({
  accountClick
})
</script>

<style scoped></style>
