<template>
  <section class="xl:max-w-6xl xl:mx-auto pt-6 ">
    <section class="mb-6 flex items-center justify-between">
      <div class="flex items-center justify-start ">
        <span
            class="inline-flex justify-center items-center w-3rem h-3rem rounded-full text-black dark:bg-slate-900/70 dark:text-white mr-3">
          <i class="pi pi-user" style="color: black"></i>
        </span>
        <span class="text-3xl font-bold">Profile</span>
      </div>
      <p class="inline-flex justify-center items-center no-underline whitespace-nowrap rounded-full bg-gray-800 text-white hover:bg-gray-700 px-4 py-2 cursor-pointer"
         @click="logouts">
        <span class="inline-flex justify-center items-center gap-2">
          <span class="px-1 font-medium">Đăng xuất</span>
            <span class="material-symbols-outlined">logout</span>
        </span>
      </p>
    </section>

    <div class="rounded-3xl flex-col dark:bg-slate-900/70 flex mb-6 shadow-md border-2 border-gray-100">
      <div class="flex-1 p-6">
        <div class="md:flex block ">
          <div class="flex mb-6 md:mb-0">
            <div class="mx-12 ">
              <img v-if="userImage.length > 0" :src="getImageUrl(userImage[0].data)" :alt="userImage[0].type" class="w-48 h-48 object-cover rounded-full"/>
              <img v-else src="https://api.dicebear.com/7.x/avataaars/svg?seed=doe-doe-doe-example-com" alt="Default Avatar" class="w-48 h-48 object-cover rounded-full"/>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <div class="space-y-3 text-center md:text-left lg:mx-12">
              <h1 class="text-2xl font-medium"> Xin Chào! <b class="font-bold">{{ user.name }}</b></h1>
              <h6 class="text-xl font-medium"><b class="font-bold">{{ user.username }}</b></h6>

              <p v-if="userImage.length > 0">Cập nhật ngày: {{ formatDate(userImage[0].createdAt) }}</p>
              <div class="flex justify-center md:block">
                <div class="inline-flex items-center capitalize leading-none text-sm border rounded-full py-1.5 px-4 bg-blue-500 border-blue-500 text-fuchsia-50 ">
                  <span class="inline-flex justify-center items-center w- h-4 mr-2 ">
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

          <div class="w-96">
            <div>
              <div class="overflow-hidden rounded-full bg-gray-200">
                <div class="h-2 w-1/2 rounded-full bg-blue-500"></div>
              </div>

              <ol class="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
                <li class="flex items-center justify-start text-blue-600 sm:gap-1.5">
                  <span class="hidden sm:inline"> Details </span>
                  <span class="scale-75 material-symbols-outlined">contact_emergency</span>
                </li>

                <li class="flex items-center justify-center text-blue-600 sm:gap-1.5">
                  <span class="hidden sm:inline"> Address </span>
                  <span class="scale-75 material-symbols-outlined">location_on</span>
                </li>

                <li class="flex items-center justify-end sm:gap-1.5">
                  <span class="hidden sm:inline"> Payment </span>
                  <span class="scale-75 material-symbols-outlined">payments</span>
                </li>
              </ol>
            </div>


          </div>
        </div>
      </div>
    </div>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <form class="rounded-2xl dark:bg-slate-900/70  bg-gray-100 shadow-2" @submit.prevent="updateUser">
        <div class="flex-1 p-6 ">
          <div class="mb-6 ">
            <label class="block font-bold mb-2">Avatar</label>
            <div class="card shadow-1 border-round-xl">
              <FileUpload
                  url="/api/images/upload/17" @uploader="onAdvancedUpload"
                  :multiple="false" accept="image/*"
                  :auto="true" :maxFileSize="1000000">
                <template #empty>
                  <p>Kéo thả file vào đây để upload. ( Max 3MB )</p>
                </template>
              </FileUpload>
            </div>
          </div>

          <div class="mb-3">
            <FloatLabel class="input-group flex-column align-items-center mb-6 ">
              <InputText class="rounded-3xl w-full pl-4" v-model="user.name"/>
              <label class="block mb-2 pl-2">Tên</label>
            </FloatLabel>
          </div>

          <div class="mb-3">
            <FloatLabel class="input-group flex-column align-items-center mb-6 ">
              <label class="block mb-2 pl-2">Email</label>
              <InputText class="rounded-3xl w-full pl-4" v-model="user.email"/>
            </FloatLabel>
          </div>

          <div class="mb-3">
            <FloatLabel class="input-group flex-column align-items-center mb-6 ">
              <label class="block mb-2 pl-2">Số điện thoại</label>
              <InputText class="rounded-3xl w-full pl-4" v-model="user.phone"/>
            </FloatLabel>
          </div>

          <div class="mb-3">
            <FloatLabel class="input-group flex-column align-items-center mb-6 ">
              <label class="block mb-2 pl-2">Địa chỉ</label>
              <InputText class="rounded-3xl w-full pl-4" v-model="user.address"/>
            </FloatLabel>
          </div>
        </div>

        <footer class="px-6">
          <Button label="Cập nhật" severity="primary" class="w-full mt-5 mb-5 rounded-3xl" type="submit"/>
        </footer>
      </form>

      <form class="rounded-2xl dark:bg-slate-900/70  bg-gray-100 shadow-2">
        <div class="flex-1 p-6">
          <div class="mb-12">
            <div class="overflow-hidden rounded-full bg-gray-200">
              <div class="h-2 w-1/2 rounded-full bg-blue-500"></div>
            </div>

            <ol class="mt-4 grid grid-cols-3 text-sm font-medium text-gray-500">
              <li class="flex items-center justify-start text-blue-600 sm:gap-1.5">
                <span class="hidden sm:inline"> Details </span>
                <span class="scale-75 material-symbols-outlined">contact_emergency</span>
              </li>

              <li class="flex items-center justify-center text-blue-600 sm:gap-1.5">
                <span class="hidden sm:inline"> Address </span>
                <span class="scale-75 material-symbols-outlined">location_on</span>
              </li>

              <li class="flex items-center justify-end sm:gap-1.5">
                <span class="hidden sm:inline"> Payment </span>
                <span class="scale-75 material-symbols-outlined">payments</span>
              </li>
            </ol>
          </div>

