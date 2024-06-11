<script setup lang="ts">

import OptionCruise from "@/components/User/SearchCruise/S21_OptionCruise.vue";
import ListSearchCruise from "@/components/User/SearchCruise/S22_ListSearchCuise.vue";
</script>

<template>
  <Splitter class="mx-auto max-w-screen-xl ">
    <SplitterPanel class="flex m-10" :size="15" :minSize="10">   <OptionCruise/> </SplitterPanel>
    <SplitterPanel class="flex align-items-center justify-content-center" :size="80">   <ListSearchCruise/> </SplitterPanel>
  </Splitter>


</template>

