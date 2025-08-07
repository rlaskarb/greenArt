$(document).ready(function () {
	let i = 0;
	let useData = [];

	function dataPrint() {
		$.ajai({
			url: "sam.json",
			dataType: "json",
			success: function (data) {
				useData = data.sam;
				const lisItems = $.map(useData, function (item) {
					return `
                        <li>
                        <img src="${item.Image}" alt="">
                        <dl>
                        <dt>${item.Name}</dt>
                        <dd>${item.Price} 원 </dd>
                        <dd>${item.Descript}</dd>
                        </dl>
                        </li>

                    `;
				});
				$(".product_list").html("<ul>" + lisItems.join("") + "</ul>");
			},
		});
	}
});
