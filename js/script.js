let data = [
  {
    img: "img/flipkart.png",
    name: "Flipkart mobile listing prototype",
    link: "https://nsvenkatesh.github.io/flipkart/Flipkart/",
  },
  {
    img: "img/2048game.png",
    name: "2048 game",
    link: "https://nsvenkatesh.github.io/2048game/2048/",
  },
  {
    img: "img/currencyconvertor.png",
    name: "Currency convertor",
    link: "http://exchangerate.orgfree.com/Exchangerate/index.html",
  },
  {
    img: "img/sample-post.png",
    name: "Sample post with gif",
    link: "https://nsvenkatesh.github.io/sample-post/",
  },
  {
    img: "img/tenor.png",
    name: "Tenor Gif Clone",
    link: "https://nsvenkatesh.github.io/tenor/",
  },
];
let load = false;
$(document).ready(function () {
  let x = 0;
  window.history.pushState("", "", "#home");
  $(".opac").click(function () {
    let id = $(this).attr("id");
    let href = $(this).find("a").attr("href");
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
  $(".menu").click(function (event) {
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
  for (i in data) {
    let img = data[i].img;
    let name = data[i].name;
    let link = data[i].link;
    $(".p-flex").append(`<div class="p-content anime1">
      <div class="img-scale">
        <img src=${img} alt=${name} />
      </div>
      <p>${name}</p>
      <a
        href=${link}
        target="_blank"
        title=${name}
        rel="noopener"
      >
        <button class="p-btn1">Live preview</button>
      </a>
    </div>`);
  }
});
$(window).on("load", function () {
  setTimeout(() => {
    $(".simpleLoader").css({
      transition: "1s all ease-in-out",
      opacity: 0,
      zIndex: -10,
    });
    $("html,body").css({
      overflow: "auto",
      height: "auto",
    });
  }, 2000);
});
