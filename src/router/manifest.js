// 路由相关信息

// 路由名称常量表
const ROUTES_NAME = {
  TOPUP: "TOPUP",
  REPAIR: 'REPAIR',
  BALANCE: 'BALANCE',
  FUNCTION:'FUNCTION',
  STATISTICS:'STATISTICS',

  LOGIN:'LOGIN'
}


// Manifest
export default {
  // 所有路由的元信息
  /**
   * navName:用于导航的显示的字符串
   * routeName:路由名称  提供给router
   */
  routes: {
    [ROUTES_NAME.TOPUP]: {
      navName: '充值',
      routeName: 'topup',
      routePath: 'topup',
      showOnNav:true
    },
    [ROUTES_NAME.REPAIR]: {
      navName: '报修',
      routeName: 'repair',
      routePath: 'repair',
      showOnNav:true
    },
    [ROUTES_NAME.BALANCE]: {
      navName: '电量充值',
      routeName: 'balance',
      routePath: 'balance',
      showOnNav:true
    },
    [ROUTES_NAME.FUNCTION]: {
      navName: '功能',
      routeName: 'function',
      routePath: 'function',
      showOnNav:true
    },
    [ROUTES_NAME.STATISTICS]: {
      navName: '统计',
      routeName: 'statistics',
      routePath: 'statistics',
      showOnNav:true
    },
    [ROUTES_NAME.LOGIN]: {
      navName: '登陆nav',
      routeName: 'login',
      routePath: 'login'
    },

  },
  // 默认路由
  defaultRoute: ROUTES_NAME.LOGIN
}

export {ROUTES_NAME}
