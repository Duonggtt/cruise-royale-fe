<template>
  <div class="mx-auto max-w-screen-xl px-4  ">
    <div class="bg-white dark:bg-[#121212] dark:border-2 rounded-3xl  flex flex-col items-center lg:w-11/12 mx-auto p-8 shadow-md ">
      <h2 class="text-3xl font-bold mb-2">Bạn lựa chọn du thuyền Hạ Long nào?</h2>
      <p class=" mb-4">Hơn 100 tour du thuyền hạng sang giá tốt đang chờ bạn</p>
      <div class="flex flex-wrap gap-2">
        <InputText type="text" class="lg:min-w-56 w-full lg:w-56 text-sm rounded-3xl pl-4 shrink-0 basis-auto lg:basis-[10rem]" placeholder="Nhập tên du thuyền"/>
        <CascadeSelect v-model="selectedLocation" :options="locations" optionLabel="name" optionGroupLabel="name" :optionGroupChildren="['locations']"
                       placeholder="Chọn địa điểm" class="w-full lg:w-56 lg:min-w-56 rounded-3xl pi pi-flag flex align-items-center px-3 shrink-0 basis-auto lg:basis-[10rem]"/>
        <CascadeSelect v-model="selectedPrice" :options="prices" optionLabel="range" optionGroupLabel="range" :optionGroupChildren="['prices']"
                       placeholder="Chọn mức giá" class="w-full lg:w-80 min-w-56 rounded-3xl pi pi-money-bill flex align-items-center px-3 shrink-0 basis-auto lg:basis-[10rem]"/>
        <Button label="Tìm kiếm" class="w-full lg:w-56 lg:min-w-56 rounded-3xl shrink-0 basis-auto lg:basis-[10rem]"/>
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


const datas = ref({
  popularShips: [
    {
      __v: 0,
      _id: "64c9203a8ef7bb418f40c683",
      active: true,
      address: "Lux Cruises, Lô 28 Cảng Quốc Tế Tuần Châu",
      category: "64c8f53047dcd21cb95abf37",
      defaultPrice: 3550000,
      finalScoreReview: 4.5,
      mapLink: "https://goo.gl/maps/6mQDuQWa4Ybq6K5p8",
      numReviews: 2,
      schedule: "2 ngày 1 đêm.",
      scoreReview: 9,
      shortDescription: [
        "Du thuyền được thiết kế với phong cách sang trọng và truyền thống ",
        "Phòng ngủ tiện nghi sang trọng mang phong cách Á Đông đều có  bồn tắm cạnh cửa kính lớn view vịnh",
        "Đặc biệt hơn, du thuyền thiết kế bể bơi 4 mùa to rộng là địa điểm checkin yêu thích của mọi du khách",
        "Du thuyền có nhiều lịch trình  2 ngày 1 đêm, 3 ngày 2 đêm và  4 ngày 3 đêm cho những ai muốn 1 lịch trình dài hơn trên vịnh Lan Hạ"
      ],
      slug: "du-thuyen-heritage-binh-chuan-cat-ba",
      spec: {
        ship: {
          admin: "Công ty cổ phần Heritage Cruises",
          cabin: 20,
          launch: "2019",
          shell: "Kim loại",
          trip: "Vịnh Lan Hạ - Bãi tắm Ba Trái Đào  - Hang Sáng Tối"
        }
      },
      thumbnail: "tour/du-thuyen-heritage-binh-chuan-cat-ba/thumbnail/no53ab0y526yl825.webp",
      title: "Du thuyền Heritage  Bình Chuẩn Cát Bà",
      typeProduct: "ship"
    },
  ],
  categories: [
    {
      _id: "64c8f53047dcd21cb95abf37",
      name: "Vịnh Hạ Long",
      image: "https://minio.fares.vn/mixivivu-dev/home-page/547b7d230cacd9f280bd3.jpg",
      __v: 0
    },
  ],
});

</script>
