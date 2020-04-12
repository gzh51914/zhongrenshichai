<template>
    <li class="clear">
       <div class="cinema-info-lf">
            <h4>{{data.name}}</h4>
            <p class="address">{{data.address}}</p>
       </div>
       <div class="cinema-info-rt">
           <p >￥起</p>
           <p class="cinema-gpsAddress">距离未知</p>
       </div>

    </li>
</template>

<script>
export default {
  props: ['data'],
  methods: {
    clickli () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
    li{

        padding: .15rem;
        border-bottom: 1px solid #f4f5f5;
        .cinema-info-lf{
            float: left;
            width:2.8rem;
            text-align: left;
            h4{
                color: #191a1b;
                font-size: 15px;
            }
            .address{
                color: #797d82;
                font-size: 12px;
                margin-top: 5px;
                overflow: hidden;
                -o-text-overflow: ellipsis;
                text-overflow: ellipsis;
                white-space: nowrap;
        }
        }
        .cinema-info-rt{
            width: 0.7rem;
            float: right;
            text-align: right;
            .cinema-gpsAddress{
                display: block;
                font-size: 11px;
                color: #797d82;
                margin-top: 5px;
            }
        }
    }
</style>
