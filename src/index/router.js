import {createRouter, createWebHistory} from 'vue-router'
import routes from "@/index/routes";

const router = createRouter({
    history:createWebHistory(),
    routes
})

export default router
