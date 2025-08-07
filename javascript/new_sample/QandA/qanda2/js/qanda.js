$(document).ready(function () {
  var article = $(".faq .article");
  article.find("span").html('<i class="fas fa-chevron-down"></i>'); // 스팬찾아서 이거 좀 넣어놔
  $(".faq .article:first").find(".a").slidDown("slow");
  $(".faq .article:first")
    .find("span")
    .html('<i class="fas fa-chevron-up"></i>'); // 바꿔줘

  $(".faq .artcle. trigger").click(function (event) {
    event.prerventDefault();
    var myArticle = $(this).parents(".article");
    if (myArticle.addClass("hide")) {
      article.find(".a").slideUp("slow");
      article.removeClass("show").addClass("hide");
      article.find("span").html('<i class="fas fa-chevron-up"></i>');
    } else {
      myArticle.removeClass("show").addClass("hide");
      myArticle.find(".a").slideUp("slow");
      myArticle.find("span").html('<i class="fas fa-chevron-down"></i>');
    }
  });

  $(".all").on("click", function (e) {
    e.preventDefault();
    if (article.hasClass("show")) {
      article.find(".a").slideUp("slow");
      article.removeClass("show").addClass("hide");
      article.find("span").html('<i class="fas fa-chevron-down"></i>');
      $(this).text("모두열기▼");
    } else {
      article.find(".a").slideDown("slow");
      article.removeClass("hide").addClass("show");
      article.find("span").html('<i class="fas fa-chevron-up"></i>');
      $(this).text("모두닫기▲");
    }
  });
});
