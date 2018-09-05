
//手机脱敏显示
function secret(str){
	 var reg = /(\d{3})\d{4}(\d{4})/
     var newstr = str.replace(reg, '$1****$2');
     return newstr
}









