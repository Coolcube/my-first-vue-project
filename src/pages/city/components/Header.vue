<template>
    <div class="header">
      <router-link to="/">
        <div class="iconfont back-icon">&#xe604;</div>
      </router-link>
      城市选择
    </div>
</template>

<script>
    export default {
      name: "Cityheader"
    }
</script>

<style lang="stylus" scoped>
@import "../../../assets/styles/varibles.styl"
.header
  line-height $headerHeight
  height: $headerHeight
  overflow hidden
  color #fff
  background-color $bgColor
  text-align center
  font-size .32rem
  position relative
  .back-icon
    text-align:center
    font-size:.6rem
    position absolute
    color #fff
</style>
