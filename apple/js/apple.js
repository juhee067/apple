$(function () {
  $(".main_slider").slick({
    dots: true,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
  });

  $(".main_slider").on("afterChange", function (e, s, c) {
    $(".main_visual .bar").addClass("on");
  });
  $(".main_slider").on("beforeChange", function () {
    $(".main_visual .bar").removeClass("on");
  });
  $(".compare_base").slick({
    arrows: false,
    //autoplay: true,
    dots: true,
    customPaging: function (slider, i, src) {
      var thumb = $(slider.$slides[i]).data();
      src = i + 1;
      if (i == "0") {
        i = "Series 7";
      } else if (i == "1") {
        i = "Series 3";
      } else if (i == "2") {
        i = "Series SE";
      }
      return '<a href="javascript:void(0);" class="dot">' + i + "</a>";
    },
  });
});
