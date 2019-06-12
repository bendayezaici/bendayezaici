!function(){
	const $php="http://10.31.164.34/oppo/php/select.php";
	const $title=$('.promos-title h1');
	const $explace=$('.promos-title h2');
	const $src=$('picture .lazyload');
	
	$.ajax({
		url:$php,		
	}).done(function(d) {
		let arr =JSON.parse(d);
		for (var i =0;i < arr.length; i++) {
			$title.eq(i).html(arr[i].title);
			$explace.eq(i).html(arr[i].explace);	
			$src.eq(i).attr({src: arr[i].url });
		}
	})
	}();
