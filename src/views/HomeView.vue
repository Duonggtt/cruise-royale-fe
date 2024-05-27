<script setup lang="ts">
import {
    Login, Reg, Fogot, LoginView, Navbar, Profile,
    LoginForm, ForgotPasswordView, HomeView,
    RegisterView, aboutView

    } from '../main';

</script>

<template>
  <main> 
    <Navbar/>
    <LoginView/>
    <Reg/>
    <Fogot/>
    <Profile/> 
  </main>
</template>
