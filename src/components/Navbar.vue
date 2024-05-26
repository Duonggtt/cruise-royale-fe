<template>
  <div class="navbar align-items-center justify-content-center w-screen">
    <div class="container border-0">
      <div class="left">
        <div class="logo-and-items">
          <img :src="logo" alt="Logo" class="p-mr-2 max-h-5rem rounded-circle">
          <Menubar :model="items" />
        </div>
      </div>
      <div class="right">
        <Button v-if="!isLoggedIn" label="Đăng ký" class="p-button-raised p-mr-2" @click="Register" />
        <Button v-if="!isLoggedIn" label="Đăng nhập" class="p-button-raised p-mr-2" @click="Login" />
        <div v-if="isLoggedIn" class="p-d-flex p-ai-center  justify-content-end">
          <img :src="userImage" alt="User" class="p-mr-2 h-5rem rounded-circle">
          <span>{{ username }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import Menubar from 'primevue/menubar';
import Button from 'primevue/button';
import {useRouter} from 'vue-router';

export default {
  components: {
    Menubar,
    Button
  },
  setup() {
    const router = useRouter();
    const logo = ref('/img_log/anh01.jpg')
    const items = ref([
      { label: 'Tìm du thuyền', style: 'color: red;' },
      { label: 'Tìm vé máy bay', style: 'color: blue;' },
      { label: 'Doanh nghiệp', style: 'color: green;' },
      { label: 'Blog', style: 'color: yellow;' }
    ])
    const isLoggedIn = ref(false)
    const userImage = ref('/img_log/anh03.jpg')
    const username = ref('')

    const Register = () => {
      router.push('/Register');
    } 
    const Login = () => {
      router.push('/Login');
    }

    return {
      logo,
      items,
      isLoggedIn,
      userImage,
      username,
      Register, 
      Login
    }
  }
}
</script>


<style scoped>
.container {
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
}

.left {
  flex: 8;
  text-align: left;
}

.right {
  flex: 4;
  text-align: right;
}

.logo-and-items {
  display: flex;
  align-items: center;
}

.p-d-flex {
  display: flex;
}

.p-ai-center {
  align-items: center;
}

.p-jc-center {
  justify-content: center;
}

.p-mr-2 {
  margin-right: 2rem;
}

.p-ml-auto {
  margin-left: auto;
}

.p-menubar {
  background-color: transparent !important;
  /* Change the background color */
  border: none !important;
  /* Remove the border */

}

.p-menubar .p-menubar-root-list {
  background-color: transparent !important;
  /* Change the background color */
  border: none !important;
  /* Remove the border */

}
</style>
