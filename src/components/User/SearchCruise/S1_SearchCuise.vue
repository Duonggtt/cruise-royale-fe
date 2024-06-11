
<template>
  <div class="mx-auto max-w-screen-xl px-4 py-10 ">
    <div class=" mt-24 bg-white rounded-3xl shadow-1 flex flex-col items-center w-11/12 mx-auto p-5 ">
      <h2 class="text-3xl font-bold mb-2">Bạn lựa chọn du thuyền Hạ Long nào?</h2>
      <p class="text-gray-600 mb-4">Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
      <div class="lg:flex space-x-3 w-full text-sm">
        <InputText type="text " class="w-auto  text-sm rounded-3xl pl-4" placeholder="Nhập tên du thuyền"/>
        <Dropdown class="w-auto rounded-3xl pi pi-flag flex align-items-center px-3" :options="locations" optionLabel="name" placeholder="Tất cả địa điểm" scroll-height="1"/>
        <Dropdown class="w-auto  rounded-3xl pi pi-money-bill flex align-items-center px-3" :options="prices" optionLabel="range" placeholder="Tất cả mức giá" scroll-height="1"/>
        <Button label="Tìm kiếm" class="bg-teal-500 text-white w-full  rounded-3xl"/>
      </div>
    </div>
  </div>


</template>
<script setup lang="ts">

import {ref} from "vue";

const locations = ref([
  { name: 'Tất cả địa điểm' },
  { name: 'Vinh Hạ Long' },
  { name: 'Vinh Lan Hạ' },
  { name: 'Đảo Cát Bà' }
]);

const prices = ref([
  { range: 'Tất cả mức giá' },
  { range: 'Từ 1 đến 3 triệu' },
  { range: 'Từ 3 đến 6 triệu' },
  { range: 'Trên 6 triệu' }
]);
</script>
