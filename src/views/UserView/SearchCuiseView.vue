<template>
  <main>
    <Toast class="z-50 inline-block"/>
    <Navbar class="w-screen "/>

    <SearchCuise/>
    <ViewListCruise/>

    <Footer/>
  </main>
</template>

<script setup lang="ts">

import SearchCuise from "@/components/User/SearchCruise/S1_SearchCuise.vue";
import ViewListCruise from "@/components/User/SearchCruise/S2_ViewListCruise.vue";

</script>