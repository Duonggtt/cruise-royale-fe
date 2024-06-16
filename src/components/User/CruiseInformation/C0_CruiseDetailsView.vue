<template>
  <Navbar class=" z-50"/>
  <BreadcrumbDetail v-if="cruise" :cruiseName="cruise.name" class="  "/>
  <YachtTitle v-if="cruise" :cruisePrice="cruise.price" :cruiseName="cruise.name" :locationRouteName="location?.routeName" class="  "/>
  <Highlight  v-if="cruise" :cruise="cruise"/>
  <Footer/>
</template>


<script setup lang="ts">
import {ref, onMounted} from 'vue';
import {useRoute} from 'vue-router';
import {API_URL} from '@/stores/config';

const api_url = API_URL;

const route = useRoute();
const cruiseId = route.params.id;

const cruise = ref<Cruise | null>(null);
const location = ref<Location | null>(null);
const cabinTypes = ref<CabinType[]>([]);


interface CabinType {
  id: number;
  name: string;
  roomSize: number;
  maxGuests: number;
  description: string;
  price: number;
  tags: string[];
}

interface Location {
  id: number;
  routeName: string;
  address: string;
  city: string;
}

interface Owner {
  id: number;
  name: string;
}

interface Cruise {
  id: number;
  name: string;
  launchedYear: number;
  cabinQuantity: number;
  material: string;
  description: string;
  price: number;
  ownedDate: string;
  departureTime: string;
  arrivalTime: string;
  rules: any[];
  tags: any[];
  location: Location;
  owner: Owner;
}

interface CruiseCabinType {
  id: number;
  cabinType: CabinType;
  cruise: Cruise;
}

onMounted(async () => {
  const response = await fetch(`${api_url}/cabins?cruiseId=${cruiseId}`);

  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`);
  }

  const data: CruiseCabinType[] = await response.json();

  // Assign data to the constants
  if (data.length > 0) {
    cruise.value = data[0].cruise;
    location.value = data[0].cruise.location;
    cabinTypes.value = data.map(item => item.cabinType);
  }
});


</script>
