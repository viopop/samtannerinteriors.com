---
title: Home
home: true
main_images:
- small_image: "/uploads/home1.jpg"
  large_image: "/uploads/home1@2x.jpg"
---

<div class="content content-home clearfix">
  <div class="container">
    <div class="row">
      <div class="col-xs-12 main-image text-center">
        <img src="/assets/images/home-logo.png" class="logo-home">
      </div>
    </div>
  </div>
</div>
<script type="text/javascript">
  $(function() {
    var resizeMainImage = function() {
      $('.main-image').css('height', $(window).height()-100);
      $('.main-image .logo-home').css('margin-top', Math.max(($(window).height()-200)/2, 100));
    };
    resizeMainImage();
    $(window).resize(resizeMainImage);
    $(".main-image").backstretch([
      {% for asset in page.main_images %}
        "{{asset.small_image}}",
      {% endfor %}
    ], {duration: 5000, fade: 1000});
  });
</script>
