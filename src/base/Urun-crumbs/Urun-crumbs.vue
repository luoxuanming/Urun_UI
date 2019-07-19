<template>
  <ul class="Urun-crumbs" v-if="list.length>0">
    <li v-for="(item, index) in list" class="li-item">
      <a :href="item.link?(index==(list.length-1)?'javascript:;':item.link):'javascript:;'">{{item.text}}</a><span class="line">/</span>
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          text: "个人中心",
          link: "index.html"
        }
      ]
    };
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
.Urun-crumbs {
  display: inline-block;
  white-space: nowrap;
  padding:0;
  margin:0;
  .li-item {
    display: inline-block;
    list-style: none;
    font-size: 14px;
    a {
      color: @bright-color;
      text-decoration: none;
      &:link,
      &:visited,
      &:hover,
      &:active {
        color: @bright-color;
      }
      &:hover {
        text-decoration: underline;
      }
    }
    span.line {
      color: @default-color;
      margin: 0 10px;
      font-size: 16px;
      vertical-align: middle;
    }
    &:last-child {
      a,
      span.line {
        color: @default-color;
      }
      a {
        text-decoration: none;
        &:link,
        &:visited,
        &:hover,
        &:active {
          color: @default-color;
        }
      }
      span.line {
        display: none;
      }
    }
  }
}
</style>