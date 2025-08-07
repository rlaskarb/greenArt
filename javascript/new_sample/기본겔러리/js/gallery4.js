let cnt = 0; // 이미지 사진 순서 변화
let info = 0;

$(".gallery li:eq(0)").fadeIn("solw");
$(".gallery span").text(cnt + 1 + "/4");
function change() {
  cnt++;
  if (cnt == 4) {
    cnt = 0;
  }
  $(".gallery li").hide();
  $(".gallery li:eq(" + cnt + ")").fadeIn("solw");
  $(".gallery span").text(cnt + 1 + "/4");
}

info = setInterval(change, 2000);

$(".btn").toggle(
  function (event) {
    event.preventDefault();

    clearInterval(info);
    $(this).text("play");
  },
  function (event) {
    event.preventDefault();

    info = setInterval(change, 2000);
    $(this).text("stop");
  }
);
