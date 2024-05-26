<template>
  <div class="ForgotPassword-container flex align-items-center justify-content-center h-screen ">
    <form @submit.prevent="resetPassword" class="max-w-30rem w-100 p-4 rounded-5 shadow-3 bg-white-alpha-50">
      <div class="card-containerflex-column align-items-center ">
        <div class="welcome-message text-center mb-5">
          <i class="pi pi-spin pi-sparkles text-5xl"  ></i>
          <h2 class="font-bold pt-2">Quên mật khẩu à :))))</h2>
        </div>

        <div class="input-group">
          <span class="p-float-label w-100">
            <InputText id="email" v-model="email" class="input-field rounded-5 p-2 w-100" />
            <label for="email" class="pl-2">Nhập Email vào đeyyyy:</label>
          </span>
        </div>
      </div>

      <div class="link-container flex align-items-center pt-3">
        <Button label="Gửi yêu cầu" severity="Primary" class="resetPassword-button rounded-5 p-2 rounded-pill w-100 mt-1" @click="resetPassword"/>
      </div>

      <div class="link-container flex justify-content-between align-items-center mb-2">
        <router-link to="/login">
          <Button icon="pi pi-arrow-left" label=" &nbsp; Quay lại" class="p-button-text button-with-icon font-italic"/>
        </router-link>
      </div>
    </form>
  </div>
</template>

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
      email: '',
      userImage: 'path_to_user_image.jpg'
    };
  },
  methods: {
    resetPassword() {
      console.log('Yêu cầu quên mật khẩu cho:', this.email);
      this.router.push('/login');
    }
  }
});
</script>

<style scoped>
 

.p-float-label label {
  margin-top: -0.5em; 
} 

</style>
