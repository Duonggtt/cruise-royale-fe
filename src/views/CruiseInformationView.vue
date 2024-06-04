<script setup lang="ts">

import YachtTitle from "@/components/CruiseInformation/YachtTitle.vue";
</script>
<template>
  <Navbar class="w-screen"/>

  <div class="xl:max-w-6xl xl:mx-auto pt-32">
    <!--  <YachtTitle />-->
    <YachtTitle />
    <RoomTypes />
    <Introduction />
    <Policies />
    <FAQ />
    <Map />
    <Reviews />
    <!--  <Footer />-->
  </div>

</template>

<style scoped>

</style>
