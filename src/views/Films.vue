<template>
    <div class="films">
        <div class="Fswipe">
            <van-swipe :autoplay="1000">
                <van-swipe-item style="float:left" v-for="(image, index) in images" :key="index">
                    <img v-lazy="image" />
                </van-swipe-item>
            </van-swipe>
        </div>
        <div>
            导航栏
        </div>
        <!-- 路由容器 -->
        <router-view></router-view>
    </div>

</template>

<script>

import Vue from 'vue'
import { Lazyload } from 'vant'

Vue.use(Lazyload)

export default {
  data () {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
    .Fswipe{
        height: 1.5rem;
    }
    img{
        height: 2.1rem;
    }
</style>
