<template>
  <a class="Urun-badage" :class="Clas" :href="link">{{text}}</a>
</template>

<script>
export default {
  data() {
    return {
      type: "primary",
      text: "徽章",
      radius: false,
      link: "javascript:;"
    };
  },
  computed: {
    Clas() {
      return this.radius ? "radius " + this.type : this.type;
    }
  },
  created(){

  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";

.Urun-badage {
  display: inline-block;
  line-height: 18px;
  padding: 0 6px;
  border-radius: 3px;
  text-decoration: none;
  font-size: 12px;
  color: #ffffff;
  background: @error-color;
  cursor: pointer;
  &.radius {
    border-radius: 9px;
  }
  &.primary {
    background: @basic-color;
  }
  &.success {
    background: @success-color;
  }
  &.warning {
    background: @warn-color;
  }
  &.error {
    background: @error-color;
  }
  &.secondary {
    background: #ff4081;
  }
  &.disable {
    background: @disable-color;
    color: #a1a1a1;
  }
}
</style>