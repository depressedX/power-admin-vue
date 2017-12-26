import Vue from 'vue'
import Router from 'vue-router'
import manifest from './manifest'
import {ROUTES_NAME} from './manifest'
import App from '../App'

// 所有页面组件
import Balance from '../page/Balance'
import Repair from '../page/Repair'
import Topup from '../page/Topup'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component:App,
      children:[
        {
          path:manifest.routes[ROUTES_NAME.REPAIR].routePath,
          name:manifest.routes[ROUTES_NAME.REPAIR].routeName,
          component:Repair
        },
        {
          path:manifest.routes[ROUTES_NAME.BALANCE].routePath,
          name:manifest.routes[ROUTES_NAME.BALANCE].routeName,
          component:Balance
        },
        {
          path:manifest.routes[ROUTES_NAME.TOPUP].routePath,
          name:manifest.routes[ROUTES_NAME.TOPUP].routeName,
          component:Topup
        }
      ]
    }
  ]
})
