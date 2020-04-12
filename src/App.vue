<template>
  <div id="app">
    <!-- 路由容器 -->
    <transition name="app" mode="out-in">
      <router-view></router-view>
    </transition>
    <!-- 调用Tabbar子组件 -->
    <Tabbar v-show="isTabbarShow"></Tabbar>
  </div>
</template>

<script>
// 引入Tabbar.vue子组件
import Tabbar from '@/components/Tabbar'
import { mapState } from 'vuex'
export default {
  components: {
    Tabbar
  },
  computed: {
    ...mapState('tabbar', ['isTabbarShow'])
  },
  mounted () {
    // console.log(this.$store)
  }
}
</script>

<style lang="scss" scoped>
.app-enter-active{
    animation: move .5s;
  }
  .app-leave-active{
    animation: move .5s reverse;
  }

  @keyframes move{
    0%{
      opacity: 0;
      transform: translateY(50px);
    }
    100%{
      opacity: 1;
      transform: translateY(0px);
    }
  }
</style>
