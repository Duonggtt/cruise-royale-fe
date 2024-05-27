import {createRouter, createWebHistory} from 'vue-router';
// import {Log, Reg, Fogot, Navbar, Profile, HomeView,
//     LoginView, ForgotPasswordView,aboutView } from '@/main';

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
        },
        {
            path: '/',
            name: 'LoginView',
            component: LoginView
        }
    ]
});

export default router;
