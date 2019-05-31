<template>
    <div>
      <Cityheader></Cityheader>
      <Hotcity></Hotcity>
    </div>
</template>

<script>
  import Cityheader from './components/Header'
  import Hotcity from './components/Hotcity'
    export default {
      name: "City",
      data(){
        return{
          currentcity:''
        }
      },
      components:{
        Cityheader,
        Hotcity
      }
    }
</script>

<style lang="stylus" scoped>

</style>
