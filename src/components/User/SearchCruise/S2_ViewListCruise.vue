<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import OptionCruise from "@/components/User/SearchCruise/S21_OptionCruise.vue";
import ListSearchCruise from "@/components/User/SearchCruise/S22_ListSearchCuise.vue";

let layout = ref<'horizontal' | 'vertical'>('horizontal');
let resizeHandler = () => {
  layout.value = window.innerWidth <= 768 ? 'vertical' : 'horizontal';
};

onMounted(() => {
  window.addEventListener('resize', resizeHandler);
  resizeHandler();
});

onUnmounted(() => {
  window.removeEventListener('resize', resizeHandler);
});
</script>

<template>
  <Splitter :layout="layout" class="mx-auto max-w-screen-xl border-none " >
    <SplitterPanel class="flex m-3 " :size="15" :minSize="10">   <OptionCruise/> </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center" :size="80" :minSize="60">   <ListSearchCruise/> </SplitterPanel>
  </Splitter>
</template>
