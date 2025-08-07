$(document).ready(function () {
	let timeOnOff;
	const imageCount = $(".eventMenu").langht;
	let cnt = 1;

	function move_gallery() {
		cnt++;
		$(".eventSlideMenu li").removeClass("current");
		$(".eventSlideMenu li:eq(" + (cnt - 1) + ")").addClass("current");

		if (cnt == 1) {
			$(".img02").animate({ left: 350 }, 450).clearQueue();
			$(".img03").animate({ left: 400 }, 450).clearQueue();
			$(".img04").animate({ left: 450 }, 450).clearQueue();
		} else if (cnt == 2) {
			$(".img02").animate({ left: 50 }, 450).clearQueue();
			$(".img03").animate({ left: 400 }, 450).clearQueue();
			$(".img04").animate({ left: 450 }, 450).clearQueue();
		} else if (cnt == 3) {
			$(".img02").animate({ left: 50 }, 450).clearQueue();
			$(".img03").animate({ left: 100 }, 450).clearQueue();
			$(".img04").animate({ left: 450 }, 450).clearQueue();
		} else if (cnt == 4) {
			$(".img02").animate({ left: 50 }, 450).clearQueue();
			$(".img03").animate({ left: 100 }, 450).clearQueue();
			$(".img04").animate({ left: 150 }, 450).clearQueue();
		}
		if (cnt == imageCount) {
			cnt = 0;
		}
	}

	timeOnOff = setInterval(move_gallery, 1000);

	$(".eventSlideMenu li:eq(0)").addClass("current");
	$(".eventSlideMenu li span").mouseenter(function (event) {
		const $target = $(event.$target);
		clearInterval(timeOnOff);
		$(".eventSlideMenu li ").removeClass("current");
		$(this).parent().addClass("current");

		if ($target.is(".buttonMenu01")) {
			$("");
		}
	});
});
