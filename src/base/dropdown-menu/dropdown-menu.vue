<template>
  <div class="dropdown-menu">
    <div class="zq-drop-list" v-drop="handleClick" v-if="handleEvent=='click'">
      <span @click="show = !show">{{dplLable}}<i></i></span>
      <ul v-show="show">
          <li v-for="(item, index) in dataList" :key="index" @click="onLiClick(index, $event)"><a href="javascript:void(0)">{{item[labelProperty]}}</a></li>
      </ul>
    </div>
    <div class="zq-drop-list" @mouseover="show=true;" @mouseout="show=false;" v-if="handleEvent=='hover'">
      <span>{{dplLable}}<i></i></span>
      <ul ref="list" v-show="show">
          <li v-for="(item, index) in dataList" :key="index" @click="onLiClick(index, $event)">{{item[labelProperty]}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
    name: "DropDownList",
    data(){
        return {
            activeIndex:0,
            show:false
        }
    },
    props:{
        dataList:{
            type:Array,
            default(){
                return [
                    {name: "选项一"},
                    {name: "选项二"}
                ]
            }
        },
        handleEvent:{
          type:String,
          default(){ return "click" }
        },
        labelProperty:{
            type:String,
            default(){ return "name" }
        }
    },
    directives:{
        drop:{
         bind:function(el,binding,vnode){
                function documentHandler(e){F
                    if(el.contains(e.target)){//检测目标元素是否包含在el元素中 contains() 检测包含
                        return false;  //跳出去，不执行下面的方法了
                    }
                    if(binding.expression){
                        binding.value() //让某个元素执行handleClose这个方法
                    }
                }
                el._vueClickOutside_ = documentHandler;
                document.addEventListener('click',documentHandler);
            },
            unbind:function(el,binding){
                document.removeEventListener('click',el._vueClickOutside_);
                delete el._vueClickOutside_;
            }
        }
    },
    methods:{
        handleClick(){
          //下拉菜单
          this.show = false;
        },
        onLiClick(index){
            let path = event.path || (event.composedPath && event.composedPath()) //兼容火狐和safari
            this.handleClick();
            this.activeIndex = index;
            this.$emit("change", {
                index:index,
                value:this.dataList[index]
            })
        }
    },
    computed:{
        dplLable(){
            return this.dataList[this.activeIndex][this.labelProperty]
        }
    }
}
</script>


<style scoped lang="less">
  .dropdown-menu{
    display:inline-block;
    .zq-drop-list{
            display: inline-block;
            min-width: 100px;
            position: relative;
            cursor:pointer;
            span{
                display: block;
                height: 30px;
                line-height: 30px;
                background: #f1f1f1;
                font-size: 14px;
                text-align: center;
                color: #333333;
                border-radius: 4px;
                i{
                    margin-left: 6px;
                    display: inline-block;
                }
            }
            ul{
                position: absolute;
                top: 30px;
                left: 0;
                width: 100%;
                margin: 0;
                padding: 0;
                border: solid 1px #f1f1f1;
                border-radius: 4px;
                overflow: hidden;
                li{
                    list-style: none;
                    height: 30px;
                    line-height: 30px;
                    font-size: 14px;
                    border-bottom: solid 1px #f1f1f1;
                    background: #ffffff;
                    a{
                      text-decoration:none;
                      color:#333;
                    }
                }
                li:last-child{
                    border-bottom: none;
                }
                li:hover{
                    background: #f6f6f6;
                }
            }
        }
    }
    
</style>