<template>
  <form @submit.prevent="onSubmit" class="p-5 border-round-3xl  w-auto bg-white opacity-95">
    <div class="card-container  w-30rem">
      <div class="welcome-message text-center  align-items-center mb-3">
        <img :src="userImage" alt="User Image" class="user-image  w-6rem mx-auto"/>
        <h2 class="pt-3 font-bold">Welcome, Cruise Royal</h2>
      </div>
      <div class="input-group flex-column align-items-center mb-4">
                <span class="p-float-label ">
                    <InputText id="username" v-model="user.username" class="p-input-filled  w-full h-3rem pl-3"/>
                    <label for="username" class="pl-2">Username</label>
                </span>
      </div>
      <div class="input-group flex-column align-items-center mb-4">
                <span class="p-float-label">
                    <InputText id="password" v-model="user.password" type="password"
                               class="p-input-filled  w-full h-3rem pl-3"/>
                    <label for="password" class="pl-2">Password</label>
                </span>
      </div>
    </div>
    <div class="link-container flex justify-content-between align-items-center mb-2">
      <div class="flex align-items-center pl-3">
        <Checkbox v-model="checked" inputId="ingredient1" name="pizza" value="Cheese"/>
        <label for="ingredient1" class="ml-1.5 text-purple-800 cursor-pointer"> Lưu cho lần sau </label>
      </div>
      <a @click="handleForgotPassword" class="font-medium  ml-2 pr-2  cursor-pointer text-purple-800">Quên mật khẩu
        ?</a>
    </div>
    <div class="link-container flex align-items-center">
<!--      <Toast class="z-50"/>-->
      <Button label="Đăng nhập" severity="primary" class="login-button  w-full  mt-5" type="submit" @click="HomeView"/>
    </div>

    <div class="welcome-message text-center mb-3 pt-3">
      <a @click="handleSignUp" class="font-normal  ml-2  cursor-pointer text-green-500">Chưa có tài khoản? Đăng ký</a>
    </div>
  </form>

</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useAuthStore} from '@/stores/counter';
import {reactive} from 'vue';
export default defineComponent({
  data() {
    return {
      user: reactive({
        username: '',
        password: ''
      }),
      checked: false,
      userImage: '/Logo/Logo-Cruise-Royal.svg '
    };
  },
  methods: {
    onSubmit() {
      console.log(this.user);
      if (this.user.username !== '' && this.user.password !== '') {

        const authStore = useAuthStore();
        authStore.login(this.user.username, this.user.password).then(sta => {

          if (sta) {
            setTimeout(() => {
              this.$toast.add({  severity: 'success', summary: 'Login Thành Công ',  detail: `Xin chào ${this.user.username}`, life: 500  });
              this.$emit('updateVisible', false);
              this.$emit('visible', 'false');
            }, 1);

          } else {
            console.log('Login Failed');
            this.$toast.add({  severity: 'error',   summary: 'Error',  detail: `Vui lòng kiểm tra lại  ${this.user.username}`, life: 500 });
          }
        });
      }
    },
    handleSignUp() {
      this.$emit('updateState', 'register');
    },
    handleForgotPassword() {
      this.$emit('updateState', 'ForgotPassword');
    },
    HomeView() {
      //   router.push('/home');
      //  this.$emit('updateState', 'HomeView');
    }

  }
});
</script>
