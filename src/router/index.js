import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Recodetail from '@/pages/pagesdetail/Qdhdetail'
import Hzlydetail from '@/pages/pagesdetail/Hzlydetail'
import Sxdetail from '@/pages/pagesdetail/Sxdetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/pagesdetail/Recodetail',
      name: 'Recodetail',
      component: Recodetail
    },
    {
      path: '/pagesdetail/Hzlydetail',
      name: 'Hzlydetail',
      component: Hzlydetail
    },
    {
      path: '/pagesdetail/Sxdetail',
      name: 'Sxdetail',
      component: Sxdetail
    }
  ]
})
