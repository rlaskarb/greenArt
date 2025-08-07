$(document).ready(function () {
	// 메뉴가 고정될 기준점 (Y축 위치)
	var sticky_menu_pos = $(".year_menu").offset().top;

	// 스크롤 이벤트가 발생할 때마다 실행됩니다.
	$(window).on("scroll", function () {
		var scroll = $(window).scrollTop();

		// 1. 스크롤 위치가 메뉴 고정 위치보다 아래일 경우
		if (scroll >= sticky_menu_pos) {
			$("header").hide();
			$(".year_menu").addClass("fix");

			// --- 이 안에서만 스크롤 스파이를 실행합니다. ---
			var menuHeight = $(".year_menu").height();
			$(".year_content .con").each(function (index) {
				var sectionTop = $(this).offset().top;
				if (scroll >= sectionTop - menuHeight - 50) {
					$(".year_menu ul a").removeClass("spy");
					$(".year_menu ul a").eq(index).addClass("spy");
				} 
			});
		}
		// 2. 스크롤 위치가 메뉴 고정 위치보다 위일 경우 (상단)
		else {
			$("header").show();
			$(".year_menu").removeClass("fix");

			// --- 이 안에서만 스파이를 초기화합니다. ---
			$(".year_menu ul a").removeClass("spy");
		}
	}); // on scroll 함수는 여기서 끝나야 합니다.

	// 메뉴 클릭 이동 로직
	$(".year_menu ul a").click(function (event) {
		event.preventDefault();
		var index = $(this).parent().index();
		var target_section = $(".year_content .con").eq(index);
		var target_pos = target_section.offset().top - $(".year_menu").height();
		$("html,body").stop().animate({ scrollTop: target_pos }, "slow");
	});
});
