<template>
  <div class=" px-5  rounded-lg">
    <!--    <h2 class="text-lg font-semibold mb-3">Thuê trọn tàu</h2>-->
    <div class="grid grid-cols-2 gap-4">
      <div class="rounded-3xl ">
        <label class="block mb-2 ml-2">Ngày nhận phòng</label>
        <DatePicker v-model="date" dateFormat="dd/mm/yy" class="rounded-full"/>
        <!--        <DatePicker minDate="minDate" v-model="date" />-->
      </div>

      <div>
        <label class="block mb-2 ml-2">Số lượng khách</label>
        <div class=" rounded-3xl border border-gray-300 dark:border-[#52525b] dark:border-1 py-2 px-3    w-full ">

          <span class="SoLuong cursor-pointer" @click="showGuestSelection = !showGuestSelection">{{ adults || 0 }} Người lớn - {{ children || 0 }} Trẻ em</span>

          <div v-if="showGuestSelection" class="LuaChon bg-white dark:bg-[#121212] border absolute z-30  flex flex-col gap-4 shadow-sm px-3 p-2 mt-3 rounded-3xl">
            <div class="flex justify-between items-center border-b ">
              <span class="text-gray-700 mr-5">Người lớn</span>
              <div class="flex items-center ">
                <Button label="-" class="rounded-full bg-transparent text-gray-500  border-none text-3xl focus:shadow-none focus-visible:shadow-none" @click="decrementAdults" :disabled="adults === 0"/>
                <span class=" mx-2 text-center">{{ adults }}</span>
                <Button label="+" class="rounded-full bg-transparent text-gray-500  border-none text-3xl  focus:shadow-none focus-visible:shadow-none" @click="incrementAdults"/>
              </div>
            </div>
            <div class="flex justify-between items-center border-b">
              <span class="text-gray-700 mr-5">Trẻ em</span>
              <div class="flex items-center ">
                <Button label="-" class="rounded-full bg-transparent text-gray-500  border-none text-3xl focus-visible:shadow-none" @click="decrementChildren" :disabled="children === 0"/>
                <span class=" mx-2 text-center">{{ children }}</span>
                <Button label="+" class="rounded-full bg-transparent text-gray-500  border-none text-3xl focus-visible:shadow-none" @click="incrementChildren"/>
              </div>
            </div>
            <Button label="Xác nhận" class=" text-white" @click="showGuestSelection = false"/>
          </div>
        </div>
      </div>
      <div class="input-group flex-column align-items-center mb-3">
        <FloatLabel class="p-float-label ">
          <InputText id="name" class="w-full h-3rem pl-3 rounded-3xl "/>
          <label for="name" class="pl-2">Họ và tên</label>
        </FloatLabel>
      </div>
      <div class="input-group flex-column align-items-center mb-3">
        <FloatLabel class="p-float-label ">
          <InputText id="phone" class="w-full h-3rem pl-3 rounded-3xl "/>
          <label for="phone" class="pl-2">Số điện thoại</label>
        </FloatLabel>
      </div>
      <div class="input-group flex-column align-items-center mb-3">
        <FloatLabel class="p-float-label ">
          <InputText id="email" class="w-full h-3rem pl-3 rounded-3xl "/>
          <label for="email" class="pl-2">Địa chỉ email</label>
        </FloatLabel>
      </div>
      <div class="input-group flex-column align-items-center mb-3">
        <FloatLabel class="p-float-label ">
          <InputText id="email" class="w-full h-3rem pl-3 rounded-3xl "/>
          <label for="email" class="pl-2">Địa chỉ email</label>
        </FloatLabel>
      </div>
      <div class="col-span-2 w-full">
        <label class="block mb-2 ml-2">Yêu cầu của bạn</label>
        <Textarea v-model="note" placeholder="Nhập yêu cầu của bạn" rows="3" class="w-full rounded-2xl"/>
      </div>

    </div>

    <div class="col-span-2  flex items-center gap-5 mt-6">
      <div><p class="text-xl font-bold">Tổng tiền: {{ totalPrice ? totalPrice.toLocaleString() : '0' }} đ</p></div>
      <div class="text-right ml-auto">
        <Button label="Đăng ký tư vấn" class="px-4 border-none focus:shadow-none mx-3"/>
        <Button label="Đặt ngay" class=" text-white" @click="bookNow"/>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {inject, ref, toRefs} from 'vue';
import {API_URL} from '@/stores/config';

const api_url = API_URL;
const totalPrice = inject<number>('totalPrice');

const minDate = ref(new Date());
const date = ref(new Date('2024-06-10'));
const adults = ref(1);
const children = ref(0);
const showGuestSelection = ref(false);

const incrementAdults = () => {
  adults.value++;
};

const decrementAdults = () => {
  if (adults.value > 0) {
    adults.value--;
  }
};

const incrementChildren = () => {
  children.value++;
};

const decrementChildren = () => {
  if (children.value > 0) {
    children.value--;
  }
};

const props = withDefaults(defineProps<{
  cruiseId: string
}>(), {
  cruiseId: '',
});
const note = ref('');
const {cruiseId} = toRefs(props);

const bookNow = async () => {
  const url = `${api_url}/bookings/create`;


  const bookingData = {
    bookingDate: new Date().toISOString(),
    guestQuantity: adults.value + children.value,
    note: note.value,
    bookingStatus: 1,
    paymentStatus: 0,
    userId: localStorage.getItem('userId'),
    cabinIds: [2, 3],
    cruiseId: cruiseId.value,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('access_token')}`
    },
    body: JSON.stringify(bookingData)
  });

  if (!response.ok) {
    throw new Error(`Server responded with status code ${response.status}`);
  }
  const responseData = await response.json();
  console.log(responseData);
};

</script>
