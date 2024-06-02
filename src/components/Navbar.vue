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
          <Avatar class="h-2rem w-2rem border-2 hover:border-green-100" image="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com" shape="circle"
                  @mouseover="showMenu = true" @click="visible = true"/>
          <div v-if="showMenu" class="absolute top-20 right-30 bg-white rounded shadow p-2" @mouseover="showMenu = true"
               @mouseleave="showMenu = false">
            <Dialog v-model:visible="visible" modal :pt="{  root: 'border-none',  mask: {  style: 'backdrop-filter: blur(2px)'   }  }"  >
                <Login/>
            </Dialog>
            <Toast class="z-50"/>
            <div class="cursor-pointer p-2 hover:bg-black-alpha-10 rounded" @click="$router.push('/profile')">
              Thông tin người dùng
            </div>
            <div class="cursor-pointer p-2 hover:bg-black-alpha-10 rounded" @click="$router.push('/')">Đăng xuất</div>
          </div>
        </div>
      </template>
    </Menubar>
  </div>


</template>

<script setup lang="ts">
import {ref} from 'vue';

interface MenuItem {
  label?: string;
  icon?: string;
  link?: string;
}

const visible = ref(true);

const showMenu = ref(false);

const items = ref<MenuItem[]>([
  {label: 'Tìm du thuyền', link: 'home'},
  // { label: 'Tìm vé máy bay' , link:'home'},
  {label: 'Doanh nghiệp', link: 'home'},
  {label: 'Blog', link: 'home'}
]);


</script>
