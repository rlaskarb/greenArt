const xhr = new XMLHttpRequest(); // XMLHttpRequest 객체를 생성한다.

xhr.onload = function () {
	if (xhr.status === 200) {
		const responseObject = JSON.parse(xhr.responseText);

		// json 데이터에서  학생배열(students)을 가져옵니다.
		const studentsArray = responseObject.students;

		// 학생 배열을 `map`으로 순회하며 각 학생(student)을 <tr> 태그로 변환합니다.
		const newTableRows = studentsArray
			.map(function (student) {
				return `
						<tr>
							<td>${student.num}</td>
							<td>${student.name}</td>
							<td>${student.age}</td>
							<td>${student.gender}</td>
							<td>${student.hp}</td>
						</tr>`;
			})
			.join("");

		//html 에서 `<tbody>`를 찾아 생선된 <tr>들을 한번에 넣는다.
		document.querySelector("#content tbody").innerHTML = newTableRows;
	} else {
		console.error("실패!", xhr.status);
	}
};
xhr.open("GET", "data/data.json", true); // 요청을 준비한다.
xhr.send(null); // 요청을 전송한다.
