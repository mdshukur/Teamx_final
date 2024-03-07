$( document ).ready(function() {
    new WOW().init();
});

// navbar toggle
$(function() {
    $('#ChangeToggle').click(function() {
        $('#navbar-hamburger').toggleClass('show');
        $('#navbar-close').toggleClass('show');  
    });
});

// testimonial slider
jQuery("#testimonial-carousel").owlCarousel({
    items: 1,
    singleItem: true,
    autoplay: true,
    loop: true,
    margin: 20,
    autoplayTimeout: 10000,
    smartSpeed: 800,
    nav: false,
    dots: true,
});

// work slider
jQuery("#work-carousel").owlCarousel({
    stagePadding: 30,
    items: 1,
    singleItem: true,
    autoplay: false,
    loop: true,
    margin: 40,
    autoplayTimeout: 5000,
    smartSpeed: 800,
    nav: true,
    navText: [
        "<i class='fa fa-angle-left'></i>",
        "<i class='fa fa-angle-right'></i>"
      ],
    dots: false,
    responsiveClass: true,
    responsive: {
        0:{
          stagePadding: 0,
        },
        991:{
          stagePadding: 30,
        }
    }
});
// swiper slider custom js
var swiper = new Swiper(".mySwiper_1", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper1", {
    loop: true,
    spaceBetween: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  // second slider
  var swiper = new Swiper(".mySwiper_2", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper2", {
    loop: true,
    spaceBetween: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  // Third slider
  var swiper = new Swiper(".mySwiper_3", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper3", {
    loop: true,
    spaceBetween: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  
  // Four slider
  var swiper = new Swiper(".mySwiper_4", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper4", {
    loop: true,
    spaceBetween: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  // Five slider
  var swiper = new Swiper(".mySwiper_5", {
    loop: true,
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true,
  });

  var swiper2 = new Swiper(".mySwiper5", {
    loop: true,
    spaceBetween: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  
