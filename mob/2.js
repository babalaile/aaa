
window.webtrendsAsyncInit=function(){ 

	var dcs=new Webtrends.dcs().init({ 
		dcsid:"webtrends",
		domain:"www.hb.10086.cn", 
		timezone:8, 
		i18n:true, 
		fpcdom:".10086.cn", 
		fpc:"WT_FPC",
		metanames: "",
		paidsearchparams: "gclid,ad_id",
		adimpressions:true,
		adsparam:"WT.ac",
		dcsdelay: 500,
		plugins:{ 
		} 
	});
	dcs.WT.branch="hubei";
	try{
		if(document.getElementById("webtrends_telnum")){dcs.WT.mobile = document.getElementById("webtrends_telnum").value?document.getElementById("webtrends_telnum").value:"null"}
		if(document.getElementById("webtrends_goods_id")){dcs.WT.pn_sku = document.getElementById("webtrends_goods_id").value;}
		if(document.getElementById("webtrends_ssoInfo")){dcs.WT.ssoInfo = document.getElementById("webtrends_ssoInfo").value;}
		if(document.getElementById("webtrends_weishopInfo")){dcs.WT.weishopInfo = document.getElementById("webtrends_weishopInfo").value;}
		if(document.getElementById("webtrends_broadbandInfo")){dcs.WT.broadbandInfo = document.getElementById("webtrends_broadbandInfo").value;}
		if(document.getElementById("webtrends_goodsIdListInCart")){dcs.WT.cart = document.getElementById("webtrends_goodsIdListInCart").value;}
	}catch(te){};

	dcs.track();
	try{
		$("*[id]").bind("click",function(){
			var s=this.id.split("_");
			if (s.length > 2){
				var i=this.id;
				setTimeout(function(){
					var f="";
					try{f= $("*[id*='Message_']").text();}catch (fe){}
					if (f.length>0 ){
						Webtrends.multiTrack({
							argsa: ["DCS.dcsuri","/event.gif","WT.event",i,"WT.errMsg",f],
							delayTime: 100
						});	
					}else
						Webtrends.multiTrack({
							argsa: ["DCS.dcsuri","/event.gif","WT.event",i],
							delayTime: 100
						});	
				},100);
			}
		});
	}catch(ide){
	}
};


if (!window._tag){
	function _wt() {};
	_wt.prototype.trackEvent = function() {	};
	_wt.prototype.E=function($h,$i){var e=$h.target||$h.srcElement;while(e.tagName&&(e.tagName.toLowerCase()!=$i.toLowerCase())){e=e.parentElement||e.parentNode;e=e||{};};return e;};
	_wt.prototype.P=function($h){var x=$h.clientX;var y=$h.clientY;$j=(document.documentElement!=undefined&&document.documentElement.clientHeight!=0)?document.documentElement:document.body;var $k=window.pageXOffset==undefined?$j.scrollLeft:window.pageXOffset;var $l=window.pageYOffset==undefined?$j.scrollTop:window.pageYOffset;return(x+$k)+"x"+(y+$l);};
	_wt.prototype.N=function($h){var id="";var $m="";var $c=["div","table"];var $n=$c.length;var i,e,$o;for(i=0;i<$n;i++){$o=$c[i];if($o.length){e=this.E($h,$o);id=(e.getAttribute&&e.getAttribute("id"))?e.getAttribute("id"):"";$m=e.className||"";if(id.length||$m.length)break;}};return id.length?id:$m;};Function.prototype.wtbind=function($p){var $q=this;var $r=function(){return $q.apply($p,arguments);};return $r;};
	_wt.prototype.dcsMultiTrack=function(){
		Webtrends.multiTrack({"argsa":arguments,delayTime: 100});	
	}
	var _tag=new _wt();
}

(function(){ 
var s=document.createElement("script"); s.async=true; s.src="https://www.hb.10086.cn/servicenew/resources/default/js/webtrends.min.js"; 
var s2=document.getElementsByTagName("script")[0]; s2.parentNode.insertBefore(s,s2); 
}()); 
