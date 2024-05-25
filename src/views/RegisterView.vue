<template>
  <div class="login-container">
    <form @submit.prevent="register">
      <div class="card-container">
        <div class="welcome-message">
          <img :src="userImage" alt="User Image" class="user-image"/>
          <h2>Đăng ký nhé !</h2>
        </div>
        <div class="input-group">
          <span class="p-float-label">
            <InputText id="name" v-model="name" class="input-field"
                       style="border-radius: 2rem; padding: 0.7rem 1rem;"/>
            <label for="name">Tên</label>
          </span>
        </div>
        <div class="input-group">
          <span class="p-float-label">
            <InputText id="phone" v-model="phone" class="input-field"
                       style="border-radius: 2rem; padding: 0.7rem 1rem;"/>
            <label for="phone"  >Số điện thoại</label>
          </span>
        </div>
        <div class="input-group">
          <span class="p-float-label">
            <InputText id="email" v-model="email" class="input-field"
                       style="border-radius: 2rem; padding: 0.7rem 1rem;"/>
            <label for="email"  >Email</label>
          </span>
        </div>
        <div class="input-group">
          <span class="p-float-label">
            <InputText id="password" v-model="password" class="input-field"
                       style="border-radius: 2rem; padding: 0.7rem 1rem;"/>
            <label for="password">Mật khẩu</label>
          </span>
        </div>
      </div>

      <div class="link-container">
        <a @click="register" style="color:cornflowerblue">À Thôi đăng nhập luôn</a>
      </div>
      <div class="link-container flex align-items-center">
        <Button label="Đăng Ký" severity="Primary" class="signup-button"
                style="border-radius: 2rem; margin-right: 1.2em" @click="register"/>
      </div>

    </form>
  </div>
</template>


<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f2f5;
}

form {
  max-width: 400px;
  width: 100%;
  padding: 1.5rem;
  background-color: #fff;
  border-radius: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.welcome-message {
  text-align: center;
  margin-bottom: 2rem;
}

.welcome-message h2 {
  font-family: "Maven Pro ExtraBold", sans-serif;
  color: #333;
}

.user-image {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}

.card-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.p-float-label {
  width: 100%;
}
.p-float-label label{
  margin-top: -0.5em ;
  padding-left:0.5em
}
.input-group {
  width: 100%;
  margin-bottom: 1.8rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.input-field {
  width: 100%;
  height: 2.5rem;
  box-sizing: border-box;
}

.link-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.signup-button,
.login-button {
  width: 100%;
  margin-top: 1rem;
}

.social-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
}

.google-button {
  width: 100%;
  margin-bottom: 0.5rem;
}
</style>


<script lang="ts">
import {defineComponent} from 'vue';
import {useRouter} from 'vue-router';

export default defineComponent({
  setup() {
    const router = useRouter();
    return {router};
  },
  data() {
    return {
      name: '',
      phone: '',
      email: '',
      password: '',
      userImage: 'path_to_user_image.jpg'
    };
  },
  methods: {
    register() {
      console.log('Đăng ký với:', this.name, this.phone, this.email, this.password);
      this.router.push('/login');
    }
  }
});
</script>
