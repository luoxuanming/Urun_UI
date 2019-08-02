<template>
  <div ref="tooltip" class="Urun-tooltip" @click="handleClick" @mouseenter="monserOver" @mouseleave="mouseOut" v-tip="tiphide">
    <span v-if="text" class="text" :style="txtWidth">{{ text }}</span>
    <i v-if="icon" class="iconfont" :class="icon"></i>
    <span ref="tip" v-show="show" class="tip" :class="align" :style="tipWidth">
      {{ tip.text }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      align: "right",
      handleEvent:'hover',
      text: "这是内容",
      width:200,
      tip:{
        respond:true,
        text: "声音文件创建成功",
        width:120,
        position: "right"
      },
      icon:"",
    }
  },
  computed:{
    txtWidth(){
      return this.width?'max-width:'+this.width+'px':'max-width:auto;';
    },
    tipWidth(){
      return this.tip.width?'width:'+this.tip.width+'px':'white-space: nowrap;';
    }
  },
  directives: {
    tip:{
      bind: function(el, binding, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            //检测目标元素是否包含在el元素中 contains() 检测包含
            return false; //跳出去，不执行下面的方法了
          }
          if (binding.expression) {
            binding.value(); //让某个元素执行handleClose这个方法
          }
        }
        document.addEventListener("click", documentHandler);
      }
      
    }
  },
  methods: {
    resize() {
     var _this = this;
      window.onresize = function() {
        if(_this.tip.respond){
          _this.tipPosition();
        }
      };
    },
    tipPosition(){
        var window_width = document.documentElement.clientWidth;
        var window_height = document.documentElement.clientHeight;
        var tooltip_width = this.$refs.tooltip.clientWidth; 
        var tooltip_height = this.$refs.tooltip.clientHeight;
        var tooltip_left = this.$refs.tooltip.offsetLeft; //内容离左边的距离
        var tooltip_top = this.$refs.tooltip.offsetTop;
        var tooltip_right = window_width-tooltip_left-tooltip_width;
        var tooltip_bottom = window_height - tooltip_top - tooltip_height;
        var tip_width = this.$refs.tip.clientWidth; //提示框宽度
        var tip_height = this.$refs.tip.clientHeight; //提示框高度度
        
        var to_top;
        var to_left;
        var to_right;
        var to_bottom;

        if (tooltip_top >= tip_height+13 &&tooltip_right >= tip_width && tooltip_bottom >= tip_height+13 &&tooltip_left >= tip_width) {
          //默认 传进来的是什么就是什么
          if(this.tip.position=='right' && tooltip_right>tip_width){
            this.align = 'right'
          }
          if(this.tip.position=='left' && tooltip_left>tip_width){
            this.align = 'left'
          }
          if(this.tip.position=='top' && tooltip_top>tip_height){
            this.align = 'top'
          }
          if(this.tip.position=='bottom' && tooltip_bottom>tip_height){
            this.align = 'bottom'
          }
        } else {
          /*取最长距离的方向房子tip容器*/  
          if(tooltip_top>tooltip_right && tooltip_top>tooltip_bottom && tooltip_top>tooltip_left){
            this.align = 'top';
          }
          if(tooltip_right>tooltip_top && tooltip_right>tooltip_bottom && tooltip_right>tooltip_left){
            this.align = 'right';
          }
          if(tooltip_bottom>tooltip_top && tooltip_bottom>tooltip_right && tooltip_bottom>tooltip_left){
            this.align = 'bottom';
          }
          if(tooltip_left>tooltip_top && tooltip_left>tooltip_right && tooltip_left>tooltip_bottom){
            this.align = 'left';
          }

          /*当传进来的数值方向有足够的位置，默认还是为传进来的位置-》二层限制*/  
          if(this.tip.position=='top' && tooltip_top>tip_height+5){
            this.align = 'top';
          }
          if(this.tip.position=='right' && tooltip_right>tip_width+5){
            this.align = 'right';
          }
          if(this.tip.position=='bottom' && tooltip_bottom>tip_height+5){
            this.align = 'bottom';
          }
          if(this.tip.position=='left' && tooltip_left>tip_width+5){
            this.align = 'left';
          }
        }
       
    },
    handleClick(el) {
      if(this.handleEvent=='click'){
        this.show=!this.show;
        this.$nextTick(function(){
          this.tipPosition();
        })
      }
    },
    monserOver(){
     if(this.handleEvent=='hover'){
      this.show=true;
      this.$nextTick(function(){
        this.tipPosition();
      })
     } 
    },
    mouseOut(){
      if(this.handleEvent=='hover'){
        this.show=false;
      }
    },
    tiphide(){
      this.show=false;
    }
  },
  mounted() {
    if(this.tip.respond){
      this.resize();
      this.tipPosition();
    }
   
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
.Urun-tooltip {
  position: relative;
  display: inline-block;
  font-size: 14px;
  color: @default-color;
  padding: 8px;
  .text{
    display: inline-block;
    vertical-align: middle;
  }
  i{
    vertical-align: middle;
    font-size: 18px;
  }
  .tip {
    position: absolute;
    box-shadow: @box-shadow;
    background: @module-color;
    border-radius: 2px;
    padding: 10px;
    text-align: left;
    z-index: 999;
    &::before {
      position: absolute;
      content: "";
      border-style: solid;
    }
    &::after {
      position: absolute;
      content: "";
      border-style: solid;
    }
    &.bottom {
      bottom: -5px;
      left: 50%;
      transform: translate(-50%, 100%);
      &::before {
        top: -8px;
        border-width: 0 7px 7px 7px;
        border-color: transparent transparent @border-weak-color transparent;
      }
      &::after {
        top: -7px;
        border-width: 0 7px 7px 7px;
        border-color: transparent transparent #ffffff transparent;
      }
      &::before,
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &.top {
      top: -5px;
      left: 50%;
      transform: translate(-50%, -100%);
      &::before {
        bottom: -8px;
        border-width: 7px 7px 0 7px;
        border-color: @border-weak-color transparent transparent transparent;
      }
      &::after {
        border-width: 7px 7px 0 7px;
        border-color: #ffffff transparent transparent transparent;
        bottom: -7px;
      }
      &::before,
      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    &.right {
      right: -5px;
      top: 50%;
      transform: translate(100%, -50%);
      &::before {
        left: -8px;
        border-width: 7px 7px 7px 0;
        border-color: transparent @border-weak-color transparent transparent;
      }
      &::after {
        border-width: 7px 7px 7px 0;
        border-color: transparent #ffffff transparent transparent;
        left: -7px;
      }
      &::before,
      &::after {
        top: 50%;
        transform: translateY(-50%);
      }
    }

    &.left {
      left: -5px;
      top: 50%;
      transform: translate(-100%, -50%);
      &::before {
        right: -8px;
        border-width: 7px 0 7px 7px;
        border-color: transparent transparent transparent @border-weak-color;
      }
      &::after {
        border-width: 7px 0 7px 7px;
        border-color: transparent transparent transparent #ffffff;
        right: -7px;
      }
      &::before,
      &::after {
        top: 50%;
        transform: translateY(-50%);
      }
    }
  }
}
</style>