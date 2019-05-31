<template>
  <div class="reco-wrap">
    <img src="//img1.qunarzz.com/sight/p0/1904/68/6805ed3571d39a5ca3.img.jpg_600x330_3d239403.jpg">
    <router-link to="/">
      <div class="back-con">
        <span class="iconfont back-icon">&#xe604;</span>
      </div>
    </router-link>
    <p class="desc">杭州乐园(AAAA景区)</p>
  </div>
</template>

<script>
    export default {
        name: "Hzlydetail"
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
