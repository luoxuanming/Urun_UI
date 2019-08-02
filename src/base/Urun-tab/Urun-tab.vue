<template>
  <ul class="Urun-tab" :class="type" v-cloak>
    <li
      v-for="(item, index) in list"
      :class="current==index?'active':''"
      @click="handleClick(index)"
    >
      <a :href="item.link?item.link:'javascript:;'" v-html="item.text"></a>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      current: 0,
      type:'default',
      list: [{ text: "时事专题", link: null },{ text: "时事专题2", link: null }]
    };
  },
  methods: {
    handleClick(index) {
      this.current = index;
    }
  },
  created(){
    
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{
  display: none !important;
}
.Urun-tab {
  display: inline-block;
  background: @module-color;
  margin:0;
  padding:11px 10px;
  max-height: 44px;
  box-sizing: border-box;
  li {
    list-style: none;
    display: inline-block;
    margin-right: 26px;
    a {
      text-decoration: none;
      font-size: 14px;
      color: @default-color;
      padding: 13px 7px;
      box-sizing: border-box;
      border-bottom: 2px solid transparent;
    }
    &.active {
      a {
        color: @basic-color;
        border-color: @basic-color;
      }
    }
    &:last-child{
      margin-right: 0;
    }
  }
  &.style1{
    border-bottom: 2px solid @border-weak-color;
  }
  &.style2{
    border-top: 2px solid @basic-color;
  }
}
</style>