<!--          <div class="py-5">-->
<!--            <FloatLabel class="input-group flex-column align-items-center mb-6 ">-->
<!--              <label class="block mb-1 pl-2">Mật khẩu hiện tại</label>-->
<!--              <InputText class="rounded-3xl w-full pl-4"/>-->
<!--            </FloatLabel>-->
<!--          </div>-->
<!--          <hr class="my-6 -mx-6 border-b-gray-100">-->
<!--          <div class="mb-3">-->
<!--            <FloatLabel class="input-group flex-column align-items-center mb-6 ">-->
<!--              <label class="block mb-1 pl-2">Mật khẩu mới</label>-->
<!--              <InputText class="rounded-3xl w-full pl-4"/>-->
<!--            </FloatLabel>-->
<!--          </div>-->
<!--          <div class="mb-2">-->
<!--            <FloatLabel class="input-group flex-column align-items-center mb-6 ">-->
<!--              <label class="block mb-1 pl-2">Xác nhận mật khẩu</label>-->
<!--              <InputText class="rounded-3xl w-full pl-4"/>-->
<!--            </FloatLabel>-->
<!--          </div>-->
        </div>


      </form>
    </div>
  </section>
</template>

<script setup lang="ts">
import {ref, onMounted, defineAsyncComponent} from 'vue';
import {useAuthStore} from '@/stores/counter';

import router from "@/router";
import {useToast} from 'primevue/usetoast';
import Tour from "@/components/User/Account_Auth/Tour.vue";


import {API_URL} from '@/stores/config';

const api_url = API_URL;

interface UserImage {
  id: number;
  data: string;
  type: string;
  createdAt: string;
}

const toast = useToast();
const userImage = ref<UserImage[]>(JSON.parse(localStorage.getItem('userImage') || '[]'));
const user = ref<any>({});
const originalUser = ref<any>({});
const access_token = ref(localStorage.getItem('access_token') || '');
const checked = ref(false);


