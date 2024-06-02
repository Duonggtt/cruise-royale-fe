<template>
  <div>
    <Container v-if="state === 'login'">
      <div class="login-container flex align-items-center justify-content-center bg-white-alpha-100 h-screen " :style="{backgroundImage: 'url(/Logo/BG.png)', backgroundSize: 'cover'}"  >
        <Log @updateState="handleStateChange" />
      </div>

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

