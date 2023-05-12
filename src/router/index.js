import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import SignUp from '../views/SignUp.vue'
import LogOut from '../views/LogOut.vue'
import AddRestaurants from '../views/AddRestaurants.vue'
import UpdateRestaurants from '../views/UpdateRestaurants.vue'
// import HeaderView from '../views/HeaderView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUp
  },
  {
    path: '/logout',
    name: 'logOut',
    component: LogOut
  },
  {
    path: '/addRestaurants',
    name: 'addRestaurants',
    component: AddRestaurants
  },
  {
    path: '/updateRestaurants/:id',
    name: 'updateRestaurants',
    component: UpdateRestaurants
  },
  // {
  //   path: '/header',
  //   name: 'HeaderView',
  //   component: HeaderView
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
