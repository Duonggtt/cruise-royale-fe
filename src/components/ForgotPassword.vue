<template>
  <div>
    <h2>Quên mật khẩu</h2>
    <form @submit.prevent="resetPassword">
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <button type="submit">Gửi yêu cầu</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  data() {
    return {
      email: ''
    };
  },
  methods: {
    resetPassword() {
      // Gọi API quên mật khẩu ở đây
      console.log('Yêu cầu quên mật khẩu cho:', this.email);
      // Hiển thị thông báo cho người dùng
      alert('Yêu cầu quên mật khẩu đã được gửi đến email của bạn.');
    }
  }
});
</script>

<style scoped>
/* Các style tùy chỉnh cho ForgotPassword.vue */
</style>
