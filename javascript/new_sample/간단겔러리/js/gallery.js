$(document).ready(function () {
  $(".image li:eq(0)").fadeIn("slow");
  $(".btn li:eq(0)")
    .children("a")
    .css("color", "red")
    .css("background", "#0f0");

  $(".btn a").click(function (e) {
    e.preventDefault();

    var ind = $(this).index(".btn a"); // 0 1 2 3

    $(".image li").hide();
    $(".image li:eq(" + ind + ")").fadeIn("slow");

    $(".btn a").css("color", "#333").css("background", "#fff");
    $(this).css("color", "red").css("background", "#0f0");
  });
});
