<template>
  <div class="card w-full flex justify-center bg-gray-100 fixed top-0 z-50">
    <Menubar :model="items" class="flex w-8/12 justify-between bg-transparent border-none xl:max-w-7xl xl:mx-auto ">
       <template #start>
        <img src="/Logo/Logo-Cruise-Royal.svg" alt="logo" class=" h-5rem "  @click="$router.push('/home')"/>
       </template>
      <template #item="{ item, props }">
        <a v-ripple class="flex items-center " v-bind="props.action">
          <span :class="item.icon"/>
          <span class="font-bold  rounded-full hover:text-green-500">{{ item.label }}</span>
        </a>
      </template>
      <template #end>
        <div class="flex items-center gap-2 w-full justify-end"  @click="showMenu = false">
          <i class="pi pi-phone"></i>
         <span class=" font-bold pr-3 hover:text-green-500 cursor-pointer">Liên Hệ: 0888888888</span>
          <Avatar class="h-3rem w-3rem border-2 hover:border-green-100" image="/img_log/anh03.jpg" shape="circle" @mouseover="showMenu = true" />
          <div v-if="showMenu" class="absolute top-20 right-30 bg-white rounded shadow p-2" @mouseover="showMenu = true" @mouseleave="showMenu = false">
            <div class="cursor-pointer p-2 hover:bg-black-alpha-10 rounded" @click="$router.push('/profile')">Thông tin người dùng</div>
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
}
const showMenu = ref(false);

const items = ref<MenuItem[]>([
  { label: 'Tìm du thuyền' },
  { label: 'Tìm vé máy bay' },
  { label: 'Doanh nghiệp' },
  { label: 'Blog' }
]);
</script>
