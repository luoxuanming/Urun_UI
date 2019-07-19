<template>
  <a class="Urun-btn" :class="btnClass" href="javascript:;">
    {{ text }}<i v-if="icon.align" class="iconfont" :class="icon.name"></i>
  </a>
</template>

<script>
export default {
  name: "UrunBtn",
  data() {
    return {
      size: "default",
      text: "确定",
      icon: {},
      type: "info"
    };
  },
  computed: {
    btnClass() {
      var strCla = "";
      strCla += this.type ? this.type + " " : "";
      strCla += this.size ? this.size + " " : "";
      if (this.icon) {
        if (this.icon.align) {
          strCla += this.icon.align == "left" ? "icon-left" : "icon-right";
        }
      }
      return strCla;
    }
  },
  created() {
    console.log(this.btnClass);
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";

.Urun-btn {
  height: 28px;
  line-height: 28px;
  display: inline-block;
  background: @module-color;
  box-shadow: @box-shadow;
  opacity: 1;
  border-radius: 2px;
  color: @default-color;
  font-size: 14px;
  text-decoration: none;
  padding: 0 22px;
  &.radius {
    border-radius: 14px;
  }

  &.icon-left,
  &.icon-right {
    i {
      font-size: 18px;
      line-height: 28px;
    }
  }

  &.sm {
    padding: 0 16px;
    height: 22px;
    font-size: 12px;
    line-height: 22px;
    i {
      font-size: 12px;
      line-height: 22px;
    }
    &.radius {
      border-radius: 11px;
    }
  }
  //带图标
  &.icon-left {
    padding: 0 11px 0 9px;
    i {
      float: left;
      margin-right: 6px;
    }
  }
  &.icon-right {
    padding: 0 9px 0 11px;
    i {
      float: right;
      margin-left: 6px;
    }
  }
  &.primary,
  &.secondary,
  &.success,
  &.warning,
  &.info,
  &.error {
    color: #ffffff;
  }
  &.primary {
    background: @bright-color;
    &:hover {
      background: fadeout(hsla(204, 70%, 53%, 1), 20%);
    }
    &:active {
      background: fadeout(hsla(204, 70%, 53%, 1), 40%);
    }
  }
  &.secondary {
    background: #ff4081;
  }
  &.success {
    background: @success-color;
  }
  &.warning {
    background: @warn-color;
  }
  &.info {
    background: #2196f3;
  }
  &.error {
    background: @error-color;
  }
  &.disable {
    background: @disable-color;
    color: #a1a1a1;
  }
}
</style>