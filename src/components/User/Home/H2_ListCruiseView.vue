<template>
  <div class="relative flex justify-center mt-96 lg:mt-16">
    <div class="w-full max-w-screen-xl">
      <div class="m-10 gap-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 head-container">
        <div class="w-3/4 col-5 animate-duration-[2400ms] animate-ease-in-out"  v-animateonscroll="{ enterClass: 'animate-fadeinleft'}">
          <h1 class="mb-3 text-3xl font-bold"> Du thuyền mới và phổ biến nhất </h1>
          <img src="/heading-border.webp" alt="">
        </div>
        <p class="mb-sm font-medium animate-duration-[2000ms] animate-ease-in-out"  v-animateonscroll="{ enterClass: 'animate-fadeinleft'}">
          Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên.
        </p>
      </div>

      <div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xlx:grid-cols-6 cruise-card-container">
        <div v-for="cruise in cruises" :key="cruise.id" @click="goToCruise(cruise.id)"  v-animateonscroll="{ enterClass: 'animate-fadeinleft'}"
             class="m-3 p-3 cursor-pointer max-w-md rounded-3xl shadow-md cruise-card animate-duration-[2000ms] animate-ease-in-out">
          <div class="relative cruise-card-header">
            <div class="relative hover:scale-105 duration-[400ms]">
              <img :src="cruise.imageUrl" class="w-full min-h-52 max-h-52 object-cover rounded-3xl " alt=""/>
              <div class="absolute bottom-0 w-full h-20 bg-gradient-to-t from-black to-transparent rounded-b-2xl"></div>
            </div>
            <div class="absolute top-3 left-3 px-3 bg-orange-300 text-orange-900 rounded-2xl text-sm font-medium flex align-content-center gap-1 bg-opacity-85">
              <span class="scale-75 material-symbols-outlined">kid_star</span>
              <span class="text-sm">4.5 (2) đánh giá</span>
            </div>
            <div class="absolute bottom-3 right-3 pl-1 pr-3 py-2 h-5 rounded-full flex items-center bg-gray-200 text-surface-800 bg-opacity-60">
              <span class="scale-50 material-symbols-outlined">pin_drop</span>
              <p class="text-xs font-medium"> {{ cruise.location?.address }}</p>
            </div>
          </div>
          <div class="pt-1 pl-2 cruise-card-title">
            <FloatLabel class="text-lg text-gray-700 lg:font-bold whitespace-nowrap overflow-hidden">
              {{ cruise.name }}
            </FloatLabel>
          </div>

          <div class="cruise-card-content">
            <p class="pl-1 text-xs font-medium text-gray-600 whitespace-nowrap overflow-hidden flex items-center gap-1">
              <span class="scale-75 material-symbols-outlined">directions_boat</span>
              {{ formattedCruiseDescription(cruise) }}
            </p>
          </div>
          <div class="pl-3 pt-4 w-full flex justify-between align-items-center cruise-card-footer ">
            <p class="text-green-900 font-bold">{{ cruise.price.toLocaleString('en-US') }}đ / Khách</p>
            <div class="hover:scale-110 duration-[400ms]">
              <Button class="px-5 py-2 text-sm text-center shadow-lg rounded-3xl inline-flex items-center " label="Đặt ngay"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="relative flex justify-center mt-10">
    <div class="flex items-center rounded-full shadow-lg px-4 py-2 cursor-pointer border-2 border-gray-100  hover:scale-110 duration-[400ms]">
      <Button class=" text-black bg-transparent border-none p-0"
              label="Xem tất cả Du thuyền" @click="router.push('/SearchCuiseView')"/>
      <span class="scale-75 material-symbols-outlined">arrow_forward</span>
    </div>
  </div>
</template>


<script setup lang="ts">
import {useAuthStore} from '@/stores/counter';
import {API_URL} from '@/stores/config';
import {ref} from "vue";
import {useToast} from "primevue/usetoast";
import router from "@/router";

const api_url = API_URL;
const access_token = ref(localStorage.getItem('access_token') || '');

interface Cruise {
  id: number;
  name: string;
  image: string;
  description: string;
  price: number;
  imageUrl?: string;
  launchedYear: number;
  material: string;
  cabinQuantity: number;
  locationId: number;
  location?: Location; // Thêm thuộc tính location
}

interface Location {
  id: number;
  routeName: string;
  address: string;
  city: string;
}


const cruises = ref<Cruise[]>([]);

const fetchCruiseFeatured = async () => {
  const url = `${api_url}/cruises/featured`;
  const response = await fetch(url);

  if (response.status === 403) {
    useAuthStore().logout();
    useToast().add({severity: 'info', summary: 'Đăng Xuất', detail: 'Hết phiên đăng nhập', life: 3000});
  }

  const data = await response.json();
  cruises.value = data;
  console.log(cruises.value);
  for (const cruise of cruises.value) {
    const imageResponse = await fetch(`${api_url}/cruise/images/${cruise.id}`);
    const imageBlob = await imageResponse.blob();
    cruise.imageUrl = URL.createObjectURL(imageBlob);

    await fetchLocation(cruise); // Gọi hàm fetchLocation để lấy thông tin location
  }
};
const fetchLocation = async (cruise: Cruise) => {
  const url = `${api_url}/locations/${cruise.locationId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`);
  }

  const data: Location = await response.json();
  cruise.location = data; // Gán thông tin location cho đối tượng cruise
};
fetchCruiseFeatured();
const formattedCruiseDescription = (cruise: Cruise) => {
  return `Hạ thuỷ ${cruise.launchedYear} - ${cruise.material} - ${cruise.cabinQuantity} Phòng`;
};


const goToCruise = (id: number) => {
  router.push({name: 'CruiseDetails', params: {id}});

};


</script>
