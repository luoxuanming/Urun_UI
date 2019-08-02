<template>
  <div class="Urun-progress" v-cloak>
    <div class="progress" :class="size == 'sm' ? 'small' : ''" :style="Cls">
      <span class="progress-bar" :class="type ? type : ''" :style="rate"></span>
    </div>
    <span v-if="number" class="text" v-html="count + '%'"></span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: "default",
      type: "secondary",
      width: 200,
      number: true,
      count: 50
    };
  },
  computed: {
    Cls() {
      return this.width ? "width:" + this.width + "px;" : "width:386px;";
    },
    rate() {
      return this.count ? "width:" + this.count + "%;" : "";
    }
  },
  updated() {}
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{
  display: none !important;
}
.Urun-progress {
  display: inline-block;
  .progress {
    display: inline-block;
    height: 4px;
    box-sizing: border-box;
    border-radius: 2px;
    background: @border-weak-color;
    position: relative;
    vertical-align: middle;
    .progress-bar {
      display: inline-block;
      background: @basic-color;
      height: 100%;
      position: absolute;
      left: 0;
      border-radius: 2px;
      transition: all 0.2s;
      &.info {
        background: @msg-color;
      }
      &.success {
        background: @success-color;
      }
      &.error {
        background: @error-color;
      }
      &.warning {
        background: @warn-color;
      }
      &.secondary {
        background: @negative-color;
      }
    }

    &.small {
      height: 2px;
      border-radius: 1px;
      .progress-bar {
        border-radius: 1px;
      }
    }
  }
  .text {
    display: inline-block;
    font-size: 12px;
    color: @default-color;
    vertical-align: middle;
    margin-left: 10px;
  }
}
</style>