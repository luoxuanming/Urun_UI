<template>
  <ul class="Urun-stepbar" v-cloak>
    <li v-for="(item,index) in list" :class="item.type">
      <dl class="step-dl">
        <dt class="icon">
          <i v-if="item.type=='success'||item.type=='error'" class="iconfont" :class="item.icon?item.icon:(item.type=='success'?'iconcheck':'iconclose')"></i>
          <i v-if="!item.type" class="num" v-html="typeof(item.icon)=='number'?item.icon:index+1"></i>
        </dt>
        <dd v-html="item.text"></dd>
      </dl>
      <div class="line"></div>
    </li>
  </ul>
</template>

<script>
export default {
  data(){
    return {
      list:[
        {type:'success',text:'成功'},
        {type:'error',text:'失败',icon:"iconclose"},
        {text:'默认',icon:1}
      ]
    }
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{
  display: none !important;
}
.Urun-stepbar {
  display: inline-block;
  text-align: left;
  margin: 0;
  padding: 0;
  li {
    list-style: none;
    position: relative;
    vertical-align: top;
    display: inline-block;
    width: 84px;
    text-align: center;
    margin: 0 13px;
    dl.step-dl {
      display: inline-block;
      font-size: 14px;
      vertical-align: middle;
      text-align: center;
      margin: 0;
      dt,
      dd {
        margin: 0;
      }
      dt.icon {
        display: inline-block;
        border-radius: 13px;
        padding: 6px 13px;
        text-align: center;
        margin-bottom: 11px;
        position: relative;
        background: @i-weak-color;
        min-width: 40px;
        box-sizing: border-box;
        i {
          font-size: 14px;
          vertical-align: middle;
          color: #ffffff;
        }
        i.num{
          font-style: normal;
        }
        &::before{
          position: absolute;
          content:"";
          width: 50px;
          height: 3px;
          top:12px;
          left:50px;
          background: @i-weak-color;
          opacity: 0.4;
        }
      }
      dd {
        color: @default-color;
        white-space: pre-wrap;
      }
    }
    &:last-child{
      dl.step-dl {
        dt.icon{
          &::before{
            display: none;
          }
        }
      }
    }
    &.primary {
      dl.step-dl {
        dt.icon {
          background: @basic-color;
          &::before{
            background: @basic-color;
          }
        }
      }
    }
    &.success {
      dl.step-dl {
        dt.icon {
          background: @success-color;
          &::before{
            background: @success-color;
          }
        }
      }
    }
    &.error {
      dl.step-dl {
        dt.icon {
          background: @error-color;
          &::before{
            background: @i-weak-color;
          }
        }
      }
    }
    &.secondary {
      dl.step-dl {
        dt.icon {
          background: @negative-color;
          &::before{
            background: @negative-color;
          }
        }
      }
    }
    &.warning {
      dl.step-dl {
        dt.icon {
          background: @warn-color;
          &::before{
            background: @warn-color;
          }
        }
      }
    }
    &.info {
      dl.step-dl {
        dt.icon {
          background: @msg-color;
          &::before{
            background: @msg-color;
          }
        }
      }
    }
  }
}
</style>
