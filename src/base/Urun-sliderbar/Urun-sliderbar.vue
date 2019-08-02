<template>
  <div class="Urun-sliderbar" :class="size=='sm'?'small':''" :style="'width:'+width+'px;'" ref="slider" v-cloak>
    <span class="bar" :class="type" :style="'width:' + per + '%;'"
      ><i ref="circle" class="circle">
        <i v-show="show"></i>
        <em class="tip" v-show="tip ? show : false" v-html="parseInt(per)"></em></i
    ></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      min: 0,
      max: 100,
      size:'defalut',
      type:'default',
      width:386,
      tip: true,
      per: this.perval
    };
  },
  props: {
    perval: {
      type: Number,
      default: 0
    }
  },
  computed: {
    scale() {
      return (this.per - this.min) / (this.max - this.min);
    },
    slider_width() {
      if (this.slider) {
        return this.slider.offsetWidth * this.scale + "px";
      } else {
        return 0 + "px";
      }
    }
  },
  mounted() {
    var _this = this;
    this.slider = this.$refs.slider;
    this.slider.onmousedown = function(e){
      e = e.window || e;
      if(e.target!=_this.$refs.circle){
        _this.per = e.offsetX/this.offsetWidth*100;
      }
    }
    this.$refs.circle.onmousedown = function(e) {
      _this.show = true;
      e = e.window || e;
      var iStartX = e.clientX;
      var width = parseInt(_this.slider_width);
      document.onmousemove = function(e) {
        var disX = e.clientX - iStartX + width; //获取新的width
        var scale = disX / _this.slider.offsetWidth;
        _this.per = Math.ceil((_this.max - _this.min) * scale + _this.min);
        _this.per = Math.max(_this.per, _this.min);
        _this.per = Math.min(_this.per, _this.max);
      };
     
      document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
        _this.$emit("getper", _this.per);
        _this.show = false;
      };
      return false;
    };
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{
  display: none !important;
}
.Urun-sliderbar {
  display: inline-block;
  height: 4px;
  border-radius: 2px;
  background: @border-weak-color;
  cursor: pointer;
  position: relative;
  vertical-align: middle;
  .bar {
    display: inline-block;
    height: 100%;
    border-radius: 2px;
    background: @basic-color;
    position: absolute;
    left: 0;
    top: 0;
    transition: all 0.2s;
    .circle {
      position: absolute;
      width: 12px;
      height: 12px;
      background: @basic-color;
      border-radius: 50%;
      right: -9px;
      top: -5px;
      i {
        position: absolute;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: rgba(53, 152, 219, 0.25);
        left: -3px;
        top: -3px;
        z-index: 0;
        transition: all 0.5s;
      }
      .tip {
        display: inline-block;
        padding: 5px;
        font-style: normal;
        font-size: 12px;
        color: @default-color;
        border-radius: 2px;
        box-shadow: @box-shadow;
        background: #ffffff;
        position: absolute;
        top: -300%;
        left: 50%;
        transform: translateX(-50%);
        &::before {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 5px 0 5px;
          border-color: @border-weak-color transparent transparent transparent;
          position: absolute;
          bottom: -7px;
          left: 50%;
          transform: translateX(-50%);
        }
        &::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 7px 5px 0 5px;
          border-color: #ffffff transparent transparent transparent;
          position: absolute;
          bottom: -6px;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }
    &.info{
      background: @msg-color;
      .circle{
         background: @msg-color;
        i{
           background: rgba(33, 150, 243, 0.25);
        }
      }
    }
    &.success{
      background: @success-color;
      .circle{
        background: @success-color;
        i{
           background: rgba(76, 175, 80, 0.25); 
        }
      }
    }
    &.warning{
      background: @warn-color;
      .circle{
         background: @warn-color;
        i{
           background: rgba(244, 199, 0, 0.25); 
        }
      }
    }
    &.secondary{
      background: @negative-color;
      .circle{
        background: @negative-color;
        i{
           background: rgba(255, 64, 129, 0.25); 
        }
      }
    }
    &.error{
      background: @error-color;
      .circle{
        background: @error-color;
        i{
           background: rgba(244, 67, 54, 0.25); 
        }
      }
    }
  }
  &.small {
    height: 2px;
    border-radius: 1px;
    .bar {
      height: 2px;
      border-radius: 1px;
    }
  }
  &:hover {
    .bar .circle::before {
      opacity: 1;
    }
  }
}
</style>