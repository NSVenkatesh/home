$(document).ready(function () {
  let x = 0;
  window.history.pushState("", "", "#home");
  $(".opac").click(function () {
    let id = $(this).attr("id");
    let href = $(this).find("a").attr("href");
    console.log(href);
    if (href == "#resume") {
      $(".skill-percent").addClass("skill-a");
    } else {
      $(".skill-percent").removeClass("skill-a");
    }
    if (id == "active") {
      var y = x - 1;
    }
    $(".opac").each(function () {
      $(this).attr("id", " ");
      $(".opac").removeClass("home");
    });
    if (id == undefined || id == " ") {
      $(this).attr("id", "active");
    } else if (x != y) {
      $(this).attr("id", "active");
    } else {
      $(this).attr("id", " ");
    }
    x++;
    hide();
  });
  $(".menu").click(function () {
    event.stopPropagation();
    if ($(".checkbox").is(":checked")) {
      $(".menu").find("img").attr("src", "");
      $(".menu").find("img").attr("src", "img/xmark-solid.svg");
      $(".side-nav").show(400);
    } else {
      $(".menu").find("img").attr("src", "");
      $(".menu").find("img").attr("src", "img/bars-solid.svg");
      $(".side-nav").hide(600);
    }
  });
  $("body").click(function () {
    hide();
  });
  $(this).scrollTop(0);
  function hide() {
    if ($(".checkbox").is(":checked")) {
      $(".menu").find("img").attr("src", "");
      $(".menu").find("img").attr("src", "img/bars-solid.svg");
      $(".side-nav").hide(600);
      $(".checkbox").prop("checked", false);
    }
  }
});
