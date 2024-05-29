<template>
  <div>
    <Container v-if="state === 'login'">
      <Log @updateState="handleStateChange"/>
    </Container>
    <Container v-else-if="state === 'register'">
      <Reg @updateState="handleStateChange"/>
    </Container>
    <Container v-else-if="state === 'ForgotPassword'">
      <ForgotPassword @updateState="handleStateChange"/>
    </Container>
    <Container v-else-if="state === 'HomeView'">
      <HomeView @updateState="handleStateChange"/>
    </Container>
  </div>
</template>



<script lang="ts">
export default {
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
};
</script>

