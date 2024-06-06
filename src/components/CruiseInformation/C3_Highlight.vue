<template>
  <div class="container mx-auto p-4 min-h-screen">
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
            <div class="icon text-color-secondary" v-html="feature.svgIcon" ></div>
            <span>{{ feature.label }}</span>
          </div>
        </div>
        <ul class="list-disc space-y-2">
          <li v-for="highlight in highlights" :key="highlight">{{ highlight }}</li>
        </ul>
      </div>

      <!-- Right Column -->
      <div class="col-3 bg-white px-5 py-4 rounded-4xl shadow">
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
  { label: 'Có bể sục', svgIcon: '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M2 3h20v2H2zm0 14h20v2H2zm0-7h20v2H2z"/></svg>' },
  { label: 'Bao gồm tất cả các bữa ăn', svgIcon: '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M3 3h18v2H3zm0 14h18v2H3zm0-7h18v2H3z"/></svg>' },
  { label: 'Quầy bar', svgIcon: '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M4 4h16v2H4zm0 14h16v2H4zm0-7h16v2H4z"/></svg>' },
  { label: 'Lễ tân 24 giờ', svgIcon: '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M5 5h14v2H5zm0 12h14v2H5zm0-6h14v2H5z"/></svg>' },
  { label: 'Nhà hàng', svgIcon: '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M6 6h12v2H6zm0 12h12v2H6zm0-6h12v2H6z"/></svg>' },
  { label: 'Phòng có bồn tắm', svgIcon: '<svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M7 7h10v2H7zm0 10h10v2H7zm0-6h10v2H7z"/></svg>' },
];

const highlights = [
  'Du thuyền được thiết kế với phong cách sang trọng và truyền thống',
  'Phòng ngủ tiện nghi sang trọng mang phong cách Á Đông đều có bồn tắm cạnh cửa kính lớn view vịnh',
  'Đặc biệt hơn, du thuyền thiết kế bể bơi 4 mùa to rộng là địa điểm check-in yêu thích của mọi du khách',
  'Du thuyền có nhiều lịch trình 2 ngày 1 đêm, 3 ngày 2 đêm và 4 ngày 3 đêm cho những ai muốn 1 lịch trình dài hơn trên vịnh Lan Hạ',
];
</script>

<style scoped>

</style>
