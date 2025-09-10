$(document).ready(function () {
  $(".menuOpen").click(function () {
    $("#gnb").animate({ right: 0, opacity: 1 }, "fast");
  });

  $(".close").click(function () {
    $("#gnb").animate({ right: "-100%", opacity: 0 }, "fast");
  });

  //높이 설정
  const documentHeight = $(document).height();
  const screenSize = $(window).width();

  if (screenSize > 1024) {
    $("#gnb").height("auto");
  } else {
    $("#gnb").height(documentHeight);
  }

  let current = 0;
  $(window).resize(function () {
    const screenSize = $(window).width();

    if (screenSize > 1024) {
      $("#gnb").css({ right: 0, opacity: 1 });
      $("#gnb").height("auto");
      current = 1;
    }

    if (current == 1 && screenSize <= 1024) {
      $("#gnb").css({ right: "-100%", opacity: 0 });
      $("#gnb").height(documentHeight);
      current = 0;
    }
  });
});
