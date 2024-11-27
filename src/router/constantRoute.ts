import { RouteRecordRaw } from 'vue-router'
const constantRoute: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import( '@/views/dashboard/Index.vue'),
    }
]
export default constantRoute
