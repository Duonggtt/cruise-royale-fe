<template>
  <div class="container mx-auto p-4  min-h-screen">
    <!-- Tabs -->
    <div class="flex items-center justify-start space-x-4 bg-white p-2 rounded shadow">
      <button class="tab">Đặc điểm</button>
      <button class="tab">Phòng & giá</button>
      <button class="tab">Giới thiệu</button>
      <button class="tab">Quy định</button>
      <button class="tab">Đánh giá</button>
    </div>

    <!-- Main content -->
    <div class="flex flex-col lg:flex-row mt-4 space-y-4 lg:space-y-0 lg:space-x-4">
      <!-- Left Column -->
      <div class="col-9 bg-white p-6 rounded-4xl shadow">
        <h2 class="text-2xl font-bold mb-4">Đặc điểm nổi bật</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <div v-for="feature in features" :key="feature.label" class="feature-item flex items-center space-x-2">
            <i :class="feature.icon"></i>
            <span>{{ feature.label }}</span>
          </div>
        </div>
        <ul class="list-disc   space-y-2">
          <li v-for="highlight in highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </div>

      <!-- Right Column -->
      <div class="col-3 bg-white px-5 py-4 rounded-4xl shadow ">
        <h2 class="text-xl font-bold pb-3 border-bottom-1 border-gray-200">Thông tin du thuyền</h2>
        <div v-for="(value, key) in shipDetails" :key="key" class="flex items-center pt-2">
          <span class="col-6 w-24 font-semibold">{{ key }}:</span>
          <span class="col-6">{{ value }}</span>
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
const shipDetails = {
  'Hạ thủy': '2019',
  Cabin: '20',
  'Thân vỏ': 'Kim loại',
  'Hành trình': 'Vịnh Lan Hạ - Bãi tắm Ba Trái Đào - Hang Sáng Tối',
  'Điều hành': 'Công ty cổ phần Heritage Cruises',
};

const features = [
  { label: 'Có bể sục', icon: 'pi  pi-home' },
  { label: 'Bao gồm tất cả các bữa ăn', icon: 'pi  pi-home' },
  { label: 'Quầy bar', icon: 'pi  pi-home' },
  { label: 'Lễ tân 24 giờ', icon: 'pi pi-clock' },
  { label: 'Nhà hàng', icon: 'pi pi-home' },
  { label: 'Phòng có bồn tắm', icon: 'pi  pi-home' },
];

const highlights = [
  'Du thuyền được thiết kế với phong cách sang trọng và truyền thống',
  'Phòng ngủ tiện nghi sang trọng mang phong cách Á Đông đều có bồn tắm cạnh cửa kính lớn view vịnh',
  'Đặc biệt hơn, du thuyền thiết kế bể bơi 4 mùa to rộng là địa điểm check-in yêu thích của mọi du khách',
  'Du thuyền có nhiều lịch trình 2 ngày 1 đêm, 3 ngày 2 đêm và 4 ngày 3 đêm cho những ai muốn 1 lịch trình dài hơn trên vịnh Lan Hạ',
];
</script>


