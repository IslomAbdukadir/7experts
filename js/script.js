var arrLang = {
  "ru": {
    "send": "Оставить заявку",
    "bannerTitle": "Регистрация Товарных Знаков в Узбекистане",
    "bannerTxt": "Регистрация товарных знаков, патентов и авторских прав",
    "featureTitle": "Наши преимущества",
    "priceTitle": "Выберите услугу по регистрации Товарного Знака",
  },
  "uz": {
    "send": "Ариза юбормоқ",
    "bannerTitle": "Ўзбекистонда товар белгиларини рўйхатга олиш!",
    "bannerTxt": "Товар белгилари, патент ва муаллифлик ҳуқуқларини рўйхатдан ўтказиш",
    "featureTitle": "Бизнинг афзалликларимиз",
    "priceTitle": "Савдо белгисини рўйхатдан ўтказиш хизматини танланг",
  },
  "o'z": {
    "send": "Ariza yubormoq",
    "bannerTitle": "O'zbekistonda tovar belgilarini ro'yxatga olish!",
    "bannerTxt": "Tovar belgilari, patent va mualliflik huquqlarini ro'yxatdan o'tkazish",
    "featureTitle": "Bizning afzalliklarimiz",
    "priceTitle": "Savdo belgisini ro'yxatdan o'tkazish xizmatini tanlang",
  }
};

$(function () {

  $(".translate").click(function () {
    var lang = $(this).attr("id");

    $(".lang").each(function (index, item) {
      $(this).text(arrLang[lang][$(this).attr("key")]);
    });
    $(".translate").toggleClass("active");
  });
});

$(".nav-dropdown").hide();

$(".header__list").hover(function () {
  $(".nav-dropdown").show(duration = 300);

}, function () {
  $(".nav-dropdown").hide(duration = 300);
});

(function () {
  "use strict";

  // define variables
  var items = document.querySelectorAll(".timeline li");

  // check if an element is in viewport
  // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
  function isElementInViewport(el) {
    var rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function callbackFunc() {
    for (var i = 0; i < items.length; i++) {
      if (isElementInViewport(items[i])) {
        items[i].classList.add("in-view");
      }
    }
  }

  // listen for events
  window.addEventListener("load", callbackFunc);
  window.addEventListener("resize", callbackFunc);
  window.addEventListener("scroll", callbackFunc);
})();

//   accordion start


const accordionItemHeaders = document.querySelectorAll(
  ".accordion-item-header"
);

accordionItemHeaders.forEach((accordionItemHeader) => {
  accordionItemHeader.addEventListener("click", (event) => {
    accordionItemHeader.classList.toggle("active");
    const accordionItemBody = accordionItemHeader.nextElementSibling;
    if (accordionItemHeader.classList.contains("active")) {
      accordionItemBody.style.maxHeight = accordionItemBody.scrollHeight + "px";
    } else {
      accordionItemBody.style.maxHeight = 0;
    }
  });
});

// comparison

var divisor = document.getElementById("divisor"),
  slider = document.getElementById("slider");

function moveDivisor() {
  divisor.style.width = slider.value + "%";
}