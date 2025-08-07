$(function () {
	// 'data.html#Modeling'
	var fragment = $(".current").attr("href");

	// replace(값,바꿀값) // 중요한코드네 // 파일명.html #아디명
	fragment = fragment.replace("#", " #");
	$("#details").load(fragment);

	$("#sessions li a").on("click", function (e) {
		e.preventDefault();
		fragment = this.href; // => $(this).attr('href)

		fragment = fragment.replace("#", " #");
		$("#details").load(fragment);

		$(".current").removeClass("current");

		$(this).addClass("current");
	});
});
