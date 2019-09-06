$(".delete").on("click",function(){
  $(this).parent().parent().remove();
})
var test = "$result3" ;
var options = "<select name='station_id'><?phpfor($i=1;$i<=mysqli_num_rows($result3);$i++){$rs3=mysqli_fetch_row($result3);?><option value='<?php echo $rs3[1]?>'><?php echo $rs3[0]?></option><?php}?></select>"

//var station = $("#station").val();

var td1 = "";
var td2 = "";
var array=[1,2,3,4];
$(".edit").on("click",function(){
  td1 = $(this).parent().prev().prev().text();
  $(this).parent().prev().prev().text("");
  $(this).parent().prev().prev().html("<input value='"+td1+"' name='Salary'>");
  td2 = $(this).parent().prev().text();
  $(this).parent().prev().text("");
  $(this).parent().prev().html(options);
  $(this).parent().html("<button class='conform'>確認</button>");
  $(".conform").on("click",function(){
    location.reload();
  })
})

$("#dialog1").css("display","none");
$("#msg1").css("display","none");
$("#dialog1").css("opacity","0.5");

function closeDialog1(){
$("#dialog1").css("display","none");
$("#msg1").css("display","none");
}
function showDialog1(){
   /*秀出對話框*/
$("#dialog1").css("display","");
$("#msg1").css("display","");
        
var w=$("#msg1").width();
var h=$("#msg1").height();
var _top=_sh/2-h/2+$(document).scrollTop();//更好的方法 使用jQuery解決
var _left=_sw/2-w/2;
   /*設定視窗出現位置*/  
$("#msg1").css("top",_top+'px');
$("#msg1").css("left",_left+'px');
}

$("#dialog2").css("display","none");
$("#msg2").css("display","none");
$("#dialog2").css("opacity","0.5");

function closeDialog2(){
$("#dialog2").css("display","none");
$("#msg2").css("display","none");
}
function showDialog2(){
   /*秀出對話框*/
$("#dialog2").css("display","");
$("#msg2").css("display","");
        
var w=$("#msg2").width();
var h=$("#msg2").height();
var _top=_sh/2-h/2+$(document).scrollTop();//更好的方法 使用jQuery解決
var _left=_sw/2-w/2;
   /*設定視窗出現位置*/  
$("#msg2").css("top",_top+'px');
$("#msg2").css("left",_left+'px');
}
