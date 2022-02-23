<template>
  <div class="login">
    <LoginBox></LoginBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginBox from './cpns/login-box.vue'

export default defineComponent({
  components: {
    LoginBox
  },
  setup() {
    return {}
  }
})
</script>

<style scoped lang="less">
.login {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
