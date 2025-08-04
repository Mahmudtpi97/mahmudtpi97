/* --------------------------------------------------
  * Copyright 2024 - MMH Develop by Mahmudul Hasan
* --------------------------------------------------*/
 (function($) {
	'use strict';

$(document).ready(function(){
    // Mobile Menu Icon 
    $('.mh-hamburger').on('click', function() {
        $(this).toggleClass('active');
        $("header .mh-mobile-menu").toggleClass('on-menu');
    });
    // Smooth scroll to top
    $('.mh-back-to-top').click(function (e) {
      e.preventDefault();
      $('html, body').animate({ scrollTop: 0 }, 1000);
      return false;
    });

   // Typed 
    var typedText = document.querySelector('#typed-text');
    var typedContent = document.querySelector('#typed-content');
    if(typedText && typedContent){
      function mh_Typed (){
        var typed = new Typed('#typed-text', {
          stringsElement: '#typed-content',
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 1000,
          startDelay: 1000,
          loop:true,
        });
      };
      mh_Typed();
    }
  // Counter Up 
  $('.mh-counter').counterUp({
      delay: 10,
      time: 1000
  });
    
  // Mixitup 
  function mh_portfolio_filter (){
    let mh_filter = document.querySelector('.mh_portfolio_filter');
    if (mh_filter) {
      var mixer = mixitup('.mh_portfolio_filter',{
          selectors: {
            control: '.mh_filter_item button',
          },
          load: {
            filter: '*',
        }
      });
    }
  };
  mh_portfolio_filter();

  // magnificPopup
  // image
  $('.mh-popup, .mh-portfolio-icon').magnificPopup({
      type:'image',
      gallery: {
        enabled: true
      },
  });
  // video
  $('.mh-popup-video').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',
                    id: function(url) {
                        return url.split('v=')[1]?.split('&')[0];
                    },
                    src: 'https://www.youtube.com/embed/%id%?autoplay=1'
                },
                vimeo: {
                    index: 'vimeo.com/',
                    id: function(url) {
                        return url.split('/').pop();
                    },
                    src: 'https://player.vimeo.com/video/%id%?autoplay=1'
                },
                mp4: {
                    index: '.mp4',
                    id: function(url) { return url; },
                    src: '%id%'
                }
            }
        }
    });
  
});
// End Document Ready Function 

// progress
jQuery('.mh-progress-bar').each(function() {
  var value = jQuery(this).attr('data-value');
  jQuery(this).find(".mh-progress-line").attr('data-value', value);
  jQuery(this).find(".mh-progress-line").css({'width': value }, "slow");
});

//Testimonial Slider 
var swiper = new Swiper(".mh-testimonial-slider", {
  loop: true,
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 1,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  breakpoints: {
    1199: {
      slidesPerView:2,
    },
    992: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    576: {
      slidesPerView: 1,
    },
    0: {
      slidesPerView: 1,
    }
  },
});


// Window load function
$(window).on('scroll', function() {
    var scroll = $(window).scrollTop();
    // Sticky Header 
    if (scroll >= 80) {
        $('.header-sticky').addClass('sticky');
    } else {
        $('.header-sticky').removeClass('sticky');
    }
    // Page Scrolling by Section id to Header Menu Link Active Class Add 
    var headerHeight = $("header").innerHeight();
    var HscrollPos = $(window).scrollTop() + headerHeight;
    $('section[id], div[id]').each(function () {
        var top = $(this).offset().top;
        var bottom = top + $(this).outerHeight();
        if (HscrollPos >= top && HscrollPos <= bottom) {
            var sectionId = $(this).attr('id');
            $('header .navbar ul li a.nav-link').removeClass('active');
            $('header .navbar ul li a.nav-link[href="#' + sectionId + '"]').addClass('active');
        }
    });

    // Show or hide the Back to Top button
    if ($(this).scrollTop() > 300) {
      $('.mh-back-to-top').fadeIn();
    } else {
        $('.mh-back-to-top').fadeOut();
    }
    // progress circle
    var scrollPos = $(document).scrollTop();
    var docHeight = $(document).height() - $(window).height();
    var scrollPercent = (scrollPos / docHeight) * 100;
    var strokeDashOffset = 300 - (scrollPercent / 100) * 300;
    $('.mh-progress-circle .progress').css('stroke-dashoffset', strokeDashOffset);
    // Scrolling to Zoom in and Out 
    $(".mh-zoom").css({
      // transform: 'translate3d(0%, -'+(scroll/100)+'%, 0) scale('+(-100 + scroll/1)/100+')',
    });
});

// wow class add to animation div 
Array.from(document.getElementsByClassName('animated')).forEach(function(element) {
  element.classList.add('wow');
});
new WOW().init();

})(jQuery);