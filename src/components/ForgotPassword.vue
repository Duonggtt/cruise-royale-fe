<template>
  <div class="reset-password-container">
    <h2 class="reset-password-title">Quên mật khẩu à :))))</h2>
    <form @submit.prevent="resetPassword" class="reset-password-form">
      <div class="form-group">
        <label for="email" class="form-label">Nhập Email vào đeyyyy:</label>
        <input type="email" id="email" v-model="email" required class="form-input">
      </div>
      <button type="submit" class="submit-btn">Gửi yêu cầu</button>
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
.reset-password-container {
  max-width: 200px;

  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);

}
.reset-password-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh; /* Đảm bảo chiều cao tối thiểu là toàn màn hình */
}

.reset-password-container {
  max-width: 600px; /* Tăng kích thước max-width */
  margin: 2rem auto;
  padding: 2rem;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.reset-password-title {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
  font-size: 1.5rem;
}

.reset-password-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1rem;
}

.form-label {
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #555;
}

.form-input {
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: border-color 0.3s ease;
}

.form-input:focus {
  outline: none;
  border-color: #4caf50;
}

.submit-btn {
  padding: 0.75rem 1.5rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  font-size: 1rem;
}

.submit-btn:hover {
  background-color: #45a049;
}
</style>