<template>
  <div class="w-full">
    <div class="">
      <div class="card mx-5">
        <DataView :value="cruises" dataKey="id" paginator :rows="5">
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(cruise, index) in slotProps.items" :key="index" class="col-12">
                <div class="flex flex-col sm:flex-row p-4 gap-x-5 my-3  shadow rounded-xl border border-gray-200 animate-duration-[1500ms] animate-ease-in-out"
                     v-animateonscroll="{ enterClass: 'animate-fadeinleft'}">
                  <div class="relative w-full sm:w-1/3 ">
                    <img class="rounded-xl w-full shadow-xl" :src="`${cruise.imageUrl}`" :alt="cruise.name"/>
                    <div class="absolute top-3 left-3 bg-yellow-300 text-yellow-900 rounded-full px-2 py-1 text-xs font-semibold">
                      <div class="flex items-center">
                        <span class="scale-75 material-symbols-outlined">kid_star</span>
                        <span>{{ cruise.rating}} sao</span>
                      </div>
                    </div>
                  </div>
                  <div class="flex flex-col justify-between w-full sm:w-2/3">
                    <div>
                      <div class="flex items-center text-gray-500 text-xs mb-1">
                        <span class="scale-50 material-symbols-outlined">pin_drop</span>
                        <span>{{ cruise.location?.routeName }}</span>
                      </div>
                      <div class="text-lg font-bold mb-1">{{ cruise.name }}</div>
                      <div class="text-sm text-gray-600 mb-4">{{ formattedCruiseDescription(cruise) }}</div>
                      <div class="flex flex-wrap gap-1 mb-4  ">
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Có bể sục</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Bao gồm tất cả các bữa ăn</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Quầy bar</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Lễ tân 24 giờ</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">Nhà hàng</span>
                        <span class="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded-full">+ 10</span>
                      </div>
                    </div>
                    <div class="flex justify-between items-center  pt-5 border-t-2">
                      <div class="text-2xl font-bold">{{ cruise.price.toLocaleString('en-US') }}đ</div>
                      <div class="flex gap-2">
                        <Button class="rounded-3xl" label="Xem chi tiết" outlined></Button>
                        <Button label="Đặt ngay" :disabled="cruise.inventoryStatus === 'OUTOFSTOCK'"
                                class="flex-auto md:flex-initial rounded-3xl" @click="goToCruise(cruise.id)"></Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </DataView>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref, onMounted} from "vue";
import {API_URL} from '@/stores/config';
import {useAuthStore} from "@/stores/counter";
import {useToast} from "primevue/usetoast";
import router from "@/router";
import SearchCuise from "@/components/User/SearchCruise/S1_SearchCuise.vue";

const api_url = API_URL;


interface Cruise {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  launchedYear: number;
  material: string;
  cabinQuantity: number;
  locationId: number;
  location?: Location;
  inventoryStatus: string;
  rating: number;
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

  for (const cruise of cruises.value) {
    const imageResponse = await fetch(`${api_url}/cruise/images/${cruise.id}`);
    const imageBlob = await imageResponse.blob();
    cruise.imageUrl = URL.createObjectURL(imageBlob);

    await fetchLocation(cruise);
  }
};

const fetchLocation = async (cruise: Cruise) => {
  const url = `${api_url}/locations/${cruise.locationId}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`);
  }

  const data: Location = await response.json();
  cruise.location = data;
};

fetchCruiseFeatured();

const getSeverity = (cruise: Cruise) => {
  switch (cruise.inventoryStatus) {
    case 'INSTOCK':
      return 'success';
    case 'LOWSTOCK':
      return 'warning';
    case 'OUTOFSTOCK':
      return 'danger';
    default:
      return 'info';
  }
};

const formattedCruiseDescription = (cruise: Cruise) => {
  return `Hạ thuỷ ${cruise.launchedYear} - ${cruise.material} - ${cruise.cabinQuantity} Phòng`;
};

const goToCruise = (id: number) => {
  router.push({name: 'CruiseDetails', params: {id}});
};

</script>
