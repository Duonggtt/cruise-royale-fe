<template>
  <Disclosure as="nav" class="bg-white dark:bg-[#121212] sticky top-0 z-50 shadow-md" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
            <span class="absolute -inset-0.5"/>
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true"/>
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true"/>
          </DisclosureButton>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center animate-duration-1000 animate-ease-in-out" @click="$router.push('/home')" v-animateonscroll="{ enterClass: 'animate-fadeinleft'  }">
            <img class="h-10 w-auto" src="/Logo/Logo-Cruise-Royal.svg" alt="Your Company"/>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <a v-for="item in navigation" :key="item.name" @click="$router.push(item.href)"
                 class="rounded-md px-3 py-2 text-sm font-bold text-gray-600 hover:border-blue-400 hover:border-1 cursor-pointer"
                 :aria-current="item.current ? 'page' : undefined">{{ item.name }}</a>
            </div>
          </div>
        </div>
        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <button type="button"
                  class="relative rounded-full  p-1 text-gray-600 hover:scale-105 ">
            <span class="absolute -inset-1.5"/>
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true"/>
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="relative ml-3">
            <div>

              <MenuButton class="relative flex rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300">
                <span class="absolute -inset-1.5"/>
                <span class="sr-only">Open user menu</span>
                <img class="h-8 w-8 rounded-full" :src="avatarImage" alt="" @click="handleAvatarClick"/>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-100" enter-from-class="transform opacity-0 scale-95"
                        enter-to-class="transform opacity-100 scale-100" leave-active-class="transition ease-in duration-75"
                        leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
              <MenuItems class="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                  <p v-if="!authStore.user" @click="handleAvatarClick" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']"> Đăng ký/ Đăng nhập</p>
                  <p v-else @click="$router.push('/profile')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Lịch sử hành trình </p>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <p @click="$router.push('/profile')" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Trang thông tin</p>
                </MenuItem>
                <MenuItem v-slot="{ active }">
                  <p @click="logout" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700 cursor-pointer']">Đăng xuất</p>
                </MenuItem>
              </MenuItems>
            </transition>
            <Dialog class="" v-model:visible="visible" :pt="{  root: 'border-none',  mask: {  style: 'backdrop-filter: blur(2px)'   }  }" :destroyOnClose="true">
              <Login v-if="dialogState === 'login'" @updateState="handleStateChange" @updateVisible="handleVisibleChange"/>
              <Reg v-else-if="dialogState === 'register'" @updateState="handleStateChange"/>
              <ForgotPassword v-else-if="dialogState === 'ForgotPassword'" @updateState="handleStateChange"/>
            </Dialog>
          </Menu>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <DisclosureButton
            v-for="item in navigation" :key="item.name" as="a" :href="item.href"
            :class="[item.current ? '' : 'text-gray-600 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']"
            :aria-current="item.current ? 'page' : undefined">{{ item.name }}
        </DisclosureButton>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup lang="ts">
import {Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems} from '@headlessui/vue'
import {Bars3Icon, BellIcon, XMarkIcon} from '@heroicons/vue/24/outline'
import {onMounted, ref, watch} from 'vue';
import {useAuthStore} from '@/stores/counter';
import router from "@/router";
import {useToast} from "primevue/usetoast";


interface NavigationItem {
  name: string;
  href: string;
  current: boolean;
}

const navigation: NavigationItem[] = [
  {name: 'Tìm du thuyền', href: 'SearchCuiseView', current: true},
  {name: 'Doanh nghiệp', href: '/', current: false},
  {name: 'Blog', href: 'profile', current: false},
]


interface MenuItem {
  label?: string;
  icon?: string;
  link?: string;
}

const authStore = useAuthStore();
const handleAvatarClick = () => {
  if (authStore.user) {
    router.push('/profile');
  } else {
    visible.value = true;
  }


};

const AnhDuPhong = ref('https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com');
const avatarImage = AnhDuPhong;

const handleVisibleChange = (newVisible: boolean) => {
  visible.value = newVisible;
  if (authStore.user) {
    const userImage = JSON.parse(localStorage.getItem('userImage') || '[]');
    if (userImage.length > 0) {
      avatarImage.value = `data:image/jpeg;base64,${userImage[0].data}`;
      console.log(avatarImage.value);
    }
  }
};


onMounted(() => {
  if (authStore.user) {
    const userImage = JSON.parse(localStorage.getItem('userImage') || '[]');
    if (userImage.length > 0) {
      avatarImage.value = `data:image/jpeg;base64,${userImage[0].data}`;
    }
  }
});


const visible = ref(false);
const dialogState = ref('login');
const handleStateChange = (newState: string) => {
  dialogState.value = newState;
  visible.value = true;

};

const toast = useToast();
const logout = async () => {
  const authStore = useAuthStore();
  await authStore.logout();
  toast.add({severity: 'error', summary: 'Error', detail: `Đã đăng xuất`, life: 500, contentStyleClass: 'gap-3', closable: false});
  setTimeout(() => {
    router.push('/home')
  }, 500);
};

const showMenu = ref(false);
const items = ref<MenuItem[]>([
  {label: 'Tìm du thuyền', link: 'SearchCuiseView'},
  {label: 'Doanh nghiệp', link: '/'},
  {label: 'Blog', link: 'profile'}
]);
</script>