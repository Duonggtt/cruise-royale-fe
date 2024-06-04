<template>

  <div class="flex items-center space-x-2 text-gray-500 border-gray-300 border-top-1  border-bottom-1 py-3">
    <i class="pi pi-home"></i>
    <Breadcrumb :model="items" class="bg-transparent border-0 p-0 m-0"/>
  </div>

  <div class="flex justify-between items-center py-4 ">
    <div  >
      <h1 class="text-2xl font-bold">Du Thuyền Stellar of the Seas</h1>
      <div class="flex items-center mt-2 pt-2">
        <span class="bg-yellow-300 text-gray-700 rounded-4xl  px-3 py-1 text-sm">5 (0 đánh giá)</span>
       <div class="flex bg-gray-200 rounded-4xl ml-3 px-3">
         <p class=" ">Bến Tuần Châu, Hạ Long, Quảng Ninh, Việt Nam</p>
         <a href="#" class="ml-2 text-blue-300">Xem bản đồ và lịch trình</a>
       </div>

      </div>
      <img src="/heading-border.webp" alt="" class="pt-5">
    </div>
    <div class="text-3xl font-bold text-teal-700">5,300,000 đ/khách</div>
  </div>



</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Breadcrumb from 'primevue/breadcrumb';

export default defineComponent({
  name: 'CruiseDetailComponent',
  components: {
    Breadcrumb
  },
  data() {
    return {
      items: [
        {label: 'Tìm du thuyền'},
        {label: 'Du Thuyền Stellar of the Seas'}
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
