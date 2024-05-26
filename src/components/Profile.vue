<template>
  <div class="user-profile">
    <img :src="user.image" alt="User Image" class="rounded-circle  ">
    <h2>{{ user.name }}</h2>
    <p>{{ user.email }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

interface User {
  name: string;
  email: string;
  image: string;
}

export default defineComponent({
  data(): { user: User } {
    return {
      user: {
        name: 'Tên người dùng',
        email: 'email@domain.com',
        image: '/img_log/anh03.jpg',
      },
    };
  },
});
</script>

<style scoped>
.user-profile {
  width: 300px;
  border: 1px solid #ccc;
  padding: 20px;
  margin: 0 auto;
}

.user-profile img {
  width: 100%;
  height: auto;
}
</style>
