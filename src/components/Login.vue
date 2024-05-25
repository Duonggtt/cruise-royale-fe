<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <h2 class="label-login">Đăng nhập</h2>
      <div class="card-container">


        <div class="card" >
          <FloatLabel>
            <InputText id="username" v-model="username" class="input-field"/>
            <label for="username">Username</label>
          </FloatLabel>
        </div>

        <div class="card">
          <FloatLabel>
            <InputText id="password" v-model="password" type="password" class="input-field"/>
            <label for="password">Mật khẩu</label>
          </FloatLabel>
        </div>
      </div>

      <div class="link-container">
        <router-link to="/register">Chưa có tài khoản? Đăng ký ngay!</router-link>
        <router-link to="/FogotPassword">Quên mật khẩu?</router-link>
      </div>

      <Button label="Đăng nhập" severity="Primary" class="login-button"/>
    </form>
  </div>
</template>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

form {
  max-width: 600px;
  min-width: 500px;
  width: 100%;
  padding: 2rem;
  background-color: #fff;
  border-radius: 0.5rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

h2 {
  font-family: "Maven Pro ExtraBold" ,sans-serif;
  text-align: center;
  margin-bottom: 2rem;
  color: #333;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card {
  width: 70%;
  margin-bottom: 1rem;
}

.input-field {
  width: 100%;
  padding: 0.5rem;
  box-sizing: border-box;
}

.input-field + label {
  left: 0.5rem;
  top: 50%;
  transform: translateY(-50%);
}

.link-container {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
}

button {
  width: 100%;
  margin-top: 1rem;
}
</style>


<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  data() {
    return {
      password: '',
      username: '',
      birthdate: null
    };
  },
  methods: {
    login() {
      console.log('Đăng nhập với:', this.username, this.password, this.birthdate);
      this.$router.push('/home');
    }
  }
});
</script>
