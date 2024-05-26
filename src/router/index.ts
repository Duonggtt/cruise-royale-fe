import {createRouter, createWebHistory} from 'vue-router';

import PrimeVue from 'primevue/config';
import LoginView from '@/views/LoginView.vue';
import HomeView from '../views/HomeView.vue';
import RegisterView from '../views/RegisterView.vue';
import ForgotPasswordView from "@/views/ForgotPasswordView.vue";
import aboutView from "@/views/AboutView.vue";
 import Navbars from "@/components/Navbar.vue";
 import Profile from "@/components/Profile.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/register',
            name: 'register',
            component: RegisterView
        },
        {
            path: '/login',
            name: 'login',
            component: LoginView
        },
        {
            path: '/FogotPassword',
            name: 'FogotPassword',
            component: ForgotPasswordView
        },
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: aboutView
        },
        {
            path: '/Navbars',
            name: 'Navbars',
            component: Navbars
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile
        }
    ]
});

export default router;
