$(function () {
	tabDisplay('#courseListArea .courseList');

});

function tabDisplay(itm) {
	//	클릭이벤트
	$(itm).children('li').on('click', function () {
		var $itmLi = $(itm).children('li')
		var idx = $(this).index();
		//	console.log(idx);
		$itmLi.eq(idx).addClass('on').siblings().removeClass('on');

		$(itm).next().children('li').eq(idx).addClass('on').siblings().removeClass('on');
	});

}
