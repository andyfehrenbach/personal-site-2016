$(document).ready(function () {
  //check to see if a timer is running
  var scrollTimer = null;
$(window).scroll(function () {
    if (scrollTimer) {
        clearTimeout(scrollTimer);   // clear any previous pending timer
    }
    scrollTimer = setTimeout(handleScroll, 50);   // set new timer
});

  // change class after user scrolls rainbow into view
  var handleScroll = function() {
      var rainbow = $('#rainbow');
      var transHeight = rainbow.offset();
      var transHeightAdjusted = transHeight.top - (rainbow.height() / 2) + 50;
      var scrollPos = $(window).scrollTop();
      if (scrollPos >= transHeightAdjusted)  {
        rainbow.addClass('magic');
      } else {
        rainbow.removeClass('magic');
      }
  }
});
