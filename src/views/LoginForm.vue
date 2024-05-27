<template>
  <div>
    <Container v-if="state === 'login'">
      <Login @updateState="handleStateChange"/>
    </Container>
    <Container v-else-if="state === 'register'">
      <Reg @updateState="handleStateChange"/>
    </Container>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import {  Login, Reg,   } from '../main';

export default defineComponent({
  components: {
    Login, Reg
  },
  data() {
    return {
      state: "login"
    }
  },
  methods: {
    handleStateChange(newState: string) {
      this.state = newState;
    }
  }
});
</script>
  
  