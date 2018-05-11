$(function() {
 
	
	/*瀑布流初始化设置*/
	var $grid = $('.grid').masonry({
		itemSelector : '.grid-item',
		gutter:10
	});
	// layout Masonry after each image loads
	$grid.imagesLoaded().done(function() {
		$grid.masonry('layout');
	});
	var pageIndex = 1;
	var dataFall = [];
	var totalItem = 10;
	var totalPage = $("#totalPage").val();
	var flagLoad = true;  //只有当页面请求加载成功之后，才可以再次请求，避免重复请求后台数据
	if(pageIndex >= totalPage){
		$(".more-a").hide();
	}
	$(window).scroll(
			function() {
				$grid.masonry('layout');
				var scrollTop = $(this).scrollTop();
				var scrollHeight = $(document).height();
				var windowHeight = $(this).height();
				if(pageIndex < totalPage && flagLoad){
					if (scrollTop + windowHeight == scrollHeight) {
						$.ajax({
							dataType : "json",
							type : 'get',
							url : 'artNextPage.htm?page=' + pageIndex
									+ "&categoryId=" + $("#artCategoryId").val(),
							success : function(result) {
								dataFall = result.art;
								flagLoad = false;
								setTimeout(function() {
									appendFall();
								}, 800);
							},
							error : function(e) {
								console.log('请求失败');
							}
	
						});
					}
				}else{
					$(".more-a").hide();
				}

			});

	function appendFall() {
		var cat = $("#artCategoryId").val();
		var width = $("width").val();
		$.each(dataFall, function(index, value) {
			var dataLength = dataFall.length;
			$grid.imagesLoaded().done(function() {
				$grid.masonry('layout');
			});
			var $griDiv = $('<div class="grid-item item">');
			var $a = $("<a>").attr("onclick", "art.detail( '" + value.artId +"' , '"+cat+"','"+width+ "' )");
			$a.appendTo($griDiv);
			var $img = $("<img class='item-img'>");
			$img.attr('src', uploadServer + "/" + value.attachment + "?x-oss-process=image/resize,m_lfit,h_300,w_300/sharpen,100").appendTo($a);
			var $section = $('<section class="section-p">');
			$section.appendTo($griDiv);
			var $p1 = $("<p class='title-p'>");
			$p1.html(value.artName).appendTo($section);
			var $p2 = $("<p class='name-p'>");
			$p2.html(value.artist!=null?value.artist:"佚名").appendTo($section);
			var $p3 = $("<p class='price-p'>");
			
			$p3.html(price).appendTo($section);
			var $items = $griDiv;
			if(index == dataFall.length -1){
				flagLoad = true;
				pageIndex++;
			}
			$items.imagesLoaded().done(function() {
				$grid.masonry('layout');
				$grid.append($items).masonry('appended', $items);
			});
		});

	};
	
});
