<template>
  <Navbar class=" z-50"/>
  <BreadcrumbDetail v-if="cruise" :cruiseName="cruise.name" class="  "/>
  <YachtTitle v-if="cruise" :cruisePrice="cruise.price" :cruiseName="cruise.name" :locationRouteName="location?.routeName" class="  "/>
  <Highlight v-if="cruise && cabins && tags" :cruise="cruise" :cabins="cabins" :tags="tags" :owner="owner" :location="location"/>
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
const owner = ref<Owner | null>(null);
const location = ref<Location | null>(null);
const cabins = ref<Cabin[]>([]);
const cabinsType = ref<CabinType[]>([]);
const tags = ref<Tag[]>([]);

interface Tag {
  id: number;
  icon: string;
  name: string;
}

interface CabinType {
  id: number;
  name: string;
  roomSize: number;
  maxGuests: number;
  description: string;
  price: number;
  tags: Tag[]; // Add this line
}

interface Cabin {
  id: number;
  cabinType: CabinType;
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
  tags: Tag[];
  location: Location;
  owner: Owner;
}

onMounted(async () => {
  const cruiseResponse = await fetch(`${api_url}/cruises/${cruiseId}`);
  if (!cruiseResponse.ok) {
    throw new Error(`Server responded with status code ${cruiseResponse.status}`);
  }
  const cruiseData: Cruise = await cruiseResponse.json();
  cruise.value = cruiseData;
  location.value = cruiseData.location;
  owner.value = cruiseData.owner

  const cabinResponse = await fetch(`${api_url}/cabins?cruiseId=${cruiseId}`);
  if (!cabinResponse.ok) {
    throw new Error(`Server responded with status code ${cabinResponse.status}`);
  }
  const cabinData: Cabin[] = await cabinResponse.json();
  cabins.value = cabinData;
  tags.value = cabinData.flatMap(cabin => cabin.cabinType.tags);

});

</script>
