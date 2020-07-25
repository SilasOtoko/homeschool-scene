jQuery(document).ready(function($) {
  //dropdown menus
  $('.main-navigation .menu-item-has-children > a')
    .addClass('dropdown-toggle')
    .attr('tabindex', '0');
  $('.main-navigation .menu-item-has-children').addClass('button-dropdown');
  $('.main-navigation .menu-item-has-children ul').addClass('dropdown-menu');
  $('.button-dropdown').on('click', function(event) {
    event.stopPropagation();
    $('.button-dropdown').removeClass('dropdown-active');
    $(this).toggleClass('dropdown-active');
  });
  $('.dropdown-toggle a').on('click', function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this)
      .find('.dropdown-active')
      .toggleClass('dropdown-active');
  });

  $(document).click(function() {
    // Remove class from all dropdowns
    $('.main-navigation .menu-item-has-children').removeClass('dropdown-active');
  });

  $(".main-navigation .menu-item-has-children").on('click', function (e) {
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

});
