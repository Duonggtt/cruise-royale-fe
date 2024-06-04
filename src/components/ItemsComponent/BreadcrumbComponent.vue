<template>
  <div class="p-4">
    <!-- Breadcrumb -->
    <div class="flex items-center space-x-2 text-gray-500">
      <i class="pi pi-home"></i>
      <Breadcrumb :model="items" class="bg-transparent border-0 p-0 m-0" />
    </div>

    <!-- Cruise Details -->
    <div class="mt-4">
      <h1 class="text-3xl font-bold">Du Thuyền Stellar of the Seas</h1>
      <div class="flex items-center space-x-4 mt-2">
        <!-- Star Rating -->
        <div class="flex items-center space-x-1">
          <i class="pi pi-star text-yellow-500"></i>
          <span>5 (0 đánh giá)</span>
        </div>
        <!-- Location -->
        <div class="flex items-center space-x-2">
          <i class="pi pi-map-marker text-gray-500"></i>
          <span>Bến Tuần Châu, Hạ Long, Quảng Ninh, Việt Nam</span>
          <a href="#" class="text-blue-500">Xem bản đồ và lịch trình</a>
        </div>
      </div>
      <div class="text-2xl font-semibold mt-4">5,300,000 đ/khách</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Breadcrumb from 'primevue/breadcrumb';

export default defineComponent({
  name: 'CruiseDetailComponent',
  components: {
    Breadcrumb
  },
  data() {
    return {
      items: [
        { label: 'Tìm du thuyền' },
        { label: 'Du Thuyền Stellar of the Seas' }
      ]
    };
  }
});
</script>

<style scoped>
.p-breadcrumb .p-breadcrumb-list li .p-menuitem-link {
  color: #4B5563; /* Custom Tailwind CSS color for text-gray-500 */
}

.text-yellow-500 {
  color: #FBBF24;
}

.text-blue-500 {
  color: #3B82F6;
}
</style>
