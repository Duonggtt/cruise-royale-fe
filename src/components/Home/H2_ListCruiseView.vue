<template>
  <div class="flex justify-center mt-48 relative">
    <div class="min-h-screen w-full max-w-screen-xl">
      <div class="head-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
        <div class="col-5 w-3/4">
          <h1 class="text-3xxl font-bold mb-3 ">
            Du thuyền mới và phổ biến nhất

          </h1>
          <img src="/heading-border.webp" alt="">
        </div>
        <p class="mb-8 text-xl">
          Tận hưởng sự xa hoa và đẳng cấp tối đa trên du thuyền mới nhất và phổ biến nhất. Khám phá một hành trình tuyệt vời đưa bạn vào thế giới của sự sang trọng, tiện nghi và trải nghiệm không thể quên.
        </p>
      </div>

      <div class="cruise-card-container  cursor-pointer grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xlx:grid-cols-6 ">
        <div v-for="cruise in cruises" :key="cruise.id" class="cruise-card max-w-md rounded-3xl shadow-1 m-3 p-3 hover:shadow-5" @click="() => CruiseInformationView(cruise)">
          <div class="cruise-card-header relative">
            <img :src="cruise.imageUrl" class="w-full min-h-52 max-h-52 object-cover rounded-3xl" alt=""/>
            <div class="rating-badge absolute top-3 left-3 bg-yellow-300 text-orange-900 px-3 py-1 rounded-2xl text-sm flex align-content-center gap-1 opacity-85">
              <i class="pi pi-star"></i> 4.5 (2) đánh giá
            </div>
            <div class="location-badge flex gap-1 h-5 bg-gray-100 rounded-full px-2 py-1 align-items-center absolute bottom--7 left-3">
              <span class="pi pi-flag text-xs"></span>
              <p class="text-xs font-medium">Vịnh Hạ Long</p>
            </div>
          </div>
          <div class="cruise-card-title pt-5 pl-2">
            <FloatLabel class="lg:font-bold text-lg whitespace-nowrap overflow-hidden text-ellipsis">
              {{ cruise.name }}
            </FloatLabel>
          </div>

          <div class="cruise-card-content pl-2 pt-2 ">
            <p class="text-xs text-gray-800 align-items-center whitespace-nowrap overflow-hidden text-ellipsis flex align-content-center align-items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path
                    d="M3.62 17.28C3.71813 17.5267 3.91022 17.7242 4.15402 17.8292C4.39782 17.9343 4.67335 17.9381 4.92 17.84C5.16665 17.7419 5.36422 17.5498 5.46924 17.306C5.57426 17.0622 5.57813 16.7867 5.48 16.54L4.36 13.72L11 12.25V17C11 17.2652 11.1054 17.5196 11.2929 17.7071C11.4804 17.8946 11.7348 18 12 18C12.2652 18 12.5196 17.8946 12.7071 17.7071C12.8946 17.5196 13 17.2652 13 17V12.25L19.64 13.72L18.52 16.54C18.4713 16.6621 18.4471 16.7926 18.4489 16.9241C18.4507 17.0556 18.4784 17.1854 18.5304 17.3061C18.5824 17.4269 18.6577 17.5362 18.7521 17.6278C18.8464 17.7194 18.9578 17.7915 19.08 17.84C19.1978 17.8866 19.3233 17.9103 19.45 17.91C19.6503 17.9102 19.846 17.8502 20.0118 17.7379C20.1776 17.6256 20.3059 17.4661 20.38 17.28L21.93 13.37C21.9832 13.2348 22.0063 13.0896 21.9977 12.9445C21.989 12.7994 21.9489 12.658 21.88 12.53C21.8132 12.4025 21.7196 12.2909 21.6057 12.2029C21.4918 12.1149 21.3602 12.0525 21.22 12.02L18 11.31V7C18 6.73478 17.8946 6.48043 17.7071 6.29289C17.5196 6.10536 17.2652 6 17 6H15V3C15 2.73478 14.8946 2.48043 14.7071 2.29289C14.5196 2.10536 14.2652 2 14 2H10C9.73478 2 9.48043 2.10536 9.29289 2.29289C9.10536 2.48043 9 2.73478 9 3V6H7C6.73478 6 6.48043 6.10536 6.29289 6.29289C6.10536 6.48043 6 6.73478 6 7V11.31L2.78 12C2.63976 12.0325 2.5082 12.0949 2.39429 12.1829C2.28038 12.2709 2.18682 12.3825 2.12 12.51C2.05113 12.638 2.01098 12.7794 2.00234 12.9245C1.99371 13.0696 2.0168 13.2148 2.07 13.35L3.62 17.28ZM11 4H13V6H11V4ZM8 8H16V10.86L12.22 10H12.12H12H11.88H11.78L8 10.86V8ZM20.71 19.28C20.3591 19.3875 20.0232 19.5387 19.71 19.73C19.3914 19.9163 19.029 20.0145 18.66 20.0145C18.291 20.0145 17.9286 19.9163 17.61 19.73C16.9173 19.3392 16.1354 19.1339 15.34 19.1339C14.5446 19.1339 13.7627 19.3392 13.07 19.73C12.7471 19.9141 12.3817 20.011 12.01 20.011C11.6383 20.011 11.2729 19.9141 10.95 19.73C10.2566 19.3411 9.47499 19.1368 8.68 19.1368C7.88501 19.1368 7.10336 19.3411 6.41 19.73C6.09143 19.9163 5.72904 20.0145 5.36 20.0145C4.99096 20.0145 4.62857 19.9163 4.31 19.73C3.99683 19.5387 3.66087 19.3875 3.31 19.28C3.17694 19.2327 3.03537 19.2141 2.89461 19.2255C2.75385 19.2368 2.61709 19.2778 2.49334 19.3459C2.36958 19.4139 2.26163 19.5073 2.1766 19.6201C2.09157 19.7328 2.03138 19.8623 2 20C1.92535 20.2533 1.95389 20.5258 2.07941 20.7581C2.20493 20.9904 2.41724 21.1636 2.67 21.24C2.87136 21.2946 3.06347 21.3788 3.24 21.49C3.84671 21.846 4.53657 22.0357 5.24 22.04C5.9706 22.0401 6.68823 21.8469 7.32 21.48C7.71198 21.2638 8.15234 21.1504 8.6 21.1504C9.04766 21.1504 9.48803 21.2638 9.88 21.48C10.5073 21.8387 11.2174 22.0274 11.94 22.0274C12.6626 22.0274 13.3727 21.8387 14 21.48C14.392 21.2638 14.8323 21.1504 15.28 21.1504C15.7277 21.1504 16.168 21.2638 16.56 21.48C17.1798 21.8499 17.8882 22.0453 18.61 22.0453C19.3318 22.0453 20.0402 21.8499 20.66 21.48C20.8365 21.3688 21.0286 21.2846 21.23 21.23C21.3631 21.2031 21.4893 21.1493 21.6009 21.0721C21.7126 20.9948 21.8073 20.8956 21.8793 20.7805C21.9514 20.6654 21.9992 20.5368 22.02 20.4027C22.0407 20.2685 22.0339 20.1315 22 20C21.9682 19.8647 21.9086 19.7374 21.8249 19.6265C21.7412 19.5155 21.6352 19.4232 21.5138 19.3554C21.3925 19.2877 21.2583 19.246 21.1199 19.233C20.9815 19.22 20.8419 19.236 20.71 19.28Z"
                    fill="var(--gray-600)"></path>
              </svg>
              {{ formattedCruiseDescription(cruise) }}
            </p>
          </div>
          <div class="cruise-card-footer flex justify-between align-items-center w-full pl-3 pt-4">
            <p class="text-green-900 font-bold">{{ cruise.price.toLocaleString('en-US') }}đ / Khách</p>
            <Button class="inline-flex items-center px-5 py-2 text-sm text-center shadow-3" label="Đặt ngay"/>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="flex justify-center mt-10 relative">
    <Button class="view-all-button align-items-center rounded-full p-3 bg-transparent border-none text-black shadow-2"
            icon="pi pi-chevron-right" label="Xem tất cả Du thuyền" iconPos="right"/>
  </div>


