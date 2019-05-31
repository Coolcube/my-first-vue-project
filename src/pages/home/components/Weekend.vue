<template>
  <div>
    <div class="week-title">
      周末去哪儿
    </div>
    <ul>
      <li class="item" v-for="item in weekendList" :key="item.id">
        <div class="item-img-wraper">
          <img class="item-img" :src="item.imgUrl">
        </div>

        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </li>
    </ul>
  </div>

</template>

<script>
  export default {
    name: "Homeweekend",
    props:['weekendList']
  }
</script>

<style lang="stylus" scoped>
.week-title
  line-height .8rem
  background-color #eee
  text-indent .2rem
.item
  overflow hidden
  .item-img-wraper
    height 0
    padding-bottom 34.6%
    overflow hidden
    .item-img
      width 100%
  .item-info
    padding: 0 .1rem .1rem .2rem;
    .item-title
      line-height .8rem
      font-size .4rem
      margin-top .1rem
    .item-desc
      line-height .4rem
      color #777
      white-space nowrap
      text-overflow ellipsis
      overflow hidden
      width 6rem
      margin-bottom .16rem


</style>
