<template>
  <div class="Urun-formlist" v-cloak>
    <div class="list" :class="item.status?'':'error'" v-for="(item,index) in list" :key="index" :style="'width:'+width+'px;'">
      <span class="title"><i v-if="item.check" class="checked">*</i>{{item.title}}</span>
      <div>
        <div class="content">
        <i v-if="item.iconLeft && item.password" class="iconLeft iconfont" :class="item.iconLeft?(typeof(item.iconLeft)=='string'?item.iconLeft:'iconlock'):''"></i>
        <i v-if="item.iconLeft && item.username" class="iconLeft iconfont" :class="item.iconLeft?(typeof(item.iconLeft)=='string'?item.iconLeft:'iconuser'):''"></i>
        <i v-if="item.iconLeft && item.type=='time'" class="iconLeft iconfont" :class="item.iconLeft?(typeof(item.iconLeft)=='string'?item.iconLeft:'iconcalendar'):''"></i>
        <input
          v-if="item.type=='text'||item.type=='password'"
          :type="item.type"
          :placeholder="item.placeholder?item.placeholder:(item.maxLength?'请输入'+item.maxLength+'个字内的'+item.title:'请输入'+item.title)"
          :maxlength="item.maxLength"
          v-model="item.value"
          @keyup="KeyUpHandle(item,index)"
        />
        <div class="form-time" v-if="item.type=='time'" :class="format | inputCls">
            <input v-if="item.startTime!=null" type="text" class="form-time-start" :index="index" :value="item.startTime"/><span v-if="item.endTime!=null">至</span>
            <input v-if="item.endTime!=null" type="text" class="form-time-end"  :index="index" :value="item.endTime"/>
        </div>
        
        <div v-if="item.type=='dropdown'" class="dropdown-wrapper" v-drop="menuHandle" @click="showHanle(index)">
           <span :class="item.select?'':'noselect'" v-html="item.select?item.select:'-- 请选择 --'"></span>
           <ul v-if="item.list && item.list.length>0"  class="ul-dropdown-menu" v-show="item.show">
             <li v-for="(list,list_index) in item.list" :key="list_index" @click="LiHandleClick(index,list)"><a :href="list.link?list.link:'javascript:;'" v-text="list.text"></a></li>
           </ul>
        </div>
        <i v-if="item.password && item.iconRight" class="iconRight iconfont" :class="item.type=='text'?'iconeye':'iconeye-close'" @click="changePsw(index)"></i>
        <i v-else-if="item.iconRight" class="iconRight iconfont" :class="typeof(item.iconRight)=='string'?item.iconRight:(item.type=='dropdown'?'iconxialajiantou':'')"></i>
      </div>
      <span class="msg"><i v-if="!item.status">{{item.msg?item.msg:"请输入正确的字符"}}</i><i v-if="item.maxLength && item.status">{{item.value | countFilter}} /{{item.maxLength}}</i></span>
      </div>
    </div>
  </div>
</template>

