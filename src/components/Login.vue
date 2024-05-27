<template>
  <div class="login-container flex align-items-center justify-content-center bg-white-alpha-100 h-screen">
    <form @submit.prevent="onSubmit" class="max-w-30rem w-100 p-4 rounded-5 shadow-3 bg-white-alpha-50">
      <div class="card-container flex-column align-items-center">
        <div class="welcome-message text-center mb-3">
          <img :src="userImage" alt="User Image" class="user-image rounded-circle w-5rem" />
          <h2 class="pt-3 font-bold">Welcome, Travel!</h2>
        </div>
        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <InputText id="username" v-model="user.username" class="input-field rounded-5 w-100 h-3rem" />
            <label for="username" class="pl-2">Username</label>
          </span>
        </div>
        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <InputText id="password" v-model="user.password" type="password" class="input-field rounded-5 w-100 h-3rem" />
            <label for="password" class="pl-2">Password</label>
          </span>
        </div>
      </div>
      <div class="link-container flex justify-content-between align-items-center mb-2">
        <div class="flex align-items-center pl-2">
          <Checkbox v-model="checked" inputId="ingredient1" name="pizza" value="Cheese" />
          <label for="ingredient1" class="ml-1 text-purple-800 cursor-pointer"> Lưu cho lần sau </label>
        </div>
        <a @click="handleForgotPassword" class="font-medium no-underline ml-2 pr-2 text-right cursor-pointer text-purple-800">Quên mật khẩu ?</a>
      </div>
      <div class="link-container flex align-items-center">
        <Button label="Đăng nhập" severity="primary" class="login-button rounded-pill w-100 mt-1" type="submit" />
      </div>
      <div class="welcome-message text-center mb-3 pt-1">
        <a @click="handleSignUp" class="font-normal no-underline ml-2 pr-2 text-right cursor-pointer text-purple-800">Chưa có tài khoản? Đăng ký</a>
      </div>
    </form>
  </div>
</template>

<style scoped>
.p-float-label label {
  margin-top: -0.5em;
}
</style>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import { useAuthStore } from '../stores/counter';
import { reactive } from 'vue';

export default defineComponent({
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const user = reactive({
      username: '',
      password: ''
    });

    const handleSignUp = () => {
      router.push('/register');
    };

    const handleForgotPassword = () => {
      router.push('/forgot-password');
    };

    const onSubmit = () => {
      console.log(user);
      if (user.username !== '' && user.password !== '') {
        authStore.login(user.username, user.password);
      }
    };

    return {
      user,
      handleSignUp,
      handleForgotPassword,
      onSubmit
    };
  },
  data() {
    return {
      checked: false,
      userImage: '/img_log/anh03.jpg'
    };
  }
});
</script>