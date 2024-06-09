<template>
  <div class="flex">
    <div class="w-64 bg-gray-800 text-white py-4">
      <SlideBar />
    </div>
    <div class="flex-1 p-4">
      <router-view />
      <BookingsManagement/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SlideBar from "@/components/Admin/SlideBar.vue";
import BookingsManagement from "@/components/Admin/BookingManagement.vue";

</script>
