

$(".tabMenu button").click(function () {
    let btnIndex = $(this).index();
    $(".tabMenu .tab-item").stop().fadeOut();
    $(".tabMenu .tab-item").eq(btnIndex).stop().fadeIn();
})


$(".accordion .accordion-item button").click(function () {

    $(this).toggleClass("active")
    $(".accordion .accordion-item .accord-content").slideUp();


    $(this).next().stop().toggle(500);




})



var swiper = new Swiper(".mySwiper", {
    loop: false,
    spaceBetween: 0,
    slidesPerView: 5,
    freeMode: true,
    watchSlidesProgress: true,
  });
  var swiper2 = new Swiper(".mySwiper2", {
    loop: false,
    spaceBetween: 0,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    thumbs: {
      swiper: swiper,
    },
  });
  

  
$(".js-range-slider").ionRangeSlider({
  type: "double",
  min: 2000,
  max: 2021,
  from: 2000,
  hide_min_max: true,
  skin: "round",
  from_pretty: 1,
  
  
});


$(".js-range-slideR").ionRangeSlider({
  type: "double",
  prefix: "$",
  min: 0,
  max: 100000,
  from: 0,
  hide_min_max: true,
  skin: "round",
  from_pretty: 1,
  
  
});









  
  
  
  
