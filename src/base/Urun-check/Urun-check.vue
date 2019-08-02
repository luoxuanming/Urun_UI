<template>
  <div class="Urun-check" v-cloak>
    <label v-for="(item, index) in list" @click="checkHandle(index,item.name)" for="0"> 
      <i v-if="item.type=='radio'" class="iconfont" :class="item.check?(item.theme?item.theme+' iconzu2':'iconzu2'):'iconzu3'" :style="item.size?(item.size=='sm'?'font-size:14px':''):''"><input type="radio" :name="item.name"/></i>
      <i v-if="item.type=='checkbox'" class="iconfont" :class="item.check?(item.theme?item.theme+' iconzu4':'iconzu4'):'iconjuxing'" :style="item.size?(item.size=='sm'?'font-size:14px':''):''"><input type="checkbox"/></i>
      <span v-if="item.text" class="text" v-html="item.text"></span>
    </label>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [{type:"radio", text: "选项一",name:'opt', check: true },{type:"radio", theme:'secondary',name:'opt',check: false, text: "选项二" }]
    }
  },
  methods:{
    checkHandle(index,name){
      if(this.list[index].type=='radio'){
        this.list.forEach((item,index0)=>{
          if(item.name==name){
            item.check =false;
          }
        });
         this.list[index].check = true;
      }else{
        this.list[index].check=!this.list[index].check;
      }
      
    }
  },
  created(){

  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{
  display: none !important;
}
.Urun-check {
  display: inline-block;
  label {
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    i {
      display: inline-block;
      width: 14px;
      height: 14px;
      font-size: 16px;
      position: relative;
      color: @i-weak-color;
      vertical-align: middle;
      input {
        opacity: 0;
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
      }
      &.iconzu2,&.iconzu4{
        color:@basic-color;
        &.success{
          color:@success-color;
        }
        &.warning{
          color:@warn-color;
        }
        &.secondary{
          color:@negative-color;
        }
        &.info{
          color:@msg-color;
        }
        &.error{
          color:@error-color;
        }
      }
      
    }
    .text {
      color: @default-color;
      vertical-align: middle;
      margin-left: 5px;
      &::selection{
        background: transparent;
      }
    }
  }
}
</style>