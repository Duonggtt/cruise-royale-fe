<template>
  <Navbar/>
  <section class="xl:max-w-6xl xl:mx-auto pt-32">
    <section class="mb-6 flex items-center justify-between">
      <div class="flex items-center justify-start">
        <span
            class="inline-flex justify-center items-center w-3rem h-3rem rounded-full bg-white text-black dark:bg-slate-900/70 dark:text-white mr-3">
          <i class="pi pi-user" style="color: black"></i>
        </span>
        <span class="text-3xl font-bold">Profile</span>
      </div>
      <a class="inline-flex justify-center items-center no-underline whitespace-nowrap rounded-full bg-gray-800 text-white hover:bg-gray-700 px-4 py-2"
         href="" target="">
        <span class="inline-flex justify-center items-center w-6 h-6">
          <i class="pi pi-sign-out" style="color: white"></i>
          <span class="px-1 font-medium" @click="logout">Đăng xuất</span>
        </span>
      </a>
    </section>
    <div class="rounded-3xl flex-col dark:bg-slate-900/70 bg-white flex mb-6 shadow-2">
      <div class="flex-1 p-6">
        <div class="justify-around lg:justify-center items-center block md:flex">
          <div class="flex items-center justify-center mb-6 md:mb-0">
            <div class="lg:mx-12">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com"
                   alt="Huy Chiến"
                   class="rounded-full block h-auto w-full max-w-full bg-gray-100 dark:bg-slate-800">
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="space-y-3 text-center md:text-left lg:mx-12">
              <h1 class="text-2xl"> Xin Chào, <b></b>! {{ user.name }}</h1>
              <p>Đăng nhập lần cuối <b>12 phút trước</b> từ <b>127.0.0.1</b></p>
              <div class="flex justify-center md:block">
                <div
                    class="inline-flex items-center capitalize leading-none text-sm border rounded-full py-1.5 px-4 bg-blue-500 border-blue-500 text-white">
                  <span class="inline-flex justify-center items-center w- h-4 mr-2">
                    <svg viewBox="0 0 24 24" width="16" height="16" class="inline-block">
                      <path fill="currentColor"
                            d="M23,12L20.56,9.22L20.9,5.54L17.29,4.72L15.4,1.54L12,3L8.6,1.54L6.71,4.72L3.1,5.53L3.44,9.21L1,12L3.44,14.78L3.1,18.47L6.71,19.29L8.6,22.47L12,21L15.4,22.46L17.29,19.28L20.9,18.46L20.56,14.78L23,12M10,17L6,13L7.41,11.59L10,14.17L16.59,7.58L18,9L10,17Z"></path>
                    </svg>
                  </span>
                  <span>Đã xác minh</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form class="rounded-2xl bg-white shadow-2">
        <div class="flex-1 p-6">
          <div class="mb-6">
            <label class="block font-bold mb-2">Avatar</label>
            <div class="card shadow-1">
              <Toast class="z-50"/>
              <FileUpload name="demo[]" url="/api/upload" @upload="onAdvancedUpload($event)" :multiple="true"
                          accept="image/*" :maxFileSize="1000000" @click="uploadPhoto">
                <template #empty>
                  <p>Kéo thả file vào đây để upload. ( Max 3MB )</p>
                </template>
              </FileUpload>
            </div>
          </div>

          <div class="mb-3">
            <InputGroup class="">
              <label class="block font-bold mb-2 pl-2">Tên</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user" v-model="user.name"/>
              </div>
              <div class="text-xs text-gray-500 dark:text-slate-40 pl-2">Yêu cầu. Tên của bạn</div>
            </InputGroup>
          </div>

          <div class="mb-3">
            <InputGroup class="">
              <label class="block font-bold mb-2 pl-2">Email</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user" v-model="user.email"/>
              </div>
              <div class="text-xs text-gray-500 dark:text-slate-40 pl-2">Yêu cầu. Email của bạn</div>
            </InputGroup>
          </div>

          <div class="mb-3">
            <InputGroup class="">
              <label class="block font-bold mb-2 pl-2">Số điện thoại</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user" v-model="user.phone"/>
              </div>
              <div class="text-xs text-gray-500 dark:text-slate-40 pl-2">Yêu cầu. Số điện thoại của bạn</div>
            </InputGroup>
          </div>

          <div class="mb-3">
            <InputGroup class="">
              <label class="block font-bold mb-2 pl-2">Địa chỉ</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user" v-model="user.address"/>
              </div>
              <div class="text-xs text-gray-500 dark:text-slate-40 pl-2">Yêu cầu. Địa chỉ của bạn</div>
            </InputGroup>
          </div>
        </div>

        <footer class="px-6">
          <button class="p-button py-2 px-3 mr-3 mb-3" type="submit" @click="updateUser">
            <span class="px-2">Cập nhật</span>
          </button>
        </footer>
      </form>

      <form class="rounded-2xl bg-white shadow-2">
        <div class="flex-1 p-6">
          <div class="py-5">
            <InputGroup class="">
              <label class="block font-bold mb-1 pl-2">Mật khẩu hiện tại</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user"/>
              </div>
              <div class="text-xs text-gray-500 pl-2">Yêu cầu. Mật khẩu hiện tại của bạn</div>
            </InputGroup>
          </div>
          <hr class="my-6 -mx-6 border-b-gray-100">
          <div class="mb-3">
            <InputGroup class="">
              <label class="block font-bold mb-1 pl-2">Mật khẩu mới</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user"/>
              </div>
              <div class="text-xs text-gray-500 dark:text-slate-40 pl-2">Yêu cầu. Mật khẩu mới</div>
            </InputGroup>
          </div>
          <div class="mb-2">
            <InputGroup class="">
              <label class="block font-bold mb-1 pl-2">Xác nhận mật khẩu</label>
              <div class="card flex md:flex-row align-items-center gap-3 pb-2">
                <InputText class="rounded-2xl w-full pl-4" content="pi pi-user"/>
              </div>
              <div class="text-xs text-gray-500 dark:text-slate-40 pl-2">Yêu cầu. Mật khẩu mới một lần nữa</div>
            </InputGroup>
          </div>
        </div>

        <footer class="px-6">
          <button class="p-button py-2 px-3 mr-3 mb-3" type="submit">
            <span class="px-2">Cập nhật</span>
          </button>
          <button class="p-button py-2 px-3 mr-3 mb-3" type="button">
            <span class="px-2">Tuỳ chọn</span>
          </button>
        </footer>
      </form>
    </div>
  </section>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {useAuthStore} from '@/stores/counter';

