import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import '@/utils/directives'

// 引入rem.js
import '@/utils/rem'
// 引入全局样式
import '@/stylesheets/main.scss'

// 定义全局过滤器
import '@/utils/filters'

// 引入
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
