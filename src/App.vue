<template>
  <div id="app">
    <!--<router-view/>-->
    <!--下拉菜单
    <dropdown handleEvent="click" @change="dropdown" :dataList="dataList"></dropdown>
    <dropdown handleEvent="hover" @change="dropdown" :dataList="dataList"></dropdown>
    -->
   <dropdown handleEvent="click" @change="dropdown" :dataList="dataList"></dropdown>
    <Ubtn></Ubtn>
    <Uhint></Uhint>
    <Ubadage></Ubadage>
    <Ulabel></Ulabel>
    <UCrumbs></UCrumbs>
    <UTooltip></UTooltip>
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
export default {
  name: 'App',
  data(){
    return{
      dataList:[
        {name: "选项一A"},
        {name: "选项二B"}
      ],
    }
  },
  components:{
    dropdown,
    Ubtn,
    Uhint,
    Ubadage,
    Ulabel,
    UCrumbs,
    UTooltip
  },
  methods:{
    dropdown(){
      console.log()
    }
  }
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
