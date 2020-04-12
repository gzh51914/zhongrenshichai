<template>
    <div class="detail" v-if="filmInfo">
        <div class="detailtitle" v-title="100">
            <i class="iconfont icon-back" @click="back()"></i>
            <span>少年的你</span>
        </div>
        <img :src="filmInfo.poster" alt="" style="width:100%">
        <div class="filmInfo-con">
          <div class="biao">
            <div class="films-name">
              <span class="name">{{filmInfo.name}}</span>
              <span class="item">{{filmInfo.filmType.name}}</span>
            </div>
            <div class="films-grade">
              <span class="grade">{{filmInfo.grade}}</span>
              <span class="item1">分</span>
            </div>
          </div>
          <div class="jieshao">{{filmInfo.category}}</div>
          <div class="films-time">{{filmInfo.premiereAt | dateFilter}} 上映</div>
          <div class="films-long">{{filmInfo.nation}} | {{filmInfo.runtime}}分钟</div>
            <p :class="{synopsis:isActive}">{{filmInfo.synopsis}}</p>
            <i @click="isActive=!isActive" class="iconfont" :class="isActive?'icon-moreunfold':'icon-less'"></i>
        </div>
        <div class="actorss">
          <div class="yan">
            <span>演职人员</span>
          </div>
          <Swiper cName="actors">
            <div
              v-for="(data,index) in filmInfo.actors"
              :key="data.name"
              class="swiper-slide"
              v-swiper="{
                current:index,
                length:filmInfo.actors.length,
                swipe:'actors',
                free:{
                  slidesPerView: 4,
                  spaceBetween: 10,
                  freeMode: true
                }
              }"
            >
              <div>
                <div class="actor-k">
                  <img  class="actor-img" style="width:0.85rem" :src="data.avatarAddress" alt="">
                </div>
                <div class="introduce">
                  <span>{{data.name}}</span>
                  <span>{{data.role}}</span>
                </div>
              </div>
            </div>
          </Swiper>
        </div>
        <div class="juzhao">
          <div class="yan">
            <span>剧照</span>
          </div>
          <Swiper cName="photos">
              <div
                  v-for="(data,index) in filmInfo.photos"
                  :key="data"
                  class="swiper-slide"
                  v-swiper="{
                      current:index,
                      length:filmInfo.photos.length,
                      swipe:'photos',
                      free:{
                          slidesPerView: 2.4,
                          spaceBetween: 10,
                          freeMode: true
                      }
                  }"
              >
                  <div style="width:1.5rem;height:1rem;overflow: hidden;">
                      <img style="width:1.5rem" :src="data" alt="">
                  </div>
              </div>
          </Swiper>
        </div>
        <div class="kong">内容到此结束</div>
    </div>
</template>

<script>
import instance from '@/utils/http'
import Swiper from '@/components/swiper'
import Vue from 'vue'
import moment from 'moment'

Vue.filter('dateFilter', (date, option = '/') => {
  // console.log(new Date(date*1000).getFullYear()+ "/" + (new Date(date*1000).getMonth()+1))
  return moment(date * 1000).format('YYYY' + option + 'MM' + option + 'DD') // moment里面的参数是时间戳
})
Vue.directive('title', {
  // 插入到dom之后的钩子函数
  inserted (el, binding) {
    el.style.display = 'none'
    window.onscroll = () => {
      if ((document.body.scrollTop || document.documentElement.scrollTop) > binding.value) {
        el.style.display = 'block'
      } else {
        el.style.display = 'none'
      }
    }
  },
  // 指令的解绑的钩子函数
  unbind () {
    window.onscroll = null
  }
})
export default {
  components: {
    Swiper
  },
  data () {
    return {
      filmInfo: null,
      isActive: true
    }
  },
  created () {
    instance.get(`/gateway?filmId=${this.$route.params.id}&k=8300462`, {
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log('++++', res)
      this.filmInfo = res.data.data.film
      console.log(this.filmInfo)
    })
  },
  methods: {
    back () {
      this.$router.go(-1)// 返回上一层
    }
  }
}
</script>

<style lang="scss" scoped>
.detail{
  background: #f4f4ff;
}
    .detailtitle{
        height:.44rem;
        width:100%;
        background:  #fff;
        position: fixed;
        top:0;
        left:0;
        line-height: .44rem;
        text-align: center;
        i{
            position: absolute;
            left:0px;
        }
    }
    .filmInfo-con{
        padding:.12rem .15rem .15rem;
        position: relative;
        background-color: #fff;
        .biao{
          display: flex;
          .films-name{
              width: 2.56rem;
            .name{
              color: #191a1b;
              font-size: 18px;
              height: 24px;
              line-height: 24px;
              margin-right: 7px;
            }
            .item{
              font-size: 9px;
              color: #fff;
              background-color: #d2d6dc;
              height: 14px;
              line-height: 14px;
              padding: 0 2px;
              border-radius: 2px;
              display: inline-block;
            }
          }
          .films-grade{
            width: calc(100% - 250px);
            text-align: right;
            color: #ffb232;
            .grade{
              font-size: 18px;
              font-style: italic;
            }
            .item1{
              font-size: 10px;
              margin-left: 0.05rem;
            }
          }
        }
        .jieshao{
          font-size: 13px;
          color: #797d82;
          margin-top: 4px;
        }
        .films-time{
          font-size: 13px;
          color: #797d82;
          margin-top: 4px;
        }
        .films-long{
          font-size: 13px;
          color: #797d82;
          margin-top: 4px;
        }
        i{
            position: absolute;
            left:50%;
            transform: translateX(-50%);
        }
        .synopsis{
            height: 40px;
            overflow: hidden;
        }
    }
    .actorss{
      margin-top: 10px;
      background-color: #fff;
      .yan{
        width: 100%;
        padding: 0.15rem;
        span{
          font-size: 16px;
          text-align: left;
          color: #191a1b;
        }
      }
      .actor-k{
        height: 1rem;
        overflow: hidden;
      }
      .introduce{
        width: 100%;
        padding-bottom: 0.05rem;
        span{
          display: block;
          text-align: center;
          height: 0.24rem;
          padding-top: 10px;
          font-size: 12px;
          color: #191a1b;
        }
      }
    }
    .juzhao{
      margin-top: 10px;
      background-color: #fff;
      padding-bottom: 0.1rem;
      .yan{
        width: 100%;
        padding: 0.15rem;
        span{
          font-size: 16px;
          text-align: left;
          color: #191a1b;
        }
      }
    }
    .kong{
      width: 100%;
      height: 0.52rem;
      background: #f4f4ff;
    }
</style>
