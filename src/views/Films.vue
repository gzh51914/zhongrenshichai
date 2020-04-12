<template>
    <div class="films">
        <swiper>
            <div
            class="swiper-slide"
            v-for="(banner) in banners"
            :key="banner.bannerId">
                <img :src="banner.imgUrl" alt="">
            </div>
        </swiper>
        <div class="nav">
            <ul class="nava">
              <router-link
                v-for="nav in navlist"
                :key="nav.id"
                :to="nav.path"
                tag="li"
                active-class="active"
              >
                <span class="aa">{{nav.title}}</span>
              </router-link>
            </ul>
        </div>
        <!-- 路由容器 -->
        <router-view></router-view>
    </div>

</template>

<script>

import Swiper from '@/components/swiper'
import instance from '@/utils/http'
import Swip from 'swiper'
export default {
  components: {
    Swiper
  },
  data () {
    return {
      banners: [],
      navlist: [
        { id: 1, title: '正在热映', path: '/films/nowplaying' },
        { id: 2, title: '即将上映', path: '/films/comingsoon' }
      ]
    }
  },
  created () {
    // 请求数据
    instance.get('/gateway?type=2&cityId=440100&k=3126836', {
      headers: {
        'X-Host': 'mall.cfg.common-banner'
      }
    }).then(res => {
    //   console.log('***', res)
      this.banners = res.data.data
      this.$nextTick(() => {
        new Swip('.swiper-container')
      })
    })
  },
  methods: {
    Nowplying () {
      this.$router.push('/films/nowplaying')
    },
    Comingsoon () {
      this.$router.push('/films/comingsoon')
    }
  }
}
</script>

<style lang="scss" scoped>
.active{
    color: orange;
    border-bottom: 2px solid orange;
}
    .swiper-container{
        height: 2.1rem;
    }
    .swiper-slide{
        width: 100%;
        img{
            height: 2.1rem;
        }
    }
    .nav{
        width: 100%;
        height: 0.5rem;
        line-height: 0.5rem;
        .nava{
          width: 100%;
          display: flex;
          li{
            width: 50%;
            text-align: center;
          }
        }
    }
</style>
