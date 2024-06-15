<template>
  <main>
<!--    <Navbar class="w-screen z-50"/>-->
    <Navbar/>
    <Toast class="z-50" />

    <SearchYachts/>

    <ListCruiseView/>


    <Footer/>

  </main>
</template>

<script setup lang="ts">

import Navbar from "@/components/User/Navbar.vue";
</script>
