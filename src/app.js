import Swiper from "swiper";
import { Autoplay, Navigation, Pagination, Thumbs } from "swiper/modules";

$(document).ready(function () {
  $("select").select2({
    placeholder: "Выбрать",
    dropdownAutoWidth: false,
    width: "resolve", // need to override the changed default
  });

  const frontPageSwiper = new Swiper("#index-page-swiper", {
    pagination: {
      el: "#index-page-swiper .swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    loop: true,
    grabCursor: true,
    simulateTouch: true,
    navigation: {
      nextEl: "#index-page-swiper .swiper-button-next",
      prevEl: "#index-page-swiper .swiper-button-prev",
    },
    modules: [Pagination, Navigation],
  });

  const confidence = new Swiper("#confidence-swiper", {
    pagination: {
      el: "#confidence-swiper .swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 5,
        spaceBetween: 22.5,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 30,
      },
    },
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    simulateTouch: true,
    navigation: {
      nextEl: "#confidence-swiper .swiper-button-next",
      prevEl: "#confidence-swiper .swiper-button-prev",
    },
    modules: [Pagination, Navigation],
  });

  const sliderThumb = new Swiper(".about-the-brand .text-block .slider-thumb", {
    slidesPerView: 8,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 7,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 8,
        spaceBetween: 10,
      },
    },
  });

  const slider = new Swiper(".about-the-brand .text-block .slider", {
    slidesPerView: 1,
    loop: true,
    thumbs: {
      swiper: sliderThumb,
    },
    navigation: {
      nextEl: ".text-block .swiper .swiper-button-next",
      prevEl: ".text-block .swiper .swiper-button-prev",
    },
    modules: [Pagination, Navigation, Thumbs],
  });

  const singleNewsSliderThumb = new Swiper(".single-news .slider-thumb", {
    slidesPerView: 8,
    breakpoints: {
      0: {
        slidesPerView: 4,
        spaceBetween: 8,
      },
      768: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 6,
        spaceBetween: 10,
      },
    },
  });
  const singleNewsSlider = new Swiper(".single-news .slider", {
    slidesPerView: 1,
    loop: true,
    thumbs: {
      swiper: singleNewsSliderThumb,
    },
    navigation: {
      nextEl: ".slider .swiper-button-next",
      prevEl: ".slider .swiper-button-prev",
    },
    modules: [Pagination, Navigation, Thumbs],
  });

  const productsSlider = new Swiper(".single-news .products-slider", {
    loop: false,
    spaceBetween: 10,
    navigation: {
      nextEl: ".products .swiper-button-next",
      prevEl: ".products .swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      992: {
        slidesPerView: 3,
      },
    },
    modules: [Pagination, Navigation],
  });

  const singleProductSwiper = new Swiper("#single-product-swiper", {
    pagination: {
      el: "#single-product-swiper .swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    loop: false,
    slidesPerView: 1,
    navigation: {
      nextEl: "#single-product-swiper .swiper-button-next",
      prevEl: "#single-product-swiper .swiper-button-prev",
    },
    modules: [Pagination, Navigation],
  });

  const seeAlsoSlider = new Swiper(".see-also__slider", {
    loop: false,
    pagination: {
      el: ".see-also__slider .swiper-pagination",
      clickable: true,
      type: "bullets",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 0,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 10,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 10,
      },
    },
    modules: [Pagination, Navigation],
  });

  document.querySelectorAll('.menu-item.menu-item-has-children').forEach(parent => {
    const svgHTML = `
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_942_7209)">
          <path d="M12 13.1717L16.95 8.22168L18.364 9.63568L12 15.9997L5.63599 9.63568L7.04999 8.22168L12 13.1717Z" fill="#09121F"/>
        </g>
        <defs>
          <clipPath id="clip0_942_7209">
            <rect width="24" height="24" fill="white"/>
          </clipPath>
        </defs>
      </svg>
    `;
  
    parent.insertAdjacentHTML('beforeend', svgHTML);
  });

  document.querySelectorAll('.mobile__nav .menu-item-has-children').forEach(item => {
    const svg = item.querySelector('svg');
    const subMenu = item.querySelector('.sub-menu');
  
    svg.addEventListener('click', () => {
      subMenu.classList.toggle('sub-menu--show');
      item.classList.toggle('active');
    });
  });
  
  
  
  $(document).ready(function () {
    if ($('.js-list-options-button')) {
      $('.js-list-options-button').on('click', function () {
        const $this = $(this);
        const $content = $('.js-list-options-content');
  
        $content.slideToggle();
        
        if ($this.text() === $this.data('show')) {
            $this.text($this.data('hide'));
        } else {
            $this.text($this.data('show'));
        }
      });
    }
  });


  let mobileMenuBtn = $(".mobile-menu__toggle");
  let searchBtn = $(".controls__search");
  let header = $(".header");
  let youtubePlayer = $(".video iframe")[0];

  //Открываем/закрываем мобильное меню при клике на значок в хедере

  mobileMenuBtn.on("click", function () {
    header.toggleClass("mobile-menu-active");
    $("body").toggleClass("mobile-menu-active");
  });

  //Закрываем поиск/мобильное меню/видео/попап обратной связи/попап заявки при клике на затеменнную область

  $(document).mouseup(function (e) {
    if (
      $(".header").hasClass("search-active") &&
      !$(".header__search .wrapper").is(e.target) &&
      $(".controls__search").has(e.target).length === 0 &&
      $(".header__search .wrapper").has(e.target).length === 0
    ) {
      header.toggleClass("search-active");
      $("body").toggleClass("mobile-menu-active");
    }

    if (
      $(".header").hasClass("mobile-menu-active") &&
      !$(".header__mobile .wrapper").is(e.target) &&
      $(".mobile-menu__toggle").has(e.target).length === 0 &&
      $(".header__mobile .wrapper").has(e.target).length === 0
    ) {
      header.toggleClass("mobile-menu-active");
      $("body").toggleClass("mobile-menu-active");
    }

    if (
      $(".video").hasClass("active") &&
      !$(".popup__container").is(e.target) &&
      $(".popup__container").has(e.target).length === 0
    ) {
      youtubePlayer.contentWindow.postMessage(
        '{"event":"command","func":"pauseVideo","args":""}',
        "*"
      );
      $(".video").removeClass("active");
    }

    if (
      $(".contact-us__popup").hasClass("active") &&
      (($(".contact-us__popup").is(e.target) &&
        $(".contact-us__popup").has(e.target).length === 0) ||
        $(".contact-us__popup .form__close svg").is(e.target) ||
        $(".contact-us__popup .form__close").has(e.target).length != 0)
    ) {
      $(".contact-us__popup").removeClass("active");
    }

    if (
      $(".request__popup").hasClass("active") &&
      (($(".request__popup").is(e.target) &&
        $(".request__popup").has(e.target).length === 0) ||
        $(".request__popup .form__close svg").is(e.target) ||
        $(".request__popup .form__close").has(e.target).length != 0)
    ) {
      $(".request__popup").removeClass("active");
    }

    if (
      $(".repair__popup").hasClass("active") &&
      (($(".repair__popup").is(e.target) &&
        $(".repair__popup").has(e.target).length === 0) ||
        $(".repair__popup .form__close svg").is(e.target) ||
        $(".repair__popup .form__close").has(e.target).length != 0)
    ) {
      $(".repair__popup").removeClass("active");
    }

    if (
      $(".costs__popup").hasClass("active") &&
      (($(".costs__popup").is(e.target) &&
        $(".costs__popup").has(e.target).length === 0) ||
        $(".costs__popup .form__close svg").is(e.target) ||
        $(".costs__popup .form__close").has(e.target).length != 0)
    ) {
      $(".costs__popup").removeClass("active");
    }
  });

  //Открываем/закрываем поиск при клике на значок в хедере
  $(window).bind("resize load", function () {
    if (document.documentElement.clientWidth < 992) {
      searchBtn.on("click", function (e) {
        e.preventDefault();
        header.toggleClass("search-active");
        $("body").toggleClass("mobile-menu-active");
      });
    }
  });

  //Включаем видео во всплывающем окне при клике на значок
  $(".video__play").on("click", function (e) {
    e.preventDefault();
    $(this).parent().addClass("active");
    youtubePlayer.contentWindow.postMessage(
      '{"event":"command","func":"playVideo","args":""}',
      "*"
    );
  });

  $(".secondary-page .grid__item-active").on("click", function () {
    $(this).parent().toggleClass("active");
  });

  $(".secondary-page.news .list__item.active").on("click", function () {
    $(this).parent().toggleClass("active");
  });

  $(".secondary-page.columns .pages__list-mobile .list__item.active").on(
    "click",
    function () {
      $(this).parent().toggleClass("active");
    }
  );

  $(".read-more-btn").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
    $(this).parent().toggleClass("active");
  });

  var dealersMap;
  var ourLocationMap;

  // Дождёмся загрузки API и готовности DOM.
  if ($("#dealers-map").length) {
    ymaps.ready(init);
  }

  function init() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    dealersMap = new ymaps.Map(
      "dealers-map",
      {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [56.010151, 92.87344],
        zoom: 10,
        controls: ["zoomControl"],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    let placemark1 = new ymaps.Placemark(
      [56.010151, 92.87344],
      {
        balloonContentBody:
          '<div class="baloon"><div class="baloon__row"><div class="baloon__image"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13.9333L11.3 10.6333C11.9526 9.98066 12.397 9.14914 12.577 8.2439C12.7571 7.33867 12.6646 6.40039 12.3114 5.54769C11.9582 4.695 11.36 3.96619 10.5926 3.45343C9.82519 2.94068 8.92296 2.66699 8 2.66699C7.07704 2.66699 6.17481 2.94068 5.40739 3.45343C4.63997 3.96619 4.04183 4.695 3.68861 5.54769C3.33539 6.40039 3.24294 7.33867 3.42297 8.2439C3.603 9.14914 4.04741 9.98066 4.7 10.6333L8 13.9333ZM8 15.8187L3.75734 11.576C2.91823 10.7369 2.34679 9.66777 2.11529 8.50389C1.88378 7.34 2.0026 6.13361 2.45673 5.03726C2.91086 3.9409 3.6799 3.00384 4.66659 2.34455C5.65328 1.68527 6.81332 1.33337 8 1.33337C9.18669 1.33337 10.3467 1.68527 11.3334 2.34455C12.3201 3.00384 13.0891 3.9409 13.5433 5.03726C13.9974 6.13361 14.1162 7.34 13.8847 8.50389C13.6532 9.66777 13.0818 10.7369 12.2427 11.576L8 15.8187ZM8 8.66665C8.35362 8.66665 8.69276 8.52618 8.94281 8.27613C9.19286 8.02608 9.33334 7.68694 9.33334 7.33332C9.33334 6.9797 9.19286 6.64056 8.94281 6.39051C8.69276 6.14046 8.35362 5.99999 8 5.99999C7.64638 5.99999 7.30724 6.14046 7.05719 6.39051C6.80715 6.64056 6.66667 6.9797 6.66667 7.33332C6.66667 7.68694 6.80715 8.02608 7.05719 8.27613C7.30724 8.52618 7.64638 8.66665 8 8.66665ZM8 9.99999C7.29276 9.99999 6.61448 9.71904 6.11438 9.21894C5.61429 8.71884 5.33334 8.04057 5.33334 7.33332C5.33334 6.62608 5.61429 5.9478 6.11438 5.4477C6.61448 4.94761 7.29276 4.66666 8 4.66666C8.70725 4.66666 9.38552 4.94761 9.88562 5.4477C10.3857 5.9478 10.6667 6.62608 10.6667 7.33332C10.6667 8.04057 10.3857 8.71884 9.88562 9.21894C9.38552 9.71904 8.70725 9.99999 8 9.99999Z" fill="#999999"/></svg> </div> <div class="baloon__title">Адрес:</div> <div class="baloon__text"> 660049, г. Красноярск, ул. Карла Маркса, 93а, БЦ «Европа» </div> </div> <div class="baloon__row"> <div class="baloon__image"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M5.8281 5.78793C5.11267 6.39582 4.8505 7.50447 5.46825 8.39388C6.04632 9.22617 6.7745 9.95419 7.6066 10.532C8.49604 11.1496 9.60464 10.8874 10.2125 10.1719L10.2192 10.1751C10.9956 10.5347 11.8203 10.7812 12.6667 10.9068V12.6667L12.6659 12.6667L12.664 12.6667C7.34768 12.6742 3.32765 8.60741 3.33334 3.33573V3.33333H5.09291L5.09303 3.33411C5.21866 4.18043 5.46507 5.00436 5.82476 5.78072L5.8281 5.78793ZM12.6659 14H13.3333C13.7015 14 14 13.7015 14 13.3333V10.3318C14 10.0014 13.758 9.72087 13.4312 9.67237L12.8618 9.58786C12.1415 9.48097 11.4404 9.27128 10.7797 8.96523L10.2778 8.73273C9.98692 8.598 9.64136 8.68933 9.45505 8.95017L9.22784 9.26829C9.0287 9.54709 8.64852 9.63224 8.3671 9.43682C7.66557 8.94968 7.05071 8.33495 6.56335 7.63326C6.36788 7.35183 6.45304 6.97158 6.73189 6.77244L7.04985 6.54538C7.31073 6.35907 7.40207 6.01347 7.26731 5.7226L7.03456 5.22022C6.72849 4.5596 6.51882 3.8585 6.41191 3.13833L6.32736 2.56877C6.27884 2.24197 5.9983 2 5.66792 2H2.66667C2.29848 2 2.00001 2.29848 2.00001 2.66667V3.33429C1.99353 9.33858 6.60682 14.0086 12.6659 14Z" fill="#999999" /> </svg> </div> <div class="baloon__title">Тел./Факс:</div> <a class="baloon__text" href="tel:+7 391 980-00-01">+7 391 980-00-01</a> </div> <div class="baloon__row"> <div class="baloon__image"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3333 13.3333H2.66659C1.93021 13.3333 1.33325 12.7363 1.33325 12V3.94196C1.36432 3.22833 1.95227 2.66595 2.66659 2.66663H13.3333C14.0696 2.66663 14.6666 3.26358 14.6666 3.99996V12C14.6666 12.7363 14.0696 13.3333 13.3333 13.3333ZM2.66659 5.24529V12H13.3333V5.24529L7.99992 8.79996L2.66659 5.24529ZM3.19992 3.99996L7.99992 7.19996L12.7999 3.99996H3.19992Z" fill="#999999" /></svg></div><div class="baloon__title">Email:</div><a class="baloon__text" href="mailto:info@acta-project.ru">info@acta-project.ru</a></div></div>',
        balloonPanelMaxMapArea: 0,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "/dist/images/baloon.png",
        iconImageSize: [40, 48],
      }
    );
    let placemark2 = new ymaps.Placemark(
      [56.100151, 92.47344],
      {
        balloonContentBody:
          '<div class="baloon"><div class="baloon__row"><div class="baloon__image"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 13.9333L11.3 10.6333C11.9526 9.98066 12.397 9.14914 12.577 8.2439C12.7571 7.33867 12.6646 6.40039 12.3114 5.54769C11.9582 4.695 11.36 3.96619 10.5926 3.45343C9.82519 2.94068 8.92296 2.66699 8 2.66699C7.07704 2.66699 6.17481 2.94068 5.40739 3.45343C4.63997 3.96619 4.04183 4.695 3.68861 5.54769C3.33539 6.40039 3.24294 7.33867 3.42297 8.2439C3.603 9.14914 4.04741 9.98066 4.7 10.6333L8 13.9333ZM8 15.8187L3.75734 11.576C2.91823 10.7369 2.34679 9.66777 2.11529 8.50389C1.88378 7.34 2.0026 6.13361 2.45673 5.03726C2.91086 3.9409 3.6799 3.00384 4.66659 2.34455C5.65328 1.68527 6.81332 1.33337 8 1.33337C9.18669 1.33337 10.3467 1.68527 11.3334 2.34455C12.3201 3.00384 13.0891 3.9409 13.5433 5.03726C13.9974 6.13361 14.1162 7.34 13.8847 8.50389C13.6532 9.66777 13.0818 10.7369 12.2427 11.576L8 15.8187ZM8 8.66665C8.35362 8.66665 8.69276 8.52618 8.94281 8.27613C9.19286 8.02608 9.33334 7.68694 9.33334 7.33332C9.33334 6.9797 9.19286 6.64056 8.94281 6.39051C8.69276 6.14046 8.35362 5.99999 8 5.99999C7.64638 5.99999 7.30724 6.14046 7.05719 6.39051C6.80715 6.64056 6.66667 6.9797 6.66667 7.33332C6.66667 7.68694 6.80715 8.02608 7.05719 8.27613C7.30724 8.52618 7.64638 8.66665 8 8.66665ZM8 9.99999C7.29276 9.99999 6.61448 9.71904 6.11438 9.21894C5.61429 8.71884 5.33334 8.04057 5.33334 7.33332C5.33334 6.62608 5.61429 5.9478 6.11438 5.4477C6.61448 4.94761 7.29276 4.66666 8 4.66666C8.70725 4.66666 9.38552 4.94761 9.88562 5.4477C10.3857 5.9478 10.6667 6.62608 10.6667 7.33332C10.6667 8.04057 10.3857 8.71884 9.88562 9.21894C9.38552 9.71904 8.70725 9.99999 8 9.99999Z" fill="#999999"/></svg> </div> <div class="baloon__title">Адрес:</div> <div class="baloon__text"> 660049, г. Красноярск, ул. Карла Маркса, 93а, БЦ «Европа» </div> </div> <div class="baloon__row"> <div class="baloon__image"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M5.8281 5.78793C5.11267 6.39582 4.8505 7.50447 5.46825 8.39388C6.04632 9.22617 6.7745 9.95419 7.6066 10.532C8.49604 11.1496 9.60464 10.8874 10.2125 10.1719L10.2192 10.1751C10.9956 10.5347 11.8203 10.7812 12.6667 10.9068V12.6667L12.6659 12.6667L12.664 12.6667C7.34768 12.6742 3.32765 8.60741 3.33334 3.33573V3.33333H5.09291L5.09303 3.33411C5.21866 4.18043 5.46507 5.00436 5.82476 5.78072L5.8281 5.78793ZM12.6659 14H13.3333C13.7015 14 14 13.7015 14 13.3333V10.3318C14 10.0014 13.758 9.72087 13.4312 9.67237L12.8618 9.58786C12.1415 9.48097 11.4404 9.27128 10.7797 8.96523L10.2778 8.73273C9.98692 8.598 9.64136 8.68933 9.45505 8.95017L9.22784 9.26829C9.0287 9.54709 8.64852 9.63224 8.3671 9.43682C7.66557 8.94968 7.05071 8.33495 6.56335 7.63326C6.36788 7.35183 6.45304 6.97158 6.73189 6.77244L7.04985 6.54538C7.31073 6.35907 7.40207 6.01347 7.26731 5.7226L7.03456 5.22022C6.72849 4.5596 6.51882 3.8585 6.41191 3.13833L6.32736 2.56877C6.27884 2.24197 5.9983 2 5.66792 2H2.66667C2.29848 2 2.00001 2.29848 2.00001 2.66667V3.33429C1.99353 9.33858 6.60682 14.0086 12.6659 14Z" fill="#999999" /> </svg> </div> <div class="baloon__title">Тел./Факс:</div> <a class="baloon__text" href="tel:+7 391 980-00-01">+7 391 980-00-01</a> </div> <div class="baloon__row"> <div class="baloon__image"> <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M13.3333 13.3333H2.66659C1.93021 13.3333 1.33325 12.7363 1.33325 12V3.94196C1.36432 3.22833 1.95227 2.66595 2.66659 2.66663H13.3333C14.0696 2.66663 14.6666 3.26358 14.6666 3.99996V12C14.6666 12.7363 14.0696 13.3333 13.3333 13.3333ZM2.66659 5.24529V12H13.3333V5.24529L7.99992 8.79996L2.66659 5.24529ZM3.19992 3.99996L7.99992 7.19996L12.7999 3.99996H3.19992Z" fill="#999999" /></svg></div><div class="baloon__title">Email:</div><a class="baloon__text" href="mailto:info@acta-project.ru">info@acta-project.ru</a></div></div>',
        balloonPanelMaxMapArea: 0,
      },
      {
        iconLayout: "default#image",
        iconImageHref: "/dist/images/baloon.png",
        iconImageSize: [40, 48],
      }
    );
    dealersMap.geoObjects.add(placemark1);
    dealersMap.geoObjects.add(placemark2);
    dealersMap.controls.remove("trafficControl");
    dealersMap.controls.remove("rulerControl");
    // Откроем балун на метке.
    placemark1.balloon.open();
  }

  // Дождёмся загрузки API и готовности DOM.
  if ($("#our-location-map").length) {
    ymaps.ready(init2);
  }

  function init2() {
    // Создание экземпляра карты и его привязка к контейнеру с
    // заданным id ("map").
    ourLocationMap = new ymaps.Map(
      "our-location-map",
      {
        // При инициализации карты обязательно нужно указать
        // её центр и коэффициент масштабирования.
        center: [59.914281, 30.396285],
        zoom: 15,
        controls: ["zoomControl"],
      },
      {
        searchControlProvider: "yandex#search",
      }
    );

    let placemark1 = new ymaps.Placemark(
      [59.914281, 30.396285],
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "/dist/images/baloon.png",
        iconImageSize: [40, 48],
      }
    );
    ourLocationMap.geoObjects.add(placemark1);
    ourLocationMap.controls.remove("trafficControl");
    ourLocationMap.controls.remove("rulerControl");
  }

  $(".catalog .compare__btn").on("click", function () {
    $(this).parent().addClass("active");
  });

  $(".single-product .compare__btn").on("click", function () {
    $(this).parent().addClass("active");
  });

  $(".contact-us__toggle").on("click", function (e) {
    e.preventDefault();
    $(".contact-us__popup").addClass("active");
  });

  $(".request__toggle").on("click", function (e) {
    e.preventDefault();
    $(".request__popup").addClass("active");
  });

  $(".repair__toggle").on("click", function (e) {
    e.preventDefault();
    $(".repair__popup").addClass("active");
  });

  $(".costs__toggle").on("click", function (e) {
    e.preventDefault();
    $(".costs__popup").addClass("active");
  });
  //Placeholder for date inputs
  $("input[type=date]").on("change", function () {
    let el = $(this);
    if ($(this).val() != 0) {
      $(this).siblings(".date-placeholder").addClass("hide");
    } else {
      $(this).siblings(".date-placeholder").removeClass("hide");
    }
  });

  //вывод имени прикрепленного файла в форме
  const fileInputs = $(".file-upload-input");
  fileInputs.each(function () {
    var el = $(this);
    el.on("change", () => {
      for (var file of el[0].files) {
        el.siblings(".file-name").text(file.name);
      }
    });
  });

  //Логика блока сравнения
  function syncScroll(el1, el2) {
    let $el1 = $(el1);
    let $el2 = $(el2);
    let forcedScroll = false;
    $el1.scroll(function () {
      performScroll($el1, $el2);
    });
    $el2.scroll(function () {
      performScroll($el2, $el1);
    });
    function performScroll($scrolled, $toScroll) {
      if (forcedScroll) return (forcedScroll = false);
      setScrollTopFromPercent(
        $toScroll,
        $scrolled.scrollLeft() /
          ($scrolled[0].scrollWidth - $scrolled.outerWidth())
      );
    }
    function setScrollTopFromPercent($el, percent) {
      forcedScroll = true;
      $el.scrollLeft(percent * ($el[0].scrollWidth - $el.outerWidth()));
    }
  }

  $(window).bind("resize load", function () {
    let i = 0;
    var compareLabels = $(".labels__item");
    var compareValues = $(".values__row");
    compareValues.each(function () {
      if ($(this).height() < compareLabels.eq(i).height()) {
        $(this).height(compareLabels.eq(i).height());
      }
      if ($(this).height() > compareLabels.eq(i).height()) {
        compareLabels.eq(i).height($(this).height());
      }
      i = i + 1;
    });
    syncScroll($(".items__list"), $(".params__values"));
  });
});