const customBase64Uploader = async (event: any) => {
  const file = event.files[0];
  const reader = new FileReader();
  let blob = await fetch(file.objectURL).then((r) => r.blob()); //blob:url

  reader.readAsDataURL(blob);

  reader.onloadend = function () {
    const base64data = reader.result;
  };
};

onMounted(() => {
  fetchUserInfo();
});


const fetchUserInfo = () => {
  const userInfo = localStorage.getItem('userInfo');
  if (userInfo != null) {
    user.value = JSON.parse(userInfo);
    originalUser.value = {...user.value}; // Lưu trữ thông tin người dùng ban đầu
  }
  console.log("user: ", user.value);
};


const onAdvancedUpload = async (event: any) => {
  if (!event.files) {
    console.error('Chọn file ảnh đã bạn');
    toast.add({severity: 'error', summary: 'Error', detail: 'Chọn file ảnh đã bạn', life: 3000, contentStyleClass: 'gap-3', closable: false,});
    return;
  }

  const files = event.files;
  const userId = localStorage.getItem('userId');
  console.log('userId:', userId); // In ra giá trị của userId để kiểm tra
  console.log('files:', files);
  console.log('files.length:', files.length);


  if (files && files.length > 0 && userId) {
    const formData = new FormData();
    formData.append('file', files[0]);
    formData.append('userId', userId);

    console.log('userId is not null or undefined'); // Kiểm tra nếu userId có giá trị
    try {
      const res = await fetch('${api_url}/api/images/upload', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${access_token.value}`,
        },
        body: formData,
      });

      if (!res.ok) {
        throw new Error(`Server responded with status code ${res.status}`);
      }
      toast.add({severity: 'success', summary: 'Success', detail: 'File uploaded successfully', life: 3000, contentStyleClass: 'gap-3', closable: false,});
      event.files.clear = false;

    } catch (error) {
      console.error('Error uploading file:', error);
      toast.add({severity: 'error', summary: 'Error', detail: 'Failed to upload file', life: 3000, contentStyleClass: 'gap-3', closable: false,});
    }
  } else {
    console.error('No file or userId provided');
    toast.add({severity: 'error', summary: 'Error', detail: 'No file or userId provided', life: 3000, contentStyleClass: 'gap-3', closable: false,});
  }
};
const logouts = async () => {
  const authStore = useAuthStore();
  await authStore.logout();
  toast.add({severity: 'error', summary: 'Error', detail: `Đã đăng xuất`, life: 500, contentStyleClass: 'gap-3', closable: false});
  setTimeout(() => {
    router.push('/')
  }, 500);
};

const updateUser = async () => {
  const username = localStorage.getItem('user');
  const url = `${api_url}/user/update?username=${username}`;

  // Create an object with all fields
  const updatedFields = {
    name: user.value.name,
    email: user.value.email,
    phone: user.value.phone,
    address: user.value.address,
  };

  const res = await fetch(url, {
    method: 'PUT',
    headers: {
      'Authorization': `Bearer ${access_token.value}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(updatedFields)
  });

  if (!res.ok) {
    throw new Error(`Server responded with status code ${res.status}`);
  }

  // Update user information in data and originalUser
  user.value = updatedFields;
  originalUser.value = {...updatedFields};

  // Store the updated user information in localStorage
  localStorage.setItem('userInfo', JSON.stringify(updatedFields));

  console.log("User information updated successfully!");
  toast.add({severity: 'success', summary: 'Success', detail: 'Cập nhật thông tin thành công !', closable: false, life: 3000, contentStyleClass: 'gap-3'});
};


const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString();
};

const getImageUrl = (imageData: string): string => {
  return imageData ? `data:image/jpeg;base64,${imageData}` : '';
};


const LichTrinh = ref([
  {
    icon: 'pi pi-user',
    label: 'Hạ Long'
  },
  {
    icon: 'pi pi-calendar',
    label: 'Lịch trình'
  },
  {
    icon: 'pi pi-check',
    label: 'Review'
  }
]);


</script>

