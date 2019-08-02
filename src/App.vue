<template>
  <div id="app">
    <!--<router-view/>-->
    <!--下拉菜单
    <dropdown handleEvent="click" @change="dropdown" :dataList="dataList"></dropdown>
    <dropdown handleEvent="hover" @change="dropdown" :dataList="dataList"></dropdown>
    -->
   <dropdown @change="dropdown" ></dropdown>
    <Ubtn></Ubtn>
    <Uhint></Uhint>
    <Ubadage></Ubadage>
    <Ulabel></Ulabel>
    <UCrumbs></UCrumbs>
    <UTooltip></UTooltip>
    <Ustepbar></Ustepbar>
    <UToolBtn></UToolBtn>
    <UTab></UTab>
    <UCheck></UCheck>
    <UDerail></UDerail>
    <UrunProgress></UrunProgress>
    <USliderbar :perval="perval" @getper="getperval"></USliderbar>
    <ULoading></ULoading>
    <UForms></UForms>
  </div>
</template>

<script>
import dropdown from "./base/dropdown-menu/dropdown-menu"
import Ubtn from "./base/Urun-btn/Urun-btn"
import Uhint from "./base/Urun-hint/Urun-hint"
import Ubadage from "./base/Urun-badage/Urun-badage"
import Ulabel from "./base/Urun-label/Urun-label"
import UCrumbs from "./base/Urun-crumbs/Urun-crumbs"
import UTooltip from "./base/Urun-tooltip/Urun-tooltip"
import Ustepbar from "./base/Urun-stepbar/Urun-stepbar"
import UToolBtn from "./base/URun-tool-btn/URun-tool-btn"
import UTab from "./base/URun-tab/URun-tab"
import UCheck from "./base/URun-check/URun-check"
import UDerail from "./base/Urun-derail/Urun-derail"
import UrunProgress from "./base/Urun-progress/Urun-progress"
import USliderbar from "./base/Urun-sliderbar/Urun-sliderbar"
import ULoading from "./base/Urun-loading/Urun-loading"
import UForms from "./base/Urun-formlist/Urun-formlist"
export default {
  name: 'App',
  data(){
    return{
      perval:50
    }
  },
  components:{
    dropdown,
    Ubtn,
    Uhint,
    Ubadage,
    Ulabel,
    UCrumbs,
    UTooltip,
    Ustepbar,
    UToolBtn,
    UTab,
    UCheck,
    UDerail,
    UrunProgress,
    USliderbar,
    ULoading,
    UForms
  },
  methods:{
    dropdown(){
      console.log()
    },
    getperval(val){
      this.perval = val;
    }
  },
  
}
</script>

<style>

html,body{
    padding:0;
    margin:0;
    
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  
}
</style>
