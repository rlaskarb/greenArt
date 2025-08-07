$(function () {
	var key, value;

	function getParams() {
		// 현재 페이지의 url   ./product.html?pname=베이스
		var url = decodeURIComponent(location.href);
		// url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
		url = decodeURIComponent(url); //  'ex2.html?num=1'

		var params = "";
		// url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
		params = url.substring(url.indexOf("?") + 1, url.length); // 'abcdefg'.substring(2,40);=> 'cdef'
		// '문자열'.substring(시작인덱스 , 자를개수)
		// 'abcdefg'.substring(2 , 3) ->  'cde'
		// params = 'pname=베이스'

		//split() 함수는 문자열을 주어진 문자열 구분자나 정규식을 기준으로 나누어 배열로 변환하는 함수입니다.
		key = params.split("=")[0]; //'pname'
		value = params.split("=")[1]; // '베이스'
	}
	getParams(); //함수호출

	//ajax 처리

	$.ajax({
		url: "./data/sam.json",
		dataType: "json",
		success: function (data) {
			// json 파일에 연결이 완료되면 자동으로 호출되는 함수
			// data 매개변수 -> json 파일에 있는 모든 객체배열이 자동 저장된다.

			var useData = data.sam; //useData =>모든 객체배열이 담겨있다.

			function dataPrint(arr) {
				//검색 또는 전체상품 리스트 를 출력하는 함수
				// arr = useData /  newArray
				var txt = "<ul>";

				for (var i in arr) {
					var $Name = arr[i].Name;
					var $Price = arr[i].Price;
					var $Descript = arr[i].Descript;
					var $Image = arr[i].Image;

					txt += "<li>";
					txt += '<img src="' + $Image + '" alt="">';
					txt += "<dl>";
					txt += "<dt>" + $Name + "</dt>";
					txt += "<dd>" + $Price + "원</dd>";
					txt += "<dd>" + $Descript + "</dd>";
					txt += "</dl>";
					txt += '<a href="#" class="pop_open">more</a>'; //팝업창 열기 추가 태그
					txt += "</li>";
				}

				txt += "</ul>";

				$(".product_list").html(txt);
			}

			var newArray = [];
			var search_on = false; //검색 안되었을때 false , 검색 되었을때 true
			//초기실행, 함수호출

			if (value) {
				//다른페이지에서 검색어 입력을 하였을때...
				newArray = useData.filter(function (element) {
					return element.Name.includes(value); //상품명에 검색어가 포함되어 있는 배열을 return
				});
				//console.log(newArray);

				if (newArray.length != 0) {
					dataPrint(newArray);
				} else {
					//다른 페이지에서 검색어가 넘오지 않았을때
					$(".product_list").html(
						'<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>'
					);
				}
				search_on = true;
			} else {
				dataPrint(useData);
				search_on = false;
			}

			//검색버튼을 클릭했을때...

			$("#btn").click(function (e) {
				e.preventDefault();

				if ($("#title").val()) {
					//검색어가 있으면
					newArray = useData.filter(function (element) {
						//console.log($('#title').val());
						//return element.Name == $('#title').val();
						return element.Name.includes($("#title").val());
					});
					//console.log(newArray);
					if (newArray.length != 0) {
						//검색된 상품이 있으면!
						dataPrint(newArray);
					} else {
						//검색된 상품이 배열에 없으면.
						$(".product_list").html(
							'<span style="display:block;text-align:center; font-size:30px; color:red">검색된 상품이 없습니다</span>'
						);
					}
					search_on = true; // 검색어가 넘어왔다.
					$("#title").val("");
				} else {
					// 검색어가 없으면
					alert("검색어를 입력하세요!");
				}
			});

			$(".btn_all").click(function (e) {
				//모두보기 클릭시
				e.preventDefault();
				dataPrint(useData);
				search_on = false; // 아니다 넘어오지 않았다.
			});

			//팝업처리 함수
			var pop_txt = ""; // 팝업에 삽입할 태그르 만드는 변수
			function popchange(obj) {
				// obj => 클릭한 제품에 대한 객체만 전달
				pop_txt = ""; //이전에 만들어진 팝업에 삽입될 태그를 초기화(이전에 태그를 다 삭제)
				pop_txt += '<img src="' + obj.pop_img + '" alt="">';
				pop_txt += "<p>" + obj.Name + "</p>";
				pop_txt += "<span>" + obj.pop_tit + "</span>";

				$(".modal_box .pop_con").html(pop_txt);
			}

			//팝업창 열기
			// $(".pop_open") 는 계속해서 재 랜더링이 되어 만들어지기 때문에
			//$(".pop_open") 에 직접 이벤트를 연결합면 처리되지 않는다. 그래서 아래방법대로 해야한다.
			$(document).on("click", ".pop_open", function (e) {
				//json 파일을 불러와서 dom을 새로만들때... <a> 태그가 처리되지 않을때..
				e.preventDefault();
				$(".product .modal_box").fadeIn("slow"); //팝업창 열기
				ind = $(this).index(".pop_open"); // 0,1,2,3,4,5,6,7

				if (search_on == false) {
					//검색 안되었을때
					popchange(useData[ind]); //클릭한 인덱스에 맞는 객체만 전달
				} else if (search_on == true) {
					//검색 되었을때
					popchange(newArray[ind]);
				}
			});

			//팝업창 닫기
			$(".close_pop, .modal_box").click(function (e) {
				e.preventDefault();
				//모두보기 클릭시
				$(".product .modal_box").fadeOut("fast");
			});
		},
	});
});
