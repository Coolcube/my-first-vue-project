<template>
    <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide>
          <div class='icon' v-for="item in iconsList1" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl">
              <p class="icon-desc">{{item.iconDesc}}</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide>
          <div class='icon' v-for="item in iconsList2" :key="item.id">
            <div class="icon-img">
              <img :src="item.imgUrl">
              <p class="icon-desc">{{item.iconDesc}}</p>
            </div>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: "Homeicons",
        data (){
          return{
            swiperOption:{
              pagination:'.swiper-pagination',
              loop:true
            }
          }
        },
      props:['iconsList1','iconsList2']
    }
</script>

<style lang="stylus" scoped>
.icons >>>.swiper-container
  height 0
  padding-bottom 54%
  overflow hidden
.icons >>>.swiper-pagination-bullets
  bottom -.2em
.icons
  width 100%
  height 0
  padding-bottom 54%
  overflow hidden
  padding-top: .2rem;
  .icon
    position relative
    width 25%
    float:left
    padding-bottom 25%
    overflow hidden
    .icon-img
      position absolute
      left 14%
      top:0
      width 72%
      .icon-desc
        font-size .3rem
        color:#333
        text-align center


</style>
