<template>
  <div class="regitser-container  flex align-items-center justify-content-center bg-white-alpha-100 h-screen ">
    <form @submit.prevent="register" class="px-20 py-10  border-round-3xl shadow-3  w-auto ">
      <div class="card-container w-30rem">
        <div class="welcome-message text-center mb-5">
          <h2 class="font-bold pt-2"><i class="pi pi-spin pi-sparkles text-5xl"></i> Đăng ký nhé !</h2>
        </div>

          <span class="p-float-label mb-4  ">
            <InputText id="name" v-model="name" class="p-input-filled w-full pl-3"/>
            <label for="name" class="pl-3">Tên</label>
          </span>
          <span class="p-float-label mb-4">
            <InputText id="phone" v-model="phone" class="p-input-filled w-full pl-3"/>
            <label for="phone" class="pl-3">Số điện thoại</label>
          </span>
          <span class="p-float-label mb-4 ">
            <InputText id="email1" v-model="email" class="p-input-filled w-full pl-3"  />
            <label for="email1" class="pl-3">Email</label>
          </span>

          <span class="p-float-label mb-4 border-1 border-round-3xl  border-gray-300"  >
            <Password id="password1" v-model="password" :toggleMask="false" class="" inputClass="p-input-filled pl-3"></Password>
            <label for="password1" class="pl-3 ">Nhập mật khẩu</label>
          </span>
          <span class="p-float-label mb-4  border-1 border-round-3xl  border-gray-300">
            <Password id="password2" v-model="password2" :toggleMask="false" class="" inputClass="p-input-filled pl-3"></Password>
            <label for="password2" class="pl-3">Nhập lại mật khẩu</label>
          </span>

      </div>
      <div class="link-container mb-3">
        <Button label="Đăng Ký" severity="Primary" class="signup-button  mt-1 w-full  " @click="register"/>
      </div>
      <div class="link-container flex ">
        <Button icon="pi pi-arrow-left" label=" &nbsp; Quay lại" class="p-button-text button-with-icon flex  font-italic " @click="Back"/>
      </div>
    </form>
  </div>
</template>



<script lang="ts">
import {defineComponent, reactive} from 'vue';
import {useRouter} from 'vue-router';
import {useAuthStore} from "@/stores/counter";

export default defineComponent({
  setup() {
    const router = useRouter();
    const authStore = useAuthStore();
    const user = reactive({
      username: '',
      password: ''
    });
    const onSubmit = () => {
      console.log(user);
      if (user.username !== '' && user.password !== '') {
        authStore.register(user.username, user.password);
      }
    };





    return {router};



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
      // Sự kiện đăng ký
      this.$emit('updateState', 'login');
    },
    Back() {
      this.$emit('updateState', 'login');
    }

  }
});
</script>
