<template>
    <div class="detail" v-if="filmInfo">
        <img :src="filmInfo.poster" alt="">
        <h4>{{filmInfo.name}} {{filmInfo.filmType.name}}</h4>
        <p>{{filmInfo.premiereAt | dateFilter}}</p>
    </div>
</template>

<script>
import instance from '@/utils/http'
export default {
  data () {
    return {
      filmInfo: null
    }
  },
  created () {
    instance.get(`/gateway?filmId=${this.$route.params.id}&k=8300462`, {
      headers: {
        'X-Host': 'mall.film-ticket.film.info'
      }
    }).then(res => {
      console.log(res)
      this.filmInfo = res.data.data.film
    })
  }
}
</script>

<style lang="scss" scoped>
    img{
        width:100%;
    }
</style>
