import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import TicTacToe from '@/views/TicTacToe.vue'

const createRoute = (path, name, component) => ({ path, name, component });

const routes = [
  createRoute('/', 'Home', Home),
  createRoute('/tic-tac-toe', 'TicTacToe', TicTacToe),
];

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;