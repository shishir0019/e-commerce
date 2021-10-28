import Vue from 'vue'
import VueRouter from 'vue-router'

const layout = (name) => () => import(`@/layouts/${name}.vue`);
const view = (name) => () => import(`@/views/${name}.vue`);

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: layout('Default'),
    children: [
      {
        path: '',
        component: view('Home')
      }
    ]
  },
  {
    path: '*',
    component: layout('404')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
