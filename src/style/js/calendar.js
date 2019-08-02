  export default function Times(_this,formats) {
    if($('.form-time-start').length>0){
      $('.form-time-start').datetimepicker({
        format:formats,
        onShow:function( ct ){
          // this.setOptions({
          //   maxDate:jQuery('.f-time-end').val()
          // })
        },
        onClose:function(current_time,$input){ 
          //console.log($input.val())
          var index= $input[0].attributes.index.value;
          _this.list[index].startTime = $input.val();
        }
      });
    }
    
    if($('.form-time-end').length>0){
      $('.form-time-end').datetimepicker({
        format:'Y-m-d H:i:s',
        onShow:function( ct ){
          // this.setOptions({
          //   maxDate:jQuery('.f-time-end').val()
          // })
        },
        onClose:function(current_time,$input){
          var index= $input[0].attributes.index.value;
          _this.list[index].endTime = $input.val();
        }
      });
    }
  }
  
