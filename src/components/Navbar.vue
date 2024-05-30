<template>
  <div class="card w-full flex justify-center bg-gray-100 ">
    <Menubar :model="items" class="flex w-8/12 justify-between bg-transparent border-none xl:max-w-7xl xl:mx-auto ">

      <template #item="{ item, props, hasSubmenu, root }" class="w-10/12 flex items-center justify-start">
        <a v-ripple class="flex items-center " v-bind="props.action">
          <img v-if="item.label === 'Tìm du thuyền'" src="/img_log/anh01.jpg" alt="Logo" class="rounded-full mr-2 h-4rem pr-5 " />
          <span :class="item.icon"/>
          <span class="font-bold  rounded-full hover:text-green-500">{{ item.label }}</span>
        </a>
      </template>

      <template #end>

        <div class="flex items-center gap-2 w-full justify-end">
          <InputText placeholder="Search" type="text" class="w-[8rem] sm:w-auto rounded-full "/>
          <Avatar  class="h-3rem w-3rem" image="/img_log/anh03.jpg"  shape="circle"  @click="$router.push('/profile')"/>
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
  items?: MenuItem[];
  separator?: boolean;
  badge?: number | string;
  shortcut?: string;
}

const items = ref<MenuItem[]>([
  {
    label: 'Tìm du thuyền'
    // ,  icon: 'pi pi-home'
  },
  {
    label: 'Tìm vé máy bay'
    // , icon: 'pi pi-star'
  },
  {
    label: 'Doanh nghiệp'
    // ,  icon: 'pi pi-search',
  },
  {
    label: 'Blog'
    // , icon: 'pi pi-envelope'
  }
]);
</script>
