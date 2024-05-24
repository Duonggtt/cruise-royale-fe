<template>
  <div>
    <h2>Đăng nhập</h2>
    <form @submit.prevent="login">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Đăng nhập</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    login() {
      // Gọi API đăng nhập ở đây
      console.log('Đăng nhập với:', this.email, this.password);
      // Sau khi xác thực, điều hướng đến trang chính
      this.$router.push('/dashboard');
    }
  }
});
</script>

<style scoped>
/* Các style tùy chỉnh cho Login.vue */
</style>
