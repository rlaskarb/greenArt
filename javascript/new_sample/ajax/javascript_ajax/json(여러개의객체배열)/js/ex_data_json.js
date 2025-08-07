const xhr = XMLHTTPRequsest();
let cnt = 0;
let total = 0;

xhr.onload = function () {
	if (xhr.status === 200) {
		const responseObject = JSON.parse(xhr.responseText);

		const eventsArry = responseObject.events;

		const newEvents = eventsArry.map(function (event) {
			return `<ul>
            <li>
            <img src="${event.map}" art="${event.data}">
            </li>
            </ul>`;
		});
	}
};
