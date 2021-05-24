import Vue from 'vue'
import auth from "@/logic/auth";
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/listado',
    name: 'Listado',
    component: () => import(/* webpackChunkName: "about" */ '../views/Listado.vue'),
    meta: {
      requiresAuth:true
     },
    
    
  },
    {
    path: '/listadoaxios',
    name: 'ListadoAxios',
    component: () => import(/* webpackChunkName: "about" */ '../views/ListadoAxios.vue'),
   
    
    
  },
    {
    path: '/login',
    name: 'Login', 
    component:  () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
     
  },
    {
    path: '/register',
    name: 'Registro', 
    component:  () => import(/* webpackChunkName: "about" */ '../views/Registro.vue')
     
  },
      {
    path: '/edit/:id',        // se edita un id especifico
    name: 'UserEdit',
        component: () => import('../components/UserEdit.vue'),  //editar lista de usuarios,

  },
    
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to,from,next) => {
  const authenticatedUser = auth.getUserLogged;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
  if (requiresAuth && !authenticatedUser) next('/')
  else next()
});



export default router
