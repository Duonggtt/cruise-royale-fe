<template>
  <div class="w-full">
    <div class="bg-white">
      <div class="card mx-5" v-animateonscroll="{ enterClass: 'fadeinright', leaveClass: 'fadeoutright' }">
        <DataView :value="cruises" dataKey="id" paginator :rows="4">
          <template #list="slotProps">
            <div class="grid grid-nogutter">
              <div v-for="(cruise, index) in slotProps.items" :key="index" class="col-12"  @click="goToCruise(cruise.id)">
                <div class="flex flex-column sm:flex-row sm:align-items-center p-4 gap-3 my-3 surface-border shadow-2 rounded-3xl">
                  <div class="md:w-20rem relative">
                    <img class="block xl:block mx-auto rounded-2xl w-full" :src="`${cruise.imageUrl}`" :alt="cruise.name"/>
                    <Tag :value="cruise.inventoryStatus" :severity="getSeverity(cruise)" class="bg-yellow-300 absolute m-2 opacity-85 left-0 top-0 rounded-3xl">
                      <div class="flex align-items-center gap-2 px-2">
                        <span class="text-500 font-medium text-sm">{{ cruise.rating='5' }}</span>
                        <i class="pi pi-star-fill"></i>
                      </div>
                    </Tag>
                  </div>
                  <div class="flex flex-column md:flex-row justify-content-between md:align-items-center flex-1 gap-4">
                    <div class="flex flex-row relative md:h-12rem md:flex-column justify-content-between align-items-start gap-2">
                      <div>
                        <span class="flex align-items-center font-medium text-secondary text-sm gap-1">
                          <p class="pi pi-map-marker"></p>
                          {{ cruise.location?.routeName }}
                        </span>
                        <div class="text-lg font-bold mt-2">{{ cruise.name }}</div>
                        <div class="text-sm font-medium mt-2 text-nowrap">  {{ formattedCruiseDescription(cruise) }}</div>
                        <div class="w-24rem">
                          <Tag class="gap-1 mx-1 bg-gray-400 px-2 mt-2" severity="secondary" value="Có bể sục" rounded></Tag>
                          <Tag class="gap-1 mx-1 bg-gray-400 px-2 mt-2" severity="secondary" value="Bao gồm tất cả các bữa ăn" rounded></Tag>
                          <Tag class="gap-1 mx-1 bg-gray-400 px-2 mt-2" severity="secondary" value="Quầy bar" rounded></Tag>
                          <Tag class="gap-1 mx-1 bg-gray-400 px-2 mt-2" severity="secondary" value="Lễ tân 24 giờ" rounded></Tag>
                          <Tag class="gap-1 mx-1 bg-gray-400 px-2 mt-2" severity="secondary" value="Nhà hàng" rounded></Tag>
                          <Tag class="gap-1 mx-1 bg-gray-400 px-2 mt-2" severity="secondary" value="+ 10" rounded></Tag>
                        </div>
                      </div>
                      <div class="rounded-full max-w-5rem w-auto absolute lg:bottom-0 lg:left-0 right-0">
                        <Tag :value="cruise.inventoryStatus ='Xu hướng'" :severity="getSeverity(cruise)" class="bg-red-300 rounded-full flex align-items-center"></Tag>
                      </div>
                    </div>
                    <div class="flex flex-column md:h-12rem md:justify-content-between md:align-items-end gap-5 lg:-ml-52">
                      <span class="text-3xl font-bold">{{ cruise.price.toLocaleString('en-US') }}đ</span>
                      <div class="flex flex-row-reverse md:flex-row gap-2 lg:-mb-4" style="transform: scale(0.95);">
                        <Button icon="pi pi-heart" label="Like" outlined></Button>
                        <Button icon="pi pi-shopping-cart" label="Đặt ngay" :disabled="cruise.inventoryStatus === 'OUTOFSTOCK'" class="flex-auto md:flex-initial white-space-nowrap" @click="router.push('/SearchCuiseView')" ></Button>
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
import {useAuthStore} from "@/stores/counter";
import {useToast} from "primevue/usetoast";
import router from "@/router";

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
  const url = `http://localhost:8080/api/cruises/featured`;
  const response = await fetch(url);

  if (response.status === 403) {
    useAuthStore().logout();
    useToast().add({severity: 'info', summary: 'Đăng Xuất', detail: 'Hết phiên đăng nhập', life: 3000});
  }

  const data = await response.json();
  cruises.value = data;

  for (const cruise of cruises.value) {
    const imageResponse = await fetch(`http://localhost:8080/api/cruise/images/${cruise.id}`);
    const imageBlob = await imageResponse.blob();
    cruise.imageUrl = URL.createObjectURL(imageBlob);

    await fetchLocation(cruise);
  }
};

const fetchLocation = async (cruise: Cruise) => {
  const url = `http://localhost:8080/api/locations/${cruise.locationId}`;
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
  router.push({ name: 'CruiseDetails', params: { id } });
};

</script>
