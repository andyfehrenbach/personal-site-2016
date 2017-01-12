$(document).ready(function () {
  console.log("%c////////////////////////////////", "background-color: slategray; color: midnightblue; font-family: verdana; font-weight: bold");
  console.log("%cPsst... Fellow dev... Looking for a         ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%cboundary-pushing web designer?        ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%cI'm considering new opportunities.      ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%cLet's get in touch!                                  ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%c////////////////////////////////", "background-color: slategray; color: midnightblue; font-family: verdana; font-weight: bold");
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
