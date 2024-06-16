<template>
  <div class="xl:max-w-7xl xl:mx-auto m-auto  ">
    <div class="flex justify-between items-center py-4  ">
      <div>
        <h1 class="text-2xl font-bold">{{ props.cruiseName }}</h1>
        <div class="flex items-center mt-2 pt-2">
          <span class="bg-yellow-300 text-gray-700 rounded-3xl  px-3 py-1 text-sm">5 (0 đánh giá)</span>
          <div class="flex bg-gray-200 rounded-3xl ml-3 px-3">
            <p class=" ">{{ props.locationRouteName }}</p>
            <a class="ml-2 text-blue-300">Xem bản đồ và lịch trình</a>
          </div>

        </div>
        <img src="/heading-border.webp" alt="" class="pt-5">
      </div>
      <div class="text-3xl font-bold text-teal-700">{{ props.cruisePrice ? props.cruisePrice.toLocaleString('en-US') : 'Price not available' }} đ/khách</div>
    </div>

    <div class="container">
      <div class=" mx-auto rounded-3xl ">
        <Carousel :value="images" :numVisible="1" :numScroll="1" :autoplay="true" circular :autoplayInterval="3000" :navigation="false" :transitionDuration="3000">
          <template #item="images">
            <img v-for="(image, index) in images" :key="index" :src="image.img" class="object-cover max-h-96 w-full rounded-3xl" alt="">
          </template>
        </Carousel>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue';

const props = defineProps({
  cruiseName: String,
  cruisePrice: Number,
  locationRouteName: String
});

const images = ref([
  {img: '/Cruises/Cruise01.webp'},
  {img: '/Cruises/Cruise02.jpg'},
  {img: '/Cruises/Cruise03.webp'},
  {img: '/Cruises/Cruise04.webp'},
  {img: '/Cruises/Cruise05.webp'},
  {img: '/Cruises/Cruise06.webp'}
]);
</script>

