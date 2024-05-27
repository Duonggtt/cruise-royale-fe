<template>
  <div class="login-container flex align-items-center justify-content-center bg-white-alpha-100 h-screen">

    <form @submit.prevent="login" class="max-w-30rem w-100 p-4 rounded-5 shadow-3 bg-white-alpha-50">

      <div class="card-container flex-column align-items-center">

        <div class="welcome-message text-center mb-3">
          <img :src="userImage" alt="User Image" class="user-image rounded-circle w-5rem"/>
          <h2 class="pt-3  font-bold">Welcome, Travel!</h2>
        </div>

        <div class="input-group w-100 flex-column align-items-center mb-4">
            <span class="p-float-label w-100 ">

              <InputText id="username" v-model="username" class="input-field rounded-5 w-100 h-3rem "/>
              <label for="username" class="pl-2  ">Username</label>

            </span>
        </div>
        <div class="input-group w-100 flex-column align-items-center mb-4">
            <span class="p-float-label w-100">
              <InputText id="password" v-model="password" class="input-field rounded-5 w-100 h-3rem "/>
              <label for="password" class="pl-2">Password</label>
            </span>
        </div>
      </div>

      <div class="link-container flex justify-content-between align-items-center mb-2">
        <div class="flex align-items-center pl-2 ">
          <Checkbox v-model="checked" inputId="ingredient1" name="pizza" value="Cheese"/>
          <label for="ingredient1" class="ml-1 text-purple-800 cursor-pointer"> Lưu cho lần sau </label>
        </div>

        <a @click="handleForgotPassword"
           class="font-medium no-underline ml-2 pr-2 text-right cursor-pointer text-purple-800">Quên mật khẩu ?</a>
      </div>
      <div class="link-container flex align-items-center">
        <Button label="Đăng ký" severity="primary" class="signup-button rounded-pill mr-4 w-100 mt-1"
                @click="handleSignUp"/>
        <Button label="Đăng nhập" severity="primary" class="login-button  rounded-pill ml-4 w-100 mt-1" @click="login"/>
      </div>

      <div class="social-login flex-column align-items-center mt-3">
        <Button label="Đăng nhập với Google" class="google-button rounded-pill w-100 mb-1" @click="handleGoogleLogin"/>
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
import {defineComponent} from 'vue';
import {useRouter} from 'vue-router';


export default defineComponent({
  setup() {
    const router = useRouter();
    return {router};
  },
  data() {
    return {
      username: '',
      password: '',
      checked: false,
      userImage: '/img_log/anh03.jpg'
    };
  },
  methods: {
    login() {
      console.log('Đăng nhập với:', this.username, this.password, this.checked);
      this.$emit('updateState', 'register');
      // this.router.push('/login');
    },
    handleSignUp() {
      this.$emit('updateState', 'register');
      // this.router.push('/Register');
    },
    handleGoogleLogin() {
      // this.router.push('/');
      console.log('Xử lý đăng nhập với Google');

    },
    handleForgotPassword() {
      // this.router.push('/FogotPassword'); // use this.router instead of useRouter()
    }
  }
});
</script>
