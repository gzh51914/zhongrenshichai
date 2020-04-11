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
            <ul>
                <li @click="Nowplying"><span>正在热映</span></li>
                <li @click="Comingsoon"><span>即将上映</span></li>
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
      banners: []
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
        Swip('.swiper-container')
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
        ul{
            width: 100%;
            li{
                float: left;
                width: 50%;
                text-align: center;
            }
        }
    }
</style>
