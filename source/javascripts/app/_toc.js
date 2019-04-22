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

//$(document).ready(function () {
//   $('.tocify-subheader li.tocify-item a').each(function () {
       $(this).attr('title', $(this).text());
//   });

// });


$(document).ready(function () {
    $('.tocify-subheader li.tocify-item a').each(function () {
        $(this).attr('title', $(this).text());
    });
    $('body').append('<style>.fab {position: fixed;bottom: 40px;right: 40px;color: #14283C;padding: 4px;font-size: 24px;line-height: 1;background: #FFF;opacity: 0.2;border-radius: 1000px;height: 24px;width: 24px;text-align: center;-webkit-transition: .2s linear;transition: .2s linear;}.fab:hover {opacity: 1;cursor: pointer;}</style><div class="fab">↑</div>');

    $('.fab').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});