$(document).ready(function () {
  var isOnTheJobHunt = false;

  if (isOnTheJobHunt) {
    postShitInTheConsole();
  }

  initializeCarousel('.slide-viewer');

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
  };
});

/**
 * global functions
 */

function initializeCarousel(el) {
  $(el).slick({
    autoplay: false,
    autoplaySpeed: 6000,
    // adaptiveHeight: true,
    appendArrows: '.carousel-nav-container',
    // appendDots: '.carousel-nav-container',
    // prevArrow: '.previous-arrow',
    // nextArrow: '.next-arrow',
    // dots: true,
    easing: 'none',
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    speed: 1100
  });

  $('.expandable').on('click', function () {
    $(this).toggleClass('flip');
    $(this).next('.carousel-wrapper').toggleClass('open');
  });
}

function postShitInTheConsole() {
  console.log("%c////////////////////////////////", "background-color: slategray; color: midnightblue; font-family: verdana; font-weight: bold");
  console.log("%cPsst... Fellow dev... Looking for a         ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%cboundary-pushing web designer?        ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%cI'm looking for a new gig  💼                 ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%cLet's get in touch!                                  ", "background-color: mediumspringgreen; color: midnightblue; font-family: verdana; font-weight: bold; padding: 1px");
  console.log("%c////////////////////////////////", "background-color: slategray; color: midnightblue; font-family: verdana; font-weight: bold");
}


var projects = [
  {
    "name": "homi-sa",
    "link": "https://app.homi.io",
    "displayText": "app.homi.io",
    "images": [
      "/img/projects/homiSA/pic-1.jpg",
      "https://static.pexels.com/photos/101514/pexels-photo-101514.jpeg",
      "https://static.pexels.com/photos/280352/pexels-photo-280352.jpeg"
    ],
    "expandable": true
  },
  {
    "name": "homi-hr",
    "link": "https://hr.homi.io",
    "displayText": "hr.homi.io",
    "images": [
      "https://static.pexels.com/photos/196050/pexels-photo-196050.jpeg",
      "https://static.pexels.com/photos/101514/pexels-photo-101514.jpeg",
      "https://static.pexels.com/photos/280352/pexels-photo-280352.jpeg"
    ],
    "expandable": true
  }
];

for (var i = 0; i < projects.length; i++) {

  $('#app').append (
    '<a class="🔥 expandable" href="#">' + projects[i].displayText + '</a>' +
    '<div class="carousel-wrapper">' +
      '<div class="carousel-nav-container"></div>' +
      '<div class="slide-viewer"></div>' +
    '</div>'
  );

  $.each(projects[i].images, function () {
    $('.slide-viewer').append(
      '<img class="img project-image" src='+ this + '></img>'
    );
  });

}

// var list = document.getElementsByClassName('project-image');
//
// for (var i = 0; i < list.length; i++) {
//   var src = list[i].getAttribute('data-img');
//   list[i].style.src= src;
// }
console.log('3');
