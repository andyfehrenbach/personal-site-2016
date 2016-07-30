///Copyright 2016 Andy Fehrenbach

$(document).ready(function() {

  console.log("This shit works!");
  // makeStripes();

  // $('#screen').scroll(function(){
  //   console.log('screen function');
  // });
});

// $(document).ready(function () {
// $("html,body").animate({scrollTop: 0}, 100); //100ms for example
// console.log('rescrolled', $('body').scrollTop );
//   $(window).on('scrollDown', removeStripes);
// });

    //get div height
    var divHeight = $('.background').height();
    console.log(divHeight);



function makeStripes() {
    for (var i = 0; i < 50; i++) {
      var h = getRandomNumber(0, 100);
      var s = getRandomNumber(40, 98);
      var l = getRandomNumber(80,100);

      var color = 'hsla(' + h + ',' + s + '%,' + l + '%,' + 1 + ')';
        var $el = $('.background').append('<div class="stripe" style="background-color: '+ color +'" />');

    }
}

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function removeStripes () {
  console.log('removing stripes');
  $('.stripe').animate({
    opacity: 0
  }, 1600);
}

//fire function when #screen is reached

// var element_position = $('#screen').offset().top;
// console.log(element_position);
//
// $(window).on('scroll', function() {
//     var y_scroll_pos = window.pageYOffset;
//     var scroll_pos_test = element_position;
//
//     if(y_scroll_pos < scroll_pos_test) {
//       console.log('screen function');
//       $('.c').removeClass('c-offset');
//       $('.m').removeClass('m-offset');
//       $('.y').removeClass('y-offset');
//     }
//
//     if(y_scroll_pos == scroll_pos_test ) {
//       console.log('screen function');
//       $('.c').addClass('c-offset');
//       $('.m').addClass('m-offset');
//       $('.y').addClass('y-offset');
//     }
//
//
// });
