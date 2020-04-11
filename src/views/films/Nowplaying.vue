<template>
    <div class="nowplaying">
        <ul>
            <router-link
            v-for="data in datalist"
            :key="data.filmId"
            :to="{
                name:'detail',
                params:{id:data.filmTd}
            }"
            tag="li">
                <div class="films-Nowplaying-img">
                    <img :src="data.poster" alt="">
                </div>
                <div class="films-Nowplaying-info">
                    <div class="films-name">
                        <span class="name">{{data.name}}</span>
                        <span class="filmType.name">{{data.filmType.name}}</span>
                    </div>
                    <div class="films-grade">
                        <span class="lable">观众评分：</span>
                        <span class="grade">{{data.grade}}</span>
                    </div>
                    <div class="films-actor">
                        <span class="actor">演员：{{data.actors | actorFilter}}</span>
                        <!-- v-for方式遍历数组获取数据 -->
                        <!-- <span class="actor" v-for="actor in data.actors" :key="actor.name">{{actor.name}}</span> -->
                    </div>
                    <div class="films-nation">
                        <span class="nation">{{data.nation}}|{{data.runtime}}</span>
                    </div>
                </div>
                <div class="films-Nowplaying-buy">购票</div>
            </router-link>
        </ul>
    </div>
</template>

<script>

import Vue from 'vue'
import instance from '@/utils/http'

// 定义过滤器(过滤器必须返回内容)
Vue.filter('actorFilter', data => {
  if (data) {
    return data.map(item => item.name).join('')
  } else {
    return '暂无主演'
  }
})

export default {
  data () {
    return {
      datalist: []
    }
  },
  created () {
    // 请求数据
    instance.get('/gateway?cityId=440100&pageNum=1&pageSize=10&type=1&k=5657512', {
      headers: {
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      console.log('***', res)
      this.datalist = res.data.data.films
    })
  },
  methods: {
    toDetail (id) {
      this.$router.push(`/detail/${id}`)
    }
  }
}
</script>

<style lang="scss" scoped>
    ul{
        margin-left: 0.15rem;
        li{
            height: 1.24rem;
            overflow: hidden;
            padding: 0.15rem 0.15rem 0.15rem 0;
            position: relative;
            div{
                float: left;
            }
            .films-Nowplaying-img{
                width: 0.66rem;
               img{
                    float: left;
                    width: 0.66rem;
                }
            }
            .films-Nowplaying-info{
                width: 2.29rem;
                height: 0.81rem;
                padding: 0 0.1rem;
                overflow: hidden;
                .films-name{
                    width: 100%;
                    .name{
                        max-width: calc(100% - 25px);
                        color: #191a1b;
                        font-size: 16px;
                        height: 0.22rem;
                        line-height: 0.22rem;
                        margin-right: 0.05rem;
                        overflow: hidden;
                        -o-text-overflow: ellipsis;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    }
                    .filmType.name{
                        font-size: 9px;
                        color: #fff;
                        background-color: #d2d6dc;
                        height: 14px;
                        line-height: 0.14rem;
                        padding: 0 2px;
                        border-radius: 2px;
                    }
                }
                .films-grade{
                    width: 100%;
                    .lable{
                        font-size: 13px;
                        margin-top: 0.04rem;
                        color: #797d82;
                    }
                    .grade{
                        color: #ffb232;
                        font-size: 14px;
                    }
                }
                .films-actor{
                    width: 100%;
                    .actor{
                        font-size: 13px;
                        margin-top: 0.04rem;
                        color: #797d82;
                    }
                }
                .films-nation{
                    width: 100%;
                    .nation{
                        font-size: 13px;
                        margin-top: 4px;
                        color: #797d82;
                    }
                }
            }
            .films-Nowplaying-buy{
                width: 0.5rem;
                height: 0.25rem;
                line-height: 25px;
                color: #ff5f16;
                border: 0.01rem solid #ff5f16;
                font-size: 13px;
                text-align: center;
                border-radius: 2px;
                position: absolute;
                top: 50%;
                right: 0.15rem;
            }
        }
    }
</style>
