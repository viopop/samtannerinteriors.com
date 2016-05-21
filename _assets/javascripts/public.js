//= require jquery/dist/jquery
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets
//= require vendor/retina.min
//= require vendor/bigslide
//= require vendor/jquery.backstretch
//= require vendor/jquery.equalheights
//= require vendor/jquery.imagesloaded
//= require slick-carousel/slick/slick

$(function() {
  $('.big-slide-link').bigSlide({
    menu: "#big-slide-panel",
    push: ".big-slide-push",
    side: "right",
    easyClose: true});

  $(".slick-portfolio").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".slick-prev-btn",
    nextArrow: ".slick-next-btn"
  });
});
