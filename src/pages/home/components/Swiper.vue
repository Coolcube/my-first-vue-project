<template>
  <div class="wraper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>

<script>
    export default {
      name: "Homeswiper",
      data (){
        return{
          swiperOption:{
            loop:true,
            pagination:'.swiper-pagination'
          }
        }
      },
      props:['list']
    }
</script>

<style lang="stylus" scoped>
.wraper >>>.swiper-pagination-bullet-active
  background-color:#fff!important
.wraper >>>.swiper-pagination-bullets
  bottom :0!important
.wraper
  width: 100%
  overflow: hidden
  height: 0
  padding-bottom :26.6%
  background-color #ccc
  .swiper-img
    width:100%
</style>
