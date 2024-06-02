import {createRouter, createWebHistory} from 'vue-router';
import register from '@/components/Account_Auth/Register.vue';
import FogotPassword from '@/components/Account_Auth/ForgotPassword.vue';

import Navbar from '@/components/Navbar.vue';
import Profile from '@/components/Profile.vue';

import LoginView from '@/views/LoginView.vue';
import HomeView from '@/views/HomeView.vue';





const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/FogotPassword',
            name: 'FogotPassword',
            component: FogotPassword
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
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
