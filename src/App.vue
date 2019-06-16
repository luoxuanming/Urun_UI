<template>
  <div id="app">
    <!-- <router-view/> -->
    <dropdown @change="aa" :dataList="dataList"></dropdown>
  </div>
</template>

<script>
import dropdown from "./base/dropdown/dropdown"
export default {
  name: 'App',
  data(){
    return{
      dataList:[
        {name: "选项一2"},
        {name: "选项二1"}
      ]
    }
  },
  components:{
    dropdown
  },
  methods:{
    aa(){
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
