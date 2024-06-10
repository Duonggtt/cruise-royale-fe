import {createRouter, createWebHistory} from 'vue-router';
import register from '@/components/User/Account_Auth/Register.vue';
import FogotPassword from '@/components/User/Account_Auth/ForgotPassword.vue';

import LoginView from '@/views/UserView/LoginView.vue';
import HomeView from '@/views/UserView/HomeView.vue';
import ProfileView from '@/views/UserView/ProfileView.vue';
import CruiseDetailsView from '@/views/UserView/CruiseDetailsView.vue';
import SearchCuiseView from '@/views/UserView/SearchCuiseView.vue';



import Dashboard from '@/components/Admin/Dashboard.vue';


import AdminView from '@/views/AdminView/AdminView.vue';

import usersView from '@/views/AdminView/usersView.vue';
import cruisesView from '@/views/AdminView/cruisesView.vue';
import cabinsView from '@/views/AdminView/cabinsView.vue';
import bookingsView from '@/views/AdminView/bookingsView.vue';
import reviewsView from '@/views/AdminView/reviewsView.vue';
import dashboardView from '@/views/AdminView/DashboardView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/profile',
            name: 'ProfileView',
            component: ProfileView
        },
        {
            path: '/home',
            name: 'home',
            component: HomeView
        }
        , {
            path: '/CruiseDetails',
            name: 'CruiseDetailsView',
            component: CruiseDetailsView
        },
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        }
        , {
            path: '/Dashboard',
            name: 'Dashboard',
            component: Dashboard
        },
        {
            path: '/cruisesView',
            name: 'cruisesView',
            component: cruisesView
        },
        {
            path: '/cabinsView',
            name: 'cabinsView',
            component: cabinsView
        },
        {
            path: '/bookingsView',
            name: 'bookingsView',
            component: bookingsView
        },
        {
            path: '/reviewsView',
            name: 'reviewsView',
            component: reviewsView
        },
        {
            path: '/usersView',
            name: 'usersView',
            component: usersView
        },
        {
            path: '/AdminView',
            name: 'AdminView',
            component: AdminView
        },
        {
            path: '/dashboardView',
            name: 'dashboardView',
            component: dashboardView
        },
        {
            path: '/SearchCuiseView',
            name: 'SearchCuiseView',
            component: SearchCuiseView
        },




    ]
});

export default router;
