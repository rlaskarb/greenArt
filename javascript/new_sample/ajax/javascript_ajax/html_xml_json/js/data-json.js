var xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function () {
	if (xhr.status === 200) {
		const responseObject = JSON.parse(xhr.responseText);

		const newContent = responseObject.events
			.map(function (event) {
				return `
      <div class="event">
      <img src="${event.map}" alt="${event.location}">
      <p><b>${event.location}</b><br>${event.date}</p>
      </div>`;
			})
			.join("");

		document.getElementById("content").innerHTML = newContent;
	} else {
		console.log("실패!");
	}
};
xhr.open("GET", "data/data.json", true); // 요청을 준비한다.
xhr.send(null); // 요청을 전송한다
