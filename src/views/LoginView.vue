<template>
  <div>
    <Container v-if="state === 'log'">
      <Log @updateState="handleStateChange"/>
    </Container>
    <Container v-else-if="state === 'register'">
      <Reg @updateState="handleStateChange"/>
    </Container>
  </div>
</template>



<script lang="ts">
export default {
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
};
</script>
  
  