<template>
  <div class="Urun-hint" :class="type" ref="hint">
    <div class="left">
      <i v-if="type != 'loading'" class="iconfont" :class="icon"></i>
      <div v-if="type == 'loading'" class="loading-ani">
        <span class="circle-fill"></span>
        <span class="circle"></span>
      </div>
      <span class="text">{{ text }}</span>
    </div>
    <i
      v-if="type != 'loading'"
      @click="closeHandle"
      class="close iconfont iconclose-circle-fill"
    ></i>
  </div>
</template>

<script>
export default {
  name: "UrunHint",
  data() {
    return {
      type: "warning",
      text: "请输入提醒信息",
      auto: false,
      duration: 2000
    };
  },
  methods: {
    closeHandle() {
      this.$refs.hint.remove();
    },
    autoClose() {
      var timer;
      timer = setTimeout(() => {
        this.closeHandle();
      }, this.duration);
    }
  },
  computed: {
    icon() {
      switch (this.type) {
        case "loading":
          return false;
          break;
        case "primary":
          return "iconmessage";
          break;
        case "success":
          return "iconcheck-circle";
          break;
        case "warning":
          return "iconbell";
          break;
        case "error":
          return "iconerror";
          break;
        case "secondary":
          return "iconinfo-circle";
          break;
      }
    }
  },
  created() {
    this.auto ? this.autoClose() : false;
    if (this.type == "loading") {
      this.text = "正在加载...";
    }
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
.Urun-hint {
  min-width: 390px;
  width: 390px;
  padding: 8px 0;
  border: 1px solid transparent;
  display: inline-block;
  position: relative;
  .left {
    width: 100%;
    padding-left: 10px;
    padding-right: 30px;
    font-size: 14px;
    text-align: left;
    display: inline-block;
    box-sizing: border-box;
    i {
      margin-right: 5px;
      font-size: 18px;
      vertical-align: middle;
    }
    .text{
      vertical-align: middle;
    }
  }
  .close {
    position: absolute;
    top: 12px;
    right: 8px;
    font-size: 10px;
    cursor: pointer;
  }
  &.primary {
    border-color: #a5d3f8;
    background: fadeout(hsla(207, 90%, 54%, 1), 80%);
    color: @msg-color;
  }
  &.success {
    border-color: #9cd8ae;
    background: fadeout(hsla(122, 39%, 49%, 1), 80%);
    color: @success-color;
  }
  &.warning {
    border-color: #eed569;
    background: fadeout(hsla(49, 100%, 48%, 1), 80%);
    color: @warn-color;
  }
  &.error {
    border-color: #fc8d84;
    background: fadeout(hsla(4, 90%, 58%, 1), 80%);
    color: @error-color;
  }
  &.secondary {
    border-color: #fa7fa9;
    background: fadeout(hsla(340, 100%, 63%, 1), 80%);
    color: #ff4081;
  }
  &.loading {
    border-color: fadeout(hsla(207, 90%, 54%, 1), 95%);
    background: fadeout(hsla(207, 90%, 54%, 1), 90%);
    color: #8fa1b5;
    vertical-align: middle;
    .left {
      padding-left: 0;
      justify-content: center;
      text-align: center;
    }
  }
  .loading-ani {
    margin-right: 5px;
    margin-top: 5px;
    position: relative;
    width: 38px;
    display: inline-block;
  }
  .circle-fill,
  .circle {
    display: inline-block;
    width: 7px;
    height: 7px;
    border: 2px solid #8fa1b5;
    border-radius: 50%;
    line-height: 36px;
    position: absolute;
    left: 0;
    top: 0;
  }
  .circle {
    width: 10px;
    height: 10px;
    left: 16px;
    top: -2px;
    animation: circle 0.7s ease-in-out infinite;
    -moz-animation: circle 0.7s ease-in-out infinite;
    -webkit-animation: circle 0.7s ease-in-out infinite;
    -o-animation: circle 0.7s ease-in-out infinite;
  }
  .circle-fill {
    background: #8fa1b5;
    animation: fill 0.7s ease-in-out infinite;
    -moz-animation: fill 0.7s ease-in-out infinite;
    -webkit-animation: fill 0.7s ease-in-out infinite;
    -o-animation: fill 0.7s ease-in-out infinite;
  }

  @keyframes fill {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(13px, 0, 10px) scale(1.5, 1.5);}
    50% {transform: translate3d(27px, 0, 20px) scale(1.2, 1.2);}
    75% {transform: translate3d(13px, 0, -10px) scale(0.3, 0.3);}
    100% {transform: translate3d(0px, 0, 0px);}
  }

  @-o-keyframes fill {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(13px, 0, 10px) scale(1.5, 1.5);}
    50% {transform: translate3d(27px, 0, 20px) scale(1.2, 1.2);}
    75% {transform: translate3d(13px, 0, -10px) scale(0.3, 0.3);}
    100% {transform: translate3d(0px, 0, 0px);}
  }

  @-moz-keyframes fill {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(13px, 0, 10px) scale(1.5, 1.5);}
    50% {transform: translate3d(27px, 0, 20px) scale(1.2, 1.2);}
    75% {transform: translate3d(13px, 0, -10px) scale(0.3, 0.3);}
    100% {transform: translate3d(0px, 0, 0px);}
  }
  @-webkit-keyframes fill {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(13px, 0, 10px) scale(1.5, 1.5);}
    50% {transform: translate3d(27px, 0, 20px) scale(1.2, 1.2);}
    75% {transform: translate3d(13px, 0, -10px) scale(0.3, 0.3);}
    100% {transform: translate3d(0px, 0, 0px);}
  }

  @keyframes circle {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-13px, 0, -10px) scale(0.2, 0.2);}
    50% {transform: translate3d(-27px, 0, -20px) scale(1, 1);}
    75% {transform: translate3d(-13px, 0, 10px) scale(1.5, 1.5);}
    100% {transform: translate3d(0px, 0, 0px);}
  }
  @-o-keyframes circle {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-13px, 0, -10px) scale(0.2, 0.2);}
    50% {transform: translate3d(-27px, 0, -20px) scale(1, 1);}
    75% {transform: translate3d(-13px, 0, 10px) scale(1.5, 1.5);}
    100% {transform: translate3d(0px, 0, 0px);}
  }
  @-moz-keyframes circle {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-13px, 0, -10px) scale(0.2, 0.2);}
    50% {transform: translate3d(-27px, 0, -20px) scale(1, 1);}
    75% {transform: translate3d(-13px, 0, 10px) scale(1.5, 1.5);}
    100% {transform: translate3d(0px, 0, 0px);}
  }
  @-webkit-keyframes circle {
    0% {transform: translate3d(0, 0, 0);}
    25% {transform: translate3d(-13px, 0, -10px) scale(0.2, 0.2);}
    50% {transform: translate3d(-27px, 0, -20px) scale(1, 1);}
    75% {transform: translate3d(-13px, 0, 10px) scale(1.5, 1.5);}
    100% {transform: translate3d(0px, 0, 0px);}
  }
}
</style>