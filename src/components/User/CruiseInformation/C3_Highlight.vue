<template>
  <div class=" mx-auto max-w-screen-xl px-4 py-10 mt-5 overscroll-auto ">
    <!-- Tabs -->
    <Menubar :model="itemsMenu" class="flex items-center justify-start space-x-4  p-2 rounded-full font-medium"/>
    <!-- Main content -->
    <div class="grid grid-cols-12 gap-4 justify-center space-y-4 lg:space-y-0 lg:space-x-4">
      <!-- Left Column -->
      <div id="features" class="section col-span-8  p-6 rounded-3xl">
        <h2 class="text-2xl font-bold mb-4">Đặc điểm nổi bật</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="feature in features" :key="feature.label" class="feature-item flex items-center space-x-2">
            <div class="icon text-color-secondary " v-html="feature.svgIcon"></div>
            <span>{{ feature.label }}</span>
          </div>
        </div>
        <div class=" list-disc space-y-2">
          <p v-for="highlight in highlights" :key="highlight">
            <i class="fas fa-star">v</i> {{ highlight }}
          </p>
        </div>


        <RomCruise id="prices" class="section"/>
        <Introduce/>
        <Rules id="rules" class="section"/>
        <Evaluate id="reviews" class="section"/>


      </div>

      <!-- Right Column -->

      <div class="col-span-4  px-5 py-4 rounded-3xl h-auto  ">
        <div class="shadow-xl rounded-3xl p-5 border-2" ref="rightColumn">
          <h2 class="text-xl font-bold pb-3 border-bottom-1 border-gray-200">Thông tin du thuyền</h2>
          <div v-for="(value, key) in shipDetails" :key="key" class="grid grid-cols-12 gap-4 items-center pt-2  ">
            <span class="col-span-4  font-medium">{{ key }}:</span>
            <span class="col-span-8">{{ value }}</span>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import {ref} from "vue";


const itemsMenu = ref([
  {label: 'Đặc điểm', to: '#features'},
  {label: 'Phòng & giá', to: '#prices'},
  {label: 'Quy định', to: '#rules'},
  {label: 'Đánh giá', to: '#reviews'}
]);


const props = defineProps({
  cruise: Object,
  cabins: Object,
  tags: Object,
});

const shipDetails = {
  'Hạ thủy': props.cruise?.launchedYear,
   Cabin: props.cruise?.cabinQuantity,
  'Thân vỏ': props.cruise?.material,
  'Hành trình': 'Vịnh Lan Hạ - Bãi tắm Ba Trái Đào - Hang Sáng Tối',
  'Điều hành': 'Công ty cổ phần Heritage Cruises',
};

const features = [
  {
    label: props.tags?.name,
    svgIcon: 'svg'
  }
];
console.log( props.tags);

const highlights = [
  'Du thuyền được thiết kế với phong cách sang trọng và truyền thống',
  'Phòng ngủ tiện nghi sang trọng mang phong cách Á Đông đều có bồn tắm cạnh cửa kính lớn view vịnh',
  'Đặc biệt hơn, du thuyền thiết kế bể bơi 4 mùa to rộng là địa điểm check-in yêu thích của mọi du khách',
  'Du thuyền có nhiều lịch trình 2 ngày 1 đêm, 3 ngày 2 đêm và 4 ngày 3 đêm cho những ai muốn 1 lịch trình dài hơn trên vịnh Lan Hạ',
];

const selectButtonValue1 = ref(null);
const selectButtonValues1 = ref([{name: 'Đặc điểm'}, {name: 'Phòng & giá'}, {name: 'Quy định'}, {name: 'Đánh giá'}]);
</script>


