<template>
  <div ref="tooltip" class="Urun-tooltip" @click="HandleClick">
    {{ text }}
    <span ref="tip" v-show="show" class="tip" :class="align">
      {{ tip }}
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      text: "这是内容",
      tip: "声音文件创建成功",
      align: "top",
      oldalign:"right"
    };
  },
  methods: {
    resize() {
      var _this = this;
      window.onresize = function() {
        var window_width = document.documentElement.clientWidth;
        var window_height = document.documentElement.clientHeight;
        var tooltip_width = _this.$refs.tooltip.clientWidth;
        var tooltip_height = _this.$refs.tooltip.clientHeight;
        var tip_width = _this.$refs.tip.clientWidth;
        var tip_height = _this.$refs.tip.clientHeight;

       var to_left;
        if(_this.align == 'bottom' || _this.align == 'top' ){
          to_left = _this.$refs.tooltip.offsetLeft - Math.abs((tooltip_width - tip_width) / 2);
        }else{
          if(_this.align == 'right'){
            to_left = _this.$refs.tooltip.offsetLeft +tooltip_width;
          }else{
            to_left = _this.$refs.tooltip.offsetLeft - tip_width -12;
          }
        }
        
        
        var to_right;
        if(_this.align == 'right'){
            to_right = window_width - to_left - tip_width - 16;
        }else{
            to_right = window_width - _this.$refs.tooltip.offsetLeft -tooltip_width;
          if(_this.align=='top' || _this.align=='bottom'){
            to_right = window_width - to_left - tip_width;
          }
        }

        var to_top;
        if(_this.align == 'bottom'){
          to_top=_this.$refs.tooltip.offsetTop + tooltip_height
        }else if(_this.align == 'left' && _this.align == 'right'){
          to_top=_this.$refs.tooltip.offsetTop - (tip_height-tooltip_height)/2;
        }else{
          to_top=_this.$refs.tooltip.offsetTop - tip_height - 12;
        }

        var to_bottom = window_height - to_top - tip_height;

        
        var dis = 30; //距离边界距离
        console.log(to_right)
        // if (
        //   to_top >= dis &&
        //   to_right >= dis &&
        //   to_bottom >= dis &&
        //   to_left >= dis
        // ) {
        //   //默认 传进来的是什么就是什么
        //   if(_this.oldalign=='left' && to_left +dis >=tooltip_width ){
        //     _this.align = 'left'
        //   }
        //   if(_this.oldalign=='right' && to_right +dis >=tooltip_width){
        //     _this.align = 'right'
        //   }
        //   if(_this.oldalign=='top' && to_top +dis >=tooltip_height){
        //     _this.align = 'top'
        //   }
        //   if(_this.oldalign=='bottom' && to_bottom +dis >=tooltip_height){
        //     _this.align = 'bottom'
        //   }
        // } else {
        //   //这里肯定有一边小于 dis了，这时需要判断那边的距离宽就往哪边走，优先反方向

        //   if(to_top>dis && to_top>to_right && to_top>to_bottom && to_top>to_left){
        //     _this.align = 'top';
        //   }
        //   if(to_right>dis && to_right>to_top && to_right>to_bottom && to_right>to_left){
        //     _this.align = 'right';
        //   }
        //   if(to_bottom>dis && to_bottom>to_top && to_bottom>to_right && to_bottom>to_left){
        //     _this.align = 'bottom';
        //   }
        //   if(to_left>dis && to_left>to_top && to_left>to_right && to_left>to_bottom){
        //     _this.align = 'left';
        //   }
        // }
      };
    },
    HandleClick() {}
  },
  mounted() {
    this.resize();
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
  border: 1px solid @border-weak-color;
  .tip {
    position: absolute;
    white-space: nowrap;
    box-shadow: @box-shadow;
    background: @module-color;
    border-radius: 2px;
    padding: 10px;
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
      bottom: -13px;
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
      top: -13px;
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
      right: -13px;
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
      left: -13px;
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