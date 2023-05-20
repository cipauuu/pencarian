import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/page/Home.vue';
import About from '@/page/About.vue';
import Result from '@/page/Result.vue';
import Data from '@/page/Data.vue';

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: 'Home',
    component: Home,
  },
  {
    path: "/about",
    name: 'About',
    component: About,
  },
  {
    path: "/result",
    name: 'Result',
    component: Result,
  },
  {
    path: "/data",
    name: 'Data',
    component: Data,
  }
];

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router