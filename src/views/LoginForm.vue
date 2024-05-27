<template>
    <div>
        <Container v-if="state === 'login'">
            <Login />
        </Container>
        <Container v-else="state === 'register'">
            <Register />
        </Container>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';
  
  export default defineComponent({
    components: {
      Login,Register
    },
    data() {
        return {
            state: "register"
        }
    }
  });
  </script>
  
  