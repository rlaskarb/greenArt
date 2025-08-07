// $(document).ready(function () {
// 	var memo = ["이미지 내용1", "이미지 내용2", "이미지 내용3", "이미지 내용4"];

// 	$(".pop .pop_menu a").click(function (e) {
// 		e.preventDefault();

// 		var ind = $(this).index(".pop .pop_menu a"); // 0 1 2 3

// 		$(".pop .modal_box").fadeIn("fast");
// 		$(".pop .popup").fadeIn("slow");

// 		$(".pop .popup img").attr("src", "./images/big" + (ind + 1) + ".jpg");
// 		$(".pop .popup p").text(memo[ind]);
// 	});

// 	$(".close_btn,.pop .modal_box").click(function (e) {
// 		e.preventDefault();
// 		$(".pop .modal_box").hide();
// 		$(".pop .popup").hide();
// 	});
// });

$(document).ready(function () {
	const memo = ["내용1", "내용2", "내용3", "내용4"];

	$(".pop_menu a").click(function (event) {
		event.preventDefault();

		const cont = $(this).index(".pop_menu a");

		$(".modal_box").fadeIn("slow");
		$(".popup").fadeIn("slow");
		$(".popup img").attr("src", "./images/big" + (cont + 1) + ".jpg");
		$(".popup p").text(memo[cont]);

		$(".close_btn , modal_box").click(function (event) {
			event.preventDefault();
			$(".modal_box").hide();
			$(".popup").hide();
		});
	}); 
});
