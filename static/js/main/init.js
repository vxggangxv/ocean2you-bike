$(function () {

	//	브라우저 풀너비 배경
	var winWd = $(window).width();
	var winHt = $(window).height();
	$("#mainBg").css({
		width: winWd,
		height: winHt
	});
	//	반응형 브라우저 풀너비 배경
	$(window).resize(function () {
		var winWd = $(window).width();
		var winHt = $(window).height();
		$("#mainBg").css({
			width: winWd,
			height: winHt
		});
	});

	bgAnimation("#bgBox");
	//	setInterval(function() {
	//		bgAnimation("#bgBox");
	//	},7000);


	$('.smallImg a').click(function () {
		var path = $(this).attr('href');
		$('#largeImg > img').attr({
			src: path
		});

		$('#largeImg > img').css('opacity', '0')
			.stop()
			.animate({
				opacity: 1
			}, 1000);
		return false;
	});

});

function bgAnimation(itm) {
	console.log('hi');

	$(itm).children("li").eq(0).addClass("active");



}