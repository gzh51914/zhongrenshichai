import Vue from 'vue'
import moment from 'moment'
// 定义演员的过滤器
Vue.filter('actorFilter', data => {
  if (data) {
    return data.map(item => item.name).join(' ')
  } else {
    return '暂无主演'
  }
})

// 定义日期的过滤器
Vue.filter('dateFilter', (date, option = '-') => {
  return moment(date * 1000).format('YYYY' + option + 'MM' + option + 'DD')// moment里面的参数是时间戳
})
