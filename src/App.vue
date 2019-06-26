<template>
  <div id="app">
    <!--<router-view/>-->
    <dropdown handleEvent="click" @change="dropdown" :dataList="dataList"></dropdown>
    <dropdown handleEvent="hover" @change="dropdown" :dataList="dataList"></dropdown>
  </div>
</template>

<script>
import dropdown from "./base/dropdown-menu/dropdown-menu"
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
    dropdown
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
