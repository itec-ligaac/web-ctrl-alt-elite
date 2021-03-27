import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home'
import filterPage from "../views/filterPage";
Vue.use(VueRouter)

const routes = [
    {
        path:'/',
        name:'Home',
        component:Home
    },
    {
        path:'/filterPage',
        name:'filterPage',
        component:filterPage
    }
]

const router = new VueRouter({
    routes
})

export default router
