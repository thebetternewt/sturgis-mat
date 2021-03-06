// Preloader //
$(window).on('load', function() {
  $('.preloader').fadeOut('slow');
});

jQuery(function($) {
  // Navbar Scroll Function
  var $window = $(window);
  $window.scroll(function() {
    var $scroll = $window.scrollTop();
    var $navbar = $('.navbar');
    if (!$navbar.hasClass('sticky-bottom')) {
      if ($scroll > 200) {
        $navbar.addClass('fixed-menu');
      } else {
        $navbar.removeClass('fixed-menu');
      }
    }
  });

  /*bottom menu fix*/
  if ($('nav.navbar').hasClass('sticky-bottom')) {
    var navHeight = $('.sticky-bottom').offset().top;
    $(window).scroll(function() {
      if ($(window).scrollTop() > navHeight) {
        $('.sticky-bottom').addClass('fixed-menu');
      } else {
        $('.sticky-bottom').removeClass('fixed-menu');
      }
    });
  }

  // Click Scroll Function
  $('.scroll').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate(
      {
        scrollTop: $(this.hash).offset().top
      },
      1000
    );
  });

  $('body').append(
    "<a href='#' class='back-top'><i class='fa fa-angle-up'></i></a>"
  );
  var amountScrolled = 700;
  var backBtn = $('a.back-top');
  $(window).on('scroll', function() {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.addClass('back-top-visible');
    } else {
      backBtn.removeClass('back-top-visible');
    }
  });
  backBtn.on('click', function() {
    $('html, body').animate(
      {
        scrollTop: 0
      },
      700
    );
    return false;
  });

  /*----- SideBar Menu On click -----*/
  var $menu_left = $('.side-nav-left');
  var $menu_right = $('.side-nav-right');
  var $menu_full = $('.full-nav');
  var $toggler = $('.menu_bars');
  if ($('.menu_bars').length) {
    $('body').addClass('side-nav-push');

    if ($toggler.hasClass('full')) {
      $toggler.on('click', function(e) {
        // Toggle menu bars active
        $.each($toggler, function() {
          $(this).toggleClass('active');
        });
        $menu_full.toggleClass('full-nav-open');
        e.stopPropagation();
      });
    }
  }

  // Close full menu on click;
  $menu_full.on('click', function() {
    $menu_full.toggleClass('full-nav-open');
    $.each($toggler, function() {
      $(this).removeClass('active');
    });
  });

  if ($('.navbar-logo-fade').length) {
    $window.on('scroll', function() {
      if ($window.scrollTop() > 590) {
        $('.navbar-logo-fade').addClass('fixed-fade');
        $('.navbar-logo-fade .navbar-brand').addClass('d-none');
      } else {
        $('.navbar-logo-fade').removeClass('fixed-fade');
        $('.navbar-logo-fade .navbar-brand').removeClass('d-none');
      }
    });
  }

  // Pricing Table Hover Function Toggle
  $('.pricing-table-inner').hover(
    function() {
      if ($window.width() > 768) {
        $('.pricing-table-inner.main').removeClass('active');
        $(this).addClass('active');
      }
    },
    function() {
      $(this).removeClass('active');
      $('.pricing-table-inner.main').addClass('active');
    }
  );

  // Main Page Slider Script + Initializing + Function For its Pagination Made In Swiper Slider
  var mainSLider = new Swiper('.main-slider-section-inner', {
    pagination: {
      // If we need pagination
      el: '.swiper-pagination',
      type: 'fraction'
    },
    effect: 'fade',
    loop: true,
    runCallbacksOnInit: true,
    navigation: {
      nextEl: '.main-next',
      prevEl: '.main-prev'
    },
    on: {
      init: function(e) {
        var $this = $(this);
        var element = $this[0].$el;
        var parentObj = $this[0];
        var activeSlide = parseInt(
          parentObj.slides[parentObj.activeIndex].getAttribute(
            'data-swiper-slide-index'
          )
        );
        $(element.find('[data-mainTotal="total"]')).text(
          parentObj.slides.length
        );
        $(element.find('[data-mainIndex="index"]')).text(
          parentObj.activeIndex + 1
        );
        $(element.find('.swiper-slide')).each(function(index) {
          if (!$(this).hasClass('swiper-slide-duplicate')) {
            var src = $(this).attr('data-image-src');
            $('.main-slider-preview div').removeClass('active');
            $('.main-slider-preview').append(
              '<div style=background:url(' +
                src +
                ')' +
                ' data-index=' +
                index +
                '> </div>'
            );
          }
        });
        $('.main-slider-preview ')
          .find('[data-index="' + (activeSlide + 2) + '"]')
          .addClass('active');
      },

      slideChange: function() {
        var $this = $(this);
        var element = $this[0].$el;
        var parentObj = $this[0];
        var activeSlide = parseInt(
          parentObj.slides[parentObj.activeIndex].getAttribute(
            'data-swiper-slide-index'
          )
        );
        var activeSlideJust = parentObj.slides[parentObj.activeIndex];
        $(element.find('[data-mainIndex="index"]')).text(
          $this[0].activeIndex + 1
        );
        $('.main-slider-preview div').removeClass('active');
        if (
          activeSlideJust.className.indexOf('swiper-slide-duplicate') > -1 &&
          activeSlide === 0
        ) {
          $('.main-slider-preview ')
            .find('[data-index="' + (0 + 2) + '"]')
            .addClass('active');
        } else if (parentObj.slides.length - 2 === activeSlide + 1) {
          $('.main-slider-preview ')
            .find('[data-index="' + 1 + '"]')
            .addClass('active');
        } else {
          $('.main-slider-preview ')
            .find('[data-index="' + (activeSlide + 2) + '"]')
            .addClass('active');
        }
      }
    }
  });
  $('.main-slider-preview').on('click', function() {
    mainSLider.slideNext();
  });

  // Main Slider Video
  new Swiper('.main-slider-section-inner-two', {
    allowTouchMove: false
  });

  // Main Slider three
  new Swiper('.main-slider-section-inner-three', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    effect: 'fade',
    autoplay: {
      delay: 3000
    }
  });

  // About Slider
  new Swiper('.about-company-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    effect: 'fade',
    autoplay: {
      delay: 3000
    }
  });

  // Team Slider Single image on left side
  if ($('.team-section').hasClass('team-section-two')) {
    new Swiper('.team-member-slider-2', {
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    });
  }

  // Team Member Sliders Includes 2 Slider One For Team Photo And Other For Team Detail
  if ($('.team-section').hasClass('team-section-one')) {
    // 1. Slider Team Photo rotating
    var teammemberslider = new Swiper('.team-member-slider', {
      slidesPerView: 3,
      allowTouchMove: false,
      centeredSlides: true,
      loop: true,
      slideToClickedSlide: true,
      effect: 'coverflow',
      coverflow: {
        rotate: 0,
        stretch: 100,
        depth: 200,
        modifier: 1,
        slideShadows: false
      },
      breakpoints: {
        // when window width is <= 768px
        768: {
          slidesPerView: 1,
          centeredSlides: false,
          effect: 'slide',
          allowTouchMove: true
        }
      }
    });

    // 2. Slider Team Detail
    var teammemberanimation = $('.team-member-progress-detail').first();
    teammemberanimation.show();
    teammemberanimation.addClass(
      'animated ' + teammemberanimation.data('animate')
    );
    var teammembersliderdetail = new Swiper('.team-member-detail-slider', {
      on: {
        slideChangeTransitionStart: function() {
          var $this = $(this);
          var maping = $($this[0].slides[$this[0].activeIndex]).find(
            '[data-slide="animated"]'
          );
          maping.map(function(k, v) {
            var target = $(v);
            target.hide();
            target.removeClass('animated ' + target.data('animate'));
          });
        },
        slideChangeTransitionEnd: function() {
          var $this = $(this);
          var maping = $($this[0].slides[$this[0].activeIndex]).find(
            '[data-slide="animated"]'
          );
          maping.map(function(k, v) {
            var target = $(v);
            target.show();
            target.addClass('animated ' + target.data('animate'));
          });
        }
      },
      allowTouchMove: false,
      loop: true,
      loopSlides: 3,
      slidesPerView: 'auto',
      slideToClickedSlide: true,
      breakpoints: {
        768: {
          slidesPerView: 1
        }
      }
    });
    teammemberslider.controller.control = teammembersliderdetail;
    teammembersliderdetail.controller.control = teammemberslider;
  }

  // Sponsors Slider
  new Swiper('.sponsors-slider-inner', {
    slidesPerView: '5',
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 1000
    },
    breakpoints: {
      1200: {
        slidesPerView: 4
      },
      992: {
        slidesPerView: 3
      },
      550: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      480: {
        slidesPerView: 1,
        spaceBetween: 0
      }
    }
  });

  // Blog Listing Image Slider
  new Swiper('.blog-listing-image-slider', {
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    },
    effect: 'fade',
    autoplay: {
      delay: 3000
    }
  });

  /*---- Wow Initializing ----*/
  /*new WOW().init();*/
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 0,
    mobile: false,
    live: true
  });
  new WOW().init();
});