<script>
// import $ from "jquery";
import "../../libs/datetimepicker/jquery.datetimepicker.min.css";
import "../../libs/jquery/jquery.min.js";
import "../../libs/datetimepicker/jquery.datetimepicker.full.min.js";
import Times from "../../style/js/calendar.js";
export default {
  data(){
    return{
      width:312,
      format:'Y-m-d H:i:s',
      list:[
        {
          type:'text',
          check:true,
          username:true,
          status:true,
          title:"用户名",
          placeholder:'',
          value:"",
          msg:null,
          maxLength:10,
          iconLeft:true,
          iconRight:true
        },
        {
          type:'password',
          password:true,
          status:true,
          title:"密码",
          placeholder:'',
          value:"",
          msg:null,
          maxLength:null,
          iconLeft:true,
          iconRight:true
        },
        {
          type:'dropdown',
          show:false,
          status:true,
          select:"",
          title:"下拉",
          list:[
            {text:"MENU1",link:null},
            {text:"MENU2",link:null},
          ],
          iconLeft:true,
          iconRight:true
        },
        {
          status:true,
          title:"日期选择",
          type:"time",
          startTime:"",
          endTime:"",
          iconLeft:true,
          iconRight:false
        }
      ]
    }
  },
  filters:{
    countFilter(value){
      return value.length;
    },
    inputCls(value){
      switch (value){
        case 'Y-m-d H:i' :
          return 'igs';
        case 'Y-m-d H' :
          return 'hour';
        case 'Y-m-d' :
          return 'date';
        default:
          return false;
      }
    }
  },
  directives:{
    drop: {
      bind: function(el, binding,arg, vnode) {
        function documentHandler(e) {
          if (el.contains(e.target)) {
            //检测目标元素是否包含在el元素中 contains() 检测包含
            return false; //跳出去，不执行下面的方法了
          }
          if (binding.expression) {
            binding.value(); 
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
  methods:{
    changePsw(index){
      var type = this.list[index].type;
      if(type=='text'){
        this.list[index].type = 'password';
      }
      if(type=='password'){
        this.list[index].type = 'text'
      }
    },
    showHanle(index){
      this.list[index].show = !this.list[index].show;
    },
    menuHandle(){
     this.list.forEach((item)=>{
       item.show=false;
     })
    },
    LiHandleClick(index,list){
      this.list[index].select = list.text;
    },
    KeyUpHandle(list,index){
      console.log(list)
    }
  },
  mounted(){
    var _this = this;
    Times(_this,_this.format);
  },
  created(){
    
  }
};
</script>
<style scoped lang="less">
@import "../../style/css/base.less";
[v-cloak]{display: none !important;}
.Urun-formlist {
  .list {
    display: inline-block;
    text-align: left;
    color: @i-weak-color;
    margin-right: 68px;
    vertical-align: top;
    background:#ffffff;
    span.title {
      font-size: 12px;
      .checked{
        color: @error-color;
      }
    }
    .content {
      min-width: 200px;
      height: 28px;
      position: relative;
      border-bottom: 1px solid @border-weak-color;
      input {
        border: none;
        outline: none;
        margin: 4px 0;
        font-size: 14px;
        color: @darken-color;
        &::placeholder {
          font-size: 14px;
          color: @i-weak-color;
        }
      }
      .form-time{
        font-size: 14px;
        input{
          width: 134px;
        }
        &.hour{
          input{
            width: 96px;
          }
        }
        &.date{
          input{
            width: 76px;
          }
        }
        &.igs{
          input{
            width: 114px;
          }
        }
      }
      .dropdown-wrapper{
        height: 28px;
        line-height: 28px;
        font-size: 14px;
        color: @darken-color;
        position: relative;
        cursor: pointer;
        .noselect{
          color:@i-weak-color;
        }
        .ul-dropdown-menu{
          margin: 0;
          padding:0;
          width: 100%;
          position: absolute;
          left: 0;
          top: 102%;
          z-index: 30;
          box-shadow:0px 1px 2px rgba(0,0,0,0.16);
          box-sizing: border-box;
          li{
            width: 100%;
            list-style: none;
             min-height: 24px;
             line-height: 24px;
             background: @module-color;
             a{
                color: @default-color;
                display: block;
                padding:0 20px;
                box-sizing: border-box;
                text-decoration: none;
                &:hover{
                  color: @default-color;
                }
             }
             &:hover{
               background: #E5EDF2;
             }
          }
        }
      }
      .iconfont {
        font-size: 16px;
        &.iconLeft {
          float: left;
          margin-top: 5px;
          margin-right: 5px;
        }
        &.iconRight {
          font-size: 12px;
          position: absolute;
          right: 0;
          top: 8px;
          cursor: pointer;
          z-index: 20;
          &:hover{
            color: @basic-color;
          }
        }
      }
      &:hover {
        border-color: @basic-color;
        .iconxialajiantou{
          color:@basic-color;
        }
      }
    }
    .msg {
      display: block;
      text-align: right;
      i{
        color: @i-weak-color;
        font-style: normal;
        font-size: 12px;
      }
    }
    &.error {
      .content {
        border-bottom-color: @error-color;
        &:hover {
          border-bottom-color: @error-color;
        }
      }
      .msg {
        text-align: left;
        i{
          color: @error-color;
        }
      }
    }
    &:last-child{
      margin-right: 0;
    }
  }
}
</style>