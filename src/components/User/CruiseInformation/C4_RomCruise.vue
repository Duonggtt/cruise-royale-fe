<template>
  <h1 class="text-xxl font-bold mb-4 mt-10">Các loại phòng & giá</h1>
  <div class="mx-auto max-w-screen-xl shadow-1 px-10  py-5 rounded-3xl ">

    <div class="text-right mb-5">
      <Button label="Xoá lựa chọn" icon="pi pi-spin pi-times " class="px-4 bg-indigo-300 border-none focus:shadow-none" style="transform: scale(0.8);" @click="resetCounts"/>
    </div>
    <div v-for="(room, index) in rooms" :key="index" class="flex justify-between items-center mb-4 p-4 border  shadow-3 rounded-3xl " style=" font-size: 1rem; ">
      <img :src="room.image" alt="Room Image" class="w-20 h-20 object-cover rounded-2xl">
      <div class="flex flex-col flex-grow mx-4">
        <h2 class=" font-semibold text-lg ">{{ room.name }}</h2>
        <p class="text-gray-600  text-xs">{{ room.size }} m² - Tối đa: {{ room.maxGuests }} <p class="pi pi-user text-xs"></p></p>
      </div>
      <div class="flex items-center ">
        <div class="mr-3">
          <p class="  font-semibold text-sm text-green-950">{{ room.price.toLocaleString() }} </p>
          <p class=" font-semibold text-sm text-green-950"> /Khách</p>
        </div>
        <div class="flex items-center shadow-1 rounded-4xl px-2">
          <InputNumber v-model="room.count" showButtons buttonLayout="horizontal" :min="0" :max="room.count" class="">
            <template #incrementbuttonicon>
              <span class="pi pi-plus"/>
            </template>
            <template #decrementbuttonicon>
              <span class="pi pi-minus"/>
            </template>
          </InputNumber>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5 mt-6">
      <div class=" "><p class="text-xl font-bold">Tổng tiền: {{ totalPrice.toLocaleString() }} đ</p></div>
      <div class="text-right  ml-auto">
        <Button label="Thuê trọn tàu" class="px-4  border-none focus:shadow-none mx-3" @click="rentWholeShip"/>
        <Button label="Đặt ngay" icon="pi pi-arrow-right" iconPos="right" class="px-5 border-none focus:shadow-none" @click="showDialog = true"/>
      </div>
      <Dialog v-model:visible="showDialog" :pt="{  root: 'border-none',  mask: {  style: 'backdrop-filter: blur(2px)'   }  }">
        <OderForm/>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, provide, ref} from 'vue';
import OderForm from "@/components/User/CruiseInformation/OderForm.vue";




const rentWholeShip = () => {
  rooms.value.forEach(room => {
    if (room.maxCount) {
      room.count = room.maxCount;
    }
  });
  showDialog.value = true;
};


const resetCounts = () => {
  rooms.value.forEach(room => room.count = 0);
};

const value = ref(0);

const showDialog = ref(false);

interface Room {
  name: string;
  size: number;
  maxGuests: number;
  price: number;
  count: number;
  maxCount?: number;
  image: string;
}

const rooms = ref<Room[]>([
  {
    name: 'Phòng Delta Suite',
    size: 33,
    maxGuests: 2,
    price: 3550000,
    count: 0,
    maxCount: 5,
    image: '/Cruises/Cruise01.webp'
  },
  {
    name: 'Phòng Ocean Suite',
    size: 33,
    maxGuests: 2,
    price: 3700000,
    count: 0,
    maxCount: 14,
    image: '/Cruises/Cruise02.jpg'
  },
  {
    name: 'Phòng Captain Suite',
    size: 38,
    maxGuests: 2,
    price: 3950000,
    count: 0,
    maxCount: 32,
    image: '/Cruises/Cruise03.webp'
  },
  {
    name: 'Phòng Regal Suite',
    size: 46,
    maxGuests: 2,
    price: 4200000,
    count: 0,
    maxCount: 12,
    image: '/Cruises/Cruise04.webp'
  }
]);

const increment = (index: number) => {
  rooms.value[index].count++;
};

const decrement = (index: number) => {
  if (rooms.value[index].count > 0) {
    rooms.value[index].count--;
  }
};

const totalPrice = computed(() => {
  return rooms.value.reduce((acc, room) => acc + room.price * room.count, 0);
});

provide('totalPrice', totalPrice);

</script>

<style scoped>

</style>
