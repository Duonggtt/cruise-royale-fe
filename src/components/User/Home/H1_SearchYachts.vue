<template>
  <div class=" card flex justify-center mt-24 relative">
    <div class="card">
      <Carousel :value="images" class="max-w-7xl rounded-3xl  animation-linear animate-duration-500" :autoplay="true" circular :autoplayInterval="3000"   :navigation="false">
        <template #item="slotProps"><img :src="slotProps.data" class="object-cover h-full w-full rounded-3xl " alt=""></template>
      </Carousel>
    </div>

    <S1_SearchCuise class="lg:absolute items-center -bottom-20 w-3/4 max-w-5xl p-5 "/>

  </div>
</template>


<script setup lang="ts">
import {ref} from 'vue';
import S1_SearchCuise from "@/components/User/SearchCruise/S1_SearchCuise.vue";


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


</script>
