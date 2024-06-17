<template>
  <h1 class="text-xxl font-bold mb-4 mt-10">Các loại phòng & giá</h1>
  <div class="shadow-lg border-2 px-10  py-5 rounded-3xl ">
    <div class=" flex justify-end my-5">
      <div class="flex items-center rounded-full bg-indigo-500 text-white shadow-lg px-4 py-2 cursor-pointer border-2 border-gray-100 hover:scale-110 duration-[400ms]"
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
<!--          <InputNumber v-model="room.count" inputId="minmax-buttons" mode="decimal" showButtons :min="0" :max="room.maxCount" />-->
<!--          <InputNumber v-model="room.count" showButtons buttonLayout="horizontal" :min="0" :max="room.maxCount" class="rounded-3xl">-->
<!--            <template #incrementbuttonicon>-->
<!--              <span class="scale-75 material-symbols-outlined">add</span>-->
<!--            </template>-->
<!--            <template #decrementbuttonicon>-->
<!--              <span class="scale-75 material-symbols-outlined">remove</span>-->
<!--            </template>-->
<!--          </InputNumber>-->
          <div class="    bg-white border-2 rounded-full shadow-sm  flex items-center space-x-4 px-4 pb-2 pt-1">
            <button @click="decreaseRoomCount(index)" class="text-3xl text-gray-800 font-semibold focus:outline-none">-</button>
            <span class="text-xl text-gray-800 font-semibold">{{ room.count }}</span>
            <button @click="increaseRoomCount(index)" class="text-3xl text-gray-800 font-semibold focus:outline-none">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="flex items-center gap-5 mt-6">
      <div class=" "><p class=" font-bold">Tổng tiền: {{ totalPrice.toLocaleString() }} đ</p></div>
      <div class="text-right ml-auto">
        <Button label="Thuê trọn tàu" class="px-4 rounded-3xl border-none focus:shadow-none mx-3" @click="rentWholeShip"/>
        <Button label="Đặt ngay"  class="px-5 rounded-3xl border-none focus:shadow-none" @click="showDialog = true"/>

        <div class="flex items-center rounded-full shadow-lg px-4 py-2 cursor-pointer border-2 border-gray-100  hover:scale-110 duration-[400ms]">
          <Button class=" text-black bg-transparent border-none p-0"
                  label="Xem tất cả Du thuyền" @click="router.push('/SearchCuiseView')"/>
          <span class="scale-75 material-symbols-outlined">add_shopping_cart</span>
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
import router from "@/router";


const increaseRoomCount = (index: number) => {
  rooms.value[index].count++;
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
