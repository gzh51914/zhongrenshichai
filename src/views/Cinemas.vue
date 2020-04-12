<template>
    <div class="cinemas">
        <div class="title">
            <div class="left" @click="handleChangePage('/city')">{{cityName}}</div>
            <div>影院</div>
           <div class="right" @click="handleChangePage('/cinema/search')"> <i class="iconfont icon-search"></i></div>
        </div>

        <div class="select">
            <div :class="isAearShow?'selected':''" class="left" @click="isAearShow=!isAearShow">{{current}}</div>
            <div :class="isListShow?'selected':''" @click="isListShow=!isListShow">App订票</div>
            <div class="right">最近去过</div>
        </div>
        <!-- 点击全城选择城市切换 -->
        <div class="area" v-show="isAearShow">
            <ul>
                <li
                    v-for="data in areaList"
                    :key="data"
                    @click="handleArea(data)"
                    :class="{active:data===current}"
                >{{data}}</li>
            </ul>
        </div>
        <!-- App订票 -->
        <div class="bookTicket" v-show="isListShow">
            <ul>
                <li>App订票</li>
                <li>前台兑换</li>
            </ul>
        </div>
        <!-- 影院列表 -->
        <div class="content" :style="{height:scrollHeight,overflow:'hidden'}">
            <ul>
                <CinemaItem
                    v-for="data in computedDatalist"
                    :key="data.cinemaId"
                    :data="data"
                    @click.native="clickItem"
                ></CinemaItem>
            </ul>
        </div>
    </div>
</template>

<script>
import CinemaItem from './cinema/CinemaItem'
import { mapState, mapActions, mapMutations } from 'vuex'
// 引入滚动插件
import BetterScroll from 'better-scroll'
// 引入vant框架的轻提示模块
import Vue from 'vue'
import { Toast } from 'vant'
Vue.use(Toast)

export default {
  components: {
    CinemaItem
  },
  data () {
    return {
      isAearShow: false,
      isListShow: false,
      current: '全城', // 选中的是哪个区
      scrollHeight: 0
    }
  },
  mounted () {
    this.scrollHeight = document.documentElement.clientHeight - 80 - 50 + 'px'
    // 进行实例化操作
    /* eslint-disable no-new */
    new BetterScroll('.content', {
      scrollbar: {
        fade: true
      },
      click: true
    })
  },
  methods: {
    handleChangePage (path) {
      if (path === '/city') {
        this.setCinemaList([])
      }
      this.$router.push(path)
    },
    handleArea (data) {
      this.current = data
      this.isAearShow = false// 弹窗消失
    },
    clickItem (data) {
      this.$router.push(`/cinema/${data.cinemaId}`)
    },
    ...mapActions('cinema', ['getCinemaActions']),
    ...mapMutations('cinema', ['setCinemaList'])
  },
  computed: {
    ...mapState('cinema', ['cinemaList']),
    ...mapState('city', ['cityName', 'cityId']),
    // 所有区域的计算属性
    areaList () {
      const newarr = this.cinemaList.map(item => item.districtName)
      const areaList = ['全城', ...Array.from(new Set(newarr))]
      return areaList
    },
    computedDatalist () {
      if (this.current === '全城') return this.cinemaList
      return this.cinemaList.filter(item => item.districtName === this.current)
    }
  },
  created () {
    const toast = Toast.loading({
      message: '加载中...',
      forbidClick: true,
      duration: 0,
      overlay: true
    })
    // console.log(res.data.data.cinemas)
    if (this.cinemaList.length > 0) {
      // console.log("直接使用缓存vuex的数据...")
      toast.clear()
    } else {
      this.getCinemaActions(this.cityId).then(res => {
        toast.clear()// 关闭轻提示加载提示
      })
    }
  }
}
</script>

<style lang="scss" scoped>
    .selected{
        color:#ff5f16;
    }
    .active{
        border: 1px solid #ff5f16!important;
        color:#ff5f16;
        border-radius: 4px;
    }
    .title{
        display: flex;
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100%;
        background: #fff;
        height: 40px;
        line-height: 40px;
        padding: 0 10px;
        border-bottom: 1px solid #f5f5f5;
        border-radius: 4px;
        z-index: 10;
        div{
            flex:1;
            text-align: center;
        }
        .left{
            text-align: left;

        }
        .right{
            text-align: right;
        }
    }
    .select{
        display: flex;
        position: fixed;
        top: 40px;
        height: 40px;
        line-height: 40px;
        font-size: 14px;
        background: #fff;
        width: 100%;
        border-bottom: 1px solid #f5f5f5;
        z-index: 10;
       div{
            flex: 1;
            text-align: center;
       }
    }
    .area{
        position: fixed;
        top: 80px;
        left: 0;
        background: #fff;
        width: 100%;
        font-size: 12px;
        z-index: 10;
        ul{
            display: flex;
            flex-wrap:wrap;
            li{
                width: 22%;
                padding: 5px;
                border:1px solid #f4f4f4;
                text-align: center;
                margin: 5px;
            }
        }
    }
    .bookTicket{
        position: fixed;
        top: 80px;
        left: 0;
        background: #fff;
        width: 100%;
        z-index: 10;
        li{
            height: 44px;
            line-height: 44px;
            width: 100%;
            padding: 0 48px;
            position: relative;
            border:1px solid #f4f4f4;
            color: #797d82;
        }
    }
    .content{
        position: relative;
        top: 80px;
        li{
            padding: 15px;
            border-bottom: 1px solid #f5f5f5;
        }
    }
</style>
