<template>
  <div class="Urun-label">
    <a
      v-if="list.length > 0"
      v-for="(item, index) in list"
      :class="Cla"
      :style="Sty"
      :href="item.link ? item.link : 'javascript:;'"
    >
      {{ item.text }}
      <i
        v-if="closeBtn"
        @click="removeHandle(index)"
        class="iconfont iconclose-circle-fill"
      ></i
    ></a>
    <i
      v-if="closeBtn"
      class="iconplus iconfont iconplus-circle"
      :class="type"
      @click="addHandle"
    ></i>
  </div>
</template>

<script>
export default {
  data() {
    return {
      size: "default",
      type: "",
      list: [{ text: "微博", link: null }],
      radius: true,
      closeBtn: true
    };
  },
  computed: {
    Sty() {
      return this.closeBtn ? "padding:0 10px" : "";
    },
    Cla() {
      var str = "";
      if (this.size == "sm") {
        str += "small ";
      } else {
        str += "normal ";
      }
      if (this.radius) {
        str += "radius ";
      }
      str += this.type;
      return str;
    }
  },
  methods: {
    removeHandle(index) {
      this.list.splice(index, 1);
    },
    addHandle() {
      var obj = { text: "微博", link: null };
      this.list.push(obj);
    }
  },
  created() {}
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
.Urun-label {
  display: inline-block;
  vertical-align: middle;

  a {
    display: inline-block;
    text-decoration: none;
    margin-right: 14px;
    vertical-align: middle;
    &.normal {
      background: #ffffff;
      line-height: 22px;
      font-size: 12px;
      box-shadow: @box-shadow;
      padding: 0 16px;
      color: @default-color;
      &.radius {
        border-radius: 11px;
      }

      &:visited,
      &:hover,
      &:active {
        color: #ffffff;
        background: @basic-color;
        text-decoration: none;
        i {
          color: #ffffff;
        }
      }
      &.primary,
      &.success,
      &.warning,
      &.error,
      &.secondary {
        color: #ffffff;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: #ffffff;
        }
        i {
          color: #ffffff;
        }
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
        background: @negative-color;
      }
      &.disable {
        background: @disable-color;
        color: #a1a1a1;
      }
      i {
        font-size: 10px;
        margin-left: 6px;
        float: right;
        color: @default-color;
      }
    }
    &.small {
      line-height: 18px;
      font-size: 12px;
      border: 1px solid @default-color;
      color: @default-color;
      padding: 0 8px;
      background: transparent;
      &.radius {
        border-radius: 9px;
      }
      &.primary {
        border-color: @basic-color;
        color: @basic-color;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: @basic-color;
        }
      }
      &.success {
        border-color: @success-color;
        color: @success-color;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: @success-color;
        }
      }
      &.warning {
        border-color: @warn-color;
        color: @warn-color;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: @warn-color;
        }
      }
      &.error {
        border-color: @error-color;
        color: @error-color;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: @error-color;
        }
      }
      &.secondary {
        border-color: @negative-color;
        color: @negative-color;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: @negative-color;
        }
      }
      &.disable {
        border-color: @disable-color;
        color: #a1a1a1;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: #a1a1a1;
        }
      }
    }
    &:last-child {
      margin-right: 0;
    }
  }
  .iconplus {
    display: inline-block;
    font-size: 18px;
    color: @basic-color;
    vertical-align: middle;
    cursor: pointer;
    &.primary {
      color: @basic-color;
    }
    &.success {
      color: @success-color;
    }
    &.secondary {
      color: @negative-color;
    }
    &.warning {
      color: @warn-color;
    }
    &.info {
      color: @msg-color;
    }
    &.error {
      color: @error-color;
    }
  }
}
</style>