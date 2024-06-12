<template>
  <Navbar class="w-screen z-50"/>
  <BreadcrumbDetail v-if="cruise" :cruiseName="cruise.name" class="w-screen relative top-20 "  />
  <YachtTitle  v-if="cruise" :cruisePrice="cruise.price" :cruiseName="cruise.name" :locationRouteName="location?.routeName" class="w-screen relative top-20 "/>
  <Highlight class="w-screen relative top-20 "  v-if="cruise" :cruise="cruise"/>
  <Footer/>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const cruiseId = route.params.id;

const cruise = ref<Cruise | null>(null);
const location = ref<Location | null>(null);
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
  location?: Location;
}

interface Location {
  id: number;
  routeName: string;
  address: string;
  city: string;
}

onMounted(async () => {
  const mockData = {
    id: 2,
    name: 'Du Thuyền Stellar of the Seas ',
    image: 'image_url', // Added 'image' property
    launchedYear: 2022,
    cabinQuantity: 22,
    arrivalTime: '06:30:00',
    departureTime: '18:30:00',
    description: 'None',
    imageIds: [1],
    locationId: 1,
    material: 'Tàu vỏ Kim loại',
    ownedDate: '2024-06-25T07:33:52.000+00:00',
    ownerId: 2,
    price: 5600000,
    reviewId: null,
    ruleIds: [],
    tagIds: [],
  };
  const mockLocation ={
    id: 2,
    routeName: "Khu B - Khu F - Khu C - Khu D",
    address: "Bãi Choáy",
    city: "Quảng Ninh"
  };

  cruise.value = mockData;
  location.value = mockLocation
});
</script>
