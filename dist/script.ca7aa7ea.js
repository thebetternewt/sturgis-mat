// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  return newRequire;
})({36:[function(require,module,exports) {
jQuery(function ($) {
  'use strict';

  if ($('#google-map').length) {
    var initialize = function initialize() {
      //add map, the type of map
      var mapOptions = {
        zoom: 10,
        draggable: true,
        scrollwheel: false,
        animation: google.maps.Animation.DROP,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        center: new google.maps.LatLng(33.342444, -89.044062), // area location
        styles: [{
          stylers: [{
            saturation: -100
          }, {
            gamma: 1
          }]
        }, {
          elementType: 'labels.text.stroke',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.business',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.business',
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.place_of_worship',
          elementType: 'labels.text',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'poi.place_of_worship',
          elementType: 'labels.icon',
          stylers: [{
            visibility: 'off'
          }]
        }, {
          featureType: 'road',
          elementType: 'geometry',
          stylers: [{
            visibility: 'simplified'
          }]
        }, {
          featureType: 'water',
          stylers: [{
            visibility: 'on'
          }, {
            saturation: 50
          }, {
            gamma: 0
          }, {
            hue: '#82c1e1'
          }]
        }, {
          featureType: 'administrative.neighborhood',
          elementType: 'labels.text.fill',
          stylers: [{
            color: '#c5c5c5'
          }]
        }, {
          featureType: 'road.local',
          elementType: 'labels.text',
          stylers: [{
            weight: 0.9
          }, {
            color: '#000'
          }]
        }, {
          featureType: 'transit.station',
          elementType: 'labels.icon',
          stylers: [{
            gamma: 1
          }, {
            saturation: 50
          }]
        }]
      };
      var mapElement = document.getElementById('google-map');
      var map = new google.maps.Map(mapElement, mapOptions);

      //add locations
      var locations = [['<p"class="logomap">Sturgis Mat, Inc.</p>', 33.342444, -89.044062, 'pin.png']];
      //declare marker call it 'i'
      var marker, i;
      //declare infowindow
      var infowindow = new google.maps.InfoWindow();
      //add marker to each locations
      for (i = 0; i < locations.length; i++) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(locations[i][1], locations[i][2]),
          animation: google.maps.Animation.BOUNCE,
          map: map,
          icon: locations[i][3]
        });
        //click function to marker, pops up infowindow
        google.maps.event.addListener(marker, 'click', function (marker, i) {
          return function () {
            infowindow.setContent(locations[i][0]);
            infowindow.open(map, marker);
          };
        }(marker, i));
      }
    };

    google.maps.event.addDomListener(window, 'load', initialize);
  }
});
},{}],29:[function(require,module,exports) {
'use strict';

require('./maps.min');

// Preloader //
$(window).on('load', function () {
  $('.preloader').fadeOut('slow');
});

jQuery(function ($) {
  // Navbar Scroll Function
  var $window = $(window);
  $window.scroll(function () {
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
    $(window).scroll(function () {
      if ($(window).scrollTop() > navHeight) {
        $('.sticky-bottom').addClass('fixed-menu');
      } else {
        $('.sticky-bottom').removeClass('fixed-menu');
      }
    });
  }

  // Click Scroll Function
  $('.scroll').on('click', function (event) {
    event.preventDefault();
    $('html,body').animate({
      scrollTop: $(this.hash).offset().top
    }, 1000);
  });

  $('body').append("<a href='#' class='back-top'><i class='fa fa-angle-up'></i></a>");
  var amountScrolled = 700;
  var backBtn = $('a.back-top');
  $(window).on('scroll', function () {
    if ($(window).scrollTop() > amountScrolled) {
      backBtn.addClass('back-top-visible');
    } else {
      backBtn.removeClass('back-top-visible');
    }
  });
  backBtn.on('click', function () {
    $('html, body').animate({
      scrollTop: 0
    }, 700);
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
      $toggler.on('click', function (e) {
        // Toggle menu bars active
        $.each($toggler, function () {
          $(this).toggleClass('active');
        });
        $menu_full.toggleClass('full-nav-open');
        e.stopPropagation();
      });
    }
  }

  // Close full menu on click;
  $menu_full.on('click', function () {
    $menu_full.toggleClass('full-nav-open');
    $.each($toggler, function () {
      $(this).removeClass('active');
    });
  });

  if ($('.navbar-logo-fade').length) {
    $window.on('scroll', function () {
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
  $('.pricing-table-inner').hover(function () {
    if ($window.width() > 768) {
      $('.pricing-table-inner.main').removeClass('active');
      $(this).addClass('active');
    }
  }, function () {
    $(this).removeClass('active');
    $('.pricing-table-inner.main').addClass('active');
  });

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
      init: function init(e) {
        var $this = $(this);
        var element = $this[0].$el;
        var parentObj = $this[0];
        var activeSlide = parseInt(parentObj.slides[parentObj.activeIndex].getAttribute('data-swiper-slide-index'));
        $(element.find('[data-mainTotal="total"]')).text(parentObj.slides.length);
        $(element.find('[data-mainIndex="index"]')).text(parentObj.activeIndex + 1);
        $(element.find('.swiper-slide')).each(function (index) {
          if (!$(this).hasClass('swiper-slide-duplicate')) {
            var src = $(this).attr('data-image-src');
            $('.main-slider-preview div').removeClass('active');
            $('.main-slider-preview').append('<div style=background:url(' + src + ')' + ' data-index=' + index + '> </div>');
          }
        });
        $('.main-slider-preview ').find('[data-index="' + (activeSlide + 2) + '"]').addClass('active');
      },

      slideChange: function slideChange() {
        var $this = $(this);
        var element = $this[0].$el;
        var parentObj = $this[0];
        var activeSlide = parseInt(parentObj.slides[parentObj.activeIndex].getAttribute('data-swiper-slide-index'));
        var activeSlideJust = parentObj.slides[parentObj.activeIndex];
        $(element.find('[data-mainIndex="index"]')).text($this[0].activeIndex + 1);
        $('.main-slider-preview div').removeClass('active');
        if (activeSlideJust.className.indexOf('swiper-slide-duplicate') > -1 && activeSlide === 0) {
          $('.main-slider-preview ').find('[data-index="' + (0 + 2) + '"]').addClass('active');
        } else if (parentObj.slides.length - 2 === activeSlide + 1) {
          $('.main-slider-preview ').find('[data-index="' + 1 + '"]').addClass('active');
        } else {
          $('.main-slider-preview ').find('[data-index="' + (activeSlide + 2) + '"]').addClass('active');
        }
      }
    }
  });
  $('.main-slider-preview').on('click', function () {
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
    teammemberanimation.addClass('animated ' + teammemberanimation.data('animate'));
    var teammembersliderdetail = new Swiper('.team-member-detail-slider', {
      on: {
        slideChangeTransitionStart: function slideChangeTransitionStart() {
          var $this = $(this);
          var maping = $($this[0].slides[$this[0].activeIndex]).find('[data-slide="animated"]');
          maping.map(function (k, v) {
            var target = $(v);
            target.hide();
            target.removeClass('animated ' + target.data('animate'));
          });
        },
        slideChangeTransitionEnd: function slideChangeTransitionEnd() {
          var $this = $(this);
          var maping = $($this[0].slides[$this[0].activeIndex]).find('[data-slide="animated"]');
          maping.map(function (k, v) {
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

var openPhotoSwipe = function openPhotoSwipe() {
  var pswpElement = document.querySelectorAll('.pswp')[0];

  // build items array
  var items = [{
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
    title: 'Our timber harvesting division can be seen here processing future mats.'
  }, {
    src: 'images/process-4.jpg',
    w: 401,
    h: 265
  }, {
    src: 'images/process-5.jpg',
    w: 384,
    h: 306,
    title: 'Next stop, the Sturgis Mat Company’s innovative mat making facility...'
  }, {
    src: 'images/process-6.jpg',
    w: 544,
    h: 337
  }, {
    src: 'images/process-7.jpg',
    w: 576,
    h: 340
  }, {
    src: 'images/process-8.jpg',
    w: 440,
    h: 280
  }, {
    src: 'images/process-9.jpg',
    w: 366,
    h: 281,
    title: 'Once the logs arrive at the Sturgis Mat Company’s facility, they are cut to the specified size  and length, and then readied for the hole boring process.'
  }, {
    src: 'images/process-10.jpg',
    w: 396,
    h: 281
  }, {
    src: 'images/process-11.jpg',
    w: 408,
    h: 258
  }, {
    src: 'images/process-12.jpg',
    w: 611,
    h: 244,
    title: 'The Sturgis Mat Company’s innovative mat making machine finishes the process off by boring the holes and installing the appropriate hardware (bolts, cables, etc.).'
  }, {
    src: 'images/process-13.jpg',
    w: 343,
    h: 226
  }, {
    src: 'images/process-14.jpg',
    w: 352,
    h: 184
  }, {
    src: 'images/process-15.jpg',
    w: 633,
    h: 296
  }, {
    src: 'images/process-16.jpg',
    w: 500,
    h: 272,
    title: 'All that is left to do is apply the waxed based paint and ship them to the customer.'
  }, {
    src: 'images/process-17.jpg',
    w: 408,
    h: 177
  }];

  // define options (if needed)
  var options = {
    // optionName: 'option value'
    // for example:
    index: 0 // start at first slide
  };

  // Initializes and opens PhotoSwipe
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
  gallery.init();
};
document.getElementById('pswp-btn').addEventListener('click', function (e) {
  openPhotoSwipe();
});
},{"./maps.min":36}],25:[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '52429' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      console.clear();

      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
    }

    if (data.type === 'reload') {
      ws.close();
      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');

      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);

      removeErrorOverlay();

      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;

  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];
      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(+k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[25,29], null)
//# sourceMappingURL=/script.ca7aa7ea.map