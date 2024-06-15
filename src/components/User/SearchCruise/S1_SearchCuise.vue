<template>
  <div class="mx-auto max-w-screen-xl px-4  ">
    <div class="bg-white rounded-3xl  flex flex-col items-center lg:w-11/12 mx-auto p-8 shadow-md ">
      <h2 class="text-3xl font-bold mb-2">Bạn lựa chọn du thuyền Hạ Long nào?</h2>
      <p class=" mb-4">Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
      <div class="flex flex-col sm:flex-row justify-between gap-2 w-full text-sm">
        <InputText type="text " class="w-full lg:w-auto text-sm rounded-3xl pl-4" placeholder="Nhập tên du thuyền"/>
        <CascadeSelect v-model="selectedLocation" :options="locations" optionLabel="name" optionGroupLabel="name" :optionGroupChildren="['locations']"
                       placeholder="Chọn địa điểm" class="w-full lg:w-56 rounded-3xl pi pi-flag flex align-items-center px-3"/>
        <CascadeSelect v-model="selectedPrice" :options="prices" optionLabel="range" optionGroupLabel="range" :optionGroupChildren="['prices']"
                       placeholder="Chọn mức giá" class="w-full lg:w-56 min-w-52s rounded-3xl pi pi-money-bill flex align-items-center px-3"/>
        <Button label="Tìm kiếm" class="w-full lg:w-56 rounded-3xl"/>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import {ref} from "vue";


const selectedLocation = ref();
const selectedPrice = ref();
const locations = ref([
  {
    name: 'Tất cả địa điểm',
    code: 'all',
    locations: [
      {name: 'Vinh Hạ Long', code: 'vhl'},
      {name: 'Vinh Lan Hạ', code: 'vlh'},
      {name: 'Đảo Cát Bà', code: 'dcb'}
    ]
  }
]);

const prices = ref([
  {
    range: 'Tất cả mức giá',
    code: 'all',
    prices: [
      {range: 'Từ 1 đến 3 triệu', code: 'p1'},
      {range: 'Từ 3 đến 6 triệu', code: 'p2'},
      {range: 'Trên 6 triệu', code: 'p3'}
    ]
  }
]);
</script>
