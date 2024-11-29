
import { RouteRecordRaw } from 'vue-router'
import Layout from '@/layout/Index.vue'

const toolsRouter: Array<RouteRecordRaw> = [
    {
        path: '/admin',
        component: Layout,
        redirect: 'noredirect',
        name: 'Admin',
        meta: {
            title: 'charts',
            icon: '#iconchart1'
        },
        children: [
            {
                path: 'alarm',
                component: () => import('@/views/tools/Alarm.vue'),
                name: 'Alarm',
                meta: {
                    title: 'alarm',
                    noCache: true
                }
            }
        ]
    }
]

export default toolsRouter
