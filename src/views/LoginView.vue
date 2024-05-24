<template>
  <div>
    <Login />
    <router-link to="/register">Chưa có tài khoản? Đăng ký ngay!</router-link>
    <router-link to="/forgot-password">Quên mật khẩu?</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Login from '@/components/Login.vue';

export default defineComponent({
  components: {
    Login
  }
});
</script>

<style scoped>
/* Các style tùy chỉnh cho LoginView.vue */
</style>
