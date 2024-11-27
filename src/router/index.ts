
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'
import constantRoute from './constantRoute'
import toolsRouter from './toolsRouter'

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/',
        component: Layout,
        redirect: '/dashboard',
        children: [
            {
                path: 'dashboard',
                component: () => import( '@/views/dashboard/Index.vue'),
                name: 'Dashboard',
                meta: {
                    title: 'dashboard',
                }
            }
        ]
    },
    ...constantRoute,
    ...toolsRouter
]

export const asyncRoutes: Array<RouteRecordRaw> = [

]
const router = createRouter({
    history: createWebHistory(),
    routes: constantRoutes
})

export function resetRouter() {
    const newRouter = router;
    (router as any).matcher = (newRouter as any).matcher // reset router
}

export default router
