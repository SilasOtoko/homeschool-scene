jQuery(document).ready(function() {
  $(".main-navigation .menu-item-has-children").on('mouseenter mouseleave', function (e) {
    if ($('ul', this).length) {
      var elm = $('ul:first', this);
      var off = elm.offset();
      var l = off.left;
      var w = elm.width();
      var docH = $(".main-navigation").height();
      var docW = $(".main-navigation").width();

      var isEntirelyVisible = (l + w <= docW);

      if (!isEntirelyVisible) {
        $(this).addClass('edge');
      } else {
        $(this).removeClass('edge');
      }
    }
  });
})    