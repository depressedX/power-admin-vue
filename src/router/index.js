import Vue from 'vue'
import Router from 'vue-router'
import manifest from './manifest'
import {ROUTES_NAME} from './manifest'
import App from '../App'

// 所有页面组件
import Balance from '../page/Balance'
import Repair from '../page/Repair'
import Topup from '../page/Topup'
import Login from '../page/Login'
import Function from '../page/Function'
import Statistics from '../page/Statistics'

//store
import store from '../state/store'
let state = store.state

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      component:App,
      children:[
        {
          path:manifest.routes[ROUTES_NAME.REPAIR].routePath,
          name:manifest.routes[ROUTES_NAME.REPAIR].routeName,
          meta:{requiresAuth:true},
          component:Repair
        },
        {
          path:manifest.routes[ROUTES_NAME.BALANCE].routePath,
          name:manifest.routes[ROUTES_NAME.BALANCE].routeName,
          meta:{requiresAuth:true},
          component:Balance
        },
        {
          path:manifest.routes[ROUTES_NAME.TOPUP].routePath,
          name:manifest.routes[ROUTES_NAME.TOPUP].routeName,
          meta:{requiresAuth:true},
          component:Topup
        },
        {
          path:manifest.routes[ROUTES_NAME.FUNCTION].routePath,
          name:manifest.routes[ROUTES_NAME.FUNCTION].routeName,
          meta:{requiresAuth:true},
          component:Function
        },
        {
          path:manifest.routes[ROUTES_NAME.STATISTICS].routePath,
          name:manifest.routes[ROUTES_NAME.STATISTICS].routeName,
          meta:{requiresAuth:true},
          component:Statistics
        },
        {
          path:manifest.routes[ROUTES_NAME.LOGIN].routePath,
          name:manifest.routes[ROUTES_NAME.LOGIN].routeName,
          meta:{requiresAuth:false},
          component:Login
        },
      ]
    }
  ]
})
export default router


// 关于是否需要权限  相关的逻辑在上面↑↑↑↑↑↑↑↑
// 如果未登录  重定向到登录界面
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!state.isLogin) {
      console.log('跳转',)
      next({
        name: manifest.routes[ROUTES_NAME.LOGIN].routeName,
        query: { redirect: to.name }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})
