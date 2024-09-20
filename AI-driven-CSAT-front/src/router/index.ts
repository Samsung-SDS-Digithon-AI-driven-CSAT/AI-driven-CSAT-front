// router.js or router.ts

import { createRouter, createWebHistory } from 'vue-router';
import ProjectListScreen from '../view/ProjectListScreen.vue';  // Example of a home component

const routes = [
  { path: '/', component: ProjectListScreen },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
