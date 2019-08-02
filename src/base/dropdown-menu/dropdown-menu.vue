<template>
  <div class="Urun-toolbar-formlist" v-cloak>
    <div class="list" v-for="(item,index) in list">
      <div class="drop-wrapper" v-if="item.type=='drop'">
        <span v-if="item.title" class="title" :class="size == 'sm' ? 'small' : ''" v-html="item.title+'：'"></span>
        <div class="Urun-dropdown-menu" :class="size == 'sm' ? 'sm' : ''">
          <div
            class="zq-drop-list"
            v-drop="handleClick"
            v-if="handleEvent == 'click'"
          >
            <span @click="item.show = !item.show"
              >{{ item.select?item.select:'请选择'
              }}<i class="iconfont iconxialajiantou" :style="iconStyle"></i
            ></span>
            <ul v-show="item.show">
              <li
                v-for="(list, list_index) in item.dataList"
                :key="list_index"
                @click="onLiClick(index,list_index, $event)"
              >
                <a :href="item.link?item.link:'javascript:;'">{{ list[item.labelProperty] }}</a>
              </li>
            </ul>
          </div>
          <div
            class="zq-drop-list"
            @mouseenter="item.show = true"
            @mouseleave="item.show = false"
            v-if="handleEvent == 'hover'"
          >
            <span
              >{{  item.select?item.select:'请选择'
              }}<i class="iconfont iconxialajiantou" :style="iconStyle"></i
            ></span>
            <ul ref="list" v-show="item.show" v-if="item.dataList.length>0">
              <li
                v-for="(list, list_index) in item.dataList"
                :key="list_index"
               @click="onLiClick(index,list_index, $event)"
              >
                <a :href="item.link?item.link:'javascript:;'">{{ list[item.labelProperty] }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="input-wrapper" v-if="item.type=='text'">
        <span v-if="item.title" class="title" :class="size == 'sm' ? 'small' : ''" v-html="item.title+'：'"></span>
        <form class="form" :class="size == 'sm' ? 'small' : ''"><input type="text" :placeholder="item.placeholder?item.placeholder:'请输入'+item.title"></form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DropDownList",
  data() {
    return {
      list:[
        {
          type:'drop',
          title:"用户名",
          dataList:[{name: "选项一A"},{name: "选项二B2"}],
          handleEvent:'click',
          labelProperty:'name',
          link:null,
          select:"",
          show:false
        },
        {
          type:'text',
          title:"用户名",
          placeholder:null
        }
      ]
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
        return "hover";
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
    handleClick(index1,index) {
      //下拉菜单
     this.list.forEach((item)=>{
        item.show=false;
     });
     if(index1!=null&&index!=null){
      var labelProperty= this.list[index1].labelProperty;
      this.list[index1].select=this.list[index1].dataList[index][labelProperty];
     }
      
    },
    onLiClick(index1,index) {
      let path = event.path || (event.composedPath && event.composedPath()); //兼容火狐和safari
      this.handleClick(index1,index);
    }
  },
  computed: {
    dplLable() {
      return this.list[this.labelProperty];
    },
    iconStyle() {
      return this.show ? "color:#3598db" : "";
    }
  }
};
</script>


<style scoped lang="less">
@import "../../style/css/base.less";
.Urun-toolbar-formlist {
  display: inline-block;
  .list {
    display: inline-block;
    vertical-align: middle;
    margin-right: 20px;
    .title{
      font-size: 14px;
      color: @i-weak-color;
      vertical-align: middle;
      &.small{font-size: 12px;}
    }
    .Urun-dropdown-menu {
      display: inline-block;
      vertical-align: middle;
      .zq-drop-list {
        display: inline-block;
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
          padding-right: 9px;
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
          top: 100%;
          left: 0;
          width: 100%;
          margin: 0;
          padding: 0;
          border-radius: 4px;
          z-index: 20;
          padding-top: 13px;
          li {
            list-style: none;
            height: 28px;
            line-height: 28px;
            font-size: 14px;
            background: #ffffff;
            overflow: hidden;
            color: @default-color;
            box-shadow: @box-shadow;
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
            top: 0px;
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
            top: 1px;
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
            top: 100%;
            li {
              height: 22px;
              line-height: 22px;
              font-size: 12px;
            }
          }
        }
      }
    }
    .form{
      display: inline-block;
      border-bottom:1px solid @border-weak-color;
      input{
        border: none;
        outline: none;
        color: @darken-color;
        font-size: 14px;
        margin: 6px 0;
        &::placeholder{
          color: @i-weak-color;
        }
      }
      &.small{
        input{
          font-size: 12px;
          margin:0;
          margin-bottom: 3px;
        }
      }
    }
  }
}
</style>