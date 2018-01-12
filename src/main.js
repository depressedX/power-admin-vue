// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import 'normalize.css'
// elementUI
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// css
import './style/global.css'
import Chartkick from 'chartkick'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'

Vue.use(Element)
Vue.config.productionTip = false

// chartJS
Vue.use(VueChartkick, { Chartkick })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template:'<router-view/>'
})
