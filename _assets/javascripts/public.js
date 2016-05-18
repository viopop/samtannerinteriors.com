//= require jquery/dist/jquery
//= require bootstrap-sass/assets/javascripts/bootstrap-sprockets
//= require vendor/retina.min
//= require vendor/bigslide
//= require vendor/jquery.backstretch
//= require vendor/jquery.equalheights
//= require vendor/jquery.imagesloaded

$(function() {
  $('.big-slide-link').bigSlide({
    menu: "#big-slide-panel",
    push: ".big-slide-push",
    side: "right",
    easyClose: true});
});
