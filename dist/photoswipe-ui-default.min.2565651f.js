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
})({42:[function(require,module,exports) {
var define;
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/*! PhotoSwipe Default UI - 4.1.2 - 2017-04-05
* http://photoswipe.com
* Copyright (c) 2017 Dmitry Semenov; */
!function (a, b) {
  "function" == typeof define && define.amd ? define(b) : "object" == (typeof exports === "undefined" ? "undefined" : _typeof(exports)) ? module.exports = b() : a.PhotoSwipeUI_Default = b();
}(this, function () {
  "use strict";
  var a = function a(_a, b) {
    var c,
        d,
        e,
        f,
        g,
        h,
        i,
        j,
        k,
        l,
        m,
        n,
        o,
        p,
        q,
        r,
        s,
        t,
        u,
        v = this,
        w = !1,
        x = !0,
        y = !0,
        z = { barsSize: { top: 44, bottom: "auto" }, closeElClasses: ["item", "caption", "zoom-wrap", "ui", "top-bar"], timeToIdle: 4e3, timeToIdleOutside: 1e3, loadingIndicatorDelay: 1e3, addCaptionHTMLFn: function addCaptionHTMLFn(a, b) {
        return a.title ? (b.children[0].innerHTML = a.title, !0) : (b.children[0].innerHTML = "", !1);
      }, closeEl: !0, captionEl: !0, fullscreenEl: !0, zoomEl: !0, shareEl: !0, counterEl: !0, arrowEl: !0, preloaderEl: !0, tapToClose: !1, tapToToggleControls: !0, clickToCloseNonZoomable: !0, shareButtons: [{ id: "facebook", label: "Share on Facebook", url: "https://www.facebook.com/sharer/sharer.php?u={{url}}" }, { id: "twitter", label: "Tweet", url: "https://twitter.com/intent/tweet?text={{text}}&url={{url}}" }, { id: "pinterest", label: "Pin it", url: "http://www.pinterest.com/pin/create/button/?url={{url}}&media={{image_url}}&description={{text}}" }, { id: "download", label: "Download image", url: "{{raw_image_url}}", download: !0 }], getImageURLForShare: function getImageURLForShare() {
        return _a.currItem.src || "";
      }, getPageURLForShare: function getPageURLForShare() {
        return window.location.href;
      }, getTextForShare: function getTextForShare() {
        return _a.currItem.title || "";
      }, indexIndicatorSep: " / ", fitControlsWidth: 1200 },
        A = function A(a) {
      if (r) return !0;a = a || window.event, q.timeToIdle && q.mouseUsed && !k && K();for (var c, d, e = a.target || a.srcElement, f = e.getAttribute("class") || "", g = 0; g < S.length; g++) {
        c = S[g], c.onTap && f.indexOf("pswp__" + c.name) > -1 && (c.onTap(), d = !0);
      }if (d) {
        a.stopPropagation && a.stopPropagation(), r = !0;var h = b.features.isOldAndroid ? 600 : 30;s = setTimeout(function () {
          r = !1;
        }, h);
      }
    },
        B = function B() {
      return !_a.likelyTouchDevice || q.mouseUsed || screen.width > q.fitControlsWidth;
    },
        C = function C(a, c, d) {
      b[(d ? "add" : "remove") + "Class"](a, "pswp__" + c);
    },
        D = function D() {
      var a = 1 === q.getNumItemsFn();a !== p && (C(d, "ui--one-slide", a), p = a);
    },
        E = function E() {
      C(i, "share-modal--hidden", y);
    },
        F = function F() {
      return y = !y, y ? (b.removeClass(i, "pswp__share-modal--fade-in"), setTimeout(function () {
        y && E();
      }, 300)) : (E(), setTimeout(function () {
        y || b.addClass(i, "pswp__share-modal--fade-in");
      }, 30)), y || H(), !1;
    },
        G = function G(b) {
      b = b || window.event;var c = b.target || b.srcElement;return _a.shout("shareLinkClick", b, c), !!c.href && (!!c.hasAttribute("download") || (window.open(c.href, "pswp_share", "scrollbars=yes,resizable=yes,toolbar=no,location=yes,width=550,height=420,top=100,left=" + (window.screen ? Math.round(screen.width / 2 - 275) : 100)), y || F(), !1));
    },
        H = function H() {
      for (var a, b, c, d, e, f = "", g = 0; g < q.shareButtons.length; g++) {
        a = q.shareButtons[g], c = q.getImageURLForShare(a), d = q.getPageURLForShare(a), e = q.getTextForShare(a), b = a.url.replace("{{url}}", encodeURIComponent(d)).replace("{{image_url}}", encodeURIComponent(c)).replace("{{raw_image_url}}", c).replace("{{text}}", encodeURIComponent(e)), f += '<a href="' + b + '" target="_blank" class="pswp__share--' + a.id + '"' + (a.download ? "download" : "") + ">" + a.label + "</a>", q.parseShareButtonOut && (f = q.parseShareButtonOut(a, f));
      }i.children[0].innerHTML = f, i.children[0].onclick = G;
    },
        I = function I(a) {
      for (var c = 0; c < q.closeElClasses.length; c++) {
        if (b.hasClass(a, "pswp__" + q.closeElClasses[c])) return !0;
      }
    },
        J = 0,
        K = function K() {
      clearTimeout(u), J = 0, k && v.setIdle(!1);
    },
        L = function L(a) {
      a = a ? a : window.event;var b = a.relatedTarget || a.toElement;b && "HTML" !== b.nodeName || (clearTimeout(u), u = setTimeout(function () {
        v.setIdle(!0);
      }, q.timeToIdleOutside));
    },
        M = function M() {
      q.fullscreenEl && !b.features.isOldAndroid && (c || (c = v.getFullscreenAPI()), c ? (b.bind(document, c.eventK, v.updateFullscreen), v.updateFullscreen(), b.addClass(_a.template, "pswp--supports-fs")) : b.removeClass(_a.template, "pswp--supports-fs"));
    },
        N = function N() {
      q.preloaderEl && (O(!0), l("beforeChange", function () {
        clearTimeout(o), o = setTimeout(function () {
          _a.currItem && _a.currItem.loading ? (!_a.allowProgressiveImg() || _a.currItem.img && !_a.currItem.img.naturalWidth) && O(!1) : O(!0);
        }, q.loadingIndicatorDelay);
      }), l("imageLoadComplete", function (b, c) {
        _a.currItem === c && O(!0);
      }));
    },
        O = function O(a) {
      n !== a && (C(m, "preloader--active", !a), n = a);
    },
        P = function P(a) {
      var c = a.vGap;if (B()) {
        var g = q.barsSize;if (q.captionEl && "auto" === g.bottom) {
          if (f || (f = b.createEl("pswp__caption pswp__caption--fake"), f.appendChild(b.createEl("pswp__caption__center")), d.insertBefore(f, e), b.addClass(d, "pswp__ui--fit")), q.addCaptionHTMLFn(a, f, !0)) {
            var h = f.clientHeight;c.bottom = parseInt(h, 10) || 44;
          } else c.bottom = g.top;
        } else c.bottom = "auto" === g.bottom ? 0 : g.bottom;c.top = g.top;
      } else c.top = c.bottom = 0;
    },
        Q = function Q() {
      q.timeToIdle && l("mouseUsed", function () {
        b.bind(document, "mousemove", K), b.bind(document, "mouseout", L), t = setInterval(function () {
          J++, 2 === J && v.setIdle(!0);
        }, q.timeToIdle / 2);
      });
    },
        R = function R() {
      l("onVerticalDrag", function (a) {
        x && a < .95 ? v.hideControls() : !x && a >= .95 && v.showControls();
      });var a;l("onPinchClose", function (b) {
        x && b < .9 ? (v.hideControls(), a = !0) : a && !x && b > .9 && v.showControls();
      }), l("zoomGestureEnded", function () {
        a = !1, a && !x && v.showControls();
      });
    },
        S = [{ name: "caption", option: "captionEl", onInit: function onInit(a) {
        e = a;
      } }, { name: "share-modal", option: "shareEl", onInit: function onInit(a) {
        i = a;
      }, onTap: function onTap() {
        F();
      } }, { name: "button--share", option: "shareEl", onInit: function onInit(a) {
        h = a;
      }, onTap: function onTap() {
        F();
      } }, { name: "button--zoom", option: "zoomEl", onTap: _a.toggleDesktopZoom }, { name: "counter", option: "counterEl", onInit: function onInit(a) {
        g = a;
      } }, { name: "button--close", option: "closeEl", onTap: _a.close }, { name: "button--arrow--left", option: "arrowEl", onTap: _a.prev }, { name: "button--arrow--right", option: "arrowEl", onTap: _a.next }, { name: "button--fs", option: "fullscreenEl", onTap: function onTap() {
        c.isFullscreen() ? c.exit() : c.enter();
      } }, { name: "preloader", option: "preloaderEl", onInit: function onInit(a) {
        m = a;
      } }],
        T = function T() {
      var a,
          c,
          e,
          f = function f(d) {
        if (d) for (var f = d.length, g = 0; g < f; g++) {
          a = d[g], c = a.className;for (var h = 0; h < S.length; h++) {
            e = S[h], c.indexOf("pswp__" + e.name) > -1 && (q[e.option] ? (b.removeClass(a, "pswp__element--disabled"), e.onInit && e.onInit(a)) : b.addClass(a, "pswp__element--disabled"));
          }
        }
      };f(d.children);var g = b.getChildByClass(d, "pswp__top-bar");g && f(g.children);
    };v.init = function () {
      b.extend(_a.options, z, !0), q = _a.options, d = b.getChildByClass(_a.scrollWrap, "pswp__ui"), l = _a.listen, R(), l("beforeChange", v.update), l("doubleTap", function (b) {
        var c = _a.currItem.initialZoomLevel;_a.getZoomLevel() !== c ? _a.zoomTo(c, b, 333) : _a.zoomTo(q.getDoubleTapZoom(!1, _a.currItem), b, 333);
      }), l("preventDragEvent", function (a, b, c) {
        var d = a.target || a.srcElement;d && d.getAttribute("class") && a.type.indexOf("mouse") > -1 && (d.getAttribute("class").indexOf("__caption") > 0 || /(SMALL|STRONG|EM)/i.test(d.tagName)) && (c.prevent = !1);
      }), l("bindEvents", function () {
        b.bind(d, "pswpTap click", A), b.bind(_a.scrollWrap, "pswpTap", v.onGlobalTap), _a.likelyTouchDevice || b.bind(_a.scrollWrap, "mouseover", v.onMouseOver);
      }), l("unbindEvents", function () {
        y || F(), t && clearInterval(t), b.unbind(document, "mouseout", L), b.unbind(document, "mousemove", K), b.unbind(d, "pswpTap click", A), b.unbind(_a.scrollWrap, "pswpTap", v.onGlobalTap), b.unbind(_a.scrollWrap, "mouseover", v.onMouseOver), c && (b.unbind(document, c.eventK, v.updateFullscreen), c.isFullscreen() && (q.hideAnimationDuration = 0, c.exit()), c = null);
      }), l("destroy", function () {
        q.captionEl && (f && d.removeChild(f), b.removeClass(e, "pswp__caption--empty")), i && (i.children[0].onclick = null), b.removeClass(d, "pswp__ui--over-close"), b.addClass(d, "pswp__ui--hidden"), v.setIdle(!1);
      }), q.showAnimationDuration || b.removeClass(d, "pswp__ui--hidden"), l("initialZoomIn", function () {
        q.showAnimationDuration && b.removeClass(d, "pswp__ui--hidden");
      }), l("initialZoomOut", function () {
        b.addClass(d, "pswp__ui--hidden");
      }), l("parseVerticalMargin", P), T(), q.shareEl && h && i && (y = !0), D(), Q(), M(), N();
    }, v.setIdle = function (a) {
      k = a, C(d, "ui--idle", a);
    }, v.update = function () {
      x && _a.currItem ? (v.updateIndexIndicator(), q.captionEl && (q.addCaptionHTMLFn(_a.currItem, e), C(e, "caption--empty", !_a.currItem.title)), w = !0) : w = !1, y || F(), D();
    }, v.updateFullscreen = function (d) {
      d && setTimeout(function () {
        _a.setScrollOffset(0, b.getScrollY());
      }, 50), b[(c.isFullscreen() ? "add" : "remove") + "Class"](_a.template, "pswp--fs");
    }, v.updateIndexIndicator = function () {
      q.counterEl && (g.innerHTML = _a.getCurrentIndex() + 1 + q.indexIndicatorSep + q.getNumItemsFn());
    }, v.onGlobalTap = function (c) {
      c = c || window.event;var d = c.target || c.srcElement;if (!r) if (c.detail && "mouse" === c.detail.pointerType) {
        if (I(d)) return void _a.close();b.hasClass(d, "pswp__img") && (1 === _a.getZoomLevel() && _a.getZoomLevel() <= _a.currItem.fitRatio ? q.clickToCloseNonZoomable && _a.close() : _a.toggleDesktopZoom(c.detail.releasePoint));
      } else if (q.tapToToggleControls && (x ? v.hideControls() : v.showControls()), q.tapToClose && (b.hasClass(d, "pswp__img") || I(d))) return void _a.close();
    }, v.onMouseOver = function (a) {
      a = a || window.event;var b = a.target || a.srcElement;C(d, "ui--over-close", I(b));
    }, v.hideControls = function () {
      b.addClass(d, "pswp__ui--hidden"), x = !1;
    }, v.showControls = function () {
      x = !0, w || v.update(), b.removeClass(d, "pswp__ui--hidden");
    }, v.supportsFullscreen = function () {
      var a = document;return !!(a.exitFullscreen || a.mozCancelFullScreen || a.webkitExitFullscreen || a.msExitFullscreen);
    }, v.getFullscreenAPI = function () {
      var b,
          c = document.documentElement,
          d = "fullscreenchange";return c.requestFullscreen ? b = { enterK: "requestFullscreen", exitK: "exitFullscreen", elementK: "fullscreenElement", eventK: d } : c.mozRequestFullScreen ? b = { enterK: "mozRequestFullScreen", exitK: "mozCancelFullScreen", elementK: "mozFullScreenElement", eventK: "moz" + d } : c.webkitRequestFullscreen ? b = { enterK: "webkitRequestFullscreen", exitK: "webkitExitFullscreen", elementK: "webkitFullscreenElement", eventK: "webkit" + d } : c.msRequestFullscreen && (b = { enterK: "msRequestFullscreen", exitK: "msExitFullscreen", elementK: "msFullscreenElement", eventK: "MSFullscreenChange" }), b && (b.enter = function () {
        return j = q.closeOnScroll, q.closeOnScroll = !1, "webkitRequestFullscreen" !== this.enterK ? _a.template[this.enterK]() : void _a.template[this.enterK](Element.ALLOW_KEYBOARD_INPUT);
      }, b.exit = function () {
        return q.closeOnScroll = j, document[this.exitK]();
      }, b.isFullscreen = function () {
        return document[this.elementK];
      }), b;
    };
  };return a;
});
},{}],25:[function(require,module,exports) {
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
},{}]},{},[25,42], null)
//# sourceMappingURL=/photoswipe-ui-default.min.2565651f.map