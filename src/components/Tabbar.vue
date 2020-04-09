<template>
    <nav>
        <ul>
            <router-link
                v-for="nav in navlist"
                :key="nav.id"
                :to="nav.path"
                tag="li"
                active-class="active"
            >
            <i class="iconfont" :class="nav.icon"></i>
            <span>{{nav.title}}</span>
            </router-link>
        </ul>
    </nav>
</template>

<script>
export default {
  data () {
    return {
      navlist: [
        { id: 1, title: '电影', path: '/films', icon: 'icon-all' },
        { id: 2, title: '影院', path: '/cinema', icon: 'icon-category' },
        { id: 3, title: '咨询', path: '/consult', icon: 'icon-comments' },
        { id: 4, title: '我的', path: '/center', icon: 'icon-account' }
      ]
    }
  }
}
</script>
<style lang="scss" scoped>
.active{
    color: orange;
}
nav{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 0.5rem;// iphone6==> 1rem=100px
    background: #fff;
    z-index: 10;
ul{
    display: flex;
    li{
        flex: 1;
        line-height: 0.25rem;
        text-align: center;
        display: flex;
        flex-direction:column;
    }
}
}
</style>
