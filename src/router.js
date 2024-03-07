import { createRouter, createWebHistory } from 'vue-router';
import LoginForm from './components/LoginForm.vue'; 
import RegisterForm from './components/RegisterForm.vue'; 
import EdicaoUsuarios from './components/EdicaoUsuarios.vue';
import ProductList from './components/ProductList.vue';

const routes = [
  {
    path: '/',
    name: 'Register',
    component: RegisterForm
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginForm
  },
  {
    path: '/usuario',
    name: 'EdicaoUsuarios',
    component: EdicaoUsuarios
  },
  {
    path: '/products',
    name: 'ProductList',
    component: ProductList
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
