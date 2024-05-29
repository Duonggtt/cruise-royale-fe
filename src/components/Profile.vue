<template>
<navbar/>
    <div class="ForgotPassword-container  flex align-items-center justify-content-center bg-white-alpha-100 h-screen ">
        <div class="card-container w-30rem shadow-1 p-10 rounded-3xl">
          <div class="user-profile">
            <img :src="user.image" alt="User Image" class="rounded-full w-5rem h-5rem ">
            <h2>{{ user.name }}</h2>
            <p>{{ user.email }}</p>
          </div>

        </div>





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



</style>
