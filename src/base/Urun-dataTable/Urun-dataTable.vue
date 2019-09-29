<template>
  <div class="Urun-dataTable" v-cloak>
    <table class="Urun-dataTable-table" :class="tableCls">
      <thead v-if="thead.list.length > 0">
        <tr>
          <th
            v-for="(item, index) in thead.list"
            :key="index"
            :class="item.field?item.field:''"
            :style="item.width ? 'width:' + item.width + 'px;' : ''"
            v-html="item.text"
          ></th>
        </tr>
      </thead>
      <tbody v-if="tbody.list.length > 0">
        <tr v-for="(tr, tr_index) in tbody.list">
          <td v-for="(item, index) in tr.cols" :style="tbody.nowrap?'white-space: nowrap;overflow:hidden;':''"  :class="item.field?item.field:''">
            <span v-if="item.text" v-html="item.text" :title="item.text"></span>
            <a
              v-if="item.link"
              :href="item.link.url ? item.link.url : 'javascript:;'"
              v-html="item.link.text"
              :title="item.link.text"
            ></a>
          </td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      stripe: {
        odd: true//隔行变色
      },
      thead: {
        list: [
          { field:'xuhao',width: 100, text: "title1" },
          { field:'usernmae',text: "title2" },
          { text: "title3" },
          { text: "title4" },
          { text: "title5" }
        ]
      },
      tbody: {
        nowrap: true,//是否换行
        list: [
          {
            cols: [
              {
                text: "1"
              },
              {
                link: {
                  text: "台湾花莲发生6级以上强震 苏贞昌指示开设灾害应变中心1",
                  url: null
                }
              },
              {
                text: "新浪网"
              },
              {
                text: "新浪网"
              },
              {
                text: "2018-08-28 12:14"
              }
            ]
          }
        ]
      }
    };
  },
  computed: {
    tableCls() {
      var strhover = " table-hover";
      if (this.stripe) {
        if (this.stripe.odd) {
          return this.hover ? "stripe" + strhover : "stripe";
        } else {
          return this.hover ? "stripe" + strhover : "stripe-even";
        }
      } else {
        return "";
      }
    }
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak] {
  display: none !important;
}
.Urun-dataTable {
  position: relative;
  width: 100%;
  min-height: 312px;
  box-shadow: 1px 1px 6px rgba(185, 206, 223, 0.32);
  overflow: auto;
  .Urun-dataTable-table {
    width: 100%;
    border-collapse: collapse;
    tr {
      border-bottom: 1px solid @border-weak-color;
    }
    thead,
    tbody {
      tr {
        td,
        th {
          a {
            text-decoration: none;
            color: @darken-color;
            &:hover {
              text-decoration: underline;
              color: @basic-color;
            }
          }
        }
      }
    }

    th,
    td {
      font-weight: normal;
      font-size: 14px;
      box-sizing: border-box;
      max-width: 0;
      text-overflow: ellipsis;
    }
    th {
      padding: 16px 0;
    }
    td {
      padding: 11px 0;
    }

    &.stripe {
      thead {
        tr {
          &:nth-child(odd) {
            background: @border-weak-color;
          }
        }
      }
      tbody {
        tr {
          &:nth-child(even) {
            background: @border-weak-color;
          }
        }
      }
    }
    &.stripe-even {
      thead {
        tr {
          &:nth-child(even) {
            background: @border-weak-color;
          }
        }
      }
      tbody {
        tr {
          &:nth-child(odd) {
            background: @border-weak-color;
          }
        }
      }
    }
    &.table-hover {
      tr:hover {
        background: @border-weak-color;
      }
    }
  }
}
</style>