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
    if ($(".checkbox").is(":checked")) {
      $(".menu").find("i").attr("class", "");
      $(".menu").find("i").attr("class", "fa-solid fa-bars");
      $(".side-nav").hide(600);
      $(".checkbox").prop("checked", false);
    }
  });
  $(".menu").click(function () {
    if ($(".checkbox").is(":checked")) {
      $(".menu").find("i").attr("class", "");
      $(".menu").find("i").attr("class", "fa-solid fa-xmark");
      $(".side-nav").show(400);
    } else {
      $(".menu").find("i").attr("class", "");
      $(".menu").find("i").attr("class", "fa-solid fa-bars");
      $(".side-nav").hide(600);
    }
  });
  $(this).scrollTop(0);
});
