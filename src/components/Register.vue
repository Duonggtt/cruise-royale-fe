<template>
  <div class="login-container flex align-items-center justify-content-center h-screen ">
    <form @submit.prevent="register" class="max-w-30rem w-100 p-4 rounded-5 shadow-3 bg-white-alpha-50">
      <div class="card-container flex-column align-items-center">

        <div class="welcome-message text-center mb-5">

          <h2 class="font-bold pt-2"><i class="pi pi-spin pi-sparkles text-5xl"></i> Đăng ký nhé !</h2>
        </div>
        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <InputText id="name" v-model="name" class="w-100 rounded-pill p-3" />
            <label for="name" class="pl-3">Tên</label>
          </span>
        </div>

        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <InputText id="phone" v-model="phone" class="w-100 rounded-pill p-3" />
            <label for="phone" class="pl-3">Số điện thoại</label>
          </span>
        </div>

        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <InputText id="email1" v-model="email" class="w-100 rounded-pill p-3" placeholder="Email address" />
            <label for="email1" class="pl-3">Email</label>
          </span>
        </div>


        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <Password id="password1" v-model="password" :toggleMask="false" class="w-100"
              inputClass="w-100 rounded-pill pl-4 font-medium text-sm" :inputStyle="{ 'line-height': '2rem' }"></Password>
            <label for="password1" class="pl-3">Nhập mật khẩu</label>
          </span>
        </div>
        <div class="input-group w-100 flex-column align-items-center mb-4">
          <span class="p-float-label w-100">
            <Password id="password2" v-model="password2" :toggleMask="false" class="w-100"
              inputClass="w-100 rounded-pill pl-4 font-medium text-sm" :inputStyle="{ 'line-height': '2rem' }"></Password>
            <label for="password2" class="pl-3">Nhập lại mật khẩu</label>
          </span>
        </div>

      </div>


      <div class="link-container flex justify-content-between align-items-center mb-2">
        <Button label="Đăng Ký" severity="Primary" class="signup-button rounded-pill w-100 mt-1 " @click="register" />
      </div>

      <div class="link-container flex justify-content-between align-items-center mb-2">
        <Button icon="pi pi-arrow-left" label=" &nbsp; Quay lại"
          class="p-button-text button-with-icon flex align-items-center font-italic " @click="register" />
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

export default defineComponent({
  setup() {
    const router = useRouter();
    return { router };
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      password2: '',
      userImage: 'path_to_user_image.jpg'
    };
  },
  methods: {
    register() {
      console.log('Đăng ký với:', this.name, this.phone, this.email, this.password);
      this.router.push('/login');
    }
  }
});
</script>
