<template>
  <div>
    <div class="recomend-title">
      热销推荐
    </div>
    <ul>
      <li class="item" v-for="item in recomendList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <router-link :to="item.path">
            <button class="item-button">查看详情</button>
          </router-link>

        </div>
      </li>
    </ul>
  </div>

</template>

<script>
    export default {
      name: "Homerecomend",
      props:['recomendList']
    }
</script>

<style lang="stylus" scoped>
.recomend-title
  line-height .8rem
  background-color #eee
  text-indent .2rem
  margin-top .2rem
.item
  display flex
  overflow hidden
  height 1.9rem
  border-bottom .02rem solid #e0e0e0
  padding: .16rem;
  .item-img
    width 1.7rem
    height 1.7rem
    padding .1rem
  .item-info
    flex 1
    padding .1
    .item-title
      line-height .54rem
      font-size .32rem
      margin-top .1rem
    .item-desc
      line-height .4rem
      color #777
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      width 4.8rem
    .item-button
      line-height .44rem
      margin-top .16rem
      background-color #ff9300
      padding .06em .2rem
      border-radius .06rem
      color #fff
      border:none

</style>
