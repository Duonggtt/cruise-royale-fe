<template>
  <div class="login-container">
    <form @submit.prevent="login">
      <div class="card-container">
        <div class="welcome-message">
<!--          <img :src="userImage" alt="User Image" class="user-image"/>-->

          <i class="pi pi-spin pi-spinner-dotted" style="font-size: 2rem"></i>


          <h2>Welcome, Travel!</h2>
        </div>

        <div class="input-group">
          <span class="p-float-label">
            <InputText id="username" v-model="username" class="input-field"
                       style="border-radius: 2rem; padding: 0.7rem 1rem;"/>
            <label for="username"  >Username</label>
          </span>
        </div>
        <div class="input-group">
          <span class="p-float-label">
            <InputText id="password" v-model="password" class="input-field"
                       style="border-radius: 2rem; padding: 0.7rem 1rem;"/>
            <label for="password"   >Password</label>
          </span>
        </div>


      </div>

      <div class="link-container">
        <div class="flex align-items-center " >
          <Checkbox v-model="checked" inputId="ingredient1" name="pizza" value="Cheese"/>
          <label for="ingredient1"  style=" margin-left: 0.3em; " > Nhớ hộ ! </label>
        </div>
        <a @click="handleForgotPassword" style="color:cornflowerblue">Quên mk dồi:(</a>
      </div>
      <div class="link-container flex align-items-center">
        <Button label="Đăng ký" severity="Primary" class="signup-button"
                style="border-radius: 2rem; margin-right: 1.2em" @click="handleSignUp"/>
        <Button label="Đăng nhập" severity="Primary" class="login-button" style="border-radius: 2rem;margin-left: 1.2em" @click="login"/>
      </div>

      <div class="social-login">
        <Button label="Đăng nhập với Google" class="google-button" style="border-radius: 2rem; " @click="handleGoogleLogin"/>
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
      username: '',
      password: '',
      checked: false,
      userImage: 'path_to_user_image.jpg'
    };
  },
  methods: {
    login() {
      console.log('Đăng nhập với:', this.username, this.password, this.checked);
      this.router.push('/home');
    },
    handleSignUp() {
      this.router.push('/Register');
    },
    handleGoogleLogin() {
      console.log('Xử lý đăng nhập với Google');

    },
    handleForgotPassword() {
      this.router.push('/FogotPassword'); // use this.router instead of useRouter()
    }
  }
});
</script>
