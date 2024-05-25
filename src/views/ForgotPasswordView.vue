<template>
  <div>
    <ForgotPassword />
    <router-link to="/login">Quay lại trang đăng nhập</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForgotPassword from '@/components/ForgotPassword.vue';

export default defineComponent({
  components: {
    ForgotPassword
  }
});
</script>


