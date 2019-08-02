<template>
  <ul class="Urun-derail" v-cloak>
    <li
      v-for="(item, index) in list"
      class="list"
      :class="item.status ? (item.type ? 'open ' + item.type : 'open') : ''"
      @click="handleClick(index)"
    >
      <span class="derail"><i class="circle"></i></span>
      <span v-if="item.text" class="text" v-html="item.text"></span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [{ status: false, type:'info', text: "广州" }]
    };
  },
  methods: {
    handleClick(index) {
      this.list[index].status = !this.list[index].status;
    }
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{
  display: none !important;
}
.Urun-derail {
  display: inline-block;
  margin: 0;
  padding: 0;
  cursor: pointer;
  .list {
    list-style: none;
    display: inline-block;
    margin-right: 22px;
    &::selection{
        background: transparent;
      }
    .derail {
      display: inline-block;
      width: 25px;
      height: 12px;
      border-radius: 6px;
      background: #a0b0bf;
      position: relative;
      transition: all 0.2s;
      i.circle {
        display: inline-block;
        width: 18px;
        height: 18px;
        border-radius: 50%;
        background: #ffffff;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.16);
        position: absolute;
        left: -9px;
        top: -3px;
        transition: all 0.2s;
      }
      &::selection{
        background: transparent;
      }
    }
    .text {
      font-size: 14px;
      margin-left: 6px;
      color: @default-color;
      &::selection{
        background: transparent;
      }
    }
    &.open {
      .derail {
        background: fadeout(hsla(204, 70%, 53%, 1),40%);
        i.circle {
          left: 16px;
          background: @basic-color;
        }
      }
      &.info {
        .derail {
          background: fadeout(hsla(207, 90%, 54%, 1),40%);
          i.circle {
            background: @msg-color;
          }
        }
      }
      &.warning {
        .derail {
           background: fadeout(hsla(49, 100%, 48%, 1),40%);
          i.circle {
            background: @warn-color;
          }
        }
      }
      &.error {
        .derail {
          background: fadeout(hsla(4, 90%, 58%, 1),40%);
          i.circle {
            background: @error-color;
          }
        }
      }
      &.secondary {
        .derail {
          background: fadeout(hsla(340, 100%, 63%, 1),40%);
          i.circle {
            background: @negative-color;
          }
        }
      }
      &.success {
        .derail {
           background: fadeout(hsla(122, 39%, 49%, 1),40%);
          i.circle {
            background: @success-color;
          }
        }
      }
    }
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>