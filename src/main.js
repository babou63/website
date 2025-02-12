import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import AboutMe from './pages/AboutMe.vue'
import MesPassions from './pages/MesPassions.vue'
import ContactMe from './pages/ContactMe.vue'
import Construction from './pages/Construction.vue'

const routes = [
  { path: '/about', component: AboutMe },
  { path: '/passions', component: MesPassions },
  { path: '/contact', component: ContactMe },
  { path: '/construction', component: Construction }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

createApp(App).use(router).mount('#app')