$(function () {
	$.ajax({
		url: "./sam.json",
		dataType: "json",
		success: function (data) {
			var useData = data.sam;

			function dataPrint(arr) {
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
					txt += "</li>";
				}

				txt += "</ul>";

				$(".product_list").html(txt);
			}

			//초기실행, 함수호출
			dataPrint(useData);

			$("#btn").click(function () {
				var newArray = useData.filter(function (element) {
					return element.Name.includes($("#title").val());
				});

				dataPrint(newArray);
			});

			$(".btn_all").click(function () {
				//모두보기
				dataPrint(useData);
			});

			$(".s1").click(function () {
				var newArray2 = useData.filter(function (element) {
					return element.Type == "립스틱";
				});

				dataPrint(newArray2);
			});

			$(".s2").click(function () {
				var newArray3 = useData.filter(function (element) {
					return element.Type == "스킨";
				});

				dataPrint(newArray3);
			});
		},
	});
});
