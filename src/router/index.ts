import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import Home from '../views/Home.vue';
import Dogs from '../views/Dogs.vue';
import Cats from '../views/Cats.vue';
import Pet from '../views/Pets.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/dogs',
    name: 'dogs',
    component: Dogs,
  },
  {
    path: '/cats',
    name: 'cats',
    component: Cats,
  },
  {
    path: '/pets/:species/:id',
    name: 'pet',
    component: Pet,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
