<template>
    <div class="header">
      <div class="header-left">
        <div class="iconfont back-icon">&#xe604;</div>
      </div>
      <div class="header-input">
        <span class="iconfont">&#xe628;</span>
        输入城市/景点/游玩主题
      </div>
      <router-link to="/city">
        <div class="header-right">
          {{this.city}}
          <span class="iconfont arrow-icon">&#xe64a;</span>
        </div>
      </router-link>

    </div>
</template>

<script>
    export default {
      name: "Homeheader",
      props:['city']
    }
</script>

<style lang="stylus" scoped>
  @import "~@/assets/styles/varibles.styl"
.header
  line-height: $headerHeight
  display:flex
  background-color:$bgColor
  color:#fff
  .header-left
    width: .64rem
    float:left
    .back-icon
      text-align:center
      font-size:.6rem
  .header-input
    flex:1
    background-color:#fff
    border-radius:.1rem
    margin-top :.12rem
    line-height :.62rem
    margin-left: .2rem
    margin-bottom :.12rem
    padding-left :.2rem
    color:#ccc
  .header-right
    width:1.24rem
    float:right
    text-align center
    color #fff
    .arrow-icon
      font-size :.24rem
      margin-left :-.024rem

</style>
