<template>
  <div>
    <ForgotPassword />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ForgotPassword from '../components/Account_Auth/ForgotPassword.vue';

export default defineComponent({
  components: {
    ForgotPassword
  }
});
</script>


