import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Alarm from "../views/tools/Alarm.vue";

// vue项目自带路由
const routes: Array<RouteRecordRaw> = [
    {
        path: "/",
        name: "Home",
        component: Alarm
    },
    {
        path: "/alarm",
        name: "Alarm",
        component: Alarm
    }
];

const routers = [...routes];

const router = createRouter({
    history: createWebHistory(),
    routes: routers
});

export default router;