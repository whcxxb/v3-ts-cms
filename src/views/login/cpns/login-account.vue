<template>
  <div class="login-account">
    <el-form
      ref="accountFormRef"
      label-width="60px"
      :model="accountForm"
      :rules="rules"
      class="account-form"
    >
      <el-form-item label="账号" prop="name">
        <el-input v-model="accountForm.name" placeholder="请输入用户名"></el-input>
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
import { useStore } from 'vuex'
import type { ElForm } from 'element-plus'
import { ElMessage } from 'element-plus'
import { setCache, getCache, removeCache } from '@/utils/cache'
const store = useStore()
let accountForm = reactive({
  name: getCache('name') || '',
  password: getCache('password') || ''
})
let rules = reactive({
  username: [
    {
      required: true,
      message: '请输入用户名',
      trigger: 'blur'
    }
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
const accountClick = (keepPassword: boolean) => {
  if (!accountFormRef.value) return
  accountFormRef.value.validate((valid) => {
    if (valid) {
      // ElMessage({
      //   message: '登录成功',
      //   type: 'success'
      // })
      //保存登录信息
      if (keepPassword) {
        setCache('name', accountForm.name)
        setCache('password', accountForm.password)
      } else {
        removeCache('name')
        removeCache('password')
      }
      //发送登录请求
      store.dispatch('accountLogin', {...accountForm})
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
