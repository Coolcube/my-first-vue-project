<template>
  <div>
    <Homeheader :city="city"></Homeheader>
    <Homeswiper :list="swiperList"></Homeswiper>
    <Homeicons :iconsList1="iconsList1" :iconsList2="iconsList2"></Homeicons>
    <Homerecomend :recomendList="recomendList"></Homerecomend>
    <Homeweekend :weekendList="weekendList"></Homeweekend>
  </div>

</template>

<script>
  import Homeheader from './components/Header'
  import Homeswiper from './components/Swiper'
  import Homeicons from './components/Icons'
  import Homerecomend from './components/Recomend'
  import Homeweekend from './components/Weekend'
  import axios from 'axios'
export default {
  name:'Home',
  components:{
    Homeheader,
    Homeswiper,
    Homeicons,
    Homerecomend,
    Homeweekend
  },
  data (){
    return{
      city:'',
      swiperList:[],
      iconsList1:[],
      iconsList2:[],
      recomendList:[],
      weekendList:[]
    }
  },
  methods:{
    getHomeInfo(){
      axios.get('/api/index.json').then(res=>{
        res=res.data;
        //console.log(res);
        if(res.ret && res.data){
          const data=res.data;
          this.city=data.city;
          this.swiperList =data.swiperList;
          this.iconsList1=data.iconImgList;
          this.iconsList2=data.iconImgList2;
          this.recomendList=data.recomendList;
          this.weekendList=data.weekendList
        }
      })
    }
  },
  mounted() {
    this.getHomeInfo()
  }

}
</script>

<style scoped>

</style>
