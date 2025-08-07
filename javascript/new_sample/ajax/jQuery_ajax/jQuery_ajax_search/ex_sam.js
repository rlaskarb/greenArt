$(document).ready(function () {
	function dispalyAllProducts() {
		$.ajax({
			url: "./sam.json",
			dataType: "json",
			success: function (data) {
				const useData = data.sam;
				const listItems = $.map(useData, function (item) {
					// 가격에 콤마추가
					const price = Number(item.Price).toLocaleString();

					return `
                        <li>
                        <img src="${item.Image}" alt="">
                        <dl>
                        <dt>${item.Name}</dt>
                        <dd>${price} 원</dd>
                        <dd>${item.Descript}</dd>
                        </dl>
                        </li>
                    
                    `;
				});
				$(".product_list").html("<ul>" + listItems.join("") + "</ul>");
			},
		});
	}
	dispalyAllProducts();
});
