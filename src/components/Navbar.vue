<template>
  <div class="card flex justify-content-center  fixed top-0 z-50 shadow-1 bg-white">

    <Menubar :model="items" class="flex w-8/12  border-none xl:max-w-7xl xl:mx-auto m-auto bg-white bg-transparent">
      <template #start>
        <img src="/Logo/Logo-Cruise-Royal.svg" alt="logo" class=" h-3rem mr-3" @click="$router.push('/home')"/>
      </template>
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center  " v-bind="props.action" :href="item.link">
          <span :class="item.icon"/>
          <span class="font-bold   ">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex items-center end-0 gap-2 w-full min-w-50 " @click="showMenu = false">
          <i class="pi pi-phone"></i>
          <span class=" font-bold pr-3 hover:text-green-500 cursor-pointer"> Liên Hệ: 0123456789</span>
          <Avatar class="h-2rem w-2rem border-2 hover:border-green-100 cursor-pointer" image="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com" shape="circle"
                  @mouseover="showMenu = true" @click="handleAvatarClick"/>
          <div v-if="showMenu && authStore.user" class="absolute top-20 right-30 bg-white rounded shadow p-2" @mouseover="showMenu = true"
               @mouseleave="showMenu = false">
            <div class="cursor-pointer p-2 hover:bg-black-alpha-10 rounded" @click="$router.push('/profile')">
              Thông tin người dùng
            </div>
            <Toast class="z-50" />
            <div class="cursor-pointer p-2 hover:bg-black-alpha-10 rounded" @click="logout">Đăng xuất</div>
          </div>
          <Dialog v-model:visible="visible" :pt="{  root: 'border-none',  mask: {  style: 'backdrop-filter: blur(2px)'   }  }" :destroyOnClose="true">
            <Login v-if="dialogState === 'login'" @updateState="handleStateChange" @updateVisible="handleVisibleChange"/>
            <Reg v-else-if="dialogState === 'register'" @updateState="handleStateChange"/>
            <ForgotPassword v-else-if="dialogState === 'ForgotPassword'" @updateState="handleStateChange"/>
          </Dialog>
        </div>
      </template>
    </Menubar>
  </div>


</template>

<script setup lang="ts">
import Toast from "primevue/toast";
import {onMounted, ref} from 'vue';
import {useAuthStore} from '@/stores/counter';
import router from "@/router";
import {useToast} from "primevue/usetoast";
interface MenuItem {
  label?: string;
  icon?: string;
  link?: string;
}

const authStore = useAuthStore(); // Tạo một instance của authStore

onMounted(() => {
  if (authStore.user) {
    visible.value = false;
  }
});
const handleAvatarClick = () => {
  if (authStore.user) {
    // If user is logged in, navigate to profile page
    router.push('/profile');
  } else {
    // If user is not logged in, show login dialog
    visible.value = true;
  }
};

const handleVisibleChange = (newVisible:boolean) => {
  visible.value = newVisible;
};

const visible = ref(false);

const dialogState = ref('login');

const handleStateChange = (newState: string) => {
  dialogState.value = newState;
  visible.value = true;
};

const toast = useToast();

const logout = () => {
  const authStore = useAuthStore();
  authStore.logout();
  toast.add({  severity: 'error',   summary: 'Đã đăng xuuất',  detail: ` Đã đăng xuuất `, life: 500 });

};

const showMenu = ref(false);

const items = ref<MenuItem[]>([
  {label: 'Tìm du thuyền', link: 'home'},
  // { label: 'Tìm vé máy bay' , link:'home'},
  {label: 'Doanh nghiệp', link: 'home'},
  {label: 'Blog', link: 'home'}
]);


</script>
