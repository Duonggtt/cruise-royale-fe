import {createRouter, createWebHistory} from 'vue-router';
import register from '@/components/Account_Auth/Register.vue';
import LoginView from '@/views/LoginView.vue';
import ForgotPasswordView from '@/views/ForgotPasswordView.vue';
import HomeView from '@/views/HomeView.vue';
import aboutView from '@/views/AboutView.vue';
import Navbar from '@/components/Navbar.vue';
import Profile from '@/components/Profile.vue';




const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/FogotPassword',
            name: 'FogotPassword',
            component: ForgotPasswordView
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        },
        {
            path: '/about',
            name: 'about',
            component: aboutView
        },
        {
            path: '/Navbar',
            name: 'Navbar',
            component: Navbar
        },
        {
            path: '/Profile',
            name: 'Profile',
            component: Profile
        },   {
            path: '/register',
            name: 'register',
            component: register
        },
        {
            path: '/LoginView',
            name: 'LoginView',
            component: LoginView
        },
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        }

    ]
});

export default router;
