<template>
  <div class="regitser-container  flex align-items-center justify-content-center bg-white-alpha-100  ">
    <form @submit.prevent="register" class="px-20 py-10  border-round-3xl w-auto bg-white opacity-95">
      <div class="card-container w-30rem">
        <div class="welcome-message text-center mb-5">
          <h2 class="font-bold pt-2"><i class="pi pi-spin pi-sparkles text-5xl"></i> Đăng ký </h2>
        </div>
        <span class="p-float-label mb-4 ">
          <InputText id="username" v-model="username" class="p-input-filled w-full pl-3"/>
          <label for="username" class="pl-3">Tên đăng nhập</label>
        </span>
        <span class="p-float-label mb-4 ">
         <InputText id="email" v-model="email" class="p-input-filled w-full pl-3"/>
          <label for="email" class="pl-3">Email</label>
        </span>
        <span class="p-float-label mb-4">
         <InputText id="phone" v-model="phone" class="p-input-filled w-full pl-3"/>
          <label for="phone" class="pl-3">Số điện thoại</label>
        </span>
        <span class="p-float-label mb-4">
          <InputText id="name" v-model="name" class="p-input-filled w-full pl-3"/>
          <label for="name" class="pl-3">Tên</label>
        </span>

        <span class="p-float-label mb-4 ">
          <Password id="password" v-model="password" :toggleMask="true" class="" inputClass="p-input-filled pl-3"></Password>
          <label for="password" class="pl-3 ">Nhập mật khẩu</label></span>
        <span class="p-float-label mb-4 ">
           <Password id="passwordCConfirm" v-model="passwordCConfirm" :toggleMask="true" class="" inputClass="p-input-filled pl-3"></Password>
           <label for="passwordCConfirm" class="pl-3">Nhập lại mật khẩu</label>
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

<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';
import {useRouter} from 'vue-router';
import {useToast} from "primevue/usetoast";

const router = useRouter();
const toast = useToast();


let username = ref('');
let name = ref('');
let phone = ref('');
let email = ref('');
let password = ref('');
let passwordCConfirm = ref('');

const props = defineProps();
const emit = defineEmits();

const register = async () => {
  if (!username.value || !name.value || !phone.value || !email.value || !password.value || !passwordCConfirm.value) {
    toast.add({severity: 'error', summary: 'Error', detail: 'Vui lòng điền đầy đủ thông tin', life: 3000, contentStyleClass: 'gap-3', closable: false});
    return;
  }

  if (password.value !== passwordCConfirm.value) {
    toast.add({severity: 'error', summary: 'Error', detail: 'Mật khẩu và mật khẩu xác nhận không khớp', life: 3000, contentStyleClass: 'gap-3', closable: false});
    return;
  }

  const url = 'http://localhost:8080/api/user/save';
  const user = {
    username: username.value,
    name: name.value,
    password: password.value,
    email: email.value,
    phone: phone.value
  };

  console.log('Đăng ký với:', user);

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user)
    });

    if (response.status === 400) {
      toast.add({severity: 'error', summary: 'Error', detail: 'Tên đăng nhập đã tồn tại', life: 3000, contentStyleClass: 'gap-3', closable: false});
      return;
    }

    if (!response.ok) {
      throw new Error(`Server responded with status code ${response.status}`);
    }

    const data = await response.json();
    console.log('Registration successful:', data);
    toast.add({severity: 'success', summary: 'Success', detail: 'Đăng ký thành công', life: 3000, contentStyleClass: 'gap-3', closable: false});

    emit('updateState', 'login');
  } catch (error) {
    console.error('Error during registration:', error);
  }
};
const Back = () => {
  emit('updateState', 'login');
};


</script>
