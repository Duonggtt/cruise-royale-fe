<template>
  <div>
    <Register />
    <router-link to="/login">Đã có tài khoản? Đăng nhập ngay!</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Register from '@/components/Register.vue';

export default defineComponent({
  components: {
    Register
  }
});
</script>

<style scoped>
/* Các style tùy chỉnh cho RegisterView.vue */
</style>
