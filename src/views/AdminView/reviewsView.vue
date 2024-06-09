<template>
  <div class="flex">
    <div class="w-64 bg-gray-800 text-white py-4">
      <SlideBar />
    </div>
    <div class="flex-1 p-4">
      <router-view />
      <ReviewManagement/>
    </div>
  </div>
</template>

<script setup lang="ts">
import SlideBar from "@/components/Admin/SlideBar.vue";
import ReviewManagement from "@/components/Admin/ReviewManagement.vue";

</script>
