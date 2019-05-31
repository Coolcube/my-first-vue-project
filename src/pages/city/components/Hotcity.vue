<template>
    <div>
      <div class="hotTitle">
        热门城市
      </div>
      <ul class="clearfloat">
        <li class="cityName" v-for="item in cityNameList" :key="item.id"
            @click="handleClick(item.city)">
          {{item.city}}
        </li>
      </ul>
      <div class="hotTitle">
        字母排序
      </div>
      <ul class="clearfloat">
        <li class="letter" v-for="item in letterList" :key="item.id">
         {{item.letter}}
        </li>
      </ul>
    </div>
</template>

<script>

    export default {
      name: "Hotcity",
      data (){
          return{
            cityNameList:[
              {
                id:'01',
                city:'北京'
              },
              {
                id:'02',
                city:'上海'
              },
              {
                id:'03',
                city:'三亚'
              },
              {
                id:'04',
                city:'香港'
              },
              {
                id:'05',
                city:'杭州'
              },
              {
                id:'06',
                city:'广州'
              },
              {
                id:'07',
                city:'成都'
              },
              {
                id:'08',
                city:'深圳'
              },
              {
                id:'09',
                city:'苏州'
              },
              {
                id:'10',
                city:'桂林'
              },
              {
                id:'11',
                city:'西安'
              },
              {
                id:'12',
                city:'厦门'
              }
            ],
            letterList:[
              {
                id:'01',
                letter:'A'
              },
              {
                id:'02',
                letter:'B'
              },
              {
                id:'03',
                letter:'C'
              },
              {
                id:'04',
                letter:'D'
              },
              {
                id:'05',
                letter:'E'
              },
              {
                id:'06',
                letter:'F'
              },
              {
                id:'07',
                letter:'G'
              },
              {
                id:'08',
                letter:'H'
              },
              {
                id:'09',
                letter:'I'
              },
              {
                id:'10',
                letter:'J'
              },
              {
                id:'11',
                letter:'K'
              },
              {
                id:'12',
                letter:'L'
              },
              {
                id:'13',
                letter:'M'
              },
              {
                id:'14',
                letter:'N'
              },
              {
                id:'15',
                letter:'O'
              },
              {
                id:'16',
                letter:'P'
              },
              {
                id:'17',
                letter:'Q'
              },
              {
                id:'18',
                letter:'R'
              },
              {
                id:'19',
                letter:'S'
              },
              {
                id:'20',
                letter:'T'
              },
              {
                id:'21',
                letter:'W'
              },
              {
                id:'22',
                letter:'S'
              },
              {
                id:'23',
                letter:'Y'
              },
              {
                id:'24',
                letter:'Z'
              }
            ]
          }
      },
      methods:{
        handleClick(city){
          this.bus.$emit('cityClick',city)
        }
      }
    }
</script>

<style lang="stylus" scoped>
.hotTitle
  line-height .8rem
  background-color #eee
  text-indent .2rem
.clearfloat:after
  display block
  clear both
  content ""
  visibility hidden
  height 0
.clearfloat
  zoom 1
  .cityName
    font-size .36rem
    color #333
    border-bottom .02rem solid #ccc
    border-right .02rem solid #ccc
    width 33%
    float left
    line-height .9rem
    text-align center
  .cityName:nth-child(3),.cityName:nth-child(6),.cityName:nth-child(9),
  .cityName:nth-child(12)
    border-right none
  .cityName:nth-child(10),.cityName:nth-child(11),.cityName:nth-child(12)
    border-bottom none
  .letter
    width 16.66%
    float left
    text-align center
    font-size .3rem
    color #333
    line-height .9rem
</style>
