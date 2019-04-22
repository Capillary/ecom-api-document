//= require ../lib/_jquery
//= require ../lib/_jquery_ui
//= require ../lib/_jquery.tocify
//= require ../lib/_imagesloaded.min
(function (global) {
  'use strict';

  var closeToc = function() {
    $(".tocify-wrapper").removeClass('open');
    $("#nav-button").removeClass('open');
  };

  var makeToc = function() {
    global.toc = $("#toc").tocify({
      selectors: 'h1, h2',
      extendPage: false,
      theme: 'none',
      smoothScroll: false,
      showEffectSpeed: 0,
      hideEffectSpeed: 180,
      ignoreSelector: '.toc-ignore',
      highlightOffset: 60,
      scrollTo: -1,
      scrollHistory: true,
      hashGenerator: function (text, element) {
        return element.prop('id');
      }
    }).data('toc-tocify');

    $("#nav-button").click(function() {
      $(".tocify-wrapper").toggleClass('open');
      $("#nav-button").toggleClass('open');
      return false;
    });

    $(".page-wrapper").click(closeToc);
    $(".tocify-item").click(closeToc);
  };

  // Hack to make already open sections to start opened,
  // instead of displaying an ugly animation
  function animate() {
    setTimeout(function() {
      toc.setOption('showEffectSpeed', 180);
    }, 50);
  }

  $(function() {
    makeToc();
    animate();
    setupLanguages($('body').data('languages'));
    $('.content').imagesLoaded( function() {
      global.toc.calculateHeights();
    });
  });
})(window);

$(document).ready(function () {
   $('.tocify-subheader li.tocify-item a').each(function () {
       $(this).attr('title', $(this).text());
   });

});


$(document).ready(function () {
   function isOnScreen(elem) {
    if (elem.length === 0) {
        return;
    }
    let $window = jQuery(window),
        viewport_top = $window.scrollTop(),
        viewport_height = $window.height(),
        viewport_bottom = viewport_top + viewport_height,
        $elem = jQuery(elem),
        top = $elem.offset().top,
        height = $elem.height(),
        bottom = top + height;

    return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom);
}

let storedHash = window.location.hash;
window.setInterval(function () {
    if (window.location.hash != storedHash) {
        storedHash = window.location.hash;
        console.log(storedHash);
        if (isOnScreen('.tocify-focus') === false) {
            $('.tocify-wrapper').scroll();
            $(".tocify-wrapper").animate({
                scrollTop: $('.tocify-focus').offset().top/100
            }, 0);
        }
    }
}, 0);



});