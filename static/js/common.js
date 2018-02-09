$(function () {
	// 모바일 네비게이션
	$('#navTab-m').on('click', function () {
		$(this).toggleClass('active');
		$('#gNav-m').toggleClass('active');
	});
});