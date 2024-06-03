<template>
  <div class="ForgotPassword-container  flex align-items-center justify-content-center "  >
    <form @submit.prevent="resetPassword" class="px-20 py-10  border-round-3xl w-auto ">
      <div class="card-container w-30rem">
        <div class="welcome-message text-center mb-5 ">
          <i class="pi pi-spin pi-sparkles text-3xl"  ></i>
          <h2 class="font-bold pb-4">Quên mật khẩu à :))))</h2>
        </div>

        <div class="input-group pb-3">
          <span class="p-float-label w-100">
            <InputText id="email" v-model="email" class="p-input-filled rounded-5 pl-4 w-full" />
            <label for="email" class="pl-2">Nhập Email vào đeyyyy:</label>
          </span>
        </div>
      </div>

      <div class="link-container flex align-items-center pt-3">
        <Button label="Gửi yêu cầu" severity="Primary" class="resetPassword-button rounded-full p-2 rounded-pill w-full mt-1" @click="resetPassword"/>
      </div>

      <div class="link-container mb-2">
        <router-link to="/">
          <Button icon="pi pi-arrow-left" label=" &nbsp; Quay lại" class="p-button-text button-with-icon font-italic" @click="back"/>
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
      this.$emit('updateState', 'login');

    } ,
    back() {
      this.$emit('updateState', 'login');

    }
  }
});
</script>


