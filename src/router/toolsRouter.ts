
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
                path: 'test',
                component: () => import('@/views/tools/Test.vue'),
                name: 'Test',
                meta: {
                    title: 'test',
                    noCache: true
                }
            },
            {
                path: 'test1',
                component: () => import('@/views/tools/Test.vue'),
                name: 'Test1',
                meta: {
                    title: 'test1',
                    noCache: true
                }
            },
            {
                path: 'test2',
                component: () => import('@/views/tools/Test.vue'),
                name: 'Test2',
                meta: {
                    title: 'test2',
                    noCache: true
                }
            },
            {
                path: 'test3',
                component: () => import('@/views/tools/Test.vue'),
                name: 'Test3',
                meta: {
                    title: 'test3',
                    noCache: true
                }
            },
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
