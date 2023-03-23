let data = [
  {
    img: "img/flipkart.png",
    name: "Flipkart mobile listing",
    link: "https://nsvenkatesh.github.io/flipkart/Flipkart/",
    content:
      "This design represents the prototype of flipkart mobile listing. Only a few search filters works. Technologies used HTML, CSS, jQuery.",
  },
  {
    img: "img/2048game.png",
    name: "2048 game",
    link: "https://nsvenkatesh.github.io/2048game/2048/",
    content:
      "2048 is a puzzle game. The game is 4x4 grid and the goal is to combine tiles with the same numbers to create a tile with the value of 2048. Technologies used HTML, CSS, jQuery.",
  },
  {
    img: "img/currencyconvertor.png",
    name: "Currency convertor",
    link: "http://exchangerate.orgfree.com/Exchangerate/index.html",
    content:
      "Currency converter is an online tool that allows users to convert the value of one currency to another in real-time based on current exchange rates. Technologies used HTML, CSS, jQuery.",
  },
  {
    img: "img/tenor.png",
    name: "Tenor Gif",
    link: "https://nsvenkatesh.github.io/tenor/",
    content:
      "Tenor Gif is a prototype of popular online platform Tenor that provides a vast collection of animated GIFs. Technologies used HTML, CSS, React Js.",
  },
];
let load = false;
$(document).ready(function () {
  let x = 0;
  window.history.pushState("", "", "#home");
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
    let content = data[i].content;
    $(".p-flex").append(`<div
      class="p-content"
      data-aos="fade-left"
      data-aos-duration="800"
    >
      <div
        class="p-img"
        data-aos="flip-right"
        data-aos-duration="800"
      >
        <img src=${img} alt=${name} />
      </div>
      <div class="pw-details">
        <div>
          <h3>${name}</h3>
          <p>
            ${content}
          </p>
        </div>
        <button class="pw-link">
          <a
            href=${link}
            target="_blank"
            rel="onopener"
            >Live demo</a
          >
        </button>
      </div>
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
