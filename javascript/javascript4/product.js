document.addEventListener("DOMContentLoaded", function () {
  var product_con = document.getElementById("product_con");
  var product = [
    {
      imgSrc: "product01.png",
      pName: "홈런볼",
      pType: "스낵",
      calorie: "560",
      dCse: "초코가 들어있는 비스킷",
    },
    {
      imgSrc: "product02.png",
      pName: "구운감자",
      pType: "스낵",
      calorie: "560",
      dCse: "구운감자",
    },
    {
      imgSrc: "product03.png",
      pName: "계란과자",
      pType: "스낵",
      calorie: "560",
      dCse: "계란과자",
    },
    {
      imgSrc: "product04.png",
      pName: "맛동산",
      pType: "스낵",
      calorie: "560",
      dCse: "맛동산",
    },
    {
      imgSrc: "product05.png",
      pName: "뭐야이거",
      pType: "스낵",
      calorie: "560",
      dCse: "초코가 들어있는 비스킷",
    },
    {
      imgSrc: "product05.png",
      pName: "티피",
      pType: "스낵",
      calorie: "560",
      dCse: "초코가 들어있는 비스킷",
    },
    {
      imgSrc: "product07.png",
      pName: "자일릴톨",
      pType: "스낵",
      calorie: "560",
      dCse: "껌",
    },
    {
      imgSrc: "product08.png",
      pName: "연양갱",
      pType: "스낵",
      calorie: "560",
      dCse: "팥 영양갱",
    },
    {
      imgSrc: "product09.png",
      pName: "감자칩",
      pType: "스낵",
      calorie: "560",
      dCse: "포테토칩 라이벌",
    },
    {
      imgSrc: "product10.png",
      pName: "왕만두",
      pType: "스낵",
      calorie: "560",
      dCse: "고향만두",
    },
    {
      imgSrc: "product11.png",
      pName: "고기만두",
      pType: "스낵",
      calorie: "560",
      dCse: "고기 만두",
    },
    {
      imgSrc: "product12.png",
      pName: "오사쯔",
      pType: "스낵",
      calorie: "560",
      dCse: "고구마과자",
    },
    {
      imgSrc: "product13.png",
      pName: "자가비",
      pType: "스낵",
      calorie: "560",
      dCse: "포카칩 라이벌",
    },
    {
      imgSrc: "product14.png",
      pName: "고향만두",
      pType: "만두",
      calorie: "560",
      dCse: "진짜지 고향 만두",
    },
  ];

  var output = "";

  output += "<ul>";

  for (var i = 0; i < product.length; i++) {
    output += "<li>";

    output += '<img src="./images/' + product[i].imgSrc + '" alt="">';

    output += "<dl>";

    output += "<dt>" + product[i].pName + "</dt>";
    output += "<dd>종류 : " + product[i].pType + "</dd>";
    output += "<dd>칼로리 : " + product[i].calorie + "</dd>";
    output += "<dd>설명 : " + product[i].dCse + "</dd>";

    output += "</dl>";

    output += "</li>";
  }
  output += "</ul>";

  product_con.innerHTML = output;
});
