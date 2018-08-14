 (function($){

            $(document).ready(function(){
              
                var numConfig=
                  {
                    numberList:
                        [{name:"武汉市",code:"027"},{name:"黄石市",code:"0714"},{name:"十堰市",code:"0719"},{name:"宜昌市",code:"0717"},{name:"襄阳市",code:"0710"},{name:"鄂州市",code:"0711"},{name:"荆门市",code:"0724"},{name:"孝感市",code:"0712"},{name:"荆州市",code:"0716"},{name:"黄冈市",code:"0713"},{name:"咸宁市",code:"0715"},{name:"随州市",code:"0722"},{name:"恩施自治州",code:"0718"},{name:"仙桃市",code:"0728"},{name:"潜江市",code:"0728"},{name:"天门市",code:"0728"},{name:"神农架林区",code:"0719"}],
                    uid:"7788"
                 };
           
                var page={
                  
                    init:function(configData){
                        var numTypeGroup={};
                        var areaGroup={};

                        $.each(numConfig.numberList,function(key,val){
                            if($.type(val.code)!='undefined'){
                                areaGroup[val.code]=val.name;
                            }
                            if($.type(val.type)!='undefined'){
                                numTypeGroup[val.type]=configData.numberType[val.type];
                            }
                        });

                        var areaListObj=$(".areaList");
                        var areaCount=$.countOA(areaGroup);
                        areaListObj.find("ul").html('');
                        if(areaCount>0){
                            areaListObj.find("#selectBox").addClass('btn-group');
                            areaListObj.find("#selectBox div").show();
                            areaListObj.find("#selectBox ul").addClass('dropdown-menu').attr('role','menu');
                        }

                        $.each(areaGroup,function(key,val){
                            areaListObj.find("ul").append('<li data-val="'+key+'">'+val+'</li>');
                        });
                    }
                };
              
                $(".areaList ul").on('click','li',function(){
                    var thisDataVal=$(this).attr('data-val');
                    
                    window.location.href="https://www.baidu.com/?uid="+numConfig.uid+"&area="+thisDataVal+""

                    var oldText = $(this).html();
                    //地区长度大于3隐藏
                     if (oldText.length > 3) {  
                        var newText = oldText.substring(0,3)+""; 
                        $('#selectBox').first().find('div .txt').html(newText);
                      } 
                      else{
                        $('#selectBox').first().find('div .txt').html(oldText);
                      } 
                });
                page.init(numConfig);
            });
  })(jQuery)