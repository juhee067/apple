$(function () {
  $(".main_slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $('.main_slider').on('afterChange', function (e, s, c) {
    $('.main_visual .bar').addClass('on')
  });
  $('.main_slider').on('beforeChange', function () {
    $('.main_visual .bar').removeClass('on')
  });

});
