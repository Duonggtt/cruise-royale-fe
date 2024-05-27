<template>
  <div>
    <Container v-if="state === 'login'">
      <Login @updateState="handleStateChange"/>
    </Container>
    <Container v-else="state === 'register'">
      <Register @updateState="handleStateChange"/>
    </Container>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import Login from '@/components/Login.vue';
import Register from '@/components/Register.vue';

export default defineComponent({
  components: {
    Login, Register
  },
  data() {
    return {
      state: "register"
    }
  },
  methods: {
    handleStateChange(newState) {
      this.state = newState;
    }
  }
});
</script>
  
  