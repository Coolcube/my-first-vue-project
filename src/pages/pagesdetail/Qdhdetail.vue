<template>
    <div class="reco-wrap">
      <img src="//img1.qunarzz.com/sight/p0/1603/c5/c5e2b211d10d4bb90.img.jpg_600x330_7e602298.jpg">
      <router-link to="/">
        <div class="back-con">
          <span class="iconfont back-icon">&#xe604;</span>
        </div>
      </router-link>
      <p class="desc">千岛湖天迹热气球</p>
    </div>
</template>

<script>
    export default {
        name: "Recodetail"
    }
</script>

<style lang="stylus" scoped>
.reco-wrap
  position relative
  .back-con
    position absolute
    left:.14rem
    top:.14rem
    width .7rem
    height .7rem
    background-color rgba(0,0,0,0.6)
    border-radius 50%
    .back-icon
      font-size .5rem
      color #fff
      margin-left .06rem;
  .desc
    font-size .4rem
    color #333
    line-height .8rem
    text-align center
</style>
