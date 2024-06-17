<template>
  <h1 class="text-xxl font-bold mb-4 mt-10 ">Các loại phòng & giá</h1>
  <div class="shadow-lg border-2 px-10  py-5 rounded-3xl ">
    <div class=" flex justify-end my-5">
      <div class="flex items-center rounded-full bg-indigo-500 text-white shadow-lg px-4 py-2 cursor-pointer  hover:scale-110 duration-[400ms]"
           @click="resetCounts">
        <Button class=" bg-transparent border-none p-0" label="Xoá lựa chọn"/>
        <span class="scale-75 material-symbols-outlined">close</span>
      </div>
    </div>

    <div v-for="(room, index) in rooms" :key="index" class="flex justify-between items-center mb-4 p-4 border-2    rounded-3xl " style=" font-size: 1rem; ">
      <img :src="room.image" alt="Room Image" class="w-20 h-20 object-cover rounded-2xl">
      <div class="flex flex-col flex-grow mx-4  min-w-48">
        <h2 class=" font-semibold text-lg ">{{ room.name }}</h2>
        <p class="text-gray-600  text-xs">{{ room.size }} m² - Tối đa: {{ room.maxGuests }} <p class="pi pi-user text-xs"></p></p>
      </div>
      <div class="flex items-center ">
        <div class="mr-3 ">
          <p class="font-semibold text-sm text-green-950">{{ room.price.toLocaleString() }} </p>
          <p class="font-semibold text-sm text-green-950"> /Khách</p>
        </div>
        <div class="flex items-center shadow-1 rounded-3xl px-2 ">
          <div class="    bg-white border-2 rounded-full shadow-sm  flex items-center space-x-4 px-4 pb-2 pt-1">
            <button @click="decreaseRoomCount(index)" class="text-3xl text-gray-800 font-semibold focus:outline-none">-</button>
            <span class="text-xl text-gray-800 font-semibold">{{ room.count }}</span>
            <button @click="increaseRoomCount(index)" class="text-3xl text-gray-800 font-semibold focus:outline-none">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5 mt-6">
      <div class=" "><p class=" text-2xl font-bold  colo">Tổng tiền: {{ totalPrice.toLocaleString() }} đ</p></div>
      <div class="text-right ml-auto flex gap-5">
        <div class="flex items-center justify-center rounded-full shadow-lg  cursor-pointer px-3 py-1 border-2  bg-primary hover:scale-110 duration-[400ms]">
          <Button class=" bg-transparent border-none" label=" Thuê trọn tàu" @click="rentWholeShip"/>
        </div>
        <div class="flex items-center justify-center rounded-full shadow-lg  cursor-pointer px-3 py-1 border-2  bg-primary hover:scale-110 duration-[400ms]">
          <Button class=" bg-transparent border-none" label=" Đặt ngay" @click="showDialog = true"/>
        </div>
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


const increaseRoomCount = (index: number) => {
  if (rooms.value[index].maxCount && rooms.value[index].count < rooms.value[index].maxCount) {
    rooms.value[index].count++;
  }
};
const decreaseRoomCount = (index: number) => {
  if (rooms.value[index].count > 0) {
    rooms.value[index].count--;
  }
};

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

const totalPrice = computed(() => {
  return rooms.value.reduce((acc, room) => acc + room.price * room.count, 0);
});

provide('totalPrice', totalPrice);

</script>

<style scoped>

</style>
