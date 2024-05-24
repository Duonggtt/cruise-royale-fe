<template>
  <div>
    <h2>Đăng ký</h2>
    <form @submit.prevent="register">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div>
        <label for="password">Mật khẩu:</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button type="submit">Đăng ký</button>
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
    register() {
      // Gọi API đăng ký ở đây
      console.log('Đăng ký với:', this.email, this.password);
      // Sau khi đăng ký thành công, điều hướng đến trang đăng nhập
      this.$router.push('/login');
    }
  }
});
</script>

<style scoped>
/* Các style tùy chỉnh cho Register.vue */
</style>
