<template>
  <div class="   w-full ">


    <div class="border-bottom-1 border-gray-300 py-3  mb-5">
      <div class="flex justify-between items-center  px-3">
        <h3 class="font-bold  ">Lọc kết quả</h3>
        <h5 class="font-black cursor-pointer hover:text-emerald-500" @click="resetSelection">Đặt lại</h5></div>
    </div>

    <div class="flex flex-column gap-3 ">

      <div class="px-3 ">
        <p class="font-bold pb-2">Xếp hạng sao</p>
        <div class="flex flex-column gap-2 " style="transform: scale(0.95);">
          <div v-for="category of categories" :key="category.key" class="flex align-items-center gap-2">
            <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name"/>
            <label :for="category.key" class="text-sm">{{ category.name }}</label>
          </div>
        </div>

      </div>

      <div class="border-top-1 border-gray-300 pt-3 px-3">
        <p class="font-bold pb-2">Tiện ích</p>
        <div class="flex flex-column gap-2 -mt-3" style="transform: scale(0.95);">
          <div v-for="utilitie of utilities" :key="utilitie.key" class="flex align-items-center gap-2">
            <Checkbox v-model="selectedCategories" :inputId="utilitie.key" name="category" :value="utilitie.name"/>
            <label :for="utilitie.key" class="text-sm">{{ utilitie.name }}</label>
          </div>
        </div>
      </div>

    </div>


  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const selectedCategories = ref(['3 sao']);

const categories = ref([
  {name: "3 sao", key: "3S"},
  {name: "4 sao", key: "4S"},
  {name: "5 sao", key: "5S"}
]);

const utilities = ref([
  {name: "Phòng gia đình", key: "PGD"},
  {name: "Có bể sục", key: "CBS"},

  {name: "Bao gồm tất cả các bữa ăn", key: "BGTA"},
  {name: "Giáp biển", key: "GB"},
  {name: "Quầy bar", key: "QB"},
  {name: "Lễ tân 24 giờ", key: "LT"},
  {name: "Khu vực bãi tắm riêng", key: "KBT"},
  {name: "Nhà hàng", key: "NH"},
  {name: "Trung tâm thể dục", key: "TTTD"},
  {name: "Phòng có bồn tắm", key: "PCBT"},
  {name: "Wi-Fi miễn phí", key: "WIFI"},

  {name: "Miễn phí kayaking", key: "MPK"},
  {name: "Trung tâm Spa & chăm sóc sức khoẻ", key: "TTSS"},
  {name: "Chỗ đỗ xe miễn phí", key: "CDX"},
  {name: "Miễn phí xe đưa đón", key: "MPX"},
  {name: "Có bể bơi ngoài trời", key: "CBNT"},
  {name: "Đi tuyến Lan Hạ", key: "DTLH"},
  {name: "Phòng không hút thuốc", key: "PKHT"},
  {name: "Bể bơi ngoài trời", key: "BBNT"},
  {name: "Du thuyền 5 sao", key: "DTS"},
  {name: "Chỗ đỗ xe", key: "CDX"},
  {name: "Trà/cà phê trong tất cả các phòng", key: "TCTCP"},
  {name: "Nhìn ra biển", key: "NRB"},
  {name: "Điều hòa", key: "DH"},
  {name: "Cửa sổ từ sàn đến trần", key: "CSDT"},
  {name: "Sạc điện thoại", key: "SDT"},
  {name: "Hồ bơi có tầm nhìn", key: "HBCTN"},
  {name: "Ban công riêng", key: "BCR"},
  {name: "Wi-Fi", key: "WIFI"},
  {name: "Két an toàn", key: "KAT"}
]);

const resetSelection = () => {
  selectedCategories.value = [];
};

</script>
