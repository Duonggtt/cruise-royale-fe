<script setup lang="ts">
import {ref, onMounted, onUnmounted} from 'vue';
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
  <Splitter :layout="layout" :gutterSize="0" class="mx-auto max-w-screen-xl border-none mt-10">
    <SplitterPanel class="flex  h-auto " :size="20" :minSize="15">
      <OptionCruise/>
    </SplitterPanel>
    <SplitterPanel class="flex  justify-content-center " :size="80" :minSize="15">
      <ListSearchCruise/>
    </SplitterPanel>
  </Splitter>
</template>
