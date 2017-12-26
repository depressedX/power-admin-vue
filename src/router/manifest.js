// 路由相关信息

// 路由名称常量表
const ROUTES_NAME = {
  TOPUP: "TOPUP",
  REPAIR: 'REPAIR',
  BALANCE: 'BALANCE'
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
      routePath: 'topup'
    },
    [ROUTES_NAME.REPAIR]: {
      navName: '报修',
      routeName: 'repair',
      routePath: 'repair'
    },
    [ROUTES_NAME.BALANCE]: {
      navName: '电量充值',
      routeName: 'balance',
      routePath: 'balance'
    }
  },
  // 默认路由
  defaultRoute: ROUTES_NAME.REPAIR
}

export {ROUTES_NAME}
