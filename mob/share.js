// 数据初始化
function data_init(url,sahreLink,desc,title){
	imgUrl = url;
	lineLink = sahreLink;
	descContent = desc;
	sharetitle = title;
}
//当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
	// 发送给好友;
	WeixinJSBridge.on('menu:share:appmessage', function(argv) {
		WeixinJSBridge.invoke('sendAppMessage', {
			"appid" : "",
			"img_url" : imgUrl,
			"img_width" : "640",
			"img_height" : "640",
			"link" : lineLink,
			"desc" : descContent,
			"title" : sharetitle
		}, function(res) {

		});
	});

	// 分享到朋友圈;
	WeixinJSBridge.on('menu:share:timeline', function(argv) {
		WeixinJSBridge.invoke('shareTimeline', {
			"img_url" : imgUrl,
			"img_width" : "640",
			"img_height" : "640",
			"link" : lineLink,
			"desc" : descContent,
			"title" : descContent
		}, function(res) {
		});
	});
}, false);