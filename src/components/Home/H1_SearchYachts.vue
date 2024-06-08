<template>
  <div class=" card flex justify-center mt-24 relative">
    <div class="card">
      <Carousel :value="images"  class="max-w-7xl rounded-3xl" :autoplay="true" circular :autoplayInterval="1500" :navigation="false" >
        <template #item="slotProps">
          <img :src="slotProps.data" class="object-cover h-full w-full rounded-3xl" alt="">
        </template>
      </Carousel>
    </div>

    <div class="absolute bg-white rounded-3xl shadow-1 p-6 flex flex-col items-center -bottom-20 w-3/4 max-w-5xl">
      <h2 class="text-3xl font-bold mb-2">Bạn lựa chọn du thuyền Hạ Long nào?</h2>
      <p class="text-gray-600 mb-4">Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
      <div class="flex space-x-3  text-sm">
        <InputText type="text " class="w-auto  text-sm rounded-3xl pl-4" placeholder="Nhập tên du thuyền"/>
        <Dropdown class="w-auto rounded-3xl pi pi-flag flex align-items-center px-3" :options="locations" optionLabel="name" placeholder="Tất cả địa điểm" scroll-height="1"/>
        <Dropdown class="w-auto  rounded-3xl pi pi-money-bill flex align-items-center px-3" :options="prices" optionLabel="range" placeholder="Tất cả mức giá" scroll-height="1"/>
        <Button label="Tìm kiếm" class="bg-teal-500 text-white w-full  rounded-3xl"/>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import { ref } from 'vue';

// const yachts = ref([
//   'Du thuyền Indochine',
//   'Du thuyền Le Theatre',
//   'Du thuyền Orchid Trendy',
//   'Du thuyền Milalux',
//   'Du thuyền Paradise Elegance Hạ Long',
//   'Du thuyền Paradise Peak',
//   'Du thuyền Aspira',
//   'Du thuyền La Pandora',
//   'Du thuyền Orchid Premium Ha Long'
// ]);

const images = ref([
  '/thum01.jpg',
  '/thum01.jpg',
  '/thum01.jpg',
  '/thum01.jpg',
  '/thum01.jpg',
  '/thum01.jpg',
  '/thum01.jpg',
  '/thum01.jpg',
]);

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