export default defineComponent({
  data(): { user: any, originalUser: any, checked: boolean, access_token: string } {
    return {
      user: {},
      originalUser: {},
      access_token: localStorage.getItem('access_token') || '',
      checked: false,
    };
  },
  created() {
    this.fetchUserInfo();
  },
  methods: {
    fetchUserInfo() {
      const userInfo = localStorage.getItem('userInfo');
      if (userInfo !== null) {
        this.user = JSON.parse(userInfo);
        this.originalUser = { ...this.user }; // Lưu trữ thông tin người dùng ban đầu
      }
      console.log("user: ", this.user);
    },
    onAdvancedUpload($event: any) {
      this.$toast.add({severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 15000});
    },
    logout() {
      const authStore = useAuthStore();
      authStore.logout();
      // this.$router.push('/');
    },
    async uploadPhoto() {
      try {
        // Replace this with the actual function that handles the photo upload
        // await this.actualUploadPhotoFunction();
        // If the Promise resolves, the photo was uploaded successfully
        // this.$toast.add({severity: 'success', summary: 'Success', detail: 'Photo Uploaded Successfully', life: 3000});
      } catch (error) {
        // If the Promise rejects, there was an error uploading the photo
        this.$toast.add({severity: 'error', summary: 'Error', detail: 'Failed to Upload Photo', life: 3000});
      }
    },
    async updateUser() {
      const username = localStorage.getItem('user');
      const url = `http://localhost:8080/api/user/update?username=${username}`;

      // Create an object with all fields
      const updatedFields = {
        name: this.user.name,
        email: this.user.email,
        phone: this.user.phone,
        address: this.user.address,
      };

      try {
        const res = await fetch(url, {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${this.access_token}`,
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(updatedFields)
        });

        // If the token has expired
        if (!res.ok) {
          throw new Error(`Server responded with status code ${res.status}`);
        }

        // Update user information in data and originalUser
        this.user = updatedFields;
        this.originalUser = { ...updatedFields };

        // Store the updated user information in localStorage
        localStorage.setItem('userInfo', JSON.stringify(updatedFields));

        console.log("User information updated successfully!");
      } catch (error) {
        console.log("Error updating user information!", error);
      }
    }
  },
});
</script>

<style scoped>
</style>