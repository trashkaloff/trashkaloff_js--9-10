
$(function () {
    $('.menu .menu-item').hover( function () {
      $('.submenu',this).stop(true, false).animate({
          opacity: 1,
      },800).css({'display':'block'});
    },function () {
      $('.submenu', this).stop(true, false).animate({opacity:0,}).removeAttr('style');
    },800);

    $('.submenu .submenu-item').hover( function () {
      $('.submenu2',this).stop(true, false).animate({
          opacity: 1,
      },800).css({'display':'block'});
    },function () {
      $('.submenu2', this).stop(true, false).animate({opacity:0,}).removeAttr('style');
    },800);
});
