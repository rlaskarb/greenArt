// JavaScript Document

// $(document).ready(function () {
// 	var position = 0; //최초위치
// 	var movesize = 3; //이동 크기
// 	var timeonoff;

// 	$(".partnerBox ul").after($(".partnerBox ul").clone()); //복재
// 	// $('가져다 놓을 태그').after('기준태그');

// 	function partnerMove() {
// 		position -= movesize; // 3씩 감소
// 		$(".partnerBox").css("left", position);

// 		if (position < -945) {
// 			$(".partnerBox").css("left", 0);
// 			position = 0;
// 		}
// 	}

// 	timeonoff = setInterval(partnerMove, 100);

// 	$(".partnerBox").hover(
// 		function () {
// 			clearInterval(timeonoff);
// 		},
// 		function () {
// 			timeonoff = setInterval(partnerMove, 100);
// 		}
// 	);
// });

$(document).ready(function () {
	let position = 0;
	const movesize = 10; //속도,이동크기
	let timeonoff;

	// 태그의 복제
	//- 해당태그를 복제해서 특정태그 아래에 배치
	//$('가져다가 놓을 태그').after($('기준태그'))
	$(".partnerBox ul").after($(".partnerBox ul").clone());

	function partnerMove() {
		position -= movesize;
		$(".partnerBox").css("left", position);

		if (position < -945) {
			$(".partnerBox").css("left", 0);
			position = 0;
		}
	}

	timeonoff = setInterval(partnerMove, 100);

	$(".partnerBox").hover(
		function () {
			clearInterval(timeonoff);
		},
		function () {
			timeonoff = setInterval(partnerMove, 100);
		}
	);
});
