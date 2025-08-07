$(document).ready(function () {
	$.ajax({
		url: "sam.json",
		dataType: "json",
		success: function (data) {
			const useData = data.sam;

			const listItems = $.map(useData, function (item) {
				return `
                        <li>
                        <img src="${item.Image}" alt"">
                        <dl>
                        <dt>${item.Name}</dt>
                        <dd>${item.Price}</dd>
                        <dd>${item.Descript}</dd>
                        </dl>
                        </li>
                `;
			});
			$(".product_list").html("<ul>" + listItems.join("") + "</ul>");
		},
	});
});