</template>
<script setup lang="ts">
import {useAuthStore} from '@/stores/counter';
import {ref,watchEffect} from "vue";
import {useToast} from "primevue/usetoast";
import router from "@/router";
import { nextTick } from 'vue';


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
}

const cruises = ref<Cruise[]>([]);

const fetchCruiseFeatured = async () => {
  const url = `http://localhost:8080/api/cruises/featured`;
  const response = await fetch(url, {
    // headers: {
    //   'Authorization': `Bearer ${access_token.value}`,
    // },
  });

  if (response.status === 403) {
    useAuthStore().logout();
    useToast().add({severity: 'info', summary: 'Đăng Xuất', detail: 'Hết phiên đăng nhập', life: 3000});
  }

  const data = await response.json();
  cruises.value = data;

  for (const cruise of cruises.value) {
    const imageResponse = await fetch(`http://localhost:8080/api/cruise/images/${cruise.id}`, {
      // headers: {
      //   'Authorization': `Bearer ${access_token.value}`,
      // },
    });
    const imageBlob = await imageResponse.blob();
    cruise.imageUrl = URL.createObjectURL(imageBlob);
  }
};

fetchCruiseFeatured();


const formattedCruiseDescription = (cruise: Cruise) => {
  return `Hạ thuỷ ${cruise.launchedYear} - ${cruise.material} - ${cruise.cabinQuantity} Phòng`;
};

const CruiseInformationView = (cruise: Cruise) => {
  router.push(`/cruise/${cruise.id}`);
};
</script>
