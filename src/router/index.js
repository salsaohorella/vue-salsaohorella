import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
      path : '/',
      name: 'home',
      component : () => import('@/components/HelloWorld')
    },
    {
        path : '/login',
        name: 'login',
        component : () => import('@/views/login/Main')
    },
    {
        path : '/register',
        name: 'register',
        component : () => import('@/views/register/Main')
    },
    {
      path : '/dashboard',
      name: 'dashboard',
      component : () => import('@/views/dashboard/Main')
    }

];

const router = createRouter ({
    history : createWebHistory(),
    routes
})

export default router;