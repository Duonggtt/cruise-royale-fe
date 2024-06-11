<template>
  <div class="  ">
    <div class="my-5">
      <h3 class="font-bold">Lọc kết quả</h3>
    </div>
    <div class="flex flex-column gap-3">
      <div v-for="category of categories" :key="category.key" class="flex align-items-center gap-3">
        <Checkbox v-model="selectedCategories" :inputId="category.key" name="category" :value="category.name"/>
        <label :for="category.key">{{ category.name }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue';

const categories = ref([
  {name: "3 sao", key: "A"},
  {name: "4 sao", key: "M"},
  {name: "5 sao", key: "P"}
]);
const selectedCategories = ref(['Marketing']);
</script>
