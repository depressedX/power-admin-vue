import Vuex from 'vuex'
import Vue from 'vue'
import resources from './resources'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    isLogin: true
  },
  mutations: {
    login(state) {
      state.isLogin = true
    },
    logout(state) {
      state.isLogin = false
    }
  },
  actions: {
    login(context, userInfo) {
      resources.login(userInfo).then(
        () => {
          context.commit('login')
        },
        e=>{
          console.log(e)
        }
        )
    }
  }
})

export default store