// Initialize Photoswipe

const openPhotoSwipe = () => {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [
    {
      src: 'images/process-1.jpg',
      w: 230,
      h: 420,
      title: 'Fine mats begin as fine timber.'
    },
    // {
    //   src: 'images/process-2.jpg',
    //   w: 409,
    //   h: 448
    // },
    {
      src: 'images/process-3.jpg',
      w: 456,
      h: 248,
      title:
        'Our timber harvesting division can be seen here processing future mats.'
    },
    {
      src: 'images/process-4.jpg',
      w: 401,
      h: 265
    },
    {
      src: 'images/process-5.jpg',
      w: 384,
      h: 306,
      title:
        'Next stop, the Sturgis Mat Company’s innovative mat making facility...'
    },
    {
      src: 'images/process-6.jpg',
      w: 544,
      h: 337
    },
    {
      src: 'images/process-7.jpg',
      w: 576,
      h: 340
    },
    {
      src: 'images/process-8.jpg',
      w: 440,
      h: 280
    },
    {
      src: 'images/process-9.jpg',
      w: 366,
      h: 281,
      title:
        'Once the logs arrive at the Sturgis Mat Company’s facility, they are cut to the specified size  and length, and then readied for the hole boring process.'
    },
    {
      src: 'images/process-10.jpg',
      w: 396,
      h: 281
    },
    {
      src: 'images/process-11.jpg',
      w: 408,
      h: 258
    },
    {
      src: 'images/process-12.jpg',
      w: 611,
      h: 244,
      title:
        'The Sturgis Mat Company’s innovative mat making machine finishes the process off by boring the holes and installing the appropriate hardware (bolts, cables, etc.).'
    },
    {
      src: 'images/process-13.jpg',
      w: 343,
      h: 226
    },
    {
      src: 'images/process-14.jpg',
      w: 352,
      h: 184
    },
    {
      src: 'images/process-15.jpg',
      w: 633,
      h: 296
    },
    {
      src: 'images/process-16.jpg',
      w: 500,
      h: 272,
      title:
        'All that is left to do is apply the waxed based paint and ship them to the customer.'
    },
    {
      src: 'images/process-17.jpg',
      w: 408,
      h: 177
    }
  ];

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(
    pswpElement,
    PhotoSwipeUI_Default,
    items,
    options
  );
  gallery.init();
};
document.getElementById('pswp-btn').addEventListener('click', e => {
  openPhotoSwipe();
});
