import {createRouter, createWebHistory} from 'vue-router';
import {
    Login, Reg, Fogot, LoginView, Navbar, Profile,
    LoginForm, ForgotPasswordView, HomeView,
    RegisterView, aboutView

    } from '../main';


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
            path: '/LoginForm',
            name: 'LoginForm',
            component: LoginForm
        }
    ]
});

export default router;
