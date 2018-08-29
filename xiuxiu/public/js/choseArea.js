
  $("#custom").click(function(){
     window.location.href = 'http://im.189.cn/cw/?cf=1&cid=8024&manid=910';
  });

  $("#orderSearch").click(function(){
      window.location.href = 'orderQueryPageNew.htm';
  });
  
  var areaGroup={};
    areaGroup["027"]="武汉市";
    areaGroup["0714"]="黄石市";
    areaGroup["0719"]="十堰市";
    areaGroup["0717"]="宜昌市";
    areaGroup["0710"]="襄阳市";
    areaGroup["0711"]="鄂州市";
    areaGroup["0724"]="荆门市";
    areaGroup["0712"]="孝感市";
    areaGroup["0716"]="荆州市";
    areaGroup["0713"]="黄冈市";
    areaGroup["0715"]="咸宁市";
    areaGroup["0722"]="随州市";
    areaGroup["0718"]="恩施自治州";
    areaGroup["0728"]="仙桃市";
    areaGroup["0703"]="潜江市";
    areaGroup["0702"]="天门市";
    areaGroup["0701"]="神农架林区";
    
  $(".areaList").find("ul").html('');
  $.each(areaGroup,function(key,val){
      $(".areaList").find("ul").append('<li data-val="'+key+'">'+val+'</li>');
  });

  $(".areaList ul").on('click','li',function(){
      var thisDataVal=$(this).attr('data-val');
      var uid = $('#uid').val();
      window.location.href="indexNew.htm?areaCode="+thisDataVal+"&uid="+uid;
  });
  
  function areaTxt(areaId){
         var oldText = areaGroup[areaId];
         //地区长度大于3隐藏
          if (oldText.length > 3) {  
                var newText = oldText.substring(0,3)+"..."; 
                $('.bcn .center-block span').html(newText);
           } else{
              $('.bcn .center-block span').html(oldText);
           } 
    }
