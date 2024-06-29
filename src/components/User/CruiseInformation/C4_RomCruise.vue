<template>
  <h1 class="text-xxl font-bold mb-4 mt-10">Các loại phòng & giá</h1>
  <div class="shadow-lg border-2 px-10 py-5 rounded-3xl">
    <div class="flex justify-end my-5">
      <div class="flex items-center rounded-full bg-indigo-500 text-white shadow-lg px-4 py-2 cursor-pointer hover:scale-110 duration-[400ms]" @click="resetCounts">
        <Button class="bg-transparent border-none p-0" label="Xoá lựa chọn"/>
        <span class="scale-75 material-symbols-outlined">close</span>
      </div>
    </div>

    <div v-for="(room, index) in rooms" :key="index" class="flex justify-between items-center mb-4 p-4 border-2 rounded-3xl" style="font-size: 1rem;">
      <img :src="room.image" alt="Room Image" class="w-20 h-20 object-cover rounded-2xl"/>
      <div class="flex flex-col flex-grow mx-4 min-w-48">
        <h2 class="font-semibold text-lg">{{ room.name }}</h2>
        <p class="text-gray-600 text-xs">{{ room.maxGuests }} m² - Tối đa: {{ room.size }} <p class="pi pi-user text-xs"></p></p>
      </div>
      <div class="flex items-center">
        <div class="mr-3">
          <p class="font-semibold text-sm text-green-950 dark:text-green-700">{{ room.price.toLocaleString() }} </p>
          <p class="font-semibold text-sm text-green-950 dark:text-green-700"> /Khách</p>
        </div>
        <div class="flex items-center shadow-1 rounded-3xl px-2">
          <div class="bg-white border-2 rounded-full shadow-sm flex items-center space-x-4 px-4 pb-2 pt-1">
            <button @click="decreaseRoomCount(index)" class="text-3xl text-gray-800 font-semibold focus:outline-none">-</button>
            <span class="text-xl text-gray-800 font-semibold">{{ room.count }}</span>
            <button @click="increaseRoomCount(index)" class="text-3xl text-gray-800 font-semibold focus:outline-none">+</button>
          </div>
        </div>
      </div>
    </div>
    <div class="md:flex items-center mt-6 space-y-5">
      <div class="flex items-center">
        <p class="text-xl font-bold">Tổng tiền: {{ totalPrice.toLocaleString() }} đ</p>
      </div>
      <div class="text-right ml-auto md:flex content-center gap-5 space-y-5">
        <div class="flex gap-5 items-center justify-center">
          <div class="flex items-center justify-center rounded-full shadow-lg cursor-pointer min-w-[10rem] max-h-[3rem] px-3 py-1 border-2 bg-primary hover:scale-110 duration-[400ms]"
               @click="handleBooking">
            <Button class="bg-transparent border-none" label="Thuê trọn tàu"/>
          </div>
          <div class="flex items-center justify-center rounded-full shadow-lg cursor-pointer min-w-[10rem]  max-h-[3rem] px-3 py-1 border-2 bg-primary hover:scale-110 duration-[400ms]"
               @click="handleBooking">
            <Button class="bg-transparent border-none" label="Đặt ngay"/>
          </div>
        </div>
      </div>
      <Dialog v-model:visible="showDialog" :pt="{ root: 'border-none', mask: { style: 'backdrop-filter: blur(3px)' } }">
        <OderForm :cruiseId="cruiseId"/>
      </Dialog>
      <Dialog v-model:visible="showLoginForm" :pt="{ root: 'border-none', mask: { style: 'backdrop-filter: blur(3px)' } }">
        <Login v-if="dialogState === 'login'" @updateState="handleStateChange"/>
        <Reg v-else-if="dialogState === 'register'" @updateState="handleStateChange"/>
        <ForgotPassword v-else-if="dialogState === 'ForgotPassword'" @updateState="handleStateChange"/>
      </Dialog>
    </div>
  </div>
</template>

<script setup lang="ts">
import {computed, provide, ref, watch} from 'vue';
import router from "@/router";

const visible = ref(false);
const dialogState = ref('login');
const handleStateChange = (newState: string) => {
  dialogState.value = newState;
  visible.value = true;
};

interface Cabin {
  cabinType: {
    name: string;
    roomSize: number;
    maxGuests: number;
    price: number;
  };
}

const props = defineProps({
  cabins: {
    type: Array as () => Cabin[],
    default: () => [],
  },
  cruiseId: {
    type: String,
    required: true
  },
});

const showLoginForm = ref(false);
const isLoggedIn = computed(() => !!localStorage.getItem('userId'));

const handleBooking = () => {
  if (isLoggedIn.value) {
    showDialog.value = true;
  } else {
    showLoginForm.value = true;
  }
};
watch(isLoggedIn, (newVal) => {
  if (newVal) {
    console.log('Logged in successfully')
    showLoginForm.value = false;
    setTimeout((showMenu: any): void => {
      router.push('/');
    }, 10000);
  }
});


const rooms = ref(props.cabins.map((cabin: Cabin) => ({
  name: cabin.cabinType.name,
  size: cabin.cabinType.roomSize,
  maxGuests: cabin.cabinType.maxGuests,
  price: cabin.cabinType.price,
  count: 0,
  maxCount: 10,
  image: '/Cruises/Cruise01.webp'
})));

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

const showDialog = ref(false);

const resetCounts = () => {
  rooms.value.forEach(room => room.count = 0);
};


const totalPrice = computed(() => {
  return rooms.value.reduce((acc, room) => acc + room.price * room.count, 0);
});

provide('totalPrice', totalPrice);

watch(() => props.cabins, (newCabins) => {
  rooms.value = newCabins.map((cabin: Cabin) => ({
    name: cabin.cabinType.name,
    size: cabin.cabinType.roomSize,
    maxGuests: cabin.cabinType.maxGuests,
    price: cabin.cabinType.price,
    count: 1,
    maxCount: 10,
    image: '/Cruises/Cruise01.webp'
  }));
});
</script>


