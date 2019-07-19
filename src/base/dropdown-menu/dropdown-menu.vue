<template>
  <div class="Urun-dropdown-menu" :class="size == 'sm' ? 'sm' : ''">
    <div
      class="zq-drop-list"
      v-drop="handleClick"
      v-if="handleEvent == 'click'"
    >
      <span @click="show = !show"
        >{{ dplLable
        }}<i class="iconfont iconxialajiantou" :style="iconStyle"></i
      ></span>
      <ul v-show="show">
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="onLiClick(index, $event)"
        >
          <a href="javascript:void(0)">{{ item[labelProperty] }}</a>
        </li>
      </ul>
    </div>
    <div
      class="zq-drop-list"
      @mouseenter="show = true"
      @mouseleave="show = false"
      v-if="handleEvent == 'hover'"
    >
      <span
        >{{ dplLable
        }}<i class="iconfont iconxialajiantou" :style="iconStyle"></i
      ></span>
      <ul ref="list" v-show="show">
        <li
          v-for="(item, index) in dataList"
          :key="index"
          @click="onLiClick(index, $event)"
        >
          {{ item[labelProperty] }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownList",
  data() {
    return {
      activeIndex: 0,
      show: false
    };
  },
  props: {
    dataList: {
      type: Array,
      default() {
        return [{ name: "全部" }];
      }
    },
    handleEvent: {
      type: String,
      default() {
        return "click";
      }
    },
    labelProperty: {
      type: String,
      default() {
        return "name";
      }
    },
    size: {
      type: String,
      default() {
        return "default";
      }
    }
  },
  directives: {
    drop: {
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
        el._vueClickOutside_ = documentHandler;
        document.addEventListener("click", documentHandler);
      },
      unbind: function(el, binding) {
        document.removeEventListener("click", el._vueClickOutside_);
        delete el._vueClickOutside_;
      }
    }
  },
  methods: {
    handleClick() {
      //下拉菜单
      this.show = false;
    },
    onLiClick(index) {
      let path = event.path || (event.composedPath && event.composedPath()); //兼容火狐和safari
      this.handleClick();
      this.activeIndex = index;
      this.$emit("change", {
        index: index,
        value: this.dataList[index]
      });
    }
  },
  computed: {
    dplLable() {
      return this.dataList[this.activeIndex][this.labelProperty];
    },
    iconStyle() {
      return this.show ? "color:#3598db" : "";
    }
  }
};
</script>


<style scoped lang="less">
@import "../../style/css/base.less";
.Urun-dropdown-menu {
  display: inline-block;
  .zq-drop-list {
    display: inline-block;
    min-width: 100px;
    position: relative;
    cursor: pointer;
    span {
      display: block;
      height: 28px;
      line-height: 28px;
      background: @module-color;
      border-radius: 15px;
      font-size: 14px;
      text-align: center;
      color: #333333;
      box-shadow: @box-shadow;
      color: @default-color;
      padding: 0 12px;
      i {
        margin-left: 6px;
        display: inline-block;
        font-size: 6px;
        float: right;
        margin-top: 1px;
      }
      &:hover {
        i {
          color: @f-bright-color;
        }
      }
    }
    ul {
      position: absolute;
      top: 40px;
      left: 0;
      width: 100%;
      margin: 0;
      padding: 0;
      box-shadow: @box-shadow;
      border-radius: 4px;
      li {
        list-style: none;
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        background: #ffffff;
        overflow: hidden;
        color: @default-color;
        a {
          text-decoration: none;
          color: @default-color;
        }
      }
      li:first-child {
        border-radius: 4px 4px 0 0;
      }
      li:last-child {
        border-bottom: none;
        border-radius: 0 0 4px 4px;
      }
      li:hover {
        background: @border-weak-color;
      }
      &::before {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        width: 0;
        height: 0;
        border-width: 6px;
        border-style: solid;
        top: -13px;
        border-color: transparent transparent @border-weak-color transparent;
      }
      &::after {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        content: "";
        width: 0;
        height: 0;
        border-width: 6px;
        border-style: solid;
        top: -12px;
        border-color: transparent transparent #fff transparent;
      }
    }
  }
  &.sm {
    .zq-drop-list {
      span {
        height: 22px;
        line-height: 22px;
        font-size: 12px;
      }
      ul {
        top: 32px;
        li {
          height: 22px;
          line-height: 22px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>