<template>
  <div id="app">
    <!-- 路由容器 -->
    <router-view></router-view>
    <!-- 调用Tabbar子组件 -->
    <Tabbar></Tabbar>
  </div>
</template>

<script>
// 引入Tabbar.vue子组件
import Tabbar from '@/components/Tabbar'
export default {
  components: {
    Tabbar
  }
}
</script>

<style lang="scss" scoped>
  *{
    padding: 0;
    margin:0;
  }
  ul,li{
    list-style: none;
  }

</style>
