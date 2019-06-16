$(function() {
  var lastScrollTop = 0;
  var $navbar = $('.navbar');
  var navbarHeight = $navbar.outerHeight();
  var movement = 0;
  var lastDirection = 0;

  $(window).scroll(function(event) {
    var st = $(this).scrollTop();
    movement += st - lastScrollTop;

    if (st > lastScrollTop) {
      // scroll down
      if (lastDirection != 1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = -margin;
      $navbar.css('margin-top', margin + 'px');

      lastDirection = 1;
    } else {
      // scroll up
      if (lastDirection != -1) {
        movement = 0;
      }
      var margin = Math.abs(movement);
      if (margin > navbarHeight) {
        margin = navbarHeight;
      }
      margin = margin - navbarHeight;
      $navbar.css('margin-top', margin + 'px');

      lastDirection = -1;
    }

    lastScrollTop = st;
    // console.log(margin);
  });
});

$(document).ready(function() {
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll > 675) {
      $('#scroll-nav').css('background', '#282b28');
      $('#scroll-nav').css('box-shadow', '1px 4px 15px 0px rgba(0,0,0,0.6)');
    } else {
      $('#scroll-nav').css('background', 'transparent');
      $('#scroll-nav').css('box-shadow', 'none');
    }
  });
});
