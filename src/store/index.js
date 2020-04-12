import Vue from 'vue'
import Vuex from 'vuex'
import cinema from './module/cinemamodule'
import tabbar from './module/tabbarmoudle'
import city from './module/citymodule'

Vue.use(Vuex)

export default new Vuex.Store({
  // 管理共享状态
  state: {
  },
  getters: {

  },
  // 通过提交 mutation来更改 Vuex 的 store 中的状态
  mutations: {

  },
  // 实现异步请求操作
  actions: {

  },
  modules: { // 进行模块划分
    cinema, // 影院模块
    tabbar, // tabbar模块
    city// 城市模块
  }
})
