<template>
  <div>
    <Container v-if="state === 'log'">
      <Login @updateState="handleStateChange"/>
    </Container>
    <Container v-else-if="state === 'register'">
      <Reg @updateState="handleStateChange"/>
    </Container>
  </div>
</template>
<script lang="ts">
import {defineComponent} from 'vue';
import Login from '../components/Login.vue';
import Reg from '../components/Register.vue';

export default defineComponent({
  components: {
    Login, Reg
  },
  data() {
    return {
      state: "log"
    }
  },
  methods: {
    handleStateChange(newState: string) {
      this.state = newState;
    }
  }
});
</script>
  
  