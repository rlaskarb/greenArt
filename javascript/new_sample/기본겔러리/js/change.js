$(document).ready(function () {
  $(".big").css("background", "url(./images/big1.jpg)");
  $(".big").css("background-size", "800px 533px");
  $(".big").hide().fadeIn("fast");
  $(".gallery li:eq(0) a")
    .css("border", "3px solid rgba(255,0,0,1)")
    .children()
    .css("filter", "grayscale(100%)");

  $(".gallery li a").click(function (e) {
    e.preventDefault();
    var ind = $(this).index(".gallery li a");
    console.log(ind); // 0 1 2 3
    console.log("this : " + this);

    $(".big").css("background", "url(./images/big" + (ind + 1) + ".jpg)");
    $(".big").css("background-size", "800px 533px");
    $(".big").hide().fadeIn("fast");

    $(".gallery li a")
      .css("border", "3px solid rgba(255,0,0,0)")
      .children()
      .css("filter", "grayscale(0)");
    $(this)
      .css("border", "3px solid rgba(255,0,0,1)")
      .children()
      .css("filter", "grayscale(100%)");
  });
});
