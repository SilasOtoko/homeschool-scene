/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundle.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/webpack/buildin/module.js":
/*!***********************************!*\
  !*** (webpack)/buildin/module.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (module) {
  if (!module.webpackPolyfill) {
    module.deprecate = function () {};

    module.paths = []; // module.parent = undefined by default

    if (!module.children) module.children = [];
    Object.defineProperty(module, "loaded", {
      enumerable: true,
      get: function () {
        return module.l;
      }
    });
    Object.defineProperty(module, "id", {
      enumerable: true,
      get: function () {
        return module.i;
      }
    });
    module.webpackPolyfill = 1;
  }

  return module;
};

/***/ }),

/***/ "./src/js/bundle.js":
/*!**************************!*\
  !*** ./src/js/bundle.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rarebird_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rarebird-includes */ "./src/js/rarebird-includes.js");
/* harmony import */ var _rarebird_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_rarebird_includes__WEBPACK_IMPORTED_MODULE_0__);

console.log('bundle');

/***/ }),

/***/ "./src/js/rarebird-includes.js":
/*!*************************************!*\
  !*** ./src/js/rarebird-includes.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, module) {var __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

console.log('rarebird-include'); //
// Compiled Site Scripts
// ----------------------------------------------------------------------------
// Warning: Global.js is a COMPILED file! Edit a source file, or create a new
// one. See gulpfile.js!
//
//  #######
//     #    #    # #  ####      #  ####        ##
//     #    #    # # #          # #           #  #
//     #    ###### #  ####      #  ####      #    #
//     #    #    # #      #     #      #     ######
//     #    #    # # #    #     # #    #     #    #
//     #    #    # #  ####      #  ####      #    #
//  #####  ####### #     # ######  ### #       ####### ######
// #     # #     # ##   ## #     #  #  #       #       #     #
// #       #     # # # # # #     #  #  #       #       #     #
// #       #     # #  #  # ######   #  #       #####   #     #
// #       #     # #     # #        #  #       #       #     #
// #     # #     # #     # #        #  #       #       #     #
//  #####  ####### #     # #       ### ####### ####### ######
//
// ####### ### #       #######
// #        #  #       #
// #        #  #       #
// #####    #  #       #####
// #        #  #       #
// #        #  #       #
// #       ### ####### #######
//
// Warning: Global.js is a COMPILED file! Edit a source file, or create a new
// one. See gulpfile.babel.js!
// ----------------------------------------------------------------------------
//
// Polyfill for using forEach() on NodeLists
// --------------------------------------------------
// Adds support for IE 11 without calling in a 
// Babel dumptruck.
// --------------------------------------------------
// via https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach#Polyfill
// --------------------------------------------------

if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = function (callback, thisArg) {
    thisArg = thisArg || window;

    for (var i = 0; i < this.length; i++) {
      callback.call(thisArg, this[i], i, this);
    }
  };
}
/* ========================================================================
 * Bootstrap: transition.js v3.4.0
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict'; // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap');
    var transEndEventNames = {
      WebkitTransition: 'webkitTransitionEnd',
      MozTransition: 'transitionend',
      OTransition: 'oTransitionEnd otransitionend',
      transition: 'transitionend'
    };

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return {
          end: transEndEventNames[name]
        };
      }
    }

    return false; // explicit for ie8 (  ._.)
  } // http://blog.alexmaccaw.com/css-transitions


  $.fn.emulateTransitionEnd = function (duration) {
    var called = false;
    var $el = this;
    $(this).one('bsTransitionEnd', function () {
      called = true;
    });

    var callback = function callback() {
      if (!called) $($el).trigger($.support.transition.end);
    };

    setTimeout(callback, duration);
    return this;
  };

  $(function () {
    $.support.transition = transitionEnd();
    if (!$.support.transition) return;
    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function handle(e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments);
      }
    };
  });
}(jQuery);
/* ========================================================================
 * Bootstrap: alert.js v3.4.0
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]';

  var Alert = function Alert(el) {
    $(el).on('click', dismiss, this.close);
  };

  Alert.VERSION = '3.4.0';
  Alert.TRANSITION_DURATION = 150;

  Alert.prototype.close = function (e) {
    var $this = $(this);
    var selector = $this.attr('data-target');

    if (!selector) {
      selector = $this.attr('href');
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, ''); // strip for ie7
    }

    selector = selector === '#' ? [] : selector;
    var $parent = $(document).find(selector);
    if (e) e.preventDefault();

    if (!$parent.length) {
      $parent = $this.closest('.alert');
    }

    $parent.trigger(e = $.Event('close.bs.alert'));
    if (e.isDefaultPrevented()) return;
    $parent.removeClass('in');

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove();
    }

    $.support.transition && $parent.hasClass('fade') ? $parent.one('bsTransitionEnd', removeElement).emulateTransitionEnd(Alert.TRANSITION_DURATION) : removeElement();
  }; // ALERT PLUGIN DEFINITION
  // =======================


  function Plugin(option) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.alert');
      if (!data) $this.data('bs.alert', data = new Alert(this));
      if (typeof option == 'string') data[option].call($this);
    });
  }

  var old = $.fn.alert;
  $.fn.alert = Plugin;
  $.fn.alert.Constructor = Alert; // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old;
    return this;
  }; // ALERT DATA-API
  // ==============


  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close);
}(jQuery);
/* ========================================================================
 * Bootstrap: modal.js v3.4.0
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2016 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */

+function ($) {
  'use strict'; // MODAL CLASS DEFINITION
  // ======================

  var Modal = function Modal(element, options) {
    this.options = options;
    this.$body = $(document.body);
    this.$element = $(element);
    this.$dialog = this.$element.find('.modal-dialog');
    this.$backdrop = null;
    this.isShown = null;
    this.originalBodyPad = null;
    this.scrollbarWidth = 0;
    this.ignoreBackdropClick = false;

    if (this.options.remote) {
      this.$element.find('.modal-content').load(this.options.remote, $.proxy(function () {
        this.$element.trigger('loaded.bs.modal');
      }, this));
    }
  };

  Modal.VERSION = '3.4.0';
  Modal.TRANSITION_DURATION = 300;
  Modal.BACKDROP_TRANSITION_DURATION = 150;
  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  };

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget);
  };

  Modal.prototype.show = function (_relatedTarget) {
    var that = this;
    var e = $.Event('show.bs.modal', {
      relatedTarget: _relatedTarget
    });
    this.$element.trigger(e);
    if (this.isShown || e.isDefaultPrevented()) return;
    this.isShown = true;
    this.checkScrollbar();
    this.setScrollbar();
    this.$body.addClass('modal-open');
    this.escape();
    this.resize();
    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this));
    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true;
      });
    });
    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade');

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body); // don't move modals dom position
      }

      that.$element.show().scrollTop(0);
      that.adjustDialog();

      if (transition) {
        that.$element[0].offsetWidth; // force reflow
      }

      that.$element.addClass('in');
      that.enforceFocus();
      var e = $.Event('shown.bs.modal', {
        relatedTarget: _relatedTarget
      });
      transition ? that.$dialog // wait for modal to slide in
      .one('bsTransitionEnd', function () {
        that.$element.trigger('focus').trigger(e);
      }).emulateTransitionEnd(Modal.TRANSITION_DURATION) : that.$element.trigger('focus').trigger(e);
    });
  };

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault();
    e = $.Event('hide.bs.modal');
    this.$element.trigger(e);
    if (!this.isShown || e.isDefaultPrevented()) return;
    this.isShown = false;
    this.escape();
    this.resize();
    $(document).off('focusin.bs.modal');
    this.$element.removeClass('in').off('click.dismiss.bs.modal').off('mouseup.dismiss.bs.modal');
    this.$dialog.off('mousedown.dismiss.bs.modal');
    $.support.transition && this.$element.hasClass('fade') ? this.$element.one('bsTransitionEnd', $.proxy(this.hideModal, this)).emulateTransitionEnd(Modal.TRANSITION_DURATION) : this.hideModal();
  };

  Modal.prototype.enforceFocus = function () {
    $(document).off('focusin.bs.modal') // guard against infinite focus loop
    .on('focusin.bs.modal', $.proxy(function (e) {
      if (document !== e.target && this.$element[0] !== e.target && !this.$element.has(e.target).length) {
        this.$element.trigger('focus');
      }
    }, this));
  };

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide();
      }, this));
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal');
    }
  };

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this));
    } else {
      $(window).off('resize.bs.modal');
    }
  };

  Modal.prototype.hideModal = function () {
    var that = this;
    this.$element.hide();
    this.backdrop(function () {
      that.$body.removeClass('modal-open');
      that.resetAdjustments();
      that.resetScrollbar();
      that.$element.trigger('hidden.bs.modal');
    });
  };

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove();
    this.$backdrop = null;
  };

  Modal.prototype.backdrop = function (callback) {
    var that = this;
    var animate = this.$element.hasClass('fade') ? 'fade' : '';

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate;
      this.$backdrop = $(document.createElement('div')).addClass('modal-backdrop ' + animate).appendTo(this.$body);
      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false;
          return;
        }

        if (e.target !== e.currentTarget) return;
        this.options.backdrop == 'static' ? this.$element[0].focus() : this.hide();
      }, this));
      if (doAnimate) this.$backdrop[0].offsetWidth; // force reflow

      this.$backdrop.addClass('in');
      if (!callback) return;
      doAnimate ? this.$backdrop.one('bsTransitionEnd', callback).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callback();
    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in');

      var callbackRemove = function callbackRemove() {
        that.removeBackdrop();
        callback && callback();
      };

      $.support.transition && this.$element.hasClass('fade') ? this.$backdrop.one('bsTransitionEnd', callbackRemove).emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) : callbackRemove();
    } else if (callback) {
      callback();
    }
  }; // these following methods are used to handle overflowing modals


  Modal.prototype.handleUpdate = function () {
    this.adjustDialog();
  };

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight;
    this.$element.css({
      paddingLeft: !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    });
  };

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    });
  };

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth;

    if (!fullWindowWidth) {
      // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect();
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left);
    }

    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth;
    this.scrollbarWidth = this.measureScrollbar();
  };

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt(this.$body.css('padding-right') || 0, 10);
    this.originalBodyPad = document.body.style.paddingRight || '';
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth);
  };

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad);
  };

  Modal.prototype.measureScrollbar = function () {
    // thx walsh
    var scrollDiv = document.createElement('div');
    scrollDiv.className = 'modal-scrollbar-measure';
    this.$body.append(scrollDiv);
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
    this.$body[0].removeChild(scrollDiv);
    return scrollbarWidth;
  }; // MODAL PLUGIN DEFINITION
  // =======================


  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this = $(this);
      var data = $this.data('bs.modal');
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), _typeof(option) == 'object' && option);
      if (!data) $this.data('bs.modal', data = new Modal(this, options));
      if (typeof option == 'string') data[option](_relatedTarget);else if (options.show) data.show(_relatedTarget);
    });
  }

  var old = $.fn.modal;
  $.fn.modal = Plugin;
  $.fn.modal.Constructor = Modal; // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old;
    return this;
  }; // MODAL DATA-API
  // ==============


  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this = $(this);
    var href = $this.attr('href');
    var target = $this.attr('data-target') || href && href.replace(/.*(?=#[^\s]+$)/, ''); // strip for ie7

    var $target = $(document).find(target);
    var option = $target.data('bs.modal') ? 'toggle' : $.extend({
      remote: !/#/.test(href) && href
    }, $target.data(), $this.data());
    if ($this.is('a')) e.preventDefault();
    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return; // only register focus restorer if modal will actually get shown

      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus');
      });
    });
    Plugin.call($target, option, this);
  });
}(jQuery);
/*global define:false */

/**
 * Copyright 2012-2017 Craig Campbell
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * Mousetrap is a simple keyboard shortcut library for Javascript with
 * no external dependencies
 *
 * @version 1.6.2
 * @url craig.is/killing/mice
 */

(function (window, document, undefined) {
  // Check if mousetrap is used inside browser, if not, return
  if (!window) {
    return;
  }
  /**
   * mapping of special keycodes to their corresponding keys
   *
   * everything in this dictionary cannot use keypress events
   * so it has to be here to map to the correct keycodes for
   * keyup/keydown events
   *
   * @type {Object}
   */


  var _MAP = {
    8: 'backspace',
    9: 'tab',
    13: 'enter',
    16: 'shift',
    17: 'ctrl',
    18: 'alt',
    20: 'capslock',
    27: 'esc',
    32: 'space',
    33: 'pageup',
    34: 'pagedown',
    35: 'end',
    36: 'home',
    37: 'left',
    38: 'up',
    39: 'right',
    40: 'down',
    45: 'ins',
    46: 'del',
    91: 'meta',
    93: 'meta',
    224: 'meta'
  };
  /**
   * mapping for special characters so they can support
   *
   * this dictionary is only used incase you want to bind a
   * keyup or keydown event to one of these keys
   *
   * @type {Object}
   */

  var _KEYCODE_MAP = {
    106: '*',
    107: '+',
    109: '-',
    110: '.',
    111: '/',
    186: ';',
    187: '=',
    188: ',',
    189: '-',
    190: '.',
    191: '/',
    192: '`',
    219: '[',
    220: '\\',
    221: ']',
    222: '\''
  };
  /**
   * this is a mapping of keys that require shift on a US keypad
   * back to the non shift equivelents
   *
   * this is so you can use keyup events with these keys
   *
   * note that this will only work reliably on US keyboards
   *
   * @type {Object}
   */

  var _SHIFT_MAP = {
    '~': '`',
    '!': '1',
    '@': '2',
    '#': '3',
    '$': '4',
    '%': '5',
    '^': '6',
    '&': '7',
    '*': '8',
    '(': '9',
    ')': '0',
    '_': '-',
    '+': '=',
    ':': ';',
    '\"': '\'',
    '<': ',',
    '>': '.',
    '?': '/',
    '|': '\\'
  };
  /**
   * this is a list of special strings you can use to map
   * to modifier keys when you specify your keyboard shortcuts
   *
   * @type {Object}
   */

  var _SPECIAL_ALIASES = {
    'option': 'alt',
    'command': 'meta',
    'return': 'enter',
    'escape': 'esc',
    'plus': '+',
    'mod': /Mac|iPod|iPhone|iPad/.test(navigator.platform) ? 'meta' : 'ctrl'
  };
  /**
   * variable to store the flipped version of _MAP from above
   * needed to check if we should use keypress or not when no action
   * is specified
   *
   * @type {Object|undefined}
   */

  var _REVERSE_MAP;
  /**
   * loop through the f keys, f1 to f19 and add them to the map
   * programatically
   */


  for (var i = 1; i < 20; ++i) {
    _MAP[111 + i] = 'f' + i;
  }
  /**
   * loop through to map numbers on the numeric keypad
   */


  for (i = 0; i <= 9; ++i) {
    // This needs to use a string cause otherwise since 0 is falsey
    // mousetrap will never fire for numpad 0 pressed as part of a keydown
    // event.
    //
    // @see https://github.com/ccampbell/mousetrap/pull/258
    _MAP[i + 96] = i.toString();
  }
  /**
   * cross browser add event method
   *
   * @param {Element|HTMLDocument} object
   * @param {string} type
   * @param {Function} callback
   * @returns void
   */


  function _addEvent(object, type, callback) {
    if (object.addEventListener) {
      object.addEventListener(type, callback, false);
      return;
    }

    object.attachEvent('on' + type, callback);
  }
  /**
   * takes the event and returns the key character
   *
   * @param {Event} e
   * @return {string}
   */


  function _characterFromEvent(e) {
    // for keypress events we should return the character as is
    if (e.type == 'keypress') {
      var character = String.fromCharCode(e.which); // if the shift key is not pressed then it is safe to assume
      // that we want the character to be lowercase.  this means if
      // you accidentally have caps lock on then your key bindings
      // will continue to work
      //
      // the only side effect that might not be desired is if you
      // bind something like 'A' cause you want to trigger an
      // event when capital A is pressed caps lock will no longer
      // trigger the event.  shift+a will though.

      if (!e.shiftKey) {
        character = character.toLowerCase();
      }

      return character;
    } // for non keypress events the special maps are needed


    if (_MAP[e.which]) {
      return _MAP[e.which];
    }

    if (_KEYCODE_MAP[e.which]) {
      return _KEYCODE_MAP[e.which];
    } // if it is not in the special map
    // with keydown and keyup events the character seems to always
    // come in as an uppercase character whether you are pressing shift
    // or not.  we should make sure it is always lowercase for comparisons


    return String.fromCharCode(e.which).toLowerCase();
  }
  /**
   * checks if two arrays are equal
   *
   * @param {Array} modifiers1
   * @param {Array} modifiers2
   * @returns {boolean}
   */


  function _modifiersMatch(modifiers1, modifiers2) {
    return modifiers1.sort().join(',') === modifiers2.sort().join(',');
  }
  /**
   * takes a key event and figures out what the modifiers are
   *
   * @param {Event} e
   * @returns {Array}
   */


  function _eventModifiers(e) {
    var modifiers = [];

    if (e.shiftKey) {
      modifiers.push('shift');
    }

    if (e.altKey) {
      modifiers.push('alt');
    }

    if (e.ctrlKey) {
      modifiers.push('ctrl');
    }

    if (e.metaKey) {
      modifiers.push('meta');
    }

    return modifiers;
  }
  /**
   * prevents default for this event
   *
   * @param {Event} e
   * @returns void
   */


  function _preventDefault(e) {
    if (e.preventDefault) {
      e.preventDefault();
      return;
    }

    e.returnValue = false;
  }
  /**
   * stops propogation for this event
   *
   * @param {Event} e
   * @returns void
   */


  function _stopPropagation(e) {
    if (e.stopPropagation) {
      e.stopPropagation();
      return;
    }

    e.cancelBubble = true;
  }
  /**
   * determines if the keycode specified is a modifier key or not
   *
   * @param {string} key
   * @returns {boolean}
   */


  function _isModifier(key) {
    return key == 'shift' || key == 'ctrl' || key == 'alt' || key == 'meta';
  }
  /**
   * reverses the map lookup so that we can look for specific keys
   * to see what can and can't use keypress
   *
   * @return {Object}
   */


  function _getReverseMap() {
    if (!_REVERSE_MAP) {
      _REVERSE_MAP = {};

      for (var key in _MAP) {
        // pull out the numeric keypad from here cause keypress should
        // be able to detect the keys from the character
        if (key > 95 && key < 112) {
          continue;
        }

        if (_MAP.hasOwnProperty(key)) {
          _REVERSE_MAP[_MAP[key]] = key;
        }
      }
    }

    return _REVERSE_MAP;
  }
  /**
   * picks the best action based on the key combination
   *
   * @param {string} key - character for key
   * @param {Array} modifiers
   * @param {string=} action passed in
   */


  function _pickBestAction(key, modifiers, action) {
    // if no action was picked in we should try to pick the one
    // that we think would work best for this key
    if (!action) {
      action = _getReverseMap()[key] ? 'keydown' : 'keypress';
    } // modifier keys don't work as expected with keypress,
    // switch to keydown


    if (action == 'keypress' && modifiers.length) {
      action = 'keydown';
    }

    return action;
  }
  /**
   * Converts from a string key combination to an array
   *
   * @param  {string} combination like "command+shift+l"
   * @return {Array}
   */


  function _keysFromString(combination) {
    if (combination === '+') {
      return ['+'];
    }

    combination = combination.replace(/\+{2}/g, '+plus');
    return combination.split('+');
  }
  /**
   * Gets info for a specific key combination
   *
   * @param  {string} combination key combination ("command+s" or "a" or "*")
   * @param  {string=} action
   * @returns {Object}
   */


  function _getKeyInfo(combination, action) {
    var keys;
    var key;
    var i;
    var modifiers = []; // take the keys from this pattern and figure out what the actual
    // pattern is all about

    keys = _keysFromString(combination);

    for (i = 0; i < keys.length; ++i) {
      key = keys[i]; // normalize key names

      if (_SPECIAL_ALIASES[key]) {
        key = _SPECIAL_ALIASES[key];
      } // if this is not a keypress event then we should
      // be smart about using shift keys
      // this will only work for US keyboards however


      if (action && action != 'keypress' && _SHIFT_MAP[key]) {
        key = _SHIFT_MAP[key];
        modifiers.push('shift');
      } // if this key is a modifier then add it to the list of modifiers


      if (_isModifier(key)) {
        modifiers.push(key);
      }
    } // depending on what the key combination is
    // we will try to pick the best event for it


    action = _pickBestAction(key, modifiers, action);
    return {
      key: key,
      modifiers: modifiers,
      action: action
    };
  }

  function _belongsTo(element, ancestor) {
    if (element === null || element === document) {
      return false;
    }

    if (element === ancestor) {
      return true;
    }

    return _belongsTo(element.parentNode, ancestor);
  }

  function Mousetrap(targetElement) {
    var self = this;
    targetElement = targetElement || document;

    if (!(self instanceof Mousetrap)) {
      return new Mousetrap(targetElement);
    }
    /**
     * element to attach key events to
     *
     * @type {Element}
     */


    self.target = targetElement;
    /**
     * a list of all the callbacks setup via Mousetrap.bind()
     *
     * @type {Object}
     */

    self._callbacks = {};
    /**
     * direct map of string combinations to callbacks used for trigger()
     *
     * @type {Object}
     */

    self._directMap = {};
    /**
     * keeps track of what level each sequence is at since multiple
     * sequences can start out with the same sequence
     *
     * @type {Object}
     */

    var _sequenceLevels = {};
    /**
     * variable to store the setTimeout call
     *
     * @type {null|number}
     */

    var _resetTimer;
    /**
     * temporary state where we will ignore the next keyup
     *
     * @type {boolean|string}
     */


    var _ignoreNextKeyup = false;
    /**
     * temporary state where we will ignore the next keypress
     *
     * @type {boolean}
     */

    var _ignoreNextKeypress = false;
    /**
     * are we currently inside of a sequence?
     * type of action ("keyup" or "keydown" or "keypress") or false
     *
     * @type {boolean|string}
     */

    var _nextExpectedAction = false;
    /**
     * resets all sequence counters except for the ones passed in
     *
     * @param {Object} doNotReset
     * @returns void
     */

    function _resetSequences(doNotReset) {
      doNotReset = doNotReset || {};
      var activeSequences = false,
          key;

      for (key in _sequenceLevels) {
        if (doNotReset[key]) {
          activeSequences = true;
          continue;
        }

        _sequenceLevels[key] = 0;
      }

      if (!activeSequences) {
        _nextExpectedAction = false;
      }
    }
    /**
     * finds all callbacks that match based on the keycode, modifiers,
     * and action
     *
     * @param {string} character
     * @param {Array} modifiers
     * @param {Event|Object} e
     * @param {string=} sequenceName - name of the sequence we are looking for
     * @param {string=} combination
     * @param {number=} level
     * @returns {Array}
     */


    function _getMatches(character, modifiers, e, sequenceName, combination, level) {
      var i;
      var callback;
      var matches = [];
      var action = e.type; // if there are no events related to this keycode

      if (!self._callbacks[character]) {
        return [];
      } // if a modifier key is coming up on its own we should allow it


      if (action == 'keyup' && _isModifier(character)) {
        modifiers = [character];
      } // loop through all callbacks for the key that was pressed
      // and see if any of them match


      for (i = 0; i < self._callbacks[character].length; ++i) {
        callback = self._callbacks[character][i]; // if a sequence name is not specified, but this is a sequence at
        // the wrong level then move onto the next match

        if (!sequenceName && callback.seq && _sequenceLevels[callback.seq] != callback.level) {
          continue;
        } // if the action we are looking for doesn't match the action we got
        // then we should keep going


        if (action != callback.action) {
          continue;
        } // if this is a keypress event and the meta key and control key
        // are not pressed that means that we need to only look at the
        // character, otherwise check the modifiers as well
        //
        // chrome will not fire a keypress if meta or control is down
        // safari will fire a keypress if meta or meta+shift is down
        // firefox will fire a keypress if meta or control is down


        if (action == 'keypress' && !e.metaKey && !e.ctrlKey || _modifiersMatch(modifiers, callback.modifiers)) {
          // when you bind a combination or sequence a second time it
          // should overwrite the first one.  if a sequenceName or
          // combination is specified in this call it does just that
          //
          // @todo make deleting its own method?
          var deleteCombo = !sequenceName && callback.combo == combination;
          var deleteSequence = sequenceName && callback.seq == sequenceName && callback.level == level;

          if (deleteCombo || deleteSequence) {
            self._callbacks[character].splice(i, 1);
          }

          matches.push(callback);
        }
      }

      return matches;
    }
    /**
     * actually calls the callback function
     *
     * if your callback function returns false this will use the jquery
     * convention - prevent default and stop propogation on the event
     *
     * @param {Function} callback
     * @param {Event} e
     * @returns void
     */


    function _fireCallback(callback, e, combo, sequence) {
      // if this event should not happen stop here
      if (self.stopCallback(e, e.target || e.srcElement, combo, sequence)) {
        return;
      }

      if (callback(e, combo) === false) {
        _preventDefault(e);

        _stopPropagation(e);
      }
    }
    /**
     * handles a character key event
     *
     * @param {string} character
     * @param {Array} modifiers
     * @param {Event} e
     * @returns void
     */


    self._handleKey = function (character, modifiers, e) {
      var callbacks = _getMatches(character, modifiers, e);

      var i;
      var doNotReset = {};
      var maxLevel = 0;
      var processedSequenceCallback = false; // Calculate the maxLevel for sequences so we can only execute the longest callback sequence

      for (i = 0; i < callbacks.length; ++i) {
        if (callbacks[i].seq) {
          maxLevel = Math.max(maxLevel, callbacks[i].level);
        }
      } // loop through matching callbacks for this key event


      for (i = 0; i < callbacks.length; ++i) {
        // fire for all sequence callbacks
        // this is because if for example you have multiple sequences
        // bound such as "g i" and "g t" they both need to fire the
        // callback for matching g cause otherwise you can only ever
        // match the first one
        if (callbacks[i].seq) {
          // only fire callbacks for the maxLevel to prevent
          // subsequences from also firing
          //
          // for example 'a option b' should not cause 'option b' to fire
          // even though 'option b' is part of the other sequence
          //
          // any sequences that do not match here will be discarded
          // below by the _resetSequences call
          if (callbacks[i].level != maxLevel) {
            continue;
          }

          processedSequenceCallback = true; // keep a list of which sequences were matches for later

          doNotReset[callbacks[i].seq] = 1;

          _fireCallback(callbacks[i].callback, e, callbacks[i].combo, callbacks[i].seq);

          continue;
        } // if there were no sequence matches but we are still here
        // that means this is a regular match so we should fire that


        if (!processedSequenceCallback) {
          _fireCallback(callbacks[i].callback, e, callbacks[i].combo);
        }
      } // if the key you pressed matches the type of sequence without
      // being a modifier (ie "keyup" or "keypress") then we should
      // reset all sequences that were not matched by this event
      //
      // this is so, for example, if you have the sequence "h a t" and you
      // type "h e a r t" it does not match.  in this case the "e" will
      // cause the sequence to reset
      //
      // modifier keys are ignored because you can have a sequence
      // that contains modifiers such as "enter ctrl+space" and in most
      // cases the modifier key will be pressed before the next key
      //
      // also if you have a sequence such as "ctrl+b a" then pressing the
      // "b" key will trigger a "keypress" and a "keydown"
      //
      // the "keydown" is expected when there is a modifier, but the
      // "keypress" ends up matching the _nextExpectedAction since it occurs
      // after and that causes the sequence to reset
      //
      // we ignore keypresses in a sequence that directly follow a keydown
      // for the same character


      var ignoreThisKeypress = e.type == 'keypress' && _ignoreNextKeypress;

      if (e.type == _nextExpectedAction && !_isModifier(character) && !ignoreThisKeypress) {
        _resetSequences(doNotReset);
      }

      _ignoreNextKeypress = processedSequenceCallback && e.type == 'keydown';
    };
    /**
     * handles a keydown event
     *
     * @param {Event} e
     * @returns void
     */


    function _handleKeyEvent(e) {
      // normalize e.which for key events
      // @see http://stackoverflow.com/questions/4285627/javascript-keycode-vs-charcode-utter-confusion
      if (typeof e.which !== 'number') {
        e.which = e.keyCode;
      }

      var character = _characterFromEvent(e); // no character found then stop


      if (!character) {
        return;
      } // need to use === for the character check because the character can be 0


      if (e.type == 'keyup' && _ignoreNextKeyup === character) {
        _ignoreNextKeyup = false;
        return;
      }

      self.handleKey(character, _eventModifiers(e), e);
    }
    /**
     * called to set a 1 second timeout on the specified sequence
     *
     * this is so after each key press in the sequence you have 1 second
     * to press the next key before you have to start over
     *
     * @returns void
     */


    function _resetSequenceTimer() {
      clearTimeout(_resetTimer);
      _resetTimer = setTimeout(_resetSequences, 1000);
    }
    /**
     * binds a key sequence to an event
     *
     * @param {string} combo - combo specified in bind call
     * @param {Array} keys
     * @param {Function} callback
     * @param {string=} action
     * @returns void
     */


    function _bindSequence(combo, keys, callback, action) {
      // start off by adding a sequence level record for this combination
      // and setting the level to 0
      _sequenceLevels[combo] = 0;
      /**
       * callback to increase the sequence level for this sequence and reset
       * all other sequences that were active
       *
       * @param {string} nextAction
       * @returns {Function}
       */

      function _increaseSequence(nextAction) {
        return function () {
          _nextExpectedAction = nextAction;
          ++_sequenceLevels[combo];

          _resetSequenceTimer();
        };
      }
      /**
       * wraps the specified callback inside of another function in order
       * to reset all sequence counters as soon as this sequence is done
       *
       * @param {Event} e
       * @returns void
       */


      function _callbackAndReset(e) {
        _fireCallback(callback, e, combo); // we should ignore the next key up if the action is key down
        // or keypress.  this is so if you finish a sequence and
        // release the key the final key will not trigger a keyup


        if (action !== 'keyup') {
          _ignoreNextKeyup = _characterFromEvent(e);
        } // weird race condition if a sequence ends with the key
        // another sequence begins with


        setTimeout(_resetSequences, 10);
      } // loop through keys one at a time and bind the appropriate callback
      // function.  for any key leading up to the final one it should
      // increase the sequence. after the final, it should reset all sequences
      //
      // if an action is specified in the original bind call then that will
      // be used throughout.  otherwise we will pass the action that the
      // next key in the sequence should match.  this allows a sequence
      // to mix and match keypress and keydown events depending on which
      // ones are better suited to the key provided


      for (var i = 0; i < keys.length; ++i) {
        var isFinal = i + 1 === keys.length;
        var wrappedCallback = isFinal ? _callbackAndReset : _increaseSequence(action || _getKeyInfo(keys[i + 1]).action);

        _bindSingle(keys[i], wrappedCallback, action, combo, i);
      }
    }
    /**
     * binds a single keyboard combination
     *
     * @param {string} combination
     * @param {Function} callback
     * @param {string=} action
     * @param {string=} sequenceName - name of sequence if part of sequence
     * @param {number=} level - what part of the sequence the command is
     * @returns void
     */


    function _bindSingle(combination, callback, action, sequenceName, level) {
      // store a direct mapped reference for use with Mousetrap.trigger
      self._directMap[combination + ':' + action] = callback; // make sure multiple spaces in a row become a single space

      combination = combination.replace(/\s+/g, ' ');
      var sequence = combination.split(' ');
      var info; // if this pattern is a sequence of keys then run through this method
      // to reprocess each pattern one key at a time

      if (sequence.length > 1) {
        _bindSequence(combination, sequence, callback, action);

        return;
      }

      info = _getKeyInfo(combination, action); // make sure to initialize array if this is the first time
      // a callback is added for this key

      self._callbacks[info.key] = self._callbacks[info.key] || []; // remove an existing match if there is one

      _getMatches(info.key, info.modifiers, {
        type: info.action
      }, sequenceName, combination, level); // add this call back to the array
      // if it is a sequence put it at the beginning
      // if not put it at the end
      //
      // this is important because the way these are processed expects
      // the sequence ones to come first


      self._callbacks[info.key][sequenceName ? 'unshift' : 'push']({
        callback: callback,
        modifiers: info.modifiers,
        action: info.action,
        seq: sequenceName,
        level: level,
        combo: combination
      });
    }
    /**
     * binds multiple combinations to the same callback
     *
     * @param {Array} combinations
     * @param {Function} callback
     * @param {string|undefined} action
     * @returns void
     */


    self._bindMultiple = function (combinations, callback, action) {
      for (var i = 0; i < combinations.length; ++i) {
        _bindSingle(combinations[i], callback, action);
      }
    }; // start!


    _addEvent(targetElement, 'keypress', _handleKeyEvent);

    _addEvent(targetElement, 'keydown', _handleKeyEvent);

    _addEvent(targetElement, 'keyup', _handleKeyEvent);
  }
  /**
   * binds an event to mousetrap
   *
   * can be a single key, a combination of keys separated with +,
   * an array of keys, or a sequence of keys separated by spaces
   *
   * be sure to list the modifier keys first to make sure that the
   * correct key ends up getting bound (the last key in the pattern)
   *
   * @param {string|Array} keys
   * @param {Function} callback
   * @param {string=} action - 'keypress', 'keydown', or 'keyup'
   * @returns void
   */


  Mousetrap.prototype.bind = function (keys, callback, action) {
    var self = this;
    keys = keys instanceof Array ? keys : [keys];

    self._bindMultiple.call(self, keys, callback, action);

    return self;
  };
  /**
   * unbinds an event to mousetrap
   *
   * the unbinding sets the callback function of the specified key combo
   * to an empty function and deletes the corresponding key in the
   * _directMap dict.
   *
   * TODO: actually remove this from the _callbacks dictionary instead
   * of binding an empty function
   *
   * the keycombo+action has to be exactly the same as
   * it was defined in the bind method
   *
   * @param {string|Array} keys
   * @param {string} action
   * @returns void
   */


  Mousetrap.prototype.unbind = function (keys, action) {
    var self = this;
    return self.bind.call(self, keys, function () {}, action);
  };
  /**
   * triggers an event that has already been bound
   *
   * @param {string} keys
   * @param {string=} action
   * @returns void
   */


  Mousetrap.prototype.trigger = function (keys, action) {
    var self = this;

    if (self._directMap[keys + ':' + action]) {
      self._directMap[keys + ':' + action]({}, keys);
    }

    return self;
  };
  /**
   * resets the library back to its initial state.  this is useful
   * if you want to clear out the current keyboard shortcuts and bind
   * new ones - for example if you switch to another page
   *
   * @returns void
   */


  Mousetrap.prototype.reset = function () {
    var self = this;
    self._callbacks = {};
    self._directMap = {};
    return self;
  };
  /**
   * should we stop this event before firing off callbacks
   *
   * @param {Event} e
   * @param {Element} element
   * @return {boolean}
   */


  Mousetrap.prototype.stopCallback = function (e, element) {
    var self = this; // if the element has the class "mousetrap" then no need to stop

    if ((' ' + element.className + ' ').indexOf(' mousetrap ') > -1) {
      return false;
    }

    if (_belongsTo(element, self.target)) {
      return false;
    } // stop for input, select, and textarea


    return element.tagName == 'INPUT' || element.tagName == 'SELECT' || element.tagName == 'TEXTAREA' || element.isContentEditable;
  };
  /**
   * exposes _handleKey publicly so it can be overwritten by extensions
   */


  Mousetrap.prototype.handleKey = function () {
    var self = this;
    return self._handleKey.apply(self, arguments);
  };
  /**
   * allow custom key mappings
   */


  Mousetrap.addKeycodes = function (object) {
    for (var key in object) {
      if (object.hasOwnProperty(key)) {
        _MAP[key] = object[key];
      }
    }

    _REVERSE_MAP = null;
  };
  /**
   * Init the global mousetrap functions
   *
   * This method is needed to allow the global mousetrap functions to work
   * now that mousetrap is a constructor function.
   */


  Mousetrap.init = function () {
    var documentMousetrap = Mousetrap(document);

    for (var method in documentMousetrap) {
      if (method.charAt(0) !== '_') {
        Mousetrap[method] = function (method) {
          return function () {
            return documentMousetrap[method].apply(documentMousetrap, arguments);
          };
        }(method);
      }
    }
  };

  Mousetrap.init(); // expose mousetrap to the global object

  window.Mousetrap = Mousetrap; // expose as a common js module

  if ( true && module.exports) {
    module.exports = Mousetrap;
  } // expose mousetrap as an AMD module


  if (true) {
    !(__WEBPACK_AMD_DEFINE_RESULT__ = (function () {
      return Mousetrap;
    }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
})(typeof window !== 'undefined' ? window : null, typeof window !== 'undefined' ? document : null); // luhn extra validators


window.ParsleyConfig = window.ParsleyConfig || {};
window.ParsleyConfig.validators = window.ParsleyConfig.validators || {};
window.ParsleyConfig.validators.luhn = {
  fn: function fn(value) {
    value = value.replace(/[ -]/g, '');
    var digit;
    var n;

    var _j;

    var _len1;

    var _ref2;

    var sum = 0;
    _ref2 = value.split('').reverse();

    for (n = _j = 0, _len1 = _ref2.length; _j < _len1; n = ++_j) {
      digit = _ref2[n];
      digit = +digit;

      if (n % 2) {
        digit *= 2;

        if (digit < 10) {
          sum += digit;
        } else {
          sum += digit - 9;
        }
      } else {
        sum += digit;
      }
    }

    return sum % 10 === 0;
  },
  priority: 32
};
/*!
* Parsley.js
* Version 2.8.1 - built Sat, Feb 3rd 2018, 2:27 pm
* http://parsleyjs.org
* Guillaume Potier - <guillaume@wisembly.com>
* Marc-Andre Lafortune - <petroselinum@marc-andre.ca>
* MIT Licensed
*/
// The source code below is generated by babel as
// Parsley is written in ECMAScript 6
//

var _slice = Array.prototype.slice;

var _slicedToArray = function () {
  function sliceIterator(arr, i) {
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;

    try {
      for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i['return']) _i['return']();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  return function (arr, i) {
    if (Array.isArray(arr)) {
      return arr;
    } else if (Symbol.iterator in Object(arr)) {
      return sliceIterator(arr, i);
    } else {
      throw new TypeError('Invalid attempt to destructure non-iterable instance');
    }
  };
}();

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

function _toConsumableArray(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  } else {
    return Array.from(arr);
  }
}

(function (global, factory) {
  ( false ? undefined : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(__webpack_require__(/*! jquery */ "jquery")) :  true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "jquery")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : undefined;
})(this, function ($) {
  'use strict';

  var globalID = 1;
  var pastWarnings = {};
  var Utils = {
    // Parsley DOM-API
    // returns object from dom attributes and values
    attr: function attr(element, namespace, obj) {
      var i;
      var attribute;
      var attributes;
      var regex = new RegExp('^' + namespace, 'i');
      if ('undefined' === typeof obj) obj = {};else {
        // Clear all own properties. This won't affect prototype's values
        for (i in obj) {
          if (obj.hasOwnProperty(i)) delete obj[i];
        }
      }
      if (!element) return obj;
      attributes = element.attributes;

      for (i = attributes.length; i--;) {
        attribute = attributes[i];

        if (attribute && attribute.specified && regex.test(attribute.name)) {
          obj[this.camelize(attribute.name.slice(namespace.length))] = this.deserializeValue(attribute.value);
        }
      }

      return obj;
    },
    checkAttr: function checkAttr(element, namespace, _checkAttr) {
      return element.hasAttribute(namespace + _checkAttr);
    },
    setAttr: function setAttr(element, namespace, attr, value) {
      element.setAttribute(this.dasherize(namespace + attr), String(value));
    },
    getType: function getType(element) {
      return element.getAttribute('type') || 'text';
    },
    generateID: function generateID() {
      return '' + globalID++;
    },

    /** Third party functions **/
    deserializeValue: function deserializeValue(value) {
      var num;

      try {
        return value ? value == "true" || (value == "false" ? false : value == "null" ? null : !isNaN(num = Number(value)) ? num : /^[\[\{]/.test(value) ? JSON.parse(value) : value) : value;
      } catch (e) {
        return value;
      }
    },
    // Zepto camelize function
    camelize: function camelize(str) {
      return str.replace(/-+(.)?/g, function (match, chr) {
        return chr ? chr.toUpperCase() : '';
      });
    },
    // Zepto dasherize function
    dasherize: function dasherize(str) {
      return str.replace(/::/g, '/').replace(/([A-Z]+)([A-Z][a-z])/g, '$1_$2').replace(/([a-z\d])([A-Z])/g, '$1_$2').replace(/_/g, '-').toLowerCase();
    },
    warn: function warn() {
      var _window$console;

      if (window.console && 'function' === typeof window.console.warn) (_window$console = window.console).warn.apply(_window$console, arguments);
    },
    warnOnce: function warnOnce(msg) {
      if (!pastWarnings[msg]) {
        pastWarnings[msg] = true;
        this.warn.apply(this, arguments);
      }
    },
    _resetWarnings: function _resetWarnings() {
      pastWarnings = {};
    },
    trimString: function trimString(string) {
      return string.replace(/^\s+|\s+$/g, '');
    },
    parse: {
      date: function date(string) {
        var parsed = string.match(/^(\d{4,})-(\d\d)-(\d\d)$/);
        if (!parsed) return null;

        var _parsed$map = parsed.map(function (x) {
          return parseInt(x, 10);
        });

        var _parsed$map2 = _slicedToArray(_parsed$map, 4);

        var _ = _parsed$map2[0];
        var year = _parsed$map2[1];
        var month = _parsed$map2[2];
        var day = _parsed$map2[3];
        var date = new Date(year, month - 1, day);
        if (date.getFullYear() !== year || date.getMonth() + 1 !== month || date.getDate() !== day) return null;
        return date;
      },
      string: function string(_string) {
        return _string;
      },
      integer: function integer(string) {
        if (isNaN(string)) return null;
        return parseInt(string, 10);
      },
      number: function number(string) {
        if (isNaN(string)) throw null;
        return parseFloat(string);
      },
      'boolean': function _boolean(string) {
        return !/^\s*false\s*$/i.test(string);
      },
      object: function object(string) {
        return Utils.deserializeValue(string);
      },
      regexp: function regexp(_regexp) {
        var flags = ''; // Test if RegExp is literal, if not, nothing to be done, otherwise, we need to isolate flags and pattern

        if (/^\/.*\/(?:[gimy]*)$/.test(_regexp)) {
          // Replace the regexp literal string with the first match group: ([gimy]*)
          // If no flag is present, this will be a blank string
          flags = _regexp.replace(/.*\/([gimy]*)$/, '$1'); // Again, replace the regexp literal string with the first match group:
          // everything excluding the opening and closing slashes and the flags

          _regexp = _regexp.replace(new RegExp('^/(.*?)/' + flags + '$'), '$1');
        } else {
          // Anchor regexp:
          _regexp = '^' + _regexp + '$';
        }

        return new RegExp(_regexp, flags);
      }
    },
    parseRequirement: function parseRequirement(requirementType, string) {
      var converter = this.parse[requirementType || 'string'];
      if (!converter) throw 'Unknown requirement specification: "' + requirementType + '"';
      var converted = converter(string);
      if (converted === null) throw 'Requirement is not a ' + requirementType + ': "' + string + '"';
      return converted;
    },
    namespaceEvents: function namespaceEvents(events, namespace) {
      events = this.trimString(events || '').split(/\s+/);
      if (!events[0]) return '';
      return $.map(events, function (evt) {
        return evt + '.' + namespace;
      }).join(' ');
    },
    difference: function difference(array, remove) {
      // This is O(N^2), should be optimized
      var result = [];
      $.each(array, function (_, elem) {
        if (remove.indexOf(elem) == -1) result.push(elem);
      });
      return result;
    },
    // Alter-ego to native Promise.all, but for jQuery
    all: function all(promises) {
      // jQuery treats $.when() and $.when(singlePromise) differently; let's avoid that and add spurious elements
      return $.when.apply($, _toConsumableArray(promises).concat([42, 42]));
    },
    // Object.create polyfill, see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create#Polyfill
    objectCreate: Object.create || function () {
      var Object = function Object() {};

      return function (prototype) {
        if (arguments.length > 1) {
          throw Error('Second argument not supported');
        }

        if (_typeof(prototype) != 'object') {
          throw TypeError('Argument must be an object');
        }

        Object.prototype = prototype;
        var result = new Object();
        Object.prototype = null;
        return result;
      };
    }(),
    _SubmitSelector: 'input[type="submit"], button:submit'
  }; // All these options could be overriden and specified directly in DOM using
  // `data-parsley-` default DOM-API
  // eg: `inputs` can be set in DOM using `data-parsley-inputs="input, textarea"`
  // eg: `data-parsley-stop-on-first-failing-constraint="false"`

  var Defaults = {
    // ### General
    // Default data-namespace for DOM API
    namespace: 'data-parsley-',
    // Supported inputs by default
    inputs: 'input, textarea, select',
    // Excluded inputs by default
    excluded: 'input[type=button], input[type=submit], input[type=reset], input[type=hidden]',
    // Stop validating field on highest priority failing constraint
    priorityEnabled: true,
    // ### Field only
    // identifier used to group together inputs (e.g. radio buttons...)
    multiple: null,
    // identifier (or array of identifiers) used to validate only a select group of inputs
    group: null,
    // ### UI
    // Enable\Disable error messages
    uiEnabled: true,
    // Key events threshold before validation
    validationThreshold: 3,
    // Focused field on form validation error. 'first'|'last'|'none'
    focus: 'first',
    // event(s) that will trigger validation before first failure. eg: `input`...
    trigger: false,
    // event(s) that will trigger validation after first failure.
    triggerAfterFailure: 'input',
    // Class that would be added on every failing validation Parsley field
    errorClass: 'parsley-error',
    // Same for success validation
    successClass: 'parsley-success',
    // Return the `$element` that will receive these above success or error classes
    // Could also be (and given directly from DOM) a valid selector like `'#div'`
    classHandler: function classHandler(Field) {},
    // Return the `$element` where errors will be appended
    // Could also be (and given directly from DOM) a valid selector like `'#div'`
    errorsContainer: function errorsContainer(Field) {},
    // ul elem that would receive errors' list
    errorsWrapper: '<ul class="parsley-errors-list"></ul>',
    // li elem that would receive error message
    errorTemplate: '<li></li>'
  };

  var Base = function Base() {
    this.__id__ = Utils.generateID();
  };

  Base.prototype = {
    asyncSupport: true,
    // Deprecated
    _pipeAccordingToValidationResult: function _pipeAccordingToValidationResult() {
      var _this = this;

      var pipe = function pipe() {
        var r = $.Deferred();
        if (true !== _this.validationResult) r.reject();
        return r.resolve().promise();
      };

      return [pipe, pipe];
    },
    actualizeOptions: function actualizeOptions() {
      Utils.attr(this.element, this.options.namespace, this.domOptions);
      if (this.parent && this.parent.actualizeOptions) this.parent.actualizeOptions();
      return this;
    },
    _resetOptions: function _resetOptions(initOptions) {
      this.domOptions = Utils.objectCreate(this.parent.options);
      this.options = Utils.objectCreate(this.domOptions); // Shallow copy of ownProperties of initOptions:

      for (var i in initOptions) {
        if (initOptions.hasOwnProperty(i)) this.options[i] = initOptions[i];
      }

      this.actualizeOptions();
    },
    _listeners: null,
    // Register a callback for the given event name
    // Callback is called with context as the first argument and the `this`
    // The context is the current parsley instance, or window.Parsley if global
    // A return value of `false` will interrupt the calls
    on: function on(name, fn) {
      this._listeners = this._listeners || {};
      var queue = this._listeners[name] = this._listeners[name] || [];
      queue.push(fn);
      return this;
    },
    // Deprecated. Use `on` instead
    subscribe: function subscribe(name, fn) {
      $.listenTo(this, name.toLowerCase(), fn);
    },
    // Unregister a callback (or all if none is given) for the given event name
    off: function off(name, fn) {
      var queue = this._listeners && this._listeners[name];

      if (queue) {
        if (!fn) {
          delete this._listeners[name];
        } else {
          for (var i = queue.length; i--;) {
            if (queue[i] === fn) queue.splice(i, 1);
          }
        }
      }

      return this;
    },
    // Deprecated. Use `off`
    unsubscribe: function unsubscribe(name, fn) {
      $.unsubscribeTo(this, name.toLowerCase());
    },
    // Trigger an event of the given name
    // A return value of `false` interrupts the callback chain
    // Returns false if execution was interrupted
    trigger: function trigger(name, target, extraArg) {
      target = target || this;
      var queue = this._listeners && this._listeners[name];
      var result;
      var parentResult;

      if (queue) {
        for (var i = queue.length; i--;) {
          result = queue[i].call(target, target, extraArg);
          if (result === false) return result;
        }
      }

      if (this.parent) {
        return this.parent.trigger(name, target, extraArg);
      }

      return true;
    },
    asyncIsValid: function asyncIsValid(group, force) {
      Utils.warnOnce("asyncIsValid is deprecated; please use whenValid instead");
      return this.whenValid({
        group: group,
        force: force
      });
    },
    _findRelated: function _findRelated() {
      return this.options.multiple ? $(this.parent.element.querySelectorAll('[' + this.options.namespace + 'multiple="' + this.options.multiple + '"]')) : this.$element;
    }
  };

  var convertArrayRequirement = function convertArrayRequirement(string, length) {
    var m = string.match(/^\s*\[(.*)\]\s*$/);
    if (!m) throw 'Requirement is not an array: "' + string + '"';
    var values = m[1].split(',').map(Utils.trimString);
    if (values.length !== length) throw 'Requirement has ' + values.length + ' values when ' + length + ' are needed';
    return values;
  };

  var convertExtraOptionRequirement = function convertExtraOptionRequirement(requirementSpec, string, extraOptionReader) {
    var main = null;
    var extra = {};

    for (var key in requirementSpec) {
      if (key) {
        var value = extraOptionReader(key);
        if ('string' === typeof value) value = Utils.parseRequirement(requirementSpec[key], value);
        extra[key] = value;
      } else {
        main = Utils.parseRequirement(requirementSpec[key], string);
      }
    }

    return [main, extra];
  }; // A Validator needs to implement the methods `validate` and `parseRequirements`


  var Validator = function Validator(spec) {
    $.extend(true, this, spec);
  };

  Validator.prototype = {
    // Returns `true` iff the given `value` is valid according the given requirements.
    validate: function validate(value, requirementFirstArg) {
      if (this.fn) {
        // Legacy style validator
        if (arguments.length > 3) // If more args then value, requirement, instance...
          requirementFirstArg = [].slice.call(arguments, 1, -1); // Skip first arg (value) and last (instance), combining the rest

        return this.fn(value, requirementFirstArg);
      }

      if (Array.isArray(value)) {
        if (!this.validateMultiple) throw 'Validator `' + this.name + '` does not handle multiple values';
        return this.validateMultiple.apply(this, arguments);
      } else {
        var instance = arguments[arguments.length - 1];

        if (this.validateDate && instance._isDateInput()) {
          arguments[0] = Utils.parse.date(arguments[0]);
          if (arguments[0] === null) return false;
          return this.validateDate.apply(this, arguments);
        }

        if (this.validateNumber) {
          if (isNaN(value)) return false;
          arguments[0] = parseFloat(arguments[0]);
          return this.validateNumber.apply(this, arguments);
        }

        if (this.validateString) {
          return this.validateString.apply(this, arguments);
        }

        throw 'Validator `' + this.name + '` only handles multiple values';
      }
    },
    // Parses `requirements` into an array of arguments,
    // according to `this.requirementType`
    parseRequirements: function parseRequirements(requirements, extraOptionReader) {
      if ('string' !== typeof requirements) {
        // Assume requirement already parsed
        // but make sure we return an array
        return Array.isArray(requirements) ? requirements : [requirements];
      }

      var type = this.requirementType;

      if (Array.isArray(type)) {
        var values = convertArrayRequirement(requirements, type.length);

        for (var i = 0; i < values.length; i++) {
          values[i] = Utils.parseRequirement(type[i], values[i]);
        }

        return values;
      } else if ($.isPlainObject(type)) {
        return convertExtraOptionRequirement(type, requirements, extraOptionReader);
      } else {
        return [Utils.parseRequirement(type, requirements)];
      }
    },
    // Defaults:
    requirementType: 'string',
    priority: 2
  };

  var ValidatorRegistry = function ValidatorRegistry(validators, catalog) {
    this.__class__ = 'ValidatorRegistry'; // Default Parsley locale is en

    this.locale = 'en';
    this.init(validators || {}, catalog || {});
  };

  var typeTesters = {
    email: /^((([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-zA-Z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-zA-Z]|\d|-|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-zA-Z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/,
    // Follow https://www.w3.org/TR/html5/infrastructure.html#floating-point-numbers
    number: /^-?(\d*\.)?\d+(e[-+]?\d+)?$/i,
    integer: /^-?\d+$/,
    digits: /^\d+$/,
    alphanum: /^\w+$/i,
    date: {
      test: function test(value) {
        return Utils.parse.date(value) !== null;
      }
    },
    url: new RegExp("^" + // protocol identifier
    "(?:(?:https?|ftp)://)?" + // ** mod: make scheme optional
    // user:pass authentication
    "(?:\\S+(?::\\S*)?@)?" + "(?:" + // IP address exclusion
    // private & local networks
    // "(?!(?:10|127)(?:\\.\\d{1,3}){3})" +   // ** mod: allow local networks
    // "(?!(?:169\\.254|192\\.168)(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
    // "(?!172\\.(?:1[6-9]|2\\d|3[0-1])(?:\\.\\d{1,3}){2})" +  // ** mod: allow local networks
    // IP address dotted notation octets
    // excludes loopback network 0.0.0.0
    // excludes reserved space >= 224.0.0.0
    // excludes network & broacast addresses
    // (first & last IP address of each class)
    "(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])" + "(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}" + "(?:\\.(?:[1-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))" + "|" + // host name
    "(?:(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)" + // domain name
    "(?:\\.(?:[a-zA-Z\\u00a1-\\uffff0-9]-*)*[a-zA-Z\\u00a1-\\uffff0-9]+)*" + // TLD identifier
    "(?:\\.(?:[a-zA-Z\\u00a1-\\uffff]{2,}))" + ")" + // port number
    "(?::\\d{2,5})?" + // resource path
    "(?:/\\S*)?" + "$")
  };
  typeTesters.range = typeTesters.number; // See http://stackoverflow.com/a/10454560/8279

  var decimalPlaces = function decimalPlaces(num) {
    var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);

    if (!match) {
      return 0;
    }

    return Math.max(0, // Number of digits right of decimal point.
    (match[1] ? match[1].length : 0) - ( // Adjust for scientific notation.
    match[2] ? +match[2] : 0));
  }; // parseArguments('number', ['1', '2']) => [1, 2]


  var ValidatorRegistry__parseArguments = function ValidatorRegistry__parseArguments(type, args) {
    return args.map(Utils.parse[type]);
  }; // operatorToValidator returns a validating function for an operator function, applied to the given type


  var ValidatorRegistry__operatorToValidator = function ValidatorRegistry__operatorToValidator(type, operator) {
    return function (value) {
      for (var _len = arguments.length, requirementsAndInput = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        requirementsAndInput[_key - 1] = arguments[_key];
      }

      requirementsAndInput.pop(); // Get rid of `input` argument

      return operator.apply(undefined, [value].concat(_toConsumableArray(ValidatorRegistry__parseArguments(type, requirementsAndInput))));
    };
  };

  var ValidatorRegistry__comparisonOperator = function ValidatorRegistry__comparisonOperator(operator) {
    return {
      validateDate: ValidatorRegistry__operatorToValidator('date', operator),
      validateNumber: ValidatorRegistry__operatorToValidator('number', operator),
      requirementType: operator.length <= 2 ? 'string' : ['string', 'string'],
      // Support operators with a 1 or 2 requirement(s)
      priority: 30
    };
  };

  ValidatorRegistry.prototype = {
    init: function init(validators, catalog) {
      this.catalog = catalog; // Copy prototype's validators:

      this.validators = _extends({}, this.validators);

      for (var name in validators) {
        this.addValidator(name, validators[name].fn, validators[name].priority);
      }

      window.Parsley.trigger('parsley:validator:init');
    },
    // Set new messages locale if we have dictionary loaded in ParsleyConfig.i18n
    setLocale: function setLocale(locale) {
      if ('undefined' === typeof this.catalog[locale]) throw new Error(locale + ' is not available in the catalog');
      this.locale = locale;
      return this;
    },
    // Add a new messages catalog for a given locale. Set locale for this catalog if set === `true`
    addCatalog: function addCatalog(locale, messages, set) {
      if ('object' === _typeof(messages)) this.catalog[locale] = messages;
      if (true === set) return this.setLocale(locale);
      return this;
    },
    // Add a specific message for a given constraint in a given locale
    addMessage: function addMessage(locale, name, message) {
      if ('undefined' === typeof this.catalog[locale]) this.catalog[locale] = {};
      this.catalog[locale][name] = message;
      return this;
    },
    // Add messages for a given locale
    addMessages: function addMessages(locale, nameMessageObject) {
      for (var name in nameMessageObject) {
        this.addMessage(locale, name, nameMessageObject[name]);
      }

      return this;
    },
    // Add a new validator
    //
    //    addValidator('custom', {
    //        requirementType: ['integer', 'integer'],
    //        validateString: function(value, from, to) {},
    //        priority: 22,
    //        messages: {
    //          en: "Hey, that's no good",
    //          fr: "Aye aye, pas bon du tout",
    //        }
    //    })
    //
    // Old API was addValidator(name, function, priority)
    //
    addValidator: function addValidator(name, arg1, arg2) {
      if (this.validators[name]) Utils.warn('Validator "' + name + '" is already defined.');else if (Defaults.hasOwnProperty(name)) {
        Utils.warn('"' + name + '" is a restricted keyword and is not a valid validator name.');
        return;
      }
      return this._setValidator.apply(this, arguments);
    },
    hasValidator: function hasValidator(name) {
      return !!this.validators[name];
    },
    updateValidator: function updateValidator(name, arg1, arg2) {
      if (!this.validators[name]) {
        Utils.warn('Validator "' + name + '" is not already defined.');
        return this.addValidator.apply(this, arguments);
      }

      return this._setValidator.apply(this, arguments);
    },
    removeValidator: function removeValidator(name) {
      if (!this.validators[name]) Utils.warn('Validator "' + name + '" is not defined.');
      delete this.validators[name];
      return this;
    },
    _setValidator: function _setValidator(name, validator, priority) {
      if ('object' !== _typeof(validator)) {
        // Old style validator, with `fn` and `priority`
        validator = {
          fn: validator,
          priority: priority
        };
      }

      if (!validator.validate) {
        validator = new Validator(validator);
      }

      this.validators[name] = validator;

      for (var locale in validator.messages || {}) {
        this.addMessage(locale, name, validator.messages[locale]);
      }

      return this;
    },
    getErrorMessage: function getErrorMessage(constraint) {
      var message; // Type constraints are a bit different, we have to match their requirements too to find right error message

      if ('type' === constraint.name) {
        var typeMessages = this.catalog[this.locale][constraint.name] || {};
        message = typeMessages[constraint.requirements];
      } else message = this.formatMessage(this.catalog[this.locale][constraint.name], constraint.requirements);

      return message || this.catalog[this.locale].defaultMessage || this.catalog.en.defaultMessage;
    },
    // Kind of light `sprintf()` implementation
    formatMessage: function formatMessage(string, parameters) {
      if ('object' === _typeof(parameters)) {
        for (var i in parameters) {
          string = this.formatMessage(string, parameters[i]);
        }

        return string;
      }

      return 'string' === typeof string ? string.replace(/%s/i, parameters) : '';
    },
    // Here is the Parsley default validators list.
    // A validator is an object with the following key values:
    //  - priority: an integer
    //  - requirement: 'string' (default), 'integer', 'number', 'regexp' or an Array of these
    //  - validateString, validateMultiple, validateNumber: functions returning `true`, `false` or a promise
    // Alternatively, a validator can be a function that returns such an object
    //
    validators: {
      notblank: {
        validateString: function validateString(value) {
          return /\S/.test(value);
        },
        priority: 2
      },
      required: {
        validateMultiple: function validateMultiple(values) {
          return values.length > 0;
        },
        validateString: function validateString(value) {
          return /\S/.test(value);
        },
        priority: 512
      },
      type: {
        validateString: function validateString(value, type) {
          var _ref = arguments.length <= 2 || arguments[2] === undefined ? {} : arguments[2];

          var _ref$step = _ref.step;
          var step = _ref$step === undefined ? 'any' : _ref$step;
          var _ref$base = _ref.base;
          var base = _ref$base === undefined ? 0 : _ref$base;
          var tester = typeTesters[type];

          if (!tester) {
            throw new Error('validator type `' + type + '` is not supported');
          }

          if (!tester.test(value)) return false;

          if ('number' === type) {
            if (!/^any$/i.test(step || '')) {
              var nb = Number(value);
              var decimals = Math.max(decimalPlaces(step), decimalPlaces(base));
              if (decimalPlaces(nb) > decimals) // Value can't have too many decimals
                return false; // Be careful of rounding errors by using integers.

              var toInt = function toInt(f) {
                return Math.round(f * Math.pow(10, decimals));
              };

              if ((toInt(nb) - toInt(base)) % toInt(step) != 0) return false;
            }
          }

          return true;
        },
        requirementType: {
          '': 'string',
          step: 'string',
          base: 'number'
        },
        priority: 256
      },
      pattern: {
        validateString: function validateString(value, regexp) {
          return regexp.test(value);
        },
        requirementType: 'regexp',
        priority: 64
      },
      minlength: {
        validateString: function validateString(value, requirement) {
          return value.length >= requirement;
        },
        requirementType: 'integer',
        priority: 30
      },
      maxlength: {
        validateString: function validateString(value, requirement) {
          return value.length <= requirement;
        },
        requirementType: 'integer',
        priority: 30
      },
      length: {
        validateString: function validateString(value, min, max) {
          return value.length >= min && value.length <= max;
        },
        requirementType: ['integer', 'integer'],
        priority: 30
      },
      mincheck: {
        validateMultiple: function validateMultiple(values, requirement) {
          return values.length >= requirement;
        },
        requirementType: 'integer',
        priority: 30
      },
      maxcheck: {
        validateMultiple: function validateMultiple(values, requirement) {
          return values.length <= requirement;
        },
        requirementType: 'integer',
        priority: 30
      },
      check: {
        validateMultiple: function validateMultiple(values, min, max) {
          return values.length >= min && values.length <= max;
        },
        requirementType: ['integer', 'integer'],
        priority: 30
      },
      min: ValidatorRegistry__comparisonOperator(function (value, requirement) {
        return value >= requirement;
      }),
      max: ValidatorRegistry__comparisonOperator(function (value, requirement) {
        return value <= requirement;
      }),
      range: ValidatorRegistry__comparisonOperator(function (value, min, max) {
        return value >= min && value <= max;
      }),
      equalto: {
        validateString: function validateString(value, refOrValue) {
          var $reference = $(refOrValue);
          if ($reference.length) return value === $reference.val();else return value === refOrValue;
        },
        priority: 256
      }
    }
  };
  var UI = {};

  var diffResults = function diffResults(newResult, oldResult, deep) {
    var added = [];
    var kept = [];

    for (var i = 0; i < newResult.length; i++) {
      var found = false;

      for (var j = 0; j < oldResult.length; j++) {
        if (newResult[i].assert.name === oldResult[j].assert.name) {
          found = true;
          break;
        }
      }

      if (found) kept.push(newResult[i]);else added.push(newResult[i]);
    }

    return {
      kept: kept,
      added: added,
      removed: !deep ? diffResults(oldResult, newResult, true).added : []
    };
  };

  UI.Form = {
    _actualizeTriggers: function _actualizeTriggers() {
      var _this2 = this;

      this.$element.on('submit.Parsley', function (evt) {
        _this2.onSubmitValidate(evt);
      });
      this.$element.on('click.Parsley', Utils._SubmitSelector, function (evt) {
        _this2.onSubmitButton(evt);
      }); // UI could be disabled

      if (false === this.options.uiEnabled) return;
      this.element.setAttribute('novalidate', '');
    },
    focus: function focus() {
      this._focusedField = null;
      if (true === this.validationResult || 'none' === this.options.focus) return null;

      for (var i = 0; i < this.fields.length; i++) {
        var field = this.fields[i];

        if (true !== field.validationResult && field.validationResult.length > 0 && 'undefined' === typeof field.options.noFocus) {
          this._focusedField = field.$element;
          if ('first' === this.options.focus) break;
        }
      }

      if (null === this._focusedField) return null;
      return this._focusedField.focus();
    },
    _destroyUI: function _destroyUI() {
      // Reset all event listeners
      this.$element.off('.Parsley');
    }
  };
  UI.Field = {
    _reflowUI: function _reflowUI() {
      this._buildUI(); // If this field doesn't have an active UI don't bother doing something


      if (!this._ui) return; // Diff between two validation results

      var diff = diffResults(this.validationResult, this._ui.lastValidationResult); // Then store current validation result for next reflow

      this._ui.lastValidationResult = this.validationResult; // Handle valid / invalid / none field class

      this._manageStatusClass(); // Add, remove, updated errors messages


      this._manageErrorsMessages(diff); // Triggers impl


      this._actualizeTriggers(); // If field is not valid for the first time, bind keyup trigger to ease UX and quickly inform user


      if ((diff.kept.length || diff.added.length) && !this._failedOnce) {
        this._failedOnce = true;

        this._actualizeTriggers();
      }
    },
    // Returns an array of field's error message(s)
    getErrorsMessages: function getErrorsMessages() {
      // No error message, field is valid
      if (true === this.validationResult) return [];
      var messages = [];

      for (var i = 0; i < this.validationResult.length; i++) {
        messages.push(this.validationResult[i].errorMessage || this._getErrorMessage(this.validationResult[i].assert));
      }

      return messages;
    },
    // It's a goal of Parsley that this method is no longer required [#1073]
    addError: function addError(name) {
      var _ref2 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var message = _ref2.message;
      var assert = _ref2.assert;
      var _ref2$updateClass = _ref2.updateClass;
      var updateClass = _ref2$updateClass === undefined ? true : _ref2$updateClass;

      this._buildUI();

      this._addError(name, {
        message: message,
        assert: assert
      });

      if (updateClass) this._errorClass();
    },
    // It's a goal of Parsley that this method is no longer required [#1073]
    updateError: function updateError(name) {
      var _ref3 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var message = _ref3.message;
      var assert = _ref3.assert;
      var _ref3$updateClass = _ref3.updateClass;
      var updateClass = _ref3$updateClass === undefined ? true : _ref3$updateClass;

      this._buildUI();

      this._updateError(name, {
        message: message,
        assert: assert
      });

      if (updateClass) this._errorClass();
    },
    // It's a goal of Parsley that this method is no longer required [#1073]
    removeError: function removeError(name) {
      var _ref4 = arguments.length <= 1 || arguments[1] === undefined ? {} : arguments[1];

      var _ref4$updateClass = _ref4.updateClass;
      var updateClass = _ref4$updateClass === undefined ? true : _ref4$updateClass;

      this._buildUI();

      this._removeError(name); // edge case possible here: remove a standard Parsley error that is still failing in this.validationResult
      // but highly improbable cuz' manually removing a well Parsley handled error makes no sense.


      if (updateClass) this._manageStatusClass();
    },
    _manageStatusClass: function _manageStatusClass() {
      if (this.hasConstraints() && this.needsValidation() && true === this.validationResult) this._successClass();else if (this.validationResult.length > 0) this._errorClass();else this._resetClass();
    },
    _manageErrorsMessages: function _manageErrorsMessages(diff) {
      if ('undefined' !== typeof this.options.errorsMessagesDisabled) return; // Case where we have errorMessage option that configure an unique field error message, regardless failing validators

      if ('undefined' !== typeof this.options.errorMessage) {
        if (diff.added.length || diff.kept.length) {
          this._insertErrorWrapper();

          if (0 === this._ui.$errorsWrapper.find('.parsley-custom-error-message').length) this._ui.$errorsWrapper.append($(this.options.errorTemplate).addClass('parsley-custom-error-message'));
          return this._ui.$errorsWrapper.addClass('filled').find('.parsley-custom-error-message').html(this.options.errorMessage);
        }

        return this._ui.$errorsWrapper.removeClass('filled').find('.parsley-custom-error-message').remove();
      } // Show, hide, update failing constraints messages


      for (var i = 0; i < diff.removed.length; i++) {
        this._removeError(diff.removed[i].assert.name);
      }

      for (i = 0; i < diff.added.length; i++) {
        this._addError(diff.added[i].assert.name, {
          message: diff.added[i].errorMessage,
          assert: diff.added[i].assert
        });
      }

      for (i = 0; i < diff.kept.length; i++) {
        this._updateError(diff.kept[i].assert.name, {
          message: diff.kept[i].errorMessage,
          assert: diff.kept[i].assert
        });
      }
    },
    _addError: function _addError(name, _ref5) {
      var message = _ref5.message;
      var assert = _ref5.assert;

      this._insertErrorWrapper();

      this._ui.$errorClassHandler.attr('aria-describedby', this._ui.errorsWrapperId);

      this._ui.$errorsWrapper.addClass('filled').append($(this.options.errorTemplate).addClass('parsley-' + name).html(message || this._getErrorMessage(assert)));
    },
    _updateError: function _updateError(name, _ref6) {
      var message = _ref6.message;
      var assert = _ref6.assert;

      this._ui.$errorsWrapper.addClass('filled').find('.parsley-' + name).html(message || this._getErrorMessage(assert));
    },
    _removeError: function _removeError(name) {
      this._ui.$errorClassHandler.removeAttr('aria-describedby');

      this._ui.$errorsWrapper.removeClass('filled').find('.parsley-' + name).remove();
    },
    _getErrorMessage: function _getErrorMessage(constraint) {
      var customConstraintErrorMessage = constraint.name + 'Message';
      if ('undefined' !== typeof this.options[customConstraintErrorMessage]) return window.Parsley.formatMessage(this.options[customConstraintErrorMessage], constraint.requirements);
      return window.Parsley.getErrorMessage(constraint);
    },
    _buildUI: function _buildUI() {
      // UI could be already built or disabled
      if (this._ui || false === this.options.uiEnabled) return;
      var _ui = {}; // Give field its Parsley id in DOM

      this.element.setAttribute(this.options.namespace + 'id', this.__id__);
      /** Generate important UI elements and store them in this **/
      // $errorClassHandler is the $element that woul have parsley-error and parsley-success classes

      _ui.$errorClassHandler = this._manageClassHandler(); // $errorsWrapper is a div that would contain the various field errors, it will be appended into $errorsContainer

      _ui.errorsWrapperId = 'parsley-id-' + (this.options.multiple ? 'multiple-' + this.options.multiple : this.__id__);
      _ui.$errorsWrapper = $(this.options.errorsWrapper).attr('id', _ui.errorsWrapperId); // ValidationResult UI storage to detect what have changed bwt two validations, and update DOM accordingly

      _ui.lastValidationResult = [];
      _ui.validationInformationVisible = false; // Store it in this for later

      this._ui = _ui;
    },
    // Determine which element will have `parsley-error` and `parsley-success` classes
    _manageClassHandler: function _manageClassHandler() {
      // Class handled could also be determined by function given in Parsley options
      if ('string' === typeof this.options.classHandler && $(this.options.classHandler).length) return $(this.options.classHandler); // Class handled could also be determined by function given in Parsley options

      var $handlerFunction = this.options.classHandler; // It might also be the function name of a global function

      if ('string' === typeof this.options.classHandler && 'function' === typeof window[this.options.classHandler]) $handlerFunction = window[this.options.classHandler];

      if ('function' === typeof $handlerFunction) {
        var $handler = $handlerFunction.call(this, this); // If this function returned a valid existing DOM element, go for it

        if ('undefined' !== typeof $handler && $handler.length) return $handler;
      } else if ('object' === _typeof($handlerFunction) && $handlerFunction instanceof jQuery && $handlerFunction.length) {
        return $handlerFunction;
      } else if ($handlerFunction) {
        Utils.warn('The class handler `' + $handlerFunction + '` does not exist in DOM nor as a global JS function');
      }

      return this._inputHolder();
    },
    _inputHolder: function _inputHolder() {
      // if simple element (input, texatrea, select...) it will perfectly host the classes and precede the error container
      if (!this.options.multiple || this.element.nodeName === 'SELECT') return this.$element; // But if multiple element (radio, checkbox), that would be their parent

      return this.$element.parent();
    },
    _insertErrorWrapper: function _insertErrorWrapper() {
      var $errorsContainer = this.options.errorsContainer; // Nothing to do if already inserted

      if (0 !== this._ui.$errorsWrapper.parent().length) return this._ui.$errorsWrapper.parent();

      if ('string' === typeof $errorsContainer) {
        if ($($errorsContainer).length) return $($errorsContainer).append(this._ui.$errorsWrapper);else if ('function' === typeof window[$errorsContainer]) $errorsContainer = window[$errorsContainer];else Utils.warn('The errors container `' + $errorsContainer + '` does not exist in DOM nor as a global JS function');
      }

      if ('function' === typeof $errorsContainer) $errorsContainer = $errorsContainer.call(this, this);
      if ('object' === _typeof($errorsContainer) && $errorsContainer.length) return $errorsContainer.append(this._ui.$errorsWrapper);
      return this._inputHolder().after(this._ui.$errorsWrapper);
    },
    _actualizeTriggers: function _actualizeTriggers() {
      var _this3 = this;

      var $toBind = this._findRelated();

      var trigger; // Remove Parsley events already bound on this field

      $toBind.off('.Parsley');
      if (this._failedOnce) $toBind.on(Utils.namespaceEvents(this.options.triggerAfterFailure, 'Parsley'), function () {
        _this3._validateIfNeeded();
      });else if (trigger = Utils.namespaceEvents(this.options.trigger, 'Parsley')) {
        $toBind.on(trigger, function (event) {
          _this3._validateIfNeeded(event);
        });
      }
    },
    _validateIfNeeded: function _validateIfNeeded(event) {
      var _this4 = this; // For keyup, keypress, keydown, input... events that could be a little bit obstrusive
      // do not validate if val length < min threshold on first validation. Once field have been validated once and info
      // about success or failure have been displayed, always validate with this trigger to reflect every yalidation change.


      if (event && /key|input/.test(event.type)) if (!(this._ui && this._ui.validationInformationVisible) && this.getValue().length <= this.options.validationThreshold) return;

      if (this.options.debounce) {
        window.clearTimeout(this._debounced);
        this._debounced = window.setTimeout(function () {
          return _this4.validate();
        }, this.options.debounce);
      } else this.validate();
    },
    _resetUI: function _resetUI() {
      // Reset all event listeners
      this._failedOnce = false;

      this._actualizeTriggers(); // Nothing to do if UI never initialized for this field


      if ('undefined' === typeof this._ui) return; // Reset all errors' li

      this._ui.$errorsWrapper.removeClass('filled').children().remove(); // Reset validation class


      this._resetClass(); // Reset validation flags and last validation result


      this._ui.lastValidationResult = [];
      this._ui.validationInformationVisible = false;
    },
    _destroyUI: function _destroyUI() {
      this._resetUI();

      if ('undefined' !== typeof this._ui) this._ui.$errorsWrapper.remove();
      delete this._ui;
    },
    _successClass: function _successClass() {
      this._ui.validationInformationVisible = true;

      this._ui.$errorClassHandler.removeClass(this.options.errorClass).addClass(this.options.successClass);
    },
    _errorClass: function _errorClass() {
      this._ui.validationInformationVisible = true;

      this._ui.$errorClassHandler.removeClass(this.options.successClass).addClass(this.options.errorClass);
    },
    _resetClass: function _resetClass() {
      this._ui.$errorClassHandler.removeClass(this.options.successClass).removeClass(this.options.errorClass);
    }
  };

  var Form = function Form(element, domOptions, options) {
    this.__class__ = 'Form';
    this.element = element;
    this.$element = $(element);
    this.domOptions = domOptions;
    this.options = options;
    this.parent = window.Parsley;
    this.fields = [];
    this.validationResult = null;
  };

  var Form__statusMapping = {
    pending: null,
    resolved: true,
    rejected: false
  };
  Form.prototype = {
    onSubmitValidate: function onSubmitValidate(event) {
      var _this5 = this; // This is a Parsley generated submit event, do not validate, do not prevent, simply exit and keep normal behavior


      if (true === event.parsley) return; // If we didn't come here through a submit button, use the first one in the form

      var submitSource = this._submitSource || this.$element.find(Utils._SubmitSelector)[0];
      this._submitSource = null;
      this.$element.find('.parsley-synthetic-submit-button').prop('disabled', true);
      if (submitSource && null !== submitSource.getAttribute('formnovalidate')) return;
      window.Parsley._remoteCache = {};
      var promise = this.whenValidate({
        event: event
      });

      if ('resolved' === promise.state() && false !== this._trigger('submit')) {// All good, let event go through. We make this distinction because browsers
        // differ in their handling of `submit` being called from inside a submit event [#1047]
      } else {
        // Rejected or pending: cancel this submit
        event.stopImmediatePropagation();
        event.preventDefault();
        if ('pending' === promise.state()) promise.done(function () {
          _this5._submit(submitSource);
        });
      }
    },
    onSubmitButton: function onSubmitButton(event) {
      this._submitSource = event.currentTarget;
    },
    // internal
    // _submit submits the form, this time without going through the validations.
    // Care must be taken to "fake" the actual submit button being clicked.
    _submit: function _submit(submitSource) {
      if (false === this._trigger('submit')) return; // Add submit button's data

      if (submitSource) {
        var $synthetic = this.$element.find('.parsley-synthetic-submit-button').prop('disabled', false);
        if (0 === $synthetic.length) $synthetic = $('<input class="parsley-synthetic-submit-button" type="hidden">').appendTo(this.$element);
        $synthetic.attr({
          name: submitSource.getAttribute('name'),
          value: submitSource.getAttribute('value')
        });
      }

      this.$element.trigger(_extends($.Event('submit'), {
        parsley: true
      }));
    },
    // Performs validation on fields while triggering events.
    // @returns `true` if all validations succeeds, `false`
    // if a failure is immediately detected, or `null`
    // if dependant on a promise.
    // Consider using `whenValidate` instead.
    validate: function validate(options) {
      if (arguments.length >= 1 && !$.isPlainObject(options)) {
        Utils.warnOnce('Calling validate on a parsley form without passing arguments as an object is deprecated.');

        var _arguments = _slice.call(arguments);

        var group = _arguments[0];
        var force = _arguments[1];
        var event = _arguments[2];
        options = {
          group: group,
          force: force,
          event: event
        };
      }

      return Form__statusMapping[this.whenValidate(options).state()];
    },
    whenValidate: function whenValidate() {
      var _Utils$all$done$fail$always,
          _this6 = this;

      var _ref7 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var group = _ref7.group;
      var force = _ref7.force;
      var event = _ref7.event;
      this.submitEvent = event;

      if (event) {
        this.submitEvent = _extends({}, event, {
          preventDefault: function preventDefault() {
            Utils.warnOnce("Using `this.submitEvent.preventDefault()` is deprecated; instead, call `this.validationResult = false`");
            _this6.validationResult = false;
          }
        });
      }

      this.validationResult = true; // fire validate event to eventually modify things before every validation

      this._trigger('validate'); // Refresh form DOM options and form's fields that could have changed


      this._refreshFields();

      var promises = this._withoutReactualizingFormOptions(function () {
        return $.map(_this6.fields, function (field) {
          return field.whenValidate({
            force: force,
            group: group
          });
        });
      });

      return (_Utils$all$done$fail$always = Utils.all(promises).done(function () {
        _this6._trigger('success');
      }).fail(function () {
        _this6.validationResult = false;

        _this6.focus();

        _this6._trigger('error');
      }).always(function () {
        _this6._trigger('validated');
      })).pipe.apply(_Utils$all$done$fail$always, _toConsumableArray(this._pipeAccordingToValidationResult()));
    },
    // Iterate over refreshed fields, and stop on first failure.
    // Returns `true` if all fields are valid, `false` if a failure is detected
    // or `null` if the result depends on an unresolved promise.
    // Prefer using `whenValid` instead.
    isValid: function isValid(options) {
      if (arguments.length >= 1 && !$.isPlainObject(options)) {
        Utils.warnOnce('Calling isValid on a parsley form without passing arguments as an object is deprecated.');

        var _arguments2 = _slice.call(arguments);

        var group = _arguments2[0];
        var force = _arguments2[1];
        options = {
          group: group,
          force: force
        };
      }

      return Form__statusMapping[this.whenValid(options).state()];
    },
    // Iterate over refreshed fields and validate them.
    // Returns a promise.
    // A validation that immediately fails will interrupt the validations.
    whenValid: function whenValid() {
      var _this7 = this;

      var _ref8 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var group = _ref8.group;
      var force = _ref8.force;

      this._refreshFields();

      var promises = this._withoutReactualizingFormOptions(function () {
        return $.map(_this7.fields, function (field) {
          return field.whenValid({
            group: group,
            force: force
          });
        });
      });

      return Utils.all(promises);
    },
    refresh: function refresh() {
      this._refreshFields();

      return this;
    },
    // Reset UI
    reset: function reset() {
      // Form case: emit a reset event for each field
      for (var i = 0; i < this.fields.length; i++) {
        this.fields[i].reset();
      }

      this._trigger('reset');
    },
    // Destroy Parsley instance (+ UI)
    destroy: function destroy() {
      // Field case: emit destroy event to clean UI and then destroy stored instance
      this._destroyUI(); // Form case: destroy all its fields and then destroy stored instance


      for (var i = 0; i < this.fields.length; i++) {
        this.fields[i].destroy();
      }

      this.$element.removeData('Parsley');

      this._trigger('destroy');
    },
    _refreshFields: function _refreshFields() {
      return this.actualizeOptions()._bindFields();
    },
    _bindFields: function _bindFields() {
      var _this8 = this;

      var oldFields = this.fields;
      this.fields = [];
      this.fieldsMappedById = {};

      this._withoutReactualizingFormOptions(function () {
        _this8.$element.find(_this8.options.inputs).not(_this8.options.excluded).each(function (_, element) {
          var fieldInstance = new window.Parsley.Factory(element, {}, _this8); // Only add valid and not excluded `Field` and `FieldMultiple` children

          if (('Field' === fieldInstance.__class__ || 'FieldMultiple' === fieldInstance.__class__) && true !== fieldInstance.options.excluded) {
            var uniqueId = fieldInstance.__class__ + '-' + fieldInstance.__id__;

            if ('undefined' === typeof _this8.fieldsMappedById[uniqueId]) {
              _this8.fieldsMappedById[uniqueId] = fieldInstance;

              _this8.fields.push(fieldInstance);
            }
          }
        });

        $.each(Utils.difference(oldFields, _this8.fields), function (_, field) {
          field.reset();
        });
      });

      return this;
    },
    // Internal only.
    // Looping on a form's fields to do validation or similar
    // will trigger reactualizing options on all of them, which
    // in turn will reactualize the form's options.
    // To avoid calling actualizeOptions so many times on the form
    // for nothing, _withoutReactualizingFormOptions temporarily disables
    // the method actualizeOptions on this form while `fn` is called.
    _withoutReactualizingFormOptions: function _withoutReactualizingFormOptions(fn) {
      var oldActualizeOptions = this.actualizeOptions;

      this.actualizeOptions = function () {
        return this;
      };

      var result = fn();
      this.actualizeOptions = oldActualizeOptions;
      return result;
    },
    // Internal only.
    // Shortcut to trigger an event
    // Returns true iff event is not interrupted and default not prevented.
    _trigger: function _trigger(eventName) {
      return this.trigger('form:' + eventName);
    }
  };

  var Constraint = function Constraint(parsleyField, name, requirements, priority, isDomConstraint) {
    var validatorSpec = window.Parsley._validatorRegistry.validators[name];
    var validator = new Validator(validatorSpec);
    priority = priority || parsleyField.options[name + 'Priority'] || validator.priority;
    isDomConstraint = true === isDomConstraint;

    _extends(this, {
      validator: validator,
      name: name,
      requirements: requirements,
      priority: priority,
      isDomConstraint: isDomConstraint
    });

    this._parseRequirements(parsleyField.options);
  };

  var capitalize = function capitalize(str) {
    var cap = str[0].toUpperCase();
    return cap + str.slice(1);
  };

  Constraint.prototype = {
    validate: function validate(value, instance) {
      var _validator;

      return (_validator = this.validator).validate.apply(_validator, [value].concat(_toConsumableArray(this.requirementList), [instance]));
    },
    _parseRequirements: function _parseRequirements(options) {
      var _this9 = this;

      this.requirementList = this.validator.parseRequirements(this.requirements, function (key) {
        return options[_this9.name + capitalize(key)];
      });
    }
  };

  var Field = function Field(field, domOptions, options, parsleyFormInstance) {
    this.__class__ = 'Field';
    this.element = field;
    this.$element = $(field); // Set parent if we have one

    if ('undefined' !== typeof parsleyFormInstance) {
      this.parent = parsleyFormInstance;
    }

    this.options = options;
    this.domOptions = domOptions; // Initialize some properties

    this.constraints = [];
    this.constraintsByName = {};
    this.validationResult = true; // Bind constraints

    this._bindConstraints();
  };

  var parsley_field__statusMapping = {
    pending: null,
    resolved: true,
    rejected: false
  };
  Field.prototype = {
    // # Public API
    // Validate field and trigger some events for mainly `UI`
    // @returns `true`, an array of the validators that failed, or
    // `null` if validation is not finished. Prefer using whenValidate
    validate: function validate(options) {
      if (arguments.length >= 1 && !$.isPlainObject(options)) {
        Utils.warnOnce('Calling validate on a parsley field without passing arguments as an object is deprecated.');
        options = {
          options: options
        };
      }

      var promise = this.whenValidate(options);
      if (!promise) // If excluded with `group` option
        return true;

      switch (promise.state()) {
        case 'pending':
          return null;

        case 'resolved':
          return true;

        case 'rejected':
          return this.validationResult;
      }
    },
    // Validate field and trigger some events for mainly `UI`
    // @returns a promise that succeeds only when all validations do
    // or `undefined` if field is not in the given `group`.
    whenValidate: function whenValidate() {
      var _whenValid$always$done$fail$always,
          _this10 = this;

      var _ref9 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var force = _ref9.force;
      var group = _ref9.group; // do not validate a field if not the same as given validation group

      this.refresh();
      if (group && !this._isInGroup(group)) return;
      this.value = this.getValue(); // Field Validate event. `this.value` could be altered for custom needs

      this._trigger('validate');

      return (_whenValid$always$done$fail$always = this.whenValid({
        force: force,
        value: this.value,
        _refreshed: true
      }).always(function () {
        _this10._reflowUI();
      }).done(function () {
        _this10._trigger('success');
      }).fail(function () {
        _this10._trigger('error');
      }).always(function () {
        _this10._trigger('validated');
      })).pipe.apply(_whenValid$always$done$fail$always, _toConsumableArray(this._pipeAccordingToValidationResult()));
    },
    hasConstraints: function hasConstraints() {
      return 0 !== this.constraints.length;
    },
    // An empty optional field does not need validation
    needsValidation: function needsValidation(value) {
      if ('undefined' === typeof value) value = this.getValue(); // If a field is empty and not required, it is valid
      // Except if `data-parsley-validate-if-empty` explicitely added, useful for some custom validators

      if (!value.length && !this._isRequired() && 'undefined' === typeof this.options.validateIfEmpty) return false;
      return true;
    },
    _isInGroup: function _isInGroup(group) {
      if (Array.isArray(this.options.group)) return -1 !== $.inArray(group, this.options.group);
      return this.options.group === group;
    },
    // Just validate field. Do not trigger any event.
    // Returns `true` iff all constraints pass, `false` if there are failures,
    // or `null` if the result can not be determined yet (depends on a promise)
    // See also `whenValid`.
    isValid: function isValid(options) {
      if (arguments.length >= 1 && !$.isPlainObject(options)) {
        Utils.warnOnce('Calling isValid on a parsley field without passing arguments as an object is deprecated.');

        var _arguments3 = _slice.call(arguments);

        var force = _arguments3[0];
        var value = _arguments3[1];
        options = {
          force: force,
          value: value
        };
      }

      var promise = this.whenValid(options);
      if (!promise) // Excluded via `group`
        return true;
      return parsley_field__statusMapping[promise.state()];
    },
    // Just validate field. Do not trigger any event.
    // @returns a promise that succeeds only when all validations do
    // or `undefined` if the field is not in the given `group`.
    // The argument `force` will force validation of empty fields.
    // If a `value` is given, it will be validated instead of the value of the input.
    whenValid: function whenValid() {
      var _this11 = this;

      var _ref10 = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

      var _ref10$force = _ref10.force;
      var force = _ref10$force === undefined ? false : _ref10$force;
      var value = _ref10.value;
      var group = _ref10.group;
      var _refreshed = _ref10._refreshed; // Recompute options and rebind constraints to have latest changes

      if (!_refreshed) this.refresh(); // do not validate a field if not the same as given validation group

      if (group && !this._isInGroup(group)) return;
      this.validationResult = true; // A field without constraint is valid

      if (!this.hasConstraints()) return $.when(); // Value could be passed as argument, needed to add more power to 'field:validate'

      if ('undefined' === typeof value || null === value) value = this.getValue();
      if (!this.needsValidation(value) && true !== force) return $.when();

      var groupedConstraints = this._getGroupedConstraints();

      var promises = [];
      $.each(groupedConstraints, function (_, constraints) {
        // Process one group of constraints at a time, we validate the constraints
        // and combine the promises together.
        var promise = Utils.all($.map(constraints, function (constraint) {
          return _this11._validateConstraint(value, constraint);
        }));
        promises.push(promise);
        if (promise.state() === 'rejected') return false; // Interrupt processing if a group has already failed
      });
      return Utils.all(promises);
    },
    // @returns a promise
    _validateConstraint: function _validateConstraint(value, constraint) {
      var _this12 = this;

      var result = constraint.validate(value, this); // Map false to a failed promise

      if (false === result) result = $.Deferred().reject(); // Make sure we return a promise and that we record failures

      return Utils.all([result]).fail(function (errorMessage) {
        if (!(_this12.validationResult instanceof Array)) _this12.validationResult = [];

        _this12.validationResult.push({
          assert: constraint,
          errorMessage: 'string' === typeof errorMessage && errorMessage
        });
      });
    },
    // @returns Parsley field computed value that could be overrided or configured in DOM
    getValue: function getValue() {
      var value; // Value could be overriden in DOM or with explicit options

      if ('function' === typeof this.options.value) value = this.options.value(this);else if ('undefined' !== typeof this.options.value) value = this.options.value;else value = this.$element.val(); // Handle wrong DOM or configurations

      if ('undefined' === typeof value || null === value) return '';
      return this._handleWhitespace(value);
    },
    // Reset UI
    reset: function reset() {
      this._resetUI();

      return this._trigger('reset');
    },
    // Destroy Parsley instance (+ UI)
    destroy: function destroy() {
      // Field case: emit destroy event to clean UI and then destroy stored instance
      this._destroyUI();

      this.$element.removeData('Parsley');
      this.$element.removeData('FieldMultiple');

      this._trigger('destroy');
    },
    // Actualize options and rebind constraints
    refresh: function refresh() {
      this._refreshConstraints();

      return this;
    },
    _refreshConstraints: function _refreshConstraints() {
      return this.actualizeOptions()._bindConstraints();
    },
    refreshConstraints: function refreshConstraints() {
      Utils.warnOnce("Parsley's refreshConstraints is deprecated. Please use refresh");
      return this.refresh();
    },

    /**
    * Add a new constraint to a field
    *
    * @param {String}   name
    * @param {Mixed}    requirements      optional
    * @param {Number}   priority          optional
    * @param {Boolean}  isDomConstraint   optional
    */
    addConstraint: function addConstraint(name, requirements, priority, isDomConstraint) {
      if (window.Parsley._validatorRegistry.validators[name]) {
        var constraint = new Constraint(this, name, requirements, priority, isDomConstraint); // if constraint already exist, delete it and push new version

        if ('undefined' !== this.constraintsByName[constraint.name]) this.removeConstraint(constraint.name);
        this.constraints.push(constraint);
        this.constraintsByName[constraint.name] = constraint;
      }

      return this;
    },
    // Remove a constraint
    removeConstraint: function removeConstraint(name) {
      for (var i = 0; i < this.constraints.length; i++) {
        if (name === this.constraints[i].name) {
          this.constraints.splice(i, 1);
          break;
        }
      }

      delete this.constraintsByName[name];
      return this;
    },
    // Update a constraint (Remove + re-add)
    updateConstraint: function updateConstraint(name, parameters, priority) {
      return this.removeConstraint(name).addConstraint(name, parameters, priority);
    },
    // # Internals
    // Internal only.
    // Bind constraints from config + options + DOM
    _bindConstraints: function _bindConstraints() {
      var constraints = [];
      var constraintsByName = {}; // clean all existing DOM constraints to only keep javascript user constraints

      for (var i = 0; i < this.constraints.length; i++) {
        if (false === this.constraints[i].isDomConstraint) {
          constraints.push(this.constraints[i]);
          constraintsByName[this.constraints[i].name] = this.constraints[i];
        }
      }

      this.constraints = constraints;
      this.constraintsByName = constraintsByName; // then re-add Parsley DOM-API constraints

      for (var name in this.options) {
        this.addConstraint(name, this.options[name], undefined, true);
      } // finally, bind special HTML5 constraints


      return this._bindHtml5Constraints();
    },
    // Internal only.
    // Bind specific HTML5 constraints to be HTML5 compliant
    _bindHtml5Constraints: function _bindHtml5Constraints() {
      // html5 required
      if (null !== this.element.getAttribute('required')) this.addConstraint('required', true, undefined, true); // html5 pattern

      if (null !== this.element.getAttribute('pattern')) this.addConstraint('pattern', this.element.getAttribute('pattern'), undefined, true); // range

      var min = this.element.getAttribute('min');
      var max = this.element.getAttribute('max');
      if (null !== min && null !== max) this.addConstraint('range', [min, max], undefined, true); // HTML5 min
      else if (null !== min) this.addConstraint('min', min, undefined, true); // HTML5 max
        else if (null !== max) this.addConstraint('max', max, undefined, true); // length

      if (null !== this.element.getAttribute('minlength') && null !== this.element.getAttribute('maxlength')) this.addConstraint('length', [this.element.getAttribute('minlength'), this.element.getAttribute('maxlength')], undefined, true); // HTML5 minlength
      else if (null !== this.element.getAttribute('minlength')) this.addConstraint('minlength', this.element.getAttribute('minlength'), undefined, true); // HTML5 maxlength
        else if (null !== this.element.getAttribute('maxlength')) this.addConstraint('maxlength', this.element.getAttribute('maxlength'), undefined, true); // html5 types

      var type = Utils.getType(this.element); // Small special case here for HTML5 number: integer validator if step attribute is undefined or an integer value, number otherwise

      if ('number' === type) {
        return this.addConstraint('type', ['number', {
          step: this.element.getAttribute('step') || '1',
          base: min || this.element.getAttribute('value')
        }], undefined, true); // Regular other HTML5 supported types
      } else if (/^(email|url|range|date)$/i.test(type)) {
        return this.addConstraint('type', type, undefined, true);
      }

      return this;
    },
    // Internal only.
    // Field is required if have required constraint without `false` value
    _isRequired: function _isRequired() {
      if ('undefined' === typeof this.constraintsByName.required) return false;
      return false !== this.constraintsByName.required.requirements;
    },
    // Internal only.
    // Shortcut to trigger an event
    _trigger: function _trigger(eventName) {
      return this.trigger('field:' + eventName);
    },
    // Internal only
    // Handles whitespace in a value
    // Use `data-parsley-whitespace="squish"` to auto squish input value
    // Use `data-parsley-whitespace="trim"` to auto trim input value
    _handleWhitespace: function _handleWhitespace(value) {
      if (true === this.options.trimValue) Utils.warnOnce('data-parsley-trim-value="true" is deprecated, please use data-parsley-whitespace="trim"');
      if ('squish' === this.options.whitespace) value = value.replace(/\s{2,}/g, ' ');
      if ('trim' === this.options.whitespace || 'squish' === this.options.whitespace || true === this.options.trimValue) value = Utils.trimString(value);
      return value;
    },
    _isDateInput: function _isDateInput() {
      var c = this.constraintsByName.type;
      return c && c.requirements === 'date';
    },
    // Internal only.
    // Returns the constraints, grouped by descending priority.
    // The result is thus an array of arrays of constraints.
    _getGroupedConstraints: function _getGroupedConstraints() {
      if (false === this.options.priorityEnabled) return [this.constraints];
      var groupedConstraints = [];
      var index = {}; // Create array unique of priorities

      for (var i = 0; i < this.constraints.length; i++) {
        var p = this.constraints[i].priority;
        if (!index[p]) groupedConstraints.push(index[p] = []);
        index[p].push(this.constraints[i]);
      } // Sort them by priority DESC


      groupedConstraints.sort(function (a, b) {
        return b[0].priority - a[0].priority;
      });
      return groupedConstraints;
    }
  };
  var parsley_field = Field;

  var Multiple = function Multiple() {
    this.__class__ = 'FieldMultiple';
  };

  Multiple.prototype = {
    // Add new `$element` sibling for multiple field
    addElement: function addElement($element) {
      this.$elements.push($element);
      return this;
    },
    // See `Field._refreshConstraints()`
    _refreshConstraints: function _refreshConstraints() {
      var fieldConstraints;
      this.constraints = []; // Select multiple special treatment

      if (this.element.nodeName === 'SELECT') {
        this.actualizeOptions()._bindConstraints();

        return this;
      } // Gather all constraints for each input in the multiple group


      for (var i = 0; i < this.$elements.length; i++) {
        // Check if element have not been dynamically removed since last binding
        if (!$('html').has(this.$elements[i]).length) {
          this.$elements.splice(i, 1);
          continue;
        }

        fieldConstraints = this.$elements[i].data('FieldMultiple')._refreshConstraints().constraints;

        for (var j = 0; j < fieldConstraints.length; j++) {
          this.addConstraint(fieldConstraints[j].name, fieldConstraints[j].requirements, fieldConstraints[j].priority, fieldConstraints[j].isDomConstraint);
        }
      }

      return this;
    },
    // See `Field.getValue()`
    getValue: function getValue() {
      // Value could be overriden in DOM
      if ('function' === typeof this.options.value) return this.options.value(this);else if ('undefined' !== typeof this.options.value) return this.options.value; // Radio input case

      if (this.element.nodeName === 'INPUT') {
        var type = Utils.getType(this.element);
        if (type === 'radio') return this._findRelated().filter(':checked').val() || ''; // checkbox input case

        if (type === 'checkbox') {
          var values = [];

          this._findRelated().filter(':checked').each(function () {
            values.push($(this).val());
          });

          return values;
        }
      } // Select multiple case


      if (this.element.nodeName === 'SELECT' && null === this.$element.val()) return []; // Default case that should never happen

      return this.$element.val();
    },
    _init: function _init() {
      this.$elements = [this.$element];
      return this;
    }
  };

  var Factory = function Factory(element, options, parsleyFormInstance) {
    this.element = element;
    this.$element = $(element); // If the element has already been bound, returns its saved Parsley instance

    var savedparsleyFormInstance = this.$element.data('Parsley');

    if (savedparsleyFormInstance) {
      // If the saved instance has been bound without a Form parent and there is one given in this call, add it
      if ('undefined' !== typeof parsleyFormInstance && savedparsleyFormInstance.parent === window.Parsley) {
        savedparsleyFormInstance.parent = parsleyFormInstance;

        savedparsleyFormInstance._resetOptions(savedparsleyFormInstance.options);
      }

      if ('object' === _typeof(options)) {
        _extends(savedparsleyFormInstance.options, options);
      }

      return savedparsleyFormInstance;
    } // Parsley must be instantiated with a DOM element or jQuery $element


    if (!this.$element.length) throw new Error('You must bind Parsley on an existing element.');
    if ('undefined' !== typeof parsleyFormInstance && 'Form' !== parsleyFormInstance.__class__) throw new Error('Parent instance must be a Form instance');
    this.parent = parsleyFormInstance || window.Parsley;
    return this.init(options);
  };

  Factory.prototype = {
    init: function init(options) {
      this.__class__ = 'Parsley';
      this.__version__ = '2.8.1';
      this.__id__ = Utils.generateID(); // Pre-compute options

      this._resetOptions(options); // A Form instance is obviously a `<form>` element but also every node that is not an input and has the `data-parsley-validate` attribute


      if (this.element.nodeName === 'FORM' || Utils.checkAttr(this.element, this.options.namespace, 'validate') && !this.$element.is(this.options.inputs)) return this.bind('parsleyForm'); // Every other element is bound as a `Field` or `FieldMultiple`

      return this.isMultiple() ? this.handleMultiple() : this.bind('parsleyField');
    },
    isMultiple: function isMultiple() {
      var type = Utils.getType(this.element);
      return type === 'radio' || type === 'checkbox' || this.element.nodeName === 'SELECT' && null !== this.element.getAttribute('multiple');
    },
    // Multiples fields are a real nightmare :(
    // Maybe some refactoring would be appreciated here...
    handleMultiple: function handleMultiple() {
      var _this13 = this;

      var name;
      var multiple;
      var parsleyMultipleInstance; // Handle multiple name

      this.options.multiple = this.options.multiple || (name = this.element.getAttribute('name')) || this.element.getAttribute('id'); // Special select multiple input

      if (this.element.nodeName === 'SELECT' && null !== this.element.getAttribute('multiple')) {
        this.options.multiple = this.options.multiple || this.__id__;
        return this.bind('parsleyFieldMultiple'); // Else for radio / checkboxes, we need a `name` or `data-parsley-multiple` to properly bind it
      } else if (!this.options.multiple) {
        Utils.warn('To be bound by Parsley, a radio, a checkbox and a multiple select input must have either a name or a multiple option.', this.$element);
        return this;
      } // Remove special chars


      this.options.multiple = this.options.multiple.replace(/(:|\.|\[|\]|\{|\}|\$)/g, ''); // Add proper `data-parsley-multiple` to siblings if we have a valid multiple name

      if (name) {
        $('input[name="' + name + '"]').each(function (i, input) {
          var type = Utils.getType(input);
          if (type === 'radio' || type === 'checkbox') input.setAttribute(_this13.options.namespace + 'multiple', _this13.options.multiple);
        });
      } // Check here if we don't already have a related multiple instance saved


      var $previouslyRelated = this._findRelated();

      for (var i = 0; i < $previouslyRelated.length; i++) {
        parsleyMultipleInstance = $($previouslyRelated.get(i)).data('Parsley');

        if ('undefined' !== typeof parsleyMultipleInstance) {
          if (!this.$element.data('FieldMultiple')) {
            parsleyMultipleInstance.addElement(this.$element);
          }

          break;
        }
      } // Create a secret Field instance for every multiple field. It will be stored in `data('FieldMultiple')`
      // And will be useful later to access classic `Field` stuff while being in a `FieldMultiple` instance


      this.bind('parsleyField', true);
      return parsleyMultipleInstance || this.bind('parsleyFieldMultiple');
    },
    // Return proper `Form`, `Field` or `FieldMultiple`
    bind: function bind(type, doNotStore) {
      var parsleyInstance;

      switch (type) {
        case 'parsleyForm':
          parsleyInstance = $.extend(new Form(this.element, this.domOptions, this.options), new Base(), window.ParsleyExtend)._bindFields();
          break;

        case 'parsleyField':
          parsleyInstance = $.extend(new parsley_field(this.element, this.domOptions, this.options, this.parent), new Base(), window.ParsleyExtend);
          break;

        case 'parsleyFieldMultiple':
          parsleyInstance = $.extend(new parsley_field(this.element, this.domOptions, this.options, this.parent), new Multiple(), new Base(), window.ParsleyExtend)._init();
          break;

        default:
          throw new Error(type + 'is not a supported Parsley type');
      }

      if (this.options.multiple) Utils.setAttr(this.element, this.options.namespace, 'multiple', this.options.multiple);

      if ('undefined' !== typeof doNotStore) {
        this.$element.data('FieldMultiple', parsleyInstance);
        return parsleyInstance;
      } // Store the freshly bound instance in a DOM element for later access using jQuery `data()`


      this.$element.data('Parsley', parsleyInstance); // Tell the world we have a new Form or Field instance!

      parsleyInstance._actualizeTriggers();

      parsleyInstance._trigger('init');

      return parsleyInstance;
    }
  };
  var vernums = $.fn.jquery.split('.');

  if (parseInt(vernums[0]) <= 1 && parseInt(vernums[1]) < 8) {
    throw "The loaded version of jQuery is too old. Please upgrade to 1.8.x or better.";
  }

  if (!vernums.forEach) {
    Utils.warn('Parsley requires ES5 to run properly. Please include https://github.com/es-shims/es5-shim');
  } // Inherit `on`, `off` & `trigger` to Parsley:


  var Parsley = _extends(new Base(), {
    element: document,
    $element: $(document),
    actualizeOptions: null,
    _resetOptions: null,
    Factory: Factory,
    version: '2.8.1'
  }); // Supplement Field and Form with Base
  // This way, the constructors will have access to those methods


  _extends(parsley_field.prototype, UI.Field, Base.prototype);

  _extends(Form.prototype, UI.Form, Base.prototype); // Inherit actualizeOptions and _resetOptions:


  _extends(Factory.prototype, Base.prototype); // ### jQuery API
  // `$('.elem').parsley(options)` or `$('.elem').psly(options)`


  $.fn.parsley = $.fn.psly = function (options) {
    if (this.length > 1) {
      var instances = [];
      this.each(function () {
        instances.push($(this).parsley(options));
      });
      return instances;
    } // Return undefined if applied to non existing DOM element


    if (this.length == 0) {
      return;
    }

    return new Factory(this[0], options);
  }; // ### Field and Form extension
  // Ensure the extension is now defined if it wasn't previously


  if ('undefined' === typeof window.ParsleyExtend) window.ParsleyExtend = {}; // ### Parsley config
  // Inherit from ParsleyDefault, and copy over any existing values

  Parsley.options = _extends(Utils.objectCreate(Defaults), window.ParsleyConfig);
  window.ParsleyConfig = Parsley.options; // Old way of accessing global options
  // ### Globals

  window.Parsley = window.psly = Parsley;
  Parsley.Utils = Utils;
  window.ParsleyUtils = {};
  $.each(Utils, function (key, value) {
    if ('function' === typeof value) {
      window.ParsleyUtils[key] = function () {
        Utils.warnOnce('Accessing `window.ParsleyUtils` is deprecated. Use `window.Parsley.Utils` instead.');
        return Utils[key].apply(Utils, arguments);
      };
    }
  }); // ### Define methods that forward to the registry, and deprecate all access except through window.Parsley

  var registry = window.Parsley._validatorRegistry = new ValidatorRegistry(window.ParsleyConfig.validators, window.ParsleyConfig.i18n);
  window.ParsleyValidator = {};
  $.each('setLocale addCatalog addMessage addMessages getErrorMessage formatMessage addValidator updateValidator removeValidator hasValidator'.split(' '), function (i, method) {
    window.Parsley[method] = function () {
      return registry[method].apply(registry, arguments);
    };

    window.ParsleyValidator[method] = function () {
      var _window$Parsley;

      Utils.warnOnce('Accessing the method \'' + method + '\' through Validator is deprecated. Simply call \'window.Parsley.' + method + '(...)\'');
      return (_window$Parsley = window.Parsley)[method].apply(_window$Parsley, arguments);
    };
  }); // ### UI
  // Deprecated global object

  window.Parsley.UI = UI;
  window.ParsleyUI = {
    removeError: function removeError(instance, name, doNotUpdateClass) {
      var updateClass = true !== doNotUpdateClass;
      Utils.warnOnce('Accessing UI is deprecated. Call \'removeError\' on the instance directly. Please comment in issue 1073 as to your need to call this method.');
      return instance.removeError(name, {
        updateClass: updateClass
      });
    },
    getErrorsMessages: function getErrorsMessages(instance) {
      Utils.warnOnce('Accessing UI is deprecated. Call \'getErrorsMessages\' on the instance directly.');
      return instance.getErrorsMessages();
    }
  };
  $.each('addError updateError'.split(' '), function (i, method) {
    window.ParsleyUI[method] = function (instance, name, message, assert, doNotUpdateClass) {
      var updateClass = true !== doNotUpdateClass;
      Utils.warnOnce('Accessing UI is deprecated. Call \'' + method + '\' on the instance directly. Please comment in issue 1073 as to your need to call this method.');
      return instance[method](name, {
        message: message,
        assert: assert,
        updateClass: updateClass
      });
    };
  }); // ### PARSLEY auto-binding
  // Prevent it by setting `ParsleyConfig.autoBind` to `false`

  if (false !== window.ParsleyConfig.autoBind) {
    $(function () {
      // Works only on `data-parsley-validate`.
      if ($('[data-parsley-validate]').length) $('[data-parsley-validate]').parsley();
    });
  }

  var o = $({});

  var deprecated = function deprecated() {
    Utils.warnOnce("Parsley's pubsub module is deprecated; use the 'on' and 'off' methods on parsley instances or window.Parsley");
  }; // Returns an event handler that calls `fn` with the arguments it expects


  function adapt(fn, context) {
    // Store to allow unbinding
    if (!fn.parsleyAdaptedCallback) {
      fn.parsleyAdaptedCallback = function () {
        var args = Array.prototype.slice.call(arguments, 0);
        args.unshift(this);
        fn.apply(context || o, args);
      };
    }

    return fn.parsleyAdaptedCallback;
  }

  var eventPrefix = 'parsley:'; // Converts 'parsley:form:validate' into 'form:validate'

  function eventName(name) {
    if (name.lastIndexOf(eventPrefix, 0) === 0) return name.substr(eventPrefix.length);
    return name;
  } // $.listen is deprecated. Use Parsley.on instead.


  $.listen = function (name, callback) {
    var context;
    deprecated();

    if ('object' === _typeof(arguments[1]) && 'function' === typeof arguments[2]) {
      context = arguments[1];
      callback = arguments[2];
    }

    if ('function' !== typeof callback) throw new Error('Wrong parameters');
    window.Parsley.on(eventName(name), adapt(callback, context));
  };

  $.listenTo = function (instance, name, fn) {
    deprecated();
    if (!(instance instanceof parsley_field) && !(instance instanceof Form)) throw new Error('Must give Parsley instance');
    if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong parameters');
    instance.on(eventName(name), adapt(fn));
  };

  $.unsubscribe = function (name, fn) {
    deprecated();
    if ('string' !== typeof name || 'function' !== typeof fn) throw new Error('Wrong arguments');
    window.Parsley.off(eventName(name), fn.parsleyAdaptedCallback);
  };

  $.unsubscribeTo = function (instance, name) {
    deprecated();
    if (!(instance instanceof parsley_field) && !(instance instanceof Form)) throw new Error('Must give Parsley instance');
    instance.off(eventName(name));
  };

  $.unsubscribeAll = function (name) {
    deprecated();
    window.Parsley.off(eventName(name));
    $('form,input,textarea,select').each(function () {
      var instance = $(this).data('Parsley');

      if (instance) {
        instance.off(eventName(name));
      }
    });
  }; // $.emit is deprecated. Use jQuery events instead.


  $.emit = function (name, instance) {
    var _instance;

    deprecated();
    var instanceGiven = instance instanceof parsley_field || instance instanceof Form;
    var args = Array.prototype.slice.call(arguments, instanceGiven ? 2 : 1);
    args.unshift(eventName(name));

    if (!instanceGiven) {
      instance = window.Parsley;
    }

    (_instance = instance).trigger.apply(_instance, _toConsumableArray(args));
  };

  var pubsub = {};
  $.extend(true, Parsley, {
    asyncValidators: {
      'default': {
        fn: function fn(xhr) {
          // By default, only status 2xx are deemed successful.
          // Note: we use status instead of state() because responses with status 200
          // but invalid messages (e.g. an empty body for content type set to JSON) will
          // result in state() === 'rejected'.
          return xhr.status >= 200 && xhr.status < 300;
        },
        url: false
      },
      reverse: {
        fn: function fn(xhr) {
          // If reverse option is set, a failing ajax request is considered successful
          return xhr.status < 200 || xhr.status >= 300;
        },
        url: false
      }
    },
    addAsyncValidator: function addAsyncValidator(name, fn, url, options) {
      Parsley.asyncValidators[name] = {
        fn: fn,
        url: url || false,
        options: options || {}
      };
      return this;
    }
  });
  Parsley.addValidator('remote', {
    requirementType: {
      '': 'string',
      'validator': 'string',
      'reverse': 'boolean',
      'options': 'object'
    },
    validateString: function validateString(value, url, options, instance) {
      var data = {};
      var ajaxOptions;
      var csr;
      var validator = options.validator || (true === options.reverse ? 'reverse' : 'default');
      if ('undefined' === typeof Parsley.asyncValidators[validator]) throw new Error('Calling an undefined async validator: `' + validator + '`');
      url = Parsley.asyncValidators[validator].url || url; // Fill current value

      if (url.indexOf('{value}') > -1) {
        url = url.replace('{value}', encodeURIComponent(value));
      } else {
        data[instance.element.getAttribute('name') || instance.element.getAttribute('id')] = value;
      } // Merge options passed in from the function with the ones in the attribute


      var remoteOptions = $.extend(true, options.options || {}, Parsley.asyncValidators[validator].options); // All `$.ajax(options)` could be overridden or extended directly from DOM in `data-parsley-remote-options`

      ajaxOptions = $.extend(true, {}, {
        url: url,
        data: data,
        type: 'GET'
      }, remoteOptions); // Generate store key based on ajax options

      instance.trigger('field:ajaxoptions', instance, ajaxOptions);
      csr = $.param(ajaxOptions); // Initialise querry cache

      if ('undefined' === typeof Parsley._remoteCache) Parsley._remoteCache = {}; // Try to retrieve stored xhr

      var xhr = Parsley._remoteCache[csr] = Parsley._remoteCache[csr] || $.ajax(ajaxOptions);

      var handleXhr = function handleXhr() {
        var result = Parsley.asyncValidators[validator].fn.call(instance, xhr, url, options);
        if (!result) // Map falsy results to rejected promise
          result = $.Deferred().reject();
        return $.when(result);
      };

      return xhr.then(handleXhr, handleXhr);
    },
    priority: -1
  });
  Parsley.on('form:submit', function () {
    Parsley._remoteCache = {};
  });

  Base.prototype.addAsyncValidator = function () {
    Utils.warnOnce('Accessing the method `addAsyncValidator` through an instance is deprecated. Simply call `Parsley.addAsyncValidator(...)`');
    return Parsley.addAsyncValidator.apply(Parsley, arguments);
  }; // This is included with the Parsley library itself,
  // thus there is no use in adding it to your project.


  Parsley.addMessages('en', {
    defaultMessage: "This value seems to be invalid.",
    type: {
      email: "This value should be a valid email.",
      url: "This value should be a valid url.",
      number: "This value should be a valid number.",
      integer: "This value should be a valid integer.",
      digits: "This value should be digits.",
      alphanum: "This value should be alphanumeric."
    },
    notblank: "This value should not be blank.",
    required: "This value is required.",
    pattern: "This value seems to be invalid.",
    min: "This value should be greater than or equal to %s.",
    max: "This value should be lower than or equal to %s.",
    range: "This value should be between %s and %s.",
    minlength: "This value is too short. It should have %s characters or more.",
    maxlength: "This value is too long. It should have %s characters or fewer.",
    length: "This value length is invalid. It should be between %s and %s characters long.",
    mincheck: "You must select at least %s choices.",
    maxcheck: "You must select %s choices or fewer.",
    check: "You must select between %s and %s choices.",
    equalto: "This value should be the same."
  });
  Parsley.setLocale('en');
  /**
   * inputevent - Alleviate browser bugs for input events
   * https://github.com/marcandre/inputevent
   * @version v0.0.3 - (built Thu, Apr 14th 2016, 5:58 pm)
   * @author Marc-Andre Lafortune <github@marc-andre.ca>
   * @license MIT
   */

  function InputEvent() {
    var _this14 = this;

    var globals = window || global; // Slightly odd way construct our object. This way methods are force bound.
    // Used to test for duplicate library.

    _extends(this, {
      // For browsers that do not support isTrusted, assumes event is native.
      isNativeEvent: function isNativeEvent(evt) {
        return evt.originalEvent && evt.originalEvent.isTrusted !== false;
      },
      fakeInputEvent: function fakeInputEvent(evt) {
        if (_this14.isNativeEvent(evt)) {
          $(evt.target).trigger('input');
        }
      },
      misbehaves: function misbehaves(evt) {
        if (_this14.isNativeEvent(evt)) {
          _this14.behavesOk(evt);

          $(document).on('change.inputevent', evt.data.selector, _this14.fakeInputEvent);

          _this14.fakeInputEvent(evt);
        }
      },
      behavesOk: function behavesOk(evt) {
        if (_this14.isNativeEvent(evt)) {
          $(document) // Simply unbinds the testing handler
          .off('input.inputevent', evt.data.selector, _this14.behavesOk).off('change.inputevent', evt.data.selector, _this14.misbehaves);
        }
      },
      // Bind the testing handlers
      install: function install() {
        if (globals.inputEventPatched) {
          return;
        }

        globals.inputEventPatched = '0.0.3';
        var _arr = ['select', 'input[type="checkbox"]', 'input[type="radio"]', 'input[type="file"]'];

        for (var _i = 0; _i < _arr.length; _i++) {
          var selector = _arr[_i];
          $(document).on('input.inputevent', selector, {
            selector: selector
          }, _this14.behavesOk).on('change.inputevent', selector, {
            selector: selector
          }, _this14.misbehaves);
        }
      },
      uninstall: function uninstall() {
        delete globals.inputEventPatched;
        $(document).off('.inputevent');
      }
    });
  }

  ;
  var inputevent = new InputEvent();
  inputevent.install();
  var parsley = Parsley;
  return parsley;
});

(function (window, factory) {
  var lazySizes = factory(window, window.document);
  window.lazySizes = lazySizes;

  if (( false ? undefined : _typeof(module)) == 'object' && module.exports) {
    module.exports = lazySizes;
  }
})(window, function l(window, document) {
  'use strict';
  /*jshint eqnull:true */

  if (!document.getElementsByClassName) {
    return;
  }

  var lazysizes, lazySizesConfig;
  var docElem = document.documentElement;
  var Date = window.Date;
  var supportPicture = window.HTMLPictureElement;
  var _addEventListener = 'addEventListener';
  var _getAttribute = 'getAttribute';
  var addEventListener = window[_addEventListener];
  var setTimeout = window.setTimeout;
  var requestAnimationFrame = window.requestAnimationFrame || setTimeout;
  var requestIdleCallback = window.requestIdleCallback;
  var regPicture = /^picture$/i;
  var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];
  var regClassCache = {};
  var forEach = Array.prototype.forEach;

  var hasClass = function hasClass(ele, cls) {
    if (!regClassCache[cls]) {
      regClassCache[cls] = new RegExp('(\\s|^)' + cls + '(\\s|$)');
    }

    return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
  };

  var addClass = function addClass(ele, cls) {
    if (!hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
    }
  };

  var removeClass = function removeClass(ele, cls) {
    var reg;

    if (reg = hasClass(ele, cls)) {
      ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
    }
  };

  var addRemoveLoadEvents = function addRemoveLoadEvents(dom, fn, add) {
    var action = add ? _addEventListener : 'removeEventListener';

    if (add) {
      addRemoveLoadEvents(dom, fn);
    }

    loadEvents.forEach(function (evt) {
      dom[action](evt, fn);
    });
  };

  var triggerEvent = function triggerEvent(elem, name, detail, noBubbles, noCancelable) {
    var event = document.createEvent('Event');

    if (!detail) {
      detail = {};
    }

    detail.instance = lazysizes;
    event.initEvent(name, !noBubbles, !noCancelable);
    event.detail = detail;
    elem.dispatchEvent(event);
    return event;
  };

  var updatePolyfill = function updatePolyfill(el, full) {
    var polyfill;

    if (!supportPicture && (polyfill = window.picturefill || lazySizesConfig.pf)) {
      if (full && full.src && !el[_getAttribute]('srcset')) {
        el.setAttribute('srcset', full.src);
      }

      polyfill({
        reevaluate: true,
        elements: [el]
      });
    } else if (full && full.src) {
      el.src = full.src;
    }
  };

  var getCSS = function getCSS(elem, style) {
    return (getComputedStyle(elem, null) || {})[style];
  };

  var getWidth = function getWidth(elem, parent, width) {
    width = width || elem.offsetWidth;

    while (width < lazySizesConfig.minSize && parent && !elem._lazysizesWidth) {
      width = parent.offsetWidth;
      parent = parent.parentNode;
    }

    return width;
  };

  var rAF = function () {
    var running, waiting;
    var firstFns = [];
    var secondFns = [];
    var fns = firstFns;

    var run = function run() {
      var runFns = fns;
      fns = firstFns.length ? secondFns : firstFns;
      running = true;
      waiting = false;

      while (runFns.length) {
        runFns.shift()();
      }

      running = false;
    };

    var rafBatch = function rafBatch(fn, queue) {
      if (running && !queue) {
        fn.apply(this, arguments);
      } else {
        fns.push(fn);

        if (!waiting) {
          waiting = true;
          (document.hidden ? setTimeout : requestAnimationFrame)(run);
        }
      }
    };

    rafBatch._lsFlush = run;
    return rafBatch;
  }();

  var rAFIt = function rAFIt(fn, simple) {
    return simple ? function () {
      rAF(fn);
    } : function () {
      var that = this;
      var args = arguments;
      rAF(function () {
        fn.apply(that, args);
      });
    };
  };

  var throttle = function throttle(fn) {
    var running;
    var lastTime = 0;
    var gDelay = lazySizesConfig.throttleDelay;
    var rICTimeout = lazySizesConfig.ricTimeout;

    var run = function run() {
      running = false;
      lastTime = Date.now();
      fn();
    };

    var idleCallback = requestIdleCallback && rICTimeout > 49 ? function () {
      requestIdleCallback(run, {
        timeout: rICTimeout
      });

      if (rICTimeout !== lazySizesConfig.ricTimeout) {
        rICTimeout = lazySizesConfig.ricTimeout;
      }
    } : rAFIt(function () {
      setTimeout(run);
    }, true);
    return function (isPriority) {
      var delay;

      if (isPriority = isPriority === true) {
        rICTimeout = 33;
      }

      if (running) {
        return;
      }

      running = true;
      delay = gDelay - (Date.now() - lastTime);

      if (delay < 0) {
        delay = 0;
      }

      if (isPriority || delay < 9) {
        idleCallback();
      } else {
        setTimeout(idleCallback, delay);
      }
    };
  }; //based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html


  var debounce = function debounce(func) {
    var timeout, timestamp;
    var wait = 99;

    var run = function run() {
      timeout = null;
      func();
    };

    var later = function later() {
      var last = Date.now() - timestamp;

      if (last < wait) {
        setTimeout(later, wait - last);
      } else {
        (requestIdleCallback || run)(run);
      }
    };

    return function () {
      timestamp = Date.now();

      if (!timeout) {
        timeout = setTimeout(later, wait);
      }
    };
  };

  (function () {
    var prop;
    var lazySizesDefaults = {
      lazyClass: 'lazyload',
      loadedClass: 'lazyloaded',
      loadingClass: 'lazyloading',
      preloadClass: 'lazypreload',
      errorClass: 'lazyerror',
      //strictClass: 'lazystrict',
      autosizesClass: 'lazyautosizes',
      srcAttr: 'data-src',
      srcsetAttr: 'data-srcset',
      sizesAttr: 'data-sizes',
      //preloadAfterLoad: false,
      minSize: 40,
      customMedia: {},
      init: true,
      expFactor: 1.5,
      hFac: 0.8,
      loadMode: 2,
      loadHidden: true,
      ricTimeout: 0,
      throttleDelay: 125
    };
    lazySizesConfig = window.lazySizesConfig || window.lazysizesConfig || {};

    for (prop in lazySizesDefaults) {
      if (!(prop in lazySizesConfig)) {
        lazySizesConfig[prop] = lazySizesDefaults[prop];
      }
    }

    window.lazySizesConfig = lazySizesConfig;
    setTimeout(function () {
      if (lazySizesConfig.init) {
        init();
      }
    });
  })();

  var loader = function () {
    var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;
    var eLvW, elvH, eLtop, eLleft, eLright, eLbottom;
    var defaultExpand, preloadExpand, hFac;
    var regImg = /^img$/i;
    var regIframe = /^iframe$/i;
    var supportScroll = 'onscroll' in window && !/(gle|ing)bot/.test(navigator.userAgent);
    var shrinkExpand = 0;
    var currentExpand = 0;
    var isLoading = 0;
    var lowRuns = -1;

    var resetPreloading = function resetPreloading(e) {
      isLoading--;

      if (e && e.target) {
        addRemoveLoadEvents(e.target, resetPreloading);
      }

      if (!e || isLoading < 0 || !e.target) {
        isLoading = 0;
      }
    };

    var isNestedVisible = function isNestedVisible(elem, elemExpand) {
      var outerRect;
      var parent = elem;
      var visible = getCSS(document.body, 'visibility') == 'hidden' || getCSS(elem.parentNode, 'visibility') != 'hidden' && getCSS(elem, 'visibility') != 'hidden';
      eLtop -= elemExpand;
      eLbottom += elemExpand;
      eLleft -= elemExpand;
      eLright += elemExpand;

      while (visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem) {
        visible = (getCSS(parent, 'opacity') || 1) > 0;

        if (visible && getCSS(parent, 'overflow') != 'visible') {
          outerRect = parent.getBoundingClientRect();
          visible = eLright > outerRect.left && eLleft < outerRect.right && eLbottom > outerRect.top - 1 && eLtop < outerRect.bottom + 1;
        }
      }

      return visible;
    };

    var checkElements = function checkElements() {
      var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal, beforeExpandVal;
      var lazyloadElems = lazysizes.elements;

      if ((loadMode = lazySizesConfig.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)) {
        i = 0;
        lowRuns++;

        if (preloadExpand == null) {
          if (!('expand' in lazySizesConfig)) {
            lazySizesConfig.expand = docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370;
          }

          defaultExpand = lazySizesConfig.expand;
          preloadExpand = defaultExpand * lazySizesConfig.expFactor;
        }

        if (currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden) {
          currentExpand = preloadExpand;
          lowRuns = 0;
        } else if (loadMode > 1 && lowRuns > 1 && isLoading < 6) {
          currentExpand = defaultExpand;
        } else {
          currentExpand = shrinkExpand;
        }

        for (; i < eLlen; i++) {
          if (!lazyloadElems[i] || lazyloadElems[i]._lazyRace) {
            continue;
          }

          if (!supportScroll) {
            unveilElement(lazyloadElems[i]);
            continue;
          }

          if (!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)) {
            elemExpand = currentExpand;
          }

          if (beforeExpandVal !== elemExpand) {
            eLvW = innerWidth + elemExpand * hFac;
            elvH = innerHeight + elemExpand;
            elemNegativeExpand = elemExpand * -1;
            beforeExpandVal = elemExpand;
          }

          rect = lazyloadElems[i].getBoundingClientRect();

          if ((eLbottom = rect.bottom) >= elemNegativeExpand && (eLtop = rect.top) <= elvH && (eLright = rect.right) >= elemNegativeExpand * hFac && (eLleft = rect.left) <= eLvW && (eLbottom || eLright || eLleft || eLtop) && (lazySizesConfig.loadHidden || getCSS(lazyloadElems[i], 'visibility') != 'hidden') && (isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4) || isNestedVisible(lazyloadElems[i], elemExpand))) {
            unveilElement(lazyloadElems[i]);
            loadedSomething = true;

            if (isLoading > 9) {
              break;
            }
          } else if (!loadedSomething && isCompleted && !autoLoadElem && isLoading < 4 && lowRuns < 4 && loadMode > 2 && (preloadElems[0] || lazySizesConfig.preloadAfterLoad) && (preloadElems[0] || !elemExpandVal && (eLbottom || eLright || eLleft || eLtop || lazyloadElems[i][_getAttribute](lazySizesConfig.sizesAttr) != 'auto'))) {
            autoLoadElem = preloadElems[0] || lazyloadElems[i];
          }
        }

        if (autoLoadElem && !loadedSomething) {
          unveilElement(autoLoadElem);
        }
      }
    };

    var throttledCheckElements = throttle(checkElements);

    var switchLoadingClass = function switchLoadingClass(e) {
      addClass(e.target, lazySizesConfig.loadedClass);
      removeClass(e.target, lazySizesConfig.loadingClass);
      addRemoveLoadEvents(e.target, rafSwitchLoadingClass);
      triggerEvent(e.target, 'lazyloaded');
    };

    var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);

    var rafSwitchLoadingClass = function rafSwitchLoadingClass(e) {
      rafedSwitchLoadingClass({
        target: e.target
      });
    };

    var changeIframeSrc = function changeIframeSrc(elem, src) {
      try {
        elem.contentWindow.location.replace(src);
      } catch (e) {
        elem.src = src;
      }
    };

    var handleSources = function handleSources(source) {
      var customMedia;

      var sourceSrcset = source[_getAttribute](lazySizesConfig.srcsetAttr);

      if (customMedia = lazySizesConfig.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) {
        source.setAttribute('media', customMedia);
      }

      if (sourceSrcset) {
        source.setAttribute('srcset', sourceSrcset);
      }
    };

    var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg) {
      var src, srcset, parent, isPicture, event, firesLoad;

      if (!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented) {
        if (sizes) {
          if (isAuto) {
            addClass(elem, lazySizesConfig.autosizesClass);
          } else {
            elem.setAttribute('sizes', sizes);
          }
        }

        srcset = elem[_getAttribute](lazySizesConfig.srcsetAttr);
        src = elem[_getAttribute](lazySizesConfig.srcAttr);

        if (isImg) {
          parent = elem.parentNode;
          isPicture = parent && regPicture.test(parent.nodeName || '');
        }

        firesLoad = detail.firesLoad || 'src' in elem && (srcset || src || isPicture);
        event = {
          target: elem
        };

        if (firesLoad) {
          addRemoveLoadEvents(elem, resetPreloading, true);
          clearTimeout(resetPreloadingTimer);
          resetPreloadingTimer = setTimeout(resetPreloading, 2500);
          addClass(elem, lazySizesConfig.loadingClass);
          addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
        }

        if (isPicture) {
          forEach.call(parent.getElementsByTagName('source'), handleSources);
        }

        if (srcset) {
          elem.setAttribute('srcset', srcset);
        } else if (src && !isPicture) {
          if (regIframe.test(elem.nodeName)) {
            changeIframeSrc(elem, src);
          } else {
            elem.src = src;
          }
        }

        if (isImg && (srcset || isPicture)) {
          updatePolyfill(elem, {
            src: src
          });
        }
      }

      if (elem._lazyRace) {
        delete elem._lazyRace;
      }

      removeClass(elem, lazySizesConfig.lazyClass);
      rAF(function () {
        if (!firesLoad || elem.complete && elem.naturalWidth > 1) {
          if (firesLoad) {
            resetPreloading(event);
          } else {
            isLoading--;
          }

          switchLoadingClass(event);
        }
      }, true);
    });

    var unveilElement = function unveilElement(elem) {
      var detail;
      var isImg = regImg.test(elem.nodeName); //allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")

      var sizes = isImg && (elem[_getAttribute](lazySizesConfig.sizesAttr) || elem[_getAttribute]('sizes'));

      var isAuto = sizes == 'auto';

      if ((isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesConfig.errorClass) && hasClass(elem, lazySizesConfig.lazyClass)) {
        return;
      }

      detail = triggerEvent(elem, 'lazyunveilread').detail;

      if (isAuto) {
        autoSizer.updateElem(elem, true, elem.offsetWidth);
      }

      elem._lazyRace = true;
      isLoading++;
      lazyUnveil(elem, detail, isAuto, sizes, isImg);
    };

    var onload = function onload() {
      if (isCompleted) {
        return;
      }

      if (Date.now() - started < 999) {
        setTimeout(onload, 999);
        return;
      }

      var afterScroll = debounce(function () {
        lazySizesConfig.loadMode = 3;
        throttledCheckElements();
      });
      isCompleted = true;
      lazySizesConfig.loadMode = 3;
      throttledCheckElements();
      addEventListener('scroll', function () {
        if (lazySizesConfig.loadMode == 3) {
          lazySizesConfig.loadMode = 2;
        }

        afterScroll();
      }, true);
    };

    return {
      _: function _() {
        started = Date.now();
        lazysizes.elements = document.getElementsByClassName(lazySizesConfig.lazyClass);
        preloadElems = document.getElementsByClassName(lazySizesConfig.lazyClass + ' ' + lazySizesConfig.preloadClass);
        hFac = lazySizesConfig.hFac;
        addEventListener('scroll', throttledCheckElements, true);
        addEventListener('resize', throttledCheckElements, true);

        if (window.MutationObserver) {
          new MutationObserver(throttledCheckElements).observe(docElem, {
            childList: true,
            subtree: true,
            attributes: true
          });
        } else {
          docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);

          docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);

          setInterval(throttledCheckElements, 999);
        }

        addEventListener('hashchange', throttledCheckElements, true); //, 'fullscreenchange'

        ['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend', 'webkitAnimationEnd'].forEach(function (name) {
          document[_addEventListener](name, throttledCheckElements, true);
        });

        if (/d$|^c/.test(document.readyState)) {
          onload();
        } else {
          addEventListener('load', onload);

          document[_addEventListener]('DOMContentLoaded', throttledCheckElements);

          setTimeout(onload, 20000);
        }

        if (lazysizes.elements.length) {
          checkElements();

          rAF._lsFlush();
        } else {
          throttledCheckElements();
        }
      },
      checkElems: throttledCheckElements,
      unveil: unveilElement
    };
  }();

  var autoSizer = function () {
    var autosizesElems;
    var sizeElement = rAFIt(function (elem, parent, event, width) {
      var sources, i, len;
      elem._lazysizesWidth = width;
      width += 'px';
      elem.setAttribute('sizes', width);

      if (regPicture.test(parent.nodeName || '')) {
        sources = parent.getElementsByTagName('source');

        for (i = 0, len = sources.length; i < len; i++) {
          sources[i].setAttribute('sizes', width);
        }
      }

      if (!event.detail.dataAttr) {
        updatePolyfill(elem, event.detail);
      }
    });

    var getSizeElement = function getSizeElement(elem, dataAttr, width) {
      var event;
      var parent = elem.parentNode;

      if (parent) {
        width = getWidth(elem, parent, width);
        event = triggerEvent(elem, 'lazybeforesizes', {
          width: width,
          dataAttr: !!dataAttr
        });

        if (!event.defaultPrevented) {
          width = event.detail.width;

          if (width && width !== elem._lazysizesWidth) {
            sizeElement(elem, parent, event, width);
          }
        }
      }
    };

    var updateElementsSizes = function updateElementsSizes() {
      var i;
      var len = autosizesElems.length;

      if (len) {
        i = 0;

        for (; i < len; i++) {
          getSizeElement(autosizesElems[i]);
        }
      }
    };

    var debouncedUpdateElementsSizes = debounce(updateElementsSizes);
    return {
      _: function _() {
        autosizesElems = document.getElementsByClassName(lazySizesConfig.autosizesClass);
        addEventListener('resize', debouncedUpdateElementsSizes);
      },
      checkElems: debouncedUpdateElementsSizes,
      updateElem: getSizeElement
    };
  }();

  var init = function init() {
    if (!init.i) {
      init.i = true;

      autoSizer._();

      loader._();
    }
  };

  lazysizes = {
    cfg: lazySizesConfig,
    autoSizer: autoSizer,
    loader: loader,
    init: init,
    uP: updatePolyfill,
    aC: addClass,
    rC: removeClass,
    hC: hasClass,
    fire: triggerEvent,
    gW: getWidth,
    rAF: rAF
  };
  return lazysizes;
}); //
// Passive option for event listeners
// --------------------------------------------------
// Feature detection for addEventListener's 'passive' option.
// Allows for conditional setting of the third argument in an event listener.
// --------------------------------------------------
// Example usage:
// el.addEventListener('click', function(){...}, passiveEventListenerOptionSupported ? { passive: true } : false);
// --------------------------------------------------


var passiveEventListenerOptionSupported = false;

try {
  var opts = Object.defineProperty({}, "passive", {
    get: function get() {
      passiveEventListenerOptionSupported = true;
    }
  });
  window.addEventListener("testPassiveOption", null, opts);
  window.removeEventListener("testPassiveOption", null, opts);
} catch (err) {} //
// Remove the scrolling increment/decrement behavior from number input elements
// --------------------------------------------------


document.addEventListener("wheel", function (event) {
  if (document.activeElement.type === "number") {
    document.activeElement.blur();
  }
}, passiveEventListenerOptionSupported ? {
  passive: true
} : false); //
// Exclude hidden elements from Parsley
// --------------------------------------------------

if (typeof Parsley !== 'undefined' && typeof Parsley.options !== 'undefined') {
  Parsley.options.excluded = 'input[type=button], input[type=submit], input[type=reset], input[type=hidden], [disabled], :hidden';
} //
// DOM loaded body class
// --------------------------------------------------
// When the page is loaded, add & remove classes from the body element
// --------------------------------------------------
// H/t to https://www.sitepoint.com/jquery-document-ready-plain-javascript/
// --------------------------------------------------


var domLoadedCallback = function domLoadedCallback() {
  document.body.classList.add('dom-has-loaded');
  document.body.classList.remove('dom-not-yet-loaded');
};

if (document.readyState === "complete" || document.readyState !== "loading" && !document.documentElement.doScroll) {
  domLoadedCallback();
} else {
  document.addEventListener("DOMContentLoaded", domLoadedCallback);
} //
// Dispatcher.js
// v0.4.4
// ----------------------------------------------------------------------------
// Create actions & reactions in markup
// ----------------------------------------------------------------------------
// TODO
// - Change data-dispatcher-notify to accept an array of IDs to notify
// - Allow customization of .is-dispatcher-notified class name (for multiple uses of dispatcher)
// - Separate trigger, target, and notified dispatch into 3 functions?
// - Add a callback when dispatch is completed?
// - Rewrite in Vanilla JS (for event delegation, see https://gomakethings.com/checking-event-target-selectors-with-event-bubbling-in-vanilla-javascript/)
// ----------------------------------------------------------------------------
// Functions
// --------------------------------------------------


function clickDispatch(trigger) {
  // Feedback to the trigger element
  // --------------------------
  // if an attribute data-dispatcher-trigger-active-class __exists and has a value__
  if (trigger.attr("data-dispatcher-trigger-active-class")) {
    var $custom_trigger_class = trigger.data("dispatcher-trigger-active-class");
    trigger.toggleClass($custom_trigger_class);
  } else {
    // Toggle active class
    trigger.toggleClass("is-active");
  } // Toggle selected ARIA attributes if they exist


  if (trigger.attr("aria-pressed")) {
    var hasAriaPressedAttr = true;
  }

  if (trigger.attr("aria-expanded")) {
    var hasAriaExpandedAttr = true;
  }

  if (hasAriaPressedAttr) {
    trigger.attr("aria-pressed", trigger.attr("aria-pressed") == "false" ? true : false);
  }

  if (hasAriaExpandedAttr) {
    trigger.attr("aria-expanded", trigger.attr("aria-expanded") == "false" ? true : false);
  } // Notified element dispatch
  // --------------------------
  // If an element is to be notified (a value is given in the attribute),
  // notify it/them with toggled class "is-dispatching"


  if (trigger.attr("data-dispatcher-notify")) {
    var $notify_class = "." + trigger.data("dispatcher-notify");
    $($notify_class).toggleClass("is-dispatcher-notified");
  } // Target element dispatch
  // --------------------------
  // Get the targeted element via data-attribute


  var target = "#" + trigger.data("dispatcher-target");
  target = $(target); // if an attribute data-dispatcher-target-active-class __exists and has a value__

  if (trigger.attr("data-dispatcher-target-active-class")) {
    var $custom_target_class = trigger.data("dispatcher-target-active-class");
    target.toggleClass($custom_target_class);
  } else {
    target.toggleClass("is-active");
  } // ARIA attributes to flip


  target.attr("aria-hidden", target.attr("aria-hidden") == "false" ? true : false); // "One at a time, siblings" dispatch
  // --------------------------
  // For when only one child may be active at a time. (Like an accordion!)
  // --------------------------

  if (trigger.attr("data-dispatcher-parent")) {
    // Get the targeted element via data-attribute
    var $parent = "#" + trigger.data("dispatcher-parent"); // These may _seem_ reversed, but note that at the top of this function, the is-active class is toggled. So at this point, we're not checking "if the trigger had is-active before click", but "if the trigger has is-active now that it has been clicked".

    if (trigger.hasClass("is-active")) {
      $($parent).addClass("has-dispatched-active-child");
    } else {
      $($parent).removeClass("has-dispatched-active-child");
    }

    trigger.siblings(".dispatcher-trigger").removeClass("is-active");
  }
} // Logic
// --------------------------------------------------


$(document).ready(function () {
  // listen for a click or keydown event on elements with .dispatch-trigger. keydown is needed because some elements that are not native <button> or <a> elements — yet have tabindex="0" added allowing for keyboard access — need to receive a spacebar key press or return key press
  $("body").on("click keydown", ".dispatcher-trigger", function (event) {
    // Check if the event is either a click, a spacebar press, or a return press
    if (event.type === "click" || event.which == 13 || event.which == 32) {
      // restricts the "overpowered" preventDefault action ONLY to a direct click/keydown on .dispatch-triger element
      //   - this retains blocking of default actions when the trigger is an anchor itself
      //   - but allows child a, input, button, label, etc. to retain their functionality
      if (event.target === event.currentTarget) {
        // Prevent default click actions
        event.preventDefault();
      } // Fire the main function


      clickDispatch($(this));
    }
  });
}); //
// Perch Navigation / Menu System
// --------------------------------------------------
// Variables defined in perch-core-scripts.js
// --------------------------------------------------
// Variables
// ---------------------------------------

var $global_header = $('#global-header'),
    $nav_outer_wrapper = $('#global-outer-navigation-wrapper'),
    // $nav_parent      = $('.global-nav-item--has-children'),
$nav_active_parent = $('.global-nav-item--has-children.active-parent'),
    // $nav_parent_link     = $('.global-nav-item--has-children > .global-nav-link'),
$nav_child = $('.global-nav-child-list'),
    $nav_reveal_button = $('.hamburger-menu-button'); // Functions
// ---------------------------------------
// Mobile nav opening
// --------------------------

function openMobileNav() {
  $('html').addClass('mobile-nav-is-open is-mobile-scroll-locked');
  $nav_reveal_button.addClass('is-active').attr('aria-expanded', 'true').attr('aria-pressed', 'true');
  $nav_outer_wrapper.addClass('is-active');
  $global_header.addClass('mobile-nav-is-open');
} // Navigation opening
// --------------------------
// Opens the menu for both mobile and desktop.
// Also can accept an argument to open a specific child menu.
//  > Could be used to open the navigation by clicking a link or button on the page.
//  > Was once used on WMU/WordlCrafts sidebar
// --------------------------


function openNav(the_menu) {
  // Use interpolation to take the passed child menu name and then select it below
  var interpolated_selector = ".menu-" + the_menu;
  $(interpolated_selector).focus().addClass('is-open submenu-is-open');
  $(interpolated_selector).children($nav_child).addClass('is-open');
  $(interpolated_selector).children('.child-nav-opener').addClass('is-active'); // Feedback to the body: a child menu is open. Allows for making a backdrop show up over the content/beneath the menu.
  // $('body').addClass('child-menu-is-open');

  openMobileNav();

  if ($nav_outer_wrapper.hasClass('navigation-drawer-wrapper')) {
    drawerListenForClosingSwipe();
  }
} // Navigation closing
// --------------------------


function closeNav(closeNavMilliseconds) {
  $('html').removeClass('mobile-nav-is-open is-mobile-scroll-locked');
  $nav_outer_wrapper.addClass('animating-out');
  $nav_reveal_button.removeClass('is-active').attr('aria-expanded', 'false').attr('aria-pressed', 'false');
  $global_header.removeClass('mobile-nav-is-open'); // Close megamenus for mobile...before animation is finished

  $('.global-nav-item').removeClass('is-open submenu-is-open submenu-is-mobile-open');
  $('body').removeClass('child-menu-is-open'); // if a custom timeout is passed, 

  milliseconds = closeNavMilliseconds >= 0 ? closeNavMilliseconds : 250;
  var nav_close_timer = setTimeout(function () {
    // Close megamenus for mobile...after animation is finished
    $('.child-nav-opener').removeClass('is-active');
    $nav_child.removeClass('is-open');
    $nav_outer_wrapper.removeClass('is-active');
    $nav_outer_wrapper.removeClass('animating-out');
  }, milliseconds); // also close the search

  if (typeof closeSearch === 'function') {
    closeSearch();
  } // if a drawer, pass the false value to remove the swipe event listeners


  if ($nav_outer_wrapper.hasClass('navigation-drawer-wrapper')) {
    drawerListenForClosingSwipe(false);
  }

  return false;
} // Logic
// ---------------------------------------
// Navigation
// --------------------------
// Close the menu if it's currently active. Otherwise: run openNav function.


$nav_reveal_button.on('click keydown', function (e) {
  if (e.type == 'click' || e.keyCode == 32) {
    e.preventDefault();

    if ($(this).hasClass('is-active')) {
      closeNav();
      this.blur(); // Remove the focus from the button so :focus styles don't show on touch screens
    } else {
      openNav();
    }
  }
}); //
// Child Nav Open With Parent Click
// --------------------------------------------------
// If a nav link set to open its child is clicked,
// open the child menu.
// --------------------------------------------------
// Assumes an integration with:
// - navigation-system.js
// --------------------------------------------------
// Do not use alongside child-nav-open-with-generated-button.js
// --------------------------------------------------
// Variables
// ---------------------------------------

var $nav_link_opens_child = $('.global-nav-item--opens-child > .global-nav-link'); // ---------------------------------------
// Logic
// ---------------------------------------

$nav_link_opens_child.click(function (e) {
  // Prevent link from being followed
  e.preventDefault(); // set the parent

  var $the_parent = $(this).parent(); // remove is-open class if it's already there

  if ($the_parent.hasClass('submenu-is-open') || $the_parent.hasClass('submenu-is-mobile-open')) {
    $the_parent.removeClass('submenu-is-open submenu-is-mobile-open').children('.global-nav-child-list').removeClass('is-open');
    $(this).blur();
  } // otherwise, add it
  else {
      $the_parent.addClass('submenu-is-open').children('.global-nav-child-list').addClass('is-open');
    }
}); //
// Modal Search System
// --------------------------------------------------
// Variables defined in perch-core-scripts.js
// --------------------------------------------------
// Variables
// ---------------------------------------

var $search_reveal_button = $('.global-search-reveal-button'),
    $search_menu = $('#global-search-overlay'),
    $search_input = $('#global-search-overlay__input'),
    $search_submit = $('#global-search-overlay__submit'),
    $search_close_btn = $('#global-search-overlay__close-button'),
    // Global standard for triggering search.
// Example usage: rather than embed an additional search form input and submit on a 404 page, add a link or button with this class that summons the site search.
// If not using functionality in the modal search system, write something similar using this class name and variable.
$search_trigger = $('.global-search-trigger'); // ---------------------------------------
// Functions
// ---------------------------------------
// Search opening
// --------------------------

function openSearch() {
  // First, make the link highlighted & show the menu
  $search_reveal_button.addClass('is-active').attr('aria-expanded', 'true').attr('aria-pressed', 'true');
  $search_menu.addClass('is-active'); // Then, select the input field

  $search_input.select();
} // Search closing
// --------------------------


function closeSearch() {
  // Remove classes to the menu and the link
  // $(this).offsetWidth = $(this).offsetWidth;
  $search_menu.addClass('animating-out');
  setTimeout(function () {
    $search_reveal_button.removeClass('is-active').attr('aria-expanded', 'false').attr('aria-pressed', 'false');
    $search_menu.removeClass('is-active');
    $search_menu.removeClass('animating-out');
  }, 250);
  return false;
}

; // Logic
// ---------------------------------------
// Close the menu if it's currently active. Otherwise: run openSearch function.

$search_reveal_button.click(function () {
  if ($(this).hasClass('is-active')) {
    closeSearch();
  } else {
    openSearch();
  }
}); // Open the search menu if any anchor with a certain class is clicked

$search_trigger.click(function () {
  // if the selected search trigger is also a search reveal button, abort this function
  if ($(this).is($search_reveal_button)) {
    return false;
  } // Add classes to the menu and the link


  $search_reveal_button.addClass('is-active');
  $search_menu.addClass('is-active'); // Focus the search input

  $(this).blur();
  $search_input.select();
  return false;
}); // Clicking anywhere in the search's background overlay — except within the actual form — closes the overlay

$search_menu.click(closeSearch); // ...Do not close if the click is inside the inner container.

$('.global-search-overlay__inner').click(function (event) {
  event.stopPropagation();
});
$search_close_btn.click(closeSearch); // Search keyboard assist: when search menu is open, keep focus within the search menu
// by focusing "back to" the corner closer button, which allows the user to close if desired,
// or continue to the next focusable field, the input itself

$search_close_btn.on('focusout', function () {
  $search_input.focus();
}); //
// Keyboard shortcuts with MouseTrap.js
// --------------------------------------------------
// Assumes an integration with:
// - navigation-system.js
// - modal-search-system.js
// --------------------------------------------------
// open search

Mousetrap.bind('/', function (e) {
  if (typeof openSearch == 'function' && $search_menu.length) {
    // If the search menu is already open, nevermind, let the `/` through...
    if ($search_menu.hasClass('is-active')) {
      return true;
    } // But if it's not already open, capture the `/` and open the menu
    else {
        // Prevent '/' char from being typed into the newly-focused search field
        e.preventDefault();
        openSearch();
      }
  } // else {
  //  console.log("Either openSearch is not a function or $search_menu has not been assigned.");
  // }

}); // press escape (ESC) to close menus

Mousetrap.bind('esc', function () {
  if (typeof closeNav == 'function') {
    closeNav();
  }

  if (typeof closeSearch == 'function') {
    closeSearch();
  }
}); // open the menu/nav

Mousetrap.bind('u', function () {
  // Since search input is allowed to listen to Mousetrap (normally it's disabled — but we want it enabled for ESC key close), ignore the "u" character if it is open
  if (!_typeof($search_menu) === 'undefined' && $search_menu.hasClass('is-active')) {
    return true;
  } // Otherwise, if the mobile navigation is open, close it
  else if ($global_header.hasClass('mobile-nav-is-open')) {
      if (typeof closeNav == 'function') {
        closeNav();
      }
    } // ...and if it's not open, open it
    else {
        if (typeof openNav == 'function') {
          openNav();
        }
      }
}); // // konami code!
// Mousetrap.bind('up up down down left right left right b a', function() { //enter
//  document.body.classList.add('konami-code-is-active');
// });

/*!

Holder - client side image placeholders
Version 2.9.6+fblyy
© 2018 Ivan Malopinsky - http://imsky.co

Site:     http://holderjs.com
Issues:   https://github.com/imsky/holder/issues
License:  MIT

*/

(function (window) {
  if (!window.document) return;
  var document = window.document; //https://github.com/inexorabletash/polyfill/blob/master/web.js

  if (!document.querySelectorAll) {
    document.querySelectorAll = function (selectors) {
      var style = document.createElement('style'),
          elements = [],
          element;
      document.documentElement.firstChild.appendChild(style);
      document._qsa = [];
      style.styleSheet.cssText = selectors + '{x-qsa:expression(document._qsa && document._qsa.push(this))}';
      window.scrollBy(0, 0);
      style.parentNode.removeChild(style);

      while (document._qsa.length) {
        element = document._qsa.shift();
        element.style.removeAttribute('x-qsa');
        elements.push(element);
      }

      document._qsa = null;
      return elements;
    };
  }

  if (!document.querySelector) {
    document.querySelector = function (selectors) {
      var elements = document.querySelectorAll(selectors);
      return elements.length ? elements[0] : null;
    };
  }

  if (!document.getElementsByClassName) {
    document.getElementsByClassName = function (classNames) {
      classNames = String(classNames).replace(/^|\s+/g, '.');
      return document.querySelectorAll(classNames);
    };
  } //https://github.com/inexorabletash/polyfill
  // ES5 15.2.3.14 Object.keys ( O )
  // https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Object/keys


  if (!Object.keys) {
    Object.keys = function (o) {
      if (o !== Object(o)) {
        throw TypeError('Object.keys called on non-object');
      }

      var ret = [],
          p;

      for (p in o) {
        if (Object.prototype.hasOwnProperty.call(o, p)) {
          ret.push(p);
        }
      }

      return ret;
    };
  } // ES5 15.4.4.18 Array.prototype.forEach ( callbackfn [ , thisArg ] )
  // From https://developer.mozilla.org/en/JavaScript/Reference/Global_Objects/Array/forEach


  if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (fun
    /*, thisp */
    ) {
      if (this === void 0 || this === null) {
        throw TypeError();
      }

      var t = Object(this);
      var len = t.length >>> 0;

      if (typeof fun !== "function") {
        throw TypeError();
      }

      var thisp = arguments[1],
          i;

      for (i = 0; i < len; i++) {
        if (i in t) {
          fun.call(thisp, t[i], i, t);
        }
      }
    };
  } //https://github.com/inexorabletash/polyfill/blob/master/web.js


  (function (global) {
    var B64_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';

    global.atob = global.atob || function (input) {
      input = String(input);
      var position = 0,
          output = [],
          buffer = 0,
          bits = 0,
          n;
      input = input.replace(/\s/g, '');

      if (input.length % 4 === 0) {
        input = input.replace(/=+$/, '');
      }

      if (input.length % 4 === 1) {
        throw Error('InvalidCharacterError');
      }

      if (/[^+/0-9A-Za-z]/.test(input)) {
        throw Error('InvalidCharacterError');
      }

      while (position < input.length) {
        n = B64_ALPHABET.indexOf(input.charAt(position));
        buffer = buffer << 6 | n;
        bits += 6;

        if (bits === 24) {
          output.push(String.fromCharCode(buffer >> 16 & 0xFF));
          output.push(String.fromCharCode(buffer >> 8 & 0xFF));
          output.push(String.fromCharCode(buffer & 0xFF));
          bits = 0;
          buffer = 0;
        }

        position += 1;
      }

      if (bits === 12) {
        buffer = buffer >> 4;
        output.push(String.fromCharCode(buffer & 0xFF));
      } else if (bits === 18) {
        buffer = buffer >> 2;
        output.push(String.fromCharCode(buffer >> 8 & 0xFF));
        output.push(String.fromCharCode(buffer & 0xFF));
      }

      return output.join('');
    };

    global.btoa = global.btoa || function (input) {
      input = String(input);
      var position = 0,
          out = [],
          o1,
          o2,
          o3,
          e1,
          e2,
          e3,
          e4;

      if (/[^\x00-\xFF]/.test(input)) {
        throw Error('InvalidCharacterError');
      }

      while (position < input.length) {
        o1 = input.charCodeAt(position++);
        o2 = input.charCodeAt(position++);
        o3 = input.charCodeAt(position++); // 111111 112222 222233 333333

        e1 = o1 >> 2;
        e2 = (o1 & 0x3) << 4 | o2 >> 4;
        e3 = (o2 & 0xf) << 2 | o3 >> 6;
        e4 = o3 & 0x3f;

        if (position === input.length + 2) {
          e3 = 64;
          e4 = 64;
        } else if (position === input.length + 1) {
          e4 = 64;
        }

        out.push(B64_ALPHABET.charAt(e1), B64_ALPHABET.charAt(e2), B64_ALPHABET.charAt(e3), B64_ALPHABET.charAt(e4));
      }

      return out.join('');
    };
  })(window); //https://gist.github.com/jimeh/332357


  if (!Object.prototype.hasOwnProperty) {
    /*jshint -W001, -W103 */
    Object.prototype.hasOwnProperty = function (prop) {
      var proto = this.__proto__ || this.constructor.prototype;
      return prop in this && (!(prop in proto) || proto[prop] !== this[prop]);
    };
    /*jshint +W001, +W103 */

  } // @license http://opensource.org/licenses/MIT
  // copyright Paul Irish 2015
  // Date.now() is supported everywhere except IE8. For IE8 we use the Date.now polyfill
  //   github.com/Financial-Times/polyfill-service/blob/master/polyfills/Date.now/polyfill.js
  // as Safari 6 doesn't have support for NavigationTiming, we use a Date.now() timestamp for relative values
  // if you want values similar to what you'd get with real perf.now, place this towards the head of the page
  // but in reality, you're just getting the delta between now() calls, so it's not terribly important where it's placed


  (function () {
    if ('performance' in window === false) {
      window.performance = {};
    }

    Date.now = Date.now || function () {
      // thanks IE8
      return new Date().getTime();
    };

    if ('now' in window.performance === false) {
      var nowOffset = Date.now();

      if (performance.timing && performance.timing.navigationStart) {
        nowOffset = performance.timing.navigationStart;
      }

      window.performance.now = function now() {
        return Date.now() - nowOffset;
      };
    }
  })(); //requestAnimationFrame polyfill for older Firefox/Chrome versions


  if (!window.requestAnimationFrame) {
    if (window.webkitRequestAnimationFrame && window.webkitCancelAnimationFrame) {
      //https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/requestAnimationFrame/polyfill-webkit.js
      (function (global) {
        global.requestAnimationFrame = function (callback) {
          return webkitRequestAnimationFrame(function () {
            callback(global.performance.now());
          });
        };

        global.cancelAnimationFrame = global.webkitCancelAnimationFrame;
      })(window);
    } else if (window.mozRequestAnimationFrame && window.mozCancelAnimationFrame) {
      //https://github.com/Financial-Times/polyfill-service/blob/master/polyfills/requestAnimationFrame/polyfill-moz.js
      (function (global) {
        global.requestAnimationFrame = function (callback) {
          return mozRequestAnimationFrame(function () {
            callback(global.performance.now());
          });
        };

        global.cancelAnimationFrame = global.mozCancelAnimationFrame;
      })(window);
    } else {
      (function (global) {
        global.requestAnimationFrame = function (callback) {
          return global.setTimeout(callback, 1000 / 60);
        };

        global.cancelAnimationFrame = global.clearTimeout;
      })(window);
    }
  }
})(this);

(function webpackUniversalModuleDefinition(root, factory) {
  if (( false ? undefined : _typeof(exports)) === 'object' && ( false ? undefined : _typeof(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {}
})(this, function () {
  return (
    /******/
    function (modules) {
      // webpackBootstrap

      /******/
      // The module cache

      /******/
      var installedModules = {};
      /******/
      // The require function

      /******/

      function __webpack_require__(moduleId) {
        /******/
        // Check if module is in cache

        /******/
        if (installedModules[moduleId])
          /******/
          return installedModules[moduleId].exports;
        /******/
        // Create a new module (and put it into the cache)

        /******/

        var module = installedModules[moduleId] = {
          /******/
          exports: {},

          /******/
          id: moduleId,

          /******/
          loaded: false
          /******/

        };
        /******/
        // Execute the module function

        /******/

        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        // Flag the module as loaded

        /******/

        module.loaded = true;
        /******/
        // Return the exports of the module

        /******/

        return module.exports;
        /******/
      }
      /******/
      // expose the modules object (__webpack_modules__)

      /******/


      __webpack_require__.m = modules;
      /******/
      // expose the module cache

      /******/

      __webpack_require__.c = installedModules;
      /******/
      // __webpack_public_path__

      /******/

      __webpack_require__.p = "";
      /******/
      // Load entry module and return exports

      /******/

      return __webpack_require__(0);
      /******/
    }(
    /************************************************************************/

    /******/
    [
    /* 0 */

    /***/
    function (module, exports, __webpack_require__) {
      /*
      Holder.js - client side image placeholders
      (c) 2012-2015 Ivan Malopinsky - http://imsky.co
      */
      module.exports = __webpack_require__(1);
      /***/
    },
    /* 1 */

    /***/
    function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /*
        Holder.js - client side image placeholders
        (c) 2012-2016 Ivan Malopinsky - http://imsky.co
        */
        //Libraries and functions
        var onDomReady = __webpack_require__(2);

        var querystring = __webpack_require__(3);

        var SceneGraph = __webpack_require__(6);

        var utils = __webpack_require__(7);

        var SVG = __webpack_require__(8);

        var DOM = __webpack_require__(9);

        var Color = __webpack_require__(10);

        var constants = __webpack_require__(11);

        var svgRenderer = __webpack_require__(12);

        var sgCanvasRenderer = __webpack_require__(15);

        var extend = utils.extend;
        var dimensionCheck = utils.dimensionCheck; //Constants and definitions

        var SVG_NS = constants.svg_ns;
        var Holder = {
          version: constants.version,

          /**
           * Adds a theme to default settings
           *
           * @param {string} name Theme name
           * @param {Object} theme Theme object, with foreground, background, size, font, and fontweight properties.
           */
          addTheme: function addTheme(name, theme) {
            name != null && theme != null && (App.settings.themes[name] = theme);
            delete App.vars.cache.themeKeys;
            return this;
          },

          /**
           * Appends a placeholder to an element
           *
           * @param {string} src Placeholder URL string
           * @param el A selector or a reference to a DOM node
           */
          addImage: function addImage(src, el) {
            //todo: use jquery fallback if available for all QSA references
            var nodes = DOM.getNodeArray(el);
            nodes.forEach(function (node) {
              var img = DOM.newEl('img');
              var domProps = {};
              domProps[App.setup.dataAttr] = src;
              DOM.setAttr(img, domProps);
              node.appendChild(img);
            });
            return this;
          },

          /**
           * Sets whether or not an image is updated on resize.
           * If an image is set to be updated, it is immediately rendered.
           *
           * @param {Object} el Image DOM element
           * @param {Boolean} value Resizable update flag value
           */
          setResizeUpdate: function setResizeUpdate(el, value) {
            if (el.holderData) {
              el.holderData.resizeUpdate = !!value;

              if (el.holderData.resizeUpdate) {
                updateResizableElements(el);
              }
            }
          },

          /**
           * Runs Holder with options. By default runs Holder on all images with "holder.js" in their source attributes.
           *
           * @param {Object} userOptions Options object, can contain domain, themes, images, and bgnodes properties
           */
          run: function run(userOptions) {
            //todo: split processing into separate queues
            userOptions = userOptions || {};
            var engineSettings = {};
            var options = extend(App.settings, userOptions);
            App.vars.preempted = true;
            App.vars.dataAttr = options.dataAttr || App.setup.dataAttr;
            engineSettings.renderer = options.renderer ? options.renderer : App.setup.renderer;

            if (App.setup.renderers.join(',').indexOf(engineSettings.renderer) === -1) {
              engineSettings.renderer = App.setup.supportsSVG ? 'svg' : App.setup.supportsCanvas ? 'canvas' : 'html';
            }

            var images = DOM.getNodeArray(options.images);
            var bgnodes = DOM.getNodeArray(options.bgnodes);
            var stylenodes = DOM.getNodeArray(options.stylenodes);
            var objects = DOM.getNodeArray(options.objects);
            engineSettings.stylesheets = [];
            engineSettings.svgXMLStylesheet = true;
            engineSettings.noFontFallback = !!options.noFontFallback;
            engineSettings.noBackgroundSize = !!options.noBackgroundSize;
            stylenodes.forEach(function (styleNode) {
              if (styleNode.attributes.rel && styleNode.attributes.href && styleNode.attributes.rel.value == 'stylesheet') {
                var href = styleNode.attributes.href.value; //todo: write isomorphic relative-to-absolute URL function

                var proxyLink = DOM.newEl('a');
                proxyLink.href = href;
                var stylesheetURL = proxyLink.protocol + '//' + proxyLink.host + proxyLink.pathname + proxyLink.search;
                engineSettings.stylesheets.push(stylesheetURL);
              }
            });
            bgnodes.forEach(function (bgNode) {
              //Skip processing background nodes if getComputedStyle is unavailable, since only modern browsers would be able to use canvas or SVG to render to background
              if (!global.getComputedStyle) return;
              var backgroundImage = global.getComputedStyle(bgNode, null).getPropertyValue('background-image');
              var dataBackgroundImage = bgNode.getAttribute('data-background-src');
              var rawURL = dataBackgroundImage || backgroundImage;
              var holderURL = null;
              var holderString = options.domain + '/';
              var holderStringIndex = rawURL.indexOf(holderString);

              if (holderStringIndex === 0) {
                holderURL = rawURL;
              } else if (holderStringIndex === 1 && rawURL[0] === '?') {
                holderURL = rawURL.slice(1);
              } else {
                var fragment = rawURL.substr(holderStringIndex).match(/([^\"]*)"?\)/);

                if (fragment !== null) {
                  holderURL = fragment[1];
                } else if (rawURL.indexOf('url(') === 0) {
                  throw 'Holder: unable to parse background URL: ' + rawURL;
                }
              }

              if (holderURL) {
                var holderFlags = parseURL(holderURL, options);

                if (holderFlags) {
                  prepareDOMElement({
                    mode: 'background',
                    el: bgNode,
                    flags: holderFlags,
                    engineSettings: engineSettings
                  });
                }
              }
            });
            objects.forEach(function (object) {
              var objectAttr = {};

              try {
                objectAttr.data = object.getAttribute('data');
                objectAttr.dataSrc = object.getAttribute(App.vars.dataAttr);
              } catch (e) {}

              var objectHasSrcURL = objectAttr.data != null && objectAttr.data.indexOf(options.domain) === 0;
              var objectHasDataSrcURL = objectAttr.dataSrc != null && objectAttr.dataSrc.indexOf(options.domain) === 0;

              if (objectHasSrcURL) {
                prepareImageElement(options, engineSettings, objectAttr.data, object);
              } else if (objectHasDataSrcURL) {
                prepareImageElement(options, engineSettings, objectAttr.dataSrc, object);
              }
            });
            images.forEach(function (image) {
              var imageAttr = {};

              try {
                imageAttr.src = image.getAttribute('src');
                imageAttr.dataSrc = image.getAttribute(App.vars.dataAttr);
                imageAttr.rendered = image.getAttribute('data-holder-rendered');
              } catch (e) {}

              var imageHasSrc = imageAttr.src != null;
              var imageHasDataSrcURL = imageAttr.dataSrc != null && imageAttr.dataSrc.indexOf(options.domain) === 0;
              var imageRendered = imageAttr.rendered != null && imageAttr.rendered == 'true';

              if (imageHasSrc) {
                if (imageAttr.src.indexOf(options.domain) === 0) {
                  prepareImageElement(options, engineSettings, imageAttr.src, image);
                } else if (imageHasDataSrcURL) {
                  //Image has a valid data-src and an invalid src
                  if (imageRendered) {
                    //If the placeholder has already been render, re-render it
                    prepareImageElement(options, engineSettings, imageAttr.dataSrc, image);
                  } else {
                    //If the placeholder has not been rendered, check if the image exists and render a fallback if it doesn't
                    (function (src, options, engineSettings, dataSrc, image) {
                      utils.imageExists(src, function (exists) {
                        if (!exists) {
                          prepareImageElement(options, engineSettings, dataSrc, image);
                        }
                      });
                    })(imageAttr.src, options, engineSettings, imageAttr.dataSrc, image);
                  }
                }
              } else if (imageHasDataSrcURL) {
                prepareImageElement(options, engineSettings, imageAttr.dataSrc, image);
              }
            });
            return this;
          }
        };
        var App = {
          settings: {
            domain: 'holder.js',
            images: 'img',
            objects: 'object',
            bgnodes: 'body .holderjs',
            stylenodes: 'head link.holderjs',
            themes: {
              'gray': {
                bg: '#EEEEEE',
                fg: '#AAAAAA'
              },
              'social': {
                bg: '#3a5a97',
                fg: '#FFFFFF'
              },
              'industrial': {
                bg: '#434A52',
                fg: '#C2F200'
              },
              'sky': {
                bg: '#0D8FDB',
                fg: '#FFFFFF'
              },
              'vine': {
                bg: '#39DBAC',
                fg: '#1E292C'
              },
              'lava': {
                bg: '#F8591A',
                fg: '#1C2846'
              }
            }
          },
          defaults: {
            size: 10,
            units: 'pt',
            scale: 1 / 16
          }
        };
        /**
         * Processes provided source attribute and sets up the appropriate rendering workflow
         *
         * @private
         * @param options Instance options from Holder.run
         * @param renderSettings Instance configuration
         * @param src Image URL
         * @param el Image DOM element
         */

        function prepareImageElement(options, engineSettings, src, el) {
          var holderFlags = parseURL(src.substr(src.lastIndexOf(options.domain)), options);

          if (holderFlags) {
            prepareDOMElement({
              mode: null,
              el: el,
              flags: holderFlags,
              engineSettings: engineSettings
            });
          }
        }
        /**
         * Processes a Holder URL and extracts configuration from query string
         *
         * @private
         * @param url URL
         * @param instanceOptions Instance options from Holder.run
         */


        function parseURL(url, instanceOptions) {
          var holder = {
            theme: extend(App.settings.themes.gray, null),
            stylesheets: instanceOptions.stylesheets,
            instanceOptions: instanceOptions
          };
          var firstQuestionMark = url.indexOf('?');
          var parts = [url];

          if (firstQuestionMark !== -1) {
            parts = [url.slice(0, firstQuestionMark), url.slice(firstQuestionMark + 1)];
          }

          var basics = parts[0].split('/');
          holder.holderURL = url;
          var dimensions = basics[1];
          var dimensionData = dimensions.match(/([\d]+p?)x([\d]+p?)/);
          if (!dimensionData) return false;
          holder.fluid = dimensions.indexOf('p') !== -1;
          holder.dimensions = {
            width: dimensionData[1].replace('p', '%'),
            height: dimensionData[2].replace('p', '%')
          };

          if (parts.length === 2) {
            var options = querystring.parse(parts[1]); // Dimensions

            if (utils.truthy(options.ratio)) {
              holder.fluid = true;
              var ratioWidth = parseFloat(holder.dimensions.width.replace('%', ''));
              var ratioHeight = parseFloat(holder.dimensions.height.replace('%', ''));
              ratioHeight = Math.floor(100 * (ratioHeight / ratioWidth));
              ratioWidth = 100;
              holder.dimensions.width = ratioWidth + '%';
              holder.dimensions.height = ratioHeight + '%';
            }

            holder.auto = utils.truthy(options.auto); // Colors

            if (options.bg) {
              holder.theme.bg = utils.parseColor(options.bg);
            }

            if (options.fg) {
              holder.theme.fg = utils.parseColor(options.fg);
            } //todo: add automatic foreground to themes without foreground


            if (options.bg && !options.fg) {
              holder.autoFg = true;
            }

            if (options.theme && holder.instanceOptions.themes.hasOwnProperty(options.theme)) {
              holder.theme = extend(holder.instanceOptions.themes[options.theme], null);
            } // Text


            if (options.text) {
              holder.text = options.text;
            }

            if (options.textmode) {
              holder.textmode = options.textmode;
            }

            if (options.size && parseFloat(options.size)) {
              holder.size = parseFloat(options.size);
            }

            if (options.font) {
              holder.font = options.font;
            }

            if (options.align) {
              holder.align = options.align;
            }

            if (options.lineWrap) {
              holder.lineWrap = options.lineWrap;
            }

            holder.nowrap = utils.truthy(options.nowrap); // Miscellaneous

            holder.outline = utils.truthy(options.outline);

            if (utils.truthy(options.random)) {
              App.vars.cache.themeKeys = App.vars.cache.themeKeys || Object.keys(holder.instanceOptions.themes);
              var _theme = App.vars.cache.themeKeys[0 | Math.random() * App.vars.cache.themeKeys.length];
              holder.theme = extend(holder.instanceOptions.themes[_theme], null);
            }
          }

          return holder;
        }
        /**
         * Modifies the DOM to fit placeholders and sets up resizable image callbacks (for fluid and automatically sized placeholders)
         *
         * @private
         * @param settings DOM prep settings
         */


        function prepareDOMElement(prepSettings) {
          var mode = prepSettings.mode;
          var el = prepSettings.el;
          var flags = prepSettings.flags;
          var _engineSettings = prepSettings.engineSettings;
          var dimensions = flags.dimensions,
              theme = flags.theme;
          var dimensionsCaption = dimensions.width + 'x' + dimensions.height;
          mode = mode == null ? flags.fluid ? 'fluid' : 'image' : mode;
          var holderTemplateRe = /holder_([a-z]+)/g;
          var dimensionsInText = false;

          if (flags.text != null) {
            theme.text = flags.text; //<object> SVG embedding doesn't parse Unicode properly

            if (el.nodeName.toLowerCase() === 'object') {
              var textLines = theme.text.split('\\n');

              for (var k = 0; k < textLines.length; k++) {
                textLines[k] = utils.encodeHtmlEntity(textLines[k]);
              }

              theme.text = textLines.join('\\n');
            }
          }

          if (theme.text) {
            var holderTemplateMatches = theme.text.match(holderTemplateRe);

            if (holderTemplateMatches !== null) {
              //todo: optimize template replacement
              holderTemplateMatches.forEach(function (match) {
                if (match === 'holder_dimensions') {
                  theme.text = theme.text.replace(match, dimensionsCaption);
                }
              });
            }
          }

          var holderURL = flags.holderURL;
          var engineSettings = extend(_engineSettings, null);

          if (flags.font) {
            /*
            If external fonts are used in a <img> placeholder rendered with SVG, Holder falls back to canvas.
             This is done because Firefox and Chrome disallow embedded SVGs from referencing external assets.
            The workaround is either to change the placeholder tag from <img> to <object> or to use the canvas renderer.
            */
            theme.font = flags.font;

            if (!engineSettings.noFontFallback && el.nodeName.toLowerCase() === 'img' && App.setup.supportsCanvas && engineSettings.renderer === 'svg') {
              engineSettings = extend(engineSettings, {
                renderer: 'canvas'
              });
            }
          } //Chrome and Opera require a quick 10ms re-render if web fonts are used with canvas


          if (flags.font && engineSettings.renderer == 'canvas') {
            engineSettings.reRender = true;
          }

          if (mode == 'background') {
            if (el.getAttribute('data-background-src') == null) {
              DOM.setAttr(el, {
                'data-background-src': holderURL
              });
            }
          } else {
            var domProps = {};
            domProps[App.vars.dataAttr] = holderURL;
            DOM.setAttr(el, domProps);
          }

          flags.theme = theme; //todo consider using all renderSettings in holderData

          el.holderData = {
            flags: flags,
            engineSettings: engineSettings
          };

          if (mode == 'image' || mode == 'fluid') {
            DOM.setAttr(el, {
              'alt': theme.text ? dimensionsInText ? theme.text : theme.text + ' [' + dimensionsCaption + ']' : dimensionsCaption
            });
          }

          var renderSettings = {
            mode: mode,
            el: el,
            holderSettings: {
              dimensions: dimensions,
              theme: theme,
              flags: flags
            },
            engineSettings: engineSettings
          };

          if (mode == 'image') {
            if (!flags.auto) {
              el.style.width = dimensions.width + 'px';
              el.style.height = dimensions.height + 'px';
            }

            if (engineSettings.renderer == 'html') {
              el.style.backgroundColor = theme.bg;
            } else {
              render(renderSettings);

              if (flags.textmode == 'exact') {
                el.holderData.resizeUpdate = true;
                App.vars.resizableImages.push(el);
                updateResizableElements(el);
              }
            }
          } else if (mode == 'background' && engineSettings.renderer != 'html') {
            render(renderSettings);
          } else if (mode == 'fluid') {
            el.holderData.resizeUpdate = true;

            if (dimensions.height.slice(-1) == '%') {
              el.style.height = dimensions.height;
            } else if (flags.auto == null || !flags.auto) {
              el.style.height = dimensions.height + 'px';
            }

            if (dimensions.width.slice(-1) == '%') {
              el.style.width = dimensions.width;
            } else if (flags.auto == null || !flags.auto) {
              el.style.width = dimensions.width + 'px';
            }

            if (el.style.display == 'inline' || el.style.display === '' || el.style.display == 'none') {
              el.style.display = 'block';
            }

            setInitialDimensions(el);

            if (engineSettings.renderer == 'html') {
              el.style.backgroundColor = theme.bg;
            } else {
              App.vars.resizableImages.push(el);
              updateResizableElements(el);
            }
          }
        }
        /**
         * Core function that takes output from renderers and sets it as the source or background-image of the target element
         *
         * @private
         * @param renderSettings Renderer settings
         */


        function render(renderSettings) {
          var image = null;
          var mode = renderSettings.mode;
          var el = renderSettings.el;
          var holderSettings = renderSettings.holderSettings;
          var engineSettings = renderSettings.engineSettings;

          switch (engineSettings.renderer) {
            case 'svg':
              if (!App.setup.supportsSVG) return;
              break;

            case 'canvas':
              if (!App.setup.supportsCanvas) return;
              break;

            default:
              return;
          } //todo: move generation of scene up to flag generation to reduce extra object creation


          var scene = {
            width: holderSettings.dimensions.width,
            height: holderSettings.dimensions.height,
            theme: holderSettings.theme,
            flags: holderSettings.flags
          };
          var sceneGraph = buildSceneGraph(scene);

          function getRenderedImage() {
            var image = null;

            switch (engineSettings.renderer) {
              case 'canvas':
                image = sgCanvasRenderer(sceneGraph, renderSettings);
                break;

              case 'svg':
                image = svgRenderer(sceneGraph, renderSettings);
                break;

              default:
                throw 'Holder: invalid renderer: ' + engineSettings.renderer;
            }

            return image;
          }

          image = getRenderedImage();

          if (image == null) {
            throw 'Holder: couldn\'t render placeholder';
          } //todo: add <object> canvas rendering


          if (mode == 'background') {
            el.style.backgroundImage = 'url(' + image + ')';

            if (!engineSettings.noBackgroundSize) {
              el.style.backgroundSize = scene.width + 'px ' + scene.height + 'px';
            }
          } else {
            if (el.nodeName.toLowerCase() === 'img') {
              DOM.setAttr(el, {
                'src': image
              });
            } else if (el.nodeName.toLowerCase() === 'object') {
              DOM.setAttr(el, {
                'data': image,
                'type': 'image/svg+xml'
              });
            }

            if (engineSettings.reRender) {
              global.setTimeout(function () {
                var image = getRenderedImage();

                if (image == null) {
                  throw 'Holder: couldn\'t render placeholder';
                } //todo: refactor this code into a function


                if (el.nodeName.toLowerCase() === 'img') {
                  DOM.setAttr(el, {
                    'src': image
                  });
                } else if (el.nodeName.toLowerCase() === 'object') {
                  DOM.setAttr(el, {
                    'data': image,
                    'type': 'image/svg+xml'
                  });
                }
              }, 150);
            }
          } //todo: account for re-rendering


          DOM.setAttr(el, {
            'data-holder-rendered': true
          });
        }
        /**
         * Core function that takes a Holder scene description and builds a scene graph
         *
         * @private
         * @param scene Holder scene object
         */
        //todo: make this function reusable
        //todo: merge app defaults and setup properties into the scene argument


        function buildSceneGraph(scene) {
          var fontSize = App.defaults.size;

          if (parseFloat(scene.theme.size)) {
            fontSize = scene.theme.size;
          } else if (parseFloat(scene.flags.size)) {
            fontSize = scene.flags.size;
          }

          scene.font = {
            family: scene.theme.font ? scene.theme.font : 'Arial, Helvetica, Open Sans, sans-serif',
            size: textSize(scene.width, scene.height, fontSize, App.defaults.scale),
            units: scene.theme.units ? scene.theme.units : App.defaults.units,
            weight: scene.theme.fontweight ? scene.theme.fontweight : 'bold'
          };
          scene.text = scene.theme.text || Math.floor(scene.width) + 'x' + Math.floor(scene.height);
          scene.noWrap = scene.theme.nowrap || scene.flags.nowrap;
          scene.align = scene.theme.align || scene.flags.align || 'center';

          switch (scene.flags.textmode) {
            case 'literal':
              scene.text = scene.flags.dimensions.width + 'x' + scene.flags.dimensions.height;
              break;

            case 'exact':
              if (!scene.flags.exactDimensions) break;
              scene.text = Math.floor(scene.flags.exactDimensions.width) + 'x' + Math.floor(scene.flags.exactDimensions.height);
              break;
          }

          var lineWrap = scene.flags.lineWrap || App.setup.lineWrapRatio;
          var sceneMargin = scene.width * lineWrap;
          var maxLineWidth = sceneMargin;
          var sceneGraph = new SceneGraph({
            width: scene.width,
            height: scene.height
          });
          var Shape = sceneGraph.Shape;
          var holderBg = new Shape.Rect('holderBg', {
            fill: scene.theme.bg
          });
          holderBg.resize(scene.width, scene.height);
          sceneGraph.root.add(holderBg);

          if (scene.flags.outline) {
            var outlineColor = new Color(holderBg.properties.fill);
            outlineColor = outlineColor.lighten(outlineColor.lighterThan('7f7f7f') ? -0.1 : 0.1);
            holderBg.properties.outline = {
              fill: outlineColor.toHex(true),
              width: 2
            };
          }

          var holderTextColor = scene.theme.fg;

          if (scene.flags.autoFg) {
            var holderBgColor = new Color(holderBg.properties.fill);
            var lightColor = new Color('fff');
            var darkColor = new Color('000', {
              'alpha': 0.285714
            });
            holderTextColor = holderBgColor.blendAlpha(holderBgColor.lighterThan('7f7f7f') ? darkColor : lightColor).toHex(true);
          }

          var holderTextGroup = new Shape.Group('holderTextGroup', {
            text: scene.text,
            align: scene.align,
            font: scene.font,
            fill: holderTextColor
          });
          holderTextGroup.moveTo(null, null, 1);
          sceneGraph.root.add(holderTextGroup);
          var tpdata = holderTextGroup.textPositionData = stagingRenderer(sceneGraph);

          if (!tpdata) {
            throw 'Holder: staging fallback not supported yet.';
          }

          holderTextGroup.properties.leading = tpdata.boundingBox.height;
          var textNode = null;
          var line = null;

          function finalizeLine(parent, line, width, height) {
            line.width = width;
            line.height = height;
            parent.width = Math.max(parent.width, line.width);
            parent.height += line.height;
          }

          if (tpdata.lineCount > 1) {
            var offsetX = 0;
            var offsetY = 0;
            var lineIndex = 0;
            var lineKey;
            line = new Shape.Group('line' + lineIndex); //Double margin so that left/right-aligned next is not flush with edge of image

            if (scene.align === 'left' || scene.align === 'right') {
              maxLineWidth = scene.width * (1 - (1 - lineWrap) * 2);
            }

            for (var i = 0; i < tpdata.words.length; i++) {
              var word = tpdata.words[i];
              textNode = new Shape.Text(word.text);
              var newline = word.text == '\\n';

              if (!scene.noWrap && (offsetX + word.width >= maxLineWidth || newline === true)) {
                finalizeLine(holderTextGroup, line, offsetX, holderTextGroup.properties.leading);
                holderTextGroup.add(line);
                offsetX = 0;
                offsetY += holderTextGroup.properties.leading;
                lineIndex += 1;
                line = new Shape.Group('line' + lineIndex);
                line.y = offsetY;
              }

              if (newline === true) {
                continue;
              }

              textNode.moveTo(offsetX, 0);
              offsetX += tpdata.spaceWidth + word.width;
              line.add(textNode);
            }

            finalizeLine(holderTextGroup, line, offsetX, holderTextGroup.properties.leading);
            holderTextGroup.add(line);

            if (scene.align === 'left') {
              holderTextGroup.moveTo(scene.width - sceneMargin, null, null);
            } else if (scene.align === 'right') {
              for (lineKey in holderTextGroup.children) {
                line = holderTextGroup.children[lineKey];
                line.moveTo(scene.width - line.width, null, null);
              }

              holderTextGroup.moveTo(0 - (scene.width - sceneMargin), null, null);
            } else {
              for (lineKey in holderTextGroup.children) {
                line = holderTextGroup.children[lineKey];
                line.moveTo((holderTextGroup.width - line.width) / 2, null, null);
              }

              holderTextGroup.moveTo((scene.width - holderTextGroup.width) / 2, null, null);
            }

            holderTextGroup.moveTo(null, (scene.height - holderTextGroup.height) / 2, null); //If the text exceeds vertical space, move it down so the first line is visible

            if ((scene.height - holderTextGroup.height) / 2 < 0) {
              holderTextGroup.moveTo(null, 0, null);
            }
          } else {
            textNode = new Shape.Text(scene.text);
            line = new Shape.Group('line0');
            line.add(textNode);
            holderTextGroup.add(line);

            if (scene.align === 'left') {
              holderTextGroup.moveTo(scene.width - sceneMargin, null, null);
            } else if (scene.align === 'right') {
              holderTextGroup.moveTo(0 - (scene.width - sceneMargin), null, null);
            } else {
              holderTextGroup.moveTo((scene.width - tpdata.boundingBox.width) / 2, null, null);
            }

            holderTextGroup.moveTo(null, (scene.height - tpdata.boundingBox.height) / 2, null);
          } //todo: renderlist


          return sceneGraph;
        }
        /**
         * Adaptive text sizing function
         *
         * @private
         * @param width Parent width
         * @param height Parent height
         * @param fontSize Requested text size
         * @param scale Proportional scale of text
         */


        function textSize(width, height, fontSize, scale) {
          var stageWidth = parseInt(width, 10);
          var stageHeight = parseInt(height, 10);
          var bigSide = Math.max(stageWidth, stageHeight);
          var smallSide = Math.min(stageWidth, stageHeight);
          var newHeight = 0.8 * Math.min(smallSide, bigSide * scale);
          return Math.round(Math.max(fontSize, newHeight));
        }
        /**
         * Iterates over resizable (fluid or auto) placeholders and renders them
         *
         * @private
         * @param element Optional element selector, specified only if a specific element needs to be re-rendered
         */


        function updateResizableElements(element) {
          var images;

          if (element == null || element.nodeType == null) {
            images = App.vars.resizableImages;
          } else {
            images = [element];
          }

          for (var i = 0, l = images.length; i < l; i++) {
            var el = images[i];

            if (el.holderData) {
              var flags = el.holderData.flags;
              var dimensions = dimensionCheck(el);

              if (dimensions) {
                if (!el.holderData.resizeUpdate) {
                  continue;
                }

                if (flags.fluid && flags.auto) {
                  var fluidConfig = el.holderData.fluidConfig;

                  switch (fluidConfig.mode) {
                    case 'width':
                      dimensions.height = dimensions.width / fluidConfig.ratio;
                      break;

                    case 'height':
                      dimensions.width = dimensions.height * fluidConfig.ratio;
                      break;
                  }
                }

                var settings = {
                  mode: 'image',
                  holderSettings: {
                    dimensions: dimensions,
                    theme: flags.theme,
                    flags: flags
                  },
                  el: el,
                  engineSettings: el.holderData.engineSettings
                };

                if (flags.textmode == 'exact') {
                  flags.exactDimensions = dimensions;
                  settings.holderSettings.dimensions = flags.dimensions;
                }

                render(settings);
              } else {
                setInvisible(el);
              }
            }
          }
        }
        /**
         * Sets up aspect ratio metadata for fluid placeholders, in order to preserve proportions when resizing
         *
         * @private
         * @param el Image DOM element
         */


        function setInitialDimensions(el) {
          if (el.holderData) {
            var dimensions = dimensionCheck(el);

            if (dimensions) {
              var flags = el.holderData.flags;
              var fluidConfig = {
                fluidHeight: flags.dimensions.height.slice(-1) == '%',
                fluidWidth: flags.dimensions.width.slice(-1) == '%',
                mode: null,
                initialDimensions: dimensions
              };

              if (fluidConfig.fluidWidth && !fluidConfig.fluidHeight) {
                fluidConfig.mode = 'width';
                fluidConfig.ratio = fluidConfig.initialDimensions.width / parseFloat(flags.dimensions.height);
              } else if (!fluidConfig.fluidWidth && fluidConfig.fluidHeight) {
                fluidConfig.mode = 'height';
                fluidConfig.ratio = parseFloat(flags.dimensions.width) / fluidConfig.initialDimensions.height;
              }

              el.holderData.fluidConfig = fluidConfig;
            } else {
              setInvisible(el);
            }
          }
        }
        /**
         * Iterates through all current invisible images, and if they're visible, renders them and removes them from further checks. Runs every animation frame.
         *
         * @private
         */


        function visibilityCheck() {
          var renderableImages = [];
          var keys = Object.keys(App.vars.invisibleImages);
          var el;
          keys.forEach(function (key) {
            el = App.vars.invisibleImages[key];

            if (dimensionCheck(el) && el.nodeName.toLowerCase() == 'img') {
              renderableImages.push(el);
              delete App.vars.invisibleImages[key];
            }
          });

          if (renderableImages.length) {
            Holder.run({
              images: renderableImages
            });
          } // Done to prevent 100% CPU usage via aggressive calling of requestAnimationFrame


          setTimeout(function () {
            global.requestAnimationFrame(visibilityCheck);
          }, 10);
        }
        /**
         * Starts checking for invisible placeholders if not doing so yet. Does nothing otherwise.
         *
         * @private
         */


        function startVisibilityCheck() {
          if (!App.vars.visibilityCheckStarted) {
            global.requestAnimationFrame(visibilityCheck);
            App.vars.visibilityCheckStarted = true;
          }
        }
        /**
         * Sets a unique ID for an image detected to be invisible and adds it to the map of invisible images checked by visibilityCheck
         *
         * @private
         * @param el Invisible DOM element
         */


        function setInvisible(el) {
          if (!el.holderData.invisibleId) {
            App.vars.invisibleId += 1;
            App.vars.invisibleImages['i' + App.vars.invisibleId] = el;
            el.holderData.invisibleId = App.vars.invisibleId;
          }
        } //todo: see if possible to convert stagingRenderer to use HTML only


        var stagingRenderer = function () {
          var svg = null,
              stagingText = null,
              stagingTextNode = null;
          return function (graph) {
            var rootNode = graph.root;

            if (App.setup.supportsSVG) {
              var firstTimeSetup = false;

              var tnode = function tnode(text) {
                return document.createTextNode(text);
              };

              if (svg == null || svg.parentNode !== document.body) {
                firstTimeSetup = true;
              }

              svg = SVG.initSVG(svg, rootNode.properties.width, rootNode.properties.height); //Show staging element before staging

              svg.style.display = 'block';

              if (firstTimeSetup) {
                stagingText = DOM.newEl('text', SVG_NS);
                stagingTextNode = tnode(null);
                DOM.setAttr(stagingText, {
                  x: 0
                });
                stagingText.appendChild(stagingTextNode);
                svg.appendChild(stagingText);
                document.body.appendChild(svg);
                svg.style.visibility = 'hidden';
                svg.style.position = 'absolute';
                svg.style.top = '-100%';
                svg.style.left = '-100%'; //todo: workaround for zero-dimension <svg> tag in Opera 12
                //svg.setAttribute('width', 0);
                //svg.setAttribute('height', 0);
              }

              var holderTextGroup = rootNode.children.holderTextGroup;
              var htgProps = holderTextGroup.properties;
              DOM.setAttr(stagingText, {
                'y': htgProps.font.size,
                'style': utils.cssProps({
                  'font-weight': htgProps.font.weight,
                  'font-size': htgProps.font.size + htgProps.font.units,
                  'font-family': htgProps.font.family
                })
              }); //Unescape HTML entities to get approximately the right width

              var txt = DOM.newEl('textarea');
              txt.innerHTML = htgProps.text;
              stagingTextNode.nodeValue = txt.value; //Get bounding box for the whole string (total width and height)

              var stagingTextBBox = stagingText.getBBox(); //Get line count and split the string into words

              var lineCount = Math.ceil(stagingTextBBox.width / rootNode.properties.width);
              var words = htgProps.text.split(' ');
              var newlines = htgProps.text.match(/\\n/g);
              lineCount += newlines == null ? 0 : newlines.length; //Get bounding box for the string with spaces removed

              stagingTextNode.nodeValue = htgProps.text.replace(/[ ]+/g, '');
              var computedNoSpaceLength = stagingText.getComputedTextLength(); //Compute average space width

              var diffLength = stagingTextBBox.width - computedNoSpaceLength;
              var spaceWidth = Math.round(diffLength / Math.max(1, words.length - 1)); //Get widths for every word with space only if there is more than one line

              var wordWidths = [];

              if (lineCount > 1) {
                stagingTextNode.nodeValue = '';

                for (var i = 0; i < words.length; i++) {
                  if (words[i].length === 0) continue;
                  stagingTextNode.nodeValue = utils.decodeHtmlEntity(words[i]);
                  var bbox = stagingText.getBBox();
                  wordWidths.push({
                    text: words[i],
                    width: bbox.width
                  });
                }
              } //Hide staging element after staging


              svg.style.display = 'none';
              return {
                spaceWidth: spaceWidth,
                lineCount: lineCount,
                boundingBox: stagingTextBBox,
                words: wordWidths
              };
            } else {
              //todo: canvas fallback for measuring text on android 2.3
              return false;
            }
          };
        }(); //Helpers

        /**
         * Prevents a function from being called too often, waits until a timer elapses to call it again
         *
         * @param fn Function to call
         */


        function debounce(fn) {
          if (!App.vars.debounceTimer) fn.call(this);
          if (App.vars.debounceTimer) global.clearTimeout(App.vars.debounceTimer);
          App.vars.debounceTimer = global.setTimeout(function () {
            App.vars.debounceTimer = null;
            fn.call(this);
          }, App.setup.debounce);
        }
        /**
         * Holder-specific resize/orientation change callback, debounced to prevent excessive execution
         */


        function resizeEvent() {
          debounce(function () {
            updateResizableElements(null);
          });
        } //Set up flags


        for (var flag in App.flags) {
          if (!App.flags.hasOwnProperty(flag)) continue;

          App.flags[flag].match = function (val) {
            return val.match(this.regex);
          };
        } //Properties set once on setup


        App.setup = {
          renderer: 'html',
          debounce: 100,
          ratio: 1,
          supportsCanvas: false,
          supportsSVG: false,
          lineWrapRatio: 0.9,
          dataAttr: 'data-src',
          renderers: ['html', 'canvas', 'svg']
        }; //Properties modified during runtime

        App.vars = {
          preempted: false,
          resizableImages: [],
          invisibleImages: {},
          invisibleId: 0,
          visibilityCheckStarted: false,
          debounceTimer: null,
          cache: {}
        }; //Pre-flight

        (function () {
          var canvas = DOM.newEl('canvas');

          if (canvas.getContext) {
            if (canvas.toDataURL('image/png').indexOf('data:image/png') != -1) {
              App.setup.renderer = 'canvas';
              App.setup.supportsCanvas = true;
            }
          }

          if (!!document.createElementNS && !!document.createElementNS(SVG_NS, 'svg').createSVGRect) {
            App.setup.renderer = 'svg';
            App.setup.supportsSVG = true;
          }
        })(); //Starts checking for invisible placeholders


        startVisibilityCheck();

        if (onDomReady) {
          onDomReady(function () {
            if (!App.vars.preempted) {
              Holder.run();
            }

            if (global.addEventListener) {
              global.addEventListener('resize', resizeEvent, false);
              global.addEventListener('orientationchange', resizeEvent, false);
            } else {
              global.attachEvent('onresize', resizeEvent);
            }

            if (_typeof(global.Turbolinks) == 'object') {
              global.document.addEventListener('page:change', function () {
                Holder.run();
              });
            }
          });
        }

        module.exports = Holder;
        /* WEBPACK VAR INJECTION */
      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 2 */

    /***/
    function (module, exports) {
      /*!
       * onDomReady.js 1.4.0 (c) 2013 Tubal Martin - MIT license
       *
       * Specially modified to work with Holder.js
       */
      function _onDomReady(win) {
        //Lazy loading fix for Firefox < 3.6
        //http://webreflection.blogspot.com/2009/11/195-chars-to-help-lazy-loading.html
        if (document.readyState == null && document.addEventListener) {
          document.addEventListener("DOMContentLoaded", function DOMContentLoaded() {
            document.removeEventListener("DOMContentLoaded", DOMContentLoaded, false);
            document.readyState = "complete";
          }, false);
          document.readyState = "loading";
        }

        var doc = win.document,
            docElem = doc.documentElement,
            LOAD = "load",
            FALSE = false,
            ONLOAD = "on" + LOAD,
            COMPLETE = "complete",
            READYSTATE = "readyState",
            ATTACHEVENT = "attachEvent",
            DETACHEVENT = "detachEvent",
            ADDEVENTLISTENER = "addEventListener",
            DOMCONTENTLOADED = "DOMContentLoaded",
            ONREADYSTATECHANGE = "onreadystatechange",
            REMOVEEVENTLISTENER = "removeEventListener",
            // W3C Event model
        w3c = ADDEVENTLISTENER in doc,
            _top = FALSE,
            // isReady: Is the DOM ready to be used? Set to true once it occurs.
        isReady = FALSE,
            // Callbacks pending execution until DOM is ready
        callbacks = []; // Handle when the DOM is ready

        function ready(fn) {
          if (!isReady) {
            // Make sure body exists, at least, in case IE gets a little overzealous (ticket #5443).
            if (!doc.body) {
              return defer(ready);
            } // Remember that the DOM is ready


            isReady = true; // Execute all callbacks

            while (fn = callbacks.shift()) {
              defer(fn);
            }
          }
        } // The ready event handler


        function completed(event) {
          // readyState === "complete" is good enough for us to call the dom ready in oldIE
          if (w3c || event.type === LOAD || doc[READYSTATE] === COMPLETE) {
            detach();
            ready();
          }
        } // Clean-up method for dom ready events


        function detach() {
          if (w3c) {
            doc[REMOVEEVENTLISTENER](DOMCONTENTLOADED, completed, FALSE);
            win[REMOVEEVENTLISTENER](LOAD, completed, FALSE);
          } else {
            doc[DETACHEVENT](ONREADYSTATECHANGE, completed);
            win[DETACHEVENT](ONLOAD, completed);
          }
        } // Defers a function, scheduling it to run after the current call stack has cleared.


        function defer(fn, wait) {
          // Allow 0 to be passed
          setTimeout(fn, +wait >= 0 ? wait : 1);
        } // Attach the listeners:
        // Catch cases where onDomReady is called after the browser event has already occurred.
        // we once tried to use readyState "interactive" here, but it caused issues like the one
        // discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15


        if (doc[READYSTATE] === COMPLETE) {
          // Handle it asynchronously to allow scripts the opportunity to delay ready
          defer(ready); // Standards-based browsers support DOMContentLoaded
        } else if (w3c) {
          // Use the handy event callback
          doc[ADDEVENTLISTENER](DOMCONTENTLOADED, completed, FALSE); // A fallback to window.onload, that will always work

          win[ADDEVENTLISTENER](LOAD, completed, FALSE); // If IE event model is used
        } else {
          // Ensure firing before onload, maybe late but safe also for iframes
          doc[ATTACHEVENT](ONREADYSTATECHANGE, completed); // A fallback to window.onload, that will always work

          win[ATTACHEVENT](ONLOAD, completed); // If IE and not a frame
          // continually check to see if the document is ready

          try {
            _top = win.frameElement == null && docElem;
          } catch (e) {}

          if (_top && _top.doScroll) {
            (function doScrollCheck() {
              if (!isReady) {
                try {
                  // Use the trick by Diego Perini
                  // http://javascript.nwbox.com/IEContentLoaded/
                  _top.doScroll("left");
                } catch (e) {
                  return defer(doScrollCheck, 50);
                } // detach all dom ready events


                detach(); // and execute any waiting functions

                ready();
              }
            })();
          }
        }

        function onDomReady(fn) {
          // If DOM is ready, execute the function (async), otherwise wait
          isReady ? defer(fn) : callbacks.push(fn);
        } // Add version


        onDomReady.version = "1.4.0"; // Add method to check if DOM is ready

        onDomReady.isReady = function () {
          return isReady;
        };

        return onDomReady;
      }

      module.exports = typeof window !== "undefined" && _onDomReady(window);
      /***/
    },
    /* 3 */

    /***/
    function (module, exports, __webpack_require__) {
      //Modified version of component/querystring
      //Changes: updated dependencies, dot notation parsing, JSHint fixes
      //Fork at https://github.com/imsky/querystring

      /**
       * Module dependencies.
       */
      var encode = encodeURIComponent;
      var decode = decodeURIComponent;

      var trim = __webpack_require__(4);

      var type = __webpack_require__(5);

      var arrayRegex = /(\w+)\[(\d+)\]/;
      var objectRegex = /\w+\.\w+/;
      /**
       * Parse the given query `str`.
       *
       * @param {String} str
       * @return {Object}
       * @api public
       */

      exports.parse = function (str) {
        if ('string' !== typeof str) return {};
        str = trim(str);
        if ('' === str) return {};
        if ('?' === str.charAt(0)) str = str.slice(1);
        var obj = {};
        var pairs = str.split('&');

        for (var i = 0; i < pairs.length; i++) {
          var parts = pairs[i].split('=');
          var key = decode(parts[0]);
          var m, ctx, prop;

          if (m = arrayRegex.exec(key)) {
            obj[m[1]] = obj[m[1]] || [];
            obj[m[1]][m[2]] = decode(parts[1]);
            continue;
          }

          if (m = objectRegex.test(key)) {
            m = key.split('.');
            ctx = obj;

            while (m.length) {
              prop = m.shift();
              if (!prop.length) continue;

              if (!ctx[prop]) {
                ctx[prop] = {};
              } else if (ctx[prop] && _typeof(ctx[prop]) !== 'object') {
                break;
              }

              if (!m.length) {
                ctx[prop] = decode(parts[1]);
              }

              ctx = ctx[prop];
            }

            continue;
          }

          obj[parts[0]] = null == parts[1] ? '' : decode(parts[1]);
        }

        return obj;
      };
      /**
       * Stringify the given `obj`.
       *
       * @param {Object} obj
       * @return {String}
       * @api public
       */


      exports.stringify = function (obj) {
        if (!obj) return '';
        var pairs = [];

        for (var key in obj) {
          var value = obj[key];

          if ('array' == type(value)) {
            for (var i = 0; i < value.length; ++i) {
              pairs.push(encode(key + '[' + i + ']') + '=' + encode(value[i]));
            }

            continue;
          }

          pairs.push(encode(key) + '=' + encode(obj[key]));
        }

        return pairs.join('&');
      };
      /***/

    },
    /* 4 */

    /***/
    function (module, exports) {
      exports = module.exports = trim;

      function trim(str) {
        return str.replace(/^\s*|\s*$/g, '');
      }

      exports.left = function (str) {
        return str.replace(/^\s*/, '');
      };

      exports.right = function (str) {
        return str.replace(/\s*$/, '');
      };
      /***/

    },
    /* 5 */

    /***/
    function (module, exports) {
      /**
       * toString ref.
       */
      var toString = Object.prototype.toString;
      /**
       * Return the type of `val`.
       *
       * @param {Mixed} val
       * @return {String}
       * @api public
       */

      module.exports = function (val) {
        switch (toString.call(val)) {
          case '[object Date]':
            return 'date';

          case '[object RegExp]':
            return 'regexp';

          case '[object Arguments]':
            return 'arguments';

          case '[object Array]':
            return 'array';

          case '[object Error]':
            return 'error';
        }

        if (val === null) return 'null';
        if (val === undefined) return 'undefined';
        if (val !== val) return 'nan';
        if (val && val.nodeType === 1) return 'element';
        if (isBuffer(val)) return 'buffer';
        val = val.valueOf ? val.valueOf() : Object.prototype.valueOf.apply(val);
        return _typeof(val);
      }; // code borrowed from https://github.com/feross/is-buffer/blob/master/index.js


      function isBuffer(obj) {
        return !!(obj != null && (obj._isBuffer || // For Safari 5-7 (missing Object.prototype.constructor)
        obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)));
      }
      /***/

    },
    /* 6 */

    /***/
    function (module, exports) {
      var SceneGraph = function SceneGraph(sceneProperties) {
        var nodeCount = 1; //todo: move merge to helpers section

        function merge(parent, child) {
          for (var prop in child) {
            parent[prop] = child[prop];
          }

          return parent;
        }

        var SceneNode = function SceneNode(name) {
          nodeCount++;
          this.parent = null;
          this.children = {};
          this.id = nodeCount;
          this.name = 'n' + nodeCount;

          if (typeof name !== 'undefined') {
            this.name = name;
          }

          this.x = this.y = this.z = 0;
          this.width = this.height = 0;
        };

        SceneNode.prototype.resize = function (width, height) {
          if (width != null) {
            this.width = width;
          }

          if (height != null) {
            this.height = height;
          }
        };

        SceneNode.prototype.moveTo = function (x, y, z) {
          this.x = x != null ? x : this.x;
          this.y = y != null ? y : this.y;
          this.z = z != null ? z : this.z;
        };

        SceneNode.prototype.add = function (child) {
          var name = child.name;

          if (typeof this.children[name] === 'undefined') {
            this.children[name] = child;
            child.parent = this;
          } else {
            throw 'SceneGraph: child already exists: ' + name;
          }
        };

        var RootNode = function RootNode() {
          SceneNode.call(this, 'root');
          this.properties = sceneProperties;
        };

        RootNode.prototype = new SceneNode();

        var Shape = function Shape(name, props) {
          SceneNode.call(this, name);
          this.properties = {
            'fill': '#000000'
          };

          if (typeof props !== 'undefined') {
            merge(this.properties, props);
          } else if (typeof name !== 'undefined' && typeof name !== 'string') {
            throw 'SceneGraph: invalid node name';
          }
        };

        Shape.prototype = new SceneNode();

        var Group = function Group() {
          Shape.apply(this, arguments);
          this.type = 'group';
        };

        Group.prototype = new Shape();

        var Rect = function Rect() {
          Shape.apply(this, arguments);
          this.type = 'rect';
        };

        Rect.prototype = new Shape();

        var Text = function Text(text) {
          Shape.call(this);
          this.type = 'text';
          this.properties.text = text;
        };

        Text.prototype = new Shape();
        var root = new RootNode();
        this.Shape = {
          'Rect': Rect,
          'Text': Text,
          'Group': Group
        };
        this.root = root;
        return this;
      };

      module.exports = SceneGraph;
      /***/
    },
    /* 7 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /**
        * Shallow object clone and merge
        *
        * @param a Object A
        * @param b Object B
        * @returns {Object} New object with all of A's properties, and all of B's properties, overwriting A's properties
        */
        exports.extend = function (a, b) {
          var c = {};

          for (var x in a) {
            if (a.hasOwnProperty(x)) {
              c[x] = a[x];
            }
          }

          if (b != null) {
            for (var y in b) {
              if (b.hasOwnProperty(y)) {
                c[y] = b[y];
              }
            }
          }

          return c;
        };
        /**
         * Takes a k/v list of CSS properties and returns a rule
         *
         * @param props CSS properties object
         */


        exports.cssProps = function (props) {
          var ret = [];

          for (var p in props) {
            if (props.hasOwnProperty(p)) {
              ret.push(p + ':' + props[p]);
            }
          }

          return ret.join(';');
        };
        /**
         * Encodes HTML entities in a string
         *
         * @param str Input string
         */


        exports.encodeHtmlEntity = function (str) {
          var buf = [];
          var charCode = 0;

          for (var i = str.length - 1; i >= 0; i--) {
            charCode = str.charCodeAt(i);

            if (charCode > 128) {
              buf.unshift(['&#', charCode, ';'].join(''));
            } else {
              buf.unshift(str[i]);
            }
          }

          return buf.join('');
        };
        /**
         * Checks if an image exists
         *
         * @param src URL of image
         * @param callback Callback to call once image status has been found
         */


        exports.imageExists = function (src, callback) {
          var image = new Image();

          image.onerror = function () {
            callback.call(this, false);
          };

          image.onload = function () {
            callback.call(this, true);
          };

          image.src = src;
        };
        /**
         * Decodes HTML entities in a string
         *
         * @param str Input string
         */


        exports.decodeHtmlEntity = function (str) {
          return str.replace(/&#(\d+);/g, function (match, dec) {
            return String.fromCharCode(dec);
          });
        };
        /**
         * Returns an element's dimensions if it's visible, `false` otherwise.
         *
         * @param el DOM element
         */


        exports.dimensionCheck = function (el) {
          var dimensions = {
            height: el.clientHeight,
            width: el.clientWidth
          };

          if (dimensions.height && dimensions.width) {
            return dimensions;
          } else {
            return false;
          }
        };
        /**
         * Returns true if value is truthy or if it is "semantically truthy"
         * @param val
         */


        exports.truthy = function (val) {
          if (typeof val === 'string') {
            return val === 'true' || val === 'yes' || val === '1' || val === 'on' || val === '✓';
          }

          return !!val;
        };
        /**
         * Parses input into a well-formed CSS color
         * @param val
         */


        exports.parseColor = function (val) {
          var hexre = /(^(?:#?)[0-9a-f]{6}$)|(^(?:#?)[0-9a-f]{3}$)/i;
          var rgbre = /^rgb\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*\)$/;
          var rgbare = /^rgba\((\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(0\.\d{1,}|1)\)$/;
          var match = val.match(hexre);
          var retval;

          if (match !== null) {
            retval = match[1] || match[2];

            if (retval[0] !== '#') {
              return '#' + retval;
            } else {
              return retval;
            }
          }

          match = val.match(rgbre);

          if (match !== null) {
            retval = 'rgb(' + match.slice(1).join(',') + ')';
            return retval;
          }

          match = val.match(rgbare);

          if (match !== null) {
            retval = 'rgba(' + match.slice(1).join(',') + ')';
            return retval;
          }

          return null;
        };
        /**
         * Provides the correct scaling ratio for canvas drawing operations on HiDPI screens (e.g. Retina displays)
         */


        exports.canvasRatio = function () {
          var devicePixelRatio = 1;
          var backingStoreRatio = 1;

          if (global.document) {
            var canvas = global.document.createElement('canvas');

            if (canvas.getContext) {
              var ctx = canvas.getContext('2d');
              devicePixelRatio = global.devicePixelRatio || 1;
              backingStoreRatio = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
            }
          }

          return devicePixelRatio / backingStoreRatio;
        };
        /* WEBPACK VAR INJECTION */

      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 8 */

    /***/
    function (module, exports, __webpack_require__) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        var DOM = __webpack_require__(9);

        var SVG_NS = 'http://www.w3.org/2000/svg';
        var NODE_TYPE_COMMENT = 8;
        /**
         * Generic SVG element creation function
         *
         * @param svg SVG context, set to null if new
         * @param width Document width
         * @param height Document height
         */

        exports.initSVG = function (svg, width, height) {
          var defs,
              style,
              initialize = false;

          if (svg && svg.querySelector) {
            style = svg.querySelector('style');

            if (style === null) {
              initialize = true;
            }
          } else {
            svg = DOM.newEl('svg', SVG_NS);
            initialize = true;
          }

          if (initialize) {
            defs = DOM.newEl('defs', SVG_NS);
            style = DOM.newEl('style', SVG_NS);
            DOM.setAttr(style, {
              'type': 'text/css'
            });
            defs.appendChild(style);
            svg.appendChild(defs);
          } //IE throws an exception if this is set and Chrome requires it to be set


          if (svg.webkitMatchesSelector) {
            svg.setAttribute('xmlns', SVG_NS);
          } //Remove comment nodes


          for (var i = 0; i < svg.childNodes.length; i++) {
            if (svg.childNodes[i].nodeType === NODE_TYPE_COMMENT) {
              svg.removeChild(svg.childNodes[i]);
            }
          } //Remove CSS


          while (style.childNodes.length) {
            style.removeChild(style.childNodes[0]);
          }

          DOM.setAttr(svg, {
            'width': width,
            'height': height,
            'viewBox': '0 0 ' + width + ' ' + height,
            'preserveAspectRatio': 'none'
          });
          return svg;
        };
        /**
         * Converts serialized SVG to a string suitable for data URI use
         * @param svgString Serialized SVG string
         * @param [base64] Use base64 encoding for data URI
         */


        exports.svgStringToDataURI = function () {
          var rawPrefix = 'data:image/svg+xml;charset=UTF-8,';
          var base64Prefix = 'data:image/svg+xml;charset=UTF-8;base64,';
          return function (svgString, base64) {
            if (base64) {
              return base64Prefix + btoa(global.unescape(encodeURIComponent(svgString)));
            } else {
              return rawPrefix + encodeURIComponent(svgString);
            }
          };
        }();
        /**
         * Returns serialized SVG with XML processing instructions
         *
         * @param svg SVG context
         * @param stylesheets CSS stylesheets to include
         */


        exports.serializeSVG = function (svg, engineSettings) {
          if (!global.XMLSerializer) return;
          var serializer = new XMLSerializer();
          var svgCSS = '';
          var stylesheets = engineSettings.stylesheets; //External stylesheets: Processing Instruction method

          if (engineSettings.svgXMLStylesheet) {
            var xml = DOM.createXML(); //Add <?xml-stylesheet ?> directives

            for (var i = stylesheets.length - 1; i >= 0; i--) {
              var csspi = xml.createProcessingInstruction('xml-stylesheet', 'href="' + stylesheets[i] + '" rel="stylesheet"');
              xml.insertBefore(csspi, xml.firstChild);
            }

            xml.removeChild(xml.documentElement);
            svgCSS = serializer.serializeToString(xml);
          }

          var svgText = serializer.serializeToString(svg);
          svgText = svgText.replace(/\&amp;(\#[0-9]{2,}\;)/g, '&$1');
          return svgCSS + svgText;
        };
        /* WEBPACK VAR INJECTION */

      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 9 */

    /***/
    function (module, exports) {
      /* WEBPACK VAR INJECTION */
      (function (global) {
        /**
        * Generic new DOM element function
        *
        * @param tag Tag to create
        * @param namespace Optional namespace value
        */
        exports.newEl = function (tag, namespace) {
          if (!global.document) return;

          if (namespace == null) {
            return global.document.createElement(tag);
          } else {
            return global.document.createElementNS(namespace, tag);
          }
        };
        /**
         * Generic setAttribute function
         *
         * @param el Reference to DOM element
         * @param attrs Object with attribute keys and values
         */


        exports.setAttr = function (el, attrs) {
          for (var a in attrs) {
            el.setAttribute(a, attrs[a]);
          }
        };
        /**
         * Creates a XML document
         * @private
         */


        exports.createXML = function () {
          if (!global.DOMParser) return;
          return new DOMParser().parseFromString('<xml />', 'application/xml');
        };
        /**
         * Converts a value into an array of DOM nodes
         *
         * @param val A string, a NodeList, a Node, or an HTMLCollection
         */


        exports.getNodeArray = function (val) {
          var retval = null;

          if (typeof val == 'string') {
            retval = document.querySelectorAll(val);
          } else if (global.NodeList && val instanceof global.NodeList) {
            retval = val;
          } else if (global.Node && val instanceof global.Node) {
            retval = [val];
          } else if (global.HTMLCollection && val instanceof global.HTMLCollection) {
            retval = val;
          } else if (val instanceof Array) {
            retval = val;
          } else if (val === null) {
            retval = [];
          }

          retval = Array.prototype.slice.call(retval);
          return retval;
        };
        /* WEBPACK VAR INJECTION */

      }).call(exports, function () {
        return this;
      }());
      /***/
    },
    /* 10 */

    /***/
    function (module, exports) {
      var Color = function Color(color, options) {
        //todo: support rgba, hsla, and rrggbbaa notation
        //todo: use CIELAB internally
        //todo: add clamp function (with sign)
        if (typeof color !== 'string') return;
        this.original = color;

        if (color.charAt(0) === '#') {
          color = color.slice(1);
        }

        if (/[^a-f0-9]+/i.test(color)) return;

        if (color.length === 3) {
          color = color.replace(/./g, '$&$&');
        }

        if (color.length !== 6) return;
        this.alpha = 1;

        if (options && options.alpha) {
          this.alpha = options.alpha;
        }

        this.set(parseInt(color, 16));
      }; //todo: jsdocs


      Color.rgb2hex = function (r, g, b) {
        function format(decimal) {
          var hex = (decimal | 0).toString(16);

          if (decimal < 16) {
            hex = '0' + hex;
          }

          return hex;
        }

        return [r, g, b].map(format).join('');
      }; //todo: jsdocs


      Color.hsl2rgb = function (h, s, l) {
        var H = h / 60;
        var C = (1 - Math.abs(2 * l - 1)) * s;
        var X = C * (1 - Math.abs(parseInt(H) % 2 - 1));
        var m = l - C / 2;
        var r = 0,
            g = 0,
            b = 0;

        if (H >= 0 && H < 1) {
          r = C;
          g = X;
        } else if (H >= 1 && H < 2) {
          r = X;
          g = C;
        } else if (H >= 2 && H < 3) {
          g = C;
          b = X;
        } else if (H >= 3 && H < 4) {
          g = X;
          b = C;
        } else if (H >= 4 && H < 5) {
          r = X;
          b = C;
        } else if (H >= 5 && H < 6) {
          r = C;
          b = X;
        }

        r += m;
        g += m;
        b += m;
        r = parseInt(r * 255);
        g = parseInt(g * 255);
        b = parseInt(b * 255);
        return [r, g, b];
      };
      /**
       * Sets the color from a raw RGB888 integer
       * @param raw RGB888 representation of color
       */
      //todo: refactor into a static method
      //todo: factor out individual color spaces
      //todo: add HSL, CIELAB, and CIELUV


      Color.prototype.set = function (val) {
        this.raw = val;
        var r = (this.raw & 0xFF0000) >> 16;
        var g = (this.raw & 0x00FF00) >> 8;
        var b = this.raw & 0x0000FF; // BT.709

        var y = 0.2126 * r + 0.7152 * g + 0.0722 * b;
        var u = -0.09991 * r - 0.33609 * g + 0.436 * b;
        var v = 0.615 * r - 0.55861 * g - 0.05639 * b;
        this.rgb = {
          r: r,
          g: g,
          b: b
        };
        this.yuv = {
          y: y,
          u: u,
          v: v
        };
        return this;
      };
      /**
       * Lighten or darken a color
       * @param multiplier Amount to lighten or darken (-1 to 1)
       */


      Color.prototype.lighten = function (multiplier) {
        var cm = Math.min(1, Math.max(0, Math.abs(multiplier))) * (multiplier < 0 ? -1 : 1);
        var bm = 255 * cm | 0;
        var cr = Math.min(255, Math.max(0, this.rgb.r + bm));
        var cg = Math.min(255, Math.max(0, this.rgb.g + bm));
        var cb = Math.min(255, Math.max(0, this.rgb.b + bm));
        var hex = Color.rgb2hex(cr, cg, cb);
        return new Color(hex);
      };
      /**
       * Output color in hex format
       * @param addHash Add a hash character to the beginning of the output
       */


      Color.prototype.toHex = function (addHash) {
        return (addHash ? '#' : '') + this.raw.toString(16);
      };
      /**
       * Returns whether or not current color is lighter than another color
       * @param color Color to compare against
       */


      Color.prototype.lighterThan = function (color) {
        if (!(color instanceof Color)) {
          color = new Color(color);
        }

        return this.yuv.y > color.yuv.y;
      };
      /**
       * Returns the result of mixing current color with another color
       * @param color Color to mix with
       * @param multiplier How much to mix with the other color
       */

      /*
      Color.prototype.mix = function (color, multiplier) {
          if (!(color instanceof Color)) {
              color = new Color(color);
          }
           var r = this.rgb.r;
          var g = this.rgb.g;
          var b = this.rgb.b;
          var a = this.alpha;
           var m = typeof multiplier !== 'undefined' ? multiplier : 0.5;
           //todo: write a lerp function
          r = r + m * (color.rgb.r - r);
          g = g + m * (color.rgb.g - g);
          b = b + m * (color.rgb.b - b);
          a = a + m * (color.alpha - a);
           return new Color(Color.rgbToHex(r, g, b), {
              'alpha': a
          });
      };
      */

      /**
       * Returns the result of blending another color on top of current color with alpha
       * @param color Color to blend on top of current color, i.e. "Ca"
       */
      //todo: see if .blendAlpha can be merged into .mix


      Color.prototype.blendAlpha = function (color) {
        if (!(color instanceof Color)) {
          color = new Color(color);
        }

        var Ca = color;
        var Cb = this; //todo: write alpha blending function

        var r = Ca.alpha * Ca.rgb.r + (1 - Ca.alpha) * Cb.rgb.r;
        var g = Ca.alpha * Ca.rgb.g + (1 - Ca.alpha) * Cb.rgb.g;
        var b = Ca.alpha * Ca.rgb.b + (1 - Ca.alpha) * Cb.rgb.b;
        return new Color(Color.rgb2hex(r, g, b));
      };

      module.exports = Color;
      /***/
    },
    /* 11 */

    /***/
    function (module, exports) {
      module.exports = {
        'version': '2.9.6',
        'svg_ns': 'http://www.w3.org/2000/svg'
      };
      /***/
    },
    /* 12 */

    /***/
    function (module, exports, __webpack_require__) {
      var shaven = __webpack_require__(13);

      var SVG = __webpack_require__(8);

      var constants = __webpack_require__(11);

      var utils = __webpack_require__(7);

      var SVG_NS = constants.svg_ns;
      var templates = {
        'element': function element(options) {
          var tag = options.tag;
          var content = options.content || '';
          delete options.tag;
          delete options.content;
          return [tag, content, options];
        }
      }; //todo: deprecate tag arg, infer tag from shape object

      function convertShape(shape, tag) {
        return templates.element({
          'tag': tag,
          'width': shape.width,
          'height': shape.height,
          'fill': shape.properties.fill
        });
      }

      function textCss(properties) {
        return utils.cssProps({
          'fill': properties.fill,
          'font-weight': properties.font.weight,
          'font-family': properties.font.family + ', monospace',
          'font-size': properties.font.size + properties.font.units
        });
      }

      function outlinePath(bgWidth, bgHeight, outlineWidth) {
        var outlineOffsetWidth = outlineWidth / 2;
        return ['M', outlineOffsetWidth, outlineOffsetWidth, 'H', bgWidth - outlineOffsetWidth, 'V', bgHeight - outlineOffsetWidth, 'H', outlineOffsetWidth, 'V', 0, 'M', 0, outlineOffsetWidth, 'L', bgWidth, bgHeight - outlineOffsetWidth, 'M', 0, bgHeight - outlineOffsetWidth, 'L', bgWidth, outlineOffsetWidth].join(' ');
      }

      module.exports = function (sceneGraph, renderSettings) {
        var engineSettings = renderSettings.engineSettings;
        var stylesheets = engineSettings.stylesheets;
        var stylesheetXml = stylesheets.map(function (stylesheet) {
          return '<?xml-stylesheet rel="stylesheet" href="' + stylesheet + '"?>';
        }).join('\n');
        var holderId = 'holder_' + Number(new Date()).toString(16);
        var root = sceneGraph.root;
        var textGroup = root.children.holderTextGroup;
        var css = '#' + holderId + ' text { ' + textCss(textGroup.properties) + ' } '; // push text down to be equally vertically aligned with canvas renderer

        textGroup.y += textGroup.textPositionData.boundingBox.height * 0.8;
        var wordTags = [];
        Object.keys(textGroup.children).forEach(function (lineKey) {
          var line = textGroup.children[lineKey];
          Object.keys(line.children).forEach(function (wordKey) {
            var word = line.children[wordKey];
            var x = textGroup.x + line.x + word.x;
            var y = textGroup.y + line.y + word.y;
            var wordTag = templates.element({
              'tag': 'text',
              'content': word.properties.text,
              'x': x,
              'y': y
            });
            wordTags.push(wordTag);
          });
        });
        var text = templates.element({
          'tag': 'g',
          'content': wordTags
        });
        var outline = null;

        if (root.children.holderBg.properties.outline) {
          var outlineProperties = root.children.holderBg.properties.outline;
          outline = templates.element({
            'tag': 'path',
            'd': outlinePath(root.children.holderBg.width, root.children.holderBg.height, outlineProperties.width),
            'stroke-width': outlineProperties.width,
            'stroke': outlineProperties.fill,
            'fill': 'none'
          });
        }

        var bg = convertShape(root.children.holderBg, 'rect');
        var sceneContent = [];
        sceneContent.push(bg);

        if (outlineProperties) {
          sceneContent.push(outline);
        }

        sceneContent.push(text);
        var scene = templates.element({
          'tag': 'g',
          'id': holderId,
          'content': sceneContent
        });
        var style = templates.element({
          'tag': 'style',
          //todo: figure out how to add CDATA directive
          'content': css,
          'type': 'text/css'
        });
        var defs = templates.element({
          'tag': 'defs',
          'content': style
        });
        var svg = templates.element({
          'tag': 'svg',
          'content': [defs, scene],
          'width': root.properties.width,
          'height': root.properties.height,
          'xmlns': SVG_NS,
          'viewBox': [0, 0, root.properties.width, root.properties.height].join(' '),
          'preserveAspectRatio': 'none'
        });
        var output = shaven(svg);

        if (/\&amp;(x)?#[0-9A-Fa-f]/.test(output[0])) {
          output[0] = output[0].replace(/&amp;#/gm, '&#');
        }

        output = stylesheetXml + output[0];
        var svgString = SVG.svgStringToDataURI(output, renderSettings.mode === 'background');
        return svgString;
      };
      /***/

    },
    /* 13 */

    /***/
    function (module, exports, __webpack_require__) {
      var escape = __webpack_require__(14); // TODO: remove namespace


      module.exports = function shaven(array, namespace, returnObject) {
        'use strict';

        var i = 1;
        var doesEscape = true;
        var HTMLString;
        var attributeKey;
        var callback;
        var key;
        returnObject = returnObject || {};

        function createElement(sugarString) {
          var tags = sugarString.match(/^[\w-]+/);
          var element = {
            tag: tags ? tags[0] : 'div',
            attr: {},
            children: []
          };
          var id = sugarString.match(/#([\w-]+)/);
          var reference = sugarString.match(/\$([\w-]+)/);
          var classNames = sugarString.match(/\.[\w-]+/g); // Assign id if is set

          if (id) {
            element.attr.id = id[1]; // Add element to the return object

            returnObject[id[1]] = element;
          }

          if (reference) returnObject[reference[1]] = element;
          if (classNames) element.attr.class = classNames.join(' ').replace(/\./g, '');
          if (sugarString.match(/&$/g)) doesEscape = false;
          return element;
        }

        function replacer(key, value) {
          if (value === null || value === false || value === undefined) return;
          if (typeof value !== 'string' && _typeof(value) !== 'object') return String(value);
          return value;
        }

        function escapeAttribute(string) {
          return string || string === 0 ? String(string).replace(/&/g, '&amp;').replace(/"/g, '&quot;') : '';
        }

        function escapeHTML(string) {
          return String(string).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&apos;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        }

        if (typeof array[0] === 'string') array[0] = createElement(array[0]);else if (Array.isArray(array[0])) i = 0;else throw new Error('First element of array must be a string, ' + 'or an array and not ' + JSON.stringify(array[0]));

        for (; i < array.length; i++) {
          // Don't render element if value is false or null
          if (array[i] === false || array[i] === null) {
            array[0] = false;
            break;
          } // Continue with next array value if current value is undefined or true
          else if (array[i] === undefined || array[i] === true) {
              continue;
            } else if (typeof array[i] === 'string') {
              if (doesEscape) array[i] = escapeHTML(array[i]);
              array[0].children.push(array[i]);
            } else if (typeof array[i] === 'number') {
              array[0].children.push(array[i]);
            } else if (Array.isArray(array[i])) {
              if (Array.isArray(array[i][0])) {
                array[i].reverse().forEach(function (subArray) {
                  array.splice(i + 1, 0, subArray);
                });
                if (i !== 0) continue;
                i++;
              }

              shaven(array[i], namespace, returnObject);
              if (array[i][0]) array[0].children.push(array[i][0]);
            } else if (typeof array[i] === 'function') callback = array[i];else if (_typeof(array[i]) === 'object') {
              for (attributeKey in array[i]) {
                if (array[i].hasOwnProperty(attributeKey)) if (array[i][attributeKey] !== null && array[i][attributeKey] !== false) if (attributeKey === 'style' && _typeof(array[i][attributeKey]) === 'object') array[0].attr[attributeKey] = JSON.stringify(array[i][attributeKey], replacer).slice(2, -2).replace(/","/g, ';').replace(/":"/g, ':').replace(/\\"/g, '\'');else array[0].attr[attributeKey] = array[i][attributeKey];
              }
            } else throw new TypeError('"' + array[i] + '" is not allowed as a value.');
        }

        if (array[0] !== false) {
          HTMLString = '<' + array[0].tag;

          for (key in array[0].attr) {
            if (array[0].attr.hasOwnProperty(key)) HTMLString += ' ' + key + '="' + escapeAttribute(array[0].attr[key]) + '"';
          }

          HTMLString += '>';
          array[0].children.forEach(function (child) {
            HTMLString += child;
          });
          HTMLString += '</' + array[0].tag + '>';
          array[0] = HTMLString;
        } // Return root element on index 0


        returnObject[0] = array[0];
        if (callback) callback(array[0]); // returns object containing all elements with an id and the root element

        return returnObject;
      };
      /***/

    },
    /* 14 */

    /***/
    function (module, exports) {
      /*!
       * escape-html
       * Copyright(c) 2012-2013 TJ Holowaychuk
       * Copyright(c) 2015 Andreas Lubbe
       * Copyright(c) 2015 Tiancheng "Timothy" Gu
       * MIT Licensed
       */
      'use strict';
      /**
       * Module variables.
       * @private
       */

      var matchHtmlRegExp = /["'&<>]/;
      /**
       * Module exports.
       * @public
       */

      module.exports = escapeHtml;
      /**
       * Escape special characters in the given string of html.
       *
       * @param  {string} string The string to escape for inserting into HTML
       * @return {string}
       * @public
       */

      function escapeHtml(string) {
        var str = '' + string;
        var match = matchHtmlRegExp.exec(str);

        if (!match) {
          return str;
        }

        var escape;
        var html = '';
        var index = 0;
        var lastIndex = 0;

        for (index = match.index; index < str.length; index++) {
          switch (str.charCodeAt(index)) {
            case 34:
              // "
              escape = '&quot;';
              break;

            case 38:
              // &
              escape = '&amp;';
              break;

            case 39:
              // '
              escape = '&#39;';
              break;

            case 60:
              // <
              escape = '&lt;';
              break;

            case 62:
              // >
              escape = '&gt;';
              break;

            default:
              continue;
          }

          if (lastIndex !== index) {
            html += str.substring(lastIndex, index);
          }

          lastIndex = index + 1;
          html += escape;
        }

        return lastIndex !== index ? html + str.substring(lastIndex, index) : html;
      }
      /***/

    },
    /* 15 */

    /***/
    function (module, exports, __webpack_require__) {
      var DOM = __webpack_require__(9);

      var utils = __webpack_require__(7);

      module.exports = function () {
        var canvas = DOM.newEl('canvas');
        var ctx = null;
        return function (sceneGraph) {
          if (ctx == null) {
            ctx = canvas.getContext('2d');
          }

          var dpr = utils.canvasRatio();
          var root = sceneGraph.root;
          canvas.width = dpr * root.properties.width;
          canvas.height = dpr * root.properties.height;
          ctx.textBaseline = 'middle';
          var bg = root.children.holderBg;
          var bgWidth = dpr * bg.width;
          var bgHeight = dpr * bg.height; //todo: parametrize outline width (e.g. in scene object)

          var outlineWidth = 2;
          var outlineOffsetWidth = outlineWidth / 2;
          ctx.fillStyle = bg.properties.fill;
          ctx.fillRect(0, 0, bgWidth, bgHeight);

          if (bg.properties.outline) {
            //todo: abstract this into a method
            ctx.strokeStyle = bg.properties.outline.fill;
            ctx.lineWidth = bg.properties.outline.width;
            ctx.moveTo(outlineOffsetWidth, outlineOffsetWidth); // TL, TR, BR, BL

            ctx.lineTo(bgWidth - outlineOffsetWidth, outlineOffsetWidth);
            ctx.lineTo(bgWidth - outlineOffsetWidth, bgHeight - outlineOffsetWidth);
            ctx.lineTo(outlineOffsetWidth, bgHeight - outlineOffsetWidth);
            ctx.lineTo(outlineOffsetWidth, outlineOffsetWidth); // Diagonals

            ctx.moveTo(0, outlineOffsetWidth);
            ctx.lineTo(bgWidth, bgHeight - outlineOffsetWidth);
            ctx.moveTo(0, bgHeight - outlineOffsetWidth);
            ctx.lineTo(bgWidth, outlineOffsetWidth);
            ctx.stroke();
          }

          var textGroup = root.children.holderTextGroup;
          ctx.font = textGroup.properties.font.weight + ' ' + dpr * textGroup.properties.font.size + textGroup.properties.font.units + ' ' + textGroup.properties.font.family + ', monospace';
          ctx.fillStyle = textGroup.properties.fill;

          for (var lineKey in textGroup.children) {
            var line = textGroup.children[lineKey];

            for (var wordKey in line.children) {
              var word = line.children[wordKey];
              var x = dpr * (textGroup.x + line.x + word.x);
              var y = dpr * (textGroup.y + line.y + word.y + textGroup.properties.leading / 2);
              ctx.fillText(word.properties.text, x, y);
            }
          }

          return canvas.toDataURL('image/png');
        };
      }();
      /***/

    }])
  );
});

;

(function (ctx, isMeteorPackage) {
  if (isMeteorPackage) {
    Holder = ctx.Holder;
  }
})(this, typeof Meteor !== 'undefined' && typeof Package !== 'undefined');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../node_modules/webpack/buildin/module.js */ "./node_modules/webpack/buildin/module.js")(module)))

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jQuery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = jQuery;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLyh3ZWJwYWNrKS9idWlsZGluL2dsb2JhbC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzIiwid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2pzL3JhcmViaXJkLWluY2x1ZGVzLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImpRdWVyeVwiIl0sIm5hbWVzIjpbImciLCJGdW5jdGlvbiIsImUiLCJ3aW5kb3ciLCJtb2R1bGUiLCJleHBvcnRzIiwid2VicGFja1BvbHlmaWxsIiwiZGVwcmVjYXRlIiwicGF0aHMiLCJjaGlsZHJlbiIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsImwiLCJpIiwiY29uc29sZSIsImxvZyIsIk5vZGVMaXN0IiwicHJvdG90eXBlIiwiZm9yRWFjaCIsImNhbGxiYWNrIiwidGhpc0FyZyIsImxlbmd0aCIsImNhbGwiLCIkIiwidHJhbnNpdGlvbkVuZCIsImVsIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwidHJhbnNFbmRFdmVudE5hbWVzIiwiV2Via2l0VHJhbnNpdGlvbiIsIk1velRyYW5zaXRpb24iLCJPVHJhbnNpdGlvbiIsInRyYW5zaXRpb24iLCJuYW1lIiwic3R5bGUiLCJ1bmRlZmluZWQiLCJlbmQiLCJmbiIsImVtdWxhdGVUcmFuc2l0aW9uRW5kIiwiZHVyYXRpb24iLCJjYWxsZWQiLCIkZWwiLCJvbmUiLCJ0cmlnZ2VyIiwic3VwcG9ydCIsInNldFRpbWVvdXQiLCJldmVudCIsInNwZWNpYWwiLCJic1RyYW5zaXRpb25FbmQiLCJiaW5kVHlwZSIsImRlbGVnYXRlVHlwZSIsImhhbmRsZSIsInRhcmdldCIsImlzIiwiaGFuZGxlT2JqIiwiaGFuZGxlciIsImFwcGx5IiwiYXJndW1lbnRzIiwialF1ZXJ5IiwiZGlzbWlzcyIsIkFsZXJ0Iiwib24iLCJjbG9zZSIsIlZFUlNJT04iLCJUUkFOU0lUSU9OX0RVUkFUSU9OIiwiJHRoaXMiLCJzZWxlY3RvciIsImF0dHIiLCJyZXBsYWNlIiwiJHBhcmVudCIsImZpbmQiLCJwcmV2ZW50RGVmYXVsdCIsImNsb3Nlc3QiLCJFdmVudCIsImlzRGVmYXVsdFByZXZlbnRlZCIsInJlbW92ZUNsYXNzIiwicmVtb3ZlRWxlbWVudCIsImRldGFjaCIsInJlbW92ZSIsImhhc0NsYXNzIiwiUGx1Z2luIiwib3B0aW9uIiwiZWFjaCIsImRhdGEiLCJvbGQiLCJhbGVydCIsIkNvbnN0cnVjdG9yIiwibm9Db25mbGljdCIsIk1vZGFsIiwiZWxlbWVudCIsIm9wdGlvbnMiLCIkYm9keSIsImJvZHkiLCIkZWxlbWVudCIsIiRkaWFsb2ciLCIkYmFja2Ryb3AiLCJpc1Nob3duIiwib3JpZ2luYWxCb2R5UGFkIiwic2Nyb2xsYmFyV2lkdGgiLCJpZ25vcmVCYWNrZHJvcENsaWNrIiwicmVtb3RlIiwibG9hZCIsInByb3h5IiwiQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiIsIkRFRkFVTFRTIiwiYmFja2Ryb3AiLCJrZXlib2FyZCIsInNob3ciLCJ0b2dnbGUiLCJfcmVsYXRlZFRhcmdldCIsImhpZGUiLCJ0aGF0IiwicmVsYXRlZFRhcmdldCIsImNoZWNrU2Nyb2xsYmFyIiwic2V0U2Nyb2xsYmFyIiwiYWRkQ2xhc3MiLCJlc2NhcGUiLCJyZXNpemUiLCJwYXJlbnQiLCJhcHBlbmRUbyIsInNjcm9sbFRvcCIsImFkanVzdERpYWxvZyIsIm9mZnNldFdpZHRoIiwiZW5mb3JjZUZvY3VzIiwib2ZmIiwiaGlkZU1vZGFsIiwiaGFzIiwid2hpY2giLCJoYW5kbGVVcGRhdGUiLCJyZXNldEFkanVzdG1lbnRzIiwicmVzZXRTY3JvbGxiYXIiLCJyZW1vdmVCYWNrZHJvcCIsImFuaW1hdGUiLCJkb0FuaW1hdGUiLCJjdXJyZW50VGFyZ2V0IiwiZm9jdXMiLCJjYWxsYmFja1JlbW92ZSIsIm1vZGFsSXNPdmVyZmxvd2luZyIsInNjcm9sbEhlaWdodCIsImRvY3VtZW50RWxlbWVudCIsImNsaWVudEhlaWdodCIsImNzcyIsInBhZGRpbmdMZWZ0IiwiYm9keUlzT3ZlcmZsb3dpbmciLCJwYWRkaW5nUmlnaHQiLCJmdWxsV2luZG93V2lkdGgiLCJpbm5lcldpZHRoIiwiZG9jdW1lbnRFbGVtZW50UmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJpZ2h0IiwiTWF0aCIsImFicyIsImxlZnQiLCJjbGllbnRXaWR0aCIsIm1lYXN1cmVTY3JvbGxiYXIiLCJib2R5UGFkIiwicGFyc2VJbnQiLCJzY3JvbGxEaXYiLCJjbGFzc05hbWUiLCJhcHBlbmQiLCJyZW1vdmVDaGlsZCIsImV4dGVuZCIsIm1vZGFsIiwiaHJlZiIsIiR0YXJnZXQiLCJ0ZXN0Iiwic2hvd0V2ZW50IiwiX01BUCIsIl9LRVlDT0RFX01BUCIsIl9TSElGVF9NQVAiLCJfU1BFQ0lBTF9BTElBU0VTIiwibmF2aWdhdG9yIiwicGxhdGZvcm0iLCJfUkVWRVJTRV9NQVAiLCJ0b1N0cmluZyIsIl9hZGRFdmVudCIsIm9iamVjdCIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYXR0YWNoRXZlbnQiLCJfY2hhcmFjdGVyRnJvbUV2ZW50IiwiY2hhcmFjdGVyIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwic2hpZnRLZXkiLCJ0b0xvd2VyQ2FzZSIsIl9tb2RpZmllcnNNYXRjaCIsIm1vZGlmaWVyczEiLCJtb2RpZmllcnMyIiwic29ydCIsImpvaW4iLCJfZXZlbnRNb2RpZmllcnMiLCJtb2RpZmllcnMiLCJwdXNoIiwiYWx0S2V5IiwiY3RybEtleSIsIm1ldGFLZXkiLCJfcHJldmVudERlZmF1bHQiLCJyZXR1cm5WYWx1ZSIsIl9zdG9wUHJvcGFnYXRpb24iLCJzdG9wUHJvcGFnYXRpb24iLCJjYW5jZWxCdWJibGUiLCJfaXNNb2RpZmllciIsImtleSIsIl9nZXRSZXZlcnNlTWFwIiwiaGFzT3duUHJvcGVydHkiLCJfcGlja0Jlc3RBY3Rpb24iLCJhY3Rpb24iLCJfa2V5c0Zyb21TdHJpbmciLCJjb21iaW5hdGlvbiIsInNwbGl0IiwiX2dldEtleUluZm8iLCJrZXlzIiwiX2JlbG9uZ3NUbyIsImFuY2VzdG9yIiwicGFyZW50Tm9kZSIsIk1vdXNldHJhcCIsInRhcmdldEVsZW1lbnQiLCJzZWxmIiwiX2NhbGxiYWNrcyIsIl9kaXJlY3RNYXAiLCJfc2VxdWVuY2VMZXZlbHMiLCJfcmVzZXRUaW1lciIsIl9pZ25vcmVOZXh0S2V5dXAiLCJfaWdub3JlTmV4dEtleXByZXNzIiwiX25leHRFeHBlY3RlZEFjdGlvbiIsIl9yZXNldFNlcXVlbmNlcyIsImRvTm90UmVzZXQiLCJhY3RpdmVTZXF1ZW5jZXMiLCJfZ2V0TWF0Y2hlcyIsInNlcXVlbmNlTmFtZSIsImxldmVsIiwibWF0Y2hlcyIsInNlcSIsImRlbGV0ZUNvbWJvIiwiY29tYm8iLCJkZWxldGVTZXF1ZW5jZSIsInNwbGljZSIsIl9maXJlQ2FsbGJhY2siLCJzZXF1ZW5jZSIsInN0b3BDYWxsYmFjayIsInNyY0VsZW1lbnQiLCJfaGFuZGxlS2V5IiwiY2FsbGJhY2tzIiwibWF4TGV2ZWwiLCJwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrIiwibWF4IiwiaWdub3JlVGhpc0tleXByZXNzIiwiX2hhbmRsZUtleUV2ZW50Iiwia2V5Q29kZSIsImhhbmRsZUtleSIsIl9yZXNldFNlcXVlbmNlVGltZXIiLCJjbGVhclRpbWVvdXQiLCJfYmluZFNlcXVlbmNlIiwiX2luY3JlYXNlU2VxdWVuY2UiLCJuZXh0QWN0aW9uIiwiX2NhbGxiYWNrQW5kUmVzZXQiLCJpc0ZpbmFsIiwid3JhcHBlZENhbGxiYWNrIiwiX2JpbmRTaW5nbGUiLCJpbmZvIiwiX2JpbmRNdWx0aXBsZSIsImNvbWJpbmF0aW9ucyIsImJpbmQiLCJBcnJheSIsInVuYmluZCIsInJlc2V0IiwiaW5kZXhPZiIsInRhZ05hbWUiLCJpc0NvbnRlbnRFZGl0YWJsZSIsImFkZEtleWNvZGVzIiwiaW5pdCIsImRvY3VtZW50TW91c2V0cmFwIiwibWV0aG9kIiwiY2hhckF0IiwiZGVmaW5lIiwiUGFyc2xleUNvbmZpZyIsInZhbGlkYXRvcnMiLCJsdWhuIiwidmFsdWUiLCJkaWdpdCIsIm4iLCJfaiIsIl9sZW4xIiwiX3JlZjIiLCJzdW0iLCJyZXZlcnNlIiwicHJpb3JpdHkiLCJfc2xpY2UiLCJzbGljZSIsIl9zbGljZWRUb0FycmF5Iiwic2xpY2VJdGVyYXRvciIsImFyciIsIl9hcnIiLCJfbiIsIl9kIiwiX2UiLCJfaSIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX3MiLCJuZXh0IiwiZG9uZSIsImVyciIsImlzQXJyYXkiLCJUeXBlRXJyb3IiLCJfZXh0ZW5kcyIsImFzc2lnbiIsInNvdXJjZSIsIl90b0NvbnN1bWFibGVBcnJheSIsImFycjIiLCJmcm9tIiwiZ2xvYmFsIiwiZmFjdG9yeSIsInJlcXVpcmUiLCJnbG9iYWxJRCIsInBhc3RXYXJuaW5ncyIsIlV0aWxzIiwibmFtZXNwYWNlIiwib2JqIiwiYXR0cmlidXRlIiwiYXR0cmlidXRlcyIsInJlZ2V4IiwiUmVnRXhwIiwic3BlY2lmaWVkIiwiY2FtZWxpemUiLCJkZXNlcmlhbGl6ZVZhbHVlIiwiY2hlY2tBdHRyIiwiX2NoZWNrQXR0ciIsImhhc0F0dHJpYnV0ZSIsInNldEF0dHIiLCJzZXRBdHRyaWJ1dGUiLCJkYXNoZXJpemUiLCJnZXRUeXBlIiwiZ2V0QXR0cmlidXRlIiwiZ2VuZXJhdGVJRCIsIm51bSIsImlzTmFOIiwiTnVtYmVyIiwiSlNPTiIsInBhcnNlIiwic3RyIiwibWF0Y2giLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsIndhcm4iLCJfd2luZG93JGNvbnNvbGUiLCJ3YXJuT25jZSIsIm1zZyIsIl9yZXNldFdhcm5pbmdzIiwidHJpbVN0cmluZyIsInN0cmluZyIsImRhdGUiLCJwYXJzZWQiLCJfcGFyc2VkJG1hcCIsIm1hcCIsIngiLCJfcGFyc2VkJG1hcDIiLCJfIiwieWVhciIsIm1vbnRoIiwiZGF5IiwiRGF0ZSIsImdldEZ1bGxZZWFyIiwiZ2V0TW9udGgiLCJnZXREYXRlIiwiX3N0cmluZyIsImludGVnZXIiLCJudW1iZXIiLCJwYXJzZUZsb2F0IiwiX2Jvb2xlYW4iLCJyZWdleHAiLCJfcmVnZXhwIiwiZmxhZ3MiLCJwYXJzZVJlcXVpcmVtZW50IiwicmVxdWlyZW1lbnRUeXBlIiwiY29udmVydGVyIiwiY29udmVydGVkIiwibmFtZXNwYWNlRXZlbnRzIiwiZXZlbnRzIiwiZXZ0IiwiZGlmZmVyZW5jZSIsImFycmF5IiwicmVzdWx0IiwiZWxlbSIsImFsbCIsInByb21pc2VzIiwid2hlbiIsImNvbmNhdCIsIm9iamVjdENyZWF0ZSIsImNyZWF0ZSIsIkVycm9yIiwiX1N1Ym1pdFNlbGVjdG9yIiwiRGVmYXVsdHMiLCJpbnB1dHMiLCJleGNsdWRlZCIsInByaW9yaXR5RW5hYmxlZCIsIm11bHRpcGxlIiwiZ3JvdXAiLCJ1aUVuYWJsZWQiLCJ2YWxpZGF0aW9uVGhyZXNob2xkIiwidHJpZ2dlckFmdGVyRmFpbHVyZSIsImVycm9yQ2xhc3MiLCJzdWNjZXNzQ2xhc3MiLCJjbGFzc0hhbmRsZXIiLCJGaWVsZCIsImVycm9yc0NvbnRhaW5lciIsImVycm9yc1dyYXBwZXIiLCJlcnJvclRlbXBsYXRlIiwiQmFzZSIsIl9faWRfXyIsImFzeW5jU3VwcG9ydCIsIl9waXBlQWNjb3JkaW5nVG9WYWxpZGF0aW9uUmVzdWx0IiwiX3RoaXMiLCJwaXBlIiwiciIsIkRlZmVycmVkIiwidmFsaWRhdGlvblJlc3VsdCIsInJlamVjdCIsInJlc29sdmUiLCJwcm9taXNlIiwiYWN0dWFsaXplT3B0aW9ucyIsImRvbU9wdGlvbnMiLCJfcmVzZXRPcHRpb25zIiwiaW5pdE9wdGlvbnMiLCJfbGlzdGVuZXJzIiwicXVldWUiLCJzdWJzY3JpYmUiLCJsaXN0ZW5UbyIsInVuc3Vic2NyaWJlIiwidW5zdWJzY3JpYmVUbyIsImV4dHJhQXJnIiwicGFyZW50UmVzdWx0IiwiYXN5bmNJc1ZhbGlkIiwiZm9yY2UiLCJ3aGVuVmFsaWQiLCJfZmluZFJlbGF0ZWQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiY29udmVydEFycmF5UmVxdWlyZW1lbnQiLCJtIiwidmFsdWVzIiwiY29udmVydEV4dHJhT3B0aW9uUmVxdWlyZW1lbnQiLCJyZXF1aXJlbWVudFNwZWMiLCJleHRyYU9wdGlvblJlYWRlciIsIm1haW4iLCJleHRyYSIsIlZhbGlkYXRvciIsInNwZWMiLCJ2YWxpZGF0ZSIsInJlcXVpcmVtZW50Rmlyc3RBcmciLCJ2YWxpZGF0ZU11bHRpcGxlIiwiaW5zdGFuY2UiLCJ2YWxpZGF0ZURhdGUiLCJfaXNEYXRlSW5wdXQiLCJ2YWxpZGF0ZU51bWJlciIsInZhbGlkYXRlU3RyaW5nIiwicGFyc2VSZXF1aXJlbWVudHMiLCJyZXF1aXJlbWVudHMiLCJpc1BsYWluT2JqZWN0IiwiVmFsaWRhdG9yUmVnaXN0cnkiLCJjYXRhbG9nIiwiX19jbGFzc19fIiwibG9jYWxlIiwidHlwZVRlc3RlcnMiLCJlbWFpbCIsImRpZ2l0cyIsImFscGhhbnVtIiwidXJsIiwicmFuZ2UiLCJkZWNpbWFsUGxhY2VzIiwiVmFsaWRhdG9yUmVnaXN0cnlfX3BhcnNlQXJndW1lbnRzIiwiYXJncyIsIlZhbGlkYXRvclJlZ2lzdHJ5X19vcGVyYXRvclRvVmFsaWRhdG9yIiwib3BlcmF0b3IiLCJfbGVuIiwicmVxdWlyZW1lbnRzQW5kSW5wdXQiLCJfa2V5IiwicG9wIiwiVmFsaWRhdG9yUmVnaXN0cnlfX2NvbXBhcmlzb25PcGVyYXRvciIsImFkZFZhbGlkYXRvciIsIlBhcnNsZXkiLCJzZXRMb2NhbGUiLCJhZGRDYXRhbG9nIiwibWVzc2FnZXMiLCJzZXQiLCJhZGRNZXNzYWdlIiwibWVzc2FnZSIsImFkZE1lc3NhZ2VzIiwibmFtZU1lc3NhZ2VPYmplY3QiLCJhcmcxIiwiYXJnMiIsIl9zZXRWYWxpZGF0b3IiLCJoYXNWYWxpZGF0b3IiLCJ1cGRhdGVWYWxpZGF0b3IiLCJyZW1vdmVWYWxpZGF0b3IiLCJ2YWxpZGF0b3IiLCJnZXRFcnJvck1lc3NhZ2UiLCJjb25zdHJhaW50IiwidHlwZU1lc3NhZ2VzIiwiZm9ybWF0TWVzc2FnZSIsImRlZmF1bHRNZXNzYWdlIiwiZW4iLCJwYXJhbWV0ZXJzIiwibm90YmxhbmsiLCJyZXF1aXJlZCIsIl9yZWYiLCJfcmVmJHN0ZXAiLCJzdGVwIiwiX3JlZiRiYXNlIiwiYmFzZSIsInRlc3RlciIsIm5iIiwiZGVjaW1hbHMiLCJ0b0ludCIsImYiLCJyb3VuZCIsInBvdyIsInBhdHRlcm4iLCJtaW5sZW5ndGgiLCJyZXF1aXJlbWVudCIsIm1heGxlbmd0aCIsIm1pbiIsIm1pbmNoZWNrIiwibWF4Y2hlY2siLCJjaGVjayIsImVxdWFsdG8iLCJyZWZPclZhbHVlIiwiJHJlZmVyZW5jZSIsInZhbCIsIlVJIiwiZGlmZlJlc3VsdHMiLCJuZXdSZXN1bHQiLCJvbGRSZXN1bHQiLCJkZWVwIiwiYWRkZWQiLCJrZXB0IiwiZm91bmQiLCJqIiwiYXNzZXJ0IiwicmVtb3ZlZCIsIkZvcm0iLCJfYWN0dWFsaXplVHJpZ2dlcnMiLCJfdGhpczIiLCJvblN1Ym1pdFZhbGlkYXRlIiwib25TdWJtaXRCdXR0b24iLCJfZm9jdXNlZEZpZWxkIiwiZmllbGRzIiwiZmllbGQiLCJub0ZvY3VzIiwiX2Rlc3Ryb3lVSSIsIl9yZWZsb3dVSSIsIl9idWlsZFVJIiwiX3VpIiwiZGlmZiIsImxhc3RWYWxpZGF0aW9uUmVzdWx0IiwiX21hbmFnZVN0YXR1c0NsYXNzIiwiX21hbmFnZUVycm9yc01lc3NhZ2VzIiwiX2ZhaWxlZE9uY2UiLCJnZXRFcnJvcnNNZXNzYWdlcyIsImVycm9yTWVzc2FnZSIsIl9nZXRFcnJvck1lc3NhZ2UiLCJhZGRFcnJvciIsIl9yZWYyJHVwZGF0ZUNsYXNzIiwidXBkYXRlQ2xhc3MiLCJfYWRkRXJyb3IiLCJfZXJyb3JDbGFzcyIsInVwZGF0ZUVycm9yIiwiX3JlZjMiLCJfcmVmMyR1cGRhdGVDbGFzcyIsIl91cGRhdGVFcnJvciIsInJlbW92ZUVycm9yIiwiX3JlZjQiLCJfcmVmNCR1cGRhdGVDbGFzcyIsIl9yZW1vdmVFcnJvciIsImhhc0NvbnN0cmFpbnRzIiwibmVlZHNWYWxpZGF0aW9uIiwiX3N1Y2Nlc3NDbGFzcyIsIl9yZXNldENsYXNzIiwiZXJyb3JzTWVzc2FnZXNEaXNhYmxlZCIsIl9pbnNlcnRFcnJvcldyYXBwZXIiLCIkZXJyb3JzV3JhcHBlciIsImh0bWwiLCJfcmVmNSIsIiRlcnJvckNsYXNzSGFuZGxlciIsImVycm9yc1dyYXBwZXJJZCIsIl9yZWY2IiwicmVtb3ZlQXR0ciIsImN1c3RvbUNvbnN0cmFpbnRFcnJvck1lc3NhZ2UiLCJfbWFuYWdlQ2xhc3NIYW5kbGVyIiwidmFsaWRhdGlvbkluZm9ybWF0aW9uVmlzaWJsZSIsIiRoYW5kbGVyRnVuY3Rpb24iLCIkaGFuZGxlciIsIl9pbnB1dEhvbGRlciIsIm5vZGVOYW1lIiwiJGVycm9yc0NvbnRhaW5lciIsImFmdGVyIiwiX3RoaXMzIiwiJHRvQmluZCIsIl92YWxpZGF0ZUlmTmVlZGVkIiwiX3RoaXM0IiwiZ2V0VmFsdWUiLCJkZWJvdW5jZSIsIl9kZWJvdW5jZWQiLCJfcmVzZXRVSSIsIkZvcm1fX3N0YXR1c01hcHBpbmciLCJwZW5kaW5nIiwicmVzb2x2ZWQiLCJyZWplY3RlZCIsIl90aGlzNSIsInBhcnNsZXkiLCJzdWJtaXRTb3VyY2UiLCJfc3VibWl0U291cmNlIiwicHJvcCIsIl9yZW1vdGVDYWNoZSIsIndoZW5WYWxpZGF0ZSIsInN0YXRlIiwiX3RyaWdnZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJfc3VibWl0IiwiJHN5bnRoZXRpYyIsIl9hcmd1bWVudHMiLCJfVXRpbHMkYWxsJGRvbmUkZmFpbCRhbHdheXMiLCJfdGhpczYiLCJfcmVmNyIsInN1Ym1pdEV2ZW50IiwiX3JlZnJlc2hGaWVsZHMiLCJfd2l0aG91dFJlYWN0dWFsaXppbmdGb3JtT3B0aW9ucyIsImZhaWwiLCJhbHdheXMiLCJpc1ZhbGlkIiwiX2FyZ3VtZW50czIiLCJfdGhpczciLCJfcmVmOCIsInJlZnJlc2giLCJkZXN0cm95IiwicmVtb3ZlRGF0YSIsIl9iaW5kRmllbGRzIiwiX3RoaXM4Iiwib2xkRmllbGRzIiwiZmllbGRzTWFwcGVkQnlJZCIsIm5vdCIsImZpZWxkSW5zdGFuY2UiLCJGYWN0b3J5IiwidW5pcXVlSWQiLCJvbGRBY3R1YWxpemVPcHRpb25zIiwiZXZlbnROYW1lIiwiQ29uc3RyYWludCIsInBhcnNsZXlGaWVsZCIsImlzRG9tQ29uc3RyYWludCIsInZhbGlkYXRvclNwZWMiLCJfdmFsaWRhdG9yUmVnaXN0cnkiLCJfcGFyc2VSZXF1aXJlbWVudHMiLCJjYXBpdGFsaXplIiwiY2FwIiwiX3ZhbGlkYXRvciIsInJlcXVpcmVtZW50TGlzdCIsIl90aGlzOSIsInBhcnNsZXlGb3JtSW5zdGFuY2UiLCJjb25zdHJhaW50cyIsImNvbnN0cmFpbnRzQnlOYW1lIiwiX2JpbmRDb25zdHJhaW50cyIsInBhcnNsZXlfZmllbGRfX3N0YXR1c01hcHBpbmciLCJfd2hlblZhbGlkJGFsd2F5cyRkb25lJGZhaWwkYWx3YXlzIiwiX3RoaXMxMCIsIl9yZWY5IiwiX2lzSW5Hcm91cCIsIl9yZWZyZXNoZWQiLCJfaXNSZXF1aXJlZCIsInZhbGlkYXRlSWZFbXB0eSIsImluQXJyYXkiLCJfYXJndW1lbnRzMyIsIl90aGlzMTEiLCJfcmVmMTAiLCJfcmVmMTAkZm9yY2UiLCJncm91cGVkQ29uc3RyYWludHMiLCJfZ2V0R3JvdXBlZENvbnN0cmFpbnRzIiwiX3ZhbGlkYXRlQ29uc3RyYWludCIsIl90aGlzMTIiLCJfaGFuZGxlV2hpdGVzcGFjZSIsIl9yZWZyZXNoQ29uc3RyYWludHMiLCJyZWZyZXNoQ29uc3RyYWludHMiLCJhZGRDb25zdHJhaW50IiwicmVtb3ZlQ29uc3RyYWludCIsInVwZGF0ZUNvbnN0cmFpbnQiLCJfYmluZEh0bWw1Q29uc3RyYWludHMiLCJ0cmltVmFsdWUiLCJ3aGl0ZXNwYWNlIiwiYyIsImluZGV4IiwicCIsImEiLCJiIiwicGFyc2xleV9maWVsZCIsIk11bHRpcGxlIiwiYWRkRWxlbWVudCIsIiRlbGVtZW50cyIsImZpZWxkQ29uc3RyYWludHMiLCJmaWx0ZXIiLCJfaW5pdCIsInNhdmVkcGFyc2xleUZvcm1JbnN0YW5jZSIsIl9fdmVyc2lvbl9fIiwiaXNNdWx0aXBsZSIsImhhbmRsZU11bHRpcGxlIiwiX3RoaXMxMyIsInBhcnNsZXlNdWx0aXBsZUluc3RhbmNlIiwiaW5wdXQiLCIkcHJldmlvdXNseVJlbGF0ZWQiLCJkb05vdFN0b3JlIiwicGFyc2xleUluc3RhbmNlIiwiUGFyc2xleUV4dGVuZCIsInZlcm51bXMiLCJqcXVlcnkiLCJ2ZXJzaW9uIiwicHNseSIsImluc3RhbmNlcyIsIlBhcnNsZXlVdGlscyIsInJlZ2lzdHJ5IiwiaTE4biIsIlBhcnNsZXlWYWxpZGF0b3IiLCJfd2luZG93JFBhcnNsZXkiLCJQYXJzbGV5VUkiLCJkb05vdFVwZGF0ZUNsYXNzIiwiYXV0b0JpbmQiLCJvIiwiZGVwcmVjYXRlZCIsImFkYXB0IiwiY29udGV4dCIsInBhcnNsZXlBZGFwdGVkQ2FsbGJhY2siLCJ1bnNoaWZ0IiwiZXZlbnRQcmVmaXgiLCJsYXN0SW5kZXhPZiIsInN1YnN0ciIsImxpc3RlbiIsInVuc3Vic2NyaWJlQWxsIiwiZW1pdCIsIl9pbnN0YW5jZSIsImluc3RhbmNlR2l2ZW4iLCJwdWJzdWIiLCJhc3luY1ZhbGlkYXRvcnMiLCJ4aHIiLCJzdGF0dXMiLCJhZGRBc3luY1ZhbGlkYXRvciIsImFqYXhPcHRpb25zIiwiY3NyIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwicmVtb3RlT3B0aW9ucyIsInBhcmFtIiwiYWpheCIsImhhbmRsZVhociIsInRoZW4iLCJJbnB1dEV2ZW50IiwiX3RoaXMxNCIsImdsb2JhbHMiLCJpc05hdGl2ZUV2ZW50Iiwib3JpZ2luYWxFdmVudCIsImlzVHJ1c3RlZCIsImZha2VJbnB1dEV2ZW50IiwibWlzYmVoYXZlcyIsImJlaGF2ZXNPayIsImluc3RhbGwiLCJpbnB1dEV2ZW50UGF0Y2hlZCIsInVuaW5zdGFsbCIsImlucHV0ZXZlbnQiLCJsYXp5U2l6ZXMiLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwibGF6eXNpemVzIiwibGF6eVNpemVzQ29uZmlnIiwiZG9jRWxlbSIsInN1cHBvcnRQaWN0dXJlIiwiSFRNTFBpY3R1cmVFbGVtZW50IiwiX2FkZEV2ZW50TGlzdGVuZXIiLCJfZ2V0QXR0cmlidXRlIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVxdWVzdElkbGVDYWxsYmFjayIsInJlZ1BpY3R1cmUiLCJsb2FkRXZlbnRzIiwicmVnQ2xhc3NDYWNoZSIsImVsZSIsImNscyIsInRyaW0iLCJyZWciLCJhZGRSZW1vdmVMb2FkRXZlbnRzIiwiZG9tIiwiYWRkIiwidHJpZ2dlckV2ZW50IiwiZGV0YWlsIiwibm9CdWJibGVzIiwibm9DYW5jZWxhYmxlIiwiY3JlYXRlRXZlbnQiLCJpbml0RXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwidXBkYXRlUG9seWZpbGwiLCJmdWxsIiwicG9seWZpbGwiLCJwaWN0dXJlZmlsbCIsInBmIiwic3JjIiwicmVldmFsdWF0ZSIsImVsZW1lbnRzIiwiZ2V0Q1NTIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImdldFdpZHRoIiwid2lkdGgiLCJtaW5TaXplIiwiX2xhenlzaXplc1dpZHRoIiwickFGIiwicnVubmluZyIsIndhaXRpbmciLCJmaXJzdEZucyIsInNlY29uZEZucyIsImZucyIsInJ1biIsInJ1bkZucyIsInNoaWZ0IiwicmFmQmF0Y2giLCJoaWRkZW4iLCJfbHNGbHVzaCIsInJBRkl0Iiwic2ltcGxlIiwidGhyb3R0bGUiLCJsYXN0VGltZSIsImdEZWxheSIsInRocm90dGxlRGVsYXkiLCJySUNUaW1lb3V0IiwicmljVGltZW91dCIsIm5vdyIsImlkbGVDYWxsYmFjayIsInRpbWVvdXQiLCJpc1ByaW9yaXR5IiwiZGVsYXkiLCJmdW5jIiwidGltZXN0YW1wIiwid2FpdCIsImxhdGVyIiwibGFzdCIsImxhenlTaXplc0RlZmF1bHRzIiwibGF6eUNsYXNzIiwibG9hZGVkQ2xhc3MiLCJsb2FkaW5nQ2xhc3MiLCJwcmVsb2FkQ2xhc3MiLCJhdXRvc2l6ZXNDbGFzcyIsInNyY0F0dHIiLCJzcmNzZXRBdHRyIiwic2l6ZXNBdHRyIiwiY3VzdG9tTWVkaWEiLCJleHBGYWN0b3IiLCJoRmFjIiwibG9hZE1vZGUiLCJsb2FkSGlkZGVuIiwibGF6eXNpemVzQ29uZmlnIiwibG9hZGVyIiwicHJlbG9hZEVsZW1zIiwiaXNDb21wbGV0ZWQiLCJyZXNldFByZWxvYWRpbmdUaW1lciIsInN0YXJ0ZWQiLCJlTHZXIiwiZWx2SCIsImVMdG9wIiwiZUxsZWZ0IiwiZUxyaWdodCIsImVMYm90dG9tIiwiZGVmYXVsdEV4cGFuZCIsInByZWxvYWRFeHBhbmQiLCJyZWdJbWciLCJyZWdJZnJhbWUiLCJzdXBwb3J0U2Nyb2xsIiwidXNlckFnZW50Iiwic2hyaW5rRXhwYW5kIiwiY3VycmVudEV4cGFuZCIsImlzTG9hZGluZyIsImxvd1J1bnMiLCJyZXNldFByZWxvYWRpbmciLCJpc05lc3RlZFZpc2libGUiLCJlbGVtRXhwYW5kIiwib3V0ZXJSZWN0IiwidmlzaWJsZSIsIm9mZnNldFBhcmVudCIsInRvcCIsImJvdHRvbSIsImNoZWNrRWxlbWVudHMiLCJlTGxlbiIsInJlY3QiLCJhdXRvTG9hZEVsZW0iLCJsb2FkZWRTb21ldGhpbmciLCJlbGVtTmVnYXRpdmVFeHBhbmQiLCJlbGVtRXhwYW5kVmFsIiwiYmVmb3JlRXhwYW5kVmFsIiwibGF6eWxvYWRFbGVtcyIsImV4cGFuZCIsIl9sYXp5UmFjZSIsInVudmVpbEVsZW1lbnQiLCJpbm5lckhlaWdodCIsInByZWxvYWRBZnRlckxvYWQiLCJ0aHJvdHRsZWRDaGVja0VsZW1lbnRzIiwic3dpdGNoTG9hZGluZ0NsYXNzIiwicmFmU3dpdGNoTG9hZGluZ0NsYXNzIiwicmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MiLCJjaGFuZ2VJZnJhbWVTcmMiLCJjb250ZW50V2luZG93IiwibG9jYXRpb24iLCJoYW5kbGVTb3VyY2VzIiwic291cmNlU3Jjc2V0IiwibGF6eVVudmVpbCIsImlzQXV0byIsInNpemVzIiwiaXNJbWciLCJzcmNzZXQiLCJpc1BpY3R1cmUiLCJmaXJlc0xvYWQiLCJkZWZhdWx0UHJldmVudGVkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjb21wbGV0ZSIsIm5hdHVyYWxXaWR0aCIsImF1dG9TaXplciIsInVwZGF0ZUVsZW0iLCJvbmxvYWQiLCJhZnRlclNjcm9sbCIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJvYnNlcnZlIiwiY2hpbGRMaXN0Iiwic3VidHJlZSIsInNldEludGVydmFsIiwicmVhZHlTdGF0ZSIsImNoZWNrRWxlbXMiLCJ1bnZlaWwiLCJhdXRvc2l6ZXNFbGVtcyIsInNpemVFbGVtZW50Iiwic291cmNlcyIsImxlbiIsImRhdGFBdHRyIiwiZ2V0U2l6ZUVsZW1lbnQiLCJ1cGRhdGVFbGVtZW50c1NpemVzIiwiZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyIsImNmZyIsInVQIiwiYUMiLCJyQyIsImhDIiwiZmlyZSIsImdXIiwicGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25TdXBwb3J0ZWQiLCJvcHRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImFjdGl2ZUVsZW1lbnQiLCJibHVyIiwicGFzc2l2ZSIsImRvbUxvYWRlZENhbGxiYWNrIiwiY2xhc3NMaXN0IiwiZG9TY3JvbGwiLCJjbGlja0Rpc3BhdGNoIiwiJGN1c3RvbV90cmlnZ2VyX2NsYXNzIiwidG9nZ2xlQ2xhc3MiLCJoYXNBcmlhUHJlc3NlZEF0dHIiLCJoYXNBcmlhRXhwYW5kZWRBdHRyIiwiJG5vdGlmeV9jbGFzcyIsIiRjdXN0b21fdGFyZ2V0X2NsYXNzIiwic2libGluZ3MiLCJyZWFkeSIsIiRnbG9iYWxfaGVhZGVyIiwiJG5hdl9vdXRlcl93cmFwcGVyIiwiJG5hdl9hY3RpdmVfcGFyZW50IiwiJG5hdl9jaGlsZCIsIiRuYXZfcmV2ZWFsX2J1dHRvbiIsIm9wZW5Nb2JpbGVOYXYiLCJvcGVuTmF2IiwidGhlX21lbnUiLCJpbnRlcnBvbGF0ZWRfc2VsZWN0b3IiLCJkcmF3ZXJMaXN0ZW5Gb3JDbG9zaW5nU3dpcGUiLCJjbG9zZU5hdiIsImNsb3NlTmF2TWlsbGlzZWNvbmRzIiwibWlsbGlzZWNvbmRzIiwibmF2X2Nsb3NlX3RpbWVyIiwiY2xvc2VTZWFyY2giLCIkbmF2X2xpbmtfb3BlbnNfY2hpbGQiLCJjbGljayIsIiR0aGVfcGFyZW50IiwiJHNlYXJjaF9yZXZlYWxfYnV0dG9uIiwiJHNlYXJjaF9tZW51IiwiJHNlYXJjaF9pbnB1dCIsIiRzZWFyY2hfc3VibWl0IiwiJHNlYXJjaF9jbG9zZV9idG4iLCIkc2VhcmNoX3RyaWdnZXIiLCJvcGVuU2VhcmNoIiwic2VsZWN0Iiwic2VsZWN0b3JzIiwiZmlyc3RDaGlsZCIsImFwcGVuZENoaWxkIiwiX3FzYSIsInN0eWxlU2hlZXQiLCJjc3NUZXh0Iiwic2Nyb2xsQnkiLCJyZW1vdmVBdHRyaWJ1dGUiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NOYW1lcyIsInJldCIsImZ1biIsInQiLCJ0aGlzcCIsIkI2NF9BTFBIQUJFVCIsImF0b2IiLCJwb3NpdGlvbiIsIm91dHB1dCIsImJ1ZmZlciIsImJpdHMiLCJidG9hIiwib3V0IiwibzEiLCJvMiIsIm8zIiwiZTEiLCJlMiIsImUzIiwiZTQiLCJjaGFyQ29kZUF0IiwicHJvdG8iLCJfX3Byb3RvX18iLCJjb25zdHJ1Y3RvciIsInBlcmZvcm1hbmNlIiwiZ2V0VGltZSIsIm5vd09mZnNldCIsInRpbWluZyIsIm5hdmlnYXRpb25TdGFydCIsIndlYmtpdFJlcXVlc3RBbmltYXRpb25GcmFtZSIsIndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lIiwiY2FuY2VsQW5pbWF0aW9uRnJhbWUiLCJtb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJtb3pDYW5jZWxBbmltYXRpb25GcmFtZSIsIndlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwicm9vdCIsIm1vZHVsZXMiLCJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiaWQiLCJsb2FkZWQiLCJvbkRvbVJlYWR5IiwicXVlcnlzdHJpbmciLCJTY2VuZUdyYXBoIiwidXRpbHMiLCJTVkciLCJET00iLCJDb2xvciIsImNvbnN0YW50cyIsInN2Z1JlbmRlcmVyIiwic2dDYW52YXNSZW5kZXJlciIsImRpbWVuc2lvbkNoZWNrIiwiU1ZHX05TIiwic3ZnX25zIiwiSG9sZGVyIiwiYWRkVGhlbWUiLCJ0aGVtZSIsIkFwcCIsInNldHRpbmdzIiwidGhlbWVzIiwidmFycyIsImNhY2hlIiwidGhlbWVLZXlzIiwiYWRkSW1hZ2UiLCJub2RlcyIsImdldE5vZGVBcnJheSIsIm5vZGUiLCJpbWciLCJuZXdFbCIsImRvbVByb3BzIiwic2V0dXAiLCJzZXRSZXNpemVVcGRhdGUiLCJob2xkZXJEYXRhIiwicmVzaXplVXBkYXRlIiwidXBkYXRlUmVzaXphYmxlRWxlbWVudHMiLCJ1c2VyT3B0aW9ucyIsImVuZ2luZVNldHRpbmdzIiwicHJlZW1wdGVkIiwicmVuZGVyZXIiLCJyZW5kZXJlcnMiLCJzdXBwb3J0c1NWRyIsInN1cHBvcnRzQ2FudmFzIiwiaW1hZ2VzIiwiYmdub2RlcyIsInN0eWxlbm9kZXMiLCJvYmplY3RzIiwic3R5bGVzaGVldHMiLCJzdmdYTUxTdHlsZXNoZWV0Iiwibm9Gb250RmFsbGJhY2siLCJub0JhY2tncm91bmRTaXplIiwic3R5bGVOb2RlIiwicmVsIiwicHJveHlMaW5rIiwic3R5bGVzaGVldFVSTCIsInByb3RvY29sIiwiaG9zdCIsInBhdGhuYW1lIiwic2VhcmNoIiwiYmdOb2RlIiwiYmFja2dyb3VuZEltYWdlIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImRhdGFCYWNrZ3JvdW5kSW1hZ2UiLCJyYXdVUkwiLCJob2xkZXJVUkwiLCJob2xkZXJTdHJpbmciLCJkb21haW4iLCJob2xkZXJTdHJpbmdJbmRleCIsImZyYWdtZW50IiwiaG9sZGVyRmxhZ3MiLCJwYXJzZVVSTCIsInByZXBhcmVET01FbGVtZW50IiwibW9kZSIsIm9iamVjdEF0dHIiLCJkYXRhU3JjIiwib2JqZWN0SGFzU3JjVVJMIiwib2JqZWN0SGFzRGF0YVNyY1VSTCIsInByZXBhcmVJbWFnZUVsZW1lbnQiLCJpbWFnZSIsImltYWdlQXR0ciIsInJlbmRlcmVkIiwiaW1hZ2VIYXNTcmMiLCJpbWFnZUhhc0RhdGFTcmNVUkwiLCJpbWFnZVJlbmRlcmVkIiwiaW1hZ2VFeGlzdHMiLCJleGlzdHMiLCJiZyIsImZnIiwiZGVmYXVsdHMiLCJzaXplIiwidW5pdHMiLCJzY2FsZSIsImluc3RhbmNlT3B0aW9ucyIsImhvbGRlciIsImdyYXkiLCJmaXJzdFF1ZXN0aW9uTWFyayIsInBhcnRzIiwiYmFzaWNzIiwiZGltZW5zaW9ucyIsImRpbWVuc2lvbkRhdGEiLCJmbHVpZCIsImhlaWdodCIsInRydXRoeSIsInJhdGlvIiwicmF0aW9XaWR0aCIsInJhdGlvSGVpZ2h0IiwiZmxvb3IiLCJhdXRvIiwicGFyc2VDb2xvciIsImF1dG9GZyIsInRleHQiLCJ0ZXh0bW9kZSIsImZvbnQiLCJhbGlnbiIsImxpbmVXcmFwIiwibm93cmFwIiwib3V0bGluZSIsInJhbmRvbSIsIl90aGVtZSIsInByZXBTZXR0aW5ncyIsIl9lbmdpbmVTZXR0aW5ncyIsImRpbWVuc2lvbnNDYXB0aW9uIiwiaG9sZGVyVGVtcGxhdGVSZSIsImRpbWVuc2lvbnNJblRleHQiLCJ0ZXh0TGluZXMiLCJrIiwiZW5jb2RlSHRtbEVudGl0eSIsImhvbGRlclRlbXBsYXRlTWF0Y2hlcyIsInJlUmVuZGVyIiwicmVuZGVyU2V0dGluZ3MiLCJob2xkZXJTZXR0aW5ncyIsImJhY2tncm91bmRDb2xvciIsInJlbmRlciIsInJlc2l6YWJsZUltYWdlcyIsImRpc3BsYXkiLCJzZXRJbml0aWFsRGltZW5zaW9ucyIsInNjZW5lIiwic2NlbmVHcmFwaCIsImJ1aWxkU2NlbmVHcmFwaCIsImdldFJlbmRlcmVkSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsImZvbnRTaXplIiwiZmFtaWx5IiwidGV4dFNpemUiLCJ3ZWlnaHQiLCJmb250d2VpZ2h0Iiwibm9XcmFwIiwiZXhhY3REaW1lbnNpb25zIiwibGluZVdyYXBSYXRpbyIsInNjZW5lTWFyZ2luIiwibWF4TGluZVdpZHRoIiwiU2hhcGUiLCJob2xkZXJCZyIsIlJlY3QiLCJmaWxsIiwib3V0bGluZUNvbG9yIiwicHJvcGVydGllcyIsImxpZ2h0ZW4iLCJsaWdodGVyVGhhbiIsInRvSGV4IiwiaG9sZGVyVGV4dENvbG9yIiwiaG9sZGVyQmdDb2xvciIsImxpZ2h0Q29sb3IiLCJkYXJrQ29sb3IiLCJibGVuZEFscGhhIiwiaG9sZGVyVGV4dEdyb3VwIiwiR3JvdXAiLCJtb3ZlVG8iLCJ0cGRhdGEiLCJ0ZXh0UG9zaXRpb25EYXRhIiwic3RhZ2luZ1JlbmRlcmVyIiwibGVhZGluZyIsImJvdW5kaW5nQm94IiwidGV4dE5vZGUiLCJsaW5lIiwiZmluYWxpemVMaW5lIiwibGluZUNvdW50Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJsaW5lSW5kZXgiLCJsaW5lS2V5Iiwid29yZHMiLCJ3b3JkIiwiVGV4dCIsIm5ld2xpbmUiLCJ5Iiwic3BhY2VXaWR0aCIsInN0YWdlV2lkdGgiLCJzdGFnZUhlaWdodCIsImJpZ1NpZGUiLCJzbWFsbFNpZGUiLCJuZXdIZWlnaHQiLCJub2RlVHlwZSIsImZsdWlkQ29uZmlnIiwic2V0SW52aXNpYmxlIiwiZmx1aWRIZWlnaHQiLCJmbHVpZFdpZHRoIiwiaW5pdGlhbERpbWVuc2lvbnMiLCJ2aXNpYmlsaXR5Q2hlY2siLCJyZW5kZXJhYmxlSW1hZ2VzIiwiaW52aXNpYmxlSW1hZ2VzIiwic3RhcnRWaXNpYmlsaXR5Q2hlY2siLCJ2aXNpYmlsaXR5Q2hlY2tTdGFydGVkIiwiaW52aXNpYmxlSWQiLCJzdmciLCJzdGFnaW5nVGV4dCIsInN0YWdpbmdUZXh0Tm9kZSIsImdyYXBoIiwicm9vdE5vZGUiLCJmaXJzdFRpbWVTZXR1cCIsInRub2RlIiwiY3JlYXRlVGV4dE5vZGUiLCJpbml0U1ZHIiwidmlzaWJpbGl0eSIsImh0Z1Byb3BzIiwiY3NzUHJvcHMiLCJ0eHQiLCJpbm5lckhUTUwiLCJub2RlVmFsdWUiLCJzdGFnaW5nVGV4dEJCb3giLCJnZXRCQm94IiwiY2VpbCIsIm5ld2xpbmVzIiwiY29tcHV0ZWROb1NwYWNlTGVuZ3RoIiwiZ2V0Q29tcHV0ZWRUZXh0TGVuZ3RoIiwiZGlmZkxlbmd0aCIsIndvcmRXaWR0aHMiLCJkZWNvZGVIdG1sRW50aXR5IiwiYmJveCIsImRlYm91bmNlVGltZXIiLCJyZXNpemVFdmVudCIsImZsYWciLCJjYW52YXMiLCJnZXRDb250ZXh0IiwidG9EYXRhVVJMIiwiY3JlYXRlRWxlbWVudE5TIiwiY3JlYXRlU1ZHUmVjdCIsIlR1cmJvbGlua3MiLCJfb25Eb21SZWFkeSIsIndpbiIsIkRPTUNvbnRlbnRMb2FkZWQiLCJkb2MiLCJMT0FEIiwiRkFMU0UiLCJPTkxPQUQiLCJDT01QTEVURSIsIlJFQURZU1RBVEUiLCJBVFRBQ0hFVkVOVCIsIkRFVEFDSEVWRU5UIiwiQURERVZFTlRMSVNURU5FUiIsIkRPTUNPTlRFTlRMT0FERUQiLCJPTlJFQURZU1RBVEVDSEFOR0UiLCJSRU1PVkVFVkVOVExJU1RFTkVSIiwidzNjIiwiX3RvcCIsImlzUmVhZHkiLCJkZWZlciIsImNvbXBsZXRlZCIsImZyYW1lRWxlbWVudCIsImRvU2Nyb2xsQ2hlY2siLCJlbmNvZGUiLCJkZWNvZGUiLCJkZWNvZGVVUklDb21wb25lbnQiLCJhcnJheVJlZ2V4Iiwib2JqZWN0UmVnZXgiLCJwYWlycyIsImN0eCIsImV4ZWMiLCJzdHJpbmdpZnkiLCJpc0J1ZmZlciIsInZhbHVlT2YiLCJfaXNCdWZmZXIiLCJzY2VuZVByb3BlcnRpZXMiLCJub2RlQ291bnQiLCJtZXJnZSIsImNoaWxkIiwiU2NlbmVOb2RlIiwieiIsIlJvb3ROb2RlIiwicHJvcHMiLCJidWYiLCJjaGFyQ29kZSIsIkltYWdlIiwib25lcnJvciIsImRlYyIsImhleHJlIiwicmdicmUiLCJyZ2JhcmUiLCJyZXR2YWwiLCJjYW52YXNSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJiYWNraW5nU3RvcmVSYXRpbyIsIndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJtb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwibXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwib0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8iLCJiYWNraW5nU3RvcmVQaXhlbFJhdGlvIiwiTk9ERV9UWVBFX0NPTU1FTlQiLCJkZWZzIiwiaW5pdGlhbGl6ZSIsIndlYmtpdE1hdGNoZXNTZWxlY3RvciIsImNoaWxkTm9kZXMiLCJzdmdTdHJpbmdUb0RhdGFVUkkiLCJyYXdQcmVmaXgiLCJiYXNlNjRQcmVmaXgiLCJzdmdTdHJpbmciLCJiYXNlNjQiLCJ1bmVzY2FwZSIsInNlcmlhbGl6ZVNWRyIsIlhNTFNlcmlhbGl6ZXIiLCJzZXJpYWxpemVyIiwic3ZnQ1NTIiwieG1sIiwiY3JlYXRlWE1MIiwiY3NzcGkiLCJjcmVhdGVQcm9jZXNzaW5nSW5zdHJ1Y3Rpb24iLCJpbnNlcnRCZWZvcmUiLCJzZXJpYWxpemVUb1N0cmluZyIsInN2Z1RleHQiLCJ0YWciLCJhdHRycyIsIkRPTVBhcnNlciIsInBhcnNlRnJvbVN0cmluZyIsIk5vZGUiLCJIVE1MQ29sbGVjdGlvbiIsImNvbG9yIiwib3JpZ2luYWwiLCJhbHBoYSIsInJnYjJoZXgiLCJmb3JtYXQiLCJkZWNpbWFsIiwiaGV4IiwiaHNsMnJnYiIsImgiLCJzIiwiSCIsIkMiLCJYIiwicmF3IiwidSIsInYiLCJyZ2IiLCJ5dXYiLCJtdWx0aXBsaWVyIiwiY20iLCJibSIsImNyIiwiY2ciLCJjYiIsImFkZEhhc2giLCJDYSIsIkNiIiwic2hhdmVuIiwidGVtcGxhdGVzIiwiY29udGVudCIsImNvbnZlcnRTaGFwZSIsInNoYXBlIiwidGV4dENzcyIsIm91dGxpbmVQYXRoIiwiYmdXaWR0aCIsImJnSGVpZ2h0Iiwib3V0bGluZVdpZHRoIiwib3V0bGluZU9mZnNldFdpZHRoIiwic3R5bGVzaGVldFhtbCIsInN0eWxlc2hlZXQiLCJob2xkZXJJZCIsInRleHRHcm91cCIsIndvcmRUYWdzIiwid29yZEtleSIsIndvcmRUYWciLCJvdXRsaW5lUHJvcGVydGllcyIsInNjZW5lQ29udGVudCIsInJldHVybk9iamVjdCIsImRvZXNFc2NhcGUiLCJIVE1MU3RyaW5nIiwiYXR0cmlidXRlS2V5Iiwic3VnYXJTdHJpbmciLCJ0YWdzIiwicmVmZXJlbmNlIiwiY2xhc3MiLCJyZXBsYWNlciIsImVzY2FwZUF0dHJpYnV0ZSIsImVzY2FwZUhUTUwiLCJzdWJBcnJheSIsIm1hdGNoSHRtbFJlZ0V4cCIsImVzY2FwZUh0bWwiLCJsYXN0SW5kZXgiLCJzdWJzdHJpbmciLCJkcHIiLCJ0ZXh0QmFzZWxpbmUiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsInN0cm9rZVN0eWxlIiwibGluZVdpZHRoIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFRleHQiLCJpc01ldGVvclBhY2thZ2UiLCJNZXRlb3IiLCJQYWNrYWdlIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsSUFBSUEsQ0FBSixDLENBRUE7O0FBQ0FBLENBQUMsR0FBSSxZQUFXO0FBQ2YsU0FBTyxJQUFQO0FBQ0EsQ0FGRyxFQUFKOztBQUlBLElBQUk7QUFDSDtBQUNBQSxHQUFDLEdBQUdBLENBQUMsSUFBSSxJQUFJQyxRQUFKLENBQWEsYUFB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aHRRQSx3QiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9qcy9idW5kbGUuanNcIik7XG4iLCJ2YXIgZztcblxuLy8gVGhpcyB3b3JrcyBpbiBub24tc3RyaWN0IG1vZGVcbmcgPSAoZnVuY3Rpb24oKSB7XG5cdHJldHVybiB0aGlzO1xufSkoKTtcblxudHJ5IHtcblx0Ly8gVGhpcyB3b3JrcyBpZiBldmFsIGlzIGFsbG93ZWQgKHNlZSBDU1ApXG5cdGcgPSBnIHx8IG5ldyBGdW5jdGlvbihcInJldHVybiB0aGlzXCIpKCk7XG59IGNhdGNoIChlKSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgdGhlIHdpbmRvdyByZWZlcmVuY2UgaXMgYXZhaWxhYmxlXG5cdGlmICh0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiKSBnID0gd2luZG93O1xufVxuXG4vLyBnIGNhbiBzdGlsbCBiZSB1bmRlZmluZWQsIGJ1dCBub3RoaW5nIHRvIGRvIGFib3V0IGl0Li4uXG4vLyBXZSByZXR1cm4gdW5kZWZpbmVkLCBpbnN0ZWFkIG9mIG5vdGhpbmcgaGVyZSwgc28gaXQnc1xuLy8gZWFzaWVyIHRvIGhhbmRsZSB0aGlzIGNhc2UuIGlmKCFnbG9iYWwpIHsgLi4ufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGc7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuXHRpZiAoIW1vZHVsZS53ZWJwYWNrUG9seWZpbGwpIHtcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcblx0XHRtb2R1bGUucGF0aHMgPSBbXTtcblx0XHQvLyBtb2R1bGUucGFyZW50ID0gdW5kZWZpbmVkIGJ5IGRlZmF1bHRcblx0XHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZHVsZSwgXCJsb2FkZWRcIiwge1xuXHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiBtb2R1bGUubDtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobW9kdWxlLCBcImlkXCIsIHtcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gbW9kdWxlLmk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0bW9kdWxlLndlYnBhY2tQb2x5ZmlsbCA9IDE7XG5cdH1cblx0cmV0dXJuIG1vZHVsZTtcbn07XG4iLCJpbXBvcnQgJy4vcmFyZWJpcmQtaW5jbHVkZXMnO1xuY29uc29sZS5sb2coJ2J1bmRsZScpOyIsImNvbnNvbGUubG9nKCdyYXJlYmlyZC1pbmNsdWRlJyk7XG5cbi8vXG4vLyBDb21waWxlZCBTaXRlIFNjcmlwdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFdhcm5pbmc6IEdsb2JhbC5qcyBpcyBhIENPTVBJTEVEIGZpbGUhIEVkaXQgYSBzb3VyY2UgZmlsZSwgb3IgY3JlYXRlIGEgbmV3XG4vLyBvbmUuIFNlZSBndWxwZmlsZS5qcyFcbi8vXG4vLyAgIyMjIyMjI1xuLy8gICAgICMgICAgIyAgICAjICMgICMjIyMgICAgICAjICAjIyMjICAgICAgICAjI1xuLy8gICAgICMgICAgIyAgICAjICMgIyAgICAgICAgICAjICMgICAgICAgICAgICMgICNcbi8vICAgICAjICAgICMjIyMjIyAjICAjIyMjICAgICAgIyAgIyMjIyAgICAgICMgICAgI1xuLy8gICAgICMgICAgIyAgICAjICMgICAgICAjICAgICAjICAgICAgIyAgICAgIyMjIyMjXG4vLyAgICAgIyAgICAjICAgICMgIyAjICAgICMgICAgICMgIyAgICAjICAgICAjICAgICNcbi8vICAgICAjICAgICMgICAgIyAjICAjIyMjICAgICAgIyAgIyMjIyAgICAgICMgICAgI1xuXG4vLyAgIyMjIyMgICMjIyMjIyMgIyAgICAgIyAjIyMjIyMgICMjIyAjICAgICAgICMjIyMjIyMgIyMjIyMjXG4vLyAjICAgICAjICMgICAgICMgIyMgICAjIyAjICAgICAjICAjICAjICAgICAgICMgICAgICAgIyAgICAgI1xuLy8gIyAgICAgICAjICAgICAjICMgIyAjICMgIyAgICAgIyAgIyAgIyAgICAgICAjICAgICAgICMgICAgICNcbi8vICMgICAgICAgIyAgICAgIyAjICAjICAjICMjIyMjIyAgICMgICMgICAgICAgIyMjIyMgICAjICAgICAjXG4vLyAjICAgICAgICMgICAgICMgIyAgICAgIyAjICAgICAgICAjICAjICAgICAgICMgICAgICAgIyAgICAgI1xuLy8gIyAgICAgIyAjICAgICAjICMgICAgICMgIyAgICAgICAgIyAgIyAgICAgICAjICAgICAgICMgICAgICNcbi8vICAjIyMjIyAgIyMjIyMjIyAjICAgICAjICMgICAgICAgIyMjICMjIyMjIyMgIyMjIyMjIyAjIyMjIyNcbi8vXG4vLyAjIyMjIyMjICMjIyAjICAgICAgICMjIyMjIyNcbi8vICMgICAgICAgICMgICMgICAgICAgI1xuLy8gIyAgICAgICAgIyAgIyAgICAgICAjXG4vLyAjIyMjIyAgICAjICAjICAgICAgICMjIyMjXG4vLyAjICAgICAgICAjICAjICAgICAgICNcbi8vICMgICAgICAgICMgICMgICAgICAgI1xuLy8gIyAgICAgICAjIyMgIyMjIyMjIyAjIyMjIyMjXG4vL1xuLy8gV2FybmluZzogR2xvYmFsLmpzIGlzIGEgQ09NUElMRUQgZmlsZSEgRWRpdCBhIHNvdXJjZSBmaWxlLCBvciBjcmVhdGUgYSBuZXdcbi8vIG9uZS4gU2VlIGd1bHBmaWxlLmJhYmVsLmpzIVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblxuXG4vL1xuLy8gUG9seWZpbGwgZm9yIHVzaW5nIGZvckVhY2goKSBvbiBOb2RlTGlzdHNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBBZGRzIHN1cHBvcnQgZm9yIElFIDExIHdpdGhvdXQgY2FsbGluZyBpbiBhIFxuLy8gQmFiZWwgZHVtcHRydWNrLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIHZpYSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvTm9kZUxpc3QvZm9yRWFjaCNQb2x5ZmlsbFxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmlmICh3aW5kb3cuTm9kZUxpc3QgJiYgIU5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gIE5vZGVMaXN0LnByb3RvdHlwZS5mb3JFYWNoID0gZnVuY3Rpb24gKGNhbGxiYWNrLCB0aGlzQXJnKSB7XG4gICAgdGhpc0FyZyA9IHRoaXNBcmcgfHwgd2luZG93O1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgY2FsbGJhY2suY2FsbCh0aGlzQXJnLCB0aGlzW2ldLCBpLCB0aGlzKTtcbiAgICB9XG4gIH07XG59XG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQm9vdHN0cmFwOiB0cmFuc2l0aW9uLmpzIHYzLjQuMFxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jdHJhbnNpdGlvbnNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBDU1MgVFJBTlNJVElPTiBTVVBQT1JUIChTaG91dG91dDogaHR0cDovL3d3dy5tb2Rlcm5penIuY29tLylcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gdHJhbnNpdGlvbkVuZCgpIHtcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdib290c3RyYXAnKVxuXG4gICAgdmFyIHRyYW5zRW5kRXZlbnROYW1lcyA9IHtcbiAgICAgIFdlYmtpdFRyYW5zaXRpb24gOiAnd2Via2l0VHJhbnNpdGlvbkVuZCcsXG4gICAgICBNb3pUcmFuc2l0aW9uICAgIDogJ3RyYW5zaXRpb25lbmQnLFxuICAgICAgT1RyYW5zaXRpb24gICAgICA6ICdvVHJhbnNpdGlvbkVuZCBvdHJhbnNpdGlvbmVuZCcsXG4gICAgICB0cmFuc2l0aW9uICAgICAgIDogJ3RyYW5zaXRpb25lbmQnXG4gICAgfVxuXG4gICAgZm9yICh2YXIgbmFtZSBpbiB0cmFuc0VuZEV2ZW50TmFtZXMpIHtcbiAgICAgIGlmIChlbC5zdHlsZVtuYW1lXSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB7IGVuZDogdHJhbnNFbmRFdmVudE5hbWVzW25hbWVdIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2UgLy8gZXhwbGljaXQgZm9yIGllOCAoICAuXy4pXG4gIH1cblxuICAvLyBodHRwOi8vYmxvZy5hbGV4bWFjY2F3LmNvbS9jc3MtdHJhbnNpdGlvbnNcbiAgJC5mbi5lbXVsYXRlVHJhbnNpdGlvbkVuZCA9IGZ1bmN0aW9uIChkdXJhdGlvbikge1xuICAgIHZhciBjYWxsZWQgPSBmYWxzZVxuICAgIHZhciAkZWwgPSB0aGlzXG4gICAgJCh0aGlzKS5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHsgY2FsbGVkID0gdHJ1ZSB9KVxuICAgIHZhciBjYWxsYmFjayA9IGZ1bmN0aW9uICgpIHsgaWYgKCFjYWxsZWQpICQoJGVsKS50cmlnZ2VyKCQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCkgfVxuICAgIHNldFRpbWVvdXQoY2FsbGJhY2ssIGR1cmF0aW9uKVxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuICAkKGZ1bmN0aW9uICgpIHtcbiAgICAkLnN1cHBvcnQudHJhbnNpdGlvbiA9IHRyYW5zaXRpb25FbmQoKVxuXG4gICAgaWYgKCEkLnN1cHBvcnQudHJhbnNpdGlvbikgcmV0dXJuXG5cbiAgICAkLmV2ZW50LnNwZWNpYWwuYnNUcmFuc2l0aW9uRW5kID0ge1xuICAgICAgYmluZFR5cGU6ICQuc3VwcG9ydC50cmFuc2l0aW9uLmVuZCxcbiAgICAgIGRlbGVnYXRlVHlwZTogJC5zdXBwb3J0LnRyYW5zaXRpb24uZW5kLFxuICAgICAgaGFuZGxlOiBmdW5jdGlvbiAoZSkge1xuICAgICAgICBpZiAoJChlLnRhcmdldCkuaXModGhpcykpIHJldHVybiBlLmhhbmRsZU9iai5oYW5kbGVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgICAgIH1cbiAgICB9XG4gIH0pXG5cbn0oalF1ZXJ5KTtcblxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gKiBCb290c3RyYXA6IGFsZXJ0LmpzIHYzLjQuMFxuICogaHR0cDovL2dldGJvb3RzdHJhcC5jb20vamF2YXNjcmlwdC8jYWxlcnRzXG4gKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIENvcHlyaWdodCAyMDExLTIwMTYgVHdpdHRlciwgSW5jLlxuICogTGljZW5zZWQgdW5kZXIgTUlUIChodHRwczovL2dpdGh1Yi5jb20vdHdicy9ib290c3RyYXAvYmxvYi9tYXN0ZXIvTElDRU5TRSlcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5cbitmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgLy8gQUxFUlQgQ0xBU1MgREVGSU5JVElPTlxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09XG5cbiAgdmFyIGRpc21pc3MgPSAnW2RhdGEtZGlzbWlzcz1cImFsZXJ0XCJdJ1xuICB2YXIgQWxlcnQgICA9IGZ1bmN0aW9uIChlbCkge1xuICAgICQoZWwpLm9uKCdjbGljaycsIGRpc21pc3MsIHRoaXMuY2xvc2UpXG4gIH1cblxuICBBbGVydC5WRVJTSU9OID0gJzMuNC4wJ1xuXG4gIEFsZXJ0LlRSQU5TSVRJT05fRFVSQVRJT04gPSAxNTBcblxuICBBbGVydC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbiAoZSkge1xuICAgIHZhciAkdGhpcyAgICA9ICQodGhpcylcbiAgICB2YXIgc2VsZWN0b3IgPSAkdGhpcy5hdHRyKCdkYXRhLXRhcmdldCcpXG5cbiAgICBpZiAoIXNlbGVjdG9yKSB7XG4gICAgICBzZWxlY3RvciA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgICAgc2VsZWN0b3IgPSBzZWxlY3RvciAmJiBzZWxlY3Rvci5yZXBsYWNlKC8uKig/PSNbXlxcc10qJCkvLCAnJykgLy8gc3RyaXAgZm9yIGllN1xuICAgIH1cblxuICAgIHNlbGVjdG9yICAgID0gc2VsZWN0b3IgPT09ICcjJyA/IFtdIDogc2VsZWN0b3JcbiAgICB2YXIgJHBhcmVudCA9ICQoZG9jdW1lbnQpLmZpbmQoc2VsZWN0b3IpXG5cbiAgICBpZiAoZSkgZS5wcmV2ZW50RGVmYXVsdCgpXG5cbiAgICBpZiAoISRwYXJlbnQubGVuZ3RoKSB7XG4gICAgICAkcGFyZW50ID0gJHRoaXMuY2xvc2VzdCgnLmFsZXJ0JylcbiAgICB9XG5cbiAgICAkcGFyZW50LnRyaWdnZXIoZSA9ICQuRXZlbnQoJ2Nsb3NlLmJzLmFsZXJ0JykpXG5cbiAgICBpZiAoZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSkgcmV0dXJuXG5cbiAgICAkcGFyZW50LnJlbW92ZUNsYXNzKCdpbicpXG5cbiAgICBmdW5jdGlvbiByZW1vdmVFbGVtZW50KCkge1xuICAgICAgLy8gZGV0YWNoIGZyb20gcGFyZW50LCBmaXJlIGV2ZW50IHRoZW4gY2xlYW4gdXAgZGF0YVxuICAgICAgJHBhcmVudC5kZXRhY2goKS50cmlnZ2VyKCdjbG9zZWQuYnMuYWxlcnQnKS5yZW1vdmUoKVxuICAgIH1cblxuICAgICQuc3VwcG9ydC50cmFuc2l0aW9uICYmICRwYXJlbnQuaGFzQ2xhc3MoJ2ZhZGUnKSA/XG4gICAgICAkcGFyZW50XG4gICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIHJlbW92ZUVsZW1lbnQpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChBbGVydC5UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICByZW1vdmVFbGVtZW50KClcbiAgfVxuXG5cbiAgLy8gQUxFUlQgUExVR0lOIERFRklOSVRJT05cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cblxuICBmdW5jdGlvbiBQbHVnaW4ob3B0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpXG4gICAgICB2YXIgZGF0YSAgPSAkdGhpcy5kYXRhKCdicy5hbGVydCcpXG5cbiAgICAgIGlmICghZGF0YSkgJHRoaXMuZGF0YSgnYnMuYWxlcnQnLCAoZGF0YSA9IG5ldyBBbGVydCh0aGlzKSkpXG4gICAgICBpZiAodHlwZW9mIG9wdGlvbiA9PSAnc3RyaW5nJykgZGF0YVtvcHRpb25dLmNhbGwoJHRoaXMpXG4gICAgfSlcbiAgfVxuXG4gIHZhciBvbGQgPSAkLmZuLmFsZXJ0XG5cbiAgJC5mbi5hbGVydCAgICAgICAgICAgICA9IFBsdWdpblxuICAkLmZuLmFsZXJ0LkNvbnN0cnVjdG9yID0gQWxlcnRcblxuXG4gIC8vIEFMRVJUIE5PIENPTkZMSUNUXG4gIC8vID09PT09PT09PT09PT09PT09XG5cbiAgJC5mbi5hbGVydC5ub0NvbmZsaWN0ID0gZnVuY3Rpb24gKCkge1xuICAgICQuZm4uYWxlcnQgPSBvbGRcbiAgICByZXR1cm4gdGhpc1xuICB9XG5cblxuICAvLyBBTEVSVCBEQVRBLUFQSVxuICAvLyA9PT09PT09PT09PT09PVxuXG4gICQoZG9jdW1lbnQpLm9uKCdjbGljay5icy5hbGVydC5kYXRhLWFwaScsIGRpc21pc3MsIEFsZXJ0LnByb3RvdHlwZS5jbG9zZSlcblxufShqUXVlcnkpO1xuXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cbiAqIEJvb3RzdHJhcDogbW9kYWwuanMgdjMuNC4wXG4gKiBodHRwOi8vZ2V0Ym9vdHN0cmFwLmNvbS9qYXZhc2NyaXB0LyNtb2RhbHNcbiAqID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICogQ29weXJpZ2h0IDIwMTEtMjAxNiBUd2l0dGVyLCBJbmMuXG4gKiBMaWNlbnNlZCB1bmRlciBNSVQgKGh0dHBzOi8vZ2l0aHViLmNvbS90d2JzL2Jvb3RzdHJhcC9ibG9iL21hc3Rlci9MSUNFTlNFKVxuICogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXG5cblxuK2Z1bmN0aW9uICgkKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICAvLyBNT0RBTCBDTEFTUyBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT1cblxuICB2YXIgTW9kYWwgPSBmdW5jdGlvbiAoZWxlbWVudCwgb3B0aW9ucykge1xuICAgIHRoaXMub3B0aW9ucyAgICAgICAgICAgICA9IG9wdGlvbnNcbiAgICB0aGlzLiRib2R5ICAgICAgICAgICAgICAgPSAkKGRvY3VtZW50LmJvZHkpXG4gICAgdGhpcy4kZWxlbWVudCAgICAgICAgICAgID0gJChlbGVtZW50KVxuICAgIHRoaXMuJGRpYWxvZyAgICAgICAgICAgICA9IHRoaXMuJGVsZW1lbnQuZmluZCgnLm1vZGFsLWRpYWxvZycpXG4gICAgdGhpcy4kYmFja2Ryb3AgICAgICAgICAgID0gbnVsbFxuICAgIHRoaXMuaXNTaG93biAgICAgICAgICAgICA9IG51bGxcbiAgICB0aGlzLm9yaWdpbmFsQm9keVBhZCAgICAgPSBudWxsXG4gICAgdGhpcy5zY3JvbGxiYXJXaWR0aCAgICAgID0gMFxuICAgIHRoaXMuaWdub3JlQmFja2Ryb3BDbGljayA9IGZhbHNlXG5cbiAgICBpZiAodGhpcy5vcHRpb25zLnJlbW90ZSkge1xuICAgICAgdGhpcy4kZWxlbWVudFxuICAgICAgICAuZmluZCgnLm1vZGFsLWNvbnRlbnQnKVxuICAgICAgICAubG9hZCh0aGlzLm9wdGlvbnMucmVtb3RlLCAkLnByb3h5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoJ2xvYWRlZC5icy5tb2RhbCcpXG4gICAgICAgIH0sIHRoaXMpKVxuICAgIH1cbiAgfVxuXG4gIE1vZGFsLlZFUlNJT04gID0gJzMuNC4wJ1xuXG4gIE1vZGFsLlRSQU5TSVRJT05fRFVSQVRJT04gPSAzMDBcbiAgTW9kYWwuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTiA9IDE1MFxuXG4gIE1vZGFsLkRFRkFVTFRTID0ge1xuICAgIGJhY2tkcm9wOiB0cnVlLFxuICAgIGtleWJvYXJkOiB0cnVlLFxuICAgIHNob3c6IHRydWVcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS50b2dnbGUgPSBmdW5jdGlvbiAoX3JlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5pc1Nob3duID8gdGhpcy5oaWRlKCkgOiB0aGlzLnNob3coX3JlbGF0ZWRUYXJnZXQpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuc2hvdyA9IGZ1bmN0aW9uIChfcmVsYXRlZFRhcmdldCkge1xuICAgIHZhciB0aGF0ID0gdGhpc1xuICAgIHZhciBlICAgID0gJC5FdmVudCgnc2hvdy5icy5tb2RhbCcsIHsgcmVsYXRlZFRhcmdldDogX3JlbGF0ZWRUYXJnZXQgfSlcblxuICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcihlKVxuXG4gICAgaWYgKHRoaXMuaXNTaG93biB8fCBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNTaG93biA9IHRydWVcblxuICAgIHRoaXMuY2hlY2tTY3JvbGxiYXIoKVxuICAgIHRoaXMuc2V0U2Nyb2xsYmFyKClcbiAgICB0aGlzLiRib2R5LmFkZENsYXNzKCdtb2RhbC1vcGVuJylcblxuICAgIHRoaXMuZXNjYXBlKClcbiAgICB0aGlzLnJlc2l6ZSgpXG5cbiAgICB0aGlzLiRlbGVtZW50Lm9uKCdjbGljay5kaXNtaXNzLmJzLm1vZGFsJywgJ1tkYXRhLWRpc21pc3M9XCJtb2RhbFwiXScsICQucHJveHkodGhpcy5oaWRlLCB0aGlzKSlcblxuICAgIHRoaXMuJGRpYWxvZy5vbignbW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgICB0aGF0LiRlbGVtZW50Lm9uZSgnbW91c2V1cC5kaXNtaXNzLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKCQoZS50YXJnZXQpLmlzKHRoYXQuJGVsZW1lbnQpKSB0aGF0Lmlnbm9yZUJhY2tkcm9wQ2xpY2sgPSB0cnVlXG4gICAgICB9KVxuICAgIH0pXG5cbiAgICB0aGlzLmJhY2tkcm9wKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB0cmFuc2l0aW9uID0gJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhhdC4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpXG5cbiAgICAgIGlmICghdGhhdC4kZWxlbWVudC5wYXJlbnQoKS5sZW5ndGgpIHtcbiAgICAgICAgdGhhdC4kZWxlbWVudC5hcHBlbmRUbyh0aGF0LiRib2R5KSAvLyBkb24ndCBtb3ZlIG1vZGFscyBkb20gcG9zaXRpb25cbiAgICAgIH1cblxuICAgICAgdGhhdC4kZWxlbWVudFxuICAgICAgICAuc2hvdygpXG4gICAgICAgIC5zY3JvbGxUb3AoMClcblxuICAgICAgdGhhdC5hZGp1c3REaWFsb2coKVxuXG4gICAgICBpZiAodHJhbnNpdGlvbikge1xuICAgICAgICB0aGF0LiRlbGVtZW50WzBdLm9mZnNldFdpZHRoIC8vIGZvcmNlIHJlZmxvd1xuICAgICAgfVxuXG4gICAgICB0aGF0LiRlbGVtZW50LmFkZENsYXNzKCdpbicpXG5cbiAgICAgIHRoYXQuZW5mb3JjZUZvY3VzKClcblxuICAgICAgdmFyIGUgPSAkLkV2ZW50KCdzaG93bi5icy5tb2RhbCcsIHsgcmVsYXRlZFRhcmdldDogX3JlbGF0ZWRUYXJnZXQgfSlcblxuICAgICAgdHJhbnNpdGlvbiA/XG4gICAgICAgIHRoYXQuJGRpYWxvZyAvLyB3YWl0IGZvciBtb2RhbCB0byBzbGlkZSBpblxuICAgICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoYXQuJGVsZW1lbnQudHJpZ2dlcignZm9jdXMnKS50cmlnZ2VyKGUpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoTW9kYWwuVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2ZvY3VzJykudHJpZ2dlcihlKVxuICAgIH0pXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuaGlkZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKGUpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgZSA9ICQuRXZlbnQoJ2hpZGUuYnMubW9kYWwnKVxuXG4gICAgdGhpcy4kZWxlbWVudC50cmlnZ2VyKGUpXG5cbiAgICBpZiAoIXRoaXMuaXNTaG93biB8fCBlLmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm5cblxuICAgIHRoaXMuaXNTaG93biA9IGZhbHNlXG5cbiAgICB0aGlzLmVzY2FwZSgpXG4gICAgdGhpcy5yZXNpemUoKVxuXG4gICAgJChkb2N1bWVudCkub2ZmKCdmb2N1c2luLmJzLm1vZGFsJylcblxuICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgIC5yZW1vdmVDbGFzcygnaW4nKVxuICAgICAgLm9mZignY2xpY2suZGlzbWlzcy5icy5tb2RhbCcpXG4gICAgICAub2ZmKCdtb3VzZXVwLmRpc21pc3MuYnMubW9kYWwnKVxuXG4gICAgdGhpcy4kZGlhbG9nLm9mZignbW91c2Vkb3duLmRpc21pc3MuYnMubW9kYWwnKVxuXG4gICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgIHRoaXMuJGVsZW1lbnRcbiAgICAgICAgLm9uZSgnYnNUcmFuc2l0aW9uRW5kJywgJC5wcm94eSh0aGlzLmhpZGVNb2RhbCwgdGhpcykpXG4gICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChNb2RhbC5UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICB0aGlzLmhpZGVNb2RhbCgpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUuZW5mb3JjZUZvY3VzID0gZnVuY3Rpb24gKCkge1xuICAgICQoZG9jdW1lbnQpXG4gICAgICAub2ZmKCdmb2N1c2luLmJzLm1vZGFsJykgLy8gZ3VhcmQgYWdhaW5zdCBpbmZpbml0ZSBmb2N1cyBsb29wXG4gICAgICAub24oJ2ZvY3VzaW4uYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmIChkb2N1bWVudCAhPT0gZS50YXJnZXQgJiZcbiAgICAgICAgICAgIHRoaXMuJGVsZW1lbnRbMF0gIT09IGUudGFyZ2V0ICYmXG4gICAgICAgICAgICAhdGhpcy4kZWxlbWVudC5oYXMoZS50YXJnZXQpLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuJGVsZW1lbnQudHJpZ2dlcignZm9jdXMnKVxuICAgICAgICB9XG4gICAgICB9LCB0aGlzKSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5lc2NhcGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKHRoaXMuaXNTaG93biAmJiB0aGlzLm9wdGlvbnMua2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2tleWRvd24uZGlzbWlzcy5icy5tb2RhbCcsICQucHJveHkoZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgZS53aGljaCA9PSAyNyAmJiB0aGlzLmhpZGUoKVxuICAgICAgfSwgdGhpcykpXG4gICAgfSBlbHNlIGlmICghdGhpcy5pc1Nob3duKSB7XG4gICAgICB0aGlzLiRlbGVtZW50Lm9mZigna2V5ZG93bi5kaXNtaXNzLmJzLm1vZGFsJylcbiAgICB9XG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUucmVzaXplID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICh0aGlzLmlzU2hvd24pIHtcbiAgICAgICQod2luZG93KS5vbigncmVzaXplLmJzLm1vZGFsJywgJC5wcm94eSh0aGlzLmhhbmRsZVVwZGF0ZSwgdGhpcykpXG4gICAgfSBlbHNlIHtcbiAgICAgICQod2luZG93KS5vZmYoJ3Jlc2l6ZS5icy5tb2RhbCcpXG4gICAgfVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmhpZGVNb2RhbCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdGhhdCA9IHRoaXNcbiAgICB0aGlzLiRlbGVtZW50LmhpZGUoKVxuICAgIHRoaXMuYmFja2Ryb3AoZnVuY3Rpb24gKCkge1xuICAgICAgdGhhdC4kYm9keS5yZW1vdmVDbGFzcygnbW9kYWwtb3BlbicpXG4gICAgICB0aGF0LnJlc2V0QWRqdXN0bWVudHMoKVxuICAgICAgdGhhdC5yZXNldFNjcm9sbGJhcigpXG4gICAgICB0aGF0LiRlbGVtZW50LnRyaWdnZXIoJ2hpZGRlbi5icy5tb2RhbCcpXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5yZW1vdmVCYWNrZHJvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICB0aGlzLiRiYWNrZHJvcCAmJiB0aGlzLiRiYWNrZHJvcC5yZW1vdmUoKVxuICAgIHRoaXMuJGJhY2tkcm9wID0gbnVsbFxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmJhY2tkcm9wID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgdmFyIHRoYXQgPSB0aGlzXG4gICAgdmFyIGFuaW1hdGUgPSB0aGlzLiRlbGVtZW50Lmhhc0NsYXNzKCdmYWRlJykgPyAnZmFkZScgOiAnJ1xuXG4gICAgaWYgKHRoaXMuaXNTaG93biAmJiB0aGlzLm9wdGlvbnMuYmFja2Ryb3ApIHtcbiAgICAgIHZhciBkb0FuaW1hdGUgPSAkLnN1cHBvcnQudHJhbnNpdGlvbiAmJiBhbmltYXRlXG5cbiAgICAgIHRoaXMuJGJhY2tkcm9wID0gJChkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKSlcbiAgICAgICAgLmFkZENsYXNzKCdtb2RhbC1iYWNrZHJvcCAnICsgYW5pbWF0ZSlcbiAgICAgICAgLmFwcGVuZFRvKHRoaXMuJGJvZHkpXG5cbiAgICAgIHRoaXMuJGVsZW1lbnQub24oJ2NsaWNrLmRpc21pc3MuYnMubW9kYWwnLCAkLnByb3h5KGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGlmICh0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2spIHtcbiAgICAgICAgICB0aGlzLmlnbm9yZUJhY2tkcm9wQ2xpY2sgPSBmYWxzZVxuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGlmIChlLnRhcmdldCAhPT0gZS5jdXJyZW50VGFyZ2V0KSByZXR1cm5cbiAgICAgICAgdGhpcy5vcHRpb25zLmJhY2tkcm9wID09ICdzdGF0aWMnXG4gICAgICAgICAgPyB0aGlzLiRlbGVtZW50WzBdLmZvY3VzKClcbiAgICAgICAgICA6IHRoaXMuaGlkZSgpXG4gICAgICB9LCB0aGlzKSlcblxuICAgICAgaWYgKGRvQW5pbWF0ZSkgdGhpcy4kYmFja2Ryb3BbMF0ub2Zmc2V0V2lkdGggLy8gZm9yY2UgcmVmbG93XG5cbiAgICAgIHRoaXMuJGJhY2tkcm9wLmFkZENsYXNzKCdpbicpXG5cbiAgICAgIGlmICghY2FsbGJhY2spIHJldHVyblxuXG4gICAgICBkb0FuaW1hdGUgP1xuICAgICAgICB0aGlzLiRiYWNrZHJvcFxuICAgICAgICAgIC5vbmUoJ2JzVHJhbnNpdGlvbkVuZCcsIGNhbGxiYWNrKVxuICAgICAgICAgIC5lbXVsYXRlVHJhbnNpdGlvbkVuZChNb2RhbC5CQUNLRFJPUF9UUkFOU0lUSU9OX0RVUkFUSU9OKSA6XG4gICAgICAgIGNhbGxiYWNrKClcblxuICAgIH0gZWxzZSBpZiAoIXRoaXMuaXNTaG93biAmJiB0aGlzLiRiYWNrZHJvcCkge1xuICAgICAgdGhpcy4kYmFja2Ryb3AucmVtb3ZlQ2xhc3MoJ2luJylcblxuICAgICAgdmFyIGNhbGxiYWNrUmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB0aGF0LnJlbW92ZUJhY2tkcm9wKClcbiAgICAgICAgY2FsbGJhY2sgJiYgY2FsbGJhY2soKVxuICAgICAgfVxuICAgICAgJC5zdXBwb3J0LnRyYW5zaXRpb24gJiYgdGhpcy4kZWxlbWVudC5oYXNDbGFzcygnZmFkZScpID9cbiAgICAgICAgdGhpcy4kYmFja2Ryb3BcbiAgICAgICAgICAub25lKCdic1RyYW5zaXRpb25FbmQnLCBjYWxsYmFja1JlbW92ZSlcbiAgICAgICAgICAuZW11bGF0ZVRyYW5zaXRpb25FbmQoTW9kYWwuQkFDS0RST1BfVFJBTlNJVElPTl9EVVJBVElPTikgOlxuICAgICAgICBjYWxsYmFja1JlbW92ZSgpXG5cbiAgICB9IGVsc2UgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjaygpXG4gICAgfVxuICB9XG5cbiAgLy8gdGhlc2UgZm9sbG93aW5nIG1ldGhvZHMgYXJlIHVzZWQgdG8gaGFuZGxlIG92ZXJmbG93aW5nIG1vZGFsc1xuXG4gIE1vZGFsLnByb3RvdHlwZS5oYW5kbGVVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5hZGp1c3REaWFsb2coKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmFkanVzdERpYWxvZyA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgbW9kYWxJc092ZXJmbG93aW5nID0gdGhpcy4kZWxlbWVudFswXS5zY3JvbGxIZWlnaHQgPiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xpZW50SGVpZ2h0XG5cbiAgICB0aGlzLiRlbGVtZW50LmNzcyh7XG4gICAgICBwYWRkaW5nTGVmdDogICF0aGlzLmJvZHlJc092ZXJmbG93aW5nICYmIG1vZGFsSXNPdmVyZmxvd2luZyA/IHRoaXMuc2Nyb2xsYmFyV2lkdGggOiAnJyxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhpcy5ib2R5SXNPdmVyZmxvd2luZyAmJiAhbW9kYWxJc092ZXJmbG93aW5nID8gdGhpcy5zY3JvbGxiYXJXaWR0aCA6ICcnXG4gICAgfSlcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5yZXNldEFkanVzdG1lbnRzID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGVsZW1lbnQuY3NzKHtcbiAgICAgIHBhZGRpbmdMZWZ0OiAnJyxcbiAgICAgIHBhZGRpbmdSaWdodDogJydcbiAgICB9KVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLmNoZWNrU2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBmdWxsV2luZG93V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aFxuICAgIGlmICghZnVsbFdpbmRvd1dpZHRoKSB7IC8vIHdvcmthcm91bmQgZm9yIG1pc3Npbmcgd2luZG93LmlubmVyV2lkdGggaW4gSUU4XG4gICAgICB2YXIgZG9jdW1lbnRFbGVtZW50UmVjdCA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKVxuICAgICAgZnVsbFdpbmRvd1dpZHRoID0gZG9jdW1lbnRFbGVtZW50UmVjdC5yaWdodCAtIE1hdGguYWJzKGRvY3VtZW50RWxlbWVudFJlY3QubGVmdClcbiAgICB9XG4gICAgdGhpcy5ib2R5SXNPdmVyZmxvd2luZyA9IGRvY3VtZW50LmJvZHkuY2xpZW50V2lkdGggPCBmdWxsV2luZG93V2lkdGhcbiAgICB0aGlzLnNjcm9sbGJhcldpZHRoID0gdGhpcy5tZWFzdXJlU2Nyb2xsYmFyKClcbiAgfVxuXG4gIE1vZGFsLnByb3RvdHlwZS5zZXRTY3JvbGxiYXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGJvZHlQYWQgPSBwYXJzZUludCgodGhpcy4kYm9keS5jc3MoJ3BhZGRpbmctcmlnaHQnKSB8fCAwKSwgMTApXG4gICAgdGhpcy5vcmlnaW5hbEJvZHlQYWQgPSBkb2N1bWVudC5ib2R5LnN0eWxlLnBhZGRpbmdSaWdodCB8fCAnJ1xuICAgIGlmICh0aGlzLmJvZHlJc092ZXJmbG93aW5nKSB0aGlzLiRib2R5LmNzcygncGFkZGluZy1yaWdodCcsIGJvZHlQYWQgKyB0aGlzLnNjcm9sbGJhcldpZHRoKVxuICB9XG5cbiAgTW9kYWwucHJvdG90eXBlLnJlc2V0U2Nyb2xsYmFyID0gZnVuY3Rpb24gKCkge1xuICAgIHRoaXMuJGJvZHkuY3NzKCdwYWRkaW5nLXJpZ2h0JywgdGhpcy5vcmlnaW5hbEJvZHlQYWQpXG4gIH1cblxuICBNb2RhbC5wcm90b3R5cGUubWVhc3VyZVNjcm9sbGJhciA9IGZ1bmN0aW9uICgpIHsgLy8gdGh4IHdhbHNoXG4gICAgdmFyIHNjcm9sbERpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXG4gICAgc2Nyb2xsRGl2LmNsYXNzTmFtZSA9ICdtb2RhbC1zY3JvbGxiYXItbWVhc3VyZSdcbiAgICB0aGlzLiRib2R5LmFwcGVuZChzY3JvbGxEaXYpXG4gICAgdmFyIHNjcm9sbGJhcldpZHRoID0gc2Nyb2xsRGl2Lm9mZnNldFdpZHRoIC0gc2Nyb2xsRGl2LmNsaWVudFdpZHRoXG4gICAgdGhpcy4kYm9keVswXS5yZW1vdmVDaGlsZChzY3JvbGxEaXYpXG4gICAgcmV0dXJuIHNjcm9sbGJhcldpZHRoXG4gIH1cblxuXG4gIC8vIE1PREFMIFBMVUdJTiBERUZJTklUSU9OXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09XG5cbiAgZnVuY3Rpb24gUGx1Z2luKG9wdGlvbiwgX3JlbGF0ZWRUYXJnZXQpIHtcbiAgICByZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciAkdGhpcyAgID0gJCh0aGlzKVxuICAgICAgdmFyIGRhdGEgICAgPSAkdGhpcy5kYXRhKCdicy5tb2RhbCcpXG4gICAgICB2YXIgb3B0aW9ucyA9ICQuZXh0ZW5kKHt9LCBNb2RhbC5ERUZBVUxUUywgJHRoaXMuZGF0YSgpLCB0eXBlb2Ygb3B0aW9uID09ICdvYmplY3QnICYmIG9wdGlvbilcblxuICAgICAgaWYgKCFkYXRhKSAkdGhpcy5kYXRhKCdicy5tb2RhbCcsIChkYXRhID0gbmV3IE1vZGFsKHRoaXMsIG9wdGlvbnMpKSlcbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9uID09ICdzdHJpbmcnKSBkYXRhW29wdGlvbl0oX3JlbGF0ZWRUYXJnZXQpXG4gICAgICBlbHNlIGlmIChvcHRpb25zLnNob3cpIGRhdGEuc2hvdyhfcmVsYXRlZFRhcmdldClcbiAgICB9KVxuICB9XG5cbiAgdmFyIG9sZCA9ICQuZm4ubW9kYWxcblxuICAkLmZuLm1vZGFsICAgICAgICAgICAgID0gUGx1Z2luXG4gICQuZm4ubW9kYWwuQ29uc3RydWN0b3IgPSBNb2RhbFxuXG5cbiAgLy8gTU9EQUwgTk8gQ09ORkxJQ1RcbiAgLy8gPT09PT09PT09PT09PT09PT1cblxuICAkLmZuLm1vZGFsLm5vQ29uZmxpY3QgPSBmdW5jdGlvbiAoKSB7XG4gICAgJC5mbi5tb2RhbCA9IG9sZFxuICAgIHJldHVybiB0aGlzXG4gIH1cblxuXG4gIC8vIE1PREFMIERBVEEtQVBJXG4gIC8vID09PT09PT09PT09PT09XG5cbiAgJChkb2N1bWVudCkub24oJ2NsaWNrLmJzLm1vZGFsLmRhdGEtYXBpJywgJ1tkYXRhLXRvZ2dsZT1cIm1vZGFsXCJdJywgZnVuY3Rpb24gKGUpIHtcbiAgICB2YXIgJHRoaXMgICA9ICQodGhpcylcbiAgICB2YXIgaHJlZiAgICA9ICR0aGlzLmF0dHIoJ2hyZWYnKVxuICAgIHZhciB0YXJnZXQgID0gJHRoaXMuYXR0cignZGF0YS10YXJnZXQnKSB8fFxuICAgICAgKGhyZWYgJiYgaHJlZi5yZXBsYWNlKC8uKig/PSNbXlxcc10rJCkvLCAnJykpIC8vIHN0cmlwIGZvciBpZTdcblxuICAgIHZhciAkdGFyZ2V0ID0gJChkb2N1bWVudCkuZmluZCh0YXJnZXQpXG4gICAgdmFyIG9wdGlvbiAgPSAkdGFyZ2V0LmRhdGEoJ2JzLm1vZGFsJykgPyAndG9nZ2xlJyA6ICQuZXh0ZW5kKHsgcmVtb3RlOiAhLyMvLnRlc3QoaHJlZikgJiYgaHJlZiB9LCAkdGFyZ2V0LmRhdGEoKSwgJHRoaXMuZGF0YSgpKVxuXG4gICAgaWYgKCR0aGlzLmlzKCdhJykpIGUucHJldmVudERlZmF1bHQoKVxuXG4gICAgJHRhcmdldC5vbmUoJ3Nob3cuYnMubW9kYWwnLCBmdW5jdGlvbiAoc2hvd0V2ZW50KSB7XG4gICAgICBpZiAoc2hvd0V2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpKSByZXR1cm4gLy8gb25seSByZWdpc3RlciBmb2N1cyByZXN0b3JlciBpZiBtb2RhbCB3aWxsIGFjdHVhbGx5IGdldCBzaG93blxuICAgICAgJHRhcmdldC5vbmUoJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJHRoaXMuaXMoJzp2aXNpYmxlJykgJiYgJHRoaXMudHJpZ2dlcignZm9jdXMnKVxuICAgICAgfSlcbiAgICB9KVxuICAgIFBsdWdpbi5jYWxsKCR0YXJnZXQsIG9wdGlvbiwgdGhpcylcbiAgfSlcblxufShqUXVlcnkpO1xuXG4vKmdsb2JhbCBkZWZpbmU6ZmFsc2UgKi9cbi8qKlxuICogQ29weXJpZ2h0IDIwMTItMjAxNyBDcmFpZyBDYW1wYmVsbFxuICpcbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4gKiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlIExpY2Vuc2UgYXRcbiAqXG4gKiBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICpcbiAqIE1vdXNldHJhcCBpcyBhIHNpbXBsZSBrZXlib2FyZCBzaG9ydGN1dCBsaWJyYXJ5IGZvciBKYXZhc2NyaXB0IHdpdGhcbiAqIG5vIGV4dGVybmFsIGRlcGVuZGVuY2llc1xuICpcbiAqIEB2ZXJzaW9uIDEuNi4yXG4gKiBAdXJsIGNyYWlnLmlzL2tpbGxpbmcvbWljZVxuICovXG4oZnVuY3Rpb24od2luZG93LCBkb2N1bWVudCwgdW5kZWZpbmVkKSB7XG5cbiAgICAvLyBDaGVjayBpZiBtb3VzZXRyYXAgaXMgdXNlZCBpbnNpZGUgYnJvd3NlciwgaWYgbm90LCByZXR1cm5cbiAgICBpZiAoIXdpbmRvdykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogbWFwcGluZyBvZiBzcGVjaWFsIGtleWNvZGVzIHRvIHRoZWlyIGNvcnJlc3BvbmRpbmcga2V5c1xuICAgICAqXG4gICAgICogZXZlcnl0aGluZyBpbiB0aGlzIGRpY3Rpb25hcnkgY2Fubm90IHVzZSBrZXlwcmVzcyBldmVudHNcbiAgICAgKiBzbyBpdCBoYXMgdG8gYmUgaGVyZSB0byBtYXAgdG8gdGhlIGNvcnJlY3Qga2V5Y29kZXMgZm9yXG4gICAgICoga2V5dXAva2V5ZG93biBldmVudHNcbiAgICAgKlxuICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICovXG4gICAgdmFyIF9NQVAgPSB7XG4gICAgICAgIDg6ICdiYWNrc3BhY2UnLFxuICAgICAgICA5OiAndGFiJyxcbiAgICAgICAgMTM6ICdlbnRlcicsXG4gICAgICAgIDE2OiAnc2hpZnQnLFxuICAgICAgICAxNzogJ2N0cmwnLFxuICAgICAgICAxODogJ2FsdCcsXG4gICAgICAgIDIwOiAnY2Fwc2xvY2snLFxuICAgICAgICAyNzogJ2VzYycsXG4gICAgICAgIDMyOiAnc3BhY2UnLFxuICAgICAgICAzMzogJ3BhZ2V1cCcsXG4gICAgICAgIDM0OiAncGFnZWRvd24nLFxuICAgICAgICAzNTogJ2VuZCcsXG4gICAgICAgIDM2OiAnaG9tZScsXG4gICAgICAgIDM3OiAnbGVmdCcsXG4gICAgICAgIDM4OiAndXAnLFxuICAgICAgICAzOTogJ3JpZ2h0JyxcbiAgICAgICAgNDA6ICdkb3duJyxcbiAgICAgICAgNDU6ICdpbnMnLFxuICAgICAgICA0NjogJ2RlbCcsXG4gICAgICAgIDkxOiAnbWV0YScsXG4gICAgICAgIDkzOiAnbWV0YScsXG4gICAgICAgIDIyNDogJ21ldGEnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIG1hcHBpbmcgZm9yIHNwZWNpYWwgY2hhcmFjdGVycyBzbyB0aGV5IGNhbiBzdXBwb3J0XG4gICAgICpcbiAgICAgKiB0aGlzIGRpY3Rpb25hcnkgaXMgb25seSB1c2VkIGluY2FzZSB5b3Ugd2FudCB0byBiaW5kIGFcbiAgICAgKiBrZXl1cCBvciBrZXlkb3duIGV2ZW50IHRvIG9uZSBvZiB0aGVzZSBrZXlzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfS0VZQ09ERV9NQVAgPSB7XG4gICAgICAgIDEwNjogJyonLFxuICAgICAgICAxMDc6ICcrJyxcbiAgICAgICAgMTA5OiAnLScsXG4gICAgICAgIDExMDogJy4nLFxuICAgICAgICAxMTEgOiAnLycsXG4gICAgICAgIDE4NjogJzsnLFxuICAgICAgICAxODc6ICc9JyxcbiAgICAgICAgMTg4OiAnLCcsXG4gICAgICAgIDE4OTogJy0nLFxuICAgICAgICAxOTA6ICcuJyxcbiAgICAgICAgMTkxOiAnLycsXG4gICAgICAgIDE5MjogJ2AnLFxuICAgICAgICAyMTk6ICdbJyxcbiAgICAgICAgMjIwOiAnXFxcXCcsXG4gICAgICAgIDIyMTogJ10nLFxuICAgICAgICAyMjI6ICdcXCcnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHRoaXMgaXMgYSBtYXBwaW5nIG9mIGtleXMgdGhhdCByZXF1aXJlIHNoaWZ0IG9uIGEgVVMga2V5cGFkXG4gICAgICogYmFjayB0byB0aGUgbm9uIHNoaWZ0IGVxdWl2ZWxlbnRzXG4gICAgICpcbiAgICAgKiB0aGlzIGlzIHNvIHlvdSBjYW4gdXNlIGtleXVwIGV2ZW50cyB3aXRoIHRoZXNlIGtleXNcbiAgICAgKlxuICAgICAqIG5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrIHJlbGlhYmx5IG9uIFVTIGtleWJvYXJkc1xuICAgICAqXG4gICAgICogQHR5cGUge09iamVjdH1cbiAgICAgKi9cbiAgICB2YXIgX1NISUZUX01BUCA9IHtcbiAgICAgICAgJ34nOiAnYCcsXG4gICAgICAgICchJzogJzEnLFxuICAgICAgICAnQCc6ICcyJyxcbiAgICAgICAgJyMnOiAnMycsXG4gICAgICAgICckJzogJzQnLFxuICAgICAgICAnJSc6ICc1JyxcbiAgICAgICAgJ14nOiAnNicsXG4gICAgICAgICcmJzogJzcnLFxuICAgICAgICAnKic6ICc4JyxcbiAgICAgICAgJygnOiAnOScsXG4gICAgICAgICcpJzogJzAnLFxuICAgICAgICAnXyc6ICctJyxcbiAgICAgICAgJysnOiAnPScsXG4gICAgICAgICc6JzogJzsnLFxuICAgICAgICAnXFxcIic6ICdcXCcnLFxuICAgICAgICAnPCc6ICcsJyxcbiAgICAgICAgJz4nOiAnLicsXG4gICAgICAgICc/JzogJy8nLFxuICAgICAgICAnfCc6ICdcXFxcJ1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiB0aGlzIGlzIGEgbGlzdCBvZiBzcGVjaWFsIHN0cmluZ3MgeW91IGNhbiB1c2UgdG8gbWFwXG4gICAgICogdG8gbW9kaWZpZXIga2V5cyB3aGVuIHlvdSBzcGVjaWZ5IHlvdXIga2V5Ym9hcmQgc2hvcnRjdXRzXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAqL1xuICAgIHZhciBfU1BFQ0lBTF9BTElBU0VTID0ge1xuICAgICAgICAnb3B0aW9uJzogJ2FsdCcsXG4gICAgICAgICdjb21tYW5kJzogJ21ldGEnLFxuICAgICAgICAncmV0dXJuJzogJ2VudGVyJyxcbiAgICAgICAgJ2VzY2FwZSc6ICdlc2MnLFxuICAgICAgICAncGx1cyc6ICcrJyxcbiAgICAgICAgJ21vZCc6IC9NYWN8aVBvZHxpUGhvbmV8aVBhZC8udGVzdChuYXZpZ2F0b3IucGxhdGZvcm0pID8gJ21ldGEnIDogJ2N0cmwnXG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBmbGlwcGVkIHZlcnNpb24gb2YgX01BUCBmcm9tIGFib3ZlXG4gICAgICogbmVlZGVkIHRvIGNoZWNrIGlmIHdlIHNob3VsZCB1c2Uga2V5cHJlc3Mgb3Igbm90IHdoZW4gbm8gYWN0aW9uXG4gICAgICogaXMgc3BlY2lmaWVkXG4gICAgICpcbiAgICAgKiBAdHlwZSB7T2JqZWN0fHVuZGVmaW5lZH1cbiAgICAgKi9cbiAgICB2YXIgX1JFVkVSU0VfTUFQO1xuXG4gICAgLyoqXG4gICAgICogbG9vcCB0aHJvdWdoIHRoZSBmIGtleXMsIGYxIHRvIGYxOSBhbmQgYWRkIHRoZW0gdG8gdGhlIG1hcFxuICAgICAqIHByb2dyYW1hdGljYWxseVxuICAgICAqL1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgMjA7ICsraSkge1xuICAgICAgICBfTUFQWzExMSArIGldID0gJ2YnICsgaTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBsb29wIHRocm91Z2ggdG8gbWFwIG51bWJlcnMgb24gdGhlIG51bWVyaWMga2V5cGFkXG4gICAgICovXG4gICAgZm9yIChpID0gMDsgaSA8PSA5OyArK2kpIHtcblxuICAgICAgICAvLyBUaGlzIG5lZWRzIHRvIHVzZSBhIHN0cmluZyBjYXVzZSBvdGhlcndpc2Ugc2luY2UgMCBpcyBmYWxzZXlcbiAgICAgICAgLy8gbW91c2V0cmFwIHdpbGwgbmV2ZXIgZmlyZSBmb3IgbnVtcGFkIDAgcHJlc3NlZCBhcyBwYXJ0IG9mIGEga2V5ZG93blxuICAgICAgICAvLyBldmVudC5cbiAgICAgICAgLy9cbiAgICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vY2NhbXBiZWxsL21vdXNldHJhcC9wdWxsLzI1OFxuICAgICAgICBfTUFQW2kgKyA5Nl0gPSBpLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogY3Jvc3MgYnJvd3NlciBhZGQgZXZlbnQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge0VsZW1lbnR8SFRNTERvY3VtZW50fSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9hZGRFdmVudChvYmplY3QsIHR5cGUsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmIChvYmplY3QuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgICAgICAgICAgb2JqZWN0LmFkZEV2ZW50TGlzdGVuZXIodHlwZSwgY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG9iamVjdC5hdHRhY2hFdmVudCgnb24nICsgdHlwZSwgY2FsbGJhY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHRha2VzIHRoZSBldmVudCBhbmQgcmV0dXJucyB0aGUga2V5IGNoYXJhY3RlclxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm4ge3N0cmluZ31cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfY2hhcmFjdGVyRnJvbUV2ZW50KGUpIHtcblxuICAgICAgICAvLyBmb3Iga2V5cHJlc3MgZXZlbnRzIHdlIHNob3VsZCByZXR1cm4gdGhlIGNoYXJhY3RlciBhcyBpc1xuICAgICAgICBpZiAoZS50eXBlID09ICdrZXlwcmVzcycpIHtcbiAgICAgICAgICAgIHZhciBjaGFyYWN0ZXIgPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGUud2hpY2gpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgc2hpZnQga2V5IGlzIG5vdCBwcmVzc2VkIHRoZW4gaXQgaXMgc2FmZSB0byBhc3N1bWVcbiAgICAgICAgICAgIC8vIHRoYXQgd2Ugd2FudCB0aGUgY2hhcmFjdGVyIHRvIGJlIGxvd2VyY2FzZS4gIHRoaXMgbWVhbnMgaWZcbiAgICAgICAgICAgIC8vIHlvdSBhY2NpZGVudGFsbHkgaGF2ZSBjYXBzIGxvY2sgb24gdGhlbiB5b3VyIGtleSBiaW5kaW5nc1xuICAgICAgICAgICAgLy8gd2lsbCBjb250aW51ZSB0byB3b3JrXG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gdGhlIG9ubHkgc2lkZSBlZmZlY3QgdGhhdCBtaWdodCBub3QgYmUgZGVzaXJlZCBpcyBpZiB5b3VcbiAgICAgICAgICAgIC8vIGJpbmQgc29tZXRoaW5nIGxpa2UgJ0EnIGNhdXNlIHlvdSB3YW50IHRvIHRyaWdnZXIgYW5cbiAgICAgICAgICAgIC8vIGV2ZW50IHdoZW4gY2FwaXRhbCBBIGlzIHByZXNzZWQgY2FwcyBsb2NrIHdpbGwgbm8gbG9uZ2VyXG4gICAgICAgICAgICAvLyB0cmlnZ2VyIHRoZSBldmVudC4gIHNoaWZ0K2Egd2lsbCB0aG91Z2guXG4gICAgICAgICAgICBpZiAoIWUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAgICAgICBjaGFyYWN0ZXIgPSBjaGFyYWN0ZXIudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNoYXJhY3RlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZvciBub24ga2V5cHJlc3MgZXZlbnRzIHRoZSBzcGVjaWFsIG1hcHMgYXJlIG5lZWRlZFxuICAgICAgICBpZiAoX01BUFtlLndoaWNoXSkge1xuICAgICAgICAgICAgcmV0dXJuIF9NQVBbZS53aGljaF07XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX0tFWUNPREVfTUFQW2Uud2hpY2hdKSB7XG4gICAgICAgICAgICByZXR1cm4gX0tFWUNPREVfTUFQW2Uud2hpY2hdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaWYgaXQgaXMgbm90IGluIHRoZSBzcGVjaWFsIG1hcFxuXG4gICAgICAgIC8vIHdpdGgga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzIHRoZSBjaGFyYWN0ZXIgc2VlbXMgdG8gYWx3YXlzXG4gICAgICAgIC8vIGNvbWUgaW4gYXMgYW4gdXBwZXJjYXNlIGNoYXJhY3RlciB3aGV0aGVyIHlvdSBhcmUgcHJlc3Npbmcgc2hpZnRcbiAgICAgICAgLy8gb3Igbm90LiAgd2Ugc2hvdWxkIG1ha2Ugc3VyZSBpdCBpcyBhbHdheXMgbG93ZXJjYXNlIGZvciBjb21wYXJpc29uc1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShlLndoaWNoKS50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNoZWNrcyBpZiB0d28gYXJyYXlzIGFyZSBlcXVhbFxuICAgICAqXG4gICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzMVxuICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyczJcbiAgICAgKiBAcmV0dXJucyB7Ym9vbGVhbn1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfbW9kaWZpZXJzTWF0Y2gobW9kaWZpZXJzMSwgbW9kaWZpZXJzMikge1xuICAgICAgICByZXR1cm4gbW9kaWZpZXJzMS5zb3J0KCkuam9pbignLCcpID09PSBtb2RpZmllcnMyLnNvcnQoKS5qb2luKCcsJyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogdGFrZXMgYSBrZXkgZXZlbnQgYW5kIGZpZ3VyZXMgb3V0IHdoYXQgdGhlIG1vZGlmaWVycyBhcmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICovXG4gICAgZnVuY3Rpb24gX2V2ZW50TW9kaWZpZXJzKGUpIHtcbiAgICAgICAgdmFyIG1vZGlmaWVycyA9IFtdO1xuXG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLmFsdEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2FsdCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGUuY3RybEtleSkge1xuICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goJ2N0cmwnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlLm1ldGFLZXkpIHtcbiAgICAgICAgICAgIG1vZGlmaWVycy5wdXNoKCdtZXRhJyk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbW9kaWZpZXJzO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHByZXZlbnRzIGRlZmF1bHQgZm9yIHRoaXMgZXZlbnRcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgZnVuY3Rpb24gX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICAgICAgaWYgKGUucHJldmVudERlZmF1bHQpIHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGUucmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzdG9wcyBwcm9wb2dhdGlvbiBmb3IgdGhpcyBldmVudFxuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUuc3RvcFByb3BhZ2F0aW9uKSB7XG4gICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgZS5jYW5jZWxCdWJibGUgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGRldGVybWluZXMgaWYgdGhlIGtleWNvZGUgc3BlY2lmaWVkIGlzIGEgbW9kaWZpZXIga2V5IG9yIG5vdFxuICAgICAqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGtleVxuICAgICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9pc01vZGlmaWVyKGtleSkge1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzaGlmdCcgfHwga2V5ID09ICdjdHJsJyB8fCBrZXkgPT0gJ2FsdCcgfHwga2V5ID09ICdtZXRhJztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiByZXZlcnNlcyB0aGUgbWFwIGxvb2t1cCBzbyB0aGF0IHdlIGNhbiBsb29rIGZvciBzcGVjaWZpYyBrZXlzXG4gICAgICogdG8gc2VlIHdoYXQgY2FuIGFuZCBjYW4ndCB1c2Uga2V5cHJlc3NcbiAgICAgKlxuICAgICAqIEByZXR1cm4ge09iamVjdH1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfZ2V0UmV2ZXJzZU1hcCgpIHtcbiAgICAgICAgaWYgKCFfUkVWRVJTRV9NQVApIHtcbiAgICAgICAgICAgIF9SRVZFUlNFX01BUCA9IHt9O1xuICAgICAgICAgICAgZm9yICh2YXIga2V5IGluIF9NQVApIHtcblxuICAgICAgICAgICAgICAgIC8vIHB1bGwgb3V0IHRoZSBudW1lcmljIGtleXBhZCBmcm9tIGhlcmUgY2F1c2Uga2V5cHJlc3Mgc2hvdWxkXG4gICAgICAgICAgICAgICAgLy8gYmUgYWJsZSB0byBkZXRlY3QgdGhlIGtleXMgZnJvbSB0aGUgY2hhcmFjdGVyXG4gICAgICAgICAgICAgICAgaWYgKGtleSA+IDk1ICYmIGtleSA8IDExMikge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoX01BUC5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgICAgICAgICAgIF9SRVZFUlNFX01BUFtfTUFQW2tleV1dID0ga2V5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gX1JFVkVSU0VfTUFQO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHBpY2tzIHRoZSBiZXN0IGFjdGlvbiBiYXNlZCBvbiB0aGUga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5IC0gY2hhcmFjdGVyIGZvciBrZXlcbiAgICAgKiBAcGFyYW0ge0FycmF5fSBtb2RpZmllcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiBwYXNzZWQgaW5cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfcGlja0Jlc3RBY3Rpb24oa2V5LCBtb2RpZmllcnMsIGFjdGlvbikge1xuXG4gICAgICAgIC8vIGlmIG5vIGFjdGlvbiB3YXMgcGlja2VkIGluIHdlIHNob3VsZCB0cnkgdG8gcGljayB0aGUgb25lXG4gICAgICAgIC8vIHRoYXQgd2UgdGhpbmsgd291bGQgd29yayBiZXN0IGZvciB0aGlzIGtleVxuICAgICAgICBpZiAoIWFjdGlvbikge1xuICAgICAgICAgICAgYWN0aW9uID0gX2dldFJldmVyc2VNYXAoKVtrZXldID8gJ2tleWRvd24nIDogJ2tleXByZXNzJztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1vZGlmaWVyIGtleXMgZG9uJ3Qgd29yayBhcyBleHBlY3RlZCB3aXRoIGtleXByZXNzLFxuICAgICAgICAvLyBzd2l0Y2ggdG8ga2V5ZG93blxuICAgICAgICBpZiAoYWN0aW9uID09ICdrZXlwcmVzcycgJiYgbW9kaWZpZXJzLmxlbmd0aCkge1xuICAgICAgICAgICAgYWN0aW9uID0gJ2tleWRvd24nO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGFjdGlvbjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBmcm9tIGEgc3RyaW5nIGtleSBjb21iaW5hdGlvbiB0byBhbiBhcnJheVxuICAgICAqXG4gICAgICogQHBhcmFtICB7c3RyaW5nfSBjb21iaW5hdGlvbiBsaWtlIFwiY29tbWFuZCtzaGlmdCtsXCJcbiAgICAgKiBAcmV0dXJuIHtBcnJheX1cbiAgICAgKi9cbiAgICBmdW5jdGlvbiBfa2V5c0Zyb21TdHJpbmcoY29tYmluYXRpb24pIHtcbiAgICAgICAgaWYgKGNvbWJpbmF0aW9uID09PSAnKycpIHtcbiAgICAgICAgICAgIHJldHVybiBbJysnXTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbWJpbmF0aW9uID0gY29tYmluYXRpb24ucmVwbGFjZSgvXFwrezJ9L2csICcrcGx1cycpO1xuICAgICAgICByZXR1cm4gY29tYmluYXRpb24uc3BsaXQoJysnKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGluZm8gZm9yIGEgc3BlY2lmaWMga2V5IGNvbWJpbmF0aW9uXG4gICAgICpcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmd9IGNvbWJpbmF0aW9uIGtleSBjb21iaW5hdGlvbiAoXCJjb21tYW5kK3NcIiBvciBcImFcIiBvciBcIipcIilcbiAgICAgKiBAcGFyYW0gIHtzdHJpbmc9fSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB7T2JqZWN0fVxuICAgICAqL1xuICAgIGZ1bmN0aW9uIF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIGtleXM7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIHZhciBpO1xuICAgICAgICB2YXIgbW9kaWZpZXJzID0gW107XG5cbiAgICAgICAgLy8gdGFrZSB0aGUga2V5cyBmcm9tIHRoaXMgcGF0dGVybiBhbmQgZmlndXJlIG91dCB3aGF0IHRoZSBhY3R1YWxcbiAgICAgICAgLy8gcGF0dGVybiBpcyBhbGwgYWJvdXRcbiAgICAgICAga2V5cyA9IF9rZXlzRnJvbVN0cmluZyhjb21iaW5hdGlvbik7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIGtleSA9IGtleXNbaV07XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBrZXkgbmFtZXNcbiAgICAgICAgICAgIGlmIChfU1BFQ0lBTF9BTElBU0VTW2tleV0pIHtcbiAgICAgICAgICAgICAgICBrZXkgPSBfU1BFQ0lBTF9BTElBU0VTW2tleV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIHRoaXMgaXMgbm90IGEga2V5cHJlc3MgZXZlbnQgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIGJlIHNtYXJ0IGFib3V0IHVzaW5nIHNoaWZ0IGtleXNcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBvbmx5IHdvcmsgZm9yIFVTIGtleWJvYXJkcyBob3dldmVyXG4gICAgICAgICAgICBpZiAoYWN0aW9uICYmIGFjdGlvbiAhPSAna2V5cHJlc3MnICYmIF9TSElGVF9NQVBba2V5XSkge1xuICAgICAgICAgICAgICAgIGtleSA9IF9TSElGVF9NQVBba2V5XTtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMucHVzaCgnc2hpZnQnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gaWYgdGhpcyBrZXkgaXMgYSBtb2RpZmllciB0aGVuIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBtb2RpZmllcnNcbiAgICAgICAgICAgIGlmIChfaXNNb2RpZmllcihrZXkpKSB7XG4gICAgICAgICAgICAgICAgbW9kaWZpZXJzLnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGRlcGVuZGluZyBvbiB3aGF0IHRoZSBrZXkgY29tYmluYXRpb24gaXNcbiAgICAgICAgLy8gd2Ugd2lsbCB0cnkgdG8gcGljayB0aGUgYmVzdCBldmVudCBmb3IgaXRcbiAgICAgICAgYWN0aW9uID0gX3BpY2tCZXN0QWN0aW9uKGtleSwgbW9kaWZpZXJzLCBhY3Rpb24pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBrZXk6IGtleSxcbiAgICAgICAgICAgIG1vZGlmaWVyczogbW9kaWZpZXJzLFxuICAgICAgICAgICAgYWN0aW9uOiBhY3Rpb25cbiAgICAgICAgfTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBfYmVsb25nc1RvKGVsZW1lbnQsIGFuY2VzdG9yKSB7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsIHx8IGVsZW1lbnQgPT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZWxlbWVudCA9PT0gYW5jZXN0b3IpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF9iZWxvbmdzVG8oZWxlbWVudC5wYXJlbnROb2RlLCBhbmNlc3Rvcik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gTW91c2V0cmFwKHRhcmdldEVsZW1lbnQpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gICAgICAgIHRhcmdldEVsZW1lbnQgPSB0YXJnZXRFbGVtZW50IHx8IGRvY3VtZW50O1xuXG4gICAgICAgIGlmICghKHNlbGYgaW5zdGFuY2VvZiBNb3VzZXRyYXApKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IE1vdXNldHJhcCh0YXJnZXRFbGVtZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBlbGVtZW50IHRvIGF0dGFjaCBrZXkgZXZlbnRzIHRvXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtFbGVtZW50fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi50YXJnZXQgPSB0YXJnZXRFbGVtZW50O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhIGxpc3Qgb2YgYWxsIHRoZSBjYWxsYmFja3Mgc2V0dXAgdmlhIE1vdXNldHJhcC5iaW5kKClcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge09iamVjdH1cbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2NhbGxiYWNrcyA9IHt9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBkaXJlY3QgbWFwIG9mIHN0cmluZyBjb21iaW5hdGlvbnMgdG8gY2FsbGJhY2tzIHVzZWQgZm9yIHRyaWdnZXIoKVxuICAgICAgICAgKlxuICAgICAgICAgKiBAdHlwZSB7T2JqZWN0fVxuICAgICAgICAgKi9cbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtlZXBzIHRyYWNrIG9mIHdoYXQgbGV2ZWwgZWFjaCBzZXF1ZW5jZSBpcyBhdCBzaW5jZSBtdWx0aXBsZVxuICAgICAgICAgKiBzZXF1ZW5jZXMgY2FuIHN0YXJ0IG91dCB3aXRoIHRoZSBzYW1lIHNlcXVlbmNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtPYmplY3R9XG4gICAgICAgICAqL1xuICAgICAgICB2YXIgX3NlcXVlbmNlTGV2ZWxzID0ge307XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHZhcmlhYmxlIHRvIHN0b3JlIHRoZSBzZXRUaW1lb3V0IGNhbGxcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge251bGx8bnVtYmVyfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9yZXNldFRpbWVyO1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiB0ZW1wb3Jhcnkgc3RhdGUgd2hlcmUgd2Ugd2lsbCBpZ25vcmUgdGhlIG5leHQga2V5dXBcbiAgICAgICAgICpcbiAgICAgICAgICogQHR5cGUge2Jvb2xlYW58c3RyaW5nfVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5dXAgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogdGVtcG9yYXJ5IHN0YXRlIHdoZXJlIHdlIHdpbGwgaWdub3JlIHRoZSBuZXh0IGtleXByZXNzXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufVxuICAgICAgICAgKi9cbiAgICAgICAgdmFyIF9pZ25vcmVOZXh0S2V5cHJlc3MgPSBmYWxzZTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogYXJlIHdlIGN1cnJlbnRseSBpbnNpZGUgb2YgYSBzZXF1ZW5jZT9cbiAgICAgICAgICogdHlwZSBvZiBhY3Rpb24gKFwia2V5dXBcIiBvciBcImtleWRvd25cIiBvciBcImtleXByZXNzXCIpIG9yIGZhbHNlXG4gICAgICAgICAqXG4gICAgICAgICAqIEB0eXBlIHtib29sZWFufHN0cmluZ31cbiAgICAgICAgICovXG4gICAgICAgIHZhciBfbmV4dEV4cGVjdGVkQWN0aW9uID0gZmFsc2U7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHJlc2V0cyBhbGwgc2VxdWVuY2UgY291bnRlcnMgZXhjZXB0IGZvciB0aGUgb25lcyBwYXNzZWQgaW5cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtPYmplY3R9IGRvTm90UmVzZXRcbiAgICAgICAgICogQHJldHVybnMgdm9pZFxuICAgICAgICAgKi9cbiAgICAgICAgZnVuY3Rpb24gX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpIHtcbiAgICAgICAgICAgIGRvTm90UmVzZXQgPSBkb05vdFJlc2V0IHx8IHt9O1xuXG4gICAgICAgICAgICB2YXIgYWN0aXZlU2VxdWVuY2VzID0gZmFsc2UsXG4gICAgICAgICAgICAgICAga2V5O1xuXG4gICAgICAgICAgICBmb3IgKGtleSBpbiBfc2VxdWVuY2VMZXZlbHMpIHtcbiAgICAgICAgICAgICAgICBpZiAoZG9Ob3RSZXNldFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGl2ZVNlcXVlbmNlcyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfc2VxdWVuY2VMZXZlbHNba2V5XSA9IDA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghYWN0aXZlU2VxdWVuY2VzKSB7XG4gICAgICAgICAgICAgICAgX25leHRFeHBlY3RlZEFjdGlvbiA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGZpbmRzIGFsbCBjYWxsYmFja3MgdGhhdCBtYXRjaCBiYXNlZCBvbiB0aGUga2V5Y29kZSwgbW9kaWZpZXJzLFxuICAgICAgICAgKiBhbmQgYWN0aW9uXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBjaGFyYWN0ZXJcbiAgICAgICAgICogQHBhcmFtIHtBcnJheX0gbW9kaWZpZXJzXG4gICAgICAgICAqIEBwYXJhbSB7RXZlbnR8T2JqZWN0fSBlXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiB0aGUgc2VxdWVuY2Ugd2UgYXJlIGxvb2tpbmcgZm9yXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gY29tYmluYXRpb25cbiAgICAgICAgICogQHBhcmFtIHtudW1iZXI9fSBsZXZlbFxuICAgICAgICAgKiBAcmV0dXJucyB7QXJyYXl9XG4gICAgICAgICAqL1xuICAgICAgICBmdW5jdGlvbiBfZ2V0TWF0Y2hlcyhjaGFyYWN0ZXIsIG1vZGlmaWVycywgZSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpIHtcbiAgICAgICAgICAgIHZhciBpO1xuICAgICAgICAgICAgdmFyIGNhbGxiYWNrO1xuICAgICAgICAgICAgdmFyIG1hdGNoZXMgPSBbXTtcbiAgICAgICAgICAgIHZhciBhY3Rpb24gPSBlLnR5cGU7XG5cbiAgICAgICAgICAgIC8vIGlmIHRoZXJlIGFyZSBubyBldmVudHMgcmVsYXRlZCB0byB0aGlzIGtleWNvZGVcbiAgICAgICAgICAgIGlmICghc2VsZi5fY2FsbGJhY2tzW2NoYXJhY3Rlcl0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGlmIGEgbW9kaWZpZXIga2V5IGlzIGNvbWluZyB1cCBvbiBpdHMgb3duIHdlIHNob3VsZCBhbGxvdyBpdFxuICAgICAgICAgICAgaWYgKGFjdGlvbiA9PSAna2V5dXAnICYmIF9pc01vZGlmaWVyKGNoYXJhY3RlcikpIHtcbiAgICAgICAgICAgICAgICBtb2RpZmllcnMgPSBbY2hhcmFjdGVyXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gbG9vcCB0aHJvdWdoIGFsbCBjYWxsYmFja3MgZm9yIHRoZSBrZXkgdGhhdCB3YXMgcHJlc3NlZFxuICAgICAgICAgICAgLy8gYW5kIHNlZSBpZiBhbnkgb2YgdGhlbSBtYXRjaFxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgY2FsbGJhY2sgPSBzZWxmLl9jYWxsYmFja3NbY2hhcmFjdGVyXVtpXTtcblxuICAgICAgICAgICAgICAgIC8vIGlmIGEgc2VxdWVuY2UgbmFtZSBpcyBub3Qgc3BlY2lmaWVkLCBidXQgdGhpcyBpcyBhIHNlcXVlbmNlIGF0XG4gICAgICAgICAgICAgICAgLy8gdGhlIHdyb25nIGxldmVsIHRoZW4gbW92ZSBvbnRvIHRoZSBuZXh0IG1hdGNoXG4gICAgICAgICAgICAgICAgaWYgKCFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suc2VxICYmIF9zZXF1ZW5jZUxldmVsc1tjYWxsYmFjay5zZXFdICE9IGNhbGxiYWNrLmxldmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBhY3Rpb24gd2UgYXJlIGxvb2tpbmcgZm9yIGRvZXNuJ3QgbWF0Y2ggdGhlIGFjdGlvbiB3ZSBnb3RcbiAgICAgICAgICAgICAgICAvLyB0aGVuIHdlIHNob3VsZCBrZWVwIGdvaW5nXG4gICAgICAgICAgICAgICAgaWYgKGFjdGlvbiAhPSBjYWxsYmFjay5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gaWYgdGhpcyBpcyBhIGtleXByZXNzIGV2ZW50IGFuZCB0aGUgbWV0YSBrZXkgYW5kIGNvbnRyb2wga2V5XG4gICAgICAgICAgICAgICAgLy8gYXJlIG5vdCBwcmVzc2VkIHRoYXQgbWVhbnMgdGhhdCB3ZSBuZWVkIHRvIG9ubHkgbG9vayBhdCB0aGVcbiAgICAgICAgICAgICAgICAvLyBjaGFyYWN0ZXIsIG90aGVyd2lzZSBjaGVjayB0aGUgbW9kaWZpZXJzIGFzIHdlbGxcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vIGNocm9tZSB3aWxsIG5vdCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBjb250cm9sIGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBzYWZhcmkgd2lsbCBmaXJlIGEga2V5cHJlc3MgaWYgbWV0YSBvciBtZXRhK3NoaWZ0IGlzIGRvd25cbiAgICAgICAgICAgICAgICAvLyBmaXJlZm94IHdpbGwgZmlyZSBhIGtleXByZXNzIGlmIG1ldGEgb3IgY29udHJvbCBpcyBkb3duXG4gICAgICAgICAgICAgICAgaWYgKChhY3Rpb24gPT0gJ2tleXByZXNzJyAmJiAhZS5tZXRhS2V5ICYmICFlLmN0cmxLZXkpIHx8IF9tb2RpZmllcnNNYXRjaChtb2RpZmllcnMsIGNhbGxiYWNrLm1vZGlmaWVycykpIHtcblxuICAgICAgICAgICAgICAgICAgICAvLyB3aGVuIHlvdSBiaW5kIGEgY29tYmluYXRpb24gb3Igc2VxdWVuY2UgYSBzZWNvbmQgdGltZSBpdFxuICAgICAgICAgICAgICAgICAgICAvLyBzaG91bGQgb3ZlcndyaXRlIHRoZSBmaXJzdCBvbmUuICBpZiBhIHNlcXVlbmNlTmFtZSBvclxuICAgICAgICAgICAgICAgICAgICAvLyBjb21iaW5hdGlvbiBpcyBzcGVjaWZpZWQgaW4gdGhpcyBjYWxsIGl0IGRvZXMganVzdCB0aGF0XG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIEB0b2RvIG1ha2UgZGVsZXRpbmcgaXRzIG93biBtZXRob2Q/XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVDb21ibyA9ICFzZXF1ZW5jZU5hbWUgJiYgY2FsbGJhY2suY29tYm8gPT0gY29tYmluYXRpb247XG4gICAgICAgICAgICAgICAgICAgIHZhciBkZWxldGVTZXF1ZW5jZSA9IHNlcXVlbmNlTmFtZSAmJiBjYWxsYmFjay5zZXEgPT0gc2VxdWVuY2VOYW1lICYmIGNhbGxiYWNrLmxldmVsID09IGxldmVsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGVsZXRlQ29tYm8gfHwgZGVsZXRlU2VxdWVuY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGYuX2NhbGxiYWNrc1tjaGFyYWN0ZXJdLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIG1hdGNoZXMucHVzaChjYWxsYmFjayk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbWF0Y2hlcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBhY3R1YWxseSBjYWxscyB0aGUgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgICAgICpcbiAgICAgICAgICogaWYgeW91ciBjYWxsYmFjayBmdW5jdGlvbiByZXR1cm5zIGZhbHNlIHRoaXMgd2lsbCB1c2UgdGhlIGpxdWVyeVxuICAgICAgICAgKiBjb252ZW50aW9uIC0gcHJldmVudCBkZWZhdWx0IGFuZCBzdG9wIHByb3BvZ2F0aW9uIG9uIHRoZSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvLCBzZXF1ZW5jZSkge1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIGV2ZW50IHNob3VsZCBub3QgaGFwcGVuIHN0b3AgaGVyZVxuICAgICAgICAgICAgaWYgKHNlbGYuc3RvcENhbGxiYWNrKGUsIGUudGFyZ2V0IHx8IGUuc3JjRWxlbWVudCwgY29tYm8sIHNlcXVlbmNlKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrKGUsIGNvbWJvKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfcHJldmVudERlZmF1bHQoZSk7XG4gICAgICAgICAgICAgICAgX3N0b3BQcm9wYWdhdGlvbihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEgY2hhcmFjdGVyIGtleSBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ30gY2hhcmFjdGVyXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IG1vZGlmaWVyc1xuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIHNlbGYuX2hhbmRsZUtleSA9IGZ1bmN0aW9uKGNoYXJhY3RlciwgbW9kaWZpZXJzLCBlKSB7XG4gICAgICAgICAgICB2YXIgY2FsbGJhY2tzID0gX2dldE1hdGNoZXMoY2hhcmFjdGVyLCBtb2RpZmllcnMsIGUpO1xuICAgICAgICAgICAgdmFyIGk7XG4gICAgICAgICAgICB2YXIgZG9Ob3RSZXNldCA9IHt9O1xuICAgICAgICAgICAgdmFyIG1heExldmVsID0gMDtcbiAgICAgICAgICAgIHZhciBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vIENhbGN1bGF0ZSB0aGUgbWF4TGV2ZWwgZm9yIHNlcXVlbmNlcyBzbyB3ZSBjYW4gb25seSBleGVjdXRlIHRoZSBsb25nZXN0IGNhbGxiYWNrIHNlcXVlbmNlXG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5zZXEpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4TGV2ZWwgPSBNYXRoLm1heChtYXhMZXZlbCwgY2FsbGJhY2tzW2ldLmxldmVsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGxvb3AgdGhyb3VnaCBtYXRjaGluZyBjYWxsYmFja3MgZm9yIHRoaXMga2V5IGV2ZW50XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgKytpKSB7XG5cbiAgICAgICAgICAgICAgICAvLyBmaXJlIGZvciBhbGwgc2VxdWVuY2UgY2FsbGJhY2tzXG4gICAgICAgICAgICAgICAgLy8gdGhpcyBpcyBiZWNhdXNlIGlmIGZvciBleGFtcGxlIHlvdSBoYXZlIG11bHRpcGxlIHNlcXVlbmNlc1xuICAgICAgICAgICAgICAgIC8vIGJvdW5kIHN1Y2ggYXMgXCJnIGlcIiBhbmQgXCJnIHRcIiB0aGV5IGJvdGggbmVlZCB0byBmaXJlIHRoZVxuICAgICAgICAgICAgICAgIC8vIGNhbGxiYWNrIGZvciBtYXRjaGluZyBnIGNhdXNlIG90aGVyd2lzZSB5b3UgY2FuIG9ubHkgZXZlclxuICAgICAgICAgICAgICAgIC8vIG1hdGNoIHRoZSBmaXJzdCBvbmVcbiAgICAgICAgICAgICAgICBpZiAoY2FsbGJhY2tzW2ldLnNlcSkge1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIG9ubHkgZmlyZSBjYWxsYmFja3MgZm9yIHRoZSBtYXhMZXZlbCB0byBwcmV2ZW50XG4gICAgICAgICAgICAgICAgICAgIC8vIHN1YnNlcXVlbmNlcyBmcm9tIGFsc28gZmlyaW5nXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGZvciBleGFtcGxlICdhIG9wdGlvbiBiJyBzaG91bGQgbm90IGNhdXNlICdvcHRpb24gYicgdG8gZmlyZVxuICAgICAgICAgICAgICAgICAgICAvLyBldmVuIHRob3VnaCAnb3B0aW9uIGInIGlzIHBhcnQgb2YgdGhlIG90aGVyIHNlcXVlbmNlXG4gICAgICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgICAgIC8vIGFueSBzZXF1ZW5jZXMgdGhhdCBkbyBub3QgbWF0Y2ggaGVyZSB3aWxsIGJlIGRpc2NhcmRlZFxuICAgICAgICAgICAgICAgICAgICAvLyBiZWxvdyBieSB0aGUgX3Jlc2V0U2VxdWVuY2VzIGNhbGxcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrc1tpXS5sZXZlbCAhPSBtYXhMZXZlbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBwcm9jZXNzZWRTZXF1ZW5jZUNhbGxiYWNrID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICAvLyBrZWVwIGEgbGlzdCBvZiB3aGljaCBzZXF1ZW5jZXMgd2VyZSBtYXRjaGVzIGZvciBsYXRlclxuICAgICAgICAgICAgICAgICAgICBkb05vdFJlc2V0W2NhbGxiYWNrc1tpXS5zZXFdID0gMTtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibywgY2FsbGJhY2tzW2ldLnNlcSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZXJlIHdlcmUgbm8gc2VxdWVuY2UgbWF0Y2hlcyBidXQgd2UgYXJlIHN0aWxsIGhlcmVcbiAgICAgICAgICAgICAgICAvLyB0aGF0IG1lYW5zIHRoaXMgaXMgYSByZWd1bGFyIG1hdGNoIHNvIHdlIHNob3VsZCBmaXJlIHRoYXRcbiAgICAgICAgICAgICAgICBpZiAoIXByb2Nlc3NlZFNlcXVlbmNlQ2FsbGJhY2spIHtcbiAgICAgICAgICAgICAgICAgICAgX2ZpcmVDYWxsYmFjayhjYWxsYmFja3NbaV0uY2FsbGJhY2ssIGUsIGNhbGxiYWNrc1tpXS5jb21ibyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBpZiB0aGUga2V5IHlvdSBwcmVzc2VkIG1hdGNoZXMgdGhlIHR5cGUgb2Ygc2VxdWVuY2Ugd2l0aG91dFxuICAgICAgICAgICAgLy8gYmVpbmcgYSBtb2RpZmllciAoaWUgXCJrZXl1cFwiIG9yIFwia2V5cHJlc3NcIikgdGhlbiB3ZSBzaG91bGRcbiAgICAgICAgICAgIC8vIHJlc2V0IGFsbCBzZXF1ZW5jZXMgdGhhdCB3ZXJlIG5vdCBtYXRjaGVkIGJ5IHRoaXMgZXZlbnRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIHNvLCBmb3IgZXhhbXBsZSwgaWYgeW91IGhhdmUgdGhlIHNlcXVlbmNlIFwiaCBhIHRcIiBhbmQgeW91XG4gICAgICAgICAgICAvLyB0eXBlIFwiaCBlIGEgciB0XCIgaXQgZG9lcyBub3QgbWF0Y2guICBpbiB0aGlzIGNhc2UgdGhlIFwiZVwiIHdpbGxcbiAgICAgICAgICAgIC8vIGNhdXNlIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIG1vZGlmaWVyIGtleXMgYXJlIGlnbm9yZWQgYmVjYXVzZSB5b3UgY2FuIGhhdmUgYSBzZXF1ZW5jZVxuICAgICAgICAgICAgLy8gdGhhdCBjb250YWlucyBtb2RpZmllcnMgc3VjaCBhcyBcImVudGVyIGN0cmwrc3BhY2VcIiBhbmQgaW4gbW9zdFxuICAgICAgICAgICAgLy8gY2FzZXMgdGhlIG1vZGlmaWVyIGtleSB3aWxsIGJlIHByZXNzZWQgYmVmb3JlIHRoZSBuZXh0IGtleVxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIGFsc28gaWYgeW91IGhhdmUgYSBzZXF1ZW5jZSBzdWNoIGFzIFwiY3RybCtiIGFcIiB0aGVuIHByZXNzaW5nIHRoZVxuICAgICAgICAgICAgLy8gXCJiXCIga2V5IHdpbGwgdHJpZ2dlciBhIFwia2V5cHJlc3NcIiBhbmQgYSBcImtleWRvd25cIlxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHRoZSBcImtleWRvd25cIiBpcyBleHBlY3RlZCB3aGVuIHRoZXJlIGlzIGEgbW9kaWZpZXIsIGJ1dCB0aGVcbiAgICAgICAgICAgIC8vIFwia2V5cHJlc3NcIiBlbmRzIHVwIG1hdGNoaW5nIHRoZSBfbmV4dEV4cGVjdGVkQWN0aW9uIHNpbmNlIGl0IG9jY3Vyc1xuICAgICAgICAgICAgLy8gYWZ0ZXIgYW5kIHRoYXQgY2F1c2VzIHRoZSBzZXF1ZW5jZSB0byByZXNldFxuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vIHdlIGlnbm9yZSBrZXlwcmVzc2VzIGluIGEgc2VxdWVuY2UgdGhhdCBkaXJlY3RseSBmb2xsb3cgYSBrZXlkb3duXG4gICAgICAgICAgICAvLyBmb3IgdGhlIHNhbWUgY2hhcmFjdGVyXG4gICAgICAgICAgICB2YXIgaWdub3JlVGhpc0tleXByZXNzID0gZS50eXBlID09ICdrZXlwcmVzcycgJiYgX2lnbm9yZU5leHRLZXlwcmVzcztcbiAgICAgICAgICAgIGlmIChlLnR5cGUgPT0gX25leHRFeHBlY3RlZEFjdGlvbiAmJiAhX2lzTW9kaWZpZXIoY2hhcmFjdGVyKSAmJiAhaWdub3JlVGhpc0tleXByZXNzKSB7XG4gICAgICAgICAgICAgICAgX3Jlc2V0U2VxdWVuY2VzKGRvTm90UmVzZXQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBfaWdub3JlTmV4dEtleXByZXNzID0gcHJvY2Vzc2VkU2VxdWVuY2VDYWxsYmFjayAmJiBlLnR5cGUgPT0gJ2tleWRvd24nO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBoYW5kbGVzIGEga2V5ZG93biBldmVudFxuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0ge0V2ZW50fSBlXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9oYW5kbGVLZXlFdmVudChlKSB7XG5cbiAgICAgICAgICAgIC8vIG5vcm1hbGl6ZSBlLndoaWNoIGZvciBrZXkgZXZlbnRzXG4gICAgICAgICAgICAvLyBAc2VlIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI4NTYyNy9qYXZhc2NyaXB0LWtleWNvZGUtdnMtY2hhcmNvZGUtdXR0ZXItY29uZnVzaW9uXG4gICAgICAgICAgICBpZiAodHlwZW9mIGUud2hpY2ggIT09ICdudW1iZXInKSB7XG4gICAgICAgICAgICAgICAgZS53aGljaCA9IGUua2V5Q29kZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIGNoYXJhY3RlciA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG5cbiAgICAgICAgICAgIC8vIG5vIGNoYXJhY3RlciBmb3VuZCB0aGVuIHN0b3BcbiAgICAgICAgICAgIGlmICghY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBuZWVkIHRvIHVzZSA9PT0gZm9yIHRoZSBjaGFyYWN0ZXIgY2hlY2sgYmVjYXVzZSB0aGUgY2hhcmFjdGVyIGNhbiBiZSAwXG4gICAgICAgICAgICBpZiAoZS50eXBlID09ICdrZXl1cCcgJiYgX2lnbm9yZU5leHRLZXl1cCA9PT0gY2hhcmFjdGVyKSB7XG4gICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgc2VsZi5oYW5kbGVLZXkoY2hhcmFjdGVyLCBfZXZlbnRNb2RpZmllcnMoZSksIGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIGNhbGxlZCB0byBzZXQgYSAxIHNlY29uZCB0aW1lb3V0IG9uIHRoZSBzcGVjaWZpZWQgc2VxdWVuY2VcbiAgICAgICAgICpcbiAgICAgICAgICogdGhpcyBpcyBzbyBhZnRlciBlYWNoIGtleSBwcmVzcyBpbiB0aGUgc2VxdWVuY2UgeW91IGhhdmUgMSBzZWNvbmRcbiAgICAgICAgICogdG8gcHJlc3MgdGhlIG5leHQga2V5IGJlZm9yZSB5b3UgaGF2ZSB0byBzdGFydCBvdmVyXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9yZXNldFNlcXVlbmNlVGltZXIoKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoX3Jlc2V0VGltZXIpO1xuICAgICAgICAgICAgX3Jlc2V0VGltZXIgPSBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBrZXkgc2VxdWVuY2UgdG8gYW4gZXZlbnRcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJvIC0gY29tYm8gc3BlY2lmaWVkIGluIGJpbmQgY2FsbFxuICAgICAgICAgKiBAcGFyYW0ge0FycmF5fSBrZXlzXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2VxdWVuY2UoY29tYm8sIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcblxuICAgICAgICAgICAgLy8gc3RhcnQgb2ZmIGJ5IGFkZGluZyBhIHNlcXVlbmNlIGxldmVsIHJlY29yZCBmb3IgdGhpcyBjb21iaW5hdGlvblxuICAgICAgICAgICAgLy8gYW5kIHNldHRpbmcgdGhlIGxldmVsIHRvIDBcbiAgICAgICAgICAgIF9zZXF1ZW5jZUxldmVsc1tjb21ib10gPSAwO1xuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIGNhbGxiYWNrIHRvIGluY3JlYXNlIHRoZSBzZXF1ZW5jZSBsZXZlbCBmb3IgdGhpcyBzZXF1ZW5jZSBhbmQgcmVzZXRcbiAgICAgICAgICAgICAqIGFsbCBvdGhlciBzZXF1ZW5jZXMgdGhhdCB3ZXJlIGFjdGl2ZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuZXh0QWN0aW9uXG4gICAgICAgICAgICAgKiBAcmV0dXJucyB7RnVuY3Rpb259XG4gICAgICAgICAgICAgKi9cbiAgICAgICAgICAgIGZ1bmN0aW9uIF9pbmNyZWFzZVNlcXVlbmNlKG5leHRBY3Rpb24pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIF9uZXh0RXhwZWN0ZWRBY3Rpb24gPSBuZXh0QWN0aW9uO1xuICAgICAgICAgICAgICAgICAgICArK19zZXF1ZW5jZUxldmVsc1tjb21ib107XG4gICAgICAgICAgICAgICAgICAgIF9yZXNldFNlcXVlbmNlVGltZXIoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIHdyYXBzIHRoZSBzcGVjaWZpZWQgY2FsbGJhY2sgaW5zaWRlIG9mIGFub3RoZXIgZnVuY3Rpb24gaW4gb3JkZXJcbiAgICAgICAgICAgICAqIHRvIHJlc2V0IGFsbCBzZXF1ZW5jZSBjb3VudGVycyBhcyBzb29uIGFzIHRoaXMgc2VxdWVuY2UgaXMgZG9uZVxuICAgICAgICAgICAgICpcbiAgICAgICAgICAgICAqIEBwYXJhbSB7RXZlbnR9IGVcbiAgICAgICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgZnVuY3Rpb24gX2NhbGxiYWNrQW5kUmVzZXQoZSkge1xuICAgICAgICAgICAgICAgIF9maXJlQ2FsbGJhY2soY2FsbGJhY2ssIGUsIGNvbWJvKTtcblxuICAgICAgICAgICAgICAgIC8vIHdlIHNob3VsZCBpZ25vcmUgdGhlIG5leHQga2V5IHVwIGlmIHRoZSBhY3Rpb24gaXMga2V5IGRvd25cbiAgICAgICAgICAgICAgICAvLyBvciBrZXlwcmVzcy4gIHRoaXMgaXMgc28gaWYgeW91IGZpbmlzaCBhIHNlcXVlbmNlIGFuZFxuICAgICAgICAgICAgICAgIC8vIHJlbGVhc2UgdGhlIGtleSB0aGUgZmluYWwga2V5IHdpbGwgbm90IHRyaWdnZXIgYSBrZXl1cFxuICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gIT09ICdrZXl1cCcpIHtcbiAgICAgICAgICAgICAgICAgICAgX2lnbm9yZU5leHRLZXl1cCA9IF9jaGFyYWN0ZXJGcm9tRXZlbnQoZSk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLy8gd2VpcmQgcmFjZSBjb25kaXRpb24gaWYgYSBzZXF1ZW5jZSBlbmRzIHdpdGggdGhlIGtleVxuICAgICAgICAgICAgICAgIC8vIGFub3RoZXIgc2VxdWVuY2UgYmVnaW5zIHdpdGhcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KF9yZXNldFNlcXVlbmNlcywgMTApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBsb29wIHRocm91Z2gga2V5cyBvbmUgYXQgYSB0aW1lIGFuZCBiaW5kIHRoZSBhcHByb3ByaWF0ZSBjYWxsYmFja1xuICAgICAgICAgICAgLy8gZnVuY3Rpb24uICBmb3IgYW55IGtleSBsZWFkaW5nIHVwIHRvIHRoZSBmaW5hbCBvbmUgaXQgc2hvdWxkXG4gICAgICAgICAgICAvLyBpbmNyZWFzZSB0aGUgc2VxdWVuY2UuIGFmdGVyIHRoZSBmaW5hbCwgaXQgc2hvdWxkIHJlc2V0IGFsbCBzZXF1ZW5jZXNcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyBpZiBhbiBhY3Rpb24gaXMgc3BlY2lmaWVkIGluIHRoZSBvcmlnaW5hbCBiaW5kIGNhbGwgdGhlbiB0aGF0IHdpbGxcbiAgICAgICAgICAgIC8vIGJlIHVzZWQgdGhyb3VnaG91dC4gIG90aGVyd2lzZSB3ZSB3aWxsIHBhc3MgdGhlIGFjdGlvbiB0aGF0IHRoZVxuICAgICAgICAgICAgLy8gbmV4dCBrZXkgaW4gdGhlIHNlcXVlbmNlIHNob3VsZCBtYXRjaC4gIHRoaXMgYWxsb3dzIGEgc2VxdWVuY2VcbiAgICAgICAgICAgIC8vIHRvIG1peCBhbmQgbWF0Y2gga2V5cHJlc3MgYW5kIGtleWRvd24gZXZlbnRzIGRlcGVuZGluZyBvbiB3aGljaFxuICAgICAgICAgICAgLy8gb25lcyBhcmUgYmV0dGVyIHN1aXRlZCB0byB0aGUga2V5IHByb3ZpZGVkXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgICAgICB2YXIgaXNGaW5hbCA9IGkgKyAxID09PSBrZXlzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICB2YXIgd3JhcHBlZENhbGxiYWNrID0gaXNGaW5hbCA/IF9jYWxsYmFja0FuZFJlc2V0IDogX2luY3JlYXNlU2VxdWVuY2UoYWN0aW9uIHx8IF9nZXRLZXlJbmZvKGtleXNbaSArIDFdKS5hY3Rpb24pO1xuICAgICAgICAgICAgICAgIF9iaW5kU2luZ2xlKGtleXNbaV0sIHdyYXBwZWRDYWxsYmFjaywgYWN0aW9uLCBjb21ibywgaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgYSBzaW5nbGUga2V5Ym9hcmQgY29tYmluYXRpb25cbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtIHtzdHJpbmd9IGNvbWJpbmF0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gc2VxdWVuY2VOYW1lIC0gbmFtZSBvZiBzZXF1ZW5jZSBpZiBwYXJ0IG9mIHNlcXVlbmNlXG4gICAgICAgICAqIEBwYXJhbSB7bnVtYmVyPX0gbGV2ZWwgLSB3aGF0IHBhcnQgb2YgdGhlIHNlcXVlbmNlIHRoZSBjb21tYW5kIGlzXG4gICAgICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgICAgICovXG4gICAgICAgIGZ1bmN0aW9uIF9iaW5kU2luZ2xlKGNvbWJpbmF0aW9uLCBjYWxsYmFjaywgYWN0aW9uLCBzZXF1ZW5jZU5hbWUsIGxldmVsKSB7XG5cbiAgICAgICAgICAgIC8vIHN0b3JlIGEgZGlyZWN0IG1hcHBlZCByZWZlcmVuY2UgZm9yIHVzZSB3aXRoIE1vdXNldHJhcC50cmlnZ2VyXG4gICAgICAgICAgICBzZWxmLl9kaXJlY3RNYXBbY29tYmluYXRpb24gKyAnOicgKyBhY3Rpb25dID0gY2FsbGJhY2s7XG5cbiAgICAgICAgICAgIC8vIG1ha2Ugc3VyZSBtdWx0aXBsZSBzcGFjZXMgaW4gYSByb3cgYmVjb21lIGEgc2luZ2xlIHNwYWNlXG4gICAgICAgICAgICBjb21iaW5hdGlvbiA9IGNvbWJpbmF0aW9uLnJlcGxhY2UoL1xccysvZywgJyAnKTtcblxuICAgICAgICAgICAgdmFyIHNlcXVlbmNlID0gY29tYmluYXRpb24uc3BsaXQoJyAnKTtcbiAgICAgICAgICAgIHZhciBpbmZvO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGlzIHBhdHRlcm4gaXMgYSBzZXF1ZW5jZSBvZiBrZXlzIHRoZW4gcnVuIHRocm91Z2ggdGhpcyBtZXRob2RcbiAgICAgICAgICAgIC8vIHRvIHJlcHJvY2VzcyBlYWNoIHBhdHRlcm4gb25lIGtleSBhdCBhIHRpbWVcbiAgICAgICAgICAgIGlmIChzZXF1ZW5jZS5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTZXF1ZW5jZShjb21iaW5hdGlvbiwgc2VxdWVuY2UsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaW5mbyA9IF9nZXRLZXlJbmZvKGNvbWJpbmF0aW9uLCBhY3Rpb24pO1xuXG4gICAgICAgICAgICAvLyBtYWtlIHN1cmUgdG8gaW5pdGlhbGl6ZSBhcnJheSBpZiB0aGlzIGlzIHRoZSBmaXJzdCB0aW1lXG4gICAgICAgICAgICAvLyBhIGNhbGxiYWNrIGlzIGFkZGVkIGZvciB0aGlzIGtleVxuICAgICAgICAgICAgc2VsZi5fY2FsbGJhY2tzW2luZm8ua2V5XSA9IHNlbGYuX2NhbGxiYWNrc1tpbmZvLmtleV0gfHwgW107XG5cbiAgICAgICAgICAgIC8vIHJlbW92ZSBhbiBleGlzdGluZyBtYXRjaCBpZiB0aGVyZSBpcyBvbmVcbiAgICAgICAgICAgIF9nZXRNYXRjaGVzKGluZm8ua2V5LCBpbmZvLm1vZGlmaWVycywge3R5cGU6IGluZm8uYWN0aW9ufSwgc2VxdWVuY2VOYW1lLCBjb21iaW5hdGlvbiwgbGV2ZWwpO1xuXG4gICAgICAgICAgICAvLyBhZGQgdGhpcyBjYWxsIGJhY2sgdG8gdGhlIGFycmF5XG4gICAgICAgICAgICAvLyBpZiBpdCBpcyBhIHNlcXVlbmNlIHB1dCBpdCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBpZiBub3QgcHV0IGl0IGF0IHRoZSBlbmRcbiAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAvLyB0aGlzIGlzIGltcG9ydGFudCBiZWNhdXNlIHRoZSB3YXkgdGhlc2UgYXJlIHByb2Nlc3NlZCBleHBlY3RzXG4gICAgICAgICAgICAvLyB0aGUgc2VxdWVuY2Ugb25lcyB0byBjb21lIGZpcnN0XG4gICAgICAgICAgICBzZWxmLl9jYWxsYmFja3NbaW5mby5rZXldW3NlcXVlbmNlTmFtZSA/ICd1bnNoaWZ0JyA6ICdwdXNoJ10oe1xuICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBjYWxsYmFjayxcbiAgICAgICAgICAgICAgICBtb2RpZmllcnM6IGluZm8ubW9kaWZpZXJzLFxuICAgICAgICAgICAgICAgIGFjdGlvbjogaW5mby5hY3Rpb24sXG4gICAgICAgICAgICAgICAgc2VxOiBzZXF1ZW5jZU5hbWUsXG4gICAgICAgICAgICAgICAgbGV2ZWw6IGxldmVsLFxuICAgICAgICAgICAgICAgIGNvbWJvOiBjb21iaW5hdGlvblxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogYmluZHMgbXVsdGlwbGUgY29tYmluYXRpb25zIHRvIHRoZSBzYW1lIGNhbGxiYWNrXG4gICAgICAgICAqXG4gICAgICAgICAqIEBwYXJhbSB7QXJyYXl9IGNvbWJpbmF0aW9uc1xuICAgICAgICAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAgICAgKiBAcGFyYW0ge3N0cmluZ3x1bmRlZmluZWR9IGFjdGlvblxuICAgICAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICAgICAqL1xuICAgICAgICBzZWxmLl9iaW5kTXVsdGlwbGUgPSBmdW5jdGlvbihjb21iaW5hdGlvbnMsIGNhbGxiYWNrLCBhY3Rpb24pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tYmluYXRpb25zLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICAgICAgX2JpbmRTaW5nbGUoY29tYmluYXRpb25zW2ldLCBjYWxsYmFjaywgYWN0aW9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdGFydCFcbiAgICAgICAgX2FkZEV2ZW50KHRhcmdldEVsZW1lbnQsICdrZXlwcmVzcycsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5ZG93bicsIF9oYW5kbGVLZXlFdmVudCk7XG4gICAgICAgIF9hZGRFdmVudCh0YXJnZXRFbGVtZW50LCAna2V5dXAnLCBfaGFuZGxlS2V5RXZlbnQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJpbmRzIGFuIGV2ZW50IHRvIG1vdXNldHJhcFxuICAgICAqXG4gICAgICogY2FuIGJlIGEgc2luZ2xlIGtleSwgYSBjb21iaW5hdGlvbiBvZiBrZXlzIHNlcGFyYXRlZCB3aXRoICssXG4gICAgICogYW4gYXJyYXkgb2Yga2V5cywgb3IgYSBzZXF1ZW5jZSBvZiBrZXlzIHNlcGFyYXRlZCBieSBzcGFjZXNcbiAgICAgKlxuICAgICAqIGJlIHN1cmUgdG8gbGlzdCB0aGUgbW9kaWZpZXIga2V5cyBmaXJzdCB0byBtYWtlIHN1cmUgdGhhdCB0aGVcbiAgICAgKiBjb3JyZWN0IGtleSBlbmRzIHVwIGdldHRpbmcgYm91bmQgKHRoZSBsYXN0IGtleSBpbiB0aGUgcGF0dGVybilcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfEFycmF5fSBrZXlzXG4gICAgICogQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGFjdGlvbiAtICdrZXlwcmVzcycsICdrZXlkb3duJywgb3IgJ2tleXVwJ1xuICAgICAqIEByZXR1cm5zIHZvaWRcbiAgICAgKi9cbiAgICBNb3VzZXRyYXAucHJvdG90eXBlLmJpbmQgPSBmdW5jdGlvbihrZXlzLCBjYWxsYmFjaywgYWN0aW9uKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAga2V5cyA9IGtleXMgaW5zdGFuY2VvZiBBcnJheSA/IGtleXMgOiBba2V5c107XG4gICAgICAgIHNlbGYuX2JpbmRNdWx0aXBsZS5jYWxsKHNlbGYsIGtleXMsIGNhbGxiYWNrLCBhY3Rpb24pO1xuICAgICAgICByZXR1cm4gc2VsZjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdW5iaW5kcyBhbiBldmVudCB0byBtb3VzZXRyYXBcbiAgICAgKlxuICAgICAqIHRoZSB1bmJpbmRpbmcgc2V0cyB0aGUgY2FsbGJhY2sgZnVuY3Rpb24gb2YgdGhlIHNwZWNpZmllZCBrZXkgY29tYm9cbiAgICAgKiB0byBhbiBlbXB0eSBmdW5jdGlvbiBhbmQgZGVsZXRlcyB0aGUgY29ycmVzcG9uZGluZyBrZXkgaW4gdGhlXG4gICAgICogX2RpcmVjdE1hcCBkaWN0LlxuICAgICAqXG4gICAgICogVE9ETzogYWN0dWFsbHkgcmVtb3ZlIHRoaXMgZnJvbSB0aGUgX2NhbGxiYWNrcyBkaWN0aW9uYXJ5IGluc3RlYWRcbiAgICAgKiBvZiBiaW5kaW5nIGFuIGVtcHR5IGZ1bmN0aW9uXG4gICAgICpcbiAgICAgKiB0aGUga2V5Y29tYm8rYWN0aW9uIGhhcyB0byBiZSBleGFjdGx5IHRoZSBzYW1lIGFzXG4gICAgICogaXQgd2FzIGRlZmluZWQgaW4gdGhlIGJpbmQgbWV0aG9kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ3xBcnJheX0ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBhY3Rpb25cbiAgICAgKiBAcmV0dXJucyB2b2lkXG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS51bmJpbmQgPSBmdW5jdGlvbihrZXlzLCBhY3Rpb24pIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICByZXR1cm4gc2VsZi5iaW5kLmNhbGwoc2VsZiwga2V5cywgZnVuY3Rpb24oKSB7fSwgYWN0aW9uKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogdHJpZ2dlcnMgYW4gZXZlbnQgdGhhdCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kXG4gICAgICpcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30ga2V5c1xuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gYWN0aW9uXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUudHJpZ2dlciA9IGZ1bmN0aW9uKGtleXMsIGFjdGlvbikge1xuICAgICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICAgIGlmIChzZWxmLl9kaXJlY3RNYXBba2V5cyArICc6JyArIGFjdGlvbl0pIHtcbiAgICAgICAgICAgIHNlbGYuX2RpcmVjdE1hcFtrZXlzICsgJzonICsgYWN0aW9uXSh7fSwga2V5cyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlbGY7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIHJlc2V0cyB0aGUgbGlicmFyeSBiYWNrIHRvIGl0cyBpbml0aWFsIHN0YXRlLiAgdGhpcyBpcyB1c2VmdWxcbiAgICAgKiBpZiB5b3Ugd2FudCB0byBjbGVhciBvdXQgdGhlIGN1cnJlbnQga2V5Ym9hcmQgc2hvcnRjdXRzIGFuZCBiaW5kXG4gICAgICogbmV3IG9uZXMgLSBmb3IgZXhhbXBsZSBpZiB5b3Ugc3dpdGNoIHRvIGFub3RoZXIgcGFnZVxuICAgICAqXG4gICAgICogQHJldHVybnMgdm9pZFxuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUucmVzZXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgICAgICBzZWxmLl9jYWxsYmFja3MgPSB7fTtcbiAgICAgICAgc2VsZi5fZGlyZWN0TWFwID0ge307XG4gICAgICAgIHJldHVybiBzZWxmO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBzaG91bGQgd2Ugc3RvcCB0aGlzIGV2ZW50IGJlZm9yZSBmaXJpbmcgb2ZmIGNhbGxiYWNrc1xuICAgICAqXG4gICAgICogQHBhcmFtIHtFdmVudH0gZVxuICAgICAqIEBwYXJhbSB7RWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAgICovXG4gICAgTW91c2V0cmFwLnByb3RvdHlwZS5zdG9wQ2FsbGJhY2sgPSBmdW5jdGlvbihlLCBlbGVtZW50KSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcblxuICAgICAgICAvLyBpZiB0aGUgZWxlbWVudCBoYXMgdGhlIGNsYXNzIFwibW91c2V0cmFwXCIgdGhlbiBubyBuZWVkIHRvIHN0b3BcbiAgICAgICAgaWYgKCgnICcgKyBlbGVtZW50LmNsYXNzTmFtZSArICcgJykuaW5kZXhPZignIG1vdXNldHJhcCAnKSA+IC0xKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoX2JlbG9uZ3NUbyhlbGVtZW50LCBzZWxmLnRhcmdldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHN0b3AgZm9yIGlucHV0LCBzZWxlY3QsIGFuZCB0ZXh0YXJlYVxuICAgICAgICByZXR1cm4gZWxlbWVudC50YWdOYW1lID09ICdJTlBVVCcgfHwgZWxlbWVudC50YWdOYW1lID09ICdTRUxFQ1QnIHx8IGVsZW1lbnQudGFnTmFtZSA9PSAnVEVYVEFSRUEnIHx8IGVsZW1lbnQuaXNDb250ZW50RWRpdGFibGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIGV4cG9zZXMgX2hhbmRsZUtleSBwdWJsaWNseSBzbyBpdCBjYW4gYmUgb3ZlcndyaXR0ZW4gYnkgZXh0ZW5zaW9uc1xuICAgICAqL1xuICAgIE1vdXNldHJhcC5wcm90b3R5cGUuaGFuZGxlS2V5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgICAgcmV0dXJuIHNlbGYuX2hhbmRsZUtleS5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBhbGxvdyBjdXN0b20ga2V5IG1hcHBpbmdzXG4gICAgICovXG4gICAgTW91c2V0cmFwLmFkZEtleWNvZGVzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICAgIGlmIChvYmplY3QuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgICAgICAgIF9NQVBba2V5XSA9IG9iamVjdFtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9SRVZFUlNFX01BUCA9IG51bGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluaXQgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zXG4gICAgICpcbiAgICAgKiBUaGlzIG1ldGhvZCBpcyBuZWVkZWQgdG8gYWxsb3cgdGhlIGdsb2JhbCBtb3VzZXRyYXAgZnVuY3Rpb25zIHRvIHdvcmtcbiAgICAgKiBub3cgdGhhdCBtb3VzZXRyYXAgaXMgYSBjb25zdHJ1Y3RvciBmdW5jdGlvbi5cbiAgICAgKi9cbiAgICBNb3VzZXRyYXAuaW5pdCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgZG9jdW1lbnRNb3VzZXRyYXAgPSBNb3VzZXRyYXAoZG9jdW1lbnQpO1xuICAgICAgICBmb3IgKHZhciBtZXRob2QgaW4gZG9jdW1lbnRNb3VzZXRyYXApIHtcbiAgICAgICAgICAgIGlmIChtZXRob2QuY2hhckF0KDApICE9PSAnXycpIHtcbiAgICAgICAgICAgICAgICBNb3VzZXRyYXBbbWV0aG9kXSA9IChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRvY3VtZW50TW91c2V0cmFwW21ldGhvZF0uYXBwbHkoZG9jdW1lbnRNb3VzZXRyYXAsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSAobWV0aG9kKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgTW91c2V0cmFwLmluaXQoKTtcblxuICAgIC8vIGV4cG9zZSBtb3VzZXRyYXAgdG8gdGhlIGdsb2JhbCBvYmplY3RcbiAgICB3aW5kb3cuTW91c2V0cmFwID0gTW91c2V0cmFwO1xuXG4gICAgLy8gZXhwb3NlIGFzIGEgY29tbW9uIGpzIG1vZHVsZVxuICAgIGlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiBtb2R1bGUuZXhwb3J0cykge1xuICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IE1vdXNldHJhcDtcbiAgICB9XG5cbiAgICAvLyBleHBvc2UgbW91c2V0cmFwIGFzIGFuIEFNRCBtb2R1bGVcbiAgICBpZiAodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKSB7XG4gICAgICAgIGRlZmluZShmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHJldHVybiBNb3VzZXRyYXA7XG4gICAgICAgIH0pO1xuICAgIH1cbn0pICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IG51bGwsIHR5cGVvZiAgd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IGRvY3VtZW50IDogbnVsbCk7XG5cbi8vIGx1aG4gZXh0cmEgdmFsaWRhdG9yc1xud2luZG93LlBhcnNsZXlDb25maWcgPSB3aW5kb3cuUGFyc2xleUNvbmZpZyB8fCB7fTtcbndpbmRvdy5QYXJzbGV5Q29uZmlnLnZhbGlkYXRvcnMgPSB3aW5kb3cuUGFyc2xleUNvbmZpZy52YWxpZGF0b3JzIHx8IHt9O1xuXG53aW5kb3cuUGFyc2xleUNvbmZpZy52YWxpZGF0b3JzLmx1aG4gPSB7XG4gIGZuOiBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICB2YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL1sgLV0vZywgJycpO1xuICAgIHZhciBkaWdpdDtcbiAgICB2YXIgbjtcbiAgICB2YXIgX2o7XG4gICAgdmFyIF9sZW4xO1xuICAgIHZhciBfcmVmMjtcbiAgICB2YXIgc3VtID0gMDtcbiAgICBfcmVmMiA9IHZhbHVlLnNwbGl0KCcnKS5yZXZlcnNlKCk7XG4gICAgZm9yIChuID0gX2ogPSAwLCBfbGVuMSA9IF9yZWYyLmxlbmd0aDsgX2ogPCBfbGVuMTsgbiA9ICsrX2opIHtcbiAgICAgIGRpZ2l0ID0gX3JlZjJbbl07XG4gICAgICBkaWdpdCA9ICtkaWdpdDtcbiAgICAgIGlmIChuICUgMikge1xuICAgICAgICBkaWdpdCAqPSAyO1xuICAgICAgICBpZiAoZGlnaXQgPCAxMCkge1xuICAgICAgICAgIHN1bSArPSBkaWdpdDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdW0gKz0gZGlnaXQgLSA5O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdW0gKz0gZGlnaXQ7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBzdW0gJSAxMCA9PT0gMDtcbiAgfSxcbiAgcHJpb3JpdHk6IDMyXG59O1xuXG4vKiFcbiogUGFyc2xleS5qc1xuKiBWZXJzaW9uIDIuOC4xIC0gYnVpbHQgU2F0LCBGZWIgM3JkIDIwMTgsIDI6MjcgcG1cbiogaHR0cDovL3BhcnNsZXlqcy5vcmdcbiogR3VpbGxhdW1lIFBvdGllciAtIDxndWlsbGF1bWVAd2lzZW1ibHkuY29tPlxuKiBNYXJjLUFuZHJlIExhZm9ydHVuZSAtIDxwZXRyb3NlbGludW1AbWFyYy1hbmRyZS5jYT5cbiogTUlUIExpY2Vuc2VkXG4qL1xuXG4vLyBUaGUgc291cmNlIGNvZGUgYmVsb3cgaXMgZ2VuZXJhdGVkIGJ5IGJhYmVsIGFzXG4vLyBQYXJzbGV5IGlzIHdyaXR0ZW4gaW4gRUNNQVNjcmlwdCA2XG4vL1xudmFyIF9zbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcblxudmFyIF9zbGljZWRUb0FycmF5ID0gKGZ1bmN0aW9uICgpIHsgZnVuY3Rpb24gc2xpY2VJdGVyYXRvcihhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbJ3JldHVybiddKSBfaVsncmV0dXJuJ10oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9IHJldHVybiBmdW5jdGlvbiAoYXJyLCBpKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHsgcmV0dXJuIGFycjsgfSBlbHNlIGlmIChTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGFycikpIHsgcmV0dXJuIHNsaWNlSXRlcmF0b3IoYXJyLCBpKTsgfSBlbHNlIHsgdGhyb3cgbmV3IFR5cGVFcnJvcignSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZScpOyB9IH07IH0pKCk7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgeyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IEFycmF5KGFyci5sZW5ndGgpOyBpIDwgYXJyLmxlbmd0aDsgaSsrKSBhcnIyW2ldID0gYXJyW2ldOyByZXR1cm4gYXJyMjsgfSBlbHNlIHsgcmV0dXJuIEFycmF5LmZyb20oYXJyKTsgfSB9XG5cbihmdW5jdGlvbiAoZ2xvYmFsLCBmYWN0b3J5KSB7XG4gIHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyA/IG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSkgOiB0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQgPyBkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSkgOiBnbG9iYWwucGFyc2xleSA9IGZhY3RvcnkoZ2xvYmFsLmpRdWVyeSk7XG59KSh0aGlzLCBmdW5jdGlvbiAoJCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIGdsb2JhbElEID0gMTtcbiAgdmFyIHBhc3RXYXJuaW5ncyA9IHt9O1xuXG4gIHZhciBVdGlscyA9IHtcbiAgICAvLyBQYXJzbGV5IERPTS1BUElcbiAgICAvLyByZXR1cm5zIG9iamVjdCBmcm9tIGRvbSBhdHRyaWJ1dGVzIGFuZCB2YWx1ZXNcbiAgICBhdHRyOiBmdW5jdGlvbiBhdHRyKGVsZW1lbnQsIG5hbWVzcGFjZSwgb2JqKSB7XG4gICAgICB2YXIgaTtcbiAgICAgIHZhciBhdHRyaWJ1dGU7XG4gICAgICB2YXIgYXR0cmlidXRlcztcbiAgICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJ14nICsgbmFtZXNwYWNlLCAnaScpO1xuXG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBvYmopIG9iaiA9IHt9O2Vsc2Uge1xuICAgICAgICAvLyBDbGVhciBhbGwgb3duIHByb3BlcnRpZXMuIFRoaXMgd29uJ3QgYWZmZWN0IHByb3RvdHlwZSdzIHZhbHVlc1xuICAgICAgICBmb3IgKGkgaW4gb2JqKSB7XG4gICAgICAgICAgaWYgKG9iai5oYXNPd25Qcm9wZXJ0eShpKSkgZGVsZXRlIG9ialtpXTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoIWVsZW1lbnQpIHJldHVybiBvYmo7XG5cbiAgICAgIGF0dHJpYnV0ZXMgPSBlbGVtZW50LmF0dHJpYnV0ZXM7XG4gICAgICBmb3IgKGkgPSBhdHRyaWJ1dGVzLmxlbmd0aDsgaS0tOykge1xuICAgICAgICBhdHRyaWJ1dGUgPSBhdHRyaWJ1dGVzW2ldO1xuXG4gICAgICAgIGlmIChhdHRyaWJ1dGUgJiYgYXR0cmlidXRlLnNwZWNpZmllZCAmJiByZWdleC50ZXN0KGF0dHJpYnV0ZS5uYW1lKSkge1xuICAgICAgICAgIG9ialt0aGlzLmNhbWVsaXplKGF0dHJpYnV0ZS5uYW1lLnNsaWNlKG5hbWVzcGFjZS5sZW5ndGgpKV0gPSB0aGlzLmRlc2VyaWFsaXplVmFsdWUoYXR0cmlidXRlLnZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG5cbiAgICBjaGVja0F0dHI6IGZ1bmN0aW9uIGNoZWNrQXR0cihlbGVtZW50LCBuYW1lc3BhY2UsIF9jaGVja0F0dHIpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lmhhc0F0dHJpYnV0ZShuYW1lc3BhY2UgKyBfY2hlY2tBdHRyKTtcbiAgICB9LFxuXG4gICAgc2V0QXR0cjogZnVuY3Rpb24gc2V0QXR0cihlbGVtZW50LCBuYW1lc3BhY2UsIGF0dHIsIHZhbHVlKSB7XG4gICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSh0aGlzLmRhc2hlcml6ZShuYW1lc3BhY2UgKyBhdHRyKSwgU3RyaW5nKHZhbHVlKSk7XG4gICAgfSxcblxuICAgIGdldFR5cGU6IGZ1bmN0aW9uIGdldFR5cGUoZWxlbWVudCkge1xuICAgICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJ3RleHQnO1xuICAgIH0sXG5cbiAgICBnZW5lcmF0ZUlEOiBmdW5jdGlvbiBnZW5lcmF0ZUlEKCkge1xuICAgICAgcmV0dXJuICcnICsgZ2xvYmFsSUQrKztcbiAgICB9LFxuXG4gICAgLyoqIFRoaXJkIHBhcnR5IGZ1bmN0aW9ucyAqKi9cbiAgICBkZXNlcmlhbGl6ZVZhbHVlOiBmdW5jdGlvbiBkZXNlcmlhbGl6ZVZhbHVlKHZhbHVlKSB7XG4gICAgICB2YXIgbnVtO1xuXG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gdmFsdWUgPyB2YWx1ZSA9PSBcInRydWVcIiB8fCAodmFsdWUgPT0gXCJmYWxzZVwiID8gZmFsc2UgOiB2YWx1ZSA9PSBcIm51bGxcIiA/IG51bGwgOiAhaXNOYU4obnVtID0gTnVtYmVyKHZhbHVlKSkgPyBudW0gOiAvXltcXFtcXHtdLy50ZXN0KHZhbHVlKSA/IEpTT04ucGFyc2UodmFsdWUpIDogdmFsdWUpIDogdmFsdWU7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gWmVwdG8gY2FtZWxpemUgZnVuY3Rpb25cbiAgICBjYW1lbGl6ZTogZnVuY3Rpb24gY2FtZWxpemUoc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLy0rKC4pPy9nLCBmdW5jdGlvbiAobWF0Y2gsIGNocikge1xuICAgICAgICByZXR1cm4gY2hyID8gY2hyLnRvVXBwZXJDYXNlKCkgOiAnJztcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBaZXB0byBkYXNoZXJpemUgZnVuY3Rpb25cbiAgICBkYXNoZXJpemU6IGZ1bmN0aW9uIGRhc2hlcml6ZShzdHIpIHtcbiAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvOjovZywgJy8nKS5yZXBsYWNlKC8oW0EtWl0rKShbQS1aXVthLXpdKS9nLCAnJDFfJDInKS5yZXBsYWNlKC8oW2EtelxcZF0pKFtBLVpdKS9nLCAnJDFfJDInKS5yZXBsYWNlKC9fL2csICctJykudG9Mb3dlckNhc2UoKTtcbiAgICB9LFxuXG4gICAgd2FybjogZnVuY3Rpb24gd2FybigpIHtcbiAgICAgIHZhciBfd2luZG93JGNvbnNvbGU7XG5cbiAgICAgIGlmICh3aW5kb3cuY29uc29sZSAmJiAnZnVuY3Rpb24nID09PSB0eXBlb2Ygd2luZG93LmNvbnNvbGUud2FybikgKF93aW5kb3ckY29uc29sZSA9IHdpbmRvdy5jb25zb2xlKS53YXJuLmFwcGx5KF93aW5kb3ckY29uc29sZSwgYXJndW1lbnRzKTtcbiAgICB9LFxuXG4gICAgd2Fybk9uY2U6IGZ1bmN0aW9uIHdhcm5PbmNlKG1zZykge1xuICAgICAgaWYgKCFwYXN0V2FybmluZ3NbbXNnXSkge1xuICAgICAgICBwYXN0V2FybmluZ3NbbXNnXSA9IHRydWU7XG4gICAgICAgIHRoaXMud2Fybi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfcmVzZXRXYXJuaW5nczogZnVuY3Rpb24gX3Jlc2V0V2FybmluZ3MoKSB7XG4gICAgICBwYXN0V2FybmluZ3MgPSB7fTtcbiAgICB9LFxuXG4gICAgdHJpbVN0cmluZzogZnVuY3Rpb24gdHJpbVN0cmluZyhzdHJpbmcpIHtcbiAgICAgIHJldHVybiBzdHJpbmcucmVwbGFjZSgvXlxccyt8XFxzKyQvZywgJycpO1xuICAgIH0sXG5cbiAgICBwYXJzZToge1xuICAgICAgZGF0ZTogZnVuY3Rpb24gZGF0ZShzdHJpbmcpIHtcbiAgICAgICAgdmFyIHBhcnNlZCA9IHN0cmluZy5tYXRjaCgvXihcXGR7NCx9KS0oXFxkXFxkKS0oXFxkXFxkKSQvKTtcbiAgICAgICAgaWYgKCFwYXJzZWQpIHJldHVybiBudWxsO1xuXG4gICAgICAgIHZhciBfcGFyc2VkJG1hcCA9IHBhcnNlZC5tYXAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICByZXR1cm4gcGFyc2VJbnQoeCwgMTApO1xuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgX3BhcnNlZCRtYXAyID0gX3NsaWNlZFRvQXJyYXkoX3BhcnNlZCRtYXAsIDQpO1xuXG4gICAgICAgIHZhciBfID0gX3BhcnNlZCRtYXAyWzBdO1xuICAgICAgICB2YXIgeWVhciA9IF9wYXJzZWQkbWFwMlsxXTtcbiAgICAgICAgdmFyIG1vbnRoID0gX3BhcnNlZCRtYXAyWzJdO1xuICAgICAgICB2YXIgZGF5ID0gX3BhcnNlZCRtYXAyWzNdO1xuXG4gICAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoeWVhciwgbW9udGggLSAxLCBkYXkpO1xuICAgICAgICBpZiAoZGF0ZS5nZXRGdWxsWWVhcigpICE9PSB5ZWFyIHx8IGRhdGUuZ2V0TW9udGgoKSArIDEgIT09IG1vbnRoIHx8IGRhdGUuZ2V0RGF0ZSgpICE9PSBkYXkpIHJldHVybiBudWxsO1xuICAgICAgICByZXR1cm4gZGF0ZTtcbiAgICAgIH0sXG4gICAgICBzdHJpbmc6IGZ1bmN0aW9uIHN0cmluZyhfc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBfc3RyaW5nO1xuICAgICAgfSxcbiAgICAgIGludGVnZXI6IGZ1bmN0aW9uIGludGVnZXIoc3RyaW5nKSB7XG4gICAgICAgIGlmIChpc05hTihzdHJpbmcpKSByZXR1cm4gbnVsbDtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHN0cmluZywgMTApO1xuICAgICAgfSxcbiAgICAgIG51bWJlcjogZnVuY3Rpb24gbnVtYmVyKHN0cmluZykge1xuICAgICAgICBpZiAoaXNOYU4oc3RyaW5nKSkgdGhyb3cgbnVsbDtcbiAgICAgICAgcmV0dXJuIHBhcnNlRmxvYXQoc3RyaW5nKTtcbiAgICAgIH0sXG4gICAgICAnYm9vbGVhbic6IGZ1bmN0aW9uIF9ib29sZWFuKHN0cmluZykge1xuICAgICAgICByZXR1cm4gIS9eXFxzKmZhbHNlXFxzKiQvaS50ZXN0KHN0cmluZyk7XG4gICAgICB9LFxuICAgICAgb2JqZWN0OiBmdW5jdGlvbiBvYmplY3Qoc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBVdGlscy5kZXNlcmlhbGl6ZVZhbHVlKHN0cmluZyk7XG4gICAgICB9LFxuICAgICAgcmVnZXhwOiBmdW5jdGlvbiByZWdleHAoX3JlZ2V4cCkge1xuICAgICAgICB2YXIgZmxhZ3MgPSAnJztcblxuICAgICAgICAvLyBUZXN0IGlmIFJlZ0V4cCBpcyBsaXRlcmFsLCBpZiBub3QsIG5vdGhpbmcgdG8gYmUgZG9uZSwgb3RoZXJ3aXNlLCB3ZSBuZWVkIHRvIGlzb2xhdGUgZmxhZ3MgYW5kIHBhdHRlcm5cbiAgICAgICAgaWYgKC9eXFwvLipcXC8oPzpbZ2lteV0qKSQvLnRlc3QoX3JlZ2V4cCkpIHtcbiAgICAgICAgICAvLyBSZXBsYWNlIHRoZSByZWdleHAgbGl0ZXJhbCBzdHJpbmcgd2l0aCB0aGUgZmlyc3QgbWF0Y2ggZ3JvdXA6IChbZ2lteV0qKVxuICAgICAgICAgIC8vIElmIG5vIGZsYWcgaXMgcHJlc2VudCwgdGhpcyB3aWxsIGJlIGEgYmxhbmsgc3RyaW5nXG4gICAgICAgICAgZmxhZ3MgPSBfcmVnZXhwLnJlcGxhY2UoLy4qXFwvKFtnaW15XSopJC8sICckMScpO1xuICAgICAgICAgIC8vIEFnYWluLCByZXBsYWNlIHRoZSByZWdleHAgbGl0ZXJhbCBzdHJpbmcgd2l0aCB0aGUgZmlyc3QgbWF0Y2ggZ3JvdXA6XG4gICAgICAgICAgLy8gZXZlcnl0aGluZyBleGNsdWRpbmcgdGhlIG9wZW5pbmcgYW5kIGNsb3Npbmcgc2xhc2hlcyBhbmQgdGhlIGZsYWdzXG4gICAgICAgICAgX3JlZ2V4cCA9IF9yZWdleHAucmVwbGFjZShuZXcgUmVnRXhwKCdeLyguKj8pLycgKyBmbGFncyArICckJyksICckMScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEFuY2hvciByZWdleHA6XG4gICAgICAgICAgX3JlZ2V4cCA9ICdeJyArIF9yZWdleHAgKyAnJCc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoX3JlZ2V4cCwgZmxhZ3MpO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBwYXJzZVJlcXVpcmVtZW50OiBmdW5jdGlvbiBwYXJzZVJlcXVpcmVtZW50KHJlcXVpcmVtZW50VHlwZSwgc3RyaW5nKSB7XG4gICAgICB2YXIgY29udmVydGVyID0gdGhpcy5wYXJzZVtyZXF1aXJlbWVudFR5cGUgfHwgJ3N0cmluZyddO1xuICAgICAgaWYgKCFjb252ZXJ0ZXIpIHRocm93ICdVbmtub3duIHJlcXVpcmVtZW50IHNwZWNpZmljYXRpb246IFwiJyArIHJlcXVpcmVtZW50VHlwZSArICdcIic7XG4gICAgICB2YXIgY29udmVydGVkID0gY29udmVydGVyKHN0cmluZyk7XG4gICAgICBpZiAoY29udmVydGVkID09PSBudWxsKSB0aHJvdyAnUmVxdWlyZW1lbnQgaXMgbm90IGEgJyArIHJlcXVpcmVtZW50VHlwZSArICc6IFwiJyArIHN0cmluZyArICdcIic7XG4gICAgICByZXR1cm4gY29udmVydGVkO1xuICAgIH0sXG5cbiAgICBuYW1lc3BhY2VFdmVudHM6IGZ1bmN0aW9uIG5hbWVzcGFjZUV2ZW50cyhldmVudHMsIG5hbWVzcGFjZSkge1xuICAgICAgZXZlbnRzID0gdGhpcy50cmltU3RyaW5nKGV2ZW50cyB8fCAnJykuc3BsaXQoL1xccysvKTtcbiAgICAgIGlmICghZXZlbnRzWzBdKSByZXR1cm4gJyc7XG4gICAgICByZXR1cm4gJC5tYXAoZXZlbnRzLCBmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgIHJldHVybiBldnQgKyAnLicgKyBuYW1lc3BhY2U7XG4gICAgICB9KS5qb2luKCcgJyk7XG4gICAgfSxcblxuICAgIGRpZmZlcmVuY2U6IGZ1bmN0aW9uIGRpZmZlcmVuY2UoYXJyYXksIHJlbW92ZSkge1xuICAgICAgLy8gVGhpcyBpcyBPKE5eMiksIHNob3VsZCBiZSBvcHRpbWl6ZWRcbiAgICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAgICQuZWFjaChhcnJheSwgZnVuY3Rpb24gKF8sIGVsZW0pIHtcbiAgICAgICAgaWYgKHJlbW92ZS5pbmRleE9mKGVsZW0pID09IC0xKSByZXN1bHQucHVzaChlbGVtKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuXG4gICAgLy8gQWx0ZXItZWdvIHRvIG5hdGl2ZSBQcm9taXNlLmFsbCwgYnV0IGZvciBqUXVlcnlcbiAgICBhbGw6IGZ1bmN0aW9uIGFsbChwcm9taXNlcykge1xuICAgICAgLy8galF1ZXJ5IHRyZWF0cyAkLndoZW4oKSBhbmQgJC53aGVuKHNpbmdsZVByb21pc2UpIGRpZmZlcmVudGx5OyBsZXQncyBhdm9pZCB0aGF0IGFuZCBhZGQgc3B1cmlvdXMgZWxlbWVudHNcbiAgICAgIHJldHVybiAkLndoZW4uYXBwbHkoJCwgX3RvQ29uc3VtYWJsZUFycmF5KHByb21pc2VzKS5jb25jYXQoWzQyLCA0Ml0pKTtcbiAgICB9LFxuXG4gICAgLy8gT2JqZWN0LmNyZWF0ZSBwb2x5ZmlsbCwgc2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9jcmVhdGUjUG9seWZpbGxcbiAgICBvYmplY3RDcmVhdGU6IE9iamVjdC5jcmVhdGUgfHwgKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBPYmplY3QgPSBmdW5jdGlvbiBPYmplY3QoKSB7fTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAocHJvdG90eXBlKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID4gMSkge1xuICAgICAgICAgIHRocm93IEVycm9yKCdTZWNvbmQgYXJndW1lbnQgbm90IHN1cHBvcnRlZCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlb2YgcHJvdG90eXBlICE9ICdvYmplY3QnKSB7XG4gICAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdBcmd1bWVudCBtdXN0IGJlIGFuIG9iamVjdCcpO1xuICAgICAgICB9XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgPSBwcm90b3R5cGU7XG4gICAgICAgIHZhciByZXN1bHQgPSBuZXcgT2JqZWN0KCk7XG4gICAgICAgIE9iamVjdC5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfTtcbiAgICB9KSgpLFxuXG4gICAgX1N1Ym1pdFNlbGVjdG9yOiAnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXSwgYnV0dG9uOnN1Ym1pdCdcbiAgfTtcblxuICAvLyBBbGwgdGhlc2Ugb3B0aW9ucyBjb3VsZCBiZSBvdmVycmlkZW4gYW5kIHNwZWNpZmllZCBkaXJlY3RseSBpbiBET00gdXNpbmdcbiAgLy8gYGRhdGEtcGFyc2xleS1gIGRlZmF1bHQgRE9NLUFQSVxuICAvLyBlZzogYGlucHV0c2AgY2FuIGJlIHNldCBpbiBET00gdXNpbmcgYGRhdGEtcGFyc2xleS1pbnB1dHM9XCJpbnB1dCwgdGV4dGFyZWFcImBcbiAgLy8gZWc6IGBkYXRhLXBhcnNsZXktc3RvcC1vbi1maXJzdC1mYWlsaW5nLWNvbnN0cmFpbnQ9XCJmYWxzZVwiYFxuXG4gIHZhciBEZWZhdWx0cyA9IHtcbiAgICAvLyAjIyMgR2VuZXJhbFxuXG4gICAgLy8gRGVmYXVsdCBkYXRhLW5hbWVzcGFjZSBmb3IgRE9NIEFQSVxuICAgIG5hbWVzcGFjZTogJ2RhdGEtcGFyc2xleS0nLFxuXG4gICAgLy8gU3VwcG9ydGVkIGlucHV0cyBieSBkZWZhdWx0XG4gICAgaW5wdXRzOiAnaW5wdXQsIHRleHRhcmVhLCBzZWxlY3QnLFxuXG4gICAgLy8gRXhjbHVkZWQgaW5wdXRzIGJ5IGRlZmF1bHRcbiAgICBleGNsdWRlZDogJ2lucHV0W3R5cGU9YnV0dG9uXSwgaW5wdXRbdHlwZT1zdWJtaXRdLCBpbnB1dFt0eXBlPXJlc2V0XSwgaW5wdXRbdHlwZT1oaWRkZW5dJyxcblxuICAgIC8vIFN0b3AgdmFsaWRhdGluZyBmaWVsZCBvbiBoaWdoZXN0IHByaW9yaXR5IGZhaWxpbmcgY29uc3RyYWludFxuICAgIHByaW9yaXR5RW5hYmxlZDogdHJ1ZSxcblxuICAgIC8vICMjIyBGaWVsZCBvbmx5XG5cbiAgICAvLyBpZGVudGlmaWVyIHVzZWQgdG8gZ3JvdXAgdG9nZXRoZXIgaW5wdXRzIChlLmcuIHJhZGlvIGJ1dHRvbnMuLi4pXG4gICAgbXVsdGlwbGU6IG51bGwsXG5cbiAgICAvLyBpZGVudGlmaWVyIChvciBhcnJheSBvZiBpZGVudGlmaWVycykgdXNlZCB0byB2YWxpZGF0ZSBvbmx5IGEgc2VsZWN0IGdyb3VwIG9mIGlucHV0c1xuICAgIGdyb3VwOiBudWxsLFxuXG4gICAgLy8gIyMjIFVJXG4gICAgLy8gRW5hYmxlXFxEaXNhYmxlIGVycm9yIG1lc3NhZ2VzXG4gICAgdWlFbmFibGVkOiB0cnVlLFxuXG4gICAgLy8gS2V5IGV2ZW50cyB0aHJlc2hvbGQgYmVmb3JlIHZhbGlkYXRpb25cbiAgICB2YWxpZGF0aW9uVGhyZXNob2xkOiAzLFxuXG4gICAgLy8gRm9jdXNlZCBmaWVsZCBvbiBmb3JtIHZhbGlkYXRpb24gZXJyb3IuICdmaXJzdCd8J2xhc3QnfCdub25lJ1xuICAgIGZvY3VzOiAnZmlyc3QnLFxuXG4gICAgLy8gZXZlbnQocykgdGhhdCB3aWxsIHRyaWdnZXIgdmFsaWRhdGlvbiBiZWZvcmUgZmlyc3QgZmFpbHVyZS4gZWc6IGBpbnB1dGAuLi5cbiAgICB0cmlnZ2VyOiBmYWxzZSxcblxuICAgIC8vIGV2ZW50KHMpIHRoYXQgd2lsbCB0cmlnZ2VyIHZhbGlkYXRpb24gYWZ0ZXIgZmlyc3QgZmFpbHVyZS5cbiAgICB0cmlnZ2VyQWZ0ZXJGYWlsdXJlOiAnaW5wdXQnLFxuXG4gICAgLy8gQ2xhc3MgdGhhdCB3b3VsZCBiZSBhZGRlZCBvbiBldmVyeSBmYWlsaW5nIHZhbGlkYXRpb24gUGFyc2xleSBmaWVsZFxuICAgIGVycm9yQ2xhc3M6ICdwYXJzbGV5LWVycm9yJyxcblxuICAgIC8vIFNhbWUgZm9yIHN1Y2Nlc3MgdmFsaWRhdGlvblxuICAgIHN1Y2Nlc3NDbGFzczogJ3BhcnNsZXktc3VjY2VzcycsXG5cbiAgICAvLyBSZXR1cm4gdGhlIGAkZWxlbWVudGAgdGhhdCB3aWxsIHJlY2VpdmUgdGhlc2UgYWJvdmUgc3VjY2VzcyBvciBlcnJvciBjbGFzc2VzXG4gICAgLy8gQ291bGQgYWxzbyBiZSAoYW5kIGdpdmVuIGRpcmVjdGx5IGZyb20gRE9NKSBhIHZhbGlkIHNlbGVjdG9yIGxpa2UgYCcjZGl2J2BcbiAgICBjbGFzc0hhbmRsZXI6IGZ1bmN0aW9uIGNsYXNzSGFuZGxlcihGaWVsZCkge30sXG5cbiAgICAvLyBSZXR1cm4gdGhlIGAkZWxlbWVudGAgd2hlcmUgZXJyb3JzIHdpbGwgYmUgYXBwZW5kZWRcbiAgICAvLyBDb3VsZCBhbHNvIGJlIChhbmQgZ2l2ZW4gZGlyZWN0bHkgZnJvbSBET00pIGEgdmFsaWQgc2VsZWN0b3IgbGlrZSBgJyNkaXYnYFxuICAgIGVycm9yc0NvbnRhaW5lcjogZnVuY3Rpb24gZXJyb3JzQ29udGFpbmVyKEZpZWxkKSB7fSxcblxuICAgIC8vIHVsIGVsZW0gdGhhdCB3b3VsZCByZWNlaXZlIGVycm9ycycgbGlzdFxuICAgIGVycm9yc1dyYXBwZXI6ICc8dWwgY2xhc3M9XCJwYXJzbGV5LWVycm9ycy1saXN0XCI+PC91bD4nLFxuXG4gICAgLy8gbGkgZWxlbSB0aGF0IHdvdWxkIHJlY2VpdmUgZXJyb3IgbWVzc2FnZVxuICAgIGVycm9yVGVtcGxhdGU6ICc8bGk+PC9saT4nXG4gIH07XG5cbiAgdmFyIEJhc2UgPSBmdW5jdGlvbiBCYXNlKCkge1xuICAgIHRoaXMuX19pZF9fID0gVXRpbHMuZ2VuZXJhdGVJRCgpO1xuICB9O1xuXG4gIEJhc2UucHJvdG90eXBlID0ge1xuICAgIGFzeW5jU3VwcG9ydDogdHJ1ZSwgLy8gRGVwcmVjYXRlZFxuXG4gICAgX3BpcGVBY2NvcmRpbmdUb1ZhbGlkYXRpb25SZXN1bHQ6IGZ1bmN0aW9uIF9waXBlQWNjb3JkaW5nVG9WYWxpZGF0aW9uUmVzdWx0KCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgdmFyIHBpcGUgPSBmdW5jdGlvbiBwaXBlKCkge1xuICAgICAgICB2YXIgciA9ICQuRGVmZXJyZWQoKTtcbiAgICAgICAgaWYgKHRydWUgIT09IF90aGlzLnZhbGlkYXRpb25SZXN1bHQpIHIucmVqZWN0KCk7XG4gICAgICAgIHJldHVybiByLnJlc29sdmUoKS5wcm9taXNlKCk7XG4gICAgICB9O1xuICAgICAgcmV0dXJuIFtwaXBlLCBwaXBlXTtcbiAgICB9LFxuXG4gICAgYWN0dWFsaXplT3B0aW9uczogZnVuY3Rpb24gYWN0dWFsaXplT3B0aW9ucygpIHtcbiAgICAgIFV0aWxzLmF0dHIodGhpcy5lbGVtZW50LCB0aGlzLm9wdGlvbnMubmFtZXNwYWNlLCB0aGlzLmRvbU9wdGlvbnMpO1xuICAgICAgaWYgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LmFjdHVhbGl6ZU9wdGlvbnMpIHRoaXMucGFyZW50LmFjdHVhbGl6ZU9wdGlvbnMoKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICBfcmVzZXRPcHRpb25zOiBmdW5jdGlvbiBfcmVzZXRPcHRpb25zKGluaXRPcHRpb25zKSB7XG4gICAgICB0aGlzLmRvbU9wdGlvbnMgPSBVdGlscy5vYmplY3RDcmVhdGUodGhpcy5wYXJlbnQub3B0aW9ucyk7XG4gICAgICB0aGlzLm9wdGlvbnMgPSBVdGlscy5vYmplY3RDcmVhdGUodGhpcy5kb21PcHRpb25zKTtcbiAgICAgIC8vIFNoYWxsb3cgY29weSBvZiBvd25Qcm9wZXJ0aWVzIG9mIGluaXRPcHRpb25zOlxuICAgICAgZm9yICh2YXIgaSBpbiBpbml0T3B0aW9ucykge1xuICAgICAgICBpZiAoaW5pdE9wdGlvbnMuaGFzT3duUHJvcGVydHkoaSkpIHRoaXMub3B0aW9uc1tpXSA9IGluaXRPcHRpb25zW2ldO1xuICAgICAgfVxuICAgICAgdGhpcy5hY3R1YWxpemVPcHRpb25zKCk7XG4gICAgfSxcblxuICAgIF9saXN0ZW5lcnM6IG51bGwsXG5cbiAgICAvLyBSZWdpc3RlciBhIGNhbGxiYWNrIGZvciB0aGUgZ2l2ZW4gZXZlbnQgbmFtZVxuICAgIC8vIENhbGxiYWNrIGlzIGNhbGxlZCB3aXRoIGNvbnRleHQgYXMgdGhlIGZpcnN0IGFyZ3VtZW50IGFuZCB0aGUgYHRoaXNgXG4gICAgLy8gVGhlIGNvbnRleHQgaXMgdGhlIGN1cnJlbnQgcGFyc2xleSBpbnN0YW5jZSwgb3Igd2luZG93LlBhcnNsZXkgaWYgZ2xvYmFsXG4gICAgLy8gQSByZXR1cm4gdmFsdWUgb2YgYGZhbHNlYCB3aWxsIGludGVycnVwdCB0aGUgY2FsbHNcbiAgICBvbjogZnVuY3Rpb24gb24obmFtZSwgZm4pIHtcbiAgICAgIHRoaXMuX2xpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVycyB8fCB7fTtcbiAgICAgIHZhciBxdWV1ZSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXSA9IHRoaXMuX2xpc3RlbmVyc1tuYW1lXSB8fCBbXTtcbiAgICAgIHF1ZXVlLnB1c2goZm4pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gRGVwcmVjYXRlZC4gVXNlIGBvbmAgaW5zdGVhZFxuICAgIHN1YnNjcmliZTogZnVuY3Rpb24gc3Vic2NyaWJlKG5hbWUsIGZuKSB7XG4gICAgICAkLmxpc3RlblRvKHRoaXMsIG5hbWUudG9Mb3dlckNhc2UoKSwgZm4pO1xuICAgIH0sXG5cbiAgICAvLyBVbnJlZ2lzdGVyIGEgY2FsbGJhY2sgKG9yIGFsbCBpZiBub25lIGlzIGdpdmVuKSBmb3IgdGhlIGdpdmVuIGV2ZW50IG5hbWVcbiAgICBvZmY6IGZ1bmN0aW9uIG9mZihuYW1lLCBmbikge1xuICAgICAgdmFyIHF1ZXVlID0gdGhpcy5fbGlzdGVuZXJzICYmIHRoaXMuX2xpc3RlbmVyc1tuYW1lXTtcbiAgICAgIGlmIChxdWV1ZSkge1xuICAgICAgICBpZiAoIWZuKSB7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2xpc3RlbmVyc1tuYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBmb3IgKHZhciBpID0gcXVldWUubGVuZ3RoOyBpLS07KSBpZiAocXVldWVbaV0gPT09IGZuKSBxdWV1ZS5zcGxpY2UoaSwgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBEZXByZWNhdGVkLiBVc2UgYG9mZmBcbiAgICB1bnN1YnNjcmliZTogZnVuY3Rpb24gdW5zdWJzY3JpYmUobmFtZSwgZm4pIHtcbiAgICAgICQudW5zdWJzY3JpYmVUbyh0aGlzLCBuYW1lLnRvTG93ZXJDYXNlKCkpO1xuICAgIH0sXG5cbiAgICAvLyBUcmlnZ2VyIGFuIGV2ZW50IG9mIHRoZSBnaXZlbiBuYW1lXG4gICAgLy8gQSByZXR1cm4gdmFsdWUgb2YgYGZhbHNlYCBpbnRlcnJ1cHRzIHRoZSBjYWxsYmFjayBjaGFpblxuICAgIC8vIFJldHVybnMgZmFsc2UgaWYgZXhlY3V0aW9uIHdhcyBpbnRlcnJ1cHRlZFxuICAgIHRyaWdnZXI6IGZ1bmN0aW9uIHRyaWdnZXIobmFtZSwgdGFyZ2V0LCBleHRyYUFyZykge1xuICAgICAgdGFyZ2V0ID0gdGFyZ2V0IHx8IHRoaXM7XG4gICAgICB2YXIgcXVldWUgPSB0aGlzLl9saXN0ZW5lcnMgJiYgdGhpcy5fbGlzdGVuZXJzW25hbWVdO1xuICAgICAgdmFyIHJlc3VsdDtcbiAgICAgIHZhciBwYXJlbnRSZXN1bHQ7XG4gICAgICBpZiAocXVldWUpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IHF1ZXVlLmxlbmd0aDsgaS0tOykge1xuICAgICAgICAgIHJlc3VsdCA9IHF1ZXVlW2ldLmNhbGwodGFyZ2V0LCB0YXJnZXQsIGV4dHJhQXJnKTtcbiAgICAgICAgICBpZiAocmVzdWx0ID09PSBmYWxzZSkgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMucGFyZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudC50cmlnZ2VyKG5hbWUsIHRhcmdldCwgZXh0cmFBcmcpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSxcblxuICAgIGFzeW5jSXNWYWxpZDogZnVuY3Rpb24gYXN5bmNJc1ZhbGlkKGdyb3VwLCBmb3JjZSkge1xuICAgICAgVXRpbHMud2Fybk9uY2UoXCJhc3luY0lzVmFsaWQgaXMgZGVwcmVjYXRlZDsgcGxlYXNlIHVzZSB3aGVuVmFsaWQgaW5zdGVhZFwiKTtcbiAgICAgIHJldHVybiB0aGlzLndoZW5WYWxpZCh7IGdyb3VwOiBncm91cCwgZm9yY2U6IGZvcmNlIH0pO1xuICAgIH0sXG5cbiAgICBfZmluZFJlbGF0ZWQ6IGZ1bmN0aW9uIF9maW5kUmVsYXRlZCgpIHtcbiAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMubXVsdGlwbGUgPyAkKHRoaXMucGFyZW50LmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnWycgKyB0aGlzLm9wdGlvbnMubmFtZXNwYWNlICsgJ211bHRpcGxlPVwiJyArIHRoaXMub3B0aW9ucy5tdWx0aXBsZSArICdcIl0nKSkgOiB0aGlzLiRlbGVtZW50O1xuICAgIH1cbiAgfTtcblxuICB2YXIgY29udmVydEFycmF5UmVxdWlyZW1lbnQgPSBmdW5jdGlvbiBjb252ZXJ0QXJyYXlSZXF1aXJlbWVudChzdHJpbmcsIGxlbmd0aCkge1xuICAgIHZhciBtID0gc3RyaW5nLm1hdGNoKC9eXFxzKlxcWyguKilcXF1cXHMqJC8pO1xuICAgIGlmICghbSkgdGhyb3cgJ1JlcXVpcmVtZW50IGlzIG5vdCBhbiBhcnJheTogXCInICsgc3RyaW5nICsgJ1wiJztcbiAgICB2YXIgdmFsdWVzID0gbVsxXS5zcGxpdCgnLCcpLm1hcChVdGlscy50cmltU3RyaW5nKTtcbiAgICBpZiAodmFsdWVzLmxlbmd0aCAhPT0gbGVuZ3RoKSB0aHJvdyAnUmVxdWlyZW1lbnQgaGFzICcgKyB2YWx1ZXMubGVuZ3RoICsgJyB2YWx1ZXMgd2hlbiAnICsgbGVuZ3RoICsgJyBhcmUgbmVlZGVkJztcbiAgICByZXR1cm4gdmFsdWVzO1xuICB9O1xuXG4gIHZhciBjb252ZXJ0RXh0cmFPcHRpb25SZXF1aXJlbWVudCA9IGZ1bmN0aW9uIGNvbnZlcnRFeHRyYU9wdGlvblJlcXVpcmVtZW50KHJlcXVpcmVtZW50U3BlYywgc3RyaW5nLCBleHRyYU9wdGlvblJlYWRlcikge1xuICAgIHZhciBtYWluID0gbnVsbDtcbiAgICB2YXIgZXh0cmEgPSB7fTtcbiAgICBmb3IgKHZhciBrZXkgaW4gcmVxdWlyZW1lbnRTcGVjKSB7XG4gICAgICBpZiAoa2V5KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IGV4dHJhT3B0aW9uUmVhZGVyKGtleSk7XG4gICAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHZhbHVlKSB2YWx1ZSA9IFV0aWxzLnBhcnNlUmVxdWlyZW1lbnQocmVxdWlyZW1lbnRTcGVjW2tleV0sIHZhbHVlKTtcbiAgICAgICAgZXh0cmFba2V5XSA9IHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWFpbiA9IFV0aWxzLnBhcnNlUmVxdWlyZW1lbnQocmVxdWlyZW1lbnRTcGVjW2tleV0sIHN0cmluZyk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBbbWFpbiwgZXh0cmFdO1xuICB9O1xuXG4gIC8vIEEgVmFsaWRhdG9yIG5lZWRzIHRvIGltcGxlbWVudCB0aGUgbWV0aG9kcyBgdmFsaWRhdGVgIGFuZCBgcGFyc2VSZXF1aXJlbWVudHNgXG5cbiAgdmFyIFZhbGlkYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvcihzcGVjKSB7XG4gICAgJC5leHRlbmQodHJ1ZSwgdGhpcywgc3BlYyk7XG4gIH07XG5cbiAgVmFsaWRhdG9yLnByb3RvdHlwZSA9IHtcbiAgICAvLyBSZXR1cm5zIGB0cnVlYCBpZmYgdGhlIGdpdmVuIGB2YWx1ZWAgaXMgdmFsaWQgYWNjb3JkaW5nIHRoZSBnaXZlbiByZXF1aXJlbWVudHMuXG4gICAgdmFsaWRhdGU6IGZ1bmN0aW9uIHZhbGlkYXRlKHZhbHVlLCByZXF1aXJlbWVudEZpcnN0QXJnKSB7XG4gICAgICBpZiAodGhpcy5mbikge1xuICAgICAgICAvLyBMZWdhY3kgc3R5bGUgdmFsaWRhdG9yXG5cbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPiAzKSAvLyBJZiBtb3JlIGFyZ3MgdGhlbiB2YWx1ZSwgcmVxdWlyZW1lbnQsIGluc3RhbmNlLi4uXG4gICAgICAgICAgcmVxdWlyZW1lbnRGaXJzdEFyZyA9IFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxLCAtMSk7IC8vIFNraXAgZmlyc3QgYXJnICh2YWx1ZSkgYW5kIGxhc3QgKGluc3RhbmNlKSwgY29tYmluaW5nIHRoZSByZXN0XG4gICAgICAgIHJldHVybiB0aGlzLmZuKHZhbHVlLCByZXF1aXJlbWVudEZpcnN0QXJnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgIGlmICghdGhpcy52YWxpZGF0ZU11bHRpcGxlKSB0aHJvdyAnVmFsaWRhdG9yIGAnICsgdGhpcy5uYW1lICsgJ2AgZG9lcyBub3QgaGFuZGxlIG11bHRpcGxlIHZhbHVlcyc7XG4gICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlTXVsdGlwbGUuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBpbnN0YW5jZSA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgICAgIGlmICh0aGlzLnZhbGlkYXRlRGF0ZSAmJiBpbnN0YW5jZS5faXNEYXRlSW5wdXQoKSkge1xuICAgICAgICAgIGFyZ3VtZW50c1swXSA9IFV0aWxzLnBhcnNlLmRhdGUoYXJndW1lbnRzWzBdKTtcbiAgICAgICAgICBpZiAoYXJndW1lbnRzWzBdID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGVEYXRlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVOdW1iZXIpIHtcbiAgICAgICAgICBpZiAoaXNOYU4odmFsdWUpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgYXJndW1lbnRzWzBdID0gcGFyc2VGbG9hdChhcmd1bWVudHNbMF0pO1xuICAgICAgICAgIHJldHVybiB0aGlzLnZhbGlkYXRlTnVtYmVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmFsaWRhdGVTdHJpbmcpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0ZVN0cmluZy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93ICdWYWxpZGF0b3IgYCcgKyB0aGlzLm5hbWUgKyAnYCBvbmx5IGhhbmRsZXMgbXVsdGlwbGUgdmFsdWVzJztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gUGFyc2VzIGByZXF1aXJlbWVudHNgIGludG8gYW4gYXJyYXkgb2YgYXJndW1lbnRzLFxuICAgIC8vIGFjY29yZGluZyB0byBgdGhpcy5yZXF1aXJlbWVudFR5cGVgXG4gICAgcGFyc2VSZXF1aXJlbWVudHM6IGZ1bmN0aW9uIHBhcnNlUmVxdWlyZW1lbnRzKHJlcXVpcmVtZW50cywgZXh0cmFPcHRpb25SZWFkZXIpIHtcbiAgICAgIGlmICgnc3RyaW5nJyAhPT0gdHlwZW9mIHJlcXVpcmVtZW50cykge1xuICAgICAgICAvLyBBc3N1bWUgcmVxdWlyZW1lbnQgYWxyZWFkeSBwYXJzZWRcbiAgICAgICAgLy8gYnV0IG1ha2Ugc3VyZSB3ZSByZXR1cm4gYW4gYXJyYXlcbiAgICAgICAgcmV0dXJuIEFycmF5LmlzQXJyYXkocmVxdWlyZW1lbnRzKSA/IHJlcXVpcmVtZW50cyA6IFtyZXF1aXJlbWVudHNdO1xuICAgICAgfVxuICAgICAgdmFyIHR5cGUgPSB0aGlzLnJlcXVpcmVtZW50VHlwZTtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KHR5cGUpKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBjb252ZXJ0QXJyYXlSZXF1aXJlbWVudChyZXF1aXJlbWVudHMsIHR5cGUubGVuZ3RoKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpKyspIHZhbHVlc1tpXSA9IFV0aWxzLnBhcnNlUmVxdWlyZW1lbnQodHlwZVtpXSwgdmFsdWVzW2ldKTtcbiAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgIH0gZWxzZSBpZiAoJC5pc1BsYWluT2JqZWN0KHR5cGUpKSB7XG4gICAgICAgIHJldHVybiBjb252ZXJ0RXh0cmFPcHRpb25SZXF1aXJlbWVudCh0eXBlLCByZXF1aXJlbWVudHMsIGV4dHJhT3B0aW9uUmVhZGVyKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBbVXRpbHMucGFyc2VSZXF1aXJlbWVudCh0eXBlLCByZXF1aXJlbWVudHMpXTtcbiAgICAgIH1cbiAgICB9LFxuICAgIC8vIERlZmF1bHRzOlxuICAgIHJlcXVpcmVtZW50VHlwZTogJ3N0cmluZycsXG5cbiAgICBwcmlvcml0eTogMlxuXG4gIH07XG5cbiAgdmFyIFZhbGlkYXRvclJlZ2lzdHJ5ID0gZnVuY3Rpb24gVmFsaWRhdG9yUmVnaXN0cnkodmFsaWRhdG9ycywgY2F0YWxvZykge1xuICAgIHRoaXMuX19jbGFzc19fID0gJ1ZhbGlkYXRvclJlZ2lzdHJ5JztcblxuICAgIC8vIERlZmF1bHQgUGFyc2xleSBsb2NhbGUgaXMgZW5cbiAgICB0aGlzLmxvY2FsZSA9ICdlbic7XG5cbiAgICB0aGlzLmluaXQodmFsaWRhdG9ycyB8fCB7fSwgY2F0YWxvZyB8fCB7fSk7XG4gIH07XG5cbiAgdmFyIHR5cGVUZXN0ZXJzID0ge1xuICAgIGVtYWlsOiAvXigoKFthLXpBLVpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSsoXFwuKFthLXpBLVpdfFxcZHxbISNcXCQlJidcXCpcXCtcXC1cXC89XFw/XFxeX2B7XFx8fX5dfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSspKil8KChcXHgyMikoKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPygoW1xceDAxLVxceDA4XFx4MGJcXHgwY1xceDBlLVxceDFmXFx4N2ZdfFxceDIxfFtcXHgyMy1cXHg1Yl18W1xceDVkLVxceDdlXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSl8KFxcXFwoW1xceDAxLVxceDA5XFx4MGJcXHgwY1xceDBkLVxceDdmXXxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkpKSkqKCgoXFx4MjB8XFx4MDkpKihcXHgwZFxceDBhKSk/KFxceDIwfFxceDA5KSspPyhcXHgyMikpKUAoKChbYS16QS1aXXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2EtekEtWl18XFxkfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKShbYS16QS1aXXxcXGR8LXxffH58W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKihbYS16QS1aXXxcXGR8W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKSlcXC4pKygoW2EtekEtWl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pfCgoW2EtekEtWl18W1xcdTAwQTAtXFx1RDdGRlxcdUY5MDAtXFx1RkRDRlxcdUZERjAtXFx1RkZFRl0pKFthLXpBLVpdfFxcZHwtfF98fnxbXFx1MDBBMC1cXHVEN0ZGXFx1RjkwMC1cXHVGRENGXFx1RkRGMC1cXHVGRkVGXSkqKFthLXpBLVpdfFtcXHUwMEEwLVxcdUQ3RkZcXHVGOTAwLVxcdUZEQ0ZcXHVGREYwLVxcdUZGRUZdKSkpJC8sXG5cbiAgICAvLyBGb2xsb3cgaHR0cHM6Ly93d3cudzMub3JnL1RSL2h0bWw1L2luZnJhc3RydWN0dXJlLmh0bWwjZmxvYXRpbmctcG9pbnQtbnVtYmVyc1xuICAgIG51bWJlcjogL14tPyhcXGQqXFwuKT9cXGQrKGVbLStdP1xcZCspPyQvaSxcblxuICAgIGludGVnZXI6IC9eLT9cXGQrJC8sXG5cbiAgICBkaWdpdHM6IC9eXFxkKyQvLFxuXG4gICAgYWxwaGFudW06IC9eXFx3KyQvaSxcblxuICAgIGRhdGU6IHtcbiAgICAgIHRlc3Q6IGZ1bmN0aW9uIHRlc3QodmFsdWUpIHtcbiAgICAgICAgcmV0dXJuIFV0aWxzLnBhcnNlLmRhdGUodmFsdWUpICE9PSBudWxsO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICB1cmw6IG5ldyBSZWdFeHAoXCJeXCIgK1xuICAgIC8vIHByb3RvY29sIGlkZW50aWZpZXJcbiAgICBcIig/Oig/Omh0dHBzP3xmdHApOi8vKT9cIiArIC8vICoqIG1vZDogbWFrZSBzY2hlbWUgb3B0aW9uYWxcbiAgICAvLyB1c2VyOnBhc3MgYXV0aGVudGljYXRpb25cbiAgICBcIig/OlxcXFxTKyg/OjpcXFxcUyopP0ApP1wiICsgXCIoPzpcIiArXG4gICAgLy8gSVAgYWRkcmVzcyBleGNsdXNpb25cbiAgICAvLyBwcml2YXRlICYgbG9jYWwgbmV0d29ya3NcbiAgICAvLyBcIig/ISg/OjEwfDEyNykoPzpcXFxcLlxcXFxkezEsM30pezN9KVwiICsgICAvLyAqKiBtb2Q6IGFsbG93IGxvY2FsIG5ldHdvcmtzXG4gICAgLy8gXCIoPyEoPzoxNjlcXFxcLjI1NHwxOTJcXFxcLjE2OCkoPzpcXFxcLlxcXFxkezEsM30pezJ9KVwiICsgIC8vICoqIG1vZDogYWxsb3cgbG9jYWwgbmV0d29ya3NcbiAgICAvLyBcIig/ITE3MlxcXFwuKD86MVs2LTldfDJcXFxcZHwzWzAtMV0pKD86XFxcXC5cXFxcZHsxLDN9KXsyfSlcIiArICAvLyAqKiBtb2Q6IGFsbG93IGxvY2FsIG5ldHdvcmtzXG4gICAgLy8gSVAgYWRkcmVzcyBkb3R0ZWQgbm90YXRpb24gb2N0ZXRzXG4gICAgLy8gZXhjbHVkZXMgbG9vcGJhY2sgbmV0d29yayAwLjAuMC4wXG4gICAgLy8gZXhjbHVkZXMgcmVzZXJ2ZWQgc3BhY2UgPj0gMjI0LjAuMC4wXG4gICAgLy8gZXhjbHVkZXMgbmV0d29yayAmIGJyb2FjYXN0IGFkZHJlc3Nlc1xuICAgIC8vIChmaXJzdCAmIGxhc3QgSVAgYWRkcmVzcyBvZiBlYWNoIGNsYXNzKVxuICAgIFwiKD86WzEtOV1cXFxcZD98MVxcXFxkXFxcXGR8MlswMV1cXFxcZHwyMlswLTNdKVwiICsgXCIoPzpcXFxcLig/OjE/XFxcXGR7MSwyfXwyWzAtNF1cXFxcZHwyNVswLTVdKSl7Mn1cIiArIFwiKD86XFxcXC4oPzpbMS05XVxcXFxkP3wxXFxcXGRcXFxcZHwyWzAtNF1cXFxcZHwyNVswLTRdKSlcIiArIFwifFwiICtcbiAgICAvLyBob3N0IG5hbWVcbiAgICAnKD86KD86W2EtekEtWlxcXFx1MDBhMS1cXFxcdWZmZmYwLTldLSopKlthLXpBLVpcXFxcdTAwYTEtXFxcXHVmZmZmMC05XSspJyArXG4gICAgLy8gZG9tYWluIG5hbWVcbiAgICAnKD86XFxcXC4oPzpbYS16QS1aXFxcXHUwMGExLVxcXFx1ZmZmZjAtOV0tKikqW2EtekEtWlxcXFx1MDBhMS1cXFxcdWZmZmYwLTldKykqJyArXG4gICAgLy8gVExEIGlkZW50aWZpZXJcbiAgICAnKD86XFxcXC4oPzpbYS16QS1aXFxcXHUwMGExLVxcXFx1ZmZmZl17Mix9KSknICsgXCIpXCIgK1xuICAgIC8vIHBvcnQgbnVtYmVyXG4gICAgXCIoPzo6XFxcXGR7Miw1fSk/XCIgK1xuICAgIC8vIHJlc291cmNlIHBhdGhcbiAgICBcIig/Oi9cXFxcUyopP1wiICsgXCIkXCIpXG4gIH07XG4gIHR5cGVUZXN0ZXJzLnJhbmdlID0gdHlwZVRlc3RlcnMubnVtYmVyO1xuXG4gIC8vIFNlZSBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8xMDQ1NDU2MC84Mjc5XG4gIHZhciBkZWNpbWFsUGxhY2VzID0gZnVuY3Rpb24gZGVjaW1hbFBsYWNlcyhudW0pIHtcbiAgICB2YXIgbWF0Y2ggPSAoJycgKyBudW0pLm1hdGNoKC8oPzpcXC4oXFxkKykpPyg/OltlRV0oWystXT9cXGQrKSk/JC8pO1xuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gTWF0aC5tYXgoMCxcbiAgICAvLyBOdW1iZXIgb2YgZGlnaXRzIHJpZ2h0IG9mIGRlY2ltYWwgcG9pbnQuXG4gICAgKG1hdGNoWzFdID8gbWF0Y2hbMV0ubGVuZ3RoIDogMCkgLSAoXG4gICAgLy8gQWRqdXN0IGZvciBzY2llbnRpZmljIG5vdGF0aW9uLlxuICAgIG1hdGNoWzJdID8gK21hdGNoWzJdIDogMCkpO1xuICB9O1xuXG4gIC8vIHBhcnNlQXJndW1lbnRzKCdudW1iZXInLCBbJzEnLCAnMiddKSA9PiBbMSwgMl1cbiAgdmFyIFZhbGlkYXRvclJlZ2lzdHJ5X19wYXJzZUFyZ3VtZW50cyA9IGZ1bmN0aW9uIFZhbGlkYXRvclJlZ2lzdHJ5X19wYXJzZUFyZ3VtZW50cyh0eXBlLCBhcmdzKSB7XG4gICAgcmV0dXJuIGFyZ3MubWFwKFV0aWxzLnBhcnNlW3R5cGVdKTtcbiAgfTtcbiAgLy8gb3BlcmF0b3JUb1ZhbGlkYXRvciByZXR1cm5zIGEgdmFsaWRhdGluZyBmdW5jdGlvbiBmb3IgYW4gb3BlcmF0b3IgZnVuY3Rpb24sIGFwcGxpZWQgdG8gdGhlIGdpdmVuIHR5cGVcbiAgdmFyIFZhbGlkYXRvclJlZ2lzdHJ5X19vcGVyYXRvclRvVmFsaWRhdG9yID0gZnVuY3Rpb24gVmFsaWRhdG9yUmVnaXN0cnlfX29wZXJhdG9yVG9WYWxpZGF0b3IodHlwZSwgb3BlcmF0b3IpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgcmVxdWlyZW1lbnRzQW5kSW5wdXQgPSBBcnJheShfbGVuID4gMSA/IF9sZW4gLSAxIDogMCksIF9rZXkgPSAxOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIHJlcXVpcmVtZW50c0FuZElucHV0W19rZXkgLSAxXSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cblxuICAgICAgcmVxdWlyZW1lbnRzQW5kSW5wdXQucG9wKCk7IC8vIEdldCByaWQgb2YgYGlucHV0YCBhcmd1bWVudFxuICAgICAgcmV0dXJuIG9wZXJhdG9yLmFwcGx5KHVuZGVmaW5lZCwgW3ZhbHVlXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KFZhbGlkYXRvclJlZ2lzdHJ5X19wYXJzZUFyZ3VtZW50cyh0eXBlLCByZXF1aXJlbWVudHNBbmRJbnB1dCkpKSk7XG4gICAgfTtcbiAgfTtcblxuICB2YXIgVmFsaWRhdG9yUmVnaXN0cnlfX2NvbXBhcmlzb25PcGVyYXRvciA9IGZ1bmN0aW9uIFZhbGlkYXRvclJlZ2lzdHJ5X19jb21wYXJpc29uT3BlcmF0b3Iob3BlcmF0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdmFsaWRhdGVEYXRlOiBWYWxpZGF0b3JSZWdpc3RyeV9fb3BlcmF0b3JUb1ZhbGlkYXRvcignZGF0ZScsIG9wZXJhdG9yKSxcbiAgICAgIHZhbGlkYXRlTnVtYmVyOiBWYWxpZGF0b3JSZWdpc3RyeV9fb3BlcmF0b3JUb1ZhbGlkYXRvcignbnVtYmVyJywgb3BlcmF0b3IpLFxuICAgICAgcmVxdWlyZW1lbnRUeXBlOiBvcGVyYXRvci5sZW5ndGggPD0gMiA/ICdzdHJpbmcnIDogWydzdHJpbmcnLCAnc3RyaW5nJ10sIC8vIFN1cHBvcnQgb3BlcmF0b3JzIHdpdGggYSAxIG9yIDIgcmVxdWlyZW1lbnQocylcbiAgICAgIHByaW9yaXR5OiAzMFxuICAgIH07XG4gIH07XG5cbiAgVmFsaWRhdG9yUmVnaXN0cnkucHJvdG90eXBlID0ge1xuICAgIGluaXQ6IGZ1bmN0aW9uIGluaXQodmFsaWRhdG9ycywgY2F0YWxvZykge1xuICAgICAgdGhpcy5jYXRhbG9nID0gY2F0YWxvZztcbiAgICAgIC8vIENvcHkgcHJvdG90eXBlJ3MgdmFsaWRhdG9yczpcbiAgICAgIHRoaXMudmFsaWRhdG9ycyA9IF9leHRlbmRzKHt9LCB0aGlzLnZhbGlkYXRvcnMpO1xuXG4gICAgICBmb3IgKHZhciBuYW1lIGluIHZhbGlkYXRvcnMpIHRoaXMuYWRkVmFsaWRhdG9yKG5hbWUsIHZhbGlkYXRvcnNbbmFtZV0uZm4sIHZhbGlkYXRvcnNbbmFtZV0ucHJpb3JpdHkpO1xuXG4gICAgICB3aW5kb3cuUGFyc2xleS50cmlnZ2VyKCdwYXJzbGV5OnZhbGlkYXRvcjppbml0Jyk7XG4gICAgfSxcblxuICAgIC8vIFNldCBuZXcgbWVzc2FnZXMgbG9jYWxlIGlmIHdlIGhhdmUgZGljdGlvbmFyeSBsb2FkZWQgaW4gUGFyc2xleUNvbmZpZy5pMThuXG4gICAgc2V0TG9jYWxlOiBmdW5jdGlvbiBzZXRMb2NhbGUobG9jYWxlKSB7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0aGlzLmNhdGFsb2dbbG9jYWxlXSkgdGhyb3cgbmV3IEVycm9yKGxvY2FsZSArICcgaXMgbm90IGF2YWlsYWJsZSBpbiB0aGUgY2F0YWxvZycpO1xuXG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIG5ldyBtZXNzYWdlcyBjYXRhbG9nIGZvciBhIGdpdmVuIGxvY2FsZS4gU2V0IGxvY2FsZSBmb3IgdGhpcyBjYXRhbG9nIGlmIHNldCA9PT0gYHRydWVgXG4gICAgYWRkQ2F0YWxvZzogZnVuY3Rpb24gYWRkQ2F0YWxvZyhsb2NhbGUsIG1lc3NhZ2VzLCBzZXQpIHtcbiAgICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIG1lc3NhZ2VzKSB0aGlzLmNhdGFsb2dbbG9jYWxlXSA9IG1lc3NhZ2VzO1xuXG4gICAgICBpZiAodHJ1ZSA9PT0gc2V0KSByZXR1cm4gdGhpcy5zZXRMb2NhbGUobG9jYWxlKTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIEFkZCBhIHNwZWNpZmljIG1lc3NhZ2UgZm9yIGEgZ2l2ZW4gY29uc3RyYWludCBpbiBhIGdpdmVuIGxvY2FsZVxuICAgIGFkZE1lc3NhZ2U6IGZ1bmN0aW9uIGFkZE1lc3NhZ2UobG9jYWxlLCBuYW1lLCBtZXNzYWdlKSB7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB0aGlzLmNhdGFsb2dbbG9jYWxlXSkgdGhpcy5jYXRhbG9nW2xvY2FsZV0gPSB7fTtcblxuICAgICAgdGhpcy5jYXRhbG9nW2xvY2FsZV1bbmFtZV0gPSBtZXNzYWdlO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gQWRkIG1lc3NhZ2VzIGZvciBhIGdpdmVuIGxvY2FsZVxuICAgIGFkZE1lc3NhZ2VzOiBmdW5jdGlvbiBhZGRNZXNzYWdlcyhsb2NhbGUsIG5hbWVNZXNzYWdlT2JqZWN0KSB7XG4gICAgICBmb3IgKHZhciBuYW1lIGluIG5hbWVNZXNzYWdlT2JqZWN0KSB0aGlzLmFkZE1lc3NhZ2UobG9jYWxlLCBuYW1lLCBuYW1lTWVzc2FnZU9iamVjdFtuYW1lXSk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBBZGQgYSBuZXcgdmFsaWRhdG9yXG4gICAgLy9cbiAgICAvLyAgICBhZGRWYWxpZGF0b3IoJ2N1c3RvbScsIHtcbiAgICAvLyAgICAgICAgcmVxdWlyZW1lbnRUeXBlOiBbJ2ludGVnZXInLCAnaW50ZWdlciddLFxuICAgIC8vICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24odmFsdWUsIGZyb20sIHRvKSB7fSxcbiAgICAvLyAgICAgICAgcHJpb3JpdHk6IDIyLFxuICAgIC8vICAgICAgICBtZXNzYWdlczoge1xuICAgIC8vICAgICAgICAgIGVuOiBcIkhleSwgdGhhdCdzIG5vIGdvb2RcIixcbiAgICAvLyAgICAgICAgICBmcjogXCJBeWUgYXllLCBwYXMgYm9uIGR1IHRvdXRcIixcbiAgICAvLyAgICAgICAgfVxuICAgIC8vICAgIH0pXG4gICAgLy9cbiAgICAvLyBPbGQgQVBJIHdhcyBhZGRWYWxpZGF0b3IobmFtZSwgZnVuY3Rpb24sIHByaW9yaXR5KVxuICAgIC8vXG4gICAgYWRkVmFsaWRhdG9yOiBmdW5jdGlvbiBhZGRWYWxpZGF0b3IobmFtZSwgYXJnMSwgYXJnMikge1xuICAgICAgaWYgKHRoaXMudmFsaWRhdG9yc1tuYW1lXSkgVXRpbHMud2FybignVmFsaWRhdG9yIFwiJyArIG5hbWUgKyAnXCIgaXMgYWxyZWFkeSBkZWZpbmVkLicpO2Vsc2UgaWYgKERlZmF1bHRzLmhhc093blByb3BlcnR5KG5hbWUpKSB7XG4gICAgICAgIFV0aWxzLndhcm4oJ1wiJyArIG5hbWUgKyAnXCIgaXMgYSByZXN0cmljdGVkIGtleXdvcmQgYW5kIGlzIG5vdCBhIHZhbGlkIHZhbGlkYXRvciBuYW1lLicpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fc2V0VmFsaWRhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIGhhc1ZhbGlkYXRvcjogZnVuY3Rpb24gaGFzVmFsaWRhdG9yKG5hbWUpIHtcbiAgICAgIHJldHVybiAhIXRoaXMudmFsaWRhdG9yc1tuYW1lXTtcbiAgICB9LFxuXG4gICAgdXBkYXRlVmFsaWRhdG9yOiBmdW5jdGlvbiB1cGRhdGVWYWxpZGF0b3IobmFtZSwgYXJnMSwgYXJnMikge1xuICAgICAgaWYgKCF0aGlzLnZhbGlkYXRvcnNbbmFtZV0pIHtcbiAgICAgICAgVXRpbHMud2FybignVmFsaWRhdG9yIFwiJyArIG5hbWUgKyAnXCIgaXMgbm90IGFscmVhZHkgZGVmaW5lZC4nKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkVmFsaWRhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fc2V0VmFsaWRhdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSxcblxuICAgIHJlbW92ZVZhbGlkYXRvcjogZnVuY3Rpb24gcmVtb3ZlVmFsaWRhdG9yKG5hbWUpIHtcbiAgICAgIGlmICghdGhpcy52YWxpZGF0b3JzW25hbWVdKSBVdGlscy53YXJuKCdWYWxpZGF0b3IgXCInICsgbmFtZSArICdcIiBpcyBub3QgZGVmaW5lZC4nKTtcblxuICAgICAgZGVsZXRlIHRoaXMudmFsaWRhdG9yc1tuYW1lXTtcblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9zZXRWYWxpZGF0b3I6IGZ1bmN0aW9uIF9zZXRWYWxpZGF0b3IobmFtZSwgdmFsaWRhdG9yLCBwcmlvcml0eSkge1xuICAgICAgaWYgKCdvYmplY3QnICE9PSB0eXBlb2YgdmFsaWRhdG9yKSB7XG4gICAgICAgIC8vIE9sZCBzdHlsZSB2YWxpZGF0b3IsIHdpdGggYGZuYCBhbmQgYHByaW9yaXR5YFxuICAgICAgICB2YWxpZGF0b3IgPSB7XG4gICAgICAgICAgZm46IHZhbGlkYXRvcixcbiAgICAgICAgICBwcmlvcml0eTogcHJpb3JpdHlcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICghdmFsaWRhdG9yLnZhbGlkYXRlKSB7XG4gICAgICAgIHZhbGlkYXRvciA9IG5ldyBWYWxpZGF0b3IodmFsaWRhdG9yKTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsaWRhdG9yc1tuYW1lXSA9IHZhbGlkYXRvcjtcblxuICAgICAgZm9yICh2YXIgbG9jYWxlIGluIHZhbGlkYXRvci5tZXNzYWdlcyB8fCB7fSkgdGhpcy5hZGRNZXNzYWdlKGxvY2FsZSwgbmFtZSwgdmFsaWRhdG9yLm1lc3NhZ2VzW2xvY2FsZV0pO1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgZ2V0RXJyb3JNZXNzYWdlOiBmdW5jdGlvbiBnZXRFcnJvck1lc3NhZ2UoY29uc3RyYWludCkge1xuICAgICAgdmFyIG1lc3NhZ2U7XG5cbiAgICAgIC8vIFR5cGUgY29uc3RyYWludHMgYXJlIGEgYml0IGRpZmZlcmVudCwgd2UgaGF2ZSB0byBtYXRjaCB0aGVpciByZXF1aXJlbWVudHMgdG9vIHRvIGZpbmQgcmlnaHQgZXJyb3IgbWVzc2FnZVxuICAgICAgaWYgKCd0eXBlJyA9PT0gY29uc3RyYWludC5uYW1lKSB7XG4gICAgICAgIHZhciB0eXBlTWVzc2FnZXMgPSB0aGlzLmNhdGFsb2dbdGhpcy5sb2NhbGVdW2NvbnN0cmFpbnQubmFtZV0gfHwge307XG4gICAgICAgIG1lc3NhZ2UgPSB0eXBlTWVzc2FnZXNbY29uc3RyYWludC5yZXF1aXJlbWVudHNdO1xuICAgICAgfSBlbHNlIG1lc3NhZ2UgPSB0aGlzLmZvcm1hdE1lc3NhZ2UodGhpcy5jYXRhbG9nW3RoaXMubG9jYWxlXVtjb25zdHJhaW50Lm5hbWVdLCBjb25zdHJhaW50LnJlcXVpcmVtZW50cyk7XG5cbiAgICAgIHJldHVybiBtZXNzYWdlIHx8IHRoaXMuY2F0YWxvZ1t0aGlzLmxvY2FsZV0uZGVmYXVsdE1lc3NhZ2UgfHwgdGhpcy5jYXRhbG9nLmVuLmRlZmF1bHRNZXNzYWdlO1xuICAgIH0sXG5cbiAgICAvLyBLaW5kIG9mIGxpZ2h0IGBzcHJpbnRmKClgIGltcGxlbWVudGF0aW9uXG4gICAgZm9ybWF0TWVzc2FnZTogZnVuY3Rpb24gZm9ybWF0TWVzc2FnZShzdHJpbmcsIHBhcmFtZXRlcnMpIHtcbiAgICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIHBhcmFtZXRlcnMpIHtcbiAgICAgICAgZm9yICh2YXIgaSBpbiBwYXJhbWV0ZXJzKSBzdHJpbmcgPSB0aGlzLmZvcm1hdE1lc3NhZ2Uoc3RyaW5nLCBwYXJhbWV0ZXJzW2ldKTtcblxuICAgICAgICByZXR1cm4gc3RyaW5nO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gJ3N0cmluZycgPT09IHR5cGVvZiBzdHJpbmcgPyBzdHJpbmcucmVwbGFjZSgvJXMvaSwgcGFyYW1ldGVycykgOiAnJztcbiAgICB9LFxuXG4gICAgLy8gSGVyZSBpcyB0aGUgUGFyc2xleSBkZWZhdWx0IHZhbGlkYXRvcnMgbGlzdC5cbiAgICAvLyBBIHZhbGlkYXRvciBpcyBhbiBvYmplY3Qgd2l0aCB0aGUgZm9sbG93aW5nIGtleSB2YWx1ZXM6XG4gICAgLy8gIC0gcHJpb3JpdHk6IGFuIGludGVnZXJcbiAgICAvLyAgLSByZXF1aXJlbWVudDogJ3N0cmluZycgKGRlZmF1bHQpLCAnaW50ZWdlcicsICdudW1iZXInLCAncmVnZXhwJyBvciBhbiBBcnJheSBvZiB0aGVzZVxuICAgIC8vICAtIHZhbGlkYXRlU3RyaW5nLCB2YWxpZGF0ZU11bHRpcGxlLCB2YWxpZGF0ZU51bWJlcjogZnVuY3Rpb25zIHJldHVybmluZyBgdHJ1ZWAsIGBmYWxzZWAgb3IgYSBwcm9taXNlXG4gICAgLy8gQWx0ZXJuYXRpdmVseSwgYSB2YWxpZGF0b3IgY2FuIGJlIGEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHN1Y2ggYW4gb2JqZWN0XG4gICAgLy9cbiAgICB2YWxpZGF0b3JzOiB7XG4gICAgICBub3RibGFuazoge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gKC9cXFMvLnRlc3QodmFsdWUpXG4gICAgICAgICAgKTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJpb3JpdHk6IDJcbiAgICAgIH0sXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB2YWxpZGF0ZU11bHRpcGxlOiBmdW5jdGlvbiB2YWxpZGF0ZU11bHRpcGxlKHZhbHVlcykge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoID4gMDtcbiAgICAgICAgfSxcbiAgICAgICAgdmFsaWRhdGVTdHJpbmc6IGZ1bmN0aW9uIHZhbGlkYXRlU3RyaW5nKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuICgvXFxTLy50ZXN0KHZhbHVlKVxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICAgIHByaW9yaXR5OiA1MTJcbiAgICAgIH0sXG4gICAgICB0eXBlOiB7XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nOiBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyh2YWx1ZSwgdHlwZSkge1xuICAgICAgICAgIHZhciBfcmVmID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMl07XG5cbiAgICAgICAgICB2YXIgX3JlZiRzdGVwID0gX3JlZi5zdGVwO1xuICAgICAgICAgIHZhciBzdGVwID0gX3JlZiRzdGVwID09PSB1bmRlZmluZWQgPyAnYW55JyA6IF9yZWYkc3RlcDtcbiAgICAgICAgICB2YXIgX3JlZiRiYXNlID0gX3JlZi5iYXNlO1xuICAgICAgICAgIHZhciBiYXNlID0gX3JlZiRiYXNlID09PSB1bmRlZmluZWQgPyAwIDogX3JlZiRiYXNlO1xuXG4gICAgICAgICAgdmFyIHRlc3RlciA9IHR5cGVUZXN0ZXJzW3R5cGVdO1xuICAgICAgICAgIGlmICghdGVzdGVyKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3ZhbGlkYXRvciB0eXBlIGAnICsgdHlwZSArICdgIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCF0ZXN0ZXIudGVzdCh2YWx1ZSkpIHJldHVybiBmYWxzZTtcbiAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGUpIHtcbiAgICAgICAgICAgIGlmICghL15hbnkkL2kudGVzdChzdGVwIHx8ICcnKSkge1xuICAgICAgICAgICAgICB2YXIgbmIgPSBOdW1iZXIodmFsdWUpO1xuICAgICAgICAgICAgICB2YXIgZGVjaW1hbHMgPSBNYXRoLm1heChkZWNpbWFsUGxhY2VzKHN0ZXApLCBkZWNpbWFsUGxhY2VzKGJhc2UpKTtcbiAgICAgICAgICAgICAgaWYgKGRlY2ltYWxQbGFjZXMobmIpID4gZGVjaW1hbHMpIC8vIFZhbHVlIGNhbid0IGhhdmUgdG9vIG1hbnkgZGVjaW1hbHNcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgIC8vIEJlIGNhcmVmdWwgb2Ygcm91bmRpbmcgZXJyb3JzIGJ5IHVzaW5nIGludGVnZXJzLlxuICAgICAgICAgICAgICB2YXIgdG9JbnQgPSBmdW5jdGlvbiB0b0ludChmKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoZiAqIE1hdGgucG93KDEwLCBkZWNpbWFscykpO1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBpZiAoKHRvSW50KG5iKSAtIHRvSW50KGJhc2UpKSAlIHRvSW50KHN0ZXApICE9IDApIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVtZW50VHlwZToge1xuICAgICAgICAgICcnOiAnc3RyaW5nJyxcbiAgICAgICAgICBzdGVwOiAnc3RyaW5nJyxcbiAgICAgICAgICBiYXNlOiAnbnVtYmVyJ1xuICAgICAgICB9LFxuICAgICAgICBwcmlvcml0eTogMjU2XG4gICAgICB9LFxuICAgICAgcGF0dGVybjoge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcodmFsdWUsIHJlZ2V4cCkge1xuICAgICAgICAgIHJldHVybiByZWdleHAudGVzdCh2YWx1ZSk7XG4gICAgICAgIH0sXG4gICAgICAgIHJlcXVpcmVtZW50VHlwZTogJ3JlZ2V4cCcsXG4gICAgICAgIHByaW9yaXR5OiA2NFxuICAgICAgfSxcbiAgICAgIG1pbmxlbmd0aDoge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcodmFsdWUsIHJlcXVpcmVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZW1lbnRUeXBlOiAnaW50ZWdlcicsXG4gICAgICAgIHByaW9yaXR5OiAzMFxuICAgICAgfSxcbiAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcodmFsdWUsIHJlcXVpcmVtZW50KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA8PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZW1lbnRUeXBlOiAnaW50ZWdlcicsXG4gICAgICAgIHByaW9yaXR5OiAzMFxuICAgICAgfSxcbiAgICAgIGxlbmd0aDoge1xuICAgICAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlLmxlbmd0aCA+PSBtaW4gJiYgdmFsdWUubGVuZ3RoIDw9IG1heDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZW1lbnRUeXBlOiBbJ2ludGVnZXInLCAnaW50ZWdlciddLFxuICAgICAgICBwcmlvcml0eTogMzBcbiAgICAgIH0sXG4gICAgICBtaW5jaGVjazoge1xuICAgICAgICB2YWxpZGF0ZU11bHRpcGxlOiBmdW5jdGlvbiB2YWxpZGF0ZU11bHRpcGxlKHZhbHVlcywgcmVxdWlyZW1lbnQpIHtcbiAgICAgICAgICByZXR1cm4gdmFsdWVzLmxlbmd0aCA+PSByZXF1aXJlbWVudDtcbiAgICAgICAgfSxcbiAgICAgICAgcmVxdWlyZW1lbnRUeXBlOiAnaW50ZWdlcicsXG4gICAgICAgIHByaW9yaXR5OiAzMFxuICAgICAgfSxcbiAgICAgIG1heGNoZWNrOiB7XG4gICAgICAgIHZhbGlkYXRlTXVsdGlwbGU6IGZ1bmN0aW9uIHZhbGlkYXRlTXVsdGlwbGUodmFsdWVzLCByZXF1aXJlbWVudCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZXMubGVuZ3RoIDw9IHJlcXVpcmVtZW50O1xuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlbWVudFR5cGU6ICdpbnRlZ2VyJyxcbiAgICAgICAgcHJpb3JpdHk6IDMwXG4gICAgICB9LFxuICAgICAgY2hlY2s6IHtcbiAgICAgICAgdmFsaWRhdGVNdWx0aXBsZTogZnVuY3Rpb24gdmFsaWRhdGVNdWx0aXBsZSh2YWx1ZXMsIG1pbiwgbWF4KSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlcy5sZW5ndGggPj0gbWluICYmIHZhbHVlcy5sZW5ndGggPD0gbWF4O1xuICAgICAgICB9LFxuICAgICAgICByZXF1aXJlbWVudFR5cGU6IFsnaW50ZWdlcicsICdpbnRlZ2VyJ10sXG4gICAgICAgIHByaW9yaXR5OiAzMFxuICAgICAgfSxcbiAgICAgIG1pbjogVmFsaWRhdG9yUmVnaXN0cnlfX2NvbXBhcmlzb25PcGVyYXRvcihmdW5jdGlvbiAodmFsdWUsIHJlcXVpcmVtZW50KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSByZXF1aXJlbWVudDtcbiAgICAgIH0pLFxuICAgICAgbWF4OiBWYWxpZGF0b3JSZWdpc3RyeV9fY29tcGFyaXNvbk9wZXJhdG9yKGZ1bmN0aW9uICh2YWx1ZSwgcmVxdWlyZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIHZhbHVlIDw9IHJlcXVpcmVtZW50O1xuICAgICAgfSksXG4gICAgICByYW5nZTogVmFsaWRhdG9yUmVnaXN0cnlfX2NvbXBhcmlzb25PcGVyYXRvcihmdW5jdGlvbiAodmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA+PSBtaW4gJiYgdmFsdWUgPD0gbWF4O1xuICAgICAgfSksXG4gICAgICBlcXVhbHRvOiB7XG4gICAgICAgIHZhbGlkYXRlU3RyaW5nOiBmdW5jdGlvbiB2YWxpZGF0ZVN0cmluZyh2YWx1ZSwgcmVmT3JWYWx1ZSkge1xuICAgICAgICAgIHZhciAkcmVmZXJlbmNlID0gJChyZWZPclZhbHVlKTtcbiAgICAgICAgICBpZiAoJHJlZmVyZW5jZS5sZW5ndGgpIHJldHVybiB2YWx1ZSA9PT0gJHJlZmVyZW5jZS52YWwoKTtlbHNlIHJldHVybiB2YWx1ZSA9PT0gcmVmT3JWYWx1ZTtcbiAgICAgICAgfSxcbiAgICAgICAgcHJpb3JpdHk6IDI1NlxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICB2YXIgVUkgPSB7fTtcblxuICB2YXIgZGlmZlJlc3VsdHMgPSBmdW5jdGlvbiBkaWZmUmVzdWx0cyhuZXdSZXN1bHQsIG9sZFJlc3VsdCwgZGVlcCkge1xuICAgIHZhciBhZGRlZCA9IFtdO1xuICAgIHZhciBrZXB0ID0gW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld1Jlc3VsdC5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGZvdW5kID0gZmFsc2U7XG5cbiAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgb2xkUmVzdWx0Lmxlbmd0aDsgaisrKSBpZiAobmV3UmVzdWx0W2ldLmFzc2VydC5uYW1lID09PSBvbGRSZXN1bHRbal0uYXNzZXJ0Lm5hbWUpIHtcbiAgICAgICAgZm91bmQgPSB0cnVlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgaWYgKGZvdW5kKSBrZXB0LnB1c2gobmV3UmVzdWx0W2ldKTtlbHNlIGFkZGVkLnB1c2gobmV3UmVzdWx0W2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAga2VwdDoga2VwdCxcbiAgICAgIGFkZGVkOiBhZGRlZCxcbiAgICAgIHJlbW92ZWQ6ICFkZWVwID8gZGlmZlJlc3VsdHMob2xkUmVzdWx0LCBuZXdSZXN1bHQsIHRydWUpLmFkZGVkIDogW11cbiAgICB9O1xuICB9O1xuXG4gIFVJLkZvcm0gPSB7XG5cbiAgICBfYWN0dWFsaXplVHJpZ2dlcnM6IGZ1bmN0aW9uIF9hY3R1YWxpemVUcmlnZ2VycygpIHtcbiAgICAgIHZhciBfdGhpczIgPSB0aGlzO1xuXG4gICAgICB0aGlzLiRlbGVtZW50Lm9uKCdzdWJtaXQuUGFyc2xleScsIGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgX3RoaXMyLm9uU3VibWl0VmFsaWRhdGUoZXZ0KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy4kZWxlbWVudC5vbignY2xpY2suUGFyc2xleScsIFV0aWxzLl9TdWJtaXRTZWxlY3RvciwgZnVuY3Rpb24gKGV2dCkge1xuICAgICAgICBfdGhpczIub25TdWJtaXRCdXR0b24oZXZ0KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBVSSBjb3VsZCBiZSBkaXNhYmxlZFxuICAgICAgaWYgKGZhbHNlID09PSB0aGlzLm9wdGlvbnMudWlFbmFibGVkKSByZXR1cm47XG5cbiAgICAgIHRoaXMuZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ25vdmFsaWRhdGUnLCAnJyk7XG4gICAgfSxcblxuICAgIGZvY3VzOiBmdW5jdGlvbiBmb2N1cygpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWRGaWVsZCA9IG51bGw7XG5cbiAgICAgIGlmICh0cnVlID09PSB0aGlzLnZhbGlkYXRpb25SZXN1bHQgfHwgJ25vbmUnID09PSB0aGlzLm9wdGlvbnMuZm9jdXMpIHJldHVybiBudWxsO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZmllbGRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBmaWVsZCA9IHRoaXMuZmllbGRzW2ldO1xuICAgICAgICBpZiAodHJ1ZSAhPT0gZmllbGQudmFsaWRhdGlvblJlc3VsdCAmJiBmaWVsZC52YWxpZGF0aW9uUmVzdWx0Lmxlbmd0aCA+IDAgJiYgJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBmaWVsZC5vcHRpb25zLm5vRm9jdXMpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c2VkRmllbGQgPSBmaWVsZC4kZWxlbWVudDtcbiAgICAgICAgICBpZiAoJ2ZpcnN0JyA9PT0gdGhpcy5vcHRpb25zLmZvY3VzKSBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobnVsbCA9PT0gdGhpcy5fZm9jdXNlZEZpZWxkKSByZXR1cm4gbnVsbDtcblxuICAgICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRGaWVsZC5mb2N1cygpO1xuICAgIH0sXG5cbiAgICBfZGVzdHJveVVJOiBmdW5jdGlvbiBfZGVzdHJveVVJKCkge1xuICAgICAgLy8gUmVzZXQgYWxsIGV2ZW50IGxpc3RlbmVyc1xuICAgICAgdGhpcy4kZWxlbWVudC5vZmYoJy5QYXJzbGV5Jyk7XG4gICAgfVxuXG4gIH07XG5cbiAgVUkuRmllbGQgPSB7XG5cbiAgICBfcmVmbG93VUk6IGZ1bmN0aW9uIF9yZWZsb3dVSSgpIHtcbiAgICAgIHRoaXMuX2J1aWxkVUkoKTtcblxuICAgICAgLy8gSWYgdGhpcyBmaWVsZCBkb2Vzbid0IGhhdmUgYW4gYWN0aXZlIFVJIGRvbid0IGJvdGhlciBkb2luZyBzb21ldGhpbmdcbiAgICAgIGlmICghdGhpcy5fdWkpIHJldHVybjtcblxuICAgICAgLy8gRGlmZiBiZXR3ZWVuIHR3byB2YWxpZGF0aW9uIHJlc3VsdHNcbiAgICAgIHZhciBkaWZmID0gZGlmZlJlc3VsdHModGhpcy52YWxpZGF0aW9uUmVzdWx0LCB0aGlzLl91aS5sYXN0VmFsaWRhdGlvblJlc3VsdCk7XG5cbiAgICAgIC8vIFRoZW4gc3RvcmUgY3VycmVudCB2YWxpZGF0aW9uIHJlc3VsdCBmb3IgbmV4dCByZWZsb3dcbiAgICAgIHRoaXMuX3VpLmxhc3RWYWxpZGF0aW9uUmVzdWx0ID0gdGhpcy52YWxpZGF0aW9uUmVzdWx0O1xuXG4gICAgICAvLyBIYW5kbGUgdmFsaWQgLyBpbnZhbGlkIC8gbm9uZSBmaWVsZCBjbGFzc1xuICAgICAgdGhpcy5fbWFuYWdlU3RhdHVzQ2xhc3MoKTtcblxuICAgICAgLy8gQWRkLCByZW1vdmUsIHVwZGF0ZWQgZXJyb3JzIG1lc3NhZ2VzXG4gICAgICB0aGlzLl9tYW5hZ2VFcnJvcnNNZXNzYWdlcyhkaWZmKTtcblxuICAgICAgLy8gVHJpZ2dlcnMgaW1wbFxuICAgICAgdGhpcy5fYWN0dWFsaXplVHJpZ2dlcnMoKTtcblxuICAgICAgLy8gSWYgZmllbGQgaXMgbm90IHZhbGlkIGZvciB0aGUgZmlyc3QgdGltZSwgYmluZCBrZXl1cCB0cmlnZ2VyIHRvIGVhc2UgVVggYW5kIHF1aWNrbHkgaW5mb3JtIHVzZXJcbiAgICAgIGlmICgoZGlmZi5rZXB0Lmxlbmd0aCB8fCBkaWZmLmFkZGVkLmxlbmd0aCkgJiYgIXRoaXMuX2ZhaWxlZE9uY2UpIHtcbiAgICAgICAgdGhpcy5fZmFpbGVkT25jZSA9IHRydWU7XG4gICAgICAgIHRoaXMuX2FjdHVhbGl6ZVRyaWdnZXJzKCk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8vIFJldHVybnMgYW4gYXJyYXkgb2YgZmllbGQncyBlcnJvciBtZXNzYWdlKHMpXG4gICAgZ2V0RXJyb3JzTWVzc2FnZXM6IGZ1bmN0aW9uIGdldEVycm9yc01lc3NhZ2VzKCkge1xuICAgICAgLy8gTm8gZXJyb3IgbWVzc2FnZSwgZmllbGQgaXMgdmFsaWRcbiAgICAgIGlmICh0cnVlID09PSB0aGlzLnZhbGlkYXRpb25SZXN1bHQpIHJldHVybiBbXTtcblxuICAgICAgdmFyIG1lc3NhZ2VzID0gW107XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy52YWxpZGF0aW9uUmVzdWx0Lmxlbmd0aDsgaSsrKSBtZXNzYWdlcy5wdXNoKHRoaXMudmFsaWRhdGlvblJlc3VsdFtpXS5lcnJvck1lc3NhZ2UgfHwgdGhpcy5fZ2V0RXJyb3JNZXNzYWdlKHRoaXMudmFsaWRhdGlvblJlc3VsdFtpXS5hc3NlcnQpKTtcblxuICAgICAgcmV0dXJuIG1lc3NhZ2VzO1xuICAgIH0sXG5cbiAgICAvLyBJdCdzIGEgZ29hbCBvZiBQYXJzbGV5IHRoYXQgdGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkIFsjMTA3M11cbiAgICBhZGRFcnJvcjogZnVuY3Rpb24gYWRkRXJyb3IobmFtZSkge1xuICAgICAgdmFyIF9yZWYyID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBtZXNzYWdlID0gX3JlZjIubWVzc2FnZTtcbiAgICAgIHZhciBhc3NlcnQgPSBfcmVmMi5hc3NlcnQ7XG4gICAgICB2YXIgX3JlZjIkdXBkYXRlQ2xhc3MgPSBfcmVmMi51cGRhdGVDbGFzcztcbiAgICAgIHZhciB1cGRhdGVDbGFzcyA9IF9yZWYyJHVwZGF0ZUNsYXNzID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjIkdXBkYXRlQ2xhc3M7XG5cbiAgICAgIHRoaXMuX2J1aWxkVUkoKTtcbiAgICAgIHRoaXMuX2FkZEVycm9yKG5hbWUsIHsgbWVzc2FnZTogbWVzc2FnZSwgYXNzZXJ0OiBhc3NlcnQgfSk7XG5cbiAgICAgIGlmICh1cGRhdGVDbGFzcykgdGhpcy5fZXJyb3JDbGFzcygpO1xuICAgIH0sXG5cbiAgICAvLyBJdCdzIGEgZ29hbCBvZiBQYXJzbGV5IHRoYXQgdGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkIFsjMTA3M11cbiAgICB1cGRhdGVFcnJvcjogZnVuY3Rpb24gdXBkYXRlRXJyb3IobmFtZSkge1xuICAgICAgdmFyIF9yZWYzID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBtZXNzYWdlID0gX3JlZjMubWVzc2FnZTtcbiAgICAgIHZhciBhc3NlcnQgPSBfcmVmMy5hc3NlcnQ7XG4gICAgICB2YXIgX3JlZjMkdXBkYXRlQ2xhc3MgPSBfcmVmMy51cGRhdGVDbGFzcztcbiAgICAgIHZhciB1cGRhdGVDbGFzcyA9IF9yZWYzJHVwZGF0ZUNsYXNzID09PSB1bmRlZmluZWQgPyB0cnVlIDogX3JlZjMkdXBkYXRlQ2xhc3M7XG5cbiAgICAgIHRoaXMuX2J1aWxkVUkoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZUVycm9yKG5hbWUsIHsgbWVzc2FnZTogbWVzc2FnZSwgYXNzZXJ0OiBhc3NlcnQgfSk7XG5cbiAgICAgIGlmICh1cGRhdGVDbGFzcykgdGhpcy5fZXJyb3JDbGFzcygpO1xuICAgIH0sXG5cbiAgICAvLyBJdCdzIGEgZ29hbCBvZiBQYXJzbGV5IHRoYXQgdGhpcyBtZXRob2QgaXMgbm8gbG9uZ2VyIHJlcXVpcmVkIFsjMTA3M11cbiAgICByZW1vdmVFcnJvcjogZnVuY3Rpb24gcmVtb3ZlRXJyb3IobmFtZSkge1xuICAgICAgdmFyIF9yZWY0ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMV07XG5cbiAgICAgIHZhciBfcmVmNCR1cGRhdGVDbGFzcyA9IF9yZWY0LnVwZGF0ZUNsYXNzO1xuICAgICAgdmFyIHVwZGF0ZUNsYXNzID0gX3JlZjQkdXBkYXRlQ2xhc3MgPT09IHVuZGVmaW5lZCA/IHRydWUgOiBfcmVmNCR1cGRhdGVDbGFzcztcblxuICAgICAgdGhpcy5fYnVpbGRVSSgpO1xuICAgICAgdGhpcy5fcmVtb3ZlRXJyb3IobmFtZSk7XG5cbiAgICAgIC8vIGVkZ2UgY2FzZSBwb3NzaWJsZSBoZXJlOiByZW1vdmUgYSBzdGFuZGFyZCBQYXJzbGV5IGVycm9yIHRoYXQgaXMgc3RpbGwgZmFpbGluZyBpbiB0aGlzLnZhbGlkYXRpb25SZXN1bHRcbiAgICAgIC8vIGJ1dCBoaWdobHkgaW1wcm9iYWJsZSBjdXonIG1hbnVhbGx5IHJlbW92aW5nIGEgd2VsbCBQYXJzbGV5IGhhbmRsZWQgZXJyb3IgbWFrZXMgbm8gc2Vuc2UuXG4gICAgICBpZiAodXBkYXRlQ2xhc3MpIHRoaXMuX21hbmFnZVN0YXR1c0NsYXNzKCk7XG4gICAgfSxcblxuICAgIF9tYW5hZ2VTdGF0dXNDbGFzczogZnVuY3Rpb24gX21hbmFnZVN0YXR1c0NsYXNzKCkge1xuICAgICAgaWYgKHRoaXMuaGFzQ29uc3RyYWludHMoKSAmJiB0aGlzLm5lZWRzVmFsaWRhdGlvbigpICYmIHRydWUgPT09IHRoaXMudmFsaWRhdGlvblJlc3VsdCkgdGhpcy5fc3VjY2Vzc0NsYXNzKCk7ZWxzZSBpZiAodGhpcy52YWxpZGF0aW9uUmVzdWx0Lmxlbmd0aCA+IDApIHRoaXMuX2Vycm9yQ2xhc3MoKTtlbHNlIHRoaXMuX3Jlc2V0Q2xhc3MoKTtcbiAgICB9LFxuXG4gICAgX21hbmFnZUVycm9yc01lc3NhZ2VzOiBmdW5jdGlvbiBfbWFuYWdlRXJyb3JzTWVzc2FnZXMoZGlmZikge1xuICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgdGhpcy5vcHRpb25zLmVycm9yc01lc3NhZ2VzRGlzYWJsZWQpIHJldHVybjtcblxuICAgICAgLy8gQ2FzZSB3aGVyZSB3ZSBoYXZlIGVycm9yTWVzc2FnZSBvcHRpb24gdGhhdCBjb25maWd1cmUgYW4gdW5pcXVlIGZpZWxkIGVycm9yIG1lc3NhZ2UsIHJlZ2FyZGxlc3MgZmFpbGluZyB2YWxpZGF0b3JzXG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiB0aGlzLm9wdGlvbnMuZXJyb3JNZXNzYWdlKSB7XG4gICAgICAgIGlmIChkaWZmLmFkZGVkLmxlbmd0aCB8fCBkaWZmLmtlcHQubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy5faW5zZXJ0RXJyb3JXcmFwcGVyKCk7XG5cbiAgICAgICAgICBpZiAoMCA9PT0gdGhpcy5fdWkuJGVycm9yc1dyYXBwZXIuZmluZCgnLnBhcnNsZXktY3VzdG9tLWVycm9yLW1lc3NhZ2UnKS5sZW5ndGgpIHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyLmFwcGVuZCgkKHRoaXMub3B0aW9ucy5lcnJvclRlbXBsYXRlKS5hZGRDbGFzcygncGFyc2xleS1jdXN0b20tZXJyb3ItbWVzc2FnZScpKTtcblxuICAgICAgICAgIHJldHVybiB0aGlzLl91aS4kZXJyb3JzV3JhcHBlci5hZGRDbGFzcygnZmlsbGVkJykuZmluZCgnLnBhcnNsZXktY3VzdG9tLWVycm9yLW1lc3NhZ2UnKS5odG1sKHRoaXMub3B0aW9ucy5lcnJvck1lc3NhZ2UpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyLnJlbW92ZUNsYXNzKCdmaWxsZWQnKS5maW5kKCcucGFyc2xleS1jdXN0b20tZXJyb3ItbWVzc2FnZScpLnJlbW92ZSgpO1xuICAgICAgfVxuXG4gICAgICAvLyBTaG93LCBoaWRlLCB1cGRhdGUgZmFpbGluZyBjb25zdHJhaW50cyBtZXNzYWdlc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBkaWZmLnJlbW92ZWQubGVuZ3RoOyBpKyspIHRoaXMuX3JlbW92ZUVycm9yKGRpZmYucmVtb3ZlZFtpXS5hc3NlcnQubmFtZSk7XG5cbiAgICAgIGZvciAoaSA9IDA7IGkgPCBkaWZmLmFkZGVkLmxlbmd0aDsgaSsrKSB0aGlzLl9hZGRFcnJvcihkaWZmLmFkZGVkW2ldLmFzc2VydC5uYW1lLCB7IG1lc3NhZ2U6IGRpZmYuYWRkZWRbaV0uZXJyb3JNZXNzYWdlLCBhc3NlcnQ6IGRpZmYuYWRkZWRbaV0uYXNzZXJ0IH0pO1xuXG4gICAgICBmb3IgKGkgPSAwOyBpIDwgZGlmZi5rZXB0Lmxlbmd0aDsgaSsrKSB0aGlzLl91cGRhdGVFcnJvcihkaWZmLmtlcHRbaV0uYXNzZXJ0Lm5hbWUsIHsgbWVzc2FnZTogZGlmZi5rZXB0W2ldLmVycm9yTWVzc2FnZSwgYXNzZXJ0OiBkaWZmLmtlcHRbaV0uYXNzZXJ0IH0pO1xuICAgIH0sXG5cbiAgICBfYWRkRXJyb3I6IGZ1bmN0aW9uIF9hZGRFcnJvcihuYW1lLCBfcmVmNSkge1xuICAgICAgdmFyIG1lc3NhZ2UgPSBfcmVmNS5tZXNzYWdlO1xuICAgICAgdmFyIGFzc2VydCA9IF9yZWY1LmFzc2VydDtcblxuICAgICAgdGhpcy5faW5zZXJ0RXJyb3JXcmFwcGVyKCk7XG4gICAgICB0aGlzLl91aS4kZXJyb3JDbGFzc0hhbmRsZXIuYXR0cignYXJpYS1kZXNjcmliZWRieScsIHRoaXMuX3VpLmVycm9yc1dyYXBwZXJJZCk7XG4gICAgICB0aGlzLl91aS4kZXJyb3JzV3JhcHBlci5hZGRDbGFzcygnZmlsbGVkJykuYXBwZW5kKCQodGhpcy5vcHRpb25zLmVycm9yVGVtcGxhdGUpLmFkZENsYXNzKCdwYXJzbGV5LScgKyBuYW1lKS5odG1sKG1lc3NhZ2UgfHwgdGhpcy5fZ2V0RXJyb3JNZXNzYWdlKGFzc2VydCkpKTtcbiAgICB9LFxuXG4gICAgX3VwZGF0ZUVycm9yOiBmdW5jdGlvbiBfdXBkYXRlRXJyb3IobmFtZSwgX3JlZjYpIHtcbiAgICAgIHZhciBtZXNzYWdlID0gX3JlZjYubWVzc2FnZTtcbiAgICAgIHZhciBhc3NlcnQgPSBfcmVmNi5hc3NlcnQ7XG5cbiAgICAgIHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyLmFkZENsYXNzKCdmaWxsZWQnKS5maW5kKCcucGFyc2xleS0nICsgbmFtZSkuaHRtbChtZXNzYWdlIHx8IHRoaXMuX2dldEVycm9yTWVzc2FnZShhc3NlcnQpKTtcbiAgICB9LFxuXG4gICAgX3JlbW92ZUVycm9yOiBmdW5jdGlvbiBfcmVtb3ZlRXJyb3IobmFtZSkge1xuICAgICAgdGhpcy5fdWkuJGVycm9yQ2xhc3NIYW5kbGVyLnJlbW92ZUF0dHIoJ2FyaWEtZGVzY3JpYmVkYnknKTtcbiAgICAgIHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyLnJlbW92ZUNsYXNzKCdmaWxsZWQnKS5maW5kKCcucGFyc2xleS0nICsgbmFtZSkucmVtb3ZlKCk7XG4gICAgfSxcblxuICAgIF9nZXRFcnJvck1lc3NhZ2U6IGZ1bmN0aW9uIF9nZXRFcnJvck1lc3NhZ2UoY29uc3RyYWludCkge1xuICAgICAgdmFyIGN1c3RvbUNvbnN0cmFpbnRFcnJvck1lc3NhZ2UgPSBjb25zdHJhaW50Lm5hbWUgKyAnTWVzc2FnZSc7XG5cbiAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHRoaXMub3B0aW9uc1tjdXN0b21Db25zdHJhaW50RXJyb3JNZXNzYWdlXSkgcmV0dXJuIHdpbmRvdy5QYXJzbGV5LmZvcm1hdE1lc3NhZ2UodGhpcy5vcHRpb25zW2N1c3RvbUNvbnN0cmFpbnRFcnJvck1lc3NhZ2VdLCBjb25zdHJhaW50LnJlcXVpcmVtZW50cyk7XG5cbiAgICAgIHJldHVybiB3aW5kb3cuUGFyc2xleS5nZXRFcnJvck1lc3NhZ2UoY29uc3RyYWludCk7XG4gICAgfSxcblxuICAgIF9idWlsZFVJOiBmdW5jdGlvbiBfYnVpbGRVSSgpIHtcbiAgICAgIC8vIFVJIGNvdWxkIGJlIGFscmVhZHkgYnVpbHQgb3IgZGlzYWJsZWRcbiAgICAgIGlmICh0aGlzLl91aSB8fCBmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnVpRW5hYmxlZCkgcmV0dXJuO1xuXG4gICAgICB2YXIgX3VpID0ge307XG5cbiAgICAgIC8vIEdpdmUgZmllbGQgaXRzIFBhcnNsZXkgaWQgaW4gRE9NXG4gICAgICB0aGlzLmVsZW1lbnQuc2V0QXR0cmlidXRlKHRoaXMub3B0aW9ucy5uYW1lc3BhY2UgKyAnaWQnLCB0aGlzLl9faWRfXyk7XG5cbiAgICAgIC8qKiBHZW5lcmF0ZSBpbXBvcnRhbnQgVUkgZWxlbWVudHMgYW5kIHN0b3JlIHRoZW0gaW4gdGhpcyAqKi9cbiAgICAgIC8vICRlcnJvckNsYXNzSGFuZGxlciBpcyB0aGUgJGVsZW1lbnQgdGhhdCB3b3VsIGhhdmUgcGFyc2xleS1lcnJvciBhbmQgcGFyc2xleS1zdWNjZXNzIGNsYXNzZXNcbiAgICAgIF91aS4kZXJyb3JDbGFzc0hhbmRsZXIgPSB0aGlzLl9tYW5hZ2VDbGFzc0hhbmRsZXIoKTtcblxuICAgICAgLy8gJGVycm9yc1dyYXBwZXIgaXMgYSBkaXYgdGhhdCB3b3VsZCBjb250YWluIHRoZSB2YXJpb3VzIGZpZWxkIGVycm9ycywgaXQgd2lsbCBiZSBhcHBlbmRlZCBpbnRvICRlcnJvcnNDb250YWluZXJcbiAgICAgIF91aS5lcnJvcnNXcmFwcGVySWQgPSAncGFyc2xleS1pZC0nICsgKHRoaXMub3B0aW9ucy5tdWx0aXBsZSA/ICdtdWx0aXBsZS0nICsgdGhpcy5vcHRpb25zLm11bHRpcGxlIDogdGhpcy5fX2lkX18pO1xuICAgICAgX3VpLiRlcnJvcnNXcmFwcGVyID0gJCh0aGlzLm9wdGlvbnMuZXJyb3JzV3JhcHBlcikuYXR0cignaWQnLCBfdWkuZXJyb3JzV3JhcHBlcklkKTtcblxuICAgICAgLy8gVmFsaWRhdGlvblJlc3VsdCBVSSBzdG9yYWdlIHRvIGRldGVjdCB3aGF0IGhhdmUgY2hhbmdlZCBid3QgdHdvIHZhbGlkYXRpb25zLCBhbmQgdXBkYXRlIERPTSBhY2NvcmRpbmdseVxuICAgICAgX3VpLmxhc3RWYWxpZGF0aW9uUmVzdWx0ID0gW107XG4gICAgICBfdWkudmFsaWRhdGlvbkluZm9ybWF0aW9uVmlzaWJsZSA9IGZhbHNlO1xuXG4gICAgICAvLyBTdG9yZSBpdCBpbiB0aGlzIGZvciBsYXRlclxuICAgICAgdGhpcy5fdWkgPSBfdWk7XG4gICAgfSxcblxuICAgIC8vIERldGVybWluZSB3aGljaCBlbGVtZW50IHdpbGwgaGF2ZSBgcGFyc2xleS1lcnJvcmAgYW5kIGBwYXJzbGV5LXN1Y2Nlc3NgIGNsYXNzZXNcbiAgICBfbWFuYWdlQ2xhc3NIYW5kbGVyOiBmdW5jdGlvbiBfbWFuYWdlQ2xhc3NIYW5kbGVyKCkge1xuICAgICAgLy8gQ2xhc3MgaGFuZGxlZCBjb3VsZCBhbHNvIGJlIGRldGVybWluZWQgYnkgZnVuY3Rpb24gZ2l2ZW4gaW4gUGFyc2xleSBvcHRpb25zXG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiB0aGlzLm9wdGlvbnMuY2xhc3NIYW5kbGVyICYmICQodGhpcy5vcHRpb25zLmNsYXNzSGFuZGxlcikubGVuZ3RoKSByZXR1cm4gJCh0aGlzLm9wdGlvbnMuY2xhc3NIYW5kbGVyKTtcblxuICAgICAgLy8gQ2xhc3MgaGFuZGxlZCBjb3VsZCBhbHNvIGJlIGRldGVybWluZWQgYnkgZnVuY3Rpb24gZ2l2ZW4gaW4gUGFyc2xleSBvcHRpb25zXG4gICAgICB2YXIgJGhhbmRsZXJGdW5jdGlvbiA9IHRoaXMub3B0aW9ucy5jbGFzc0hhbmRsZXI7XG5cbiAgICAgIC8vIEl0IG1pZ2h0IGFsc28gYmUgdGhlIGZ1bmN0aW9uIG5hbWUgb2YgYSBnbG9iYWwgZnVuY3Rpb25cbiAgICAgIGlmICgnc3RyaW5nJyA9PT0gdHlwZW9mIHRoaXMub3B0aW9ucy5jbGFzc0hhbmRsZXIgJiYgJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mIHdpbmRvd1t0aGlzLm9wdGlvbnMuY2xhc3NIYW5kbGVyXSkgJGhhbmRsZXJGdW5jdGlvbiA9IHdpbmRvd1t0aGlzLm9wdGlvbnMuY2xhc3NIYW5kbGVyXTtcblxuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiAkaGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHZhciAkaGFuZGxlciA9ICRoYW5kbGVyRnVuY3Rpb24uY2FsbCh0aGlzLCB0aGlzKTtcblxuICAgICAgICAvLyBJZiB0aGlzIGZ1bmN0aW9uIHJldHVybmVkIGEgdmFsaWQgZXhpc3RpbmcgRE9NIGVsZW1lbnQsIGdvIGZvciBpdFxuICAgICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiAkaGFuZGxlciAmJiAkaGFuZGxlci5sZW5ndGgpIHJldHVybiAkaGFuZGxlcjtcbiAgICAgIH0gZWxzZSBpZiAoJ29iamVjdCcgPT09IHR5cGVvZiAkaGFuZGxlckZ1bmN0aW9uICYmICRoYW5kbGVyRnVuY3Rpb24gaW5zdGFuY2VvZiBqUXVlcnkgJiYgJGhhbmRsZXJGdW5jdGlvbi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICRoYW5kbGVyRnVuY3Rpb247XG4gICAgICB9IGVsc2UgaWYgKCRoYW5kbGVyRnVuY3Rpb24pIHtcbiAgICAgICAgVXRpbHMud2FybignVGhlIGNsYXNzIGhhbmRsZXIgYCcgKyAkaGFuZGxlckZ1bmN0aW9uICsgJ2AgZG9lcyBub3QgZXhpc3QgaW4gRE9NIG5vciBhcyBhIGdsb2JhbCBKUyBmdW5jdGlvbicpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRIb2xkZXIoKTtcbiAgICB9LFxuXG4gICAgX2lucHV0SG9sZGVyOiBmdW5jdGlvbiBfaW5wdXRIb2xkZXIoKSB7XG4gICAgICAvLyBpZiBzaW1wbGUgZWxlbWVudCAoaW5wdXQsIHRleGF0cmVhLCBzZWxlY3QuLi4pIGl0IHdpbGwgcGVyZmVjdGx5IGhvc3QgdGhlIGNsYXNzZXMgYW5kIHByZWNlZGUgdGhlIGVycm9yIGNvbnRhaW5lclxuICAgICAgaWYgKCF0aGlzLm9wdGlvbnMubXVsdGlwbGUgfHwgdGhpcy5lbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykgcmV0dXJuIHRoaXMuJGVsZW1lbnQ7XG5cbiAgICAgIC8vIEJ1dCBpZiBtdWx0aXBsZSBlbGVtZW50IChyYWRpbywgY2hlY2tib3gpLCB0aGF0IHdvdWxkIGJlIHRoZWlyIHBhcmVudFxuICAgICAgcmV0dXJuIHRoaXMuJGVsZW1lbnQucGFyZW50KCk7XG4gICAgfSxcblxuICAgIF9pbnNlcnRFcnJvcldyYXBwZXI6IGZ1bmN0aW9uIF9pbnNlcnRFcnJvcldyYXBwZXIoKSB7XG4gICAgICB2YXIgJGVycm9yc0NvbnRhaW5lciA9IHRoaXMub3B0aW9ucy5lcnJvcnNDb250YWluZXI7XG5cbiAgICAgIC8vIE5vdGhpbmcgdG8gZG8gaWYgYWxyZWFkeSBpbnNlcnRlZFxuICAgICAgaWYgKDAgIT09IHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyLnBhcmVudCgpLmxlbmd0aCkgcmV0dXJuIHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyLnBhcmVudCgpO1xuXG4gICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZiAkZXJyb3JzQ29udGFpbmVyKSB7XG4gICAgICAgIGlmICgkKCRlcnJvcnNDb250YWluZXIpLmxlbmd0aCkgcmV0dXJuICQoJGVycm9yc0NvbnRhaW5lcikuYXBwZW5kKHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyKTtlbHNlIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2Ygd2luZG93WyRlcnJvcnNDb250YWluZXJdKSAkZXJyb3JzQ29udGFpbmVyID0gd2luZG93WyRlcnJvcnNDb250YWluZXJdO2Vsc2UgVXRpbHMud2FybignVGhlIGVycm9ycyBjb250YWluZXIgYCcgKyAkZXJyb3JzQ29udGFpbmVyICsgJ2AgZG9lcyBub3QgZXhpc3QgaW4gRE9NIG5vciBhcyBhIGdsb2JhbCBKUyBmdW5jdGlvbicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoJ2Z1bmN0aW9uJyA9PT0gdHlwZW9mICRlcnJvcnNDb250YWluZXIpICRlcnJvcnNDb250YWluZXIgPSAkZXJyb3JzQ29udGFpbmVyLmNhbGwodGhpcywgdGhpcyk7XG5cbiAgICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mICRlcnJvcnNDb250YWluZXIgJiYgJGVycm9yc0NvbnRhaW5lci5sZW5ndGgpIHJldHVybiAkZXJyb3JzQ29udGFpbmVyLmFwcGVuZCh0aGlzLl91aS4kZXJyb3JzV3JhcHBlcik7XG5cbiAgICAgIHJldHVybiB0aGlzLl9pbnB1dEhvbGRlcigpLmFmdGVyKHRoaXMuX3VpLiRlcnJvcnNXcmFwcGVyKTtcbiAgICB9LFxuXG4gICAgX2FjdHVhbGl6ZVRyaWdnZXJzOiBmdW5jdGlvbiBfYWN0dWFsaXplVHJpZ2dlcnMoKSB7XG4gICAgICB2YXIgX3RoaXMzID0gdGhpcztcblxuICAgICAgdmFyICR0b0JpbmQgPSB0aGlzLl9maW5kUmVsYXRlZCgpO1xuICAgICAgdmFyIHRyaWdnZXI7XG5cbiAgICAgIC8vIFJlbW92ZSBQYXJzbGV5IGV2ZW50cyBhbHJlYWR5IGJvdW5kIG9uIHRoaXMgZmllbGRcbiAgICAgICR0b0JpbmQub2ZmKCcuUGFyc2xleScpO1xuICAgICAgaWYgKHRoaXMuX2ZhaWxlZE9uY2UpICR0b0JpbmQub24oVXRpbHMubmFtZXNwYWNlRXZlbnRzKHRoaXMub3B0aW9ucy50cmlnZ2VyQWZ0ZXJGYWlsdXJlLCAnUGFyc2xleScpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMy5fdmFsaWRhdGVJZk5lZWRlZCgpO1xuICAgICAgfSk7ZWxzZSBpZiAodHJpZ2dlciA9IFV0aWxzLm5hbWVzcGFjZUV2ZW50cyh0aGlzLm9wdGlvbnMudHJpZ2dlciwgJ1BhcnNsZXknKSkge1xuICAgICAgICAkdG9CaW5kLm9uKHRyaWdnZXIsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgIF90aGlzMy5fdmFsaWRhdGVJZk5lZWRlZChldmVudCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBfdmFsaWRhdGVJZk5lZWRlZDogZnVuY3Rpb24gX3ZhbGlkYXRlSWZOZWVkZWQoZXZlbnQpIHtcbiAgICAgIHZhciBfdGhpczQgPSB0aGlzO1xuXG4gICAgICAvLyBGb3Iga2V5dXAsIGtleXByZXNzLCBrZXlkb3duLCBpbnB1dC4uLiBldmVudHMgdGhhdCBjb3VsZCBiZSBhIGxpdHRsZSBiaXQgb2JzdHJ1c2l2ZVxuICAgICAgLy8gZG8gbm90IHZhbGlkYXRlIGlmIHZhbCBsZW5ndGggPCBtaW4gdGhyZXNob2xkIG9uIGZpcnN0IHZhbGlkYXRpb24uIE9uY2UgZmllbGQgaGF2ZSBiZWVuIHZhbGlkYXRlZCBvbmNlIGFuZCBpbmZvXG4gICAgICAvLyBhYm91dCBzdWNjZXNzIG9yIGZhaWx1cmUgaGF2ZSBiZWVuIGRpc3BsYXllZCwgYWx3YXlzIHZhbGlkYXRlIHdpdGggdGhpcyB0cmlnZ2VyIHRvIHJlZmxlY3QgZXZlcnkgeWFsaWRhdGlvbiBjaGFuZ2UuXG4gICAgICBpZiAoZXZlbnQgJiYgL2tleXxpbnB1dC8udGVzdChldmVudC50eXBlKSkgaWYgKCEodGhpcy5fdWkgJiYgdGhpcy5fdWkudmFsaWRhdGlvbkluZm9ybWF0aW9uVmlzaWJsZSkgJiYgdGhpcy5nZXRWYWx1ZSgpLmxlbmd0aCA8PSB0aGlzLm9wdGlvbnMudmFsaWRhdGlvblRocmVzaG9sZCkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5vcHRpb25zLmRlYm91bmNlKSB7XG4gICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy5fZGVib3VuY2VkKTtcbiAgICAgICAgdGhpcy5fZGVib3VuY2VkID0gd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiBfdGhpczQudmFsaWRhdGUoKTtcbiAgICAgICAgfSwgdGhpcy5vcHRpb25zLmRlYm91bmNlKTtcbiAgICAgIH0gZWxzZSB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfSxcblxuICAgIF9yZXNldFVJOiBmdW5jdGlvbiBfcmVzZXRVSSgpIHtcbiAgICAgIC8vIFJlc2V0IGFsbCBldmVudCBsaXN0ZW5lcnNcbiAgICAgIHRoaXMuX2ZhaWxlZE9uY2UgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2FjdHVhbGl6ZVRyaWdnZXJzKCk7XG5cbiAgICAgIC8vIE5vdGhpbmcgdG8gZG8gaWYgVUkgbmV2ZXIgaW5pdGlhbGl6ZWQgZm9yIHRoaXMgZmllbGRcbiAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHRoaXMuX3VpKSByZXR1cm47XG5cbiAgICAgIC8vIFJlc2V0IGFsbCBlcnJvcnMnIGxpXG4gICAgICB0aGlzLl91aS4kZXJyb3JzV3JhcHBlci5yZW1vdmVDbGFzcygnZmlsbGVkJykuY2hpbGRyZW4oKS5yZW1vdmUoKTtcblxuICAgICAgLy8gUmVzZXQgdmFsaWRhdGlvbiBjbGFzc1xuICAgICAgdGhpcy5fcmVzZXRDbGFzcygpO1xuXG4gICAgICAvLyBSZXNldCB2YWxpZGF0aW9uIGZsYWdzIGFuZCBsYXN0IHZhbGlkYXRpb24gcmVzdWx0XG4gICAgICB0aGlzLl91aS5sYXN0VmFsaWRhdGlvblJlc3VsdCA9IFtdO1xuICAgICAgdGhpcy5fdWkudmFsaWRhdGlvbkluZm9ybWF0aW9uVmlzaWJsZSA9IGZhbHNlO1xuICAgIH0sXG5cbiAgICBfZGVzdHJveVVJOiBmdW5jdGlvbiBfZGVzdHJveVVJKCkge1xuICAgICAgdGhpcy5fcmVzZXRVSSgpO1xuXG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiB0aGlzLl91aSkgdGhpcy5fdWkuJGVycm9yc1dyYXBwZXIucmVtb3ZlKCk7XG5cbiAgICAgIGRlbGV0ZSB0aGlzLl91aTtcbiAgICB9LFxuXG4gICAgX3N1Y2Nlc3NDbGFzczogZnVuY3Rpb24gX3N1Y2Nlc3NDbGFzcygpIHtcbiAgICAgIHRoaXMuX3VpLnZhbGlkYXRpb25JbmZvcm1hdGlvblZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5fdWkuJGVycm9yQ2xhc3NIYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5lcnJvckNsYXNzKS5hZGRDbGFzcyh0aGlzLm9wdGlvbnMuc3VjY2Vzc0NsYXNzKTtcbiAgICB9LFxuICAgIF9lcnJvckNsYXNzOiBmdW5jdGlvbiBfZXJyb3JDbGFzcygpIHtcbiAgICAgIHRoaXMuX3VpLnZhbGlkYXRpb25JbmZvcm1hdGlvblZpc2libGUgPSB0cnVlO1xuICAgICAgdGhpcy5fdWkuJGVycm9yQ2xhc3NIYW5kbGVyLnJlbW92ZUNsYXNzKHRoaXMub3B0aW9ucy5zdWNjZXNzQ2xhc3MpLmFkZENsYXNzKHRoaXMub3B0aW9ucy5lcnJvckNsYXNzKTtcbiAgICB9LFxuICAgIF9yZXNldENsYXNzOiBmdW5jdGlvbiBfcmVzZXRDbGFzcygpIHtcbiAgICAgIHRoaXMuX3VpLiRlcnJvckNsYXNzSGFuZGxlci5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuc3VjY2Vzc0NsYXNzKS5yZW1vdmVDbGFzcyh0aGlzLm9wdGlvbnMuZXJyb3JDbGFzcyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBGb3JtID0gZnVuY3Rpb24gRm9ybShlbGVtZW50LCBkb21PcHRpb25zLCBvcHRpb25zKSB7XG4gICAgdGhpcy5fX2NsYXNzX18gPSAnRm9ybSc7XG5cbiAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIHRoaXMuJGVsZW1lbnQgPSAkKGVsZW1lbnQpO1xuICAgIHRoaXMuZG9tT3B0aW9ucyA9IGRvbU9wdGlvbnM7XG4gICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB0aGlzLnBhcmVudCA9IHdpbmRvdy5QYXJzbGV5O1xuXG4gICAgdGhpcy5maWVsZHMgPSBbXTtcbiAgICB0aGlzLnZhbGlkYXRpb25SZXN1bHQgPSBudWxsO1xuICB9O1xuXG4gIHZhciBGb3JtX19zdGF0dXNNYXBwaW5nID0geyBwZW5kaW5nOiBudWxsLCByZXNvbHZlZDogdHJ1ZSwgcmVqZWN0ZWQ6IGZhbHNlIH07XG5cbiAgRm9ybS5wcm90b3R5cGUgPSB7XG4gICAgb25TdWJtaXRWYWxpZGF0ZTogZnVuY3Rpb24gb25TdWJtaXRWYWxpZGF0ZShldmVudCkge1xuICAgICAgdmFyIF90aGlzNSA9IHRoaXM7XG5cbiAgICAgIC8vIFRoaXMgaXMgYSBQYXJzbGV5IGdlbmVyYXRlZCBzdWJtaXQgZXZlbnQsIGRvIG5vdCB2YWxpZGF0ZSwgZG8gbm90IHByZXZlbnQsIHNpbXBseSBleGl0IGFuZCBrZWVwIG5vcm1hbCBiZWhhdmlvclxuICAgICAgaWYgKHRydWUgPT09IGV2ZW50LnBhcnNsZXkpIHJldHVybjtcblxuICAgICAgLy8gSWYgd2UgZGlkbid0IGNvbWUgaGVyZSB0aHJvdWdoIGEgc3VibWl0IGJ1dHRvbiwgdXNlIHRoZSBmaXJzdCBvbmUgaW4gdGhlIGZvcm1cbiAgICAgIHZhciBzdWJtaXRTb3VyY2UgPSB0aGlzLl9zdWJtaXRTb3VyY2UgfHwgdGhpcy4kZWxlbWVudC5maW5kKFV0aWxzLl9TdWJtaXRTZWxlY3RvcilbMF07XG4gICAgICB0aGlzLl9zdWJtaXRTb3VyY2UgPSBudWxsO1xuICAgICAgdGhpcy4kZWxlbWVudC5maW5kKCcucGFyc2xleS1zeW50aGV0aWMtc3VibWl0LWJ1dHRvbicpLnByb3AoJ2Rpc2FibGVkJywgdHJ1ZSk7XG4gICAgICBpZiAoc3VibWl0U291cmNlICYmIG51bGwgIT09IHN1Ym1pdFNvdXJjZS5nZXRBdHRyaWJ1dGUoJ2Zvcm1ub3ZhbGlkYXRlJykpIHJldHVybjtcblxuICAgICAgd2luZG93LlBhcnNsZXkuX3JlbW90ZUNhY2hlID0ge307XG5cbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy53aGVuVmFsaWRhdGUoeyBldmVudDogZXZlbnQgfSk7XG5cbiAgICAgIGlmICgncmVzb2x2ZWQnID09PSBwcm9taXNlLnN0YXRlKCkgJiYgZmFsc2UgIT09IHRoaXMuX3RyaWdnZXIoJ3N1Ym1pdCcpKSB7XG4gICAgICAgIC8vIEFsbCBnb29kLCBsZXQgZXZlbnQgZ28gdGhyb3VnaC4gV2UgbWFrZSB0aGlzIGRpc3RpbmN0aW9uIGJlY2F1c2UgYnJvd3NlcnNcbiAgICAgICAgLy8gZGlmZmVyIGluIHRoZWlyIGhhbmRsaW5nIG9mIGBzdWJtaXRgIGJlaW5nIGNhbGxlZCBmcm9tIGluc2lkZSBhIHN1Ym1pdCBldmVudCBbIzEwNDddXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFJlamVjdGVkIG9yIHBlbmRpbmc6IGNhbmNlbCB0aGlzIHN1Ym1pdFxuICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgaWYgKCdwZW5kaW5nJyA9PT0gcHJvbWlzZS5zdGF0ZSgpKSBwcm9taXNlLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgX3RoaXM1Ll9zdWJtaXQoc3VibWl0U291cmNlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICBvblN1Ym1pdEJ1dHRvbjogZnVuY3Rpb24gb25TdWJtaXRCdXR0b24oZXZlbnQpIHtcbiAgICAgIHRoaXMuX3N1Ym1pdFNvdXJjZSA9IGV2ZW50LmN1cnJlbnRUYXJnZXQ7XG4gICAgfSxcbiAgICAvLyBpbnRlcm5hbFxuICAgIC8vIF9zdWJtaXQgc3VibWl0cyB0aGUgZm9ybSwgdGhpcyB0aW1lIHdpdGhvdXQgZ29pbmcgdGhyb3VnaCB0aGUgdmFsaWRhdGlvbnMuXG4gICAgLy8gQ2FyZSBtdXN0IGJlIHRha2VuIHRvIFwiZmFrZVwiIHRoZSBhY3R1YWwgc3VibWl0IGJ1dHRvbiBiZWluZyBjbGlja2VkLlxuICAgIF9zdWJtaXQ6IGZ1bmN0aW9uIF9zdWJtaXQoc3VibWl0U291cmNlKSB7XG4gICAgICBpZiAoZmFsc2UgPT09IHRoaXMuX3RyaWdnZXIoJ3N1Ym1pdCcpKSByZXR1cm47XG4gICAgICAvLyBBZGQgc3VibWl0IGJ1dHRvbidzIGRhdGFcbiAgICAgIGlmIChzdWJtaXRTb3VyY2UpIHtcbiAgICAgICAgdmFyICRzeW50aGV0aWMgPSB0aGlzLiRlbGVtZW50LmZpbmQoJy5wYXJzbGV5LXN5bnRoZXRpYy1zdWJtaXQtYnV0dG9uJykucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XG4gICAgICAgIGlmICgwID09PSAkc3ludGhldGljLmxlbmd0aCkgJHN5bnRoZXRpYyA9ICQoJzxpbnB1dCBjbGFzcz1cInBhcnNsZXktc3ludGhldGljLXN1Ym1pdC1idXR0b25cIiB0eXBlPVwiaGlkZGVuXCI+JykuYXBwZW5kVG8odGhpcy4kZWxlbWVudCk7XG4gICAgICAgICRzeW50aGV0aWMuYXR0cih7XG4gICAgICAgICAgbmFtZTogc3VibWl0U291cmNlLmdldEF0dHJpYnV0ZSgnbmFtZScpLFxuICAgICAgICAgIHZhbHVlOiBzdWJtaXRTb3VyY2UuZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICB0aGlzLiRlbGVtZW50LnRyaWdnZXIoX2V4dGVuZHMoJC5FdmVudCgnc3VibWl0JyksIHsgcGFyc2xleTogdHJ1ZSB9KSk7XG4gICAgfSxcblxuICAgIC8vIFBlcmZvcm1zIHZhbGlkYXRpb24gb24gZmllbGRzIHdoaWxlIHRyaWdnZXJpbmcgZXZlbnRzLlxuICAgIC8vIEByZXR1cm5zIGB0cnVlYCBpZiBhbGwgdmFsaWRhdGlvbnMgc3VjY2VlZHMsIGBmYWxzZWBcbiAgICAvLyBpZiBhIGZhaWx1cmUgaXMgaW1tZWRpYXRlbHkgZGV0ZWN0ZWQsIG9yIGBudWxsYFxuICAgIC8vIGlmIGRlcGVuZGFudCBvbiBhIHByb21pc2UuXG4gICAgLy8gQ29uc2lkZXIgdXNpbmcgYHdoZW5WYWxpZGF0ZWAgaW5zdGVhZC5cbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gdmFsaWRhdGUob3B0aW9ucykge1xuICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPj0gMSAmJiAhJC5pc1BsYWluT2JqZWN0KG9wdGlvbnMpKSB7XG4gICAgICAgIFV0aWxzLndhcm5PbmNlKCdDYWxsaW5nIHZhbGlkYXRlIG9uIGEgcGFyc2xleSBmb3JtIHdpdGhvdXQgcGFzc2luZyBhcmd1bWVudHMgYXMgYW4gb2JqZWN0IGlzIGRlcHJlY2F0ZWQuJyk7XG5cbiAgICAgICAgdmFyIF9hcmd1bWVudHMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgIHZhciBncm91cCA9IF9hcmd1bWVudHNbMF07XG4gICAgICAgIHZhciBmb3JjZSA9IF9hcmd1bWVudHNbMV07XG4gICAgICAgIHZhciBldmVudCA9IF9hcmd1bWVudHNbMl07XG5cbiAgICAgICAgb3B0aW9ucyA9IHsgZ3JvdXA6IGdyb3VwLCBmb3JjZTogZm9yY2UsIGV2ZW50OiBldmVudCB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIEZvcm1fX3N0YXR1c01hcHBpbmdbdGhpcy53aGVuVmFsaWRhdGUob3B0aW9ucykuc3RhdGUoKV07XG4gICAgfSxcblxuICAgIHdoZW5WYWxpZGF0ZTogZnVuY3Rpb24gd2hlblZhbGlkYXRlKCkge1xuICAgICAgdmFyIF9VdGlscyRhbGwkZG9uZSRmYWlsJGFsd2F5cyxcbiAgICAgICAgICBfdGhpczYgPSB0aGlzO1xuXG4gICAgICB2YXIgX3JlZjcgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIGdyb3VwID0gX3JlZjcuZ3JvdXA7XG4gICAgICB2YXIgZm9yY2UgPSBfcmVmNy5mb3JjZTtcbiAgICAgIHZhciBldmVudCA9IF9yZWY3LmV2ZW50O1xuXG4gICAgICB0aGlzLnN1Ym1pdEV2ZW50ID0gZXZlbnQ7XG4gICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgdGhpcy5zdWJtaXRFdmVudCA9IF9leHRlbmRzKHt9LCBldmVudCwgeyBwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24gcHJldmVudERlZmF1bHQoKSB7XG4gICAgICAgICAgICBVdGlscy53YXJuT25jZShcIlVzaW5nIGB0aGlzLnN1Ym1pdEV2ZW50LnByZXZlbnREZWZhdWx0KClgIGlzIGRlcHJlY2F0ZWQ7IGluc3RlYWQsIGNhbGwgYHRoaXMudmFsaWRhdGlvblJlc3VsdCA9IGZhbHNlYFwiKTtcbiAgICAgICAgICAgIF90aGlzNi52YWxpZGF0aW9uUmVzdWx0ID0gZmFsc2U7XG4gICAgICAgICAgfSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMudmFsaWRhdGlvblJlc3VsdCA9IHRydWU7XG5cbiAgICAgIC8vIGZpcmUgdmFsaWRhdGUgZXZlbnQgdG8gZXZlbnR1YWxseSBtb2RpZnkgdGhpbmdzIGJlZm9yZSBldmVyeSB2YWxpZGF0aW9uXG4gICAgICB0aGlzLl90cmlnZ2VyKCd2YWxpZGF0ZScpO1xuXG4gICAgICAvLyBSZWZyZXNoIGZvcm0gRE9NIG9wdGlvbnMgYW5kIGZvcm0ncyBmaWVsZHMgdGhhdCBjb3VsZCBoYXZlIGNoYW5nZWRcbiAgICAgIHRoaXMuX3JlZnJlc2hGaWVsZHMoKTtcblxuICAgICAgdmFyIHByb21pc2VzID0gdGhpcy5fd2l0aG91dFJlYWN0dWFsaXppbmdGb3JtT3B0aW9ucyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiAkLm1hcChfdGhpczYuZmllbGRzLCBmdW5jdGlvbiAoZmllbGQpIHtcbiAgICAgICAgICByZXR1cm4gZmllbGQud2hlblZhbGlkYXRlKHsgZm9yY2U6IGZvcmNlLCBncm91cDogZ3JvdXAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiAoX1V0aWxzJGFsbCRkb25lJGZhaWwkYWx3YXlzID0gVXRpbHMuYWxsKHByb21pc2VzKS5kb25lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2Ll90cmlnZ2VyKCdzdWNjZXNzJyk7XG4gICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXM2LnZhbGlkYXRpb25SZXN1bHQgPSBmYWxzZTtcbiAgICAgICAgX3RoaXM2LmZvY3VzKCk7XG4gICAgICAgIF90aGlzNi5fdHJpZ2dlcignZXJyb3InKTtcbiAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzNi5fdHJpZ2dlcigndmFsaWRhdGVkJyk7XG4gICAgICB9KSkucGlwZS5hcHBseShfVXRpbHMkYWxsJGRvbmUkZmFpbCRhbHdheXMsIF90b0NvbnN1bWFibGVBcnJheSh0aGlzLl9waXBlQWNjb3JkaW5nVG9WYWxpZGF0aW9uUmVzdWx0KCkpKTtcbiAgICB9LFxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHJlZnJlc2hlZCBmaWVsZHMsIGFuZCBzdG9wIG9uIGZpcnN0IGZhaWx1cmUuXG4gICAgLy8gUmV0dXJucyBgdHJ1ZWAgaWYgYWxsIGZpZWxkcyBhcmUgdmFsaWQsIGBmYWxzZWAgaWYgYSBmYWlsdXJlIGlzIGRldGVjdGVkXG4gICAgLy8gb3IgYG51bGxgIGlmIHRoZSByZXN1bHQgZGVwZW5kcyBvbiBhbiB1bnJlc29sdmVkIHByb21pc2UuXG4gICAgLy8gUHJlZmVyIHVzaW5nIGB3aGVuVmFsaWRgIGluc3RlYWQuXG4gICAgaXNWYWxpZDogZnVuY3Rpb24gaXNWYWxpZChvcHRpb25zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAxICYmICEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgVXRpbHMud2Fybk9uY2UoJ0NhbGxpbmcgaXNWYWxpZCBvbiBhIHBhcnNsZXkgZm9ybSB3aXRob3V0IHBhc3NpbmcgYXJndW1lbnRzIGFzIGFuIG9iamVjdCBpcyBkZXByZWNhdGVkLicpO1xuXG4gICAgICAgIHZhciBfYXJndW1lbnRzMiA9IF9zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG5cbiAgICAgICAgdmFyIGdyb3VwID0gX2FyZ3VtZW50czJbMF07XG4gICAgICAgIHZhciBmb3JjZSA9IF9hcmd1bWVudHMyWzFdO1xuXG4gICAgICAgIG9wdGlvbnMgPSB7IGdyb3VwOiBncm91cCwgZm9yY2U6IGZvcmNlIH07XG4gICAgICB9XG4gICAgICByZXR1cm4gRm9ybV9fc3RhdHVzTWFwcGluZ1t0aGlzLndoZW5WYWxpZChvcHRpb25zKS5zdGF0ZSgpXTtcbiAgICB9LFxuXG4gICAgLy8gSXRlcmF0ZSBvdmVyIHJlZnJlc2hlZCBmaWVsZHMgYW5kIHZhbGlkYXRlIHRoZW0uXG4gICAgLy8gUmV0dXJucyBhIHByb21pc2UuXG4gICAgLy8gQSB2YWxpZGF0aW9uIHRoYXQgaW1tZWRpYXRlbHkgZmFpbHMgd2lsbCBpbnRlcnJ1cHQgdGhlIHZhbGlkYXRpb25zLlxuICAgIHdoZW5WYWxpZDogZnVuY3Rpb24gd2hlblZhbGlkKCkge1xuICAgICAgdmFyIF90aGlzNyA9IHRoaXM7XG5cbiAgICAgIHZhciBfcmVmOCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgZ3JvdXAgPSBfcmVmOC5ncm91cDtcbiAgICAgIHZhciBmb3JjZSA9IF9yZWY4LmZvcmNlO1xuXG4gICAgICB0aGlzLl9yZWZyZXNoRmllbGRzKCk7XG5cbiAgICAgIHZhciBwcm9taXNlcyA9IHRoaXMuX3dpdGhvdXRSZWFjdHVhbGl6aW5nRm9ybU9wdGlvbnMoZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gJC5tYXAoX3RoaXM3LmZpZWxkcywgZnVuY3Rpb24gKGZpZWxkKSB7XG4gICAgICAgICAgcmV0dXJuIGZpZWxkLndoZW5WYWxpZCh7IGdyb3VwOiBncm91cCwgZm9yY2U6IGZvcmNlIH0pO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIFV0aWxzLmFsbChwcm9taXNlcyk7XG4gICAgfSxcblxuICAgIHJlZnJlc2g6IGZ1bmN0aW9uIHJlZnJlc2goKSB7XG4gICAgICB0aGlzLl9yZWZyZXNoRmllbGRzKCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gUmVzZXQgVUlcbiAgICByZXNldDogZnVuY3Rpb24gcmVzZXQoKSB7XG4gICAgICAvLyBGb3JtIGNhc2U6IGVtaXQgYSByZXNldCBldmVudCBmb3IgZWFjaCBmaWVsZFxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmZpZWxkcy5sZW5ndGg7IGkrKykgdGhpcy5maWVsZHNbaV0ucmVzZXQoKTtcblxuICAgICAgdGhpcy5fdHJpZ2dlcigncmVzZXQnKTtcbiAgICB9LFxuXG4gICAgLy8gRGVzdHJveSBQYXJzbGV5IGluc3RhbmNlICgrIFVJKVxuICAgIGRlc3Ryb3k6IGZ1bmN0aW9uIGRlc3Ryb3koKSB7XG4gICAgICAvLyBGaWVsZCBjYXNlOiBlbWl0IGRlc3Ryb3kgZXZlbnQgdG8gY2xlYW4gVUkgYW5kIHRoZW4gZGVzdHJveSBzdG9yZWQgaW5zdGFuY2VcbiAgICAgIHRoaXMuX2Rlc3Ryb3lVSSgpO1xuXG4gICAgICAvLyBGb3JtIGNhc2U6IGRlc3Ryb3kgYWxsIGl0cyBmaWVsZHMgYW5kIHRoZW4gZGVzdHJveSBzdG9yZWQgaW5zdGFuY2VcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5maWVsZHMubGVuZ3RoOyBpKyspIHRoaXMuZmllbGRzW2ldLmRlc3Ryb3koKTtcblxuICAgICAgdGhpcy4kZWxlbWVudC5yZW1vdmVEYXRhKCdQYXJzbGV5Jyk7XG4gICAgICB0aGlzLl90cmlnZ2VyKCdkZXN0cm95Jyk7XG4gICAgfSxcblxuICAgIF9yZWZyZXNoRmllbGRzOiBmdW5jdGlvbiBfcmVmcmVzaEZpZWxkcygpIHtcbiAgICAgIHJldHVybiB0aGlzLmFjdHVhbGl6ZU9wdGlvbnMoKS5fYmluZEZpZWxkcygpO1xuICAgIH0sXG5cbiAgICBfYmluZEZpZWxkczogZnVuY3Rpb24gX2JpbmRGaWVsZHMoKSB7XG4gICAgICB2YXIgX3RoaXM4ID0gdGhpcztcblxuICAgICAgdmFyIG9sZEZpZWxkcyA9IHRoaXMuZmllbGRzO1xuXG4gICAgICB0aGlzLmZpZWxkcyA9IFtdO1xuICAgICAgdGhpcy5maWVsZHNNYXBwZWRCeUlkID0ge307XG5cbiAgICAgIHRoaXMuX3dpdGhvdXRSZWFjdHVhbGl6aW5nRm9ybU9wdGlvbnMoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczguJGVsZW1lbnQuZmluZChfdGhpczgub3B0aW9ucy5pbnB1dHMpLm5vdChfdGhpczgub3B0aW9ucy5leGNsdWRlZCkuZWFjaChmdW5jdGlvbiAoXywgZWxlbWVudCkge1xuICAgICAgICAgIHZhciBmaWVsZEluc3RhbmNlID0gbmV3IHdpbmRvdy5QYXJzbGV5LkZhY3RvcnkoZWxlbWVudCwge30sIF90aGlzOCk7XG5cbiAgICAgICAgICAvLyBPbmx5IGFkZCB2YWxpZCBhbmQgbm90IGV4Y2x1ZGVkIGBGaWVsZGAgYW5kIGBGaWVsZE11bHRpcGxlYCBjaGlsZHJlblxuICAgICAgICAgIGlmICgoJ0ZpZWxkJyA9PT0gZmllbGRJbnN0YW5jZS5fX2NsYXNzX18gfHwgJ0ZpZWxkTXVsdGlwbGUnID09PSBmaWVsZEluc3RhbmNlLl9fY2xhc3NfXykgJiYgdHJ1ZSAhPT0gZmllbGRJbnN0YW5jZS5vcHRpb25zLmV4Y2x1ZGVkKSB7XG4gICAgICAgICAgICB2YXIgdW5pcXVlSWQgPSBmaWVsZEluc3RhbmNlLl9fY2xhc3NfXyArICctJyArIGZpZWxkSW5zdGFuY2UuX19pZF9fO1xuICAgICAgICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgX3RoaXM4LmZpZWxkc01hcHBlZEJ5SWRbdW5pcXVlSWRdKSB7XG4gICAgICAgICAgICAgIF90aGlzOC5maWVsZHNNYXBwZWRCeUlkW3VuaXF1ZUlkXSA9IGZpZWxkSW5zdGFuY2U7XG4gICAgICAgICAgICAgIF90aGlzOC5maWVsZHMucHVzaChmaWVsZEluc3RhbmNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQuZWFjaChVdGlscy5kaWZmZXJlbmNlKG9sZEZpZWxkcywgX3RoaXM4LmZpZWxkcyksIGZ1bmN0aW9uIChfLCBmaWVsZCkge1xuICAgICAgICAgIGZpZWxkLnJlc2V0KCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgb25seS5cbiAgICAvLyBMb29waW5nIG9uIGEgZm9ybSdzIGZpZWxkcyB0byBkbyB2YWxpZGF0aW9uIG9yIHNpbWlsYXJcbiAgICAvLyB3aWxsIHRyaWdnZXIgcmVhY3R1YWxpemluZyBvcHRpb25zIG9uIGFsbCBvZiB0aGVtLCB3aGljaFxuICAgIC8vIGluIHR1cm4gd2lsbCByZWFjdHVhbGl6ZSB0aGUgZm9ybSdzIG9wdGlvbnMuXG4gICAgLy8gVG8gYXZvaWQgY2FsbGluZyBhY3R1YWxpemVPcHRpb25zIHNvIG1hbnkgdGltZXMgb24gdGhlIGZvcm1cbiAgICAvLyBmb3Igbm90aGluZywgX3dpdGhvdXRSZWFjdHVhbGl6aW5nRm9ybU9wdGlvbnMgdGVtcG9yYXJpbHkgZGlzYWJsZXNcbiAgICAvLyB0aGUgbWV0aG9kIGFjdHVhbGl6ZU9wdGlvbnMgb24gdGhpcyBmb3JtIHdoaWxlIGBmbmAgaXMgY2FsbGVkLlxuICAgIF93aXRob3V0UmVhY3R1YWxpemluZ0Zvcm1PcHRpb25zOiBmdW5jdGlvbiBfd2l0aG91dFJlYWN0dWFsaXppbmdGb3JtT3B0aW9ucyhmbikge1xuICAgICAgdmFyIG9sZEFjdHVhbGl6ZU9wdGlvbnMgPSB0aGlzLmFjdHVhbGl6ZU9wdGlvbnM7XG4gICAgICB0aGlzLmFjdHVhbGl6ZU9wdGlvbnMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfTtcbiAgICAgIHZhciByZXN1bHQgPSBmbigpO1xuICAgICAgdGhpcy5hY3R1YWxpemVPcHRpb25zID0gb2xkQWN0dWFsaXplT3B0aW9ucztcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcblxuICAgIC8vIEludGVybmFsIG9ubHkuXG4gICAgLy8gU2hvcnRjdXQgdG8gdHJpZ2dlciBhbiBldmVudFxuICAgIC8vIFJldHVybnMgdHJ1ZSBpZmYgZXZlbnQgaXMgbm90IGludGVycnVwdGVkIGFuZCBkZWZhdWx0IG5vdCBwcmV2ZW50ZWQuXG4gICAgX3RyaWdnZXI6IGZ1bmN0aW9uIF90cmlnZ2VyKGV2ZW50TmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMudHJpZ2dlcignZm9ybTonICsgZXZlbnROYW1lKTtcbiAgICB9XG5cbiAgfTtcblxuICB2YXIgQ29uc3RyYWludCA9IGZ1bmN0aW9uIENvbnN0cmFpbnQocGFyc2xleUZpZWxkLCBuYW1lLCByZXF1aXJlbWVudHMsIHByaW9yaXR5LCBpc0RvbUNvbnN0cmFpbnQpIHtcbiAgICB2YXIgdmFsaWRhdG9yU3BlYyA9IHdpbmRvdy5QYXJzbGV5Ll92YWxpZGF0b3JSZWdpc3RyeS52YWxpZGF0b3JzW25hbWVdO1xuICAgIHZhciB2YWxpZGF0b3IgPSBuZXcgVmFsaWRhdG9yKHZhbGlkYXRvclNwZWMpO1xuICAgIHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgcGFyc2xleUZpZWxkLm9wdGlvbnNbbmFtZSArICdQcmlvcml0eSddIHx8IHZhbGlkYXRvci5wcmlvcml0eTtcbiAgICBpc0RvbUNvbnN0cmFpbnQgPSB0cnVlID09PSBpc0RvbUNvbnN0cmFpbnQ7XG5cbiAgICBfZXh0ZW5kcyh0aGlzLCB7XG4gICAgICB2YWxpZGF0b3I6IHZhbGlkYXRvcixcbiAgICAgIG5hbWU6IG5hbWUsXG4gICAgICByZXF1aXJlbWVudHM6IHJlcXVpcmVtZW50cyxcbiAgICAgIHByaW9yaXR5OiBwcmlvcml0eSxcbiAgICAgIGlzRG9tQ29uc3RyYWludDogaXNEb21Db25zdHJhaW50XG4gICAgfSk7XG4gICAgdGhpcy5fcGFyc2VSZXF1aXJlbWVudHMocGFyc2xleUZpZWxkLm9wdGlvbnMpO1xuICB9O1xuXG4gIHZhciBjYXBpdGFsaXplID0gZnVuY3Rpb24gY2FwaXRhbGl6ZShzdHIpIHtcbiAgICB2YXIgY2FwID0gc3RyWzBdLnRvVXBwZXJDYXNlKCk7XG4gICAgcmV0dXJuIGNhcCArIHN0ci5zbGljZSgxKTtcbiAgfTtcblxuICBDb25zdHJhaW50LnByb3RvdHlwZSA9IHtcbiAgICB2YWxpZGF0ZTogZnVuY3Rpb24gdmFsaWRhdGUodmFsdWUsIGluc3RhbmNlKSB7XG4gICAgICB2YXIgX3ZhbGlkYXRvcjtcblxuICAgICAgcmV0dXJuIChfdmFsaWRhdG9yID0gdGhpcy52YWxpZGF0b3IpLnZhbGlkYXRlLmFwcGx5KF92YWxpZGF0b3IsIFt2YWx1ZV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aGlzLnJlcXVpcmVtZW50TGlzdCksIFtpbnN0YW5jZV0pKTtcbiAgICB9LFxuXG4gICAgX3BhcnNlUmVxdWlyZW1lbnRzOiBmdW5jdGlvbiBfcGFyc2VSZXF1aXJlbWVudHMob3B0aW9ucykge1xuICAgICAgdmFyIF90aGlzOSA9IHRoaXM7XG5cbiAgICAgIHRoaXMucmVxdWlyZW1lbnRMaXN0ID0gdGhpcy52YWxpZGF0b3IucGFyc2VSZXF1aXJlbWVudHModGhpcy5yZXF1aXJlbWVudHMsIGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNbX3RoaXM5Lm5hbWUgKyBjYXBpdGFsaXplKGtleSldO1xuICAgICAgfSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBGaWVsZCA9IGZ1bmN0aW9uIEZpZWxkKGZpZWxkLCBkb21PcHRpb25zLCBvcHRpb25zLCBwYXJzbGV5Rm9ybUluc3RhbmNlKSB7XG4gICAgdGhpcy5fX2NsYXNzX18gPSAnRmllbGQnO1xuXG4gICAgdGhpcy5lbGVtZW50ID0gZmllbGQ7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZmllbGQpO1xuXG4gICAgLy8gU2V0IHBhcmVudCBpZiB3ZSBoYXZlIG9uZVxuICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHBhcnNsZXlGb3JtSW5zdGFuY2UpIHtcbiAgICAgIHRoaXMucGFyZW50ID0gcGFyc2xleUZvcm1JbnN0YW5jZTtcbiAgICB9XG5cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIHRoaXMuZG9tT3B0aW9ucyA9IGRvbU9wdGlvbnM7XG5cbiAgICAvLyBJbml0aWFsaXplIHNvbWUgcHJvcGVydGllc1xuICAgIHRoaXMuY29uc3RyYWludHMgPSBbXTtcbiAgICB0aGlzLmNvbnN0cmFpbnRzQnlOYW1lID0ge307XG4gICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICAgIC8vIEJpbmQgY29uc3RyYWludHNcbiAgICB0aGlzLl9iaW5kQ29uc3RyYWludHMoKTtcbiAgfTtcblxuICB2YXIgcGFyc2xleV9maWVsZF9fc3RhdHVzTWFwcGluZyA9IHsgcGVuZGluZzogbnVsbCwgcmVzb2x2ZWQ6IHRydWUsIHJlamVjdGVkOiBmYWxzZSB9O1xuXG4gIEZpZWxkLnByb3RvdHlwZSA9IHtcbiAgICAvLyAjIFB1YmxpYyBBUElcbiAgICAvLyBWYWxpZGF0ZSBmaWVsZCBhbmQgdHJpZ2dlciBzb21lIGV2ZW50cyBmb3IgbWFpbmx5IGBVSWBcbiAgICAvLyBAcmV0dXJucyBgdHJ1ZWAsIGFuIGFycmF5IG9mIHRoZSB2YWxpZGF0b3JzIHRoYXQgZmFpbGVkLCBvclxuICAgIC8vIGBudWxsYCBpZiB2YWxpZGF0aW9uIGlzIG5vdCBmaW5pc2hlZC4gUHJlZmVyIHVzaW5nIHdoZW5WYWxpZGF0ZVxuICAgIHZhbGlkYXRlOiBmdW5jdGlvbiB2YWxpZGF0ZShvcHRpb25zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAxICYmICEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgVXRpbHMud2Fybk9uY2UoJ0NhbGxpbmcgdmFsaWRhdGUgb24gYSBwYXJzbGV5IGZpZWxkIHdpdGhvdXQgcGFzc2luZyBhcmd1bWVudHMgYXMgYW4gb2JqZWN0IGlzIGRlcHJlY2F0ZWQuJyk7XG4gICAgICAgIG9wdGlvbnMgPSB7IG9wdGlvbnM6IG9wdGlvbnMgfTtcbiAgICAgIH1cbiAgICAgIHZhciBwcm9taXNlID0gdGhpcy53aGVuVmFsaWRhdGUob3B0aW9ucyk7XG4gICAgICBpZiAoIXByb21pc2UpIC8vIElmIGV4Y2x1ZGVkIHdpdGggYGdyb3VwYCBvcHRpb25cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBzd2l0Y2ggKHByb21pc2Uuc3RhdGUoKSkge1xuICAgICAgICBjYXNlICdwZW5kaW5nJzpcbiAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgY2FzZSAncmVzb2x2ZWQnOlxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICBjYXNlICdyZWplY3RlZCc6XG4gICAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdGlvblJlc3VsdDtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gVmFsaWRhdGUgZmllbGQgYW5kIHRyaWdnZXIgc29tZSBldmVudHMgZm9yIG1haW5seSBgVUlgXG4gICAgLy8gQHJldHVybnMgYSBwcm9taXNlIHRoYXQgc3VjY2VlZHMgb25seSB3aGVuIGFsbCB2YWxpZGF0aW9ucyBkb1xuICAgIC8vIG9yIGB1bmRlZmluZWRgIGlmIGZpZWxkIGlzIG5vdCBpbiB0aGUgZ2l2ZW4gYGdyb3VwYC5cbiAgICB3aGVuVmFsaWRhdGU6IGZ1bmN0aW9uIHdoZW5WYWxpZGF0ZSgpIHtcbiAgICAgIHZhciBfd2hlblZhbGlkJGFsd2F5cyRkb25lJGZhaWwkYWx3YXlzLFxuICAgICAgICAgIF90aGlzMTAgPSB0aGlzO1xuXG4gICAgICB2YXIgX3JlZjkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAgICAgdmFyIGZvcmNlID0gX3JlZjkuZm9yY2U7XG4gICAgICB2YXIgZ3JvdXAgPSBfcmVmOS5ncm91cDtcblxuICAgICAgLy8gZG8gbm90IHZhbGlkYXRlIGEgZmllbGQgaWYgbm90IHRoZSBzYW1lIGFzIGdpdmVuIHZhbGlkYXRpb24gZ3JvdXBcbiAgICAgIHRoaXMucmVmcmVzaCgpO1xuICAgICAgaWYgKGdyb3VwICYmICF0aGlzLl9pc0luR3JvdXAoZ3JvdXApKSByZXR1cm47XG5cbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIC8vIEZpZWxkIFZhbGlkYXRlIGV2ZW50LiBgdGhpcy52YWx1ZWAgY291bGQgYmUgYWx0ZXJlZCBmb3IgY3VzdG9tIG5lZWRzXG4gICAgICB0aGlzLl90cmlnZ2VyKCd2YWxpZGF0ZScpO1xuXG4gICAgICByZXR1cm4gKF93aGVuVmFsaWQkYWx3YXlzJGRvbmUkZmFpbCRhbHdheXMgPSB0aGlzLndoZW5WYWxpZCh7IGZvcmNlOiBmb3JjZSwgdmFsdWU6IHRoaXMudmFsdWUsIF9yZWZyZXNoZWQ6IHRydWUgfSkuYWx3YXlzKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMxMC5fcmVmbG93VUkoKTtcbiAgICAgIH0pLmRvbmUoZnVuY3Rpb24gKCkge1xuICAgICAgICBfdGhpczEwLl90cmlnZ2VyKCdzdWNjZXNzJyk7XG4gICAgICB9KS5mYWlsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMxMC5fdHJpZ2dlcignZXJyb3InKTtcbiAgICAgIH0pLmFsd2F5cyhmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzMTAuX3RyaWdnZXIoJ3ZhbGlkYXRlZCcpO1xuICAgICAgfSkpLnBpcGUuYXBwbHkoX3doZW5WYWxpZCRhbHdheXMkZG9uZSRmYWlsJGFsd2F5cywgX3RvQ29uc3VtYWJsZUFycmF5KHRoaXMuX3BpcGVBY2NvcmRpbmdUb1ZhbGlkYXRpb25SZXN1bHQoKSkpO1xuICAgIH0sXG5cbiAgICBoYXNDb25zdHJhaW50czogZnVuY3Rpb24gaGFzQ29uc3RyYWludHMoKSB7XG4gICAgICByZXR1cm4gMCAhPT0gdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7XG4gICAgfSxcblxuICAgIC8vIEFuIGVtcHR5IG9wdGlvbmFsIGZpZWxkIGRvZXMgbm90IG5lZWQgdmFsaWRhdGlvblxuICAgIG5lZWRzVmFsaWRhdGlvbjogZnVuY3Rpb24gbmVlZHNWYWxpZGF0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiB2YWx1ZSkgdmFsdWUgPSB0aGlzLmdldFZhbHVlKCk7XG5cbiAgICAgIC8vIElmIGEgZmllbGQgaXMgZW1wdHkgYW5kIG5vdCByZXF1aXJlZCwgaXQgaXMgdmFsaWRcbiAgICAgIC8vIEV4Y2VwdCBpZiBgZGF0YS1wYXJzbGV5LXZhbGlkYXRlLWlmLWVtcHR5YCBleHBsaWNpdGVseSBhZGRlZCwgdXNlZnVsIGZvciBzb21lIGN1c3RvbSB2YWxpZGF0b3JzXG4gICAgICBpZiAoIXZhbHVlLmxlbmd0aCAmJiAhdGhpcy5faXNSZXF1aXJlZCgpICYmICd1bmRlZmluZWQnID09PSB0eXBlb2YgdGhpcy5vcHRpb25zLnZhbGlkYXRlSWZFbXB0eSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9LFxuXG4gICAgX2lzSW5Hcm91cDogZnVuY3Rpb24gX2lzSW5Hcm91cChncm91cCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkodGhpcy5vcHRpb25zLmdyb3VwKSkgcmV0dXJuIC0xICE9PSAkLmluQXJyYXkoZ3JvdXAsIHRoaXMub3B0aW9ucy5ncm91cCk7XG4gICAgICByZXR1cm4gdGhpcy5vcHRpb25zLmdyb3VwID09PSBncm91cDtcbiAgICB9LFxuXG4gICAgLy8gSnVzdCB2YWxpZGF0ZSBmaWVsZC4gRG8gbm90IHRyaWdnZXIgYW55IGV2ZW50LlxuICAgIC8vIFJldHVybnMgYHRydWVgIGlmZiBhbGwgY29uc3RyYWludHMgcGFzcywgYGZhbHNlYCBpZiB0aGVyZSBhcmUgZmFpbHVyZXMsXG4gICAgLy8gb3IgYG51bGxgIGlmIHRoZSByZXN1bHQgY2FuIG5vdCBiZSBkZXRlcm1pbmVkIHlldCAoZGVwZW5kcyBvbiBhIHByb21pc2UpXG4gICAgLy8gU2VlIGFsc28gYHdoZW5WYWxpZGAuXG4gICAgaXNWYWxpZDogZnVuY3Rpb24gaXNWYWxpZChvcHRpb25zKSB7XG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+PSAxICYmICEkLmlzUGxhaW5PYmplY3Qob3B0aW9ucykpIHtcbiAgICAgICAgVXRpbHMud2Fybk9uY2UoJ0NhbGxpbmcgaXNWYWxpZCBvbiBhIHBhcnNsZXkgZmllbGQgd2l0aG91dCBwYXNzaW5nIGFyZ3VtZW50cyBhcyBhbiBvYmplY3QgaXMgZGVwcmVjYXRlZC4nKTtcblxuICAgICAgICB2YXIgX2FyZ3VtZW50czMgPSBfc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuXG4gICAgICAgIHZhciBmb3JjZSA9IF9hcmd1bWVudHMzWzBdO1xuICAgICAgICB2YXIgdmFsdWUgPSBfYXJndW1lbnRzM1sxXTtcblxuICAgICAgICBvcHRpb25zID0geyBmb3JjZTogZm9yY2UsIHZhbHVlOiB2YWx1ZSB9O1xuICAgICAgfVxuICAgICAgdmFyIHByb21pc2UgPSB0aGlzLndoZW5WYWxpZChvcHRpb25zKTtcbiAgICAgIGlmICghcHJvbWlzZSkgLy8gRXhjbHVkZWQgdmlhIGBncm91cGBcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gcGFyc2xleV9maWVsZF9fc3RhdHVzTWFwcGluZ1twcm9taXNlLnN0YXRlKCldO1xuICAgIH0sXG5cbiAgICAvLyBKdXN0IHZhbGlkYXRlIGZpZWxkLiBEbyBub3QgdHJpZ2dlciBhbnkgZXZlbnQuXG4gICAgLy8gQHJldHVybnMgYSBwcm9taXNlIHRoYXQgc3VjY2VlZHMgb25seSB3aGVuIGFsbCB2YWxpZGF0aW9ucyBkb1xuICAgIC8vIG9yIGB1bmRlZmluZWRgIGlmIHRoZSBmaWVsZCBpcyBub3QgaW4gdGhlIGdpdmVuIGBncm91cGAuXG4gICAgLy8gVGhlIGFyZ3VtZW50IGBmb3JjZWAgd2lsbCBmb3JjZSB2YWxpZGF0aW9uIG9mIGVtcHR5IGZpZWxkcy5cbiAgICAvLyBJZiBhIGB2YWx1ZWAgaXMgZ2l2ZW4sIGl0IHdpbGwgYmUgdmFsaWRhdGVkIGluc3RlYWQgb2YgdGhlIHZhbHVlIG9mIHRoZSBpbnB1dC5cbiAgICB3aGVuVmFsaWQ6IGZ1bmN0aW9uIHdoZW5WYWxpZCgpIHtcbiAgICAgIHZhciBfdGhpczExID0gdGhpcztcblxuICAgICAgdmFyIF9yZWYxMCA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuXG4gICAgICB2YXIgX3JlZjEwJGZvcmNlID0gX3JlZjEwLmZvcmNlO1xuICAgICAgdmFyIGZvcmNlID0gX3JlZjEwJGZvcmNlID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IF9yZWYxMCRmb3JjZTtcbiAgICAgIHZhciB2YWx1ZSA9IF9yZWYxMC52YWx1ZTtcbiAgICAgIHZhciBncm91cCA9IF9yZWYxMC5ncm91cDtcbiAgICAgIHZhciBfcmVmcmVzaGVkID0gX3JlZjEwLl9yZWZyZXNoZWQ7XG5cbiAgICAgIC8vIFJlY29tcHV0ZSBvcHRpb25zIGFuZCByZWJpbmQgY29uc3RyYWludHMgdG8gaGF2ZSBsYXRlc3QgY2hhbmdlc1xuICAgICAgaWYgKCFfcmVmcmVzaGVkKSB0aGlzLnJlZnJlc2goKTtcbiAgICAgIC8vIGRvIG5vdCB2YWxpZGF0ZSBhIGZpZWxkIGlmIG5vdCB0aGUgc2FtZSBhcyBnaXZlbiB2YWxpZGF0aW9uIGdyb3VwXG4gICAgICBpZiAoZ3JvdXAgJiYgIXRoaXMuX2lzSW5Hcm91cChncm91cCkpIHJldHVybjtcblxuICAgICAgdGhpcy52YWxpZGF0aW9uUmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgLy8gQSBmaWVsZCB3aXRob3V0IGNvbnN0cmFpbnQgaXMgdmFsaWRcbiAgICAgIGlmICghdGhpcy5oYXNDb25zdHJhaW50cygpKSByZXR1cm4gJC53aGVuKCk7XG5cbiAgICAgIC8vIFZhbHVlIGNvdWxkIGJlIHBhc3NlZCBhcyBhcmd1bWVudCwgbmVlZGVkIHRvIGFkZCBtb3JlIHBvd2VyIHRvICdmaWVsZDp2YWxpZGF0ZSdcbiAgICAgIGlmICgndW5kZWZpbmVkJyA9PT0gdHlwZW9mIHZhbHVlIHx8IG51bGwgPT09IHZhbHVlKSB2YWx1ZSA9IHRoaXMuZ2V0VmFsdWUoKTtcblxuICAgICAgaWYgKCF0aGlzLm5lZWRzVmFsaWRhdGlvbih2YWx1ZSkgJiYgdHJ1ZSAhPT0gZm9yY2UpIHJldHVybiAkLndoZW4oKTtcblxuICAgICAgdmFyIGdyb3VwZWRDb25zdHJhaW50cyA9IHRoaXMuX2dldEdyb3VwZWRDb25zdHJhaW50cygpO1xuICAgICAgdmFyIHByb21pc2VzID0gW107XG4gICAgICAkLmVhY2goZ3JvdXBlZENvbnN0cmFpbnRzLCBmdW5jdGlvbiAoXywgY29uc3RyYWludHMpIHtcbiAgICAgICAgLy8gUHJvY2VzcyBvbmUgZ3JvdXAgb2YgY29uc3RyYWludHMgYXQgYSB0aW1lLCB3ZSB2YWxpZGF0ZSB0aGUgY29uc3RyYWludHNcbiAgICAgICAgLy8gYW5kIGNvbWJpbmUgdGhlIHByb21pc2VzIHRvZ2V0aGVyLlxuICAgICAgICB2YXIgcHJvbWlzZSA9IFV0aWxzLmFsbCgkLm1hcChjb25zdHJhaW50cywgZnVuY3Rpb24gKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgICByZXR1cm4gX3RoaXMxMS5fdmFsaWRhdGVDb25zdHJhaW50KHZhbHVlLCBjb25zdHJhaW50KTtcbiAgICAgICAgfSkpO1xuICAgICAgICBwcm9taXNlcy5wdXNoKHByb21pc2UpO1xuICAgICAgICBpZiAocHJvbWlzZS5zdGF0ZSgpID09PSAncmVqZWN0ZWQnKSByZXR1cm4gZmFsc2U7IC8vIEludGVycnVwdCBwcm9jZXNzaW5nIGlmIGEgZ3JvdXAgaGFzIGFscmVhZHkgZmFpbGVkXG4gICAgICB9KTtcbiAgICAgIHJldHVybiBVdGlscy5hbGwocHJvbWlzZXMpO1xuICAgIH0sXG5cbiAgICAvLyBAcmV0dXJucyBhIHByb21pc2VcbiAgICBfdmFsaWRhdGVDb25zdHJhaW50OiBmdW5jdGlvbiBfdmFsaWRhdGVDb25zdHJhaW50KHZhbHVlLCBjb25zdHJhaW50KSB7XG4gICAgICB2YXIgX3RoaXMxMiA9IHRoaXM7XG5cbiAgICAgIHZhciByZXN1bHQgPSBjb25zdHJhaW50LnZhbGlkYXRlKHZhbHVlLCB0aGlzKTtcbiAgICAgIC8vIE1hcCBmYWxzZSB0byBhIGZhaWxlZCBwcm9taXNlXG4gICAgICBpZiAoZmFsc2UgPT09IHJlc3VsdCkgcmVzdWx0ID0gJC5EZWZlcnJlZCgpLnJlamVjdCgpO1xuICAgICAgLy8gTWFrZSBzdXJlIHdlIHJldHVybiBhIHByb21pc2UgYW5kIHRoYXQgd2UgcmVjb3JkIGZhaWx1cmVzXG4gICAgICByZXR1cm4gVXRpbHMuYWxsKFtyZXN1bHRdKS5mYWlsKGZ1bmN0aW9uIChlcnJvck1lc3NhZ2UpIHtcbiAgICAgICAgaWYgKCEoX3RoaXMxMi52YWxpZGF0aW9uUmVzdWx0IGluc3RhbmNlb2YgQXJyYXkpKSBfdGhpczEyLnZhbGlkYXRpb25SZXN1bHQgPSBbXTtcbiAgICAgICAgX3RoaXMxMi52YWxpZGF0aW9uUmVzdWx0LnB1c2goe1xuICAgICAgICAgIGFzc2VydDogY29uc3RyYWludCxcbiAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdzdHJpbmcnID09PSB0eXBlb2YgZXJyb3JNZXNzYWdlICYmIGVycm9yTWVzc2FnZVxuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgIH0sXG5cbiAgICAvLyBAcmV0dXJucyBQYXJzbGV5IGZpZWxkIGNvbXB1dGVkIHZhbHVlIHRoYXQgY291bGQgYmUgb3ZlcnJpZGVkIG9yIGNvbmZpZ3VyZWQgaW4gRE9NXG4gICAgZ2V0VmFsdWU6IGZ1bmN0aW9uIGdldFZhbHVlKCkge1xuICAgICAgdmFyIHZhbHVlO1xuXG4gICAgICAvLyBWYWx1ZSBjb3VsZCBiZSBvdmVycmlkZW4gaW4gRE9NIG9yIHdpdGggZXhwbGljaXQgb3B0aW9uc1xuICAgICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiB0aGlzLm9wdGlvbnMudmFsdWUpIHZhbHVlID0gdGhpcy5vcHRpb25zLnZhbHVlKHRoaXMpO2Vsc2UgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgdGhpcy5vcHRpb25zLnZhbHVlKSB2YWx1ZSA9IHRoaXMub3B0aW9ucy52YWx1ZTtlbHNlIHZhbHVlID0gdGhpcy4kZWxlbWVudC52YWwoKTtcblxuICAgICAgLy8gSGFuZGxlIHdyb25nIERPTSBvciBjb25maWd1cmF0aW9uc1xuICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdmFsdWUgfHwgbnVsbCA9PT0gdmFsdWUpIHJldHVybiAnJztcblxuICAgICAgcmV0dXJuIHRoaXMuX2hhbmRsZVdoaXRlc3BhY2UodmFsdWUpO1xuICAgIH0sXG5cbiAgICAvLyBSZXNldCBVSVxuICAgIHJlc2V0OiBmdW5jdGlvbiByZXNldCgpIHtcbiAgICAgIHRoaXMuX3Jlc2V0VUkoKTtcbiAgICAgIHJldHVybiB0aGlzLl90cmlnZ2VyKCdyZXNldCcpO1xuICAgIH0sXG5cbiAgICAvLyBEZXN0cm95IFBhcnNsZXkgaW5zdGFuY2UgKCsgVUkpXG4gICAgZGVzdHJveTogZnVuY3Rpb24gZGVzdHJveSgpIHtcbiAgICAgIC8vIEZpZWxkIGNhc2U6IGVtaXQgZGVzdHJveSBldmVudCB0byBjbGVhbiBVSSBhbmQgdGhlbiBkZXN0cm95IHN0b3JlZCBpbnN0YW5jZVxuICAgICAgdGhpcy5fZGVzdHJveVVJKCk7XG4gICAgICB0aGlzLiRlbGVtZW50LnJlbW92ZURhdGEoJ1BhcnNsZXknKTtcbiAgICAgIHRoaXMuJGVsZW1lbnQucmVtb3ZlRGF0YSgnRmllbGRNdWx0aXBsZScpO1xuICAgICAgdGhpcy5fdHJpZ2dlcignZGVzdHJveScpO1xuICAgIH0sXG5cbiAgICAvLyBBY3R1YWxpemUgb3B0aW9ucyBhbmQgcmViaW5kIGNvbnN0cmFpbnRzXG4gICAgcmVmcmVzaDogZnVuY3Rpb24gcmVmcmVzaCgpIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hDb25zdHJhaW50cygpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIF9yZWZyZXNoQ29uc3RyYWludHM6IGZ1bmN0aW9uIF9yZWZyZXNoQ29uc3RyYWludHMoKSB7XG4gICAgICByZXR1cm4gdGhpcy5hY3R1YWxpemVPcHRpb25zKCkuX2JpbmRDb25zdHJhaW50cygpO1xuICAgIH0sXG5cbiAgICByZWZyZXNoQ29uc3RyYWludHM6IGZ1bmN0aW9uIHJlZnJlc2hDb25zdHJhaW50cygpIHtcbiAgICAgIFV0aWxzLndhcm5PbmNlKFwiUGFyc2xleSdzIHJlZnJlc2hDb25zdHJhaW50cyBpcyBkZXByZWNhdGVkLiBQbGVhc2UgdXNlIHJlZnJlc2hcIik7XG4gICAgICByZXR1cm4gdGhpcy5yZWZyZXNoKCk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICogQWRkIGEgbmV3IGNvbnN0cmFpbnQgdG8gYSBmaWVsZFxuICAgICpcbiAgICAqIEBwYXJhbSB7U3RyaW5nfSAgIG5hbWVcbiAgICAqIEBwYXJhbSB7TWl4ZWR9ICAgIHJlcXVpcmVtZW50cyAgICAgIG9wdGlvbmFsXG4gICAgKiBAcGFyYW0ge051bWJlcn0gICBwcmlvcml0eSAgICAgICAgICBvcHRpb25hbFxuICAgICogQHBhcmFtIHtCb29sZWFufSAgaXNEb21Db25zdHJhaW50ICAgb3B0aW9uYWxcbiAgICAqL1xuICAgIGFkZENvbnN0cmFpbnQ6IGZ1bmN0aW9uIGFkZENvbnN0cmFpbnQobmFtZSwgcmVxdWlyZW1lbnRzLCBwcmlvcml0eSwgaXNEb21Db25zdHJhaW50KSB7XG5cbiAgICAgIGlmICh3aW5kb3cuUGFyc2xleS5fdmFsaWRhdG9yUmVnaXN0cnkudmFsaWRhdG9yc1tuYW1lXSkge1xuICAgICAgICB2YXIgY29uc3RyYWludCA9IG5ldyBDb25zdHJhaW50KHRoaXMsIG5hbWUsIHJlcXVpcmVtZW50cywgcHJpb3JpdHksIGlzRG9tQ29uc3RyYWludCk7XG5cbiAgICAgICAgLy8gaWYgY29uc3RyYWludCBhbHJlYWR5IGV4aXN0LCBkZWxldGUgaXQgYW5kIHB1c2ggbmV3IHZlcnNpb25cbiAgICAgICAgaWYgKCd1bmRlZmluZWQnICE9PSB0aGlzLmNvbnN0cmFpbnRzQnlOYW1lW2NvbnN0cmFpbnQubmFtZV0pIHRoaXMucmVtb3ZlQ29uc3RyYWludChjb25zdHJhaW50Lm5hbWUpO1xuXG4gICAgICAgIHRoaXMuY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5jb25zdHJhaW50c0J5TmFtZVtjb25zdHJhaW50Lm5hbWVdID0gY29uc3RyYWludDtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfSxcblxuICAgIC8vIFJlbW92ZSBhIGNvbnN0cmFpbnRcbiAgICByZW1vdmVDb25zdHJhaW50OiBmdW5jdGlvbiByZW1vdmVDb25zdHJhaW50KG5hbWUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jb25zdHJhaW50cy5sZW5ndGg7IGkrKykgaWYgKG5hbWUgPT09IHRoaXMuY29uc3RyYWludHNbaV0ubmFtZSkge1xuICAgICAgICB0aGlzLmNvbnN0cmFpbnRzLnNwbGljZShpLCAxKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkZWxldGUgdGhpcy5jb25zdHJhaW50c0J5TmFtZVtuYW1lXTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBVcGRhdGUgYSBjb25zdHJhaW50IChSZW1vdmUgKyByZS1hZGQpXG4gICAgdXBkYXRlQ29uc3RyYWludDogZnVuY3Rpb24gdXBkYXRlQ29uc3RyYWludChuYW1lLCBwYXJhbWV0ZXJzLCBwcmlvcml0eSkge1xuICAgICAgcmV0dXJuIHRoaXMucmVtb3ZlQ29uc3RyYWludChuYW1lKS5hZGRDb25zdHJhaW50KG5hbWUsIHBhcmFtZXRlcnMsIHByaW9yaXR5KTtcbiAgICB9LFxuXG4gICAgLy8gIyBJbnRlcm5hbHNcblxuICAgIC8vIEludGVybmFsIG9ubHkuXG4gICAgLy8gQmluZCBjb25zdHJhaW50cyBmcm9tIGNvbmZpZyArIG9wdGlvbnMgKyBET01cbiAgICBfYmluZENvbnN0cmFpbnRzOiBmdW5jdGlvbiBfYmluZENvbnN0cmFpbnRzKCkge1xuICAgICAgdmFyIGNvbnN0cmFpbnRzID0gW107XG4gICAgICB2YXIgY29uc3RyYWludHNCeU5hbWUgPSB7fTtcblxuICAgICAgLy8gY2xlYW4gYWxsIGV4aXN0aW5nIERPTSBjb25zdHJhaW50cyB0byBvbmx5IGtlZXAgamF2YXNjcmlwdCB1c2VyIGNvbnN0cmFpbnRzXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY29uc3RyYWludHMubGVuZ3RoOyBpKyspIGlmIChmYWxzZSA9PT0gdGhpcy5jb25zdHJhaW50c1tpXS5pc0RvbUNvbnN0cmFpbnQpIHtcbiAgICAgICAgY29uc3RyYWludHMucHVzaCh0aGlzLmNvbnN0cmFpbnRzW2ldKTtcbiAgICAgICAgY29uc3RyYWludHNCeU5hbWVbdGhpcy5jb25zdHJhaW50c1tpXS5uYW1lXSA9IHRoaXMuY29uc3RyYWludHNbaV07XG4gICAgICB9XG5cbiAgICAgIHRoaXMuY29uc3RyYWludHMgPSBjb25zdHJhaW50cztcbiAgICAgIHRoaXMuY29uc3RyYWludHNCeU5hbWUgPSBjb25zdHJhaW50c0J5TmFtZTtcblxuICAgICAgLy8gdGhlbiByZS1hZGQgUGFyc2xleSBET00tQVBJIGNvbnN0cmFpbnRzXG4gICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMub3B0aW9ucykgdGhpcy5hZGRDb25zdHJhaW50KG5hbWUsIHRoaXMub3B0aW9uc1tuYW1lXSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgLy8gZmluYWxseSwgYmluZCBzcGVjaWFsIEhUTUw1IGNvbnN0cmFpbnRzXG4gICAgICByZXR1cm4gdGhpcy5fYmluZEh0bWw1Q29uc3RyYWludHMoKTtcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgb25seS5cbiAgICAvLyBCaW5kIHNwZWNpZmljIEhUTUw1IGNvbnN0cmFpbnRzIHRvIGJlIEhUTUw1IGNvbXBsaWFudFxuICAgIF9iaW5kSHRtbDVDb25zdHJhaW50czogZnVuY3Rpb24gX2JpbmRIdG1sNUNvbnN0cmFpbnRzKCkge1xuICAgICAgLy8gaHRtbDUgcmVxdWlyZWRcbiAgICAgIGlmIChudWxsICE9PSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdyZXF1aXJlZCcpKSB0aGlzLmFkZENvbnN0cmFpbnQoJ3JlcXVpcmVkJywgdHJ1ZSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgLy8gaHRtbDUgcGF0dGVyblxuICAgICAgaWYgKG51bGwgIT09IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3BhdHRlcm4nKSkgdGhpcy5hZGRDb25zdHJhaW50KCdwYXR0ZXJuJywgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgncGF0dGVybicpLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAvLyByYW5nZVxuICAgICAgdmFyIG1pbiA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21pbicpO1xuICAgICAgdmFyIG1heCA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21heCcpO1xuICAgICAgaWYgKG51bGwgIT09IG1pbiAmJiBudWxsICE9PSBtYXgpIHRoaXMuYWRkQ29uc3RyYWludCgncmFuZ2UnLCBbbWluLCBtYXhdLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAvLyBIVE1MNSBtaW5cbiAgICAgIGVsc2UgaWYgKG51bGwgIT09IG1pbikgdGhpcy5hZGRDb25zdHJhaW50KCdtaW4nLCBtaW4sIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgICAgLy8gSFRNTDUgbWF4XG4gICAgICAgIGVsc2UgaWYgKG51bGwgIT09IG1heCkgdGhpcy5hZGRDb25zdHJhaW50KCdtYXgnLCBtYXgsIHVuZGVmaW5lZCwgdHJ1ZSk7XG5cbiAgICAgIC8vIGxlbmd0aFxuICAgICAgaWYgKG51bGwgIT09IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcpICYmIG51bGwgIT09IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21heGxlbmd0aCcpKSB0aGlzLmFkZENvbnN0cmFpbnQoJ2xlbmd0aCcsIFt0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtaW5sZW5ndGgnKSwgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbWF4bGVuZ3RoJyldLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAvLyBIVE1MNSBtaW5sZW5ndGhcbiAgICAgIGVsc2UgaWYgKG51bGwgIT09IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcpKSB0aGlzLmFkZENvbnN0cmFpbnQoJ21pbmxlbmd0aCcsIHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ21pbmxlbmd0aCcpLCB1bmRlZmluZWQsIHRydWUpO1xuXG4gICAgICAgIC8vIEhUTUw1IG1heGxlbmd0aFxuICAgICAgICBlbHNlIGlmIChudWxsICE9PSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKSkgdGhpcy5hZGRDb25zdHJhaW50KCdtYXhsZW5ndGgnLCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtYXhsZW5ndGgnKSwgdW5kZWZpbmVkLCB0cnVlKTtcblxuICAgICAgLy8gaHRtbDUgdHlwZXNcbiAgICAgIHZhciB0eXBlID0gVXRpbHMuZ2V0VHlwZSh0aGlzLmVsZW1lbnQpO1xuXG4gICAgICAvLyBTbWFsbCBzcGVjaWFsIGNhc2UgaGVyZSBmb3IgSFRNTDUgbnVtYmVyOiBpbnRlZ2VyIHZhbGlkYXRvciBpZiBzdGVwIGF0dHJpYnV0ZSBpcyB1bmRlZmluZWQgb3IgYW4gaW50ZWdlciB2YWx1ZSwgbnVtYmVyIG90aGVyd2lzZVxuICAgICAgaWYgKCdudW1iZXInID09PSB0eXBlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZENvbnN0cmFpbnQoJ3R5cGUnLCBbJ251bWJlcicsIHtcbiAgICAgICAgICBzdGVwOiB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdzdGVwJykgfHwgJzEnLFxuICAgICAgICAgIGJhc2U6IG1pbiB8fCB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpXG4gICAgICAgIH1dLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICAvLyBSZWd1bGFyIG90aGVyIEhUTUw1IHN1cHBvcnRlZCB0eXBlc1xuICAgICAgfSBlbHNlIGlmICgvXihlbWFpbHx1cmx8cmFuZ2V8ZGF0ZSkkL2kudGVzdCh0eXBlKSkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmFkZENvbnN0cmFpbnQoJ3R5cGUnLCB0eXBlLCB1bmRlZmluZWQsIHRydWUpO1xuICAgICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgb25seS5cbiAgICAvLyBGaWVsZCBpcyByZXF1aXJlZCBpZiBoYXZlIHJlcXVpcmVkIGNvbnN0cmFpbnQgd2l0aG91dCBgZmFsc2VgIHZhbHVlXG4gICAgX2lzUmVxdWlyZWQ6IGZ1bmN0aW9uIF9pc1JlcXVpcmVkKCkge1xuICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgdGhpcy5jb25zdHJhaW50c0J5TmFtZS5yZXF1aXJlZCkgcmV0dXJuIGZhbHNlO1xuXG4gICAgICByZXR1cm4gZmFsc2UgIT09IHRoaXMuY29uc3RyYWludHNCeU5hbWUucmVxdWlyZWQucmVxdWlyZW1lbnRzO1xuICAgIH0sXG5cbiAgICAvLyBJbnRlcm5hbCBvbmx5LlxuICAgIC8vIFNob3J0Y3V0IHRvIHRyaWdnZXIgYW4gZXZlbnRcbiAgICBfdHJpZ2dlcjogZnVuY3Rpb24gX3RyaWdnZXIoZXZlbnROYW1lKSB7XG4gICAgICByZXR1cm4gdGhpcy50cmlnZ2VyKCdmaWVsZDonICsgZXZlbnROYW1lKTtcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgb25seVxuICAgIC8vIEhhbmRsZXMgd2hpdGVzcGFjZSBpbiBhIHZhbHVlXG4gICAgLy8gVXNlIGBkYXRhLXBhcnNsZXktd2hpdGVzcGFjZT1cInNxdWlzaFwiYCB0byBhdXRvIHNxdWlzaCBpbnB1dCB2YWx1ZVxuICAgIC8vIFVzZSBgZGF0YS1wYXJzbGV5LXdoaXRlc3BhY2U9XCJ0cmltXCJgIHRvIGF1dG8gdHJpbSBpbnB1dCB2YWx1ZVxuICAgIF9oYW5kbGVXaGl0ZXNwYWNlOiBmdW5jdGlvbiBfaGFuZGxlV2hpdGVzcGFjZSh2YWx1ZSkge1xuICAgICAgaWYgKHRydWUgPT09IHRoaXMub3B0aW9ucy50cmltVmFsdWUpIFV0aWxzLndhcm5PbmNlKCdkYXRhLXBhcnNsZXktdHJpbS12YWx1ZT1cInRydWVcIiBpcyBkZXByZWNhdGVkLCBwbGVhc2UgdXNlIGRhdGEtcGFyc2xleS13aGl0ZXNwYWNlPVwidHJpbVwiJyk7XG5cbiAgICAgIGlmICgnc3F1aXNoJyA9PT0gdGhpcy5vcHRpb25zLndoaXRlc3BhY2UpIHZhbHVlID0gdmFsdWUucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpO1xuXG4gICAgICBpZiAoJ3RyaW0nID09PSB0aGlzLm9wdGlvbnMud2hpdGVzcGFjZSB8fCAnc3F1aXNoJyA9PT0gdGhpcy5vcHRpb25zLndoaXRlc3BhY2UgfHwgdHJ1ZSA9PT0gdGhpcy5vcHRpb25zLnRyaW1WYWx1ZSkgdmFsdWUgPSBVdGlscy50cmltU3RyaW5nKHZhbHVlKTtcblxuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH0sXG5cbiAgICBfaXNEYXRlSW5wdXQ6IGZ1bmN0aW9uIF9pc0RhdGVJbnB1dCgpIHtcbiAgICAgIHZhciBjID0gdGhpcy5jb25zdHJhaW50c0J5TmFtZS50eXBlO1xuICAgICAgcmV0dXJuIGMgJiYgYy5yZXF1aXJlbWVudHMgPT09ICdkYXRlJztcbiAgICB9LFxuXG4gICAgLy8gSW50ZXJuYWwgb25seS5cbiAgICAvLyBSZXR1cm5zIHRoZSBjb25zdHJhaW50cywgZ3JvdXBlZCBieSBkZXNjZW5kaW5nIHByaW9yaXR5LlxuICAgIC8vIFRoZSByZXN1bHQgaXMgdGh1cyBhbiBhcnJheSBvZiBhcnJheXMgb2YgY29uc3RyYWludHMuXG4gICAgX2dldEdyb3VwZWRDb25zdHJhaW50czogZnVuY3Rpb24gX2dldEdyb3VwZWRDb25zdHJhaW50cygpIHtcbiAgICAgIGlmIChmYWxzZSA9PT0gdGhpcy5vcHRpb25zLnByaW9yaXR5RW5hYmxlZCkgcmV0dXJuIFt0aGlzLmNvbnN0cmFpbnRzXTtcblxuICAgICAgdmFyIGdyb3VwZWRDb25zdHJhaW50cyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0ge307XG5cbiAgICAgIC8vIENyZWF0ZSBhcnJheSB1bmlxdWUgb2YgcHJpb3JpdGllc1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmNvbnN0cmFpbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwID0gdGhpcy5jb25zdHJhaW50c1tpXS5wcmlvcml0eTtcbiAgICAgICAgaWYgKCFpbmRleFtwXSkgZ3JvdXBlZENvbnN0cmFpbnRzLnB1c2goaW5kZXhbcF0gPSBbXSk7XG4gICAgICAgIGluZGV4W3BdLnB1c2godGhpcy5jb25zdHJhaW50c1tpXSk7XG4gICAgICB9XG4gICAgICAvLyBTb3J0IHRoZW0gYnkgcHJpb3JpdHkgREVTQ1xuICAgICAgZ3JvdXBlZENvbnN0cmFpbnRzLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgICAgcmV0dXJuIGJbMF0ucHJpb3JpdHkgLSBhWzBdLnByaW9yaXR5O1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBncm91cGVkQ29uc3RyYWludHM7XG4gICAgfVxuXG4gIH07XG5cbiAgdmFyIHBhcnNsZXlfZmllbGQgPSBGaWVsZDtcblxuICB2YXIgTXVsdGlwbGUgPSBmdW5jdGlvbiBNdWx0aXBsZSgpIHtcbiAgICB0aGlzLl9fY2xhc3NfXyA9ICdGaWVsZE11bHRpcGxlJztcbiAgfTtcblxuICBNdWx0aXBsZS5wcm90b3R5cGUgPSB7XG4gICAgLy8gQWRkIG5ldyBgJGVsZW1lbnRgIHNpYmxpbmcgZm9yIG11bHRpcGxlIGZpZWxkXG4gICAgYWRkRWxlbWVudDogZnVuY3Rpb24gYWRkRWxlbWVudCgkZWxlbWVudCkge1xuICAgICAgdGhpcy4kZWxlbWVudHMucHVzaCgkZWxlbWVudCk7XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH0sXG5cbiAgICAvLyBTZWUgYEZpZWxkLl9yZWZyZXNoQ29uc3RyYWludHMoKWBcbiAgICBfcmVmcmVzaENvbnN0cmFpbnRzOiBmdW5jdGlvbiBfcmVmcmVzaENvbnN0cmFpbnRzKCkge1xuICAgICAgdmFyIGZpZWxkQ29uc3RyYWludHM7XG5cbiAgICAgIHRoaXMuY29uc3RyYWludHMgPSBbXTtcblxuICAgICAgLy8gU2VsZWN0IG11bHRpcGxlIHNwZWNpYWwgdHJlYXRtZW50XG4gICAgICBpZiAodGhpcy5lbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJykge1xuICAgICAgICB0aGlzLmFjdHVhbGl6ZU9wdGlvbnMoKS5fYmluZENvbnN0cmFpbnRzKCk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIEdhdGhlciBhbGwgY29uc3RyYWludHMgZm9yIGVhY2ggaW5wdXQgaW4gdGhlIG11bHRpcGxlIGdyb3VwXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuJGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG5cbiAgICAgICAgLy8gQ2hlY2sgaWYgZWxlbWVudCBoYXZlIG5vdCBiZWVuIGR5bmFtaWNhbGx5IHJlbW92ZWQgc2luY2UgbGFzdCBiaW5kaW5nXG4gICAgICAgIGlmICghJCgnaHRtbCcpLmhhcyh0aGlzLiRlbGVtZW50c1tpXSkubGVuZ3RoKSB7XG4gICAgICAgICAgdGhpcy4kZWxlbWVudHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgZmllbGRDb25zdHJhaW50cyA9IHRoaXMuJGVsZW1lbnRzW2ldLmRhdGEoJ0ZpZWxkTXVsdGlwbGUnKS5fcmVmcmVzaENvbnN0cmFpbnRzKCkuY29uc3RyYWludHM7XG5cbiAgICAgICAgZm9yICh2YXIgaiA9IDA7IGogPCBmaWVsZENvbnN0cmFpbnRzLmxlbmd0aDsgaisrKSB0aGlzLmFkZENvbnN0cmFpbnQoZmllbGRDb25zdHJhaW50c1tqXS5uYW1lLCBmaWVsZENvbnN0cmFpbnRzW2pdLnJlcXVpcmVtZW50cywgZmllbGRDb25zdHJhaW50c1tqXS5wcmlvcml0eSwgZmllbGRDb25zdHJhaW50c1tqXS5pc0RvbUNvbnN0cmFpbnQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuXG4gICAgLy8gU2VlIGBGaWVsZC5nZXRWYWx1ZSgpYFxuICAgIGdldFZhbHVlOiBmdW5jdGlvbiBnZXRWYWx1ZSgpIHtcbiAgICAgIC8vIFZhbHVlIGNvdWxkIGJlIG92ZXJyaWRlbiBpbiBET01cbiAgICAgIGlmICgnZnVuY3Rpb24nID09PSB0eXBlb2YgdGhpcy5vcHRpb25zLnZhbHVlKSByZXR1cm4gdGhpcy5vcHRpb25zLnZhbHVlKHRoaXMpO2Vsc2UgaWYgKCd1bmRlZmluZWQnICE9PSB0eXBlb2YgdGhpcy5vcHRpb25zLnZhbHVlKSByZXR1cm4gdGhpcy5vcHRpb25zLnZhbHVlO1xuXG4gICAgICAvLyBSYWRpbyBpbnB1dCBjYXNlXG4gICAgICBpZiAodGhpcy5lbGVtZW50Lm5vZGVOYW1lID09PSAnSU5QVVQnKSB7XG4gICAgICAgIHZhciB0eXBlID0gVXRpbHMuZ2V0VHlwZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBpZiAodHlwZSA9PT0gJ3JhZGlvJykgcmV0dXJuIHRoaXMuX2ZpbmRSZWxhdGVkKCkuZmlsdGVyKCc6Y2hlY2tlZCcpLnZhbCgpIHx8ICcnO1xuXG4gICAgICAgIC8vIGNoZWNrYm94IGlucHV0IGNhc2VcbiAgICAgICAgaWYgKHR5cGUgPT09ICdjaGVja2JveCcpIHtcbiAgICAgICAgICB2YXIgdmFsdWVzID0gW107XG5cbiAgICAgICAgICB0aGlzLl9maW5kUmVsYXRlZCgpLmZpbHRlcignOmNoZWNrZWQnKS5lYWNoKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhbHVlcy5wdXNoKCQodGhpcykudmFsKCkpO1xuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgcmV0dXJuIHZhbHVlcztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBTZWxlY3QgbXVsdGlwbGUgY2FzZVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5ub2RlTmFtZSA9PT0gJ1NFTEVDVCcgJiYgbnVsbCA9PT0gdGhpcy4kZWxlbWVudC52YWwoKSkgcmV0dXJuIFtdO1xuXG4gICAgICAvLyBEZWZhdWx0IGNhc2UgdGhhdCBzaG91bGQgbmV2ZXIgaGFwcGVuXG4gICAgICByZXR1cm4gdGhpcy4kZWxlbWVudC52YWwoKTtcbiAgICB9LFxuXG4gICAgX2luaXQ6IGZ1bmN0aW9uIF9pbml0KCkge1xuICAgICAgdGhpcy4kZWxlbWVudHMgPSBbdGhpcy4kZWxlbWVudF07XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgfTtcblxuICB2YXIgRmFjdG9yeSA9IGZ1bmN0aW9uIEZhY3RvcnkoZWxlbWVudCwgb3B0aW9ucywgcGFyc2xleUZvcm1JbnN0YW5jZSkge1xuICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgdGhpcy4kZWxlbWVudCA9ICQoZWxlbWVudCk7XG5cbiAgICAvLyBJZiB0aGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGJvdW5kLCByZXR1cm5zIGl0cyBzYXZlZCBQYXJzbGV5IGluc3RhbmNlXG4gICAgdmFyIHNhdmVkcGFyc2xleUZvcm1JbnN0YW5jZSA9IHRoaXMuJGVsZW1lbnQuZGF0YSgnUGFyc2xleScpO1xuICAgIGlmIChzYXZlZHBhcnNsZXlGb3JtSW5zdGFuY2UpIHtcblxuICAgICAgLy8gSWYgdGhlIHNhdmVkIGluc3RhbmNlIGhhcyBiZWVuIGJvdW5kIHdpdGhvdXQgYSBGb3JtIHBhcmVudCBhbmQgdGhlcmUgaXMgb25lIGdpdmVuIGluIHRoaXMgY2FsbCwgYWRkIGl0XG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBwYXJzbGV5Rm9ybUluc3RhbmNlICYmIHNhdmVkcGFyc2xleUZvcm1JbnN0YW5jZS5wYXJlbnQgPT09IHdpbmRvdy5QYXJzbGV5KSB7XG4gICAgICAgIHNhdmVkcGFyc2xleUZvcm1JbnN0YW5jZS5wYXJlbnQgPSBwYXJzbGV5Rm9ybUluc3RhbmNlO1xuICAgICAgICBzYXZlZHBhcnNsZXlGb3JtSW5zdGFuY2UuX3Jlc2V0T3B0aW9ucyhzYXZlZHBhcnNsZXlGb3JtSW5zdGFuY2Uub3B0aW9ucyk7XG4gICAgICB9XG5cbiAgICAgIGlmICgnb2JqZWN0JyA9PT0gdHlwZW9mIG9wdGlvbnMpIHtcbiAgICAgICAgX2V4dGVuZHMoc2F2ZWRwYXJzbGV5Rm9ybUluc3RhbmNlLm9wdGlvbnMsIG9wdGlvbnMpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2F2ZWRwYXJzbGV5Rm9ybUluc3RhbmNlO1xuICAgIH1cblxuICAgIC8vIFBhcnNsZXkgbXVzdCBiZSBpbnN0YW50aWF0ZWQgd2l0aCBhIERPTSBlbGVtZW50IG9yIGpRdWVyeSAkZWxlbWVudFxuICAgIGlmICghdGhpcy4kZWxlbWVudC5sZW5ndGgpIHRocm93IG5ldyBFcnJvcignWW91IG11c3QgYmluZCBQYXJzbGV5IG9uIGFuIGV4aXN0aW5nIGVsZW1lbnQuJyk7XG5cbiAgICBpZiAoJ3VuZGVmaW5lZCcgIT09IHR5cGVvZiBwYXJzbGV5Rm9ybUluc3RhbmNlICYmICdGb3JtJyAhPT0gcGFyc2xleUZvcm1JbnN0YW5jZS5fX2NsYXNzX18pIHRocm93IG5ldyBFcnJvcignUGFyZW50IGluc3RhbmNlIG11c3QgYmUgYSBGb3JtIGluc3RhbmNlJyk7XG5cbiAgICB0aGlzLnBhcmVudCA9IHBhcnNsZXlGb3JtSW5zdGFuY2UgfHwgd2luZG93LlBhcnNsZXk7XG4gICAgcmV0dXJuIHRoaXMuaW5pdChvcHRpb25zKTtcbiAgfTtcblxuICBGYWN0b3J5LnByb3RvdHlwZSA9IHtcbiAgICBpbml0OiBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgICAgIHRoaXMuX19jbGFzc19fID0gJ1BhcnNsZXknO1xuICAgICAgdGhpcy5fX3ZlcnNpb25fXyA9ICcyLjguMSc7XG4gICAgICB0aGlzLl9faWRfXyA9IFV0aWxzLmdlbmVyYXRlSUQoKTtcblxuICAgICAgLy8gUHJlLWNvbXB1dGUgb3B0aW9uc1xuICAgICAgdGhpcy5fcmVzZXRPcHRpb25zKG9wdGlvbnMpO1xuXG4gICAgICAvLyBBIEZvcm0gaW5zdGFuY2UgaXMgb2J2aW91c2x5IGEgYDxmb3JtPmAgZWxlbWVudCBidXQgYWxzbyBldmVyeSBub2RlIHRoYXQgaXMgbm90IGFuIGlucHV0IGFuZCBoYXMgdGhlIGBkYXRhLXBhcnNsZXktdmFsaWRhdGVgIGF0dHJpYnV0ZVxuICAgICAgaWYgKHRoaXMuZWxlbWVudC5ub2RlTmFtZSA9PT0gJ0ZPUk0nIHx8IFV0aWxzLmNoZWNrQXR0cih0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5uYW1lc3BhY2UsICd2YWxpZGF0ZScpICYmICF0aGlzLiRlbGVtZW50LmlzKHRoaXMub3B0aW9ucy5pbnB1dHMpKSByZXR1cm4gdGhpcy5iaW5kKCdwYXJzbGV5Rm9ybScpO1xuXG4gICAgICAvLyBFdmVyeSBvdGhlciBlbGVtZW50IGlzIGJvdW5kIGFzIGEgYEZpZWxkYCBvciBgRmllbGRNdWx0aXBsZWBcbiAgICAgIHJldHVybiB0aGlzLmlzTXVsdGlwbGUoKSA/IHRoaXMuaGFuZGxlTXVsdGlwbGUoKSA6IHRoaXMuYmluZCgncGFyc2xleUZpZWxkJyk7XG4gICAgfSxcblxuICAgIGlzTXVsdGlwbGU6IGZ1bmN0aW9uIGlzTXVsdGlwbGUoKSB7XG4gICAgICB2YXIgdHlwZSA9IFV0aWxzLmdldFR5cGUodGhpcy5lbGVtZW50KTtcbiAgICAgIHJldHVybiB0eXBlID09PSAncmFkaW8nIHx8IHR5cGUgPT09ICdjaGVja2JveCcgfHwgdGhpcy5lbGVtZW50Lm5vZGVOYW1lID09PSAnU0VMRUNUJyAmJiBudWxsICE9PSB0aGlzLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdtdWx0aXBsZScpO1xuICAgIH0sXG5cbiAgICAvLyBNdWx0aXBsZXMgZmllbGRzIGFyZSBhIHJlYWwgbmlnaHRtYXJlIDooXG4gICAgLy8gTWF5YmUgc29tZSByZWZhY3RvcmluZyB3b3VsZCBiZSBhcHByZWNpYXRlZCBoZXJlLi4uXG4gICAgaGFuZGxlTXVsdGlwbGU6IGZ1bmN0aW9uIGhhbmRsZU11bHRpcGxlKCkge1xuICAgICAgdmFyIF90aGlzMTMgPSB0aGlzO1xuXG4gICAgICB2YXIgbmFtZTtcbiAgICAgIHZhciBtdWx0aXBsZTtcbiAgICAgIHZhciBwYXJzbGV5TXVsdGlwbGVJbnN0YW5jZTtcblxuICAgICAgLy8gSGFuZGxlIG11bHRpcGxlIG5hbWVcbiAgICAgIHRoaXMub3B0aW9ucy5tdWx0aXBsZSA9IHRoaXMub3B0aW9ucy5tdWx0aXBsZSB8fCAobmFtZSA9IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ25hbWUnKSkgfHwgdGhpcy5lbGVtZW50LmdldEF0dHJpYnV0ZSgnaWQnKTtcblxuICAgICAgLy8gU3BlY2lhbCBzZWxlY3QgbXVsdGlwbGUgaW5wdXRcbiAgICAgIGlmICh0aGlzLmVsZW1lbnQubm9kZU5hbWUgPT09ICdTRUxFQ1QnICYmIG51bGwgIT09IHRoaXMuZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ211bHRpcGxlJykpIHtcbiAgICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxlID0gdGhpcy5vcHRpb25zLm11bHRpcGxlIHx8IHRoaXMuX19pZF9fO1xuICAgICAgICByZXR1cm4gdGhpcy5iaW5kKCdwYXJzbGV5RmllbGRNdWx0aXBsZScpO1xuXG4gICAgICAgIC8vIEVsc2UgZm9yIHJhZGlvIC8gY2hlY2tib3hlcywgd2UgbmVlZCBhIGBuYW1lYCBvciBgZGF0YS1wYXJzbGV5LW11bHRpcGxlYCB0byBwcm9wZXJseSBiaW5kIGl0XG4gICAgICB9IGVsc2UgaWYgKCF0aGlzLm9wdGlvbnMubXVsdGlwbGUpIHtcbiAgICAgICAgICBVdGlscy53YXJuKCdUbyBiZSBib3VuZCBieSBQYXJzbGV5LCBhIHJhZGlvLCBhIGNoZWNrYm94IGFuZCBhIG11bHRpcGxlIHNlbGVjdCBpbnB1dCBtdXN0IGhhdmUgZWl0aGVyIGEgbmFtZSBvciBhIG11bHRpcGxlIG9wdGlvbi4nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAvLyBSZW1vdmUgc3BlY2lhbCBjaGFyc1xuICAgICAgdGhpcy5vcHRpb25zLm11bHRpcGxlID0gdGhpcy5vcHRpb25zLm11bHRpcGxlLnJlcGxhY2UoLyg6fFxcLnxcXFt8XFxdfFxce3xcXH18XFwkKS9nLCAnJyk7XG5cbiAgICAgIC8vIEFkZCBwcm9wZXIgYGRhdGEtcGFyc2xleS1tdWx0aXBsZWAgdG8gc2libGluZ3MgaWYgd2UgaGF2ZSBhIHZhbGlkIG11bHRpcGxlIG5hbWVcbiAgICAgIGlmIChuYW1lKSB7XG4gICAgICAgICQoJ2lucHV0W25hbWU9XCInICsgbmFtZSArICdcIl0nKS5lYWNoKGZ1bmN0aW9uIChpLCBpbnB1dCkge1xuICAgICAgICAgIHZhciB0eXBlID0gVXRpbHMuZ2V0VHlwZShpbnB1dCk7XG4gICAgICAgICAgaWYgKHR5cGUgPT09ICdyYWRpbycgfHwgdHlwZSA9PT0gJ2NoZWNrYm94JykgaW5wdXQuc2V0QXR0cmlidXRlKF90aGlzMTMub3B0aW9ucy5uYW1lc3BhY2UgKyAnbXVsdGlwbGUnLCBfdGhpczEzLm9wdGlvbnMubXVsdGlwbGUpO1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQ2hlY2sgaGVyZSBpZiB3ZSBkb24ndCBhbHJlYWR5IGhhdmUgYSByZWxhdGVkIG11bHRpcGxlIGluc3RhbmNlIHNhdmVkXG4gICAgICB2YXIgJHByZXZpb3VzbHlSZWxhdGVkID0gdGhpcy5fZmluZFJlbGF0ZWQoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgJHByZXZpb3VzbHlSZWxhdGVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHBhcnNsZXlNdWx0aXBsZUluc3RhbmNlID0gJCgkcHJldmlvdXNseVJlbGF0ZWQuZ2V0KGkpKS5kYXRhKCdQYXJzbGV5Jyk7XG4gICAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIHBhcnNsZXlNdWx0aXBsZUluc3RhbmNlKSB7XG5cbiAgICAgICAgICBpZiAoIXRoaXMuJGVsZW1lbnQuZGF0YSgnRmllbGRNdWx0aXBsZScpKSB7XG4gICAgICAgICAgICBwYXJzbGV5TXVsdGlwbGVJbnN0YW5jZS5hZGRFbGVtZW50KHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIENyZWF0ZSBhIHNlY3JldCBGaWVsZCBpbnN0YW5jZSBmb3IgZXZlcnkgbXVsdGlwbGUgZmllbGQuIEl0IHdpbGwgYmUgc3RvcmVkIGluIGBkYXRhKCdGaWVsZE11bHRpcGxlJylgXG4gICAgICAvLyBBbmQgd2lsbCBiZSB1c2VmdWwgbGF0ZXIgdG8gYWNjZXNzIGNsYXNzaWMgYEZpZWxkYCBzdHVmZiB3aGlsZSBiZWluZyBpbiBhIGBGaWVsZE11bHRpcGxlYCBpbnN0YW5jZVxuICAgICAgdGhpcy5iaW5kKCdwYXJzbGV5RmllbGQnLCB0cnVlKTtcblxuICAgICAgcmV0dXJuIHBhcnNsZXlNdWx0aXBsZUluc3RhbmNlIHx8IHRoaXMuYmluZCgncGFyc2xleUZpZWxkTXVsdGlwbGUnKTtcbiAgICB9LFxuXG4gICAgLy8gUmV0dXJuIHByb3BlciBgRm9ybWAsIGBGaWVsZGAgb3IgYEZpZWxkTXVsdGlwbGVgXG4gICAgYmluZDogZnVuY3Rpb24gYmluZCh0eXBlLCBkb05vdFN0b3JlKSB7XG4gICAgICB2YXIgcGFyc2xleUluc3RhbmNlO1xuXG4gICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgY2FzZSAncGFyc2xleUZvcm0nOlxuICAgICAgICAgIHBhcnNsZXlJbnN0YW5jZSA9ICQuZXh0ZW5kKG5ldyBGb3JtKHRoaXMuZWxlbWVudCwgdGhpcy5kb21PcHRpb25zLCB0aGlzLm9wdGlvbnMpLCBuZXcgQmFzZSgpLCB3aW5kb3cuUGFyc2xleUV4dGVuZCkuX2JpbmRGaWVsZHMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFyc2xleUZpZWxkJzpcbiAgICAgICAgICBwYXJzbGV5SW5zdGFuY2UgPSAkLmV4dGVuZChuZXcgcGFyc2xleV9maWVsZCh0aGlzLmVsZW1lbnQsIHRoaXMuZG9tT3B0aW9ucywgdGhpcy5vcHRpb25zLCB0aGlzLnBhcmVudCksIG5ldyBCYXNlKCksIHdpbmRvdy5QYXJzbGV5RXh0ZW5kKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFyc2xleUZpZWxkTXVsdGlwbGUnOlxuICAgICAgICAgIHBhcnNsZXlJbnN0YW5jZSA9ICQuZXh0ZW5kKG5ldyBwYXJzbGV5X2ZpZWxkKHRoaXMuZWxlbWVudCwgdGhpcy5kb21PcHRpb25zLCB0aGlzLm9wdGlvbnMsIHRoaXMucGFyZW50KSwgbmV3IE11bHRpcGxlKCksIG5ldyBCYXNlKCksIHdpbmRvdy5QYXJzbGV5RXh0ZW5kKS5faW5pdCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcih0eXBlICsgJ2lzIG5vdCBhIHN1cHBvcnRlZCBQYXJzbGV5IHR5cGUnKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMub3B0aW9ucy5tdWx0aXBsZSkgVXRpbHMuc2V0QXR0cih0aGlzLmVsZW1lbnQsIHRoaXMub3B0aW9ucy5uYW1lc3BhY2UsICdtdWx0aXBsZScsIHRoaXMub3B0aW9ucy5tdWx0aXBsZSk7XG5cbiAgICAgIGlmICgndW5kZWZpbmVkJyAhPT0gdHlwZW9mIGRvTm90U3RvcmUpIHtcbiAgICAgICAgdGhpcy4kZWxlbWVudC5kYXRhKCdGaWVsZE11bHRpcGxlJywgcGFyc2xleUluc3RhbmNlKTtcblxuICAgICAgICByZXR1cm4gcGFyc2xleUluc3RhbmNlO1xuICAgICAgfVxuXG4gICAgICAvLyBTdG9yZSB0aGUgZnJlc2hseSBib3VuZCBpbnN0YW5jZSBpbiBhIERPTSBlbGVtZW50IGZvciBsYXRlciBhY2Nlc3MgdXNpbmcgalF1ZXJ5IGBkYXRhKClgXG4gICAgICB0aGlzLiRlbGVtZW50LmRhdGEoJ1BhcnNsZXknLCBwYXJzbGV5SW5zdGFuY2UpO1xuXG4gICAgICAvLyBUZWxsIHRoZSB3b3JsZCB3ZSBoYXZlIGEgbmV3IEZvcm0gb3IgRmllbGQgaW5zdGFuY2UhXG4gICAgICBwYXJzbGV5SW5zdGFuY2UuX2FjdHVhbGl6ZVRyaWdnZXJzKCk7XG4gICAgICBwYXJzbGV5SW5zdGFuY2UuX3RyaWdnZXIoJ2luaXQnKTtcblxuICAgICAgcmV0dXJuIHBhcnNsZXlJbnN0YW5jZTtcbiAgICB9XG4gIH07XG5cbiAgdmFyIHZlcm51bXMgPSAkLmZuLmpxdWVyeS5zcGxpdCgnLicpO1xuICBpZiAocGFyc2VJbnQodmVybnVtc1swXSkgPD0gMSAmJiBwYXJzZUludCh2ZXJudW1zWzFdKSA8IDgpIHtcbiAgICB0aHJvdyBcIlRoZSBsb2FkZWQgdmVyc2lvbiBvZiBqUXVlcnkgaXMgdG9vIG9sZC4gUGxlYXNlIHVwZ3JhZGUgdG8gMS44Lnggb3IgYmV0dGVyLlwiO1xuICB9XG4gIGlmICghdmVybnVtcy5mb3JFYWNoKSB7XG4gICAgVXRpbHMud2FybignUGFyc2xleSByZXF1aXJlcyBFUzUgdG8gcnVuIHByb3Blcmx5LiBQbGVhc2UgaW5jbHVkZSBodHRwczovL2dpdGh1Yi5jb20vZXMtc2hpbXMvZXM1LXNoaW0nKTtcbiAgfVxuICAvLyBJbmhlcml0IGBvbmAsIGBvZmZgICYgYHRyaWdnZXJgIHRvIFBhcnNsZXk6XG4gIHZhciBQYXJzbGV5ID0gX2V4dGVuZHMobmV3IEJhc2UoKSwge1xuICAgIGVsZW1lbnQ6IGRvY3VtZW50LFxuICAgICRlbGVtZW50OiAkKGRvY3VtZW50KSxcbiAgICBhY3R1YWxpemVPcHRpb25zOiBudWxsLFxuICAgIF9yZXNldE9wdGlvbnM6IG51bGwsXG4gICAgRmFjdG9yeTogRmFjdG9yeSxcbiAgICB2ZXJzaW9uOiAnMi44LjEnXG4gIH0pO1xuXG4gIC8vIFN1cHBsZW1lbnQgRmllbGQgYW5kIEZvcm0gd2l0aCBCYXNlXG4gIC8vIFRoaXMgd2F5LCB0aGUgY29uc3RydWN0b3JzIHdpbGwgaGF2ZSBhY2Nlc3MgdG8gdGhvc2UgbWV0aG9kc1xuICBfZXh0ZW5kcyhwYXJzbGV5X2ZpZWxkLnByb3RvdHlwZSwgVUkuRmllbGQsIEJhc2UucHJvdG90eXBlKTtcbiAgX2V4dGVuZHMoRm9ybS5wcm90b3R5cGUsIFVJLkZvcm0sIEJhc2UucHJvdG90eXBlKTtcbiAgLy8gSW5oZXJpdCBhY3R1YWxpemVPcHRpb25zIGFuZCBfcmVzZXRPcHRpb25zOlxuICBfZXh0ZW5kcyhGYWN0b3J5LnByb3RvdHlwZSwgQmFzZS5wcm90b3R5cGUpO1xuXG4gIC8vICMjIyBqUXVlcnkgQVBJXG4gIC8vIGAkKCcuZWxlbScpLnBhcnNsZXkob3B0aW9ucylgIG9yIGAkKCcuZWxlbScpLnBzbHkob3B0aW9ucylgXG4gICQuZm4ucGFyc2xleSA9ICQuZm4ucHNseSA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gICAgaWYgKHRoaXMubGVuZ3RoID4gMSkge1xuICAgICAgdmFyIGluc3RhbmNlcyA9IFtdO1xuXG4gICAgICB0aGlzLmVhY2goZnVuY3Rpb24gKCkge1xuICAgICAgICBpbnN0YW5jZXMucHVzaCgkKHRoaXMpLnBhcnNsZXkob3B0aW9ucykpO1xuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBpbnN0YW5jZXM7XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIHVuZGVmaW5lZCBpZiBhcHBsaWVkIHRvIG5vbiBleGlzdGluZyBET00gZWxlbWVudFxuICAgIGlmICh0aGlzLmxlbmd0aCA9PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBGYWN0b3J5KHRoaXNbMF0sIG9wdGlvbnMpO1xuICB9O1xuXG4gIC8vICMjIyBGaWVsZCBhbmQgRm9ybSBleHRlbnNpb25cbiAgLy8gRW5zdXJlIHRoZSBleHRlbnNpb24gaXMgbm93IGRlZmluZWQgaWYgaXQgd2Fzbid0IHByZXZpb3VzbHlcbiAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2Ygd2luZG93LlBhcnNsZXlFeHRlbmQpIHdpbmRvdy5QYXJzbGV5RXh0ZW5kID0ge307XG5cbiAgLy8gIyMjIFBhcnNsZXkgY29uZmlnXG4gIC8vIEluaGVyaXQgZnJvbSBQYXJzbGV5RGVmYXVsdCwgYW5kIGNvcHkgb3ZlciBhbnkgZXhpc3RpbmcgdmFsdWVzXG4gIFBhcnNsZXkub3B0aW9ucyA9IF9leHRlbmRzKFV0aWxzLm9iamVjdENyZWF0ZShEZWZhdWx0cyksIHdpbmRvdy5QYXJzbGV5Q29uZmlnKTtcbiAgd2luZG93LlBhcnNsZXlDb25maWcgPSBQYXJzbGV5Lm9wdGlvbnM7IC8vIE9sZCB3YXkgb2YgYWNjZXNzaW5nIGdsb2JhbCBvcHRpb25zXG5cbiAgLy8gIyMjIEdsb2JhbHNcbiAgd2luZG93LlBhcnNsZXkgPSB3aW5kb3cucHNseSA9IFBhcnNsZXk7XG4gIFBhcnNsZXkuVXRpbHMgPSBVdGlscztcbiAgd2luZG93LlBhcnNsZXlVdGlscyA9IHt9O1xuICAkLmVhY2goVXRpbHMsIGZ1bmN0aW9uIChrZXksIHZhbHVlKSB7XG4gICAgaWYgKCdmdW5jdGlvbicgPT09IHR5cGVvZiB2YWx1ZSkge1xuICAgICAgd2luZG93LlBhcnNsZXlVdGlsc1trZXldID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBVdGlscy53YXJuT25jZSgnQWNjZXNzaW5nIGB3aW5kb3cuUGFyc2xleVV0aWxzYCBpcyBkZXByZWNhdGVkLiBVc2UgYHdpbmRvdy5QYXJzbGV5LlV0aWxzYCBpbnN0ZWFkLicpO1xuICAgICAgICByZXR1cm4gVXRpbHNba2V5XS5hcHBseShVdGlscywgYXJndW1lbnRzKTtcbiAgICAgIH07XG4gICAgfVxuICB9KTtcblxuICAvLyAjIyMgRGVmaW5lIG1ldGhvZHMgdGhhdCBmb3J3YXJkIHRvIHRoZSByZWdpc3RyeSwgYW5kIGRlcHJlY2F0ZSBhbGwgYWNjZXNzIGV4Y2VwdCB0aHJvdWdoIHdpbmRvdy5QYXJzbGV5XG4gIHZhciByZWdpc3RyeSA9IHdpbmRvdy5QYXJzbGV5Ll92YWxpZGF0b3JSZWdpc3RyeSA9IG5ldyBWYWxpZGF0b3JSZWdpc3RyeSh3aW5kb3cuUGFyc2xleUNvbmZpZy52YWxpZGF0b3JzLCB3aW5kb3cuUGFyc2xleUNvbmZpZy5pMThuKTtcbiAgd2luZG93LlBhcnNsZXlWYWxpZGF0b3IgPSB7fTtcbiAgJC5lYWNoKCdzZXRMb2NhbGUgYWRkQ2F0YWxvZyBhZGRNZXNzYWdlIGFkZE1lc3NhZ2VzIGdldEVycm9yTWVzc2FnZSBmb3JtYXRNZXNzYWdlIGFkZFZhbGlkYXRvciB1cGRhdGVWYWxpZGF0b3IgcmVtb3ZlVmFsaWRhdG9yIGhhc1ZhbGlkYXRvcicuc3BsaXQoJyAnKSwgZnVuY3Rpb24gKGksIG1ldGhvZCkge1xuICAgIHdpbmRvdy5QYXJzbGV5W21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gcmVnaXN0cnlbbWV0aG9kXS5hcHBseShyZWdpc3RyeSwgYXJndW1lbnRzKTtcbiAgICB9O1xuICAgIHdpbmRvdy5QYXJzbGV5VmFsaWRhdG9yW21ldGhvZF0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgX3dpbmRvdyRQYXJzbGV5O1xuXG4gICAgICBVdGlscy53YXJuT25jZSgnQWNjZXNzaW5nIHRoZSBtZXRob2QgXFwnJyArIG1ldGhvZCArICdcXCcgdGhyb3VnaCBWYWxpZGF0b3IgaXMgZGVwcmVjYXRlZC4gU2ltcGx5IGNhbGwgXFwnd2luZG93LlBhcnNsZXkuJyArIG1ldGhvZCArICcoLi4uKVxcJycpO1xuICAgICAgcmV0dXJuIChfd2luZG93JFBhcnNsZXkgPSB3aW5kb3cuUGFyc2xleSlbbWV0aG9kXS5hcHBseShfd2luZG93JFBhcnNsZXksIGFyZ3VtZW50cyk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gIyMjIFVJXG4gIC8vIERlcHJlY2F0ZWQgZ2xvYmFsIG9iamVjdFxuICB3aW5kb3cuUGFyc2xleS5VSSA9IFVJO1xuICB3aW5kb3cuUGFyc2xleVVJID0ge1xuICAgIHJlbW92ZUVycm9yOiBmdW5jdGlvbiByZW1vdmVFcnJvcihpbnN0YW5jZSwgbmFtZSwgZG9Ob3RVcGRhdGVDbGFzcykge1xuICAgICAgdmFyIHVwZGF0ZUNsYXNzID0gdHJ1ZSAhPT0gZG9Ob3RVcGRhdGVDbGFzcztcbiAgICAgIFV0aWxzLndhcm5PbmNlKCdBY2Nlc3NpbmcgVUkgaXMgZGVwcmVjYXRlZC4gQ2FsbCBcXCdyZW1vdmVFcnJvclxcJyBvbiB0aGUgaW5zdGFuY2UgZGlyZWN0bHkuIFBsZWFzZSBjb21tZW50IGluIGlzc3VlIDEwNzMgYXMgdG8geW91ciBuZWVkIHRvIGNhbGwgdGhpcyBtZXRob2QuJyk7XG4gICAgICByZXR1cm4gaW5zdGFuY2UucmVtb3ZlRXJyb3IobmFtZSwgeyB1cGRhdGVDbGFzczogdXBkYXRlQ2xhc3MgfSk7XG4gICAgfSxcbiAgICBnZXRFcnJvcnNNZXNzYWdlczogZnVuY3Rpb24gZ2V0RXJyb3JzTWVzc2FnZXMoaW5zdGFuY2UpIHtcbiAgICAgIFV0aWxzLndhcm5PbmNlKCdBY2Nlc3NpbmcgVUkgaXMgZGVwcmVjYXRlZC4gQ2FsbCBcXCdnZXRFcnJvcnNNZXNzYWdlc1xcJyBvbiB0aGUgaW5zdGFuY2UgZGlyZWN0bHkuJyk7XG4gICAgICByZXR1cm4gaW5zdGFuY2UuZ2V0RXJyb3JzTWVzc2FnZXMoKTtcbiAgICB9XG4gIH07XG4gICQuZWFjaCgnYWRkRXJyb3IgdXBkYXRlRXJyb3InLnNwbGl0KCcgJyksIGZ1bmN0aW9uIChpLCBtZXRob2QpIHtcbiAgICB3aW5kb3cuUGFyc2xleVVJW21ldGhvZF0gPSBmdW5jdGlvbiAoaW5zdGFuY2UsIG5hbWUsIG1lc3NhZ2UsIGFzc2VydCwgZG9Ob3RVcGRhdGVDbGFzcykge1xuICAgICAgdmFyIHVwZGF0ZUNsYXNzID0gdHJ1ZSAhPT0gZG9Ob3RVcGRhdGVDbGFzcztcbiAgICAgIFV0aWxzLndhcm5PbmNlKCdBY2Nlc3NpbmcgVUkgaXMgZGVwcmVjYXRlZC4gQ2FsbCBcXCcnICsgbWV0aG9kICsgJ1xcJyBvbiB0aGUgaW5zdGFuY2UgZGlyZWN0bHkuIFBsZWFzZSBjb21tZW50IGluIGlzc3VlIDEwNzMgYXMgdG8geW91ciBuZWVkIHRvIGNhbGwgdGhpcyBtZXRob2QuJyk7XG4gICAgICByZXR1cm4gaW5zdGFuY2VbbWV0aG9kXShuYW1lLCB7IG1lc3NhZ2U6IG1lc3NhZ2UsIGFzc2VydDogYXNzZXJ0LCB1cGRhdGVDbGFzczogdXBkYXRlQ2xhc3MgfSk7XG4gICAgfTtcbiAgfSk7XG5cbiAgLy8gIyMjIFBBUlNMRVkgYXV0by1iaW5kaW5nXG4gIC8vIFByZXZlbnQgaXQgYnkgc2V0dGluZyBgUGFyc2xleUNvbmZpZy5hdXRvQmluZGAgdG8gYGZhbHNlYFxuICBpZiAoZmFsc2UgIT09IHdpbmRvdy5QYXJzbGV5Q29uZmlnLmF1dG9CaW5kKSB7XG4gICAgJChmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBXb3JrcyBvbmx5IG9uIGBkYXRhLXBhcnNsZXktdmFsaWRhdGVgLlxuICAgICAgaWYgKCQoJ1tkYXRhLXBhcnNsZXktdmFsaWRhdGVdJykubGVuZ3RoKSAkKCdbZGF0YS1wYXJzbGV5LXZhbGlkYXRlXScpLnBhcnNsZXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIHZhciBvID0gJCh7fSk7XG4gIHZhciBkZXByZWNhdGVkID0gZnVuY3Rpb24gZGVwcmVjYXRlZCgpIHtcbiAgICBVdGlscy53YXJuT25jZShcIlBhcnNsZXkncyBwdWJzdWIgbW9kdWxlIGlzIGRlcHJlY2F0ZWQ7IHVzZSB0aGUgJ29uJyBhbmQgJ29mZicgbWV0aG9kcyBvbiBwYXJzbGV5IGluc3RhbmNlcyBvciB3aW5kb3cuUGFyc2xleVwiKTtcbiAgfTtcblxuICAvLyBSZXR1cm5zIGFuIGV2ZW50IGhhbmRsZXIgdGhhdCBjYWxscyBgZm5gIHdpdGggdGhlIGFyZ3VtZW50cyBpdCBleHBlY3RzXG4gIGZ1bmN0aW9uIGFkYXB0KGZuLCBjb250ZXh0KSB7XG4gICAgLy8gU3RvcmUgdG8gYWxsb3cgdW5iaW5kaW5nXG4gICAgaWYgKCFmbi5wYXJzbGV5QWRhcHRlZENhbGxiYWNrKSB7XG4gICAgICBmbi5wYXJzbGV5QWRhcHRlZENhbGxiYWNrID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMCk7XG4gICAgICAgIGFyZ3MudW5zaGlmdCh0aGlzKTtcbiAgICAgICAgZm4uYXBwbHkoY29udGV4dCB8fCBvLCBhcmdzKTtcbiAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBmbi5wYXJzbGV5QWRhcHRlZENhbGxiYWNrO1xuICB9XG5cbiAgdmFyIGV2ZW50UHJlZml4ID0gJ3BhcnNsZXk6JztcbiAgLy8gQ29udmVydHMgJ3BhcnNsZXk6Zm9ybTp2YWxpZGF0ZScgaW50byAnZm9ybTp2YWxpZGF0ZSdcbiAgZnVuY3Rpb24gZXZlbnROYW1lKG5hbWUpIHtcbiAgICBpZiAobmFtZS5sYXN0SW5kZXhPZihldmVudFByZWZpeCwgMCkgPT09IDApIHJldHVybiBuYW1lLnN1YnN0cihldmVudFByZWZpeC5sZW5ndGgpO1xuICAgIHJldHVybiBuYW1lO1xuICB9XG5cbiAgLy8gJC5saXN0ZW4gaXMgZGVwcmVjYXRlZC4gVXNlIFBhcnNsZXkub24gaW5zdGVhZC5cbiAgJC5saXN0ZW4gPSBmdW5jdGlvbiAobmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgY29udGV4dDtcbiAgICBkZXByZWNhdGVkKCk7XG4gICAgaWYgKCdvYmplY3QnID09PSB0eXBlb2YgYXJndW1lbnRzWzFdICYmICdmdW5jdGlvbicgPT09IHR5cGVvZiBhcmd1bWVudHNbMl0pIHtcbiAgICAgIGNvbnRleHQgPSBhcmd1bWVudHNbMV07XG4gICAgICBjYWxsYmFjayA9IGFyZ3VtZW50c1syXTtcbiAgICB9XG5cbiAgICBpZiAoJ2Z1bmN0aW9uJyAhPT0gdHlwZW9mIGNhbGxiYWNrKSB0aHJvdyBuZXcgRXJyb3IoJ1dyb25nIHBhcmFtZXRlcnMnKTtcblxuICAgIHdpbmRvdy5QYXJzbGV5Lm9uKGV2ZW50TmFtZShuYW1lKSwgYWRhcHQoY2FsbGJhY2ssIGNvbnRleHQpKTtcbiAgfTtcblxuICAkLmxpc3RlblRvID0gZnVuY3Rpb24gKGluc3RhbmNlLCBuYW1lLCBmbikge1xuICAgIGRlcHJlY2F0ZWQoKTtcbiAgICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIHBhcnNsZXlfZmllbGQpICYmICEoaW5zdGFuY2UgaW5zdGFuY2VvZiBGb3JtKSkgdGhyb3cgbmV3IEVycm9yKCdNdXN0IGdpdmUgUGFyc2xleSBpbnN0YW5jZScpO1xuXG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgbmFtZSB8fCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignV3JvbmcgcGFyYW1ldGVycycpO1xuXG4gICAgaW5zdGFuY2Uub24oZXZlbnROYW1lKG5hbWUpLCBhZGFwdChmbikpO1xuICB9O1xuXG4gICQudW5zdWJzY3JpYmUgPSBmdW5jdGlvbiAobmFtZSwgZm4pIHtcbiAgICBkZXByZWNhdGVkKCk7XG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgbmFtZSB8fCAnZnVuY3Rpb24nICE9PSB0eXBlb2YgZm4pIHRocm93IG5ldyBFcnJvcignV3JvbmcgYXJndW1lbnRzJyk7XG4gICAgd2luZG93LlBhcnNsZXkub2ZmKGV2ZW50TmFtZShuYW1lKSwgZm4ucGFyc2xleUFkYXB0ZWRDYWxsYmFjayk7XG4gIH07XG5cbiAgJC51bnN1YnNjcmliZVRvID0gZnVuY3Rpb24gKGluc3RhbmNlLCBuYW1lKSB7XG4gICAgZGVwcmVjYXRlZCgpO1xuICAgIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgcGFyc2xleV9maWVsZCkgJiYgIShpbnN0YW5jZSBpbnN0YW5jZW9mIEZvcm0pKSB0aHJvdyBuZXcgRXJyb3IoJ011c3QgZ2l2ZSBQYXJzbGV5IGluc3RhbmNlJyk7XG4gICAgaW5zdGFuY2Uub2ZmKGV2ZW50TmFtZShuYW1lKSk7XG4gIH07XG5cbiAgJC51bnN1YnNjcmliZUFsbCA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gICAgZGVwcmVjYXRlZCgpO1xuICAgIHdpbmRvdy5QYXJzbGV5Lm9mZihldmVudE5hbWUobmFtZSkpO1xuICAgICQoJ2Zvcm0saW5wdXQsdGV4dGFyZWEsc2VsZWN0JykuZWFjaChmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgaW5zdGFuY2UgPSAkKHRoaXMpLmRhdGEoJ1BhcnNsZXknKTtcbiAgICAgIGlmIChpbnN0YW5jZSkge1xuICAgICAgICBpbnN0YW5jZS5vZmYoZXZlbnROYW1lKG5hbWUpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfTtcblxuICAvLyAkLmVtaXQgaXMgZGVwcmVjYXRlZC4gVXNlIGpRdWVyeSBldmVudHMgaW5zdGVhZC5cbiAgJC5lbWl0ID0gZnVuY3Rpb24gKG5hbWUsIGluc3RhbmNlKSB7XG4gICAgdmFyIF9pbnN0YW5jZTtcblxuICAgIGRlcHJlY2F0ZWQoKTtcbiAgICB2YXIgaW5zdGFuY2VHaXZlbiA9IGluc3RhbmNlIGluc3RhbmNlb2YgcGFyc2xleV9maWVsZCB8fCBpbnN0YW5jZSBpbnN0YW5jZW9mIEZvcm07XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIGluc3RhbmNlR2l2ZW4gPyAyIDogMSk7XG4gICAgYXJncy51bnNoaWZ0KGV2ZW50TmFtZShuYW1lKSk7XG4gICAgaWYgKCFpbnN0YW5jZUdpdmVuKSB7XG4gICAgICBpbnN0YW5jZSA9IHdpbmRvdy5QYXJzbGV5O1xuICAgIH1cbiAgICAoX2luc3RhbmNlID0gaW5zdGFuY2UpLnRyaWdnZXIuYXBwbHkoX2luc3RhbmNlLCBfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICB9O1xuXG4gIHZhciBwdWJzdWIgPSB7fTtcblxuICAkLmV4dGVuZCh0cnVlLCBQYXJzbGV5LCB7XG4gICAgYXN5bmNWYWxpZGF0b3JzOiB7XG4gICAgICAnZGVmYXVsdCc6IHtcbiAgICAgICAgZm46IGZ1bmN0aW9uIGZuKHhocikge1xuICAgICAgICAgIC8vIEJ5IGRlZmF1bHQsIG9ubHkgc3RhdHVzIDJ4eCBhcmUgZGVlbWVkIHN1Y2Nlc3NmdWwuXG4gICAgICAgICAgLy8gTm90ZTogd2UgdXNlIHN0YXR1cyBpbnN0ZWFkIG9mIHN0YXRlKCkgYmVjYXVzZSByZXNwb25zZXMgd2l0aCBzdGF0dXMgMjAwXG4gICAgICAgICAgLy8gYnV0IGludmFsaWQgbWVzc2FnZXMgKGUuZy4gYW4gZW1wdHkgYm9keSBmb3IgY29udGVudCB0eXBlIHNldCB0byBKU09OKSB3aWxsXG4gICAgICAgICAgLy8gcmVzdWx0IGluIHN0YXRlKCkgPT09ICdyZWplY3RlZCcuXG4gICAgICAgICAgcmV0dXJuIHhoci5zdGF0dXMgPj0gMjAwICYmIHhoci5zdGF0dXMgPCAzMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogZmFsc2VcbiAgICAgIH0sXG4gICAgICByZXZlcnNlOiB7XG4gICAgICAgIGZuOiBmdW5jdGlvbiBmbih4aHIpIHtcbiAgICAgICAgICAvLyBJZiByZXZlcnNlIG9wdGlvbiBpcyBzZXQsIGEgZmFpbGluZyBhamF4IHJlcXVlc3QgaXMgY29uc2lkZXJlZCBzdWNjZXNzZnVsXG4gICAgICAgICAgcmV0dXJuIHhoci5zdGF0dXMgPCAyMDAgfHwgeGhyLnN0YXR1cyA+PSAzMDA7XG4gICAgICAgIH0sXG4gICAgICAgIHVybDogZmFsc2VcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWRkQXN5bmNWYWxpZGF0b3I6IGZ1bmN0aW9uIGFkZEFzeW5jVmFsaWRhdG9yKG5hbWUsIGZuLCB1cmwsIG9wdGlvbnMpIHtcbiAgICAgIFBhcnNsZXkuYXN5bmNWYWxpZGF0b3JzW25hbWVdID0ge1xuICAgICAgICBmbjogZm4sXG4gICAgICAgIHVybDogdXJsIHx8IGZhbHNlLFxuICAgICAgICBvcHRpb25zOiBvcHRpb25zIHx8IHt9XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgfSk7XG5cbiAgUGFyc2xleS5hZGRWYWxpZGF0b3IoJ3JlbW90ZScsIHtcbiAgICByZXF1aXJlbWVudFR5cGU6IHtcbiAgICAgICcnOiAnc3RyaW5nJyxcbiAgICAgICd2YWxpZGF0b3InOiAnc3RyaW5nJyxcbiAgICAgICdyZXZlcnNlJzogJ2Jvb2xlYW4nLFxuICAgICAgJ29wdGlvbnMnOiAnb2JqZWN0J1xuICAgIH0sXG5cbiAgICB2YWxpZGF0ZVN0cmluZzogZnVuY3Rpb24gdmFsaWRhdGVTdHJpbmcodmFsdWUsIHVybCwgb3B0aW9ucywgaW5zdGFuY2UpIHtcbiAgICAgIHZhciBkYXRhID0ge307XG4gICAgICB2YXIgYWpheE9wdGlvbnM7XG4gICAgICB2YXIgY3NyO1xuICAgICAgdmFyIHZhbGlkYXRvciA9IG9wdGlvbnMudmFsaWRhdG9yIHx8ICh0cnVlID09PSBvcHRpb25zLnJldmVyc2UgPyAncmV2ZXJzZScgOiAnZGVmYXVsdCcpO1xuXG4gICAgICBpZiAoJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBQYXJzbGV5LmFzeW5jVmFsaWRhdG9yc1t2YWxpZGF0b3JdKSB0aHJvdyBuZXcgRXJyb3IoJ0NhbGxpbmcgYW4gdW5kZWZpbmVkIGFzeW5jIHZhbGlkYXRvcjogYCcgKyB2YWxpZGF0b3IgKyAnYCcpO1xuXG4gICAgICB1cmwgPSBQYXJzbGV5LmFzeW5jVmFsaWRhdG9yc1t2YWxpZGF0b3JdLnVybCB8fCB1cmw7XG5cbiAgICAgIC8vIEZpbGwgY3VycmVudCB2YWx1ZVxuICAgICAgaWYgKHVybC5pbmRleE9mKCd7dmFsdWV9JykgPiAtMSkge1xuICAgICAgICB1cmwgPSB1cmwucmVwbGFjZSgne3ZhbHVlfScsIGVuY29kZVVSSUNvbXBvbmVudCh2YWx1ZSkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YVtpbnN0YW5jZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8IGluc3RhbmNlLmVsZW1lbnQuZ2V0QXR0cmlidXRlKCdpZCcpXSA9IHZhbHVlO1xuICAgICAgfVxuXG4gICAgICAvLyBNZXJnZSBvcHRpb25zIHBhc3NlZCBpbiBmcm9tIHRoZSBmdW5jdGlvbiB3aXRoIHRoZSBvbmVzIGluIHRoZSBhdHRyaWJ1dGVcbiAgICAgIHZhciByZW1vdGVPcHRpb25zID0gJC5leHRlbmQodHJ1ZSwgb3B0aW9ucy5vcHRpb25zIHx8IHt9LCBQYXJzbGV5LmFzeW5jVmFsaWRhdG9yc1t2YWxpZGF0b3JdLm9wdGlvbnMpO1xuXG4gICAgICAvLyBBbGwgYCQuYWpheChvcHRpb25zKWAgY291bGQgYmUgb3ZlcnJpZGRlbiBvciBleHRlbmRlZCBkaXJlY3RseSBmcm9tIERPTSBpbiBgZGF0YS1wYXJzbGV5LXJlbW90ZS1vcHRpb25zYFxuICAgICAgYWpheE9wdGlvbnMgPSAkLmV4dGVuZCh0cnVlLCB7fSwge1xuICAgICAgICB1cmw6IHVybCxcbiAgICAgICAgZGF0YTogZGF0YSxcbiAgICAgICAgdHlwZTogJ0dFVCdcbiAgICAgIH0sIHJlbW90ZU9wdGlvbnMpO1xuXG4gICAgICAvLyBHZW5lcmF0ZSBzdG9yZSBrZXkgYmFzZWQgb24gYWpheCBvcHRpb25zXG4gICAgICBpbnN0YW5jZS50cmlnZ2VyKCdmaWVsZDphamF4b3B0aW9ucycsIGluc3RhbmNlLCBhamF4T3B0aW9ucyk7XG5cbiAgICAgIGNzciA9ICQucGFyYW0oYWpheE9wdGlvbnMpO1xuXG4gICAgICAvLyBJbml0aWFsaXNlIHF1ZXJyeSBjYWNoZVxuICAgICAgaWYgKCd1bmRlZmluZWQnID09PSB0eXBlb2YgUGFyc2xleS5fcmVtb3RlQ2FjaGUpIFBhcnNsZXkuX3JlbW90ZUNhY2hlID0ge307XG5cbiAgICAgIC8vIFRyeSB0byByZXRyaWV2ZSBzdG9yZWQgeGhyXG4gICAgICB2YXIgeGhyID0gUGFyc2xleS5fcmVtb3RlQ2FjaGVbY3NyXSA9IFBhcnNsZXkuX3JlbW90ZUNhY2hlW2Nzcl0gfHwgJC5hamF4KGFqYXhPcHRpb25zKTtcblxuICAgICAgdmFyIGhhbmRsZVhociA9IGZ1bmN0aW9uIGhhbmRsZVhocigpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFBhcnNsZXkuYXN5bmNWYWxpZGF0b3JzW3ZhbGlkYXRvcl0uZm4uY2FsbChpbnN0YW5jZSwgeGhyLCB1cmwsIG9wdGlvbnMpO1xuICAgICAgICBpZiAoIXJlc3VsdCkgLy8gTWFwIGZhbHN5IHJlc3VsdHMgdG8gcmVqZWN0ZWQgcHJvbWlzZVxuICAgICAgICAgIHJlc3VsdCA9ICQuRGVmZXJyZWQoKS5yZWplY3QoKTtcbiAgICAgICAgcmV0dXJuICQud2hlbihyZXN1bHQpO1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIHhoci50aGVuKGhhbmRsZVhociwgaGFuZGxlWGhyKTtcbiAgICB9LFxuXG4gICAgcHJpb3JpdHk6IC0xXG4gIH0pO1xuXG4gIFBhcnNsZXkub24oJ2Zvcm06c3VibWl0JywgZnVuY3Rpb24gKCkge1xuICAgIFBhcnNsZXkuX3JlbW90ZUNhY2hlID0ge307XG4gIH0pO1xuXG4gIEJhc2UucHJvdG90eXBlLmFkZEFzeW5jVmFsaWRhdG9yID0gZnVuY3Rpb24gKCkge1xuICAgIFV0aWxzLndhcm5PbmNlKCdBY2Nlc3NpbmcgdGhlIG1ldGhvZCBgYWRkQXN5bmNWYWxpZGF0b3JgIHRocm91Z2ggYW4gaW5zdGFuY2UgaXMgZGVwcmVjYXRlZC4gU2ltcGx5IGNhbGwgYFBhcnNsZXkuYWRkQXN5bmNWYWxpZGF0b3IoLi4uKWAnKTtcbiAgICByZXR1cm4gUGFyc2xleS5hZGRBc3luY1ZhbGlkYXRvci5hcHBseShQYXJzbGV5LCBhcmd1bWVudHMpO1xuICB9O1xuXG4gIC8vIFRoaXMgaXMgaW5jbHVkZWQgd2l0aCB0aGUgUGFyc2xleSBsaWJyYXJ5IGl0c2VsZixcbiAgLy8gdGh1cyB0aGVyZSBpcyBubyB1c2UgaW4gYWRkaW5nIGl0IHRvIHlvdXIgcHJvamVjdC5cbiAgUGFyc2xleS5hZGRNZXNzYWdlcygnZW4nLCB7XG4gICAgZGVmYXVsdE1lc3NhZ2U6IFwiVGhpcyB2YWx1ZSBzZWVtcyB0byBiZSBpbnZhbGlkLlwiLFxuICAgIHR5cGU6IHtcbiAgICAgIGVtYWlsOiBcIlRoaXMgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgZW1haWwuXCIsXG4gICAgICB1cmw6IFwiVGhpcyB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCB1cmwuXCIsXG4gICAgICBudW1iZXI6IFwiVGhpcyB2YWx1ZSBzaG91bGQgYmUgYSB2YWxpZCBudW1iZXIuXCIsXG4gICAgICBpbnRlZ2VyOiBcIlRoaXMgdmFsdWUgc2hvdWxkIGJlIGEgdmFsaWQgaW50ZWdlci5cIixcbiAgICAgIGRpZ2l0czogXCJUaGlzIHZhbHVlIHNob3VsZCBiZSBkaWdpdHMuXCIsXG4gICAgICBhbHBoYW51bTogXCJUaGlzIHZhbHVlIHNob3VsZCBiZSBhbHBoYW51bWVyaWMuXCJcbiAgICB9LFxuICAgIG5vdGJsYW5rOiBcIlRoaXMgdmFsdWUgc2hvdWxkIG5vdCBiZSBibGFuay5cIixcbiAgICByZXF1aXJlZDogXCJUaGlzIHZhbHVlIGlzIHJlcXVpcmVkLlwiLFxuICAgIHBhdHRlcm46IFwiVGhpcyB2YWx1ZSBzZWVtcyB0byBiZSBpbnZhbGlkLlwiLFxuICAgIG1pbjogXCJUaGlzIHZhbHVlIHNob3VsZCBiZSBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gJXMuXCIsXG4gICAgbWF4OiBcIlRoaXMgdmFsdWUgc2hvdWxkIGJlIGxvd2VyIHRoYW4gb3IgZXF1YWwgdG8gJXMuXCIsXG4gICAgcmFuZ2U6IFwiVGhpcyB2YWx1ZSBzaG91bGQgYmUgYmV0d2VlbiAlcyBhbmQgJXMuXCIsXG4gICAgbWlubGVuZ3RoOiBcIlRoaXMgdmFsdWUgaXMgdG9vIHNob3J0LiBJdCBzaG91bGQgaGF2ZSAlcyBjaGFyYWN0ZXJzIG9yIG1vcmUuXCIsXG4gICAgbWF4bGVuZ3RoOiBcIlRoaXMgdmFsdWUgaXMgdG9vIGxvbmcuIEl0IHNob3VsZCBoYXZlICVzIGNoYXJhY3RlcnMgb3IgZmV3ZXIuXCIsXG4gICAgbGVuZ3RoOiBcIlRoaXMgdmFsdWUgbGVuZ3RoIGlzIGludmFsaWQuIEl0IHNob3VsZCBiZSBiZXR3ZWVuICVzIGFuZCAlcyBjaGFyYWN0ZXJzIGxvbmcuXCIsXG4gICAgbWluY2hlY2s6IFwiWW91IG11c3Qgc2VsZWN0IGF0IGxlYXN0ICVzIGNob2ljZXMuXCIsXG4gICAgbWF4Y2hlY2s6IFwiWW91IG11c3Qgc2VsZWN0ICVzIGNob2ljZXMgb3IgZmV3ZXIuXCIsXG4gICAgY2hlY2s6IFwiWW91IG11c3Qgc2VsZWN0IGJldHdlZW4gJXMgYW5kICVzIGNob2ljZXMuXCIsXG4gICAgZXF1YWx0bzogXCJUaGlzIHZhbHVlIHNob3VsZCBiZSB0aGUgc2FtZS5cIlxuICB9KTtcblxuICBQYXJzbGV5LnNldExvY2FsZSgnZW4nKTtcblxuICAvKipcbiAgICogaW5wdXRldmVudCAtIEFsbGV2aWF0ZSBicm93c2VyIGJ1Z3MgZm9yIGlucHV0IGV2ZW50c1xuICAgKiBodHRwczovL2dpdGh1Yi5jb20vbWFyY2FuZHJlL2lucHV0ZXZlbnRcbiAgICogQHZlcnNpb24gdjAuMC4zIC0gKGJ1aWx0IFRodSwgQXByIDE0dGggMjAxNiwgNTo1OCBwbSlcbiAgICogQGF1dGhvciBNYXJjLUFuZHJlIExhZm9ydHVuZSA8Z2l0aHViQG1hcmMtYW5kcmUuY2E+XG4gICAqIEBsaWNlbnNlIE1JVFxuICAgKi9cblxuICBmdW5jdGlvbiBJbnB1dEV2ZW50KCkge1xuICAgIHZhciBfdGhpczE0ID0gdGhpcztcblxuICAgIHZhciBnbG9iYWxzID0gd2luZG93IHx8IGdsb2JhbDtcblxuICAgIC8vIFNsaWdodGx5IG9kZCB3YXkgY29uc3RydWN0IG91ciBvYmplY3QuIFRoaXMgd2F5IG1ldGhvZHMgYXJlIGZvcmNlIGJvdW5kLlxuICAgIC8vIFVzZWQgdG8gdGVzdCBmb3IgZHVwbGljYXRlIGxpYnJhcnkuXG4gICAgX2V4dGVuZHModGhpcywge1xuXG4gICAgICAvLyBGb3IgYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCBpc1RydXN0ZWQsIGFzc3VtZXMgZXZlbnQgaXMgbmF0aXZlLlxuICAgICAgaXNOYXRpdmVFdmVudDogZnVuY3Rpb24gaXNOYXRpdmVFdmVudChldnQpIHtcbiAgICAgICAgcmV0dXJuIGV2dC5vcmlnaW5hbEV2ZW50ICYmIGV2dC5vcmlnaW5hbEV2ZW50LmlzVHJ1c3RlZCAhPT0gZmFsc2U7XG4gICAgICB9LFxuXG4gICAgICBmYWtlSW5wdXRFdmVudDogZnVuY3Rpb24gZmFrZUlucHV0RXZlbnQoZXZ0KSB7XG4gICAgICAgIGlmIChfdGhpczE0LmlzTmF0aXZlRXZlbnQoZXZ0KSkge1xuICAgICAgICAgICQoZXZ0LnRhcmdldCkudHJpZ2dlcignaW5wdXQnKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgbWlzYmVoYXZlczogZnVuY3Rpb24gbWlzYmVoYXZlcyhldnQpIHtcbiAgICAgICAgaWYgKF90aGlzMTQuaXNOYXRpdmVFdmVudChldnQpKSB7XG4gICAgICAgICAgX3RoaXMxNC5iZWhhdmVzT2soZXZ0KTtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vbignY2hhbmdlLmlucHV0ZXZlbnQnLCBldnQuZGF0YS5zZWxlY3RvciwgX3RoaXMxNC5mYWtlSW5wdXRFdmVudCk7XG4gICAgICAgICAgX3RoaXMxNC5mYWtlSW5wdXRFdmVudChldnQpO1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICBiZWhhdmVzT2s6IGZ1bmN0aW9uIGJlaGF2ZXNPayhldnQpIHtcbiAgICAgICAgaWYgKF90aGlzMTQuaXNOYXRpdmVFdmVudChldnQpKSB7XG4gICAgICAgICAgJChkb2N1bWVudCkgLy8gU2ltcGx5IHVuYmluZHMgdGhlIHRlc3RpbmcgaGFuZGxlclxuICAgICAgICAgIC5vZmYoJ2lucHV0LmlucHV0ZXZlbnQnLCBldnQuZGF0YS5zZWxlY3RvciwgX3RoaXMxNC5iZWhhdmVzT2spLm9mZignY2hhbmdlLmlucHV0ZXZlbnQnLCBldnQuZGF0YS5zZWxlY3RvciwgX3RoaXMxNC5taXNiZWhhdmVzKTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLy8gQmluZCB0aGUgdGVzdGluZyBoYW5kbGVyc1xuICAgICAgaW5zdGFsbDogZnVuY3Rpb24gaW5zdGFsbCgpIHtcbiAgICAgICAgaWYgKGdsb2JhbHMuaW5wdXRFdmVudFBhdGNoZWQpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZ2xvYmFscy5pbnB1dEV2ZW50UGF0Y2hlZCA9ICcwLjAuMyc7XG4gICAgICAgIHZhciBfYXJyID0gWydzZWxlY3QnLCAnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJywgJ2lucHV0W3R5cGU9XCJyYWRpb1wiXScsICdpbnB1dFt0eXBlPVwiZmlsZVwiXSddO1xuICAgICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgX2Fyci5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICB2YXIgc2VsZWN0b3IgPSBfYXJyW19pXTtcbiAgICAgICAgICAkKGRvY3VtZW50KS5vbignaW5wdXQuaW5wdXRldmVudCcsIHNlbGVjdG9yLCB7IHNlbGVjdG9yOiBzZWxlY3RvciB9LCBfdGhpczE0LmJlaGF2ZXNPaykub24oJ2NoYW5nZS5pbnB1dGV2ZW50Jywgc2VsZWN0b3IsIHsgc2VsZWN0b3I6IHNlbGVjdG9yIH0sIF90aGlzMTQubWlzYmVoYXZlcyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIHVuaW5zdGFsbDogZnVuY3Rpb24gdW5pbnN0YWxsKCkge1xuICAgICAgICBkZWxldGUgZ2xvYmFscy5pbnB1dEV2ZW50UGF0Y2hlZDtcbiAgICAgICAgJChkb2N1bWVudCkub2ZmKCcuaW5wdXRldmVudCcpO1xuICAgICAgfVxuXG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIGlucHV0ZXZlbnQgPSBuZXcgSW5wdXRFdmVudCgpO1xuXG4gIGlucHV0ZXZlbnQuaW5zdGFsbCgpO1xuXG4gIHZhciBwYXJzbGV5ID0gUGFyc2xleTtcblxuICByZXR1cm4gcGFyc2xleTtcbn0pO1xuXG5cbihmdW5jdGlvbih3aW5kb3csIGZhY3RvcnkpIHtcbiAgdmFyIGxhenlTaXplcyA9IGZhY3Rvcnkod2luZG93LCB3aW5kb3cuZG9jdW1lbnQpO1xuICB3aW5kb3cubGF6eVNpemVzID0gbGF6eVNpemVzO1xuICBpZih0eXBlb2YgbW9kdWxlID09ICdvYmplY3QnICYmIG1vZHVsZS5leHBvcnRzKXtcbiAgICBtb2R1bGUuZXhwb3J0cyA9IGxhenlTaXplcztcbiAgfVxufSh3aW5kb3csIGZ1bmN0aW9uIGwod2luZG93LCBkb2N1bWVudCkge1xuICAndXNlIHN0cmljdCc7XG4gIC8qanNoaW50IGVxbnVsbDp0cnVlICovXG4gIGlmKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKXtyZXR1cm47fVxuXG4gIHZhciBsYXp5c2l6ZXMsIGxhenlTaXplc0NvbmZpZztcblxuICB2YXIgZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuICB2YXIgRGF0ZSA9IHdpbmRvdy5EYXRlO1xuXG4gIHZhciBzdXBwb3J0UGljdHVyZSA9IHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQ7XG5cbiAgdmFyIF9hZGRFdmVudExpc3RlbmVyID0gJ2FkZEV2ZW50TGlzdGVuZXInO1xuXG4gIHZhciBfZ2V0QXR0cmlidXRlID0gJ2dldEF0dHJpYnV0ZSc7XG5cbiAgdmFyIGFkZEV2ZW50TGlzdGVuZXIgPSB3aW5kb3dbX2FkZEV2ZW50TGlzdGVuZXJdO1xuXG4gIHZhciBzZXRUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQ7XG5cbiAgdmFyIHJlcXVlc3RBbmltYXRpb25GcmFtZSA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgc2V0VGltZW91dDtcblxuICB2YXIgcmVxdWVzdElkbGVDYWxsYmFjayA9IHdpbmRvdy5yZXF1ZXN0SWRsZUNhbGxiYWNrO1xuXG4gIHZhciByZWdQaWN0dXJlID0gL15waWN0dXJlJC9pO1xuXG4gIHZhciBsb2FkRXZlbnRzID0gWydsb2FkJywgJ2Vycm9yJywgJ2xhenlpbmNsdWRlZCcsICdfbGF6eWxvYWRlZCddO1xuXG4gIHZhciByZWdDbGFzc0NhY2hlID0ge307XG5cbiAgdmFyIGZvckVhY2ggPSBBcnJheS5wcm90b3R5cGUuZm9yRWFjaDtcblxuICB2YXIgaGFzQ2xhc3MgPSBmdW5jdGlvbihlbGUsIGNscykge1xuICAgIGlmKCFyZWdDbGFzc0NhY2hlW2Nsc10pe1xuICAgICAgcmVnQ2xhc3NDYWNoZVtjbHNdID0gbmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpO1xuICAgIH1cbiAgICByZXR1cm4gcmVnQ2xhc3NDYWNoZVtjbHNdLnRlc3QoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKSAmJiByZWdDbGFzc0NhY2hlW2Nsc107XG4gIH07XG5cbiAgdmFyIGFkZENsYXNzID0gZnVuY3Rpb24oZWxlLCBjbHMpIHtcbiAgICBpZiAoIWhhc0NsYXNzKGVsZSwgY2xzKSl7XG4gICAgICBlbGUuc2V0QXR0cmlidXRlKCdjbGFzcycsIChlbGVbX2dldEF0dHJpYnV0ZV0oJ2NsYXNzJykgfHwgJycpLnRyaW0oKSArICcgJyArIGNscyk7XG4gICAgfVxuICB9O1xuXG4gIHZhciByZW1vdmVDbGFzcyA9IGZ1bmN0aW9uKGVsZSwgY2xzKSB7XG4gICAgdmFyIHJlZztcbiAgICBpZiAoKHJlZyA9IGhhc0NsYXNzKGVsZSxjbHMpKSkge1xuICAgICAgZWxlLnNldEF0dHJpYnV0ZSgnY2xhc3MnLCAoZWxlW19nZXRBdHRyaWJ1dGVdKCdjbGFzcycpIHx8ICcnKS5yZXBsYWNlKHJlZywgJyAnKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBhZGRSZW1vdmVMb2FkRXZlbnRzID0gZnVuY3Rpb24oZG9tLCBmbiwgYWRkKXtcbiAgICB2YXIgYWN0aW9uID0gYWRkID8gX2FkZEV2ZW50TGlzdGVuZXIgOiAncmVtb3ZlRXZlbnRMaXN0ZW5lcic7XG4gICAgaWYoYWRkKXtcbiAgICAgIGFkZFJlbW92ZUxvYWRFdmVudHMoZG9tLCBmbik7XG4gICAgfVxuICAgIGxvYWRFdmVudHMuZm9yRWFjaChmdW5jdGlvbihldnQpe1xuICAgICAgZG9tW2FjdGlvbl0oZXZ0LCBmbik7XG4gICAgfSk7XG4gIH07XG5cbiAgdmFyIHRyaWdnZXJFdmVudCA9IGZ1bmN0aW9uKGVsZW0sIG5hbWUsIGRldGFpbCwgbm9CdWJibGVzLCBub0NhbmNlbGFibGUpe1xuICAgIHZhciBldmVudCA9IGRvY3VtZW50LmNyZWF0ZUV2ZW50KCdFdmVudCcpO1xuXG4gICAgaWYoIWRldGFpbCl7XG4gICAgICBkZXRhaWwgPSB7fTtcbiAgICB9XG5cbiAgICBkZXRhaWwuaW5zdGFuY2UgPSBsYXp5c2l6ZXM7XG5cbiAgICBldmVudC5pbml0RXZlbnQobmFtZSwgIW5vQnViYmxlcywgIW5vQ2FuY2VsYWJsZSk7XG5cbiAgICBldmVudC5kZXRhaWwgPSBkZXRhaWw7XG5cbiAgICBlbGVtLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgIHJldHVybiBldmVudDtcbiAgfTtcblxuICB2YXIgdXBkYXRlUG9seWZpbGwgPSBmdW5jdGlvbiAoZWwsIGZ1bGwpe1xuICAgIHZhciBwb2x5ZmlsbDtcbiAgICBpZiggIXN1cHBvcnRQaWN0dXJlICYmICggcG9seWZpbGwgPSAod2luZG93LnBpY3R1cmVmaWxsIHx8IGxhenlTaXplc0NvbmZpZy5wZikgKSApe1xuICAgICAgaWYoZnVsbCAmJiBmdWxsLnNyYyAmJiAhZWxbX2dldEF0dHJpYnV0ZV0oJ3NyY3NldCcpKXtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBmdWxsLnNyYyk7XG4gICAgICB9XG4gICAgICBwb2x5ZmlsbCh7cmVldmFsdWF0ZTogdHJ1ZSwgZWxlbWVudHM6IFtlbF19KTtcbiAgICB9IGVsc2UgaWYoZnVsbCAmJiBmdWxsLnNyYyl7XG4gICAgICBlbC5zcmMgPSBmdWxsLnNyYztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGdldENTUyA9IGZ1bmN0aW9uIChlbGVtLCBzdHlsZSl7XG4gICAgcmV0dXJuIChnZXRDb21wdXRlZFN0eWxlKGVsZW0sIG51bGwpIHx8IHt9KVtzdHlsZV07XG4gIH07XG5cbiAgdmFyIGdldFdpZHRoID0gZnVuY3Rpb24oZWxlbSwgcGFyZW50LCB3aWR0aCl7XG4gICAgd2lkdGggPSB3aWR0aCB8fCBlbGVtLm9mZnNldFdpZHRoO1xuXG4gICAgd2hpbGUod2lkdGggPCBsYXp5U2l6ZXNDb25maWcubWluU2l6ZSAmJiBwYXJlbnQgJiYgIWVsZW0uX2xhenlzaXplc1dpZHRoKXtcbiAgICAgIHdpZHRoID0gIHBhcmVudC5vZmZzZXRXaWR0aDtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnROb2RlO1xuICAgIH1cblxuICAgIHJldHVybiB3aWR0aDtcbiAgfTtcblxuICB2YXIgckFGID0gKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHJ1bm5pbmcsIHdhaXRpbmc7XG4gICAgdmFyIGZpcnN0Rm5zID0gW107XG4gICAgdmFyIHNlY29uZEZucyA9IFtdO1xuICAgIHZhciBmbnMgPSBmaXJzdEZucztcblxuICAgIHZhciBydW4gPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIHJ1bkZucyA9IGZucztcblxuICAgICAgZm5zID0gZmlyc3RGbnMubGVuZ3RoID8gc2Vjb25kRm5zIDogZmlyc3RGbnM7XG5cbiAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgd2FpdGluZyA9IGZhbHNlO1xuXG4gICAgICB3aGlsZShydW5GbnMubGVuZ3RoKXtcbiAgICAgICAgcnVuRm5zLnNoaWZ0KCkoKTtcbiAgICAgIH1cblxuICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgIH07XG5cbiAgICB2YXIgcmFmQmF0Y2ggPSBmdW5jdGlvbihmbiwgcXVldWUpe1xuICAgICAgaWYocnVubmluZyAmJiAhcXVldWUpe1xuICAgICAgICBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZm5zLnB1c2goZm4pO1xuXG4gICAgICAgIGlmKCF3YWl0aW5nKXtcbiAgICAgICAgICB3YWl0aW5nID0gdHJ1ZTtcbiAgICAgICAgICAoZG9jdW1lbnQuaGlkZGVuID8gc2V0VGltZW91dCA6IHJlcXVlc3RBbmltYXRpb25GcmFtZSkocnVuKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICByYWZCYXRjaC5fbHNGbHVzaCA9IHJ1bjtcblxuICAgIHJldHVybiByYWZCYXRjaDtcbiAgfSkoKTtcblxuICB2YXIgckFGSXQgPSBmdW5jdGlvbihmbiwgc2ltcGxlKXtcbiAgICByZXR1cm4gc2ltcGxlID9cbiAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICByQUYoZm4pO1xuICAgICAgfSA6XG4gICAgICBmdW5jdGlvbigpe1xuICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICByQUYoZnVuY3Rpb24oKXtcbiAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgO1xuICB9O1xuXG4gIHZhciB0aHJvdHRsZSA9IGZ1bmN0aW9uKGZuKXtcbiAgICB2YXIgcnVubmluZztcbiAgICB2YXIgbGFzdFRpbWUgPSAwO1xuICAgIHZhciBnRGVsYXkgPSBsYXp5U2l6ZXNDb25maWcudGhyb3R0bGVEZWxheTtcbiAgICB2YXIgcklDVGltZW91dCA9IGxhenlTaXplc0NvbmZpZy5yaWNUaW1lb3V0O1xuICAgIHZhciBydW4gPSBmdW5jdGlvbigpe1xuICAgICAgcnVubmluZyA9IGZhbHNlO1xuICAgICAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xuICAgICAgZm4oKTtcbiAgICB9O1xuICAgIHZhciBpZGxlQ2FsbGJhY2sgPSByZXF1ZXN0SWRsZUNhbGxiYWNrICYmIHJJQ1RpbWVvdXQgPiA0OSA/XG4gICAgICBmdW5jdGlvbigpe1xuICAgICAgICByZXF1ZXN0SWRsZUNhbGxiYWNrKHJ1biwge3RpbWVvdXQ6IHJJQ1RpbWVvdXR9KTtcblxuICAgICAgICBpZihySUNUaW1lb3V0ICE9PSBsYXp5U2l6ZXNDb25maWcucmljVGltZW91dCl7XG4gICAgICAgICAgcklDVGltZW91dCA9IGxhenlTaXplc0NvbmZpZy5yaWNUaW1lb3V0O1xuICAgICAgICB9XG4gICAgICB9IDpcbiAgICAgIHJBRkl0KGZ1bmN0aW9uKCl7XG4gICAgICAgIHNldFRpbWVvdXQocnVuKTtcbiAgICAgIH0sIHRydWUpXG4gICAgO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uKGlzUHJpb3JpdHkpe1xuICAgICAgdmFyIGRlbGF5O1xuXG4gICAgICBpZigoaXNQcmlvcml0eSA9IGlzUHJpb3JpdHkgPT09IHRydWUpKXtcbiAgICAgICAgcklDVGltZW91dCA9IDMzO1xuICAgICAgfVxuXG4gICAgICBpZihydW5uaW5nKXtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBydW5uaW5nID0gIHRydWU7XG5cbiAgICAgIGRlbGF5ID0gZ0RlbGF5IC0gKERhdGUubm93KCkgLSBsYXN0VGltZSk7XG5cbiAgICAgIGlmKGRlbGF5IDwgMCl7XG4gICAgICAgIGRlbGF5ID0gMDtcbiAgICAgIH1cblxuICAgICAgaWYoaXNQcmlvcml0eSB8fCBkZWxheSA8IDkpe1xuICAgICAgICBpZGxlQ2FsbGJhY2soKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldFRpbWVvdXQoaWRsZUNhbGxiYWNrLCBkZWxheSk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAvL2Jhc2VkIG9uIGh0dHA6Ly9tb2Rlcm5qYXZhc2NyaXB0LmJsb2dzcG90LmRlLzIwMTMvMDgvYnVpbGRpbmctYmV0dGVyLWRlYm91bmNlLmh0bWxcbiAgdmFyIGRlYm91bmNlID0gZnVuY3Rpb24oZnVuYykge1xuICAgIHZhciB0aW1lb3V0LCB0aW1lc3RhbXA7XG4gICAgdmFyIHdhaXQgPSA5OTtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgICAgIHRpbWVvdXQgPSBudWxsO1xuICAgICAgZnVuYygpO1xuICAgIH07XG4gICAgdmFyIGxhdGVyID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgbGFzdCA9IERhdGUubm93KCkgLSB0aW1lc3RhbXA7XG5cbiAgICAgIGlmIChsYXN0IDwgd2FpdCkge1xuICAgICAgICBzZXRUaW1lb3V0KGxhdGVyLCB3YWl0IC0gbGFzdCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAocmVxdWVzdElkbGVDYWxsYmFjayB8fCBydW4pKHJ1bik7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgIHRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgIGlmICghdGltZW91dCkge1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICAoZnVuY3Rpb24oKXtcbiAgICB2YXIgcHJvcDtcblxuICAgIHZhciBsYXp5U2l6ZXNEZWZhdWx0cyA9IHtcbiAgICAgIGxhenlDbGFzczogJ2xhenlsb2FkJyxcbiAgICAgIGxvYWRlZENsYXNzOiAnbGF6eWxvYWRlZCcsXG4gICAgICBsb2FkaW5nQ2xhc3M6ICdsYXp5bG9hZGluZycsXG4gICAgICBwcmVsb2FkQ2xhc3M6ICdsYXp5cHJlbG9hZCcsXG4gICAgICBlcnJvckNsYXNzOiAnbGF6eWVycm9yJyxcbiAgICAgIC8vc3RyaWN0Q2xhc3M6ICdsYXp5c3RyaWN0JyxcbiAgICAgIGF1dG9zaXplc0NsYXNzOiAnbGF6eWF1dG9zaXplcycsXG4gICAgICBzcmNBdHRyOiAnZGF0YS1zcmMnLFxuICAgICAgc3Jjc2V0QXR0cjogJ2RhdGEtc3Jjc2V0JyxcbiAgICAgIHNpemVzQXR0cjogJ2RhdGEtc2l6ZXMnLFxuICAgICAgLy9wcmVsb2FkQWZ0ZXJMb2FkOiBmYWxzZSxcbiAgICAgIG1pblNpemU6IDQwLFxuICAgICAgY3VzdG9tTWVkaWE6IHt9LFxuICAgICAgaW5pdDogdHJ1ZSxcbiAgICAgIGV4cEZhY3RvcjogMS41LFxuICAgICAgaEZhYzogMC44LFxuICAgICAgbG9hZE1vZGU6IDIsXG4gICAgICBsb2FkSGlkZGVuOiB0cnVlLFxuICAgICAgcmljVGltZW91dDogMCxcbiAgICAgIHRocm90dGxlRGVsYXk6IDEyNSxcbiAgICB9O1xuXG4gICAgbGF6eVNpemVzQ29uZmlnID0gd2luZG93LmxhenlTaXplc0NvbmZpZyB8fCB3aW5kb3cubGF6eXNpemVzQ29uZmlnIHx8IHt9O1xuXG4gICAgZm9yKHByb3AgaW4gbGF6eVNpemVzRGVmYXVsdHMpe1xuICAgICAgaWYoIShwcm9wIGluIGxhenlTaXplc0NvbmZpZykpe1xuICAgICAgICBsYXp5U2l6ZXNDb25maWdbcHJvcF0gPSBsYXp5U2l6ZXNEZWZhdWx0c1twcm9wXTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB3aW5kb3cubGF6eVNpemVzQ29uZmlnID0gbGF6eVNpemVzQ29uZmlnO1xuXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgaWYobGF6eVNpemVzQ29uZmlnLmluaXQpe1xuICAgICAgICBpbml0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgdmFyIGxvYWRlciA9IChmdW5jdGlvbigpe1xuICAgIHZhciBwcmVsb2FkRWxlbXMsIGlzQ29tcGxldGVkLCByZXNldFByZWxvYWRpbmdUaW1lciwgbG9hZE1vZGUsIHN0YXJ0ZWQ7XG5cbiAgICB2YXIgZUx2VywgZWx2SCwgZUx0b3AsIGVMbGVmdCwgZUxyaWdodCwgZUxib3R0b207XG5cbiAgICB2YXIgZGVmYXVsdEV4cGFuZCwgcHJlbG9hZEV4cGFuZCwgaEZhYztcblxuICAgIHZhciByZWdJbWcgPSAvXmltZyQvaTtcbiAgICB2YXIgcmVnSWZyYW1lID0gL15pZnJhbWUkL2k7XG5cbiAgICB2YXIgc3VwcG9ydFNjcm9sbCA9ICgnb25zY3JvbGwnIGluIHdpbmRvdykgJiYgISgvKGdsZXxpbmcpYm90Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKTtcblxuICAgIHZhciBzaHJpbmtFeHBhbmQgPSAwO1xuICAgIHZhciBjdXJyZW50RXhwYW5kID0gMDtcblxuICAgIHZhciBpc0xvYWRpbmcgPSAwO1xuICAgIHZhciBsb3dSdW5zID0gLTE7XG5cbiAgICB2YXIgcmVzZXRQcmVsb2FkaW5nID0gZnVuY3Rpb24oZSl7XG4gICAgICBpc0xvYWRpbmctLTtcbiAgICAgIGlmKGUgJiYgZS50YXJnZXQpe1xuICAgICAgICBhZGRSZW1vdmVMb2FkRXZlbnRzKGUudGFyZ2V0LCByZXNldFByZWxvYWRpbmcpO1xuICAgICAgfVxuXG4gICAgICBpZighZSB8fCBpc0xvYWRpbmcgPCAwIHx8ICFlLnRhcmdldCl7XG4gICAgICAgIGlzTG9hZGluZyA9IDA7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBpc05lc3RlZFZpc2libGUgPSBmdW5jdGlvbihlbGVtLCBlbGVtRXhwYW5kKXtcbiAgICAgIHZhciBvdXRlclJlY3Q7XG4gICAgICB2YXIgcGFyZW50ID0gZWxlbTtcbiAgICAgIHZhciB2aXNpYmxlID0gZ2V0Q1NTKGRvY3VtZW50LmJvZHksICd2aXNpYmlsaXR5JykgPT0gJ2hpZGRlbicgfHwgKGdldENTUyhlbGVtLnBhcmVudE5vZGUsICd2aXNpYmlsaXR5JykgIT0gJ2hpZGRlbicgJiYgZ2V0Q1NTKGVsZW0sICd2aXNpYmlsaXR5JykgIT0gJ2hpZGRlbicpO1xuXG4gICAgICBlTHRvcCAtPSBlbGVtRXhwYW5kO1xuICAgICAgZUxib3R0b20gKz0gZWxlbUV4cGFuZDtcbiAgICAgIGVMbGVmdCAtPSBlbGVtRXhwYW5kO1xuICAgICAgZUxyaWdodCArPSBlbGVtRXhwYW5kO1xuXG4gICAgICB3aGlsZSh2aXNpYmxlICYmIChwYXJlbnQgPSBwYXJlbnQub2Zmc2V0UGFyZW50KSAmJiBwYXJlbnQgIT0gZG9jdW1lbnQuYm9keSAmJiBwYXJlbnQgIT0gZG9jRWxlbSl7XG4gICAgICAgIHZpc2libGUgPSAoKGdldENTUyhwYXJlbnQsICdvcGFjaXR5JykgfHwgMSkgPiAwKTtcblxuICAgICAgICBpZih2aXNpYmxlICYmIGdldENTUyhwYXJlbnQsICdvdmVyZmxvdycpICE9ICd2aXNpYmxlJyl7XG4gICAgICAgICAgb3V0ZXJSZWN0ID0gcGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgIHZpc2libGUgPSBlTHJpZ2h0ID4gb3V0ZXJSZWN0LmxlZnQgJiZcbiAgICAgICAgICAgIGVMbGVmdCA8IG91dGVyUmVjdC5yaWdodCAmJlxuICAgICAgICAgICAgZUxib3R0b20gPiBvdXRlclJlY3QudG9wIC0gMSAmJlxuICAgICAgICAgICAgZUx0b3AgPCBvdXRlclJlY3QuYm90dG9tICsgMVxuICAgICAgICAgIDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdmlzaWJsZTtcbiAgICB9O1xuXG4gICAgdmFyIGNoZWNrRWxlbWVudHMgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBlTGxlbiwgaSwgcmVjdCwgYXV0b0xvYWRFbGVtLCBsb2FkZWRTb21ldGhpbmcsIGVsZW1FeHBhbmQsIGVsZW1OZWdhdGl2ZUV4cGFuZCwgZWxlbUV4cGFuZFZhbCwgYmVmb3JlRXhwYW5kVmFsO1xuXG4gICAgICB2YXIgbGF6eWxvYWRFbGVtcyA9IGxhenlzaXplcy5lbGVtZW50cztcblxuICAgICAgaWYoKGxvYWRNb2RlID0gbGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlKSAmJiBpc0xvYWRpbmcgPCA4ICYmIChlTGxlbiA9IGxhenlsb2FkRWxlbXMubGVuZ3RoKSl7XG5cbiAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgbG93UnVucysrO1xuXG4gICAgICAgIGlmKHByZWxvYWRFeHBhbmQgPT0gbnVsbCl7XG4gICAgICAgICAgaWYoISgnZXhwYW5kJyBpbiBsYXp5U2l6ZXNDb25maWcpKXtcbiAgICAgICAgICAgIGxhenlTaXplc0NvbmZpZy5leHBhbmQgPSBkb2NFbGVtLmNsaWVudEhlaWdodCA+IDUwMCAmJiBkb2NFbGVtLmNsaWVudFdpZHRoID4gNTAwID8gNTAwIDogMzcwO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGRlZmF1bHRFeHBhbmQgPSBsYXp5U2l6ZXNDb25maWcuZXhwYW5kO1xuICAgICAgICAgIHByZWxvYWRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kICogbGF6eVNpemVzQ29uZmlnLmV4cEZhY3RvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGN1cnJlbnRFeHBhbmQgPCBwcmVsb2FkRXhwYW5kICYmIGlzTG9hZGluZyA8IDEgJiYgbG93UnVucyA+IDIgJiYgbG9hZE1vZGUgPiAyICYmICFkb2N1bWVudC5oaWRkZW4pe1xuICAgICAgICAgIGN1cnJlbnRFeHBhbmQgPSBwcmVsb2FkRXhwYW5kO1xuICAgICAgICAgIGxvd1J1bnMgPSAwO1xuICAgICAgICB9IGVsc2UgaWYobG9hZE1vZGUgPiAxICYmIGxvd1J1bnMgPiAxICYmIGlzTG9hZGluZyA8IDYpe1xuICAgICAgICAgIGN1cnJlbnRFeHBhbmQgPSBkZWZhdWx0RXhwYW5kO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGN1cnJlbnRFeHBhbmQgPSBzaHJpbmtFeHBhbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IoOyBpIDwgZUxsZW47IGkrKyl7XG5cbiAgICAgICAgICBpZighbGF6eWxvYWRFbGVtc1tpXSB8fCBsYXp5bG9hZEVsZW1zW2ldLl9sYXp5UmFjZSl7Y29udGludWU7fVxuXG4gICAgICAgICAgaWYoIXN1cHBvcnRTY3JvbGwpe3VudmVpbEVsZW1lbnQobGF6eWxvYWRFbGVtc1tpXSk7Y29udGludWU7fVxuXG4gICAgICAgICAgaWYoIShlbGVtRXhwYW5kVmFsID0gbGF6eWxvYWRFbGVtc1tpXVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1leHBhbmQnKSkgfHwgIShlbGVtRXhwYW5kID0gZWxlbUV4cGFuZFZhbCAqIDEpKXtcbiAgICAgICAgICAgIGVsZW1FeHBhbmQgPSBjdXJyZW50RXhwYW5kO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmKGJlZm9yZUV4cGFuZFZhbCAhPT0gZWxlbUV4cGFuZCl7XG4gICAgICAgICAgICBlTHZXID0gaW5uZXJXaWR0aCArIChlbGVtRXhwYW5kICogaEZhYyk7XG4gICAgICAgICAgICBlbHZIID0gaW5uZXJIZWlnaHQgKyBlbGVtRXhwYW5kO1xuICAgICAgICAgICAgZWxlbU5lZ2F0aXZlRXhwYW5kID0gZWxlbUV4cGFuZCAqIC0xO1xuICAgICAgICAgICAgYmVmb3JlRXhwYW5kVmFsID0gZWxlbUV4cGFuZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZWN0ID0gbGF6eWxvYWRFbGVtc1tpXS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgICAgIGlmICgoZUxib3R0b20gPSByZWN0LmJvdHRvbSkgPj0gZWxlbU5lZ2F0aXZlRXhwYW5kICYmXG4gICAgICAgICAgICAoZUx0b3AgPSByZWN0LnRvcCkgPD0gZWx2SCAmJlxuICAgICAgICAgICAgKGVMcmlnaHQgPSByZWN0LnJpZ2h0KSA+PSBlbGVtTmVnYXRpdmVFeHBhbmQgKiBoRmFjICYmXG4gICAgICAgICAgICAoZUxsZWZ0ID0gcmVjdC5sZWZ0KSA8PSBlTHZXICYmXG4gICAgICAgICAgICAoZUxib3R0b20gfHwgZUxyaWdodCB8fCBlTGxlZnQgfHwgZUx0b3ApICYmXG4gICAgICAgICAgICAobGF6eVNpemVzQ29uZmlnLmxvYWRIaWRkZW4gfHwgZ2V0Q1NTKGxhenlsb2FkRWxlbXNbaV0sICd2aXNpYmlsaXR5JykgIT0gJ2hpZGRlbicpICYmXG4gICAgICAgICAgICAoKGlzQ29tcGxldGVkICYmIGlzTG9hZGluZyA8IDMgJiYgIWVsZW1FeHBhbmRWYWwgJiYgKGxvYWRNb2RlIDwgMyB8fCBsb3dSdW5zIDwgNCkpIHx8IGlzTmVzdGVkVmlzaWJsZShsYXp5bG9hZEVsZW1zW2ldLCBlbGVtRXhwYW5kKSkpe1xuICAgICAgICAgICAgdW52ZWlsRWxlbWVudChsYXp5bG9hZEVsZW1zW2ldKTtcbiAgICAgICAgICAgIGxvYWRlZFNvbWV0aGluZyA9IHRydWU7XG4gICAgICAgICAgICBpZihpc0xvYWRpbmcgPiA5KXticmVhazt9XG4gICAgICAgICAgfSBlbHNlIGlmKCFsb2FkZWRTb21ldGhpbmcgJiYgaXNDb21wbGV0ZWQgJiYgIWF1dG9Mb2FkRWxlbSAmJlxuICAgICAgICAgICAgaXNMb2FkaW5nIDwgNCAmJiBsb3dSdW5zIDwgNCAmJiBsb2FkTW9kZSA+IDIgJiZcbiAgICAgICAgICAgIChwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eVNpemVzQ29uZmlnLnByZWxvYWRBZnRlckxvYWQpICYmXG4gICAgICAgICAgICAocHJlbG9hZEVsZW1zWzBdIHx8ICghZWxlbUV4cGFuZFZhbCAmJiAoKGVMYm90dG9tIHx8IGVMcmlnaHQgfHwgZUxsZWZ0IHx8IGVMdG9wKSB8fCBsYXp5bG9hZEVsZW1zW2ldW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zaXplc0F0dHIpICE9ICdhdXRvJykpKSl7XG4gICAgICAgICAgICBhdXRvTG9hZEVsZW0gPSBwcmVsb2FkRWxlbXNbMF0gfHwgbGF6eWxvYWRFbGVtc1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZihhdXRvTG9hZEVsZW0gJiYgIWxvYWRlZFNvbWV0aGluZyl7XG4gICAgICAgICAgdW52ZWlsRWxlbWVudChhdXRvTG9hZEVsZW0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciB0aHJvdHRsZWRDaGVja0VsZW1lbnRzID0gdGhyb3R0bGUoY2hlY2tFbGVtZW50cyk7XG5cbiAgICB2YXIgc3dpdGNoTG9hZGluZ0NsYXNzID0gZnVuY3Rpb24oZSl7XG4gICAgICBhZGRDbGFzcyhlLnRhcmdldCwgbGF6eVNpemVzQ29uZmlnLmxvYWRlZENsYXNzKTtcbiAgICAgIHJlbW92ZUNsYXNzKGUudGFyZ2V0LCBsYXp5U2l6ZXNDb25maWcubG9hZGluZ0NsYXNzKTtcbiAgICAgIGFkZFJlbW92ZUxvYWRFdmVudHMoZS50YXJnZXQsIHJhZlN3aXRjaExvYWRpbmdDbGFzcyk7XG4gICAgICB0cmlnZ2VyRXZlbnQoZS50YXJnZXQsICdsYXp5bG9hZGVkJyk7XG4gICAgfTtcbiAgICB2YXIgcmFmZWRTd2l0Y2hMb2FkaW5nQ2xhc3MgPSByQUZJdChzd2l0Y2hMb2FkaW5nQ2xhc3MpO1xuICAgIHZhciByYWZTd2l0Y2hMb2FkaW5nQ2xhc3MgPSBmdW5jdGlvbihlKXtcbiAgICAgIHJhZmVkU3dpdGNoTG9hZGluZ0NsYXNzKHt0YXJnZXQ6IGUudGFyZ2V0fSk7XG4gICAgfTtcblxuICAgIHZhciBjaGFuZ2VJZnJhbWVTcmMgPSBmdW5jdGlvbihlbGVtLCBzcmMpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgZWxlbS5jb250ZW50V2luZG93LmxvY2F0aW9uLnJlcGxhY2Uoc3JjKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIGVsZW0uc3JjID0gc3JjO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgaGFuZGxlU291cmNlcyA9IGZ1bmN0aW9uKHNvdXJjZSl7XG4gICAgICB2YXIgY3VzdG9tTWVkaWE7XG5cbiAgICAgIHZhciBzb3VyY2VTcmNzZXQgPSBzb3VyY2VbX2dldEF0dHJpYnV0ZV0obGF6eVNpemVzQ29uZmlnLnNyY3NldEF0dHIpO1xuXG4gICAgICBpZiggKGN1c3RvbU1lZGlhID0gbGF6eVNpemVzQ29uZmlnLmN1c3RvbU1lZGlhW3NvdXJjZVtfZ2V0QXR0cmlidXRlXSgnZGF0YS1tZWRpYScpIHx8IHNvdXJjZVtfZ2V0QXR0cmlidXRlXSgnbWVkaWEnKV0pICl7XG4gICAgICAgIHNvdXJjZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgY3VzdG9tTWVkaWEpO1xuICAgICAgfVxuXG4gICAgICBpZihzb3VyY2VTcmNzZXQpe1xuICAgICAgICBzb3VyY2Uuc2V0QXR0cmlidXRlKCdzcmNzZXQnLCBzb3VyY2VTcmNzZXQpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB2YXIgbGF6eVVudmVpbCA9IHJBRkl0KGZ1bmN0aW9uIChlbGVtLCBkZXRhaWwsIGlzQXV0bywgc2l6ZXMsIGlzSW1nKXtcbiAgICAgIHZhciBzcmMsIHNyY3NldCwgcGFyZW50LCBpc1BpY3R1cmUsIGV2ZW50LCBmaXJlc0xvYWQ7XG5cbiAgICAgIGlmKCEoZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmV1bnZlaWwnLCBkZXRhaWwpKS5kZWZhdWx0UHJldmVudGVkKXtcblxuICAgICAgICBpZihzaXplcyl7XG4gICAgICAgICAgaWYoaXNBdXRvKXtcbiAgICAgICAgICAgIGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5hdXRvc2l6ZXNDbGFzcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGVsZW0uc2V0QXR0cmlidXRlKCdzaXplcycsIHNpemVzKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBzcmNzZXQgPSBlbGVtW19nZXRBdHRyaWJ1dGVdKGxhenlTaXplc0NvbmZpZy5zcmNzZXRBdHRyKTtcbiAgICAgICAgc3JjID0gZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDb25maWcuc3JjQXR0cik7XG5cbiAgICAgICAgaWYoaXNJbWcpIHtcbiAgICAgICAgICBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG4gICAgICAgICAgaXNQaWN0dXJlID0gcGFyZW50ICYmIHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgZmlyZXNMb2FkID0gZGV0YWlsLmZpcmVzTG9hZCB8fCAoKCdzcmMnIGluIGVsZW0pICYmIChzcmNzZXQgfHwgc3JjIHx8IGlzUGljdHVyZSkpO1xuXG4gICAgICAgIGV2ZW50ID0ge3RhcmdldDogZWxlbX07XG5cbiAgICAgICAgaWYoZmlyZXNMb2FkKXtcbiAgICAgICAgICBhZGRSZW1vdmVMb2FkRXZlbnRzKGVsZW0sIHJlc2V0UHJlbG9hZGluZywgdHJ1ZSk7XG4gICAgICAgICAgY2xlYXJUaW1lb3V0KHJlc2V0UHJlbG9hZGluZ1RpbWVyKTtcbiAgICAgICAgICByZXNldFByZWxvYWRpbmdUaW1lciA9IHNldFRpbWVvdXQocmVzZXRQcmVsb2FkaW5nLCAyNTAwKTtcblxuICAgICAgICAgIGFkZENsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sb2FkaW5nQ2xhc3MpO1xuICAgICAgICAgIGFkZFJlbW92ZUxvYWRFdmVudHMoZWxlbSwgcmFmU3dpdGNoTG9hZGluZ0NsYXNzLCB0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmKGlzUGljdHVyZSl7XG4gICAgICAgICAgZm9yRWFjaC5jYWxsKHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyksIGhhbmRsZVNvdXJjZXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYoc3Jjc2V0KXtcbiAgICAgICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnc3Jjc2V0Jywgc3Jjc2V0KTtcbiAgICAgICAgfSBlbHNlIGlmKHNyYyAmJiAhaXNQaWN0dXJlKXtcbiAgICAgICAgICBpZihyZWdJZnJhbWUudGVzdChlbGVtLm5vZGVOYW1lKSl7XG4gICAgICAgICAgICBjaGFuZ2VJZnJhbWVTcmMoZWxlbSwgc3JjKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZWxlbS5zcmMgPSBzcmM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYoaXNJbWcgJiYgKHNyY3NldCB8fCBpc1BpY3R1cmUpKXtcbiAgICAgICAgICB1cGRhdGVQb2x5ZmlsbChlbGVtLCB7c3JjOiBzcmN9KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZihlbGVtLl9sYXp5UmFjZSl7XG4gICAgICAgIGRlbGV0ZSBlbGVtLl9sYXp5UmFjZTtcbiAgICAgIH1cbiAgICAgIHJlbW92ZUNsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpO1xuXG4gICAgICByQUYoZnVuY3Rpb24oKXtcbiAgICAgICAgaWYoICFmaXJlc0xvYWQgfHwgKGVsZW0uY29tcGxldGUgJiYgZWxlbS5uYXR1cmFsV2lkdGggPiAxKSl7XG4gICAgICAgICAgaWYoZmlyZXNMb2FkKXtcbiAgICAgICAgICAgIHJlc2V0UHJlbG9hZGluZyhldmVudCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlzTG9hZGluZy0tO1xuICAgICAgICAgIH1cbiAgICAgICAgICBzd2l0Y2hMb2FkaW5nQ2xhc3MoZXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9LCB0cnVlKTtcbiAgICB9KTtcblxuICAgIHZhciB1bnZlaWxFbGVtZW50ID0gZnVuY3Rpb24gKGVsZW0pe1xuICAgICAgdmFyIGRldGFpbDtcblxuICAgICAgdmFyIGlzSW1nID0gcmVnSW1nLnRlc3QoZWxlbS5ub2RlTmFtZSk7XG5cbiAgICAgIC8vYWxsb3cgdXNpbmcgc2l6ZXM9XCJhdXRvXCIsIGJ1dCBkb24ndCB1c2UuIGl0J3MgaW52YWxpZC4gVXNlIGRhdGEtc2l6ZXM9XCJhdXRvXCIgb3IgYSB2YWxpZCB2YWx1ZSBmb3Igc2l6ZXMgaW5zdGVhZCAoaS5lLjogc2l6ZXM9XCI4MHZ3XCIpXG4gICAgICB2YXIgc2l6ZXMgPSBpc0ltZyAmJiAoZWxlbVtfZ2V0QXR0cmlidXRlXShsYXp5U2l6ZXNDb25maWcuc2l6ZXNBdHRyKSB8fCBlbGVtW19nZXRBdHRyaWJ1dGVdKCdzaXplcycpKTtcbiAgICAgIHZhciBpc0F1dG8gPSBzaXplcyA9PSAnYXV0byc7XG5cbiAgICAgIGlmKCAoaXNBdXRvIHx8ICFpc0NvbXBsZXRlZCkgJiYgaXNJbWcgJiYgKGVsZW1bX2dldEF0dHJpYnV0ZV0oJ3NyYycpIHx8IGVsZW0uc3Jjc2V0KSAmJiAhZWxlbS5jb21wbGV0ZSAmJiAhaGFzQ2xhc3MoZWxlbSwgbGF6eVNpemVzQ29uZmlnLmVycm9yQ2xhc3MpICYmIGhhc0NsYXNzKGVsZW0sIGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpKXtyZXR1cm47fVxuXG4gICAgICBkZXRhaWwgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenl1bnZlaWxyZWFkJykuZGV0YWlsO1xuXG4gICAgICBpZihpc0F1dG8pe1xuICAgICAgICAgYXV0b1NpemVyLnVwZGF0ZUVsZW0oZWxlbSwgdHJ1ZSwgZWxlbS5vZmZzZXRXaWR0aCk7XG4gICAgICB9XG5cbiAgICAgIGVsZW0uX2xhenlSYWNlID0gdHJ1ZTtcbiAgICAgIGlzTG9hZGluZysrO1xuXG4gICAgICBsYXp5VW52ZWlsKGVsZW0sIGRldGFpbCwgaXNBdXRvLCBzaXplcywgaXNJbWcpO1xuICAgIH07XG5cbiAgICB2YXIgb25sb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgIGlmKGlzQ29tcGxldGVkKXtyZXR1cm47fVxuICAgICAgaWYoRGF0ZS5ub3coKSAtIHN0YXJ0ZWQgPCA5OTkpe1xuICAgICAgICBzZXRUaW1lb3V0KG9ubG9hZCwgOTk5KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdmFyIGFmdGVyU2Nyb2xsID0gZGVib3VuY2UoZnVuY3Rpb24oKXtcbiAgICAgICAgbGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID0gMztcbiAgICAgICAgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuICAgICAgfSk7XG5cbiAgICAgIGlzQ29tcGxldGVkID0gdHJ1ZTtcblxuICAgICAgbGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID0gMztcblxuICAgICAgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuXG4gICAgICBhZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbigpe1xuICAgICAgICBpZihsYXp5U2l6ZXNDb25maWcubG9hZE1vZGUgPT0gMyl7XG4gICAgICAgICAgbGF6eVNpemVzQ29uZmlnLmxvYWRNb2RlID0gMjtcbiAgICAgICAgfVxuICAgICAgICBhZnRlclNjcm9sbCgpO1xuICAgICAgfSwgdHJ1ZSk7XG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICBfOiBmdW5jdGlvbigpe1xuICAgICAgICBzdGFydGVkID0gRGF0ZS5ub3coKTtcblxuICAgICAgICBsYXp5c2l6ZXMuZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MpO1xuICAgICAgICBwcmVsb2FkRWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKGxhenlTaXplc0NvbmZpZy5sYXp5Q2xhc3MgKyAnICcgKyBsYXp5U2l6ZXNDb25maWcucHJlbG9hZENsYXNzKTtcbiAgICAgICAgaEZhYyA9IGxhenlTaXplc0NvbmZpZy5oRmFjO1xuXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG4gICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG4gICAgICAgIGlmKHdpbmRvdy5NdXRhdGlvbk9ic2VydmVyKXtcbiAgICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlciggdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyApLm9ic2VydmUoIGRvY0VsZW0sIHtjaGlsZExpc3Q6IHRydWUsIHN1YnRyZWU6IHRydWUsIGF0dHJpYnV0ZXM6IHRydWV9ICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZG9jRWxlbVtfYWRkRXZlbnRMaXN0ZW5lcl0oJ0RPTU5vZGVJbnNlcnRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuICAgICAgICAgIGRvY0VsZW1bX2FkZEV2ZW50TGlzdGVuZXJdKCdET01BdHRyTW9kaWZpZWQnLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcbiAgICAgICAgICBzZXRJbnRlcnZhbCh0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCA5OTkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIHRocm90dGxlZENoZWNrRWxlbWVudHMsIHRydWUpO1xuXG4gICAgICAgIC8vLCAnZnVsbHNjcmVlbmNoYW5nZSdcbiAgICAgICAgWydmb2N1cycsICdtb3VzZW92ZXInLCAnY2xpY2snLCAnbG9hZCcsICd0cmFuc2l0aW9uZW5kJywgJ2FuaW1hdGlvbmVuZCcsICd3ZWJraXRBbmltYXRpb25FbmQnXS5mb3JFYWNoKGZ1bmN0aW9uKG5hbWUpe1xuICAgICAgICAgIGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXShuYW1lLCB0aHJvdHRsZWRDaGVja0VsZW1lbnRzLCB0cnVlKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaWYoKC9kJHxeYy8udGVzdChkb2N1bWVudC5yZWFkeVN0YXRlKSkpe1xuICAgICAgICAgIG9ubG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCBvbmxvYWQpO1xuICAgICAgICAgIGRvY3VtZW50W19hZGRFdmVudExpc3RlbmVyXSgnRE9NQ29udGVudExvYWRlZCcsIHRocm90dGxlZENoZWNrRWxlbWVudHMpO1xuICAgICAgICAgIHNldFRpbWVvdXQob25sb2FkLCAyMDAwMCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZihsYXp5c2l6ZXMuZWxlbWVudHMubGVuZ3RoKXtcbiAgICAgICAgICBjaGVja0VsZW1lbnRzKCk7XG4gICAgICAgICAgckFGLl9sc0ZsdXNoKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3R0bGVkQ2hlY2tFbGVtZW50cygpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgY2hlY2tFbGVtczogdGhyb3R0bGVkQ2hlY2tFbGVtZW50cyxcbiAgICAgIHVudmVpbDogdW52ZWlsRWxlbWVudFxuICAgIH07XG4gIH0pKCk7XG5cblxuICB2YXIgYXV0b1NpemVyID0gKGZ1bmN0aW9uKCl7XG4gICAgdmFyIGF1dG9zaXplc0VsZW1zO1xuXG4gICAgdmFyIHNpemVFbGVtZW50ID0gckFGSXQoZnVuY3Rpb24oZWxlbSwgcGFyZW50LCBldmVudCwgd2lkdGgpe1xuICAgICAgdmFyIHNvdXJjZXMsIGksIGxlbjtcbiAgICAgIGVsZW0uX2xhenlzaXplc1dpZHRoID0gd2lkdGg7XG4gICAgICB3aWR0aCArPSAncHgnO1xuXG4gICAgICBlbGVtLnNldEF0dHJpYnV0ZSgnc2l6ZXMnLCB3aWR0aCk7XG5cbiAgICAgIGlmKHJlZ1BpY3R1cmUudGVzdChwYXJlbnQubm9kZU5hbWUgfHwgJycpKXtcbiAgICAgICAgc291cmNlcyA9IHBhcmVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnc291cmNlJyk7XG4gICAgICAgIGZvcihpID0gMCwgbGVuID0gc291cmNlcy5sZW5ndGg7IGkgPCBsZW47IGkrKyl7XG4gICAgICAgICAgc291cmNlc1tpXS5zZXRBdHRyaWJ1dGUoJ3NpemVzJywgd2lkdGgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmKCFldmVudC5kZXRhaWwuZGF0YUF0dHIpe1xuICAgICAgICB1cGRhdGVQb2x5ZmlsbChlbGVtLCBldmVudC5kZXRhaWwpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHZhciBnZXRTaXplRWxlbWVudCA9IGZ1bmN0aW9uIChlbGVtLCBkYXRhQXR0ciwgd2lkdGgpe1xuICAgICAgdmFyIGV2ZW50O1xuICAgICAgdmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblxuICAgICAgaWYocGFyZW50KXtcbiAgICAgICAgd2lkdGggPSBnZXRXaWR0aChlbGVtLCBwYXJlbnQsIHdpZHRoKTtcbiAgICAgICAgZXZlbnQgPSB0cmlnZ2VyRXZlbnQoZWxlbSwgJ2xhenliZWZvcmVzaXplcycsIHt3aWR0aDogd2lkdGgsIGRhdGFBdHRyOiAhIWRhdGFBdHRyfSk7XG5cbiAgICAgICAgaWYoIWV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpe1xuICAgICAgICAgIHdpZHRoID0gZXZlbnQuZGV0YWlsLndpZHRoO1xuXG4gICAgICAgICAgaWYod2lkdGggJiYgd2lkdGggIT09IGVsZW0uX2xhenlzaXplc1dpZHRoKXtcbiAgICAgICAgICAgIHNpemVFbGVtZW50KGVsZW0sIHBhcmVudCwgZXZlbnQsIHdpZHRoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIHVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBmdW5jdGlvbigpe1xuICAgICAgdmFyIGk7XG4gICAgICB2YXIgbGVuID0gYXV0b3NpemVzRWxlbXMubGVuZ3RoO1xuICAgICAgaWYobGVuKXtcbiAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yKDsgaSA8IGxlbjsgaSsrKXtcbiAgICAgICAgICBnZXRTaXplRWxlbWVudChhdXRvc2l6ZXNFbGVtc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIGRlYm91bmNlZFVwZGF0ZUVsZW1lbnRzU2l6ZXMgPSBkZWJvdW5jZSh1cGRhdGVFbGVtZW50c1NpemVzKTtcblxuICAgIHJldHVybiB7XG4gICAgICBfOiBmdW5jdGlvbigpe1xuICAgICAgICBhdXRvc2l6ZXNFbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUobGF6eVNpemVzQ29uZmlnLmF1dG9zaXplc0NsYXNzKTtcbiAgICAgICAgYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyk7XG4gICAgICB9LFxuICAgICAgY2hlY2tFbGVtczogZGVib3VuY2VkVXBkYXRlRWxlbWVudHNTaXplcyxcbiAgICAgIHVwZGF0ZUVsZW06IGdldFNpemVFbGVtZW50XG4gICAgfTtcbiAgfSkoKTtcblxuICB2YXIgaW5pdCA9IGZ1bmN0aW9uKCl7XG4gICAgaWYoIWluaXQuaSl7XG4gICAgICBpbml0LmkgPSB0cnVlO1xuICAgICAgYXV0b1NpemVyLl8oKTtcbiAgICAgIGxvYWRlci5fKCk7XG4gICAgfVxuICB9O1xuXG4gIGxhenlzaXplcyA9IHtcbiAgICBjZmc6IGxhenlTaXplc0NvbmZpZyxcbiAgICBhdXRvU2l6ZXI6IGF1dG9TaXplcixcbiAgICBsb2FkZXI6IGxvYWRlcixcbiAgICBpbml0OiBpbml0LFxuICAgIHVQOiB1cGRhdGVQb2x5ZmlsbCxcbiAgICBhQzogYWRkQ2xhc3MsXG4gICAgckM6IHJlbW92ZUNsYXNzLFxuICAgIGhDOiBoYXNDbGFzcyxcbiAgICBmaXJlOiB0cmlnZ2VyRXZlbnQsXG4gICAgZ1c6IGdldFdpZHRoLFxuICAgIHJBRjogckFGLFxuICB9O1xuXG4gIHJldHVybiBsYXp5c2l6ZXM7XG59XG4pKTtcblxuLy9cbi8vIFBhc3NpdmUgb3B0aW9uIGZvciBldmVudCBsaXN0ZW5lcnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBGZWF0dXJlIGRldGVjdGlvbiBmb3IgYWRkRXZlbnRMaXN0ZW5lcidzICdwYXNzaXZlJyBvcHRpb24uXG4vLyBBbGxvd3MgZm9yIGNvbmRpdGlvbmFsIHNldHRpbmcgb2YgdGhlIHRoaXJkIGFyZ3VtZW50IGluIGFuIGV2ZW50IGxpc3RlbmVyLlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEV4YW1wbGUgdXNhZ2U6XG4vLyBlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCl7Li4ufSwgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25TdXBwb3J0ZWQgPyB7IHBhc3NpdmU6IHRydWUgfSA6IGZhbHNlKTtcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG52YXIgcGFzc2l2ZUV2ZW50TGlzdGVuZXJPcHRpb25TdXBwb3J0ZWQgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIG9wdHMgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sIFwicGFzc2l2ZVwiLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAgIHBhc3NpdmVFdmVudExpc3RlbmVyT3B0aW9uU3VwcG9ydGVkID0gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlT3B0aW9uXCIsIG51bGwsIG9wdHMpO1xuICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInRlc3RQYXNzaXZlT3B0aW9uXCIsIG51bGwsIG9wdHMpO1xufSBjYXRjaChlcnIpIHt9XG5cbi8vXG4vLyBSZW1vdmUgdGhlIHNjcm9sbGluZyBpbmNyZW1lbnQvZGVjcmVtZW50IGJlaGF2aW9yIGZyb20gbnVtYmVyIGlucHV0IGVsZW1lbnRzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIndoZWVsXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gIGlmKGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQudHlwZSA9PT0gXCJudW1iZXJcIil7XG4gICAgZG9jdW1lbnQuYWN0aXZlRWxlbWVudC5ibHVyKCk7XG4gIH1cbn0sIHBhc3NpdmVFdmVudExpc3RlbmVyT3B0aW9uU3VwcG9ydGVkID8geyBwYXNzaXZlOiB0cnVlIH0gOiBmYWxzZSk7XG5cbi8vXG4vLyBFeGNsdWRlIGhpZGRlbiBlbGVtZW50cyBmcm9tIFBhcnNsZXlcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5pZiAodHlwZW9mIFBhcnNsZXkgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBQYXJzbGV5Lm9wdGlvbnMgIT09ICd1bmRlZmluZWQnKSB7XG4gIFBhcnNsZXkub3B0aW9ucy5leGNsdWRlZCA9ICdpbnB1dFt0eXBlPWJ1dHRvbl0sIGlucHV0W3R5cGU9c3VibWl0XSwgaW5wdXRbdHlwZT1yZXNldF0sIGlucHV0W3R5cGU9aGlkZGVuXSwgW2Rpc2FibGVkXSwgOmhpZGRlbic7XG59XG5cbi8vXG4vLyBET00gbG9hZGVkIGJvZHkgY2xhc3Ncbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBXaGVuIHRoZSBwYWdlIGlzIGxvYWRlZCwgYWRkICYgcmVtb3ZlIGNsYXNzZXMgZnJvbSB0aGUgYm9keSBlbGVtZW50XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSC90IHRvIGh0dHBzOi8vd3d3LnNpdGVwb2ludC5jb20vanF1ZXJ5LWRvY3VtZW50LXJlYWR5LXBsYWluLWphdmFzY3JpcHQvXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyIGRvbUxvYWRlZENhbGxiYWNrID0gZnVuY3Rpb24oKXtcbiAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdkb20taGFzLWxvYWRlZCcpO1xuICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5yZW1vdmUoJ2RvbS1ub3QteWV0LWxvYWRlZCcpO1xufTtcblxuaWYgKCBkb2N1bWVudC5yZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgfHwgKGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiICYmICFkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuZG9TY3JvbGwpICkge1xuICBkb21Mb2FkZWRDYWxsYmFjaygpO1xufSBlbHNlIHtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZG9tTG9hZGVkQ2FsbGJhY2spO1xufVxuXG4vL1xuLy8gRGlzcGF0Y2hlci5qc1xuLy8gdjAuNC40XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBDcmVhdGUgYWN0aW9ucyAmIHJlYWN0aW9ucyBpbiBtYXJrdXBcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFRPRE9cbi8vIC0gQ2hhbmdlIGRhdGEtZGlzcGF0Y2hlci1ub3RpZnkgdG8gYWNjZXB0IGFuIGFycmF5IG9mIElEcyB0byBub3RpZnlcbi8vIC0gQWxsb3cgY3VzdG9taXphdGlvbiBvZiAuaXMtZGlzcGF0Y2hlci1ub3RpZmllZCBjbGFzcyBuYW1lIChmb3IgbXVsdGlwbGUgdXNlcyBvZiBkaXNwYXRjaGVyKVxuLy8gLSBTZXBhcmF0ZSB0cmlnZ2VyLCB0YXJnZXQsIGFuZCBub3RpZmllZCBkaXNwYXRjaCBpbnRvIDMgZnVuY3Rpb25zP1xuLy8gLSBBZGQgYSBjYWxsYmFjayB3aGVuIGRpc3BhdGNoIGlzIGNvbXBsZXRlZD9cbi8vIC0gUmV3cml0ZSBpbiBWYW5pbGxhIEpTIChmb3IgZXZlbnQgZGVsZWdhdGlvbiwgc2VlIGh0dHBzOi8vZ29tYWtldGhpbmdzLmNvbS9jaGVja2luZy1ldmVudC10YXJnZXQtc2VsZWN0b3JzLXdpdGgtZXZlbnQtYnViYmxpbmctaW4tdmFuaWxsYS1qYXZhc2NyaXB0Lylcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBjbGlja0Rpc3BhdGNoICh0cmlnZ2VyKSB7XG4gIC8vIEZlZWRiYWNrIHRvIHRoZSB0cmlnZ2VyIGVsZW1lbnRcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgXG4gIC8vIGlmIGFuIGF0dHJpYnV0ZSBkYXRhLWRpc3BhdGNoZXItdHJpZ2dlci1hY3RpdmUtY2xhc3MgX19leGlzdHMgYW5kIGhhcyBhIHZhbHVlX19cbiAgaWYgKCB0cmlnZ2VyLmF0dHIoXCJkYXRhLWRpc3BhdGNoZXItdHJpZ2dlci1hY3RpdmUtY2xhc3NcIikgKSB7XG4gICAgdmFyICRjdXN0b21fdHJpZ2dlcl9jbGFzcyA9IHRyaWdnZXIuZGF0YShcImRpc3BhdGNoZXItdHJpZ2dlci1hY3RpdmUtY2xhc3NcIik7XG4gICAgdHJpZ2dlci50b2dnbGVDbGFzcygkY3VzdG9tX3RyaWdnZXJfY2xhc3MpO1xuICB9XG4gIGVsc2Uge1xuICAgIC8vIFRvZ2dsZSBhY3RpdmUgY2xhc3NcbiAgICB0cmlnZ2VyLnRvZ2dsZUNsYXNzKFwiaXMtYWN0aXZlXCIpO1xuICB9XG5cbiAgLy8gVG9nZ2xlIHNlbGVjdGVkIEFSSUEgYXR0cmlidXRlcyBpZiB0aGV5IGV4aXN0XG4gIGlmICggdHJpZ2dlci5hdHRyKFwiYXJpYS1wcmVzc2VkXCIpICkgIHsgdmFyIGhhc0FyaWFQcmVzc2VkQXR0ciAgPSB0cnVlOyB9XG4gIGlmICggdHJpZ2dlci5hdHRyKFwiYXJpYS1leHBhbmRlZFwiKSApIHsgdmFyIGhhc0FyaWFFeHBhbmRlZEF0dHIgPSB0cnVlOyB9XG5cbiAgaWYgKGhhc0FyaWFQcmVzc2VkQXR0cikge1xuICAgIHRyaWdnZXIuYXR0cihcImFyaWEtcHJlc3NlZFwiLCAgKHRyaWdnZXIuYXR0cihcImFyaWEtcHJlc3NlZFwiKSAgPT0gXCJmYWxzZVwiID8gdHJ1ZSA6IGZhbHNlKSk7XG4gIH1cbiAgaWYgKGhhc0FyaWFFeHBhbmRlZEF0dHIpIHtcbiAgICB0cmlnZ2VyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIsICh0cmlnZ2VyLmF0dHIoXCJhcmlhLWV4cGFuZGVkXCIpID09IFwiZmFsc2VcIiA/IHRydWUgOiBmYWxzZSkpO1xuICB9XG5cblxuICAvLyBOb3RpZmllZCBlbGVtZW50IGRpc3BhdGNoXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLy8gSWYgYW4gZWxlbWVudCBpcyB0byBiZSBub3RpZmllZCAoYSB2YWx1ZSBpcyBnaXZlbiBpbiB0aGUgYXR0cmlidXRlKSxcbiAgLy8gbm90aWZ5IGl0L3RoZW0gd2l0aCB0b2dnbGVkIGNsYXNzIFwiaXMtZGlzcGF0Y2hpbmdcIlxuICBpZiAoIHRyaWdnZXIuYXR0cihcImRhdGEtZGlzcGF0Y2hlci1ub3RpZnlcIikgKSB7XG4gICAgdmFyICRub3RpZnlfY2xhc3MgPSBcIi5cIiArIHRyaWdnZXIuZGF0YShcImRpc3BhdGNoZXItbm90aWZ5XCIpO1xuICAgICQoJG5vdGlmeV9jbGFzcykudG9nZ2xlQ2xhc3MoXCJpcy1kaXNwYXRjaGVyLW5vdGlmaWVkXCIpO1xuICB9XG5cblxuICAvLyBUYXJnZXQgZWxlbWVudCBkaXNwYXRjaFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8vIEdldCB0aGUgdGFyZ2V0ZWQgZWxlbWVudCB2aWEgZGF0YS1hdHRyaWJ1dGVcbiAgdmFyIHRhcmdldCA9IFwiI1wiICsgdHJpZ2dlci5kYXRhKFwiZGlzcGF0Y2hlci10YXJnZXRcIik7XG4gIHRhcmdldCA9ICQodGFyZ2V0KTtcblxuICAvLyBpZiBhbiBhdHRyaWJ1dGUgZGF0YS1kaXNwYXRjaGVyLXRhcmdldC1hY3RpdmUtY2xhc3MgX19leGlzdHMgYW5kIGhhcyBhIHZhbHVlX19cbiAgaWYgKCB0cmlnZ2VyLmF0dHIoXCJkYXRhLWRpc3BhdGNoZXItdGFyZ2V0LWFjdGl2ZS1jbGFzc1wiKSApIHtcbiAgICB2YXIgJGN1c3RvbV90YXJnZXRfY2xhc3MgPSB0cmlnZ2VyLmRhdGEoXCJkaXNwYXRjaGVyLXRhcmdldC1hY3RpdmUtY2xhc3NcIik7XG4gICAgdGFyZ2V0LnRvZ2dsZUNsYXNzKCRjdXN0b21fdGFyZ2V0X2NsYXNzKTtcbiAgfVxuICBlbHNlIHtcbiAgICB0YXJnZXQudG9nZ2xlQ2xhc3MoXCJpcy1hY3RpdmVcIik7XG4gIH1cblxuICAvLyBBUklBIGF0dHJpYnV0ZXMgdG8gZmxpcFxuICB0YXJnZXQuYXR0cihcImFyaWEtaGlkZGVuXCIsICh0YXJnZXQuYXR0cihcImFyaWEtaGlkZGVuXCIpID09IFwiZmFsc2VcIiA/IHRydWUgOiBmYWxzZSkpO1xuXG5cbiAgLy8gXCJPbmUgYXQgYSB0aW1lLCBzaWJsaW5nc1wiIGRpc3BhdGNoXG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIEZvciB3aGVuIG9ubHkgb25lIGNoaWxkIG1heSBiZSBhY3RpdmUgYXQgYSB0aW1lLiAoTGlrZSBhbiBhY2NvcmRpb24hKVxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICBpZiAoIHRyaWdnZXIuYXR0cihcImRhdGEtZGlzcGF0Y2hlci1wYXJlbnRcIikgKSB7XG4gICAgLy8gR2V0IHRoZSB0YXJnZXRlZCBlbGVtZW50IHZpYSBkYXRhLWF0dHJpYnV0ZVxuICAgIHZhciAkcGFyZW50ID0gXCIjXCIgKyB0cmlnZ2VyLmRhdGEoXCJkaXNwYXRjaGVyLXBhcmVudFwiKTtcblxuICAgIC8vIFRoZXNlIG1heSBfc2VlbV8gcmV2ZXJzZWQsIGJ1dCBub3RlIHRoYXQgYXQgdGhlIHRvcCBvZiB0aGlzIGZ1bmN0aW9uLCB0aGUgaXMtYWN0aXZlIGNsYXNzIGlzIHRvZ2dsZWQuIFNvIGF0IHRoaXMgcG9pbnQsIHdlJ3JlIG5vdCBjaGVja2luZyBcImlmIHRoZSB0cmlnZ2VyIGhhZCBpcy1hY3RpdmUgYmVmb3JlIGNsaWNrXCIsIGJ1dCBcImlmIHRoZSB0cmlnZ2VyIGhhcyBpcy1hY3RpdmUgbm93IHRoYXQgaXQgaGFzIGJlZW4gY2xpY2tlZFwiLlxuICAgIGlmICggdHJpZ2dlci5oYXNDbGFzcyhcImlzLWFjdGl2ZVwiKSApIHtcbiAgICAgICQoJHBhcmVudCkuYWRkQ2xhc3MoXCJoYXMtZGlzcGF0Y2hlZC1hY3RpdmUtY2hpbGRcIik7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgJCgkcGFyZW50KS5yZW1vdmVDbGFzcyhcImhhcy1kaXNwYXRjaGVkLWFjdGl2ZS1jaGlsZFwiKTtcbiAgICB9XG5cbiAgICB0cmlnZ2VyLnNpYmxpbmdzKFwiLmRpc3BhdGNoZXItdHJpZ2dlclwiKS5yZW1vdmVDbGFzcyhcImlzLWFjdGl2ZVwiKTtcbiAgfVxufVxuXG5cbi8vIExvZ2ljXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIC8vIGxpc3RlbiBmb3IgYSBjbGljayBvciBrZXlkb3duIGV2ZW50IG9uIGVsZW1lbnRzIHdpdGggLmRpc3BhdGNoLXRyaWdnZXIuIGtleWRvd24gaXMgbmVlZGVkIGJlY2F1c2Ugc29tZSBlbGVtZW50cyB0aGF0IGFyZSBub3QgbmF0aXZlIDxidXR0b24+IG9yIDxhPiBlbGVtZW50cyDigJQgeWV0IGhhdmUgdGFiaW5kZXg9XCIwXCIgYWRkZWQgYWxsb3dpbmcgZm9yIGtleWJvYXJkIGFjY2VzcyDigJQgbmVlZCB0byByZWNlaXZlIGEgc3BhY2ViYXIga2V5IHByZXNzIG9yIHJldHVybiBrZXkgcHJlc3NcbiAgJChcImJvZHlcIikub24oXCJjbGljayBrZXlkb3duXCIsIFwiLmRpc3BhdGNoZXItdHJpZ2dlclwiLCBmdW5jdGlvbihldmVudCkge1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGV2ZW50IGlzIGVpdGhlciBhIGNsaWNrLCBhIHNwYWNlYmFyIHByZXNzLCBvciBhIHJldHVybiBwcmVzc1xuICAgIGlmICggKGV2ZW50LnR5cGUgPT09IFwiY2xpY2tcIikgfHwgKGV2ZW50LndoaWNoID09IDEzIHx8IGV2ZW50LndoaWNoID09IDMyKSkge1xuXG4gICAgICAvLyByZXN0cmljdHMgdGhlIFwib3ZlcnBvd2VyZWRcIiBwcmV2ZW50RGVmYXVsdCBhY3Rpb24gT05MWSB0byBhIGRpcmVjdCBjbGljay9rZXlkb3duIG9uIC5kaXNwYXRjaC10cmlnZXIgZWxlbWVudFxuICAgICAgLy8gICAtIHRoaXMgcmV0YWlucyBibG9ja2luZyBvZiBkZWZhdWx0IGFjdGlvbnMgd2hlbiB0aGUgdHJpZ2dlciBpcyBhbiBhbmNob3IgaXRzZWxmXG4gICAgICAvLyAgIC0gYnV0IGFsbG93cyBjaGlsZCBhLCBpbnB1dCwgYnV0dG9uLCBsYWJlbCwgZXRjLiB0byByZXRhaW4gdGhlaXIgZnVuY3Rpb25hbGl0eVxuICAgICAgaWYoZXZlbnQudGFyZ2V0ID09PSBldmVudC5jdXJyZW50VGFyZ2V0KSB7XG4gICAgICAgIC8vIFByZXZlbnQgZGVmYXVsdCBjbGljayBhY3Rpb25zXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIEZpcmUgdGhlIG1haW4gZnVuY3Rpb25cbiAgICAgIGNsaWNrRGlzcGF0Y2goICQodGhpcykgKTtcbiAgICB9XG4gIH0pO1xufSk7XG5cbi8vXG4vLyBQZXJjaCBOYXZpZ2F0aW9uIC8gTWVudSBTeXN0ZW1cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBWYXJpYWJsZXMgZGVmaW5lZCBpbiBwZXJjaC1jb3JlLXNjcmlwdHMuanNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciAkZ2xvYmFsX2hlYWRlciAgICAgID0gJCgnI2dsb2JhbC1oZWFkZXInKSxcblxuICAkbmF2X291dGVyX3dyYXBwZXIgICAgPSAkKCcjZ2xvYmFsLW91dGVyLW5hdmlnYXRpb24td3JhcHBlcicpLFxuXG4gIC8vICRuYXZfcGFyZW50ICAgICAgPSAkKCcuZ2xvYmFsLW5hdi1pdGVtLS1oYXMtY2hpbGRyZW4nKSxcbiAgJG5hdl9hY3RpdmVfcGFyZW50ICAgID0gJCgnLmdsb2JhbC1uYXYtaXRlbS0taGFzLWNoaWxkcmVuLmFjdGl2ZS1wYXJlbnQnKSxcbiAgLy8gJG5hdl9wYXJlbnRfbGluayAgICAgPSAkKCcuZ2xvYmFsLW5hdi1pdGVtLS1oYXMtY2hpbGRyZW4gPiAuZ2xvYmFsLW5hdi1saW5rJyksXG4gICRuYXZfY2hpbGQgICAgICAgID0gJCgnLmdsb2JhbC1uYXYtY2hpbGQtbGlzdCcpLFxuXG4gICRuYXZfcmV2ZWFsX2J1dHRvbiAgICA9ICQoJy5oYW1idXJnZXItbWVudS1idXR0b24nKTtcblxuXG4vLyBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cbi8vIE1vYmlsZSBuYXYgb3BlbmluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIG9wZW5Nb2JpbGVOYXYgKCkge1xuICAkKCdodG1sJykuYWRkQ2xhc3MoJ21vYmlsZS1uYXYtaXMtb3BlbiBpcy1tb2JpbGUtc2Nyb2xsLWxvY2tlZCcpO1xuICAkbmF2X3JldmVhbF9idXR0b24uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpLmF0dHIoJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScpLmF0dHIoJ2FyaWEtcHJlc3NlZCcsICd0cnVlJyk7XG4gICRuYXZfb3V0ZXJfd3JhcHBlci5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICRnbG9iYWxfaGVhZGVyLmFkZENsYXNzKCdtb2JpbGUtbmF2LWlzLW9wZW4nKTtcbn1cblxuXG4vLyBOYXZpZ2F0aW9uIG9wZW5pbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBPcGVucyB0aGUgbWVudSBmb3IgYm90aCBtb2JpbGUgYW5kIGRlc2t0b3AuXG4vLyBBbHNvIGNhbiBhY2NlcHQgYW4gYXJndW1lbnQgdG8gb3BlbiBhIHNwZWNpZmljIGNoaWxkIG1lbnUuXG4vLyAgPiBDb3VsZCBiZSB1c2VkIHRvIG9wZW4gdGhlIG5hdmlnYXRpb24gYnkgY2xpY2tpbmcgYSBsaW5rIG9yIGJ1dHRvbiBvbiB0aGUgcGFnZS5cbi8vICA+IFdhcyBvbmNlIHVzZWQgb24gV01VL1dvcmRsQ3JhZnRzIHNpZGViYXJcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBvcGVuTmF2ICh0aGVfbWVudSkge1xuXG4gIC8vIFVzZSBpbnRlcnBvbGF0aW9uIHRvIHRha2UgdGhlIHBhc3NlZCBjaGlsZCBtZW51IG5hbWUgYW5kIHRoZW4gc2VsZWN0IGl0IGJlbG93XG4gIHZhciBpbnRlcnBvbGF0ZWRfc2VsZWN0b3IgPSBcIi5tZW51LVwiICsgdGhlX21lbnU7XG4gICQoaW50ZXJwb2xhdGVkX3NlbGVjdG9yKVxuICAgIC5mb2N1cygpXG4gICAgLmFkZENsYXNzKCdpcy1vcGVuIHN1Ym1lbnUtaXMtb3BlbicpO1xuICAkKGludGVycG9sYXRlZF9zZWxlY3RvcikuY2hpbGRyZW4oJG5hdl9jaGlsZCkuYWRkQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgJChpbnRlcnBvbGF0ZWRfc2VsZWN0b3IpLmNoaWxkcmVuKCcuY2hpbGQtbmF2LW9wZW5lcicpLmFkZENsYXNzKCdpcy1hY3RpdmUnKTtcblxuICAvLyBGZWVkYmFjayB0byB0aGUgYm9keTogYSBjaGlsZCBtZW51IGlzIG9wZW4uIEFsbG93cyBmb3IgbWFraW5nIGEgYmFja2Ryb3Agc2hvdyB1cCBvdmVyIHRoZSBjb250ZW50L2JlbmVhdGggdGhlIG1lbnUuXG4gIC8vICQoJ2JvZHknKS5hZGRDbGFzcygnY2hpbGQtbWVudS1pcy1vcGVuJyk7XG5cbiAgb3Blbk1vYmlsZU5hdigpO1xuXG4gIGlmKCRuYXZfb3V0ZXJfd3JhcHBlci5oYXNDbGFzcygnbmF2aWdhdGlvbi1kcmF3ZXItd3JhcHBlcicpKSB7XG4gICAgZHJhd2VyTGlzdGVuRm9yQ2xvc2luZ1N3aXBlKCk7XG4gIH1cbn1cblxuXG4vLyBOYXZpZ2F0aW9uIGNsb3Npbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBjbG9zZU5hdiAoY2xvc2VOYXZNaWxsaXNlY29uZHMpIHtcbiAgJCgnaHRtbCcpLnJlbW92ZUNsYXNzKCdtb2JpbGUtbmF2LWlzLW9wZW4gaXMtbW9iaWxlLXNjcm9sbC1sb2NrZWQnKTtcbiAgJG5hdl9vdXRlcl93cmFwcGVyLmFkZENsYXNzKCdhbmltYXRpbmctb3V0Jyk7XG4gICRuYXZfcmV2ZWFsX2J1dHRvbi5yZW1vdmVDbGFzcygnaXMtYWN0aXZlJykuYXR0cignYXJpYS1leHBhbmRlZCcsICdmYWxzZScpLmF0dHIoJ2FyaWEtcHJlc3NlZCcsICdmYWxzZScpO1xuICAkZ2xvYmFsX2hlYWRlci5yZW1vdmVDbGFzcygnbW9iaWxlLW5hdi1pcy1vcGVuJyk7XG5cbiAgLy8gQ2xvc2UgbWVnYW1lbnVzIGZvciBtb2JpbGUuLi5iZWZvcmUgYW5pbWF0aW9uIGlzIGZpbmlzaGVkXG4gICQoJy5nbG9iYWwtbmF2LWl0ZW0nKS5yZW1vdmVDbGFzcygnaXMtb3BlbiBzdWJtZW51LWlzLW9wZW4gc3VibWVudS1pcy1tb2JpbGUtb3BlbicpO1xuICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ2NoaWxkLW1lbnUtaXMtb3BlbicpO1xuXG4gIC8vIGlmIGEgY3VzdG9tIHRpbWVvdXQgaXMgcGFzc2VkLCBcbiAgbWlsbGlzZWNvbmRzID0gKGNsb3NlTmF2TWlsbGlzZWNvbmRzID49IDApID8gY2xvc2VOYXZNaWxsaXNlY29uZHMgOiAyNTA7XG5cbiAgdmFyIG5hdl9jbG9zZV90aW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgLy8gQ2xvc2UgbWVnYW1lbnVzIGZvciBtb2JpbGUuLi5hZnRlciBhbmltYXRpb24gaXMgZmluaXNoZWRcbiAgICAkKCcuY2hpbGQtbmF2LW9wZW5lcicpLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAkbmF2X2NoaWxkLnJlbW92ZUNsYXNzKCdpcy1vcGVuJyk7XG5cbiAgICAkbmF2X291dGVyX3dyYXBwZXIucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICRuYXZfb3V0ZXJfd3JhcHBlci5yZW1vdmVDbGFzcygnYW5pbWF0aW5nLW91dCcpO1xuICB9LCBtaWxsaXNlY29uZHMpO1xuXG4gIC8vIGFsc28gY2xvc2UgdGhlIHNlYXJjaFxuICBpZiAodHlwZW9mIGNsb3NlU2VhcmNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2xvc2VTZWFyY2goKTtcbiAgfVxuXG4gIC8vIGlmIGEgZHJhd2VyLCBwYXNzIHRoZSBmYWxzZSB2YWx1ZSB0byByZW1vdmUgdGhlIHN3aXBlIGV2ZW50IGxpc3RlbmVyc1xuICBpZigkbmF2X291dGVyX3dyYXBwZXIuaGFzQ2xhc3MoJ25hdmlnYXRpb24tZHJhd2VyLXdyYXBwZXInKSkge1xuICAgIGRyYXdlckxpc3RlbkZvckNsb3NpbmdTd2lwZShmYWxzZSk7XG4gIH1cblxuICByZXR1cm4gZmFsc2U7XG59XG5cblxuLy8gTG9naWNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBOYXZpZ2F0aW9uXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBDbG9zZSB0aGUgbWVudSBpZiBpdCdzIGN1cnJlbnRseSBhY3RpdmUuIE90aGVyd2lzZTogcnVuIG9wZW5OYXYgZnVuY3Rpb24uXG4kbmF2X3JldmVhbF9idXR0b24ub24oJ2NsaWNrIGtleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIGlmICgoZS50eXBlID09ICdjbGljaycpIHx8IChlLmtleUNvZGUgPT0gMzIpKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICBjbG9zZU5hdigpO1xuICAgICAgdGhpcy5ibHVyKCk7IC8vIFJlbW92ZSB0aGUgZm9jdXMgZnJvbSB0aGUgYnV0dG9uIHNvIDpmb2N1cyBzdHlsZXMgZG9uJ3Qgc2hvdyBvbiB0b3VjaCBzY3JlZW5zXG5cbiAgICB9IGVsc2Uge1xuICAgICAgb3Blbk5hdigpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vXG4vLyBDaGlsZCBOYXYgT3BlbiBXaXRoIFBhcmVudCBDbGlja1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIElmIGEgbmF2IGxpbmsgc2V0IHRvIG9wZW4gaXRzIGNoaWxkIGlzIGNsaWNrZWQsXG4vLyBvcGVuIHRoZSBjaGlsZCBtZW51LlxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIEFzc3VtZXMgYW4gaW50ZWdyYXRpb24gd2l0aDpcbi8vIC0gbmF2aWdhdGlvbi1zeXN0ZW0uanNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4vLyBEbyBub3QgdXNlIGFsb25nc2lkZSBjaGlsZC1uYXYtb3Blbi13aXRoLWdlbmVyYXRlZC1idXR0b24uanNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuLy8gVmFyaWFibGVzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbnZhciAkbmF2X2xpbmtfb3BlbnNfY2hpbGQgICAgID0gJCgnLmdsb2JhbC1uYXYtaXRlbS0tb3BlbnMtY2hpbGQgPiAuZ2xvYmFsLW5hdi1saW5rJyk7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBMb2dpY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4kbmF2X2xpbmtfb3BlbnNfY2hpbGQuY2xpY2soZnVuY3Rpb24oZSkge1xuICAvLyBQcmV2ZW50IGxpbmsgZnJvbSBiZWluZyBmb2xsb3dlZFxuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgLy8gc2V0IHRoZSBwYXJlbnRcbiAgdmFyICR0aGVfcGFyZW50ID0gJCh0aGlzKS5wYXJlbnQoKTtcblxuICAvLyByZW1vdmUgaXMtb3BlbiBjbGFzcyBpZiBpdCdzIGFscmVhZHkgdGhlcmVcbiAgaWYgKCAkdGhlX3BhcmVudC5oYXNDbGFzcygnc3VibWVudS1pcy1vcGVuJykgfHwgJHRoZV9wYXJlbnQuaGFzQ2xhc3MoJ3N1Ym1lbnUtaXMtbW9iaWxlLW9wZW4nKSApIHtcbiAgICAkdGhlX3BhcmVudC5yZW1vdmVDbGFzcygnc3VibWVudS1pcy1vcGVuIHN1Ym1lbnUtaXMtbW9iaWxlLW9wZW4nKVxuICAgICAgLmNoaWxkcmVuKCcuZ2xvYmFsLW5hdi1jaGlsZC1saXN0JykucmVtb3ZlQ2xhc3MoJ2lzLW9wZW4nKTtcbiAgICAkKHRoaXMpLmJsdXIoKTtcbiAgfVxuICAvLyBvdGhlcndpc2UsIGFkZCBpdFxuICBlbHNlIHtcbiAgICAkdGhlX3BhcmVudC5hZGRDbGFzcygnc3VibWVudS1pcy1vcGVuJylcbiAgICAgIC5jaGlsZHJlbignLmdsb2JhbC1uYXYtY2hpbGQtbGlzdCcpLmFkZENsYXNzKCdpcy1vcGVuJyk7XG4gIH1cbn0pO1xuXG4vL1xuLy8gTW9kYWwgU2VhcmNoIFN5c3RlbVxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbi8vIFZhcmlhYmxlcyBkZWZpbmVkIGluIHBlcmNoLWNvcmUtc2NyaXB0cy5qc1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBWYXJpYWJsZXNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxudmFyICRzZWFyY2hfcmV2ZWFsX2J1dHRvbiA9ICQoJy5nbG9iYWwtc2VhcmNoLXJldmVhbC1idXR0b24nKSxcbiAgJHNlYXJjaF9tZW51ICAgICAgPSAkKCcjZ2xvYmFsLXNlYXJjaC1vdmVybGF5JyksXG4gICRzZWFyY2hfaW5wdXQgICAgICAgPSAkKCcjZ2xvYmFsLXNlYXJjaC1vdmVybGF5X19pbnB1dCcpLFxuICAkc2VhcmNoX3N1Ym1pdCAgICAgID0gJCgnI2dsb2JhbC1zZWFyY2gtb3ZlcmxheV9fc3VibWl0JyksXG4gICRzZWFyY2hfY2xvc2VfYnRuICAgICA9ICQoJyNnbG9iYWwtc2VhcmNoLW92ZXJsYXlfX2Nsb3NlLWJ1dHRvbicpLFxuXG4gIC8vIEdsb2JhbCBzdGFuZGFyZCBmb3IgdHJpZ2dlcmluZyBzZWFyY2guXG4gIC8vIEV4YW1wbGUgdXNhZ2U6IHJhdGhlciB0aGFuIGVtYmVkIGFuIGFkZGl0aW9uYWwgc2VhcmNoIGZvcm0gaW5wdXQgYW5kIHN1Ym1pdCBvbiBhIDQwNCBwYWdlLCBhZGQgYSBsaW5rIG9yIGJ1dHRvbiB3aXRoIHRoaXMgY2xhc3MgdGhhdCBzdW1tb25zIHRoZSBzaXRlIHNlYXJjaC5cbiAgLy8gSWYgbm90IHVzaW5nIGZ1bmN0aW9uYWxpdHkgaW4gdGhlIG1vZGFsIHNlYXJjaCBzeXN0ZW0sIHdyaXRlIHNvbWV0aGluZyBzaW1pbGFyIHVzaW5nIHRoaXMgY2xhc3MgbmFtZSBhbmQgdmFyaWFibGUuXG4gICRzZWFyY2hfdHJpZ2dlciAgICAgPSAkKCcuZ2xvYmFsLXNlYXJjaC10cmlnZ2VyJyk7XG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG4vLyBGdW5jdGlvbnNcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBTZWFyY2ggb3BlbmluZ1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmZ1bmN0aW9uIG9wZW5TZWFyY2ggKCkge1xuICAvLyBGaXJzdCwgbWFrZSB0aGUgbGluayBoaWdobGlnaHRlZCAmIHNob3cgdGhlIG1lbnVcbiAgJHNlYXJjaF9yZXZlYWxfYnV0dG9uLmFkZENsYXNzKCdpcy1hY3RpdmUnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ3RydWUnKS5hdHRyKCdhcmlhLXByZXNzZWQnLCAndHJ1ZScpO1xuICAkc2VhcmNoX21lbnUuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAvLyBUaGVuLCBzZWxlY3QgdGhlIGlucHV0IGZpZWxkXG4gICRzZWFyY2hfaW5wdXQuc2VsZWN0KCk7XG59XG5cblxuLy8gU2VhcmNoIGNsb3Npbmdcbi8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5mdW5jdGlvbiBjbG9zZVNlYXJjaCAoKSB7XG4gIC8vIFJlbW92ZSBjbGFzc2VzIHRvIHRoZSBtZW51IGFuZCB0aGUgbGlua1xuICAvLyAkKHRoaXMpLm9mZnNldFdpZHRoID0gJCh0aGlzKS5vZmZzZXRXaWR0aDtcbiAgJHNlYXJjaF9tZW51LmFkZENsYXNzKCdhbmltYXRpbmctb3V0Jyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgJHNlYXJjaF9yZXZlYWxfYnV0dG9uLnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKS5hdHRyKCdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJykuYXR0cignYXJpYS1wcmVzc2VkJywgJ2ZhbHNlJyk7XG4gICAgJHNlYXJjaF9tZW51LnJlbW92ZUNsYXNzKCdpcy1hY3RpdmUnKTtcbiAgICAkc2VhcmNoX21lbnUucmVtb3ZlQ2xhc3MoJ2FuaW1hdGluZy1vdXQnKTtcbiAgfSwgMjUwKTtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuXG4vLyBMb2dpY1xuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbi8vIENsb3NlIHRoZSBtZW51IGlmIGl0J3MgY3VycmVudGx5IGFjdGl2ZS4gT3RoZXJ3aXNlOiBydW4gb3BlblNlYXJjaCBmdW5jdGlvbi5cbiRzZWFyY2hfcmV2ZWFsX2J1dHRvbi5jbGljayhmdW5jdGlvbigpIHtcbiAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgY2xvc2VTZWFyY2goKTtcbiAgfVxuXG4gIGVsc2Uge1xuICAgIG9wZW5TZWFyY2goKTtcbiAgfVxufSk7XG5cblxuLy8gT3BlbiB0aGUgc2VhcmNoIG1lbnUgaWYgYW55IGFuY2hvciB3aXRoIGEgY2VydGFpbiBjbGFzcyBpcyBjbGlja2VkXG4kc2VhcmNoX3RyaWdnZXIuY2xpY2soZnVuY3Rpb24oKSB7XG4gIC8vIGlmIHRoZSBzZWxlY3RlZCBzZWFyY2ggdHJpZ2dlciBpcyBhbHNvIGEgc2VhcmNoIHJldmVhbCBidXR0b24sIGFib3J0IHRoaXMgZnVuY3Rpb25cbiAgaWYoJCh0aGlzKS5pcygkc2VhcmNoX3JldmVhbF9idXR0b24pKSB7IHJldHVybiBmYWxzZTsgfVxuXG4gIC8vIEFkZCBjbGFzc2VzIHRvIHRoZSBtZW51IGFuZCB0aGUgbGlua1xuICAkc2VhcmNoX3JldmVhbF9idXR0b24uYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAkc2VhcmNoX21lbnUuYWRkQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuXG4gIC8vIEZvY3VzIHRoZSBzZWFyY2ggaW5wdXRcbiAgJCh0aGlzKS5ibHVyKCk7XG4gICRzZWFyY2hfaW5wdXQuc2VsZWN0KCk7XG5cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG5cblxuLy8gQ2xpY2tpbmcgYW55d2hlcmUgaW4gdGhlIHNlYXJjaCdzIGJhY2tncm91bmQgb3ZlcmxheSDigJQgZXhjZXB0IHdpdGhpbiB0aGUgYWN0dWFsIGZvcm0g4oCUIGNsb3NlcyB0aGUgb3ZlcmxheVxuJHNlYXJjaF9tZW51LmNsaWNrKGNsb3NlU2VhcmNoKTtcbiAgLy8gLi4uRG8gbm90IGNsb3NlIGlmIHRoZSBjbGljayBpcyBpbnNpZGUgdGhlIGlubmVyIGNvbnRhaW5lci5cbiAgJCgnLmdsb2JhbC1zZWFyY2gtb3ZlcmxheV9faW5uZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9KTtcbiRzZWFyY2hfY2xvc2VfYnRuLmNsaWNrKGNsb3NlU2VhcmNoKTtcblxuXG4vLyBTZWFyY2gga2V5Ym9hcmQgYXNzaXN0OiB3aGVuIHNlYXJjaCBtZW51IGlzIG9wZW4sIGtlZXAgZm9jdXMgd2l0aGluIHRoZSBzZWFyY2ggbWVudVxuLy8gYnkgZm9jdXNpbmcgXCJiYWNrIHRvXCIgdGhlIGNvcm5lciBjbG9zZXIgYnV0dG9uLCB3aGljaCBhbGxvd3MgdGhlIHVzZXIgdG8gY2xvc2UgaWYgZGVzaXJlZCxcbi8vIG9yIGNvbnRpbnVlIHRvIHRoZSBuZXh0IGZvY3VzYWJsZSBmaWVsZCwgdGhlIGlucHV0IGl0c2VsZlxuJHNlYXJjaF9jbG9zZV9idG4ub24oJ2ZvY3Vzb3V0JywgZnVuY3Rpb24oKSB7XG4gICRzZWFyY2hfaW5wdXQuZm9jdXMoKTtcbn0pO1xuXG4vL1xuLy8gS2V5Ym9hcmQgc2hvcnRjdXRzIHdpdGggTW91c2VUcmFwLmpzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gQXNzdW1lcyBhbiBpbnRlZ3JhdGlvbiB3aXRoOlxuLy8gLSBuYXZpZ2F0aW9uLXN5c3RlbS5qc1xuLy8gLSBtb2RhbC1zZWFyY2gtc3lzdGVtLmpzXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4vLyBvcGVuIHNlYXJjaFxuTW91c2V0cmFwLmJpbmQoJy8nLCBmdW5jdGlvbihlKSB7XG5cbiAgaWYgKHR5cGVvZiBvcGVuU2VhcmNoID09ICdmdW5jdGlvbicgJiYgJHNlYXJjaF9tZW51Lmxlbmd0aCkge1xuICAgIC8vIElmIHRoZSBzZWFyY2ggbWVudSBpcyBhbHJlYWR5IG9wZW4sIG5ldmVybWluZCwgbGV0IHRoZSBgL2AgdGhyb3VnaC4uLlxuICAgIGlmICgkc2VhcmNoX21lbnUuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICAvLyBCdXQgaWYgaXQncyBub3QgYWxyZWFkeSBvcGVuLCBjYXB0dXJlIHRoZSBgL2AgYW5kIG9wZW4gdGhlIG1lbnVcbiAgICBlbHNlIHtcbiAgICAgIC8vIFByZXZlbnQgJy8nIGNoYXIgZnJvbSBiZWluZyB0eXBlZCBpbnRvIHRoZSBuZXdseS1mb2N1c2VkIHNlYXJjaCBmaWVsZFxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICBvcGVuU2VhcmNoKCk7XG4gICAgfVxuICB9XG4gIC8vIGVsc2Uge1xuICAvLyAgY29uc29sZS5sb2coXCJFaXRoZXIgb3BlblNlYXJjaCBpcyBub3QgYSBmdW5jdGlvbiBvciAkc2VhcmNoX21lbnUgaGFzIG5vdCBiZWVuIGFzc2lnbmVkLlwiKTtcbiAgLy8gfVxuXG59KTtcblxuLy8gcHJlc3MgZXNjYXBlIChFU0MpIHRvIGNsb3NlIG1lbnVzXG5Nb3VzZXRyYXAuYmluZCgnZXNjJywgZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2YgY2xvc2VOYXYgPT0gJ2Z1bmN0aW9uJykge1xuICAgIGNsb3NlTmF2KCk7XG4gIH1cbiAgaWYgKHR5cGVvZiBjbG9zZVNlYXJjaCA9PSAnZnVuY3Rpb24nKSB7XG4gICAgY2xvc2VTZWFyY2goKTtcbiAgfVxufSk7XG5cbi8vIG9wZW4gdGhlIG1lbnUvbmF2XG5Nb3VzZXRyYXAuYmluZCgndScsIGZ1bmN0aW9uKCkge1xuICAvLyBTaW5jZSBzZWFyY2ggaW5wdXQgaXMgYWxsb3dlZCB0byBsaXN0ZW4gdG8gTW91c2V0cmFwIChub3JtYWxseSBpdCdzIGRpc2FibGVkIOKAlCBidXQgd2Ugd2FudCBpdCBlbmFibGVkIGZvciBFU0Mga2V5IGNsb3NlKSwgaWdub3JlIHRoZSBcInVcIiBjaGFyYWN0ZXIgaWYgaXQgaXMgb3BlblxuICBpZiggKCF0eXBlb2YoJHNlYXJjaF9tZW51KSA9PT0gJ3VuZGVmaW5lZCcpICYmICgkc2VhcmNoX21lbnUuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuXG4gIC8vIE90aGVyd2lzZSwgaWYgdGhlIG1vYmlsZSBuYXZpZ2F0aW9uIGlzIG9wZW4sIGNsb3NlIGl0XG4gIGVsc2UgaWYgKCRnbG9iYWxfaGVhZGVyLmhhc0NsYXNzKCdtb2JpbGUtbmF2LWlzLW9wZW4nKSkge1xuICAgIGlmICh0eXBlb2YgY2xvc2VOYXYgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgY2xvc2VOYXYoKTtcbiAgICB9XG4gIH1cblxuICAvLyAuLi5hbmQgaWYgaXQncyBub3Qgb3Blbiwgb3BlbiBpdFxuICBlbHNlIHtcbiAgICBpZiAodHlwZW9mIG9wZW5OYXYgPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgb3Blbk5hdigpO1xuICAgIH1cbiAgfVxufSk7XG5cbi8vIC8vIGtvbmFtaSBjb2RlIVxuLy8gTW91c2V0cmFwLmJpbmQoJ3VwIHVwIGRvd24gZG93biBsZWZ0IHJpZ2h0IGxlZnQgcmlnaHQgYiBhJywgZnVuY3Rpb24oKSB7IC8vZW50ZXJcbi8vICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2tvbmFtaS1jb2RlLWlzLWFjdGl2ZScpO1xuLy8gfSk7XG5cbi8qIVxuXG5Ib2xkZXIgLSBjbGllbnQgc2lkZSBpbWFnZSBwbGFjZWhvbGRlcnNcblZlcnNpb24gMi45LjYrZmJseXlcbsKpIDIwMTggSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvXG5cblNpdGU6ICAgICBodHRwOi8vaG9sZGVyanMuY29tXG5Jc3N1ZXM6ICAgaHR0cHM6Ly9naXRodWIuY29tL2ltc2t5L2hvbGRlci9pc3N1ZXNcbkxpY2Vuc2U6ICBNSVRcblxuKi9cbihmdW5jdGlvbiAod2luZG93KSB7XG4gIGlmICghd2luZG93LmRvY3VtZW50KSByZXR1cm47XG4gIHZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcblxuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9pbmV4b3JhYmxldGFzaC9wb2x5ZmlsbC9ibG9iL21hc3Rlci93ZWIuanNcbiAgICBpZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3JzKSB7XG4gICAgICAgIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyksIGVsZW1lbnRzID0gW10sIGVsZW1lbnQ7XG4gICAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5maXJzdENoaWxkLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgZG9jdW1lbnQuX3FzYSA9IFtdO1xuXG4gICAgICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHNlbGVjdG9ycyArICd7eC1xc2E6ZXhwcmVzc2lvbihkb2N1bWVudC5fcXNhICYmIGRvY3VtZW50Ll9xc2EucHVzaCh0aGlzKSl9JztcbiAgICAgICAgd2luZG93LnNjcm9sbEJ5KDAsIDApO1xuICAgICAgICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuICAgICAgICB3aGlsZSAoZG9jdW1lbnQuX3FzYS5sZW5ndGgpIHtcbiAgICAgICAgICBlbGVtZW50ID0gZG9jdW1lbnQuX3FzYS5zaGlmdCgpO1xuICAgICAgICAgIGVsZW1lbnQuc3R5bGUucmVtb3ZlQXR0cmlidXRlKCd4LXFzYScpO1xuICAgICAgICAgIGVsZW1lbnRzLnB1c2goZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuX3FzYSA9IG51bGw7XG4gICAgICAgIHJldHVybiBlbGVtZW50cztcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yID0gZnVuY3Rpb24gKHNlbGVjdG9ycykge1xuICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9ycyk7XG4gICAgICAgIHJldHVybiAoZWxlbWVudHMubGVuZ3RoKSA/IGVsZW1lbnRzWzBdIDogbnVsbDtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKSB7XG4gICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gZnVuY3Rpb24gKGNsYXNzTmFtZXMpIHtcbiAgICAgICAgY2xhc3NOYW1lcyA9IFN0cmluZyhjbGFzc05hbWVzKS5yZXBsYWNlKC9efFxccysvZywgJy4nKTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY2xhc3NOYW1lcyk7XG4gICAgICB9O1xuICAgIH1cblxuICAvL2h0dHBzOi8vZ2l0aHViLmNvbS9pbmV4b3JhYmxldGFzaC9wb2x5ZmlsbFxuICAvLyBFUzUgMTUuMi4zLjE0IE9iamVjdC5rZXlzICggTyApXG4gIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL09iamVjdC9rZXlzXG4gIGlmICghT2JqZWN0LmtleXMpIHtcbiAgICBPYmplY3Qua2V5cyA9IGZ1bmN0aW9uIChvKSB7XG4gICAgICBpZiAobyAhPT0gT2JqZWN0KG8pKSB7IHRocm93IFR5cGVFcnJvcignT2JqZWN0LmtleXMgY2FsbGVkIG9uIG5vbi1vYmplY3QnKTsgfVxuICAgICAgdmFyIHJldCA9IFtdLCBwO1xuICAgICAgZm9yIChwIGluIG8pIHtcbiAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBwKSkge1xuICAgICAgICAgIHJldC5wdXNoKHApO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcmV0O1xuICAgIH07XG4gIH1cblxuICAvLyBFUzUgMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoICggY2FsbGJhY2tmbiBbICwgdGhpc0FyZyBdIClcbiAgLy8gRnJvbSBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9mb3JFYWNoXG4gIGlmICghQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICBBcnJheS5wcm90b3R5cGUuZm9yRWFjaCA9IGZ1bmN0aW9uIChmdW4gLyosIHRoaXNwICovKSB7XG4gICAgICBpZiAodGhpcyA9PT0gdm9pZCAwIHx8IHRoaXMgPT09IG51bGwpIHsgdGhyb3cgVHlwZUVycm9yKCk7IH1cblxuICAgICAgdmFyIHQgPSBPYmplY3QodGhpcyk7XG4gICAgICB2YXIgbGVuID0gdC5sZW5ndGggPj4+IDA7XG4gICAgICBpZiAodHlwZW9mIGZ1biAhPT0gXCJmdW5jdGlvblwiKSB7IHRocm93IFR5cGVFcnJvcigpOyB9XG5cbiAgICAgIHZhciB0aGlzcCA9IGFyZ3VtZW50c1sxXSwgaTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgICAgICBpZiAoaSBpbiB0KSB7XG4gICAgICAgICAgZnVuLmNhbGwodGhpc3AsIHRbaV0sIGksIHQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vaHR0cHM6Ly9naXRodWIuY29tL2luZXhvcmFibGV0YXNoL3BvbHlmaWxsL2Jsb2IvbWFzdGVyL3dlYi5qc1xuICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgIHZhciBCNjRfQUxQSEFCRVQgPSAnQUJDREVGR0hJSktMTU5PUFFSU1RVVldYWVphYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5ejAxMjM0NTY3ODkrLz0nO1xuICAgIGdsb2JhbC5hdG9iID0gZ2xvYmFsLmF0b2IgfHwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBpbnB1dCA9IFN0cmluZyhpbnB1dCk7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLFxuICAgICAgICAgIG91dHB1dCA9IFtdLFxuICAgICAgICAgIGJ1ZmZlciA9IDAsIGJpdHMgPSAwLCBuO1xuXG4gICAgICBpbnB1dCA9IGlucHV0LnJlcGxhY2UoL1xccy9nLCAnJyk7XG4gICAgICBpZiAoKGlucHV0Lmxlbmd0aCAlIDQpID09PSAwKSB7IGlucHV0ID0gaW5wdXQucmVwbGFjZSgvPSskLywgJycpOyB9XG4gICAgICBpZiAoKGlucHV0Lmxlbmd0aCAlIDQpID09PSAxKSB7IHRocm93IEVycm9yKCdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InKTsgfVxuICAgICAgaWYgKC9bXisvMC05QS1aYS16XS8udGVzdChpbnB1dCkpIHsgdGhyb3cgRXJyb3IoJ0ludmFsaWRDaGFyYWN0ZXJFcnJvcicpOyB9XG5cbiAgICAgIHdoaWxlIChwb3NpdGlvbiA8IGlucHV0Lmxlbmd0aCkge1xuICAgICAgICBuID0gQjY0X0FMUEhBQkVULmluZGV4T2YoaW5wdXQuY2hhckF0KHBvc2l0aW9uKSk7XG4gICAgICAgIGJ1ZmZlciA9IChidWZmZXIgPDwgNikgfCBuO1xuICAgICAgICBiaXRzICs9IDY7XG5cbiAgICAgICAgaWYgKGJpdHMgPT09IDI0KSB7XG4gICAgICAgICAgb3V0cHV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZSgoYnVmZmVyID4+IDE2KSAmIDB4RkYpKTtcbiAgICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKChidWZmZXIgPj4gIDgpICYgMHhGRikpO1xuICAgICAgICAgIG91dHB1dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoYnVmZmVyICYgMHhGRikpO1xuICAgICAgICAgIGJpdHMgPSAwO1xuICAgICAgICAgIGJ1ZmZlciA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgcG9zaXRpb24gKz0gMTtcbiAgICAgIH1cblxuICAgICAgaWYgKGJpdHMgPT09IDEyKSB7XG4gICAgICAgIGJ1ZmZlciA9IGJ1ZmZlciA+PiA0O1xuICAgICAgICBvdXRwdXQucHVzaChTdHJpbmcuZnJvbUNoYXJDb2RlKGJ1ZmZlciAmIDB4RkYpKTtcbiAgICAgIH0gZWxzZSBpZiAoYml0cyA9PT0gMTgpIHtcbiAgICAgICAgYnVmZmVyID0gYnVmZmVyID4+IDI7XG4gICAgICAgIG91dHB1dC5wdXNoKFN0cmluZy5mcm9tQ2hhckNvZGUoKGJ1ZmZlciA+PiA4KSAmIDB4RkYpKTtcbiAgICAgICAgb3V0cHV0LnB1c2goU3RyaW5nLmZyb21DaGFyQ29kZShidWZmZXIgJiAweEZGKSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBvdXRwdXQuam9pbignJyk7XG4gICAgfTtcblxuICAgIGdsb2JhbC5idG9hID0gZ2xvYmFsLmJ0b2EgfHwgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgICBpbnB1dCA9IFN0cmluZyhpbnB1dCk7XG4gICAgICB2YXIgcG9zaXRpb24gPSAwLFxuICAgICAgICAgIG91dCA9IFtdLFxuICAgICAgICAgIG8xLCBvMiwgbzMsXG4gICAgICAgICAgZTEsIGUyLCBlMywgZTQ7XG5cbiAgICAgIGlmICgvW15cXHgwMC1cXHhGRl0vLnRlc3QoaW5wdXQpKSB7IHRocm93IEVycm9yKCdJbnZhbGlkQ2hhcmFjdGVyRXJyb3InKTsgfVxuXG4gICAgICB3aGlsZSAocG9zaXRpb24gPCBpbnB1dC5sZW5ndGgpIHtcbiAgICAgICAgbzEgPSBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKyspO1xuICAgICAgICBvMiA9IGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24rKyk7XG4gICAgICAgIG8zID0gaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbisrKTtcblxuICAgICAgICAvLyAxMTExMTEgMTEyMjIyIDIyMjIzMyAzMzMzMzNcbiAgICAgICAgZTEgPSBvMSA+PiAyO1xuICAgICAgICBlMiA9ICgobzEgJiAweDMpIDw8IDQpIHwgKG8yID4+IDQpO1xuICAgICAgICBlMyA9ICgobzIgJiAweGYpIDw8IDIpIHwgKG8zID4+IDYpO1xuICAgICAgICBlNCA9IG8zICYgMHgzZjtcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IGlucHV0Lmxlbmd0aCArIDIpIHtcbiAgICAgICAgICBlMyA9IDY0OyBlNCA9IDY0O1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBvc2l0aW9uID09PSBpbnB1dC5sZW5ndGggKyAxKSB7XG4gICAgICAgICAgZTQgPSA2NDtcbiAgICAgICAgfVxuXG4gICAgICAgIG91dC5wdXNoKEI2NF9BTFBIQUJFVC5jaGFyQXQoZTEpLFxuICAgICAgICAgICAgICAgICBCNjRfQUxQSEFCRVQuY2hhckF0KGUyKSxcbiAgICAgICAgICAgICAgICAgQjY0X0FMUEhBQkVULmNoYXJBdChlMyksXG4gICAgICAgICAgICAgICAgIEI2NF9BTFBIQUJFVC5jaGFyQXQoZTQpKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIG91dC5qb2luKCcnKTtcbiAgICB9O1xuICB9KHdpbmRvdykpO1xuXG4gIC8vaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vamltZWgvMzMyMzU3XG4gIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eSl7XG4gICAgICAvKmpzaGludCAtVzAwMSwgLVcxMDMgKi9cbiAgICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkgPSBmdW5jdGlvbihwcm9wKSB7XG4gICAgICB2YXIgcHJvdG8gPSB0aGlzLl9fcHJvdG9fXyB8fCB0aGlzLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICAgIHJldHVybiAocHJvcCBpbiB0aGlzKSAmJiAoIShwcm9wIGluIHByb3RvKSB8fCBwcm90b1twcm9wXSAhPT0gdGhpc1twcm9wXSk7XG4gICAgfTtcbiAgICAgIC8qanNoaW50ICtXMDAxLCArVzEwMyAqL1xuICB9XG5cbiAgLy8gQGxpY2Vuc2UgaHR0cDovL29wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL01JVFxuICAvLyBjb3B5cmlnaHQgUGF1bCBJcmlzaCAyMDE1XG5cblxuICAvLyBEYXRlLm5vdygpIGlzIHN1cHBvcnRlZCBldmVyeXdoZXJlIGV4Y2VwdCBJRTguIEZvciBJRTggd2UgdXNlIHRoZSBEYXRlLm5vdyBwb2x5ZmlsbFxuICAvLyAgIGdpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvYmxvYi9tYXN0ZXIvcG9seWZpbGxzL0RhdGUubm93L3BvbHlmaWxsLmpzXG4gIC8vIGFzIFNhZmFyaSA2IGRvZXNuJ3QgaGF2ZSBzdXBwb3J0IGZvciBOYXZpZ2F0aW9uVGltaW5nLCB3ZSB1c2UgYSBEYXRlLm5vdygpIHRpbWVzdGFtcCBmb3IgcmVsYXRpdmUgdmFsdWVzXG5cbiAgLy8gaWYgeW91IHdhbnQgdmFsdWVzIHNpbWlsYXIgdG8gd2hhdCB5b3UnZCBnZXQgd2l0aCByZWFsIHBlcmYubm93LCBwbGFjZSB0aGlzIHRvd2FyZHMgdGhlIGhlYWQgb2YgdGhlIHBhZ2VcbiAgLy8gYnV0IGluIHJlYWxpdHksIHlvdSdyZSBqdXN0IGdldHRpbmcgdGhlIGRlbHRhIGJldHdlZW4gbm93KCkgY2FsbHMsIHNvIGl0J3Mgbm90IHRlcnJpYmx5IGltcG9ydGFudCB3aGVyZSBpdCdzIHBsYWNlZFxuXG5cbiAgKGZ1bmN0aW9uKCl7XG5cbiAgICBpZiAoJ3BlcmZvcm1hbmNlJyBpbiB3aW5kb3cgPT09IGZhbHNlKSB7XG4gICAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZSA9IHt9O1xuICAgIH1cbiAgICBcbiAgICBEYXRlLm5vdyA9IChEYXRlLm5vdyB8fCBmdW5jdGlvbiAoKSB7ICAvLyB0aGFua3MgSUU4XG4gICAgICByZXR1cm4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfSk7XG5cbiAgICBpZiAoJ25vdycgaW4gd2luZG93LnBlcmZvcm1hbmNlID09PSBmYWxzZSl7XG4gICAgICBcbiAgICAgIHZhciBub3dPZmZzZXQgPSBEYXRlLm5vdygpO1xuICAgICAgXG4gICAgICBpZiAocGVyZm9ybWFuY2UudGltaW5nICYmIHBlcmZvcm1hbmNlLnRpbWluZy5uYXZpZ2F0aW9uU3RhcnQpe1xuICAgICAgICBub3dPZmZzZXQgPSBwZXJmb3JtYW5jZS50aW1pbmcubmF2aWdhdGlvblN0YXJ0O1xuICAgICAgfVxuXG4gICAgICB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID0gZnVuY3Rpb24gbm93KCl7XG4gICAgICAgIHJldHVybiBEYXRlLm5vdygpIC0gbm93T2Zmc2V0O1xuICAgICAgfTtcbiAgICB9XG5cbiAgfSkoKTtcblxuICAvL3JlcXVlc3RBbmltYXRpb25GcmFtZSBwb2x5ZmlsbCBmb3Igb2xkZXIgRmlyZWZveC9DaHJvbWUgdmVyc2lvbnNcbiAgaWYgKCF3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgaWYgKHdpbmRvdy53ZWJraXRSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgJiYgd2luZG93LndlYmtpdENhbmNlbEFuaW1hdGlvbkZyYW1lKSB7XG4gICAgLy9odHRwczovL2dpdGh1Yi5jb20vRmluYW5jaWFsLVRpbWVzL3BvbHlmaWxsLXNlcnZpY2UvYmxvYi9tYXN0ZXIvcG9seWZpbGxzL3JlcXVlc3RBbmltYXRpb25GcmFtZS9wb2x5ZmlsbC13ZWJraXQuanNcbiAgICAoZnVuY3Rpb24gKGdsb2JhbCkge1xuICAgICAgZ2xvYmFsLnJlcXVlc3RBbmltYXRpb25GcmFtZSA9IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gd2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBjYWxsYmFjayhnbG9iYWwucGVyZm9ybWFuY2Uubm93KCkpO1xuICAgICAgICB9KTtcbiAgICAgIH07XG5cbiAgICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbC53ZWJraXRDYW5jZWxBbmltYXRpb25GcmFtZTtcbiAgICB9KHdpbmRvdykpO1xuICAgIH0gZWxzZSBpZiAod2luZG93Lm1velJlcXVlc3RBbmltYXRpb25GcmFtZSAmJiB3aW5kb3cubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgIC8vaHR0cHM6Ly9naXRodWIuY29tL0ZpbmFuY2lhbC1UaW1lcy9wb2x5ZmlsbC1zZXJ2aWNlL2Jsb2IvbWFzdGVyL3BvbHlmaWxscy9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUvcG9seWZpbGwtbW96LmpzXG4gICAgKGZ1bmN0aW9uIChnbG9iYWwpIHtcbiAgICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUgPSBmdW5jdGlvbiAoY2FsbGJhY2spIHtcbiAgICAgICAgcmV0dXJuIG1velJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgY2FsbGJhY2soZ2xvYmFsLnBlcmZvcm1hbmNlLm5vdygpKTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuXG4gICAgICBnbG9iYWwuY2FuY2VsQW5pbWF0aW9uRnJhbWUgPSBnbG9iYWwubW96Q2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfSh3aW5kb3cpKTtcbiAgICB9IGVsc2Uge1xuICAgIChmdW5jdGlvbiAoZ2xvYmFsKSB7XG4gICAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG4gICAgICAgIHJldHVybiBnbG9iYWwuc2V0VGltZW91dChjYWxsYmFjaywgMTAwMCAvIDYwKTtcbiAgICAgIH07XG5cbiAgICAgIGdsb2JhbC5jYW5jZWxBbmltYXRpb25GcmFtZSA9IGdsb2JhbC5jbGVhclRpbWVvdXQ7XG4gICAgfSkod2luZG93KTtcbiAgICB9XG4gIH1cbn0pKHRoaXMpO1xuXG4oZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuICBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG4gICAgbW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG4gIGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuICAgIGRlZmluZShbXSwgZmFjdG9yeSk7XG4gIGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuICAgIGV4cG9ydHNbXCJIb2xkZXJcIl0gPSBmYWN0b3J5KCk7XG4gIGVsc2VcbiAgICByb290W1wiSG9sZGVyXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gLyoqKioqKi8gKGZ1bmN0aW9uKG1vZHVsZXMpIHsgLy8gd2VicGFja0Jvb3RzdHJhcFxuLyoqKioqKi8gIC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovICB2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4vKioqKioqLyAgLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbi8qKioqKiovICBmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbi8qKioqKiovICAgIC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuLyoqKioqKi8gICAgaWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4vKioqKioqLyAgICAgIHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4vKioqKioqLyAgICAvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gICAgdmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuLyoqKioqKi8gICAgICBleHBvcnRzOiB7fSxcbi8qKioqKiovICAgICAgaWQ6IG1vZHVsZUlkLFxuLyoqKioqKi8gICAgICBsb2FkZWQ6IGZhbHNlXG4vKioqKioqLyAgICB9O1xuXG4vKioqKioqLyAgICAvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovICAgIG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4vKioqKioqLyAgICAvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyAgICBtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuLyoqKioqKi8gICAgLy8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovICB9XG5cblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuLyoqKioqKi8gIC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuLyoqKioqKi8gIC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyAgX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuLyoqKioqKi8gIC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLyoqKioqKi8gIHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuLyoqKioqKi8gfSlcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyAoW1xuLyogMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4gIC8qXG4gIEhvbGRlci5qcyAtIGNsaWVudCBzaWRlIGltYWdlIHBsYWNlaG9sZGVyc1xuICAoYykgMjAxMi0yMDE1IEl2YW4gTWFsb3BpbnNreSAtIGh0dHA6Ly9pbXNreS5jb1xuICAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuXG4vKioqLyB9KSxcbi8qIDEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuICAvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LypcbiAgSG9sZGVyLmpzIC0gY2xpZW50IHNpZGUgaW1hZ2UgcGxhY2Vob2xkZXJzXG4gIChjKSAyMDEyLTIwMTYgSXZhbiBNYWxvcGluc2t5IC0gaHR0cDovL2ltc2t5LmNvXG4gICovXG5cbiAgLy9MaWJyYXJpZXMgYW5kIGZ1bmN0aW9uc1xuICB2YXIgb25Eb21SZWFkeSA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG4gIHZhciBxdWVyeXN0cmluZyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbiAgdmFyIFNjZW5lR3JhcGggPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xuICB2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuICB2YXIgU1ZHID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbiAgdmFyIERPTSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG4gIHZhciBDb2xvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xuICB2YXIgY29uc3RhbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbiAgdmFyIHN2Z1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMik7XG4gIHZhciBzZ0NhbnZhc1JlbmRlcmVyID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNSk7XG5cbiAgdmFyIGV4dGVuZCA9IHV0aWxzLmV4dGVuZDtcbiAgdmFyIGRpbWVuc2lvbkNoZWNrID0gdXRpbHMuZGltZW5zaW9uQ2hlY2s7XG5cbiAgLy9Db25zdGFudHMgYW5kIGRlZmluaXRpb25zXG4gIHZhciBTVkdfTlMgPSBjb25zdGFudHMuc3ZnX25zO1xuXG4gIHZhciBIb2xkZXIgPSB7XG4gICAgICB2ZXJzaW9uOiBjb25zdGFudHMudmVyc2lvbixcblxuICAgICAgLyoqXG4gICAgICAgKiBBZGRzIGEgdGhlbWUgdG8gZGVmYXVsdCBzZXR0aW5nc1xuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIFRoZW1lIG5hbWVcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB0aGVtZSBUaGVtZSBvYmplY3QsIHdpdGggZm9yZWdyb3VuZCwgYmFja2dyb3VuZCwgc2l6ZSwgZm9udCwgYW5kIGZvbnR3ZWlnaHQgcHJvcGVydGllcy5cbiAgICAgICAqL1xuICAgICAgYWRkVGhlbWU6IGZ1bmN0aW9uKG5hbWUsIHRoZW1lKSB7XG4gICAgICAgICAgbmFtZSAhPSBudWxsICYmIHRoZW1lICE9IG51bGwgJiYgKEFwcC5zZXR0aW5ncy50aGVtZXNbbmFtZV0gPSB0aGVtZSk7XG4gICAgICAgICAgZGVsZXRlIEFwcC52YXJzLmNhY2hlLnRoZW1lS2V5cztcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQXBwZW5kcyBhIHBsYWNlaG9sZGVyIHRvIGFuIGVsZW1lbnRcbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge3N0cmluZ30gc3JjIFBsYWNlaG9sZGVyIFVSTCBzdHJpbmdcbiAgICAgICAqIEBwYXJhbSBlbCBBIHNlbGVjdG9yIG9yIGEgcmVmZXJlbmNlIHRvIGEgRE9NIG5vZGVcbiAgICAgICAqL1xuICAgICAgYWRkSW1hZ2U6IGZ1bmN0aW9uKHNyYywgZWwpIHtcbiAgICAgICAgICAvL3RvZG86IHVzZSBqcXVlcnkgZmFsbGJhY2sgaWYgYXZhaWxhYmxlIGZvciBhbGwgUVNBIHJlZmVyZW5jZXNcbiAgICAgICAgICB2YXIgbm9kZXMgPSBET00uZ2V0Tm9kZUFycmF5KGVsKTtcbiAgICAgICAgICBub2Rlcy5mb3JFYWNoKGZ1bmN0aW9uIChub2RlKSB7XG4gICAgICAgICAgICAgIHZhciBpbWcgPSBET00ubmV3RWwoJ2ltZycpO1xuICAgICAgICAgICAgICB2YXIgZG9tUHJvcHMgPSB7fTtcbiAgICAgICAgICAgICAgZG9tUHJvcHNbQXBwLnNldHVwLmRhdGFBdHRyXSA9IHNyYztcbiAgICAgICAgICAgICAgRE9NLnNldEF0dHIoaW1nLCBkb21Qcm9wcyk7XG4gICAgICAgICAgICAgIG5vZGUuYXBwZW5kQ2hpbGQoaW1nKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0cyB3aGV0aGVyIG9yIG5vdCBhbiBpbWFnZSBpcyB1cGRhdGVkIG9uIHJlc2l6ZS5cbiAgICAgICAqIElmIGFuIGltYWdlIGlzIHNldCB0byBiZSB1cGRhdGVkLCBpdCBpcyBpbW1lZGlhdGVseSByZW5kZXJlZC5cbiAgICAgICAqXG4gICAgICAgKiBAcGFyYW0ge09iamVjdH0gZWwgSW1hZ2UgRE9NIGVsZW1lbnRcbiAgICAgICAqIEBwYXJhbSB7Qm9vbGVhbn0gdmFsdWUgUmVzaXphYmxlIHVwZGF0ZSBmbGFnIHZhbHVlXG4gICAgICAgKi9cbiAgICAgIHNldFJlc2l6ZVVwZGF0ZTogZnVuY3Rpb24oZWwsIHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGVsLmhvbGRlckRhdGEpIHtcbiAgICAgICAgICAgICAgZWwuaG9sZGVyRGF0YS5yZXNpemVVcGRhdGUgPSAhIXZhbHVlO1xuICAgICAgICAgICAgICBpZiAoZWwuaG9sZGVyRGF0YS5yZXNpemVVcGRhdGUpIHtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc2l6YWJsZUVsZW1lbnRzKGVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUnVucyBIb2xkZXIgd2l0aCBvcHRpb25zLiBCeSBkZWZhdWx0IHJ1bnMgSG9sZGVyIG9uIGFsbCBpbWFnZXMgd2l0aCBcImhvbGRlci5qc1wiIGluIHRoZWlyIHNvdXJjZSBhdHRyaWJ1dGVzLlxuICAgICAgICpcbiAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSB1c2VyT3B0aW9ucyBPcHRpb25zIG9iamVjdCwgY2FuIGNvbnRhaW4gZG9tYWluLCB0aGVtZXMsIGltYWdlcywgYW5kIGJnbm9kZXMgcHJvcGVydGllc1xuICAgICAgICovXG4gICAgICBydW46IGZ1bmN0aW9uKHVzZXJPcHRpb25zKSB7XG4gICAgICAgICAgLy90b2RvOiBzcGxpdCBwcm9jZXNzaW5nIGludG8gc2VwYXJhdGUgcXVldWVzXG4gICAgICAgICAgdXNlck9wdGlvbnMgPSB1c2VyT3B0aW9ucyB8fCB7fTtcbiAgICAgICAgICB2YXIgZW5naW5lU2V0dGluZ3MgPSB7fTtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IGV4dGVuZChBcHAuc2V0dGluZ3MsIHVzZXJPcHRpb25zKTtcblxuICAgICAgICAgIEFwcC52YXJzLnByZWVtcHRlZCA9IHRydWU7XG4gICAgICAgICAgQXBwLnZhcnMuZGF0YUF0dHIgPSBvcHRpb25zLmRhdGFBdHRyIHx8IEFwcC5zZXR1cC5kYXRhQXR0cjtcblxuICAgICAgICAgIGVuZ2luZVNldHRpbmdzLnJlbmRlcmVyID0gb3B0aW9ucy5yZW5kZXJlciA/IG9wdGlvbnMucmVuZGVyZXIgOiBBcHAuc2V0dXAucmVuZGVyZXI7XG4gICAgICAgICAgaWYgKEFwcC5zZXR1cC5yZW5kZXJlcnMuam9pbignLCcpLmluZGV4T2YoZW5naW5lU2V0dGluZ3MucmVuZGVyZXIpID09PSAtMSkge1xuICAgICAgICAgICAgICBlbmdpbmVTZXR0aW5ncy5yZW5kZXJlciA9IEFwcC5zZXR1cC5zdXBwb3J0c1NWRyA/ICdzdmcnIDogKEFwcC5zZXR1cC5zdXBwb3J0c0NhbnZhcyA/ICdjYW52YXMnIDogJ2h0bWwnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgaW1hZ2VzID0gRE9NLmdldE5vZGVBcnJheShvcHRpb25zLmltYWdlcyk7XG4gICAgICAgICAgdmFyIGJnbm9kZXMgPSBET00uZ2V0Tm9kZUFycmF5KG9wdGlvbnMuYmdub2Rlcyk7XG4gICAgICAgICAgdmFyIHN0eWxlbm9kZXMgPSBET00uZ2V0Tm9kZUFycmF5KG9wdGlvbnMuc3R5bGVub2Rlcyk7XG4gICAgICAgICAgdmFyIG9iamVjdHMgPSBET00uZ2V0Tm9kZUFycmF5KG9wdGlvbnMub2JqZWN0cyk7XG5cbiAgICAgICAgICBlbmdpbmVTZXR0aW5ncy5zdHlsZXNoZWV0cyA9IFtdO1xuICAgICAgICAgIGVuZ2luZVNldHRpbmdzLnN2Z1hNTFN0eWxlc2hlZXQgPSB0cnVlO1xuICAgICAgICAgIGVuZ2luZVNldHRpbmdzLm5vRm9udEZhbGxiYWNrID0gISFvcHRpb25zLm5vRm9udEZhbGxiYWNrO1xuICAgICAgICAgIGVuZ2luZVNldHRpbmdzLm5vQmFja2dyb3VuZFNpemUgPSAhIW9wdGlvbnMubm9CYWNrZ3JvdW5kU2l6ZTtcblxuICAgICAgICAgIHN0eWxlbm9kZXMuZm9yRWFjaChmdW5jdGlvbiAoc3R5bGVOb2RlKSB7XG4gICAgICAgICAgICAgIGlmIChzdHlsZU5vZGUuYXR0cmlidXRlcy5yZWwgJiYgc3R5bGVOb2RlLmF0dHJpYnV0ZXMuaHJlZiAmJiBzdHlsZU5vZGUuYXR0cmlidXRlcy5yZWwudmFsdWUgPT0gJ3N0eWxlc2hlZXQnKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgaHJlZiA9IHN0eWxlTm9kZS5hdHRyaWJ1dGVzLmhyZWYudmFsdWU7XG4gICAgICAgICAgICAgICAgICAvL3RvZG86IHdyaXRlIGlzb21vcnBoaWMgcmVsYXRpdmUtdG8tYWJzb2x1dGUgVVJMIGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgICB2YXIgcHJveHlMaW5rID0gRE9NLm5ld0VsKCdhJyk7XG4gICAgICAgICAgICAgICAgICBwcm94eUxpbmsuaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICAgICAgICB2YXIgc3R5bGVzaGVldFVSTCA9IHByb3h5TGluay5wcm90b2NvbCArICcvLycgKyBwcm94eUxpbmsuaG9zdCArIHByb3h5TGluay5wYXRobmFtZSArIHByb3h5TGluay5zZWFyY2g7XG4gICAgICAgICAgICAgICAgICBlbmdpbmVTZXR0aW5ncy5zdHlsZXNoZWV0cy5wdXNoKHN0eWxlc2hlZXRVUkwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBiZ25vZGVzLmZvckVhY2goZnVuY3Rpb24gKGJnTm9kZSkge1xuICAgICAgICAgICAgICAvL1NraXAgcHJvY2Vzc2luZyBiYWNrZ3JvdW5kIG5vZGVzIGlmIGdldENvbXB1dGVkU3R5bGUgaXMgdW5hdmFpbGFibGUsIHNpbmNlIG9ubHkgbW9kZXJuIGJyb3dzZXJzIHdvdWxkIGJlIGFibGUgdG8gdXNlIGNhbnZhcyBvciBTVkcgdG8gcmVuZGVyIHRvIGJhY2tncm91bmRcbiAgICAgICAgICAgICAgaWYgKCFnbG9iYWwuZ2V0Q29tcHV0ZWRTdHlsZSkgcmV0dXJuO1xuICAgICAgICAgICAgICB2YXIgYmFja2dyb3VuZEltYWdlID0gZ2xvYmFsLmdldENvbXB1dGVkU3R5bGUoYmdOb2RlLCBudWxsKS5nZXRQcm9wZXJ0eVZhbHVlKCdiYWNrZ3JvdW5kLWltYWdlJyk7XG4gICAgICAgICAgICAgIHZhciBkYXRhQmFja2dyb3VuZEltYWdlID0gYmdOb2RlLmdldEF0dHJpYnV0ZSgnZGF0YS1iYWNrZ3JvdW5kLXNyYycpO1xuICAgICAgICAgICAgICB2YXIgcmF3VVJMID0gZGF0YUJhY2tncm91bmRJbWFnZSB8fCBiYWNrZ3JvdW5kSW1hZ2U7XG5cbiAgICAgICAgICAgICAgdmFyIGhvbGRlclVSTCA9IG51bGw7XG4gICAgICAgICAgICAgIHZhciBob2xkZXJTdHJpbmcgPSBvcHRpb25zLmRvbWFpbiArICcvJztcbiAgICAgICAgICAgICAgdmFyIGhvbGRlclN0cmluZ0luZGV4ID0gcmF3VVJMLmluZGV4T2YoaG9sZGVyU3RyaW5nKTtcblxuICAgICAgICAgICAgICBpZiAoaG9sZGVyU3RyaW5nSW5kZXggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgIGhvbGRlclVSTCA9IHJhd1VSTDtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChob2xkZXJTdHJpbmdJbmRleCA9PT0gMSAmJiByYXdVUkxbMF0gPT09ICc/Jykge1xuICAgICAgICAgICAgICAgICAgaG9sZGVyVVJMID0gcmF3VVJMLnNsaWNlKDEpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgdmFyIGZyYWdtZW50ID0gcmF3VVJMLnN1YnN0cihob2xkZXJTdHJpbmdJbmRleCkubWF0Y2goLyhbXlxcXCJdKilcIj9cXCkvKTtcbiAgICAgICAgICAgICAgICAgIGlmIChmcmFnbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgIGhvbGRlclVSTCA9IGZyYWdtZW50WzFdO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyYXdVUkwuaW5kZXhPZigndXJsKCcpID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ0hvbGRlcjogdW5hYmxlIHRvIHBhcnNlIGJhY2tncm91bmQgVVJMOiAnICsgcmF3VVJMO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGhvbGRlclVSTCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGhvbGRlckZsYWdzID0gcGFyc2VVUkwoaG9sZGVyVVJMLCBvcHRpb25zKTtcbiAgICAgICAgICAgICAgICAgIGlmIChob2xkZXJGbGFncykge1xuICAgICAgICAgICAgICAgICAgICAgIHByZXBhcmVET01FbGVtZW50KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kZTogJ2JhY2tncm91bmQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBlbDogYmdOb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnczogaG9sZGVyRmxhZ3MsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGVuZ2luZVNldHRpbmdzOiBlbmdpbmVTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBvYmplY3RzLmZvckVhY2goZnVuY3Rpb24gKG9iamVjdCkge1xuICAgICAgICAgICAgICB2YXIgb2JqZWN0QXR0ciA9IHt9O1xuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBvYmplY3RBdHRyLmRhdGEgPSBvYmplY3QuZ2V0QXR0cmlidXRlKCdkYXRhJyk7XG4gICAgICAgICAgICAgICAgICBvYmplY3RBdHRyLmRhdGFTcmMgPSBvYmplY3QuZ2V0QXR0cmlidXRlKEFwcC52YXJzLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICB2YXIgb2JqZWN0SGFzU3JjVVJMID0gb2JqZWN0QXR0ci5kYXRhICE9IG51bGwgJiYgb2JqZWN0QXR0ci5kYXRhLmluZGV4T2Yob3B0aW9ucy5kb21haW4pID09PSAwO1xuICAgICAgICAgICAgICB2YXIgb2JqZWN0SGFzRGF0YVNyY1VSTCA9IG9iamVjdEF0dHIuZGF0YVNyYyAhPSBudWxsICYmIG9iamVjdEF0dHIuZGF0YVNyYy5pbmRleE9mKG9wdGlvbnMuZG9tYWluKSA9PT0gMDtcblxuICAgICAgICAgICAgICBpZiAob2JqZWN0SGFzU3JjVVJMKSB7XG4gICAgICAgICAgICAgICAgICBwcmVwYXJlSW1hZ2VFbGVtZW50KG9wdGlvbnMsIGVuZ2luZVNldHRpbmdzLCBvYmplY3RBdHRyLmRhdGEsIG9iamVjdCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqZWN0SGFzRGF0YVNyY1VSTCkge1xuICAgICAgICAgICAgICAgICAgcHJlcGFyZUltYWdlRWxlbWVudChvcHRpb25zLCBlbmdpbmVTZXR0aW5ncywgb2JqZWN0QXR0ci5kYXRhU3JjLCBvYmplY3QpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBpbWFnZXMuZm9yRWFjaChmdW5jdGlvbiAoaW1hZ2UpIHtcbiAgICAgICAgICAgICAgdmFyIGltYWdlQXR0ciA9IHt9O1xuXG4gICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICBpbWFnZUF0dHIuc3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgICAgICAgICAgIGltYWdlQXR0ci5kYXRhU3JjID0gaW1hZ2UuZ2V0QXR0cmlidXRlKEFwcC52YXJzLmRhdGFBdHRyKTtcbiAgICAgICAgICAgICAgICAgIGltYWdlQXR0ci5yZW5kZXJlZCA9IGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1ob2xkZXItcmVuZGVyZWQnKTtcbiAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge31cblxuICAgICAgICAgICAgICB2YXIgaW1hZ2VIYXNTcmMgPSBpbWFnZUF0dHIuc3JjICE9IG51bGw7XG4gICAgICAgICAgICAgIHZhciBpbWFnZUhhc0RhdGFTcmNVUkwgPSBpbWFnZUF0dHIuZGF0YVNyYyAhPSBudWxsICYmIGltYWdlQXR0ci5kYXRhU3JjLmluZGV4T2Yob3B0aW9ucy5kb21haW4pID09PSAwO1xuICAgICAgICAgICAgICB2YXIgaW1hZ2VSZW5kZXJlZCA9IGltYWdlQXR0ci5yZW5kZXJlZCAhPSBudWxsICYmIGltYWdlQXR0ci5yZW5kZXJlZCA9PSAndHJ1ZSc7XG5cbiAgICAgICAgICAgICAgaWYgKGltYWdlSGFzU3JjKSB7XG4gICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VBdHRyLnNyYy5pbmRleE9mKG9wdGlvbnMuZG9tYWluKSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHByZXBhcmVJbWFnZUVsZW1lbnQob3B0aW9ucywgZW5naW5lU2V0dGluZ3MsIGltYWdlQXR0ci5zcmMsIGltYWdlKTtcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW1hZ2VIYXNEYXRhU3JjVVJMKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy9JbWFnZSBoYXMgYSB2YWxpZCBkYXRhLXNyYyBhbmQgYW4gaW52YWxpZCBzcmNcbiAgICAgICAgICAgICAgICAgICAgICBpZiAoaW1hZ2VSZW5kZXJlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvL0lmIHRoZSBwbGFjZWhvbGRlciBoYXMgYWxyZWFkeSBiZWVuIHJlbmRlciwgcmUtcmVuZGVyIGl0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHByZXBhcmVJbWFnZUVsZW1lbnQob3B0aW9ucywgZW5naW5lU2V0dGluZ3MsIGltYWdlQXR0ci5kYXRhU3JjLCBpbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLy9JZiB0aGUgcGxhY2Vob2xkZXIgaGFzIG5vdCBiZWVuIHJlbmRlcmVkLCBjaGVjayBpZiB0aGUgaW1hZ2UgZXhpc3RzIGFuZCByZW5kZXIgYSBmYWxsYmFjayBpZiBpdCBkb2Vzbid0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIChmdW5jdGlvbihzcmMsIG9wdGlvbnMsIGVuZ2luZVNldHRpbmdzLCBkYXRhU3JjLCBpbWFnZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXRpbHMuaW1hZ2VFeGlzdHMoc3JjLCBmdW5jdGlvbihleGlzdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcmVwYXJlSW1hZ2VFbGVtZW50KG9wdGlvbnMsIGVuZ2luZVNldHRpbmdzLCBkYXRhU3JjLCBpbWFnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pKGltYWdlQXR0ci5zcmMsIG9wdGlvbnMsIGVuZ2luZVNldHRpbmdzLCBpbWFnZUF0dHIuZGF0YVNyYywgaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbWFnZUhhc0RhdGFTcmNVUkwpIHtcbiAgICAgICAgICAgICAgICAgIHByZXBhcmVJbWFnZUVsZW1lbnQob3B0aW9ucywgZW5naW5lU2V0dGluZ3MsIGltYWdlQXR0ci5kYXRhU3JjLCBpbWFnZSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICB9O1xuXG4gIHZhciBBcHAgPSB7XG4gICAgICBzZXR0aW5nczoge1xuICAgICAgICAgIGRvbWFpbjogJ2hvbGRlci5qcycsXG4gICAgICAgICAgaW1hZ2VzOiAnaW1nJyxcbiAgICAgICAgICBvYmplY3RzOiAnb2JqZWN0JyxcbiAgICAgICAgICBiZ25vZGVzOiAnYm9keSAuaG9sZGVyanMnLFxuICAgICAgICAgIHN0eWxlbm9kZXM6ICdoZWFkIGxpbmsuaG9sZGVyanMnLFxuICAgICAgICAgIHRoZW1lczoge1xuICAgICAgICAgICAgICAnZ3JheSc6IHtcbiAgICAgICAgICAgICAgICAgIGJnOiAnI0VFRUVFRScsXG4gICAgICAgICAgICAgICAgICBmZzogJyNBQUFBQUEnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdzb2NpYWwnOiB7XG4gICAgICAgICAgICAgICAgICBiZzogJyMzYTVhOTcnLFxuICAgICAgICAgICAgICAgICAgZmc6ICcjRkZGRkZGJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAnaW5kdXN0cmlhbCc6IHtcbiAgICAgICAgICAgICAgICAgIGJnOiAnIzQzNEE1MicsXG4gICAgICAgICAgICAgICAgICBmZzogJyNDMkYyMDAnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdza3knOiB7XG4gICAgICAgICAgICAgICAgICBiZzogJyMwRDhGREInLFxuICAgICAgICAgICAgICAgICAgZmc6ICcjRkZGRkZGJ1xuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAndmluZSc6IHtcbiAgICAgICAgICAgICAgICAgIGJnOiAnIzM5REJBQycsXG4gICAgICAgICAgICAgICAgICBmZzogJyMxRTI5MkMnXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICdsYXZhJzoge1xuICAgICAgICAgICAgICAgICAgYmc6ICcjRjg1OTFBJyxcbiAgICAgICAgICAgICAgICAgIGZnOiAnIzFDMjg0NidcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkZWZhdWx0czoge1xuICAgICAgICAgIHNpemU6IDEwLFxuICAgICAgICAgIHVuaXRzOiAncHQnLFxuICAgICAgICAgIHNjYWxlOiAxIC8gMTZcbiAgICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogUHJvY2Vzc2VzIHByb3ZpZGVkIHNvdXJjZSBhdHRyaWJ1dGUgYW5kIHNldHMgdXAgdGhlIGFwcHJvcHJpYXRlIHJlbmRlcmluZyB3b3JrZmxvd1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gb3B0aW9ucyBJbnN0YW5jZSBvcHRpb25zIGZyb20gSG9sZGVyLnJ1blxuICAgKiBAcGFyYW0gcmVuZGVyU2V0dGluZ3MgSW5zdGFuY2UgY29uZmlndXJhdGlvblxuICAgKiBAcGFyYW0gc3JjIEltYWdlIFVSTFxuICAgKiBAcGFyYW0gZWwgSW1hZ2UgRE9NIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHByZXBhcmVJbWFnZUVsZW1lbnQob3B0aW9ucywgZW5naW5lU2V0dGluZ3MsIHNyYywgZWwpIHtcbiAgICAgIHZhciBob2xkZXJGbGFncyA9IHBhcnNlVVJMKHNyYy5zdWJzdHIoc3JjLmxhc3RJbmRleE9mKG9wdGlvbnMuZG9tYWluKSksIG9wdGlvbnMpO1xuICAgICAgaWYgKGhvbGRlckZsYWdzKSB7XG4gICAgICAgICAgcHJlcGFyZURPTUVsZW1lbnQoe1xuICAgICAgICAgICAgICBtb2RlOiBudWxsLFxuICAgICAgICAgICAgICBlbDogZWwsXG4gICAgICAgICAgICAgIGZsYWdzOiBob2xkZXJGbGFncyxcbiAgICAgICAgICAgICAgZW5naW5lU2V0dGluZ3M6IGVuZ2luZVNldHRpbmdzXG4gICAgICAgICAgfSk7XG4gICAgICB9XG4gIH1cblxuICAvKipcbiAgICogUHJvY2Vzc2VzIGEgSG9sZGVyIFVSTCBhbmQgZXh0cmFjdHMgY29uZmlndXJhdGlvbiBmcm9tIHF1ZXJ5IHN0cmluZ1xuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gdXJsIFVSTFxuICAgKiBAcGFyYW0gaW5zdGFuY2VPcHRpb25zIEluc3RhbmNlIG9wdGlvbnMgZnJvbSBIb2xkZXIucnVuXG4gICAqL1xuICBmdW5jdGlvbiBwYXJzZVVSTCh1cmwsIGluc3RhbmNlT3B0aW9ucykge1xuICAgICAgdmFyIGhvbGRlciA9IHtcbiAgICAgICAgICB0aGVtZTogZXh0ZW5kKEFwcC5zZXR0aW5ncy50aGVtZXMuZ3JheSwgbnVsbCksXG4gICAgICAgICAgc3R5bGVzaGVldHM6IGluc3RhbmNlT3B0aW9ucy5zdHlsZXNoZWV0cyxcbiAgICAgICAgICBpbnN0YW5jZU9wdGlvbnM6IGluc3RhbmNlT3B0aW9uc1xuICAgICAgfTtcblxuICAgICAgdmFyIGZpcnN0UXVlc3Rpb25NYXJrID0gdXJsLmluZGV4T2YoJz8nKTtcbiAgICAgIHZhciBwYXJ0cyA9IFt1cmxdO1xuXG4gICAgICBpZiAoZmlyc3RRdWVzdGlvbk1hcmsgIT09IC0xKSB7XG4gICAgICAgICAgcGFydHMgPSBbdXJsLnNsaWNlKDAsIGZpcnN0UXVlc3Rpb25NYXJrKSwgdXJsLnNsaWNlKGZpcnN0UXVlc3Rpb25NYXJrICsgMSldO1xuICAgICAgfVxuXG4gICAgICB2YXIgYmFzaWNzID0gcGFydHNbMF0uc3BsaXQoJy8nKTtcblxuICAgICAgaG9sZGVyLmhvbGRlclVSTCA9IHVybDtcblxuICAgICAgdmFyIGRpbWVuc2lvbnMgPSBiYXNpY3NbMV07XG4gICAgICB2YXIgZGltZW5zaW9uRGF0YSA9IGRpbWVuc2lvbnMubWF0Y2goLyhbXFxkXStwPyl4KFtcXGRdK3A/KS8pO1xuXG4gICAgICBpZiAoIWRpbWVuc2lvbkRhdGEpIHJldHVybiBmYWxzZTtcblxuICAgICAgaG9sZGVyLmZsdWlkID0gZGltZW5zaW9ucy5pbmRleE9mKCdwJykgIT09IC0xO1xuXG4gICAgICBob2xkZXIuZGltZW5zaW9ucyA9IHtcbiAgICAgICAgICB3aWR0aDogZGltZW5zaW9uRGF0YVsxXS5yZXBsYWNlKCdwJywgJyUnKSxcbiAgICAgICAgICBoZWlnaHQ6IGRpbWVuc2lvbkRhdGFbMl0ucmVwbGFjZSgncCcsICclJylcbiAgICAgIH07XG5cbiAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICB2YXIgb3B0aW9ucyA9IHF1ZXJ5c3RyaW5nLnBhcnNlKHBhcnRzWzFdKTtcblxuICAgICAgICAgIC8vIERpbWVuc2lvbnNcblxuICAgICAgICAgIGlmICh1dGlscy50cnV0aHkob3B0aW9ucy5yYXRpbykpIHtcbiAgICAgICAgICAgICAgaG9sZGVyLmZsdWlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgdmFyIHJhdGlvV2lkdGggPSBwYXJzZUZsb2F0KGhvbGRlci5kaW1lbnNpb25zLndpZHRoLnJlcGxhY2UoJyUnLCAnJykpO1xuICAgICAgICAgICAgICB2YXIgcmF0aW9IZWlnaHQgPSBwYXJzZUZsb2F0KGhvbGRlci5kaW1lbnNpb25zLmhlaWdodC5yZXBsYWNlKCclJywgJycpKTtcblxuICAgICAgICAgICAgICByYXRpb0hlaWdodCA9IE1hdGguZmxvb3IoMTAwICogKHJhdGlvSGVpZ2h0IC8gcmF0aW9XaWR0aCkpO1xuICAgICAgICAgICAgICByYXRpb1dpZHRoID0gMTAwO1xuXG4gICAgICAgICAgICAgIGhvbGRlci5kaW1lbnNpb25zLndpZHRoID0gcmF0aW9XaWR0aCArICclJztcbiAgICAgICAgICAgICAgaG9sZGVyLmRpbWVuc2lvbnMuaGVpZ2h0ID0gcmF0aW9IZWlnaHQgKyAnJSc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaG9sZGVyLmF1dG8gPSB1dGlscy50cnV0aHkob3B0aW9ucy5hdXRvKTtcblxuICAgICAgICAgIC8vIENvbG9yc1xuXG4gICAgICAgICAgaWYgKG9wdGlvbnMuYmcpIHtcbiAgICAgICAgICAgICAgaG9sZGVyLnRoZW1lLmJnID0gdXRpbHMucGFyc2VDb2xvcihvcHRpb25zLmJnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5mZykge1xuICAgICAgICAgICAgICBob2xkZXIudGhlbWUuZmcgPSB1dGlscy5wYXJzZUNvbG9yKG9wdGlvbnMuZmcpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vdG9kbzogYWRkIGF1dG9tYXRpYyBmb3JlZ3JvdW5kIHRvIHRoZW1lcyB3aXRob3V0IGZvcmVncm91bmRcbiAgICAgICAgICBpZiAob3B0aW9ucy5iZyAmJiAhb3B0aW9ucy5mZykge1xuICAgICAgICAgICAgICBob2xkZXIuYXV0b0ZnID0gdHJ1ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy50aGVtZSAmJiBob2xkZXIuaW5zdGFuY2VPcHRpb25zLnRoZW1lcy5oYXNPd25Qcm9wZXJ0eShvcHRpb25zLnRoZW1lKSkge1xuICAgICAgICAgICAgICBob2xkZXIudGhlbWUgPSBleHRlbmQoaG9sZGVyLmluc3RhbmNlT3B0aW9ucy50aGVtZXNbb3B0aW9ucy50aGVtZV0sIG51bGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIFRleHRcblxuICAgICAgICAgIGlmIChvcHRpb25zLnRleHQpIHtcbiAgICAgICAgICAgICAgaG9sZGVyLnRleHQgPSBvcHRpb25zLnRleHQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMudGV4dG1vZGUpIHtcbiAgICAgICAgICAgICAgaG9sZGVyLnRleHRtb2RlID0gb3B0aW9ucy50ZXh0bW9kZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5zaXplICYmIHBhcnNlRmxvYXQob3B0aW9ucy5zaXplKSkge1xuICAgICAgICAgICAgICBob2xkZXIuc2l6ZSA9IHBhcnNlRmxvYXQob3B0aW9ucy5zaXplKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAob3B0aW9ucy5mb250KSB7XG4gICAgICAgICAgICAgIGhvbGRlci5mb250ID0gb3B0aW9ucy5mb250O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChvcHRpb25zLmFsaWduKSB7XG4gICAgICAgICAgICAgIGhvbGRlci5hbGlnbiA9IG9wdGlvbnMuYWxpZ247XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKG9wdGlvbnMubGluZVdyYXApIHtcbiAgICAgICAgICAgICAgaG9sZGVyLmxpbmVXcmFwID0gb3B0aW9ucy5saW5lV3JhcDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob2xkZXIubm93cmFwID0gdXRpbHMudHJ1dGh5KG9wdGlvbnMubm93cmFwKTtcblxuICAgICAgICAgIC8vIE1pc2NlbGxhbmVvdXNcblxuICAgICAgICAgIGhvbGRlci5vdXRsaW5lID0gdXRpbHMudHJ1dGh5KG9wdGlvbnMub3V0bGluZSk7XG5cbiAgICAgICAgICBpZiAodXRpbHMudHJ1dGh5KG9wdGlvbnMucmFuZG9tKSkge1xuICAgICAgICAgICAgICBBcHAudmFycy5jYWNoZS50aGVtZUtleXMgPSBBcHAudmFycy5jYWNoZS50aGVtZUtleXMgfHwgT2JqZWN0LmtleXMoaG9sZGVyLmluc3RhbmNlT3B0aW9ucy50aGVtZXMpO1xuICAgICAgICAgICAgICB2YXIgX3RoZW1lID0gQXBwLnZhcnMuY2FjaGUudGhlbWVLZXlzWzAgfCBNYXRoLnJhbmRvbSgpICogQXBwLnZhcnMuY2FjaGUudGhlbWVLZXlzLmxlbmd0aF07XG4gICAgICAgICAgICAgIGhvbGRlci50aGVtZSA9IGV4dGVuZChob2xkZXIuaW5zdGFuY2VPcHRpb25zLnRoZW1lc1tfdGhlbWVdLCBudWxsKTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBob2xkZXI7XG4gIH1cblxuICAvKipcbiAgICogTW9kaWZpZXMgdGhlIERPTSB0byBmaXQgcGxhY2Vob2xkZXJzIGFuZCBzZXRzIHVwIHJlc2l6YWJsZSBpbWFnZSBjYWxsYmFja3MgKGZvciBmbHVpZCBhbmQgYXV0b21hdGljYWxseSBzaXplZCBwbGFjZWhvbGRlcnMpXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBzZXR0aW5ncyBET00gcHJlcCBzZXR0aW5nc1xuICAgKi9cbiAgZnVuY3Rpb24gcHJlcGFyZURPTUVsZW1lbnQocHJlcFNldHRpbmdzKSB7XG4gICAgICB2YXIgbW9kZSA9IHByZXBTZXR0aW5ncy5tb2RlO1xuICAgICAgdmFyIGVsID0gcHJlcFNldHRpbmdzLmVsO1xuICAgICAgdmFyIGZsYWdzID0gcHJlcFNldHRpbmdzLmZsYWdzO1xuICAgICAgdmFyIF9lbmdpbmVTZXR0aW5ncyA9IHByZXBTZXR0aW5ncy5lbmdpbmVTZXR0aW5ncztcbiAgICAgIHZhciBkaW1lbnNpb25zID0gZmxhZ3MuZGltZW5zaW9ucyxcbiAgICAgICAgICB0aGVtZSA9IGZsYWdzLnRoZW1lO1xuICAgICAgdmFyIGRpbWVuc2lvbnNDYXB0aW9uID0gZGltZW5zaW9ucy53aWR0aCArICd4JyArIGRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgbW9kZSA9IG1vZGUgPT0gbnVsbCA/IChmbGFncy5mbHVpZCA/ICdmbHVpZCcgOiAnaW1hZ2UnKSA6IG1vZGU7XG4gICAgICB2YXIgaG9sZGVyVGVtcGxhdGVSZSA9IC9ob2xkZXJfKFthLXpdKykvZztcbiAgICAgIHZhciBkaW1lbnNpb25zSW5UZXh0ID0gZmFsc2U7XG5cbiAgICAgIGlmIChmbGFncy50ZXh0ICE9IG51bGwpIHtcbiAgICAgICAgICB0aGVtZS50ZXh0ID0gZmxhZ3MudGV4dDtcblxuICAgICAgICAgIC8vPG9iamVjdD4gU1ZHIGVtYmVkZGluZyBkb2Vzbid0IHBhcnNlIFVuaWNvZGUgcHJvcGVybHlcbiAgICAgICAgICBpZiAoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgdmFyIHRleHRMaW5lcyA9IHRoZW1lLnRleHQuc3BsaXQoJ1xcXFxuJyk7XG4gICAgICAgICAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGV4dExpbmVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICB0ZXh0TGluZXNba10gPSB1dGlscy5lbmNvZGVIdG1sRW50aXR5KHRleHRMaW5lc1trXSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhlbWUudGV4dCA9IHRleHRMaW5lcy5qb2luKCdcXFxcbicpO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKHRoZW1lLnRleHQpIHtcbiAgICAgICAgICB2YXIgaG9sZGVyVGVtcGxhdGVNYXRjaGVzID0gdGhlbWUudGV4dC5tYXRjaChob2xkZXJUZW1wbGF0ZVJlKTtcblxuICAgICAgICAgIGlmIChob2xkZXJUZW1wbGF0ZU1hdGNoZXMgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgLy90b2RvOiBvcHRpbWl6ZSB0ZW1wbGF0ZSByZXBsYWNlbWVudFxuICAgICAgICAgICAgICBob2xkZXJUZW1wbGF0ZU1hdGNoZXMuZm9yRWFjaChmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gJ2hvbGRlcl9kaW1lbnNpb25zJykge1xuICAgICAgICAgICAgICAgICAgICAgIHRoZW1lLnRleHQgPSB0aGVtZS50ZXh0LnJlcGxhY2UobWF0Y2gsIGRpbWVuc2lvbnNDYXB0aW9uKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgaG9sZGVyVVJMID0gZmxhZ3MuaG9sZGVyVVJMO1xuICAgICAgdmFyIGVuZ2luZVNldHRpbmdzID0gZXh0ZW5kKF9lbmdpbmVTZXR0aW5ncywgbnVsbCk7XG5cbiAgICAgIGlmIChmbGFncy5mb250KSB7XG4gICAgICAgICAgLypcbiAgICAgICAgICBJZiBleHRlcm5hbCBmb250cyBhcmUgdXNlZCBpbiBhIDxpbWc+IHBsYWNlaG9sZGVyIHJlbmRlcmVkIHdpdGggU1ZHLCBIb2xkZXIgZmFsbHMgYmFjayB0byBjYW52YXMuXG5cbiAgICAgICAgICBUaGlzIGlzIGRvbmUgYmVjYXVzZSBGaXJlZm94IGFuZCBDaHJvbWUgZGlzYWxsb3cgZW1iZWRkZWQgU1ZHcyBmcm9tIHJlZmVyZW5jaW5nIGV4dGVybmFsIGFzc2V0cy5cbiAgICAgICAgICBUaGUgd29ya2Fyb3VuZCBpcyBlaXRoZXIgdG8gY2hhbmdlIHRoZSBwbGFjZWhvbGRlciB0YWcgZnJvbSA8aW1nPiB0byA8b2JqZWN0PiBvciB0byB1c2UgdGhlIGNhbnZhcyByZW5kZXJlci5cbiAgICAgICAgICAqL1xuICAgICAgICAgIHRoZW1lLmZvbnQgPSBmbGFncy5mb250O1xuICAgICAgICAgIGlmICghZW5naW5lU2V0dGluZ3Mubm9Gb250RmFsbGJhY2sgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gJ2ltZycgJiYgQXBwLnNldHVwLnN1cHBvcnRzQ2FudmFzICYmIGVuZ2luZVNldHRpbmdzLnJlbmRlcmVyID09PSAnc3ZnJykge1xuICAgICAgICAgICAgICBlbmdpbmVTZXR0aW5ncyA9IGV4dGVuZChlbmdpbmVTZXR0aW5ncywge1xuICAgICAgICAgICAgICAgICAgcmVuZGVyZXI6ICdjYW52YXMnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy9DaHJvbWUgYW5kIE9wZXJhIHJlcXVpcmUgYSBxdWljayAxMG1zIHJlLXJlbmRlciBpZiB3ZWIgZm9udHMgYXJlIHVzZWQgd2l0aCBjYW52YXNcbiAgICAgIGlmIChmbGFncy5mb250ICYmIGVuZ2luZVNldHRpbmdzLnJlbmRlcmVyID09ICdjYW52YXMnKSB7XG4gICAgICAgICAgZW5naW5lU2V0dGluZ3MucmVSZW5kZXIgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobW9kZSA9PSAnYmFja2dyb3VuZCcpIHtcbiAgICAgICAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJhY2tncm91bmQtc3JjJykgPT0gbnVsbCkge1xuICAgICAgICAgICAgICBET00uc2V0QXR0cihlbCwge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEtYmFja2dyb3VuZC1zcmMnOiBob2xkZXJVUkxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2YXIgZG9tUHJvcHMgPSB7fTtcbiAgICAgICAgICBkb21Qcm9wc1tBcHAudmFycy5kYXRhQXR0cl0gPSBob2xkZXJVUkw7XG4gICAgICAgICAgRE9NLnNldEF0dHIoZWwsIGRvbVByb3BzKTtcbiAgICAgIH1cblxuICAgICAgZmxhZ3MudGhlbWUgPSB0aGVtZTtcblxuICAgICAgLy90b2RvIGNvbnNpZGVyIHVzaW5nIGFsbCByZW5kZXJTZXR0aW5ncyBpbiBob2xkZXJEYXRhXG4gICAgICBlbC5ob2xkZXJEYXRhID0ge1xuICAgICAgICAgIGZsYWdzOiBmbGFncyxcbiAgICAgICAgICBlbmdpbmVTZXR0aW5nczogZW5naW5lU2V0dGluZ3NcbiAgICAgIH07XG5cbiAgICAgIGlmIChtb2RlID09ICdpbWFnZScgfHwgbW9kZSA9PSAnZmx1aWQnKSB7XG4gICAgICAgICAgRE9NLnNldEF0dHIoZWwsIHtcbiAgICAgICAgICAgICAgJ2FsdCc6IHRoZW1lLnRleHQgPyAoZGltZW5zaW9uc0luVGV4dCA/IHRoZW1lLnRleHQgOiB0aGVtZS50ZXh0ICsgJyBbJyArIGRpbWVuc2lvbnNDYXB0aW9uICsgJ10nKSA6IGRpbWVuc2lvbnNDYXB0aW9uXG4gICAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHZhciByZW5kZXJTZXR0aW5ncyA9IHtcbiAgICAgICAgICBtb2RlOiBtb2RlLFxuICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICBob2xkZXJTZXR0aW5nczoge1xuICAgICAgICAgICAgICBkaW1lbnNpb25zOiBkaW1lbnNpb25zLFxuICAgICAgICAgICAgICB0aGVtZTogdGhlbWUsXG4gICAgICAgICAgICAgIGZsYWdzOiBmbGFnc1xuICAgICAgICAgIH0sXG4gICAgICAgICAgZW5naW5lU2V0dGluZ3M6IGVuZ2luZVNldHRpbmdzXG4gICAgICB9O1xuXG4gICAgICBpZiAobW9kZSA9PSAnaW1hZ2UnKSB7XG4gICAgICAgICAgaWYgKCFmbGFncy5hdXRvKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gZGltZW5zaW9ucy53aWR0aCArICdweCc7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmhlaWdodCA9IGRpbWVuc2lvbnMuaGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoZW5naW5lU2V0dGluZ3MucmVuZGVyZXIgPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoZW1lLmJnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJlbmRlcihyZW5kZXJTZXR0aW5ncyk7XG5cbiAgICAgICAgICAgICAgaWYgKGZsYWdzLnRleHRtb2RlID09ICdleGFjdCcpIHtcbiAgICAgICAgICAgICAgICAgIGVsLmhvbGRlckRhdGEucmVzaXplVXBkYXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgIEFwcC52YXJzLnJlc2l6YWJsZUltYWdlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgICAgIHVwZGF0ZVJlc2l6YWJsZUVsZW1lbnRzKGVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSAnYmFja2dyb3VuZCcgJiYgZW5naW5lU2V0dGluZ3MucmVuZGVyZXIgIT0gJ2h0bWwnKSB7XG4gICAgICAgICAgcmVuZGVyKHJlbmRlclNldHRpbmdzKTtcbiAgICAgIH0gZWxzZSBpZiAobW9kZSA9PSAnZmx1aWQnKSB7XG4gICAgICAgICAgZWwuaG9sZGVyRGF0YS5yZXNpemVVcGRhdGUgPSB0cnVlO1xuXG4gICAgICAgICAgaWYgKGRpbWVuc2lvbnMuaGVpZ2h0LnNsaWNlKC0xKSA9PSAnJScpIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQ7XG4gICAgICAgICAgfSBlbHNlIGlmIChmbGFncy5hdXRvID09IG51bGwgfHwgIWZsYWdzLmF1dG8pIHtcbiAgICAgICAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gZGltZW5zaW9ucy5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZGltZW5zaW9ucy53aWR0aC5zbGljZSgtMSkgPT0gJyUnKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLndpZHRoID0gZGltZW5zaW9ucy53aWR0aDtcbiAgICAgICAgICB9IGVsc2UgaWYgKGZsYWdzLmF1dG8gPT0gbnVsbCB8fCAhZmxhZ3MuYXV0bykge1xuICAgICAgICAgICAgICBlbC5zdHlsZS53aWR0aCA9IGRpbWVuc2lvbnMud2lkdGggKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZWwuc3R5bGUuZGlzcGxheSA9PSAnaW5saW5lJyB8fCBlbC5zdHlsZS5kaXNwbGF5ID09PSAnJyB8fCBlbC5zdHlsZS5kaXNwbGF5ID09ICdub25lJykge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBzZXRJbml0aWFsRGltZW5zaW9ucyhlbCk7XG5cbiAgICAgICAgICBpZiAoZW5naW5lU2V0dGluZ3MucmVuZGVyZXIgPT0gJ2h0bWwnKSB7XG4gICAgICAgICAgICAgIGVsLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoZW1lLmJnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIEFwcC52YXJzLnJlc2l6YWJsZUltYWdlcy5wdXNoKGVsKTtcbiAgICAgICAgICAgICAgdXBkYXRlUmVzaXphYmxlRWxlbWVudHMoZWwpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDb3JlIGZ1bmN0aW9uIHRoYXQgdGFrZXMgb3V0cHV0IGZyb20gcmVuZGVyZXJzIGFuZCBzZXRzIGl0IGFzIHRoZSBzb3VyY2Ugb3IgYmFja2dyb3VuZC1pbWFnZSBvZiB0aGUgdGFyZ2V0IGVsZW1lbnRcbiAgICpcbiAgICogQHByaXZhdGVcbiAgICogQHBhcmFtIHJlbmRlclNldHRpbmdzIFJlbmRlcmVyIHNldHRpbmdzXG4gICAqL1xuICBmdW5jdGlvbiByZW5kZXIocmVuZGVyU2V0dGluZ3MpIHtcbiAgICAgIHZhciBpbWFnZSA9IG51bGw7XG4gICAgICB2YXIgbW9kZSA9IHJlbmRlclNldHRpbmdzLm1vZGU7XG4gICAgICB2YXIgZWwgPSByZW5kZXJTZXR0aW5ncy5lbDtcbiAgICAgIHZhciBob2xkZXJTZXR0aW5ncyA9IHJlbmRlclNldHRpbmdzLmhvbGRlclNldHRpbmdzO1xuICAgICAgdmFyIGVuZ2luZVNldHRpbmdzID0gcmVuZGVyU2V0dGluZ3MuZW5naW5lU2V0dGluZ3M7XG5cbiAgICAgIHN3aXRjaCAoZW5naW5lU2V0dGluZ3MucmVuZGVyZXIpIHtcbiAgICAgICAgICBjYXNlICdzdmcnOlxuICAgICAgICAgICAgICBpZiAoIUFwcC5zZXR1cC5zdXBwb3J0c1NWRykgcmV0dXJuO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdjYW52YXMnOlxuICAgICAgICAgICAgICBpZiAoIUFwcC5zZXR1cC5zdXBwb3J0c0NhbnZhcykgcmV0dXJuO1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vdG9kbzogbW92ZSBnZW5lcmF0aW9uIG9mIHNjZW5lIHVwIHRvIGZsYWcgZ2VuZXJhdGlvbiB0byByZWR1Y2UgZXh0cmEgb2JqZWN0IGNyZWF0aW9uXG4gICAgICB2YXIgc2NlbmUgPSB7XG4gICAgICAgICAgd2lkdGg6IGhvbGRlclNldHRpbmdzLmRpbWVuc2lvbnMud2lkdGgsXG4gICAgICAgICAgaGVpZ2h0OiBob2xkZXJTZXR0aW5ncy5kaW1lbnNpb25zLmhlaWdodCxcbiAgICAgICAgICB0aGVtZTogaG9sZGVyU2V0dGluZ3MudGhlbWUsXG4gICAgICAgICAgZmxhZ3M6IGhvbGRlclNldHRpbmdzLmZsYWdzXG4gICAgICB9O1xuXG4gICAgICB2YXIgc2NlbmVHcmFwaCA9IGJ1aWxkU2NlbmVHcmFwaChzY2VuZSk7XG5cbiAgICAgIGZ1bmN0aW9uIGdldFJlbmRlcmVkSW1hZ2UoKSB7XG4gICAgICAgICAgdmFyIGltYWdlID0gbnVsbDtcbiAgICAgICAgICBzd2l0Y2ggKGVuZ2luZVNldHRpbmdzLnJlbmRlcmVyKSB7XG4gICAgICAgICAgICAgIGNhc2UgJ2NhbnZhcyc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IHNnQ2FudmFzUmVuZGVyZXIoc2NlbmVHcmFwaCwgcmVuZGVyU2V0dGluZ3MpO1xuICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgIGNhc2UgJ3N2Zyc6XG4gICAgICAgICAgICAgICAgICBpbWFnZSA9IHN2Z1JlbmRlcmVyKHNjZW5lR3JhcGgsIHJlbmRlclNldHRpbmdzKTtcbiAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgdGhyb3cgJ0hvbGRlcjogaW52YWxpZCByZW5kZXJlcjogJyArIGVuZ2luZVNldHRpbmdzLnJlbmRlcmVyO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHJldHVybiBpbWFnZTtcbiAgICAgIH1cblxuICAgICAgaW1hZ2UgPSBnZXRSZW5kZXJlZEltYWdlKCk7XG5cbiAgICAgIGlmIChpbWFnZSA9PSBudWxsKSB7XG4gICAgICAgICAgdGhyb3cgJ0hvbGRlcjogY291bGRuXFwndCByZW5kZXIgcGxhY2Vob2xkZXInO1xuICAgICAgfVxuXG4gICAgICAvL3RvZG86IGFkZCA8b2JqZWN0PiBjYW52YXMgcmVuZGVyaW5nXG4gICAgICBpZiAobW9kZSA9PSAnYmFja2dyb3VuZCcpIHtcbiAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKCcgKyBpbWFnZSArICcpJztcblxuICAgICAgICAgIGlmICghZW5naW5lU2V0dGluZ3Mubm9CYWNrZ3JvdW5kU2l6ZSkge1xuICAgICAgICAgICAgICBlbC5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9IHNjZW5lLndpZHRoICsgJ3B4ICcgKyBzY2VuZS5oZWlnaHQgKyAncHgnO1xuICAgICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09ICdpbWcnKSB7XG4gICAgICAgICAgICAgIERPTS5zZXRBdHRyKGVsLCB7XG4gICAgICAgICAgICAgICAgICAnc3JjJzogaW1hZ2VcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBlbHNlIGlmIChlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBET00uc2V0QXR0cihlbCwge1xuICAgICAgICAgICAgICAgICAgJ2RhdGEnOiBpbWFnZSxcbiAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoZW5naW5lU2V0dGluZ3MucmVSZW5kZXIpIHtcbiAgICAgICAgICAgICAgZ2xvYmFsLnNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgdmFyIGltYWdlID0gZ2V0UmVuZGVyZWRJbWFnZSgpO1xuICAgICAgICAgICAgICAgICAgaWYgKGltYWdlID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aHJvdyAnSG9sZGVyOiBjb3VsZG5cXCd0IHJlbmRlciBwbGFjZWhvbGRlcic7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAvL3RvZG86IHJlZmFjdG9yIHRoaXMgY29kZSBpbnRvIGEgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICAgIGlmIChlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnaW1nJykge1xuICAgICAgICAgICAgICAgICAgICAgIERPTS5zZXRBdHRyKGVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdzcmMnOiBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgIERPTS5zZXRBdHRyKGVsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICdkYXRhJzogaW1hZ2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICd0eXBlJzogJ2ltYWdlL3N2Zyt4bWwnXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sIDE1MCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy90b2RvOiBhY2NvdW50IGZvciByZS1yZW5kZXJpbmdcbiAgICAgIERPTS5zZXRBdHRyKGVsLCB7XG4gICAgICAgICAgJ2RhdGEtaG9sZGVyLXJlbmRlcmVkJzogdHJ1ZVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ29yZSBmdW5jdGlvbiB0aGF0IHRha2VzIGEgSG9sZGVyIHNjZW5lIGRlc2NyaXB0aW9uIGFuZCBidWlsZHMgYSBzY2VuZSBncmFwaFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gc2NlbmUgSG9sZGVyIHNjZW5lIG9iamVjdFxuICAgKi9cbiAgLy90b2RvOiBtYWtlIHRoaXMgZnVuY3Rpb24gcmV1c2FibGVcbiAgLy90b2RvOiBtZXJnZSBhcHAgZGVmYXVsdHMgYW5kIHNldHVwIHByb3BlcnRpZXMgaW50byB0aGUgc2NlbmUgYXJndW1lbnRcbiAgZnVuY3Rpb24gYnVpbGRTY2VuZUdyYXBoKHNjZW5lKSB7XG4gICAgICB2YXIgZm9udFNpemUgPSBBcHAuZGVmYXVsdHMuc2l6ZTtcbiAgICAgIGlmIChwYXJzZUZsb2F0KHNjZW5lLnRoZW1lLnNpemUpKSB7XG4gICAgICAgICAgZm9udFNpemUgPSBzY2VuZS50aGVtZS5zaXplO1xuICAgICAgfSBlbHNlIGlmIChwYXJzZUZsb2F0KHNjZW5lLmZsYWdzLnNpemUpKSB7XG4gICAgICAgICAgZm9udFNpemUgPSBzY2VuZS5mbGFncy5zaXplO1xuICAgICAgfVxuXG4gICAgICBzY2VuZS5mb250ID0ge1xuICAgICAgICAgIGZhbWlseTogc2NlbmUudGhlbWUuZm9udCA/IHNjZW5lLnRoZW1lLmZvbnQgOiAnQXJpYWwsIEhlbHZldGljYSwgT3BlbiBTYW5zLCBzYW5zLXNlcmlmJyxcbiAgICAgICAgICBzaXplOiB0ZXh0U2l6ZShzY2VuZS53aWR0aCwgc2NlbmUuaGVpZ2h0LCBmb250U2l6ZSwgQXBwLmRlZmF1bHRzLnNjYWxlKSxcbiAgICAgICAgICB1bml0czogc2NlbmUudGhlbWUudW5pdHMgPyBzY2VuZS50aGVtZS51bml0cyA6IEFwcC5kZWZhdWx0cy51bml0cyxcbiAgICAgICAgICB3ZWlnaHQ6IHNjZW5lLnRoZW1lLmZvbnR3ZWlnaHQgPyBzY2VuZS50aGVtZS5mb250d2VpZ2h0IDogJ2JvbGQnXG4gICAgICB9O1xuXG4gICAgICBzY2VuZS50ZXh0ID0gc2NlbmUudGhlbWUudGV4dCB8fCBNYXRoLmZsb29yKHNjZW5lLndpZHRoKSArICd4JyArIE1hdGguZmxvb3Ioc2NlbmUuaGVpZ2h0KTtcblxuICAgICAgc2NlbmUubm9XcmFwID0gc2NlbmUudGhlbWUubm93cmFwIHx8IHNjZW5lLmZsYWdzLm5vd3JhcDtcblxuICAgICAgc2NlbmUuYWxpZ24gPSBzY2VuZS50aGVtZS5hbGlnbiB8fCBzY2VuZS5mbGFncy5hbGlnbiB8fCAnY2VudGVyJztcblxuICAgICAgc3dpdGNoIChzY2VuZS5mbGFncy50ZXh0bW9kZSkge1xuICAgICAgICAgIGNhc2UgJ2xpdGVyYWwnOlxuICAgICAgICAgICAgICBzY2VuZS50ZXh0ID0gc2NlbmUuZmxhZ3MuZGltZW5zaW9ucy53aWR0aCArICd4JyArIHNjZW5lLmZsYWdzLmRpbWVuc2lvbnMuaGVpZ2h0O1xuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdleGFjdCc6XG4gICAgICAgICAgICAgIGlmICghc2NlbmUuZmxhZ3MuZXhhY3REaW1lbnNpb25zKSBicmVhaztcbiAgICAgICAgICAgICAgc2NlbmUudGV4dCA9IE1hdGguZmxvb3Ioc2NlbmUuZmxhZ3MuZXhhY3REaW1lbnNpb25zLndpZHRoKSArICd4JyArIE1hdGguZmxvb3Ioc2NlbmUuZmxhZ3MuZXhhY3REaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICB2YXIgbGluZVdyYXAgPSBzY2VuZS5mbGFncy5saW5lV3JhcCB8fCBBcHAuc2V0dXAubGluZVdyYXBSYXRpbztcbiAgICAgIHZhciBzY2VuZU1hcmdpbiA9IHNjZW5lLndpZHRoICogbGluZVdyYXA7XG4gICAgICB2YXIgbWF4TGluZVdpZHRoID0gc2NlbmVNYXJnaW47XG5cbiAgICAgIHZhciBzY2VuZUdyYXBoID0gbmV3IFNjZW5lR3JhcGgoe1xuICAgICAgICAgIHdpZHRoOiBzY2VuZS53aWR0aCxcbiAgICAgICAgICBoZWlnaHQ6IHNjZW5lLmhlaWdodFxuICAgICAgfSk7XG5cbiAgICAgIHZhciBTaGFwZSA9IHNjZW5lR3JhcGguU2hhcGU7XG5cbiAgICAgIHZhciBob2xkZXJCZyA9IG5ldyBTaGFwZS5SZWN0KCdob2xkZXJCZycsIHtcbiAgICAgICAgICBmaWxsOiBzY2VuZS50aGVtZS5iZ1xuICAgICAgfSk7XG5cbiAgICAgIGhvbGRlckJnLnJlc2l6ZShzY2VuZS53aWR0aCwgc2NlbmUuaGVpZ2h0KTtcbiAgICAgIHNjZW5lR3JhcGgucm9vdC5hZGQoaG9sZGVyQmcpO1xuXG4gICAgICBpZiAoc2NlbmUuZmxhZ3Mub3V0bGluZSkge1xuICAgICAgICAgIHZhciBvdXRsaW5lQ29sb3IgPSBuZXcgQ29sb3IoaG9sZGVyQmcucHJvcGVydGllcy5maWxsKTtcbiAgICAgICAgICBvdXRsaW5lQ29sb3IgPSBvdXRsaW5lQ29sb3IubGlnaHRlbihvdXRsaW5lQ29sb3IubGlnaHRlclRoYW4oJzdmN2Y3ZicpID8gLTAuMSA6IDAuMSk7XG4gICAgICAgICAgaG9sZGVyQmcucHJvcGVydGllcy5vdXRsaW5lID0ge1xuICAgICAgICAgICAgICBmaWxsOiBvdXRsaW5lQ29sb3IudG9IZXgodHJ1ZSksXG4gICAgICAgICAgICAgIHdpZHRoOiAyXG4gICAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgdmFyIGhvbGRlclRleHRDb2xvciA9IHNjZW5lLnRoZW1lLmZnO1xuXG4gICAgICBpZiAoc2NlbmUuZmxhZ3MuYXV0b0ZnKSB7XG4gICAgICAgICAgdmFyIGhvbGRlckJnQ29sb3IgPSBuZXcgQ29sb3IoaG9sZGVyQmcucHJvcGVydGllcy5maWxsKTtcbiAgICAgICAgICB2YXIgbGlnaHRDb2xvciA9IG5ldyBDb2xvcignZmZmJyk7XG4gICAgICAgICAgdmFyIGRhcmtDb2xvciA9IG5ldyBDb2xvcignMDAwJywge1xuICAgICAgICAgICAgICAnYWxwaGEnOiAwLjI4NTcxNFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaG9sZGVyVGV4dENvbG9yID0gaG9sZGVyQmdDb2xvci5ibGVuZEFscGhhKGhvbGRlckJnQ29sb3IubGlnaHRlclRoYW4oJzdmN2Y3ZicpID8gZGFya0NvbG9yIDogbGlnaHRDb2xvcikudG9IZXgodHJ1ZSk7XG4gICAgICB9XG5cbiAgICAgIHZhciBob2xkZXJUZXh0R3JvdXAgPSBuZXcgU2hhcGUuR3JvdXAoJ2hvbGRlclRleHRHcm91cCcsIHtcbiAgICAgICAgICB0ZXh0OiBzY2VuZS50ZXh0LFxuICAgICAgICAgIGFsaWduOiBzY2VuZS5hbGlnbixcbiAgICAgICAgICBmb250OiBzY2VuZS5mb250LFxuICAgICAgICAgIGZpbGw6IGhvbGRlclRleHRDb2xvclxuICAgICAgfSk7XG5cbiAgICAgIGhvbGRlclRleHRHcm91cC5tb3ZlVG8obnVsbCwgbnVsbCwgMSk7XG4gICAgICBzY2VuZUdyYXBoLnJvb3QuYWRkKGhvbGRlclRleHRHcm91cCk7XG5cbiAgICAgIHZhciB0cGRhdGEgPSBob2xkZXJUZXh0R3JvdXAudGV4dFBvc2l0aW9uRGF0YSA9IHN0YWdpbmdSZW5kZXJlcihzY2VuZUdyYXBoKTtcbiAgICAgIGlmICghdHBkYXRhKSB7XG4gICAgICAgICAgdGhyb3cgJ0hvbGRlcjogc3RhZ2luZyBmYWxsYmFjayBub3Qgc3VwcG9ydGVkIHlldC4nO1xuICAgICAgfVxuICAgICAgaG9sZGVyVGV4dEdyb3VwLnByb3BlcnRpZXMubGVhZGluZyA9IHRwZGF0YS5ib3VuZGluZ0JveC5oZWlnaHQ7XG5cbiAgICAgIHZhciB0ZXh0Tm9kZSA9IG51bGw7XG4gICAgICB2YXIgbGluZSA9IG51bGw7XG5cbiAgICAgIGZ1bmN0aW9uIGZpbmFsaXplTGluZShwYXJlbnQsIGxpbmUsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgICAgICBsaW5lLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgbGluZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgcGFyZW50LndpZHRoID0gTWF0aC5tYXgocGFyZW50LndpZHRoLCBsaW5lLndpZHRoKTtcbiAgICAgICAgICBwYXJlbnQuaGVpZ2h0ICs9IGxpbmUuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICBpZiAodHBkYXRhLmxpbmVDb3VudCA+IDEpIHtcbiAgICAgICAgICB2YXIgb2Zmc2V0WCA9IDA7XG4gICAgICAgICAgdmFyIG9mZnNldFkgPSAwO1xuICAgICAgICAgIHZhciBsaW5lSW5kZXggPSAwO1xuICAgICAgICAgIHZhciBsaW5lS2V5O1xuICAgICAgICAgIGxpbmUgPSBuZXcgU2hhcGUuR3JvdXAoJ2xpbmUnICsgbGluZUluZGV4KTtcblxuICAgICAgICAgIC8vRG91YmxlIG1hcmdpbiBzbyB0aGF0IGxlZnQvcmlnaHQtYWxpZ25lZCBuZXh0IGlzIG5vdCBmbHVzaCB3aXRoIGVkZ2Ugb2YgaW1hZ2VcbiAgICAgICAgICBpZiAoc2NlbmUuYWxpZ24gPT09ICdsZWZ0JyB8fCBzY2VuZS5hbGlnbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICAgICAgICBtYXhMaW5lV2lkdGggPSBzY2VuZS53aWR0aCAqICgxIC0gKDEgLSBsaW5lV3JhcCkgKiAyKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRwZGF0YS53b3Jkcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICB2YXIgd29yZCA9IHRwZGF0YS53b3Jkc1tpXTtcbiAgICAgICAgICAgICAgdGV4dE5vZGUgPSBuZXcgU2hhcGUuVGV4dCh3b3JkLnRleHQpO1xuICAgICAgICAgICAgICB2YXIgbmV3bGluZSA9IHdvcmQudGV4dCA9PSAnXFxcXG4nO1xuICAgICAgICAgICAgICBpZiAoIXNjZW5lLm5vV3JhcCAmJiAob2Zmc2V0WCArIHdvcmQud2lkdGggPj0gbWF4TGluZVdpZHRoIHx8IG5ld2xpbmUgPT09IHRydWUpKSB7XG4gICAgICAgICAgICAgICAgICBmaW5hbGl6ZUxpbmUoaG9sZGVyVGV4dEdyb3VwLCBsaW5lLCBvZmZzZXRYLCBob2xkZXJUZXh0R3JvdXAucHJvcGVydGllcy5sZWFkaW5nKTtcbiAgICAgICAgICAgICAgICAgIGhvbGRlclRleHRHcm91cC5hZGQobGluZSk7XG4gICAgICAgICAgICAgICAgICBvZmZzZXRYID0gMDtcbiAgICAgICAgICAgICAgICAgIG9mZnNldFkgKz0gaG9sZGVyVGV4dEdyb3VwLnByb3BlcnRpZXMubGVhZGluZztcbiAgICAgICAgICAgICAgICAgIGxpbmVJbmRleCArPSAxO1xuICAgICAgICAgICAgICAgICAgbGluZSA9IG5ldyBTaGFwZS5Hcm91cCgnbGluZScgKyBsaW5lSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgbGluZS55ID0gb2Zmc2V0WTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAobmV3bGluZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGV4dE5vZGUubW92ZVRvKG9mZnNldFgsIDApO1xuICAgICAgICAgICAgICBvZmZzZXRYICs9IHRwZGF0YS5zcGFjZVdpZHRoICsgd29yZC53aWR0aDtcbiAgICAgICAgICAgICAgbGluZS5hZGQodGV4dE5vZGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZpbmFsaXplTGluZShob2xkZXJUZXh0R3JvdXAsIGxpbmUsIG9mZnNldFgsIGhvbGRlclRleHRHcm91cC5wcm9wZXJ0aWVzLmxlYWRpbmcpO1xuICAgICAgICAgIGhvbGRlclRleHRHcm91cC5hZGQobGluZSk7XG5cbiAgICAgICAgICBpZiAoc2NlbmUuYWxpZ24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICBob2xkZXJUZXh0R3JvdXAubW92ZVRvKHNjZW5lLndpZHRoIC0gc2NlbmVNYXJnaW4sIG51bGwsIG51bGwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2NlbmUuYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgZm9yIChsaW5lS2V5IGluIGhvbGRlclRleHRHcm91cC5jaGlsZHJlbikge1xuICAgICAgICAgICAgICAgICAgbGluZSA9IGhvbGRlclRleHRHcm91cC5jaGlsZHJlbltsaW5lS2V5XTtcbiAgICAgICAgICAgICAgICAgIGxpbmUubW92ZVRvKHNjZW5lLndpZHRoIC0gbGluZS53aWR0aCwgbnVsbCwgbnVsbCk7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBob2xkZXJUZXh0R3JvdXAubW92ZVRvKDAgLSAoc2NlbmUud2lkdGggLSBzY2VuZU1hcmdpbiksIG51bGwsIG51bGwpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGZvciAobGluZUtleSBpbiBob2xkZXJUZXh0R3JvdXAuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgIGxpbmUgPSBob2xkZXJUZXh0R3JvdXAuY2hpbGRyZW5bbGluZUtleV07XG4gICAgICAgICAgICAgICAgICBsaW5lLm1vdmVUbygoaG9sZGVyVGV4dEdyb3VwLndpZHRoIC0gbGluZS53aWR0aCkgLyAyLCBudWxsLCBudWxsKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGhvbGRlclRleHRHcm91cC5tb3ZlVG8oKHNjZW5lLndpZHRoIC0gaG9sZGVyVGV4dEdyb3VwLndpZHRoKSAvIDIsIG51bGwsIG51bGwpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGhvbGRlclRleHRHcm91cC5tb3ZlVG8obnVsbCwgKHNjZW5lLmhlaWdodCAtIGhvbGRlclRleHRHcm91cC5oZWlnaHQpIC8gMiwgbnVsbCk7XG5cbiAgICAgICAgICAvL0lmIHRoZSB0ZXh0IGV4Y2VlZHMgdmVydGljYWwgc3BhY2UsIG1vdmUgaXQgZG93biBzbyB0aGUgZmlyc3QgbGluZSBpcyB2aXNpYmxlXG4gICAgICAgICAgaWYgKChzY2VuZS5oZWlnaHQgLSBob2xkZXJUZXh0R3JvdXAuaGVpZ2h0KSAvIDIgPCAwKSB7XG4gICAgICAgICAgICAgIGhvbGRlclRleHRHcm91cC5tb3ZlVG8obnVsbCwgMCwgbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0ZXh0Tm9kZSA9IG5ldyBTaGFwZS5UZXh0KHNjZW5lLnRleHQpO1xuICAgICAgICAgIGxpbmUgPSBuZXcgU2hhcGUuR3JvdXAoJ2xpbmUwJyk7XG4gICAgICAgICAgbGluZS5hZGQodGV4dE5vZGUpO1xuICAgICAgICAgIGhvbGRlclRleHRHcm91cC5hZGQobGluZSk7XG5cbiAgICAgICAgICBpZiAoc2NlbmUuYWxpZ24gPT09ICdsZWZ0Jykge1xuICAgICAgICAgICAgICBob2xkZXJUZXh0R3JvdXAubW92ZVRvKHNjZW5lLndpZHRoIC0gc2NlbmVNYXJnaW4sIG51bGwsIG51bGwpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoc2NlbmUuYWxpZ24gPT09ICdyaWdodCcpIHtcbiAgICAgICAgICAgICAgaG9sZGVyVGV4dEdyb3VwLm1vdmVUbygwIC0gKHNjZW5lLndpZHRoIC0gc2NlbmVNYXJnaW4pLCBudWxsLCBudWxsKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBob2xkZXJUZXh0R3JvdXAubW92ZVRvKChzY2VuZS53aWR0aCAtIHRwZGF0YS5ib3VuZGluZ0JveC53aWR0aCkgLyAyLCBudWxsLCBudWxsKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBob2xkZXJUZXh0R3JvdXAubW92ZVRvKG51bGwsIChzY2VuZS5oZWlnaHQgLSB0cGRhdGEuYm91bmRpbmdCb3guaGVpZ2h0KSAvIDIsIG51bGwpO1xuICAgICAgfVxuXG4gICAgICAvL3RvZG86IHJlbmRlcmxpc3RcbiAgICAgIHJldHVybiBzY2VuZUdyYXBoO1xuICB9XG5cbiAgLyoqXG4gICAqIEFkYXB0aXZlIHRleHQgc2l6aW5nIGZ1bmN0aW9uXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSB3aWR0aCBQYXJlbnQgd2lkdGhcbiAgICogQHBhcmFtIGhlaWdodCBQYXJlbnQgaGVpZ2h0XG4gICAqIEBwYXJhbSBmb250U2l6ZSBSZXF1ZXN0ZWQgdGV4dCBzaXplXG4gICAqIEBwYXJhbSBzY2FsZSBQcm9wb3J0aW9uYWwgc2NhbGUgb2YgdGV4dFxuICAgKi9cbiAgZnVuY3Rpb24gdGV4dFNpemUod2lkdGgsIGhlaWdodCwgZm9udFNpemUsIHNjYWxlKSB7XG4gICAgICB2YXIgc3RhZ2VXaWR0aCA9IHBhcnNlSW50KHdpZHRoLCAxMCk7XG4gICAgICB2YXIgc3RhZ2VIZWlnaHQgPSBwYXJzZUludChoZWlnaHQsIDEwKTtcblxuICAgICAgdmFyIGJpZ1NpZGUgPSBNYXRoLm1heChzdGFnZVdpZHRoLCBzdGFnZUhlaWdodCk7XG4gICAgICB2YXIgc21hbGxTaWRlID0gTWF0aC5taW4oc3RhZ2VXaWR0aCwgc3RhZ2VIZWlnaHQpO1xuXG4gICAgICB2YXIgbmV3SGVpZ2h0ID0gMC44ICogTWF0aC5taW4oc21hbGxTaWRlLCBiaWdTaWRlICogc2NhbGUpO1xuICAgICAgcmV0dXJuIE1hdGgucm91bmQoTWF0aC5tYXgoZm9udFNpemUsIG5ld0hlaWdodCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEl0ZXJhdGVzIG92ZXIgcmVzaXphYmxlIChmbHVpZCBvciBhdXRvKSBwbGFjZWhvbGRlcnMgYW5kIHJlbmRlcnMgdGhlbVxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKiBAcGFyYW0gZWxlbWVudCBPcHRpb25hbCBlbGVtZW50IHNlbGVjdG9yLCBzcGVjaWZpZWQgb25seSBpZiBhIHNwZWNpZmljIGVsZW1lbnQgbmVlZHMgdG8gYmUgcmUtcmVuZGVyZWRcbiAgICovXG4gIGZ1bmN0aW9uIHVwZGF0ZVJlc2l6YWJsZUVsZW1lbnRzKGVsZW1lbnQpIHtcbiAgICAgIHZhciBpbWFnZXM7XG4gICAgICBpZiAoZWxlbWVudCA9PSBudWxsIHx8IGVsZW1lbnQubm9kZVR5cGUgPT0gbnVsbCkge1xuICAgICAgICAgIGltYWdlcyA9IEFwcC52YXJzLnJlc2l6YWJsZUltYWdlcztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaW1hZ2VzID0gW2VsZW1lbnRdO1xuICAgICAgfVxuICAgICAgZm9yICh2YXIgaSA9IDAsIGwgPSBpbWFnZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgdmFyIGVsID0gaW1hZ2VzW2ldO1xuICAgICAgICAgIGlmIChlbC5ob2xkZXJEYXRhKSB7XG4gICAgICAgICAgICAgIHZhciBmbGFncyA9IGVsLmhvbGRlckRhdGEuZmxhZ3M7XG4gICAgICAgICAgICAgIHZhciBkaW1lbnNpb25zID0gZGltZW5zaW9uQ2hlY2soZWwpO1xuICAgICAgICAgICAgICBpZiAoZGltZW5zaW9ucykge1xuICAgICAgICAgICAgICAgICAgaWYgKCFlbC5ob2xkZXJEYXRhLnJlc2l6ZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICBpZiAoZmxhZ3MuZmx1aWQgJiYgZmxhZ3MuYXV0bykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBmbHVpZENvbmZpZyA9IGVsLmhvbGRlckRhdGEuZmx1aWRDb25maWc7XG4gICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChmbHVpZENvbmZpZy5tb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3dpZHRoJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpbWVuc2lvbnMuaGVpZ2h0ID0gZGltZW5zaW9ucy53aWR0aCAvIGZsdWlkQ29uZmlnLnJhdGlvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2hlaWdodCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW1lbnNpb25zLndpZHRoID0gZGltZW5zaW9ucy5oZWlnaHQgKiBmbHVpZENvbmZpZy5yYXRpbztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgdmFyIHNldHRpbmdzID0ge1xuICAgICAgICAgICAgICAgICAgICAgIG1vZGU6ICdpbWFnZScsXG4gICAgICAgICAgICAgICAgICAgICAgaG9sZGVyU2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGltZW5zaW9uczogZGltZW5zaW9ucyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGhlbWU6IGZsYWdzLnRoZW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGFnczogZmxhZ3NcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGVsOiBlbCxcbiAgICAgICAgICAgICAgICAgICAgICBlbmdpbmVTZXR0aW5nczogZWwuaG9sZGVyRGF0YS5lbmdpbmVTZXR0aW5nc1xuICAgICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgICAgaWYgKGZsYWdzLnRleHRtb2RlID09ICdleGFjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBmbGFncy5leGFjdERpbWVuc2lvbnMgPSBkaW1lbnNpb25zO1xuICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzLmhvbGRlclNldHRpbmdzLmRpbWVuc2lvbnMgPSBmbGFncy5kaW1lbnNpb25zO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZW5kZXIoc2V0dGluZ3MpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgc2V0SW52aXNpYmxlKGVsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIHVwIGFzcGVjdCByYXRpbyBtZXRhZGF0YSBmb3IgZmx1aWQgcGxhY2Vob2xkZXJzLCBpbiBvcmRlciB0byBwcmVzZXJ2ZSBwcm9wb3J0aW9ucyB3aGVuIHJlc2l6aW5nXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBlbCBJbWFnZSBET00gZWxlbWVudFxuICAgKi9cbiAgZnVuY3Rpb24gc2V0SW5pdGlhbERpbWVuc2lvbnMoZWwpIHtcbiAgICAgIGlmIChlbC5ob2xkZXJEYXRhKSB7XG4gICAgICAgICAgdmFyIGRpbWVuc2lvbnMgPSBkaW1lbnNpb25DaGVjayhlbCk7XG4gICAgICAgICAgaWYgKGRpbWVuc2lvbnMpIHtcbiAgICAgICAgICAgICAgdmFyIGZsYWdzID0gZWwuaG9sZGVyRGF0YS5mbGFncztcblxuICAgICAgICAgICAgICB2YXIgZmx1aWRDb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICBmbHVpZEhlaWdodDogZmxhZ3MuZGltZW5zaW9ucy5oZWlnaHQuc2xpY2UoLTEpID09ICclJyxcbiAgICAgICAgICAgICAgICAgIGZsdWlkV2lkdGg6IGZsYWdzLmRpbWVuc2lvbnMud2lkdGguc2xpY2UoLTEpID09ICclJyxcbiAgICAgICAgICAgICAgICAgIG1vZGU6IG51bGwsXG4gICAgICAgICAgICAgICAgICBpbml0aWFsRGltZW5zaW9uczogZGltZW5zaW9uc1xuICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgIGlmIChmbHVpZENvbmZpZy5mbHVpZFdpZHRoICYmICFmbHVpZENvbmZpZy5mbHVpZEhlaWdodCkge1xuICAgICAgICAgICAgICAgICAgZmx1aWRDb25maWcubW9kZSA9ICd3aWR0aCc7XG4gICAgICAgICAgICAgICAgICBmbHVpZENvbmZpZy5yYXRpbyA9IGZsdWlkQ29uZmlnLmluaXRpYWxEaW1lbnNpb25zLndpZHRoIC8gcGFyc2VGbG9hdChmbGFncy5kaW1lbnNpb25zLmhlaWdodCk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAoIWZsdWlkQ29uZmlnLmZsdWlkV2lkdGggJiYgZmx1aWRDb25maWcuZmx1aWRIZWlnaHQpIHtcbiAgICAgICAgICAgICAgICAgIGZsdWlkQ29uZmlnLm1vZGUgPSAnaGVpZ2h0JztcbiAgICAgICAgICAgICAgICAgIGZsdWlkQ29uZmlnLnJhdGlvID0gcGFyc2VGbG9hdChmbGFncy5kaW1lbnNpb25zLndpZHRoKSAvIGZsdWlkQ29uZmlnLmluaXRpYWxEaW1lbnNpb25zLmhlaWdodDtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGVsLmhvbGRlckRhdGEuZmx1aWRDb25maWcgPSBmbHVpZENvbmZpZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBzZXRJbnZpc2libGUoZWwpO1xuICAgICAgICAgIH1cbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBJdGVyYXRlcyB0aHJvdWdoIGFsbCBjdXJyZW50IGludmlzaWJsZSBpbWFnZXMsIGFuZCBpZiB0aGV5J3JlIHZpc2libGUsIHJlbmRlcnMgdGhlbSBhbmQgcmVtb3ZlcyB0aGVtIGZyb20gZnVydGhlciBjaGVja3MuIFJ1bnMgZXZlcnkgYW5pbWF0aW9uIGZyYW1lLlxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZnVuY3Rpb24gdmlzaWJpbGl0eUNoZWNrKCkge1xuICAgICAgdmFyIHJlbmRlcmFibGVJbWFnZXMgPSBbXTtcbiAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoQXBwLnZhcnMuaW52aXNpYmxlSW1hZ2VzKTtcbiAgICAgIHZhciBlbDtcblxuICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBlbCA9IEFwcC52YXJzLmludmlzaWJsZUltYWdlc1trZXldO1xuICAgICAgICAgIGlmIChkaW1lbnNpb25DaGVjayhlbCkgJiYgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnaW1nJykge1xuICAgICAgICAgICAgICByZW5kZXJhYmxlSW1hZ2VzLnB1c2goZWwpO1xuICAgICAgICAgICAgICBkZWxldGUgQXBwLnZhcnMuaW52aXNpYmxlSW1hZ2VzW2tleV07XG4gICAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmIChyZW5kZXJhYmxlSW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICAgIEhvbGRlci5ydW4oe1xuICAgICAgICAgICAgICBpbWFnZXM6IHJlbmRlcmFibGVJbWFnZXNcbiAgICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gRG9uZSB0byBwcmV2ZW50IDEwMCUgQ1BVIHVzYWdlIHZpYSBhZ2dyZXNzaXZlIGNhbGxpbmcgb2YgcmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBnbG9iYWwucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHZpc2liaWxpdHlDaGVjayk7XG4gICAgICB9LCAxMCk7XG4gIH1cblxuICAvKipcbiAgICogU3RhcnRzIGNoZWNraW5nIGZvciBpbnZpc2libGUgcGxhY2Vob2xkZXJzIGlmIG5vdCBkb2luZyBzbyB5ZXQuIERvZXMgbm90aGluZyBvdGhlcndpc2UuXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmdW5jdGlvbiBzdGFydFZpc2liaWxpdHlDaGVjaygpIHtcbiAgICAgIGlmICghQXBwLnZhcnMudmlzaWJpbGl0eUNoZWNrU3RhcnRlZCkge1xuICAgICAgICAgIGdsb2JhbC5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodmlzaWJpbGl0eUNoZWNrKTtcbiAgICAgICAgICBBcHAudmFycy52aXNpYmlsaXR5Q2hlY2tTdGFydGVkID0gdHJ1ZTtcbiAgICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZXRzIGEgdW5pcXVlIElEIGZvciBhbiBpbWFnZSBkZXRlY3RlZCB0byBiZSBpbnZpc2libGUgYW5kIGFkZHMgaXQgdG8gdGhlIG1hcCBvZiBpbnZpc2libGUgaW1hZ2VzIGNoZWNrZWQgYnkgdmlzaWJpbGl0eUNoZWNrXG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqIEBwYXJhbSBlbCBJbnZpc2libGUgRE9NIGVsZW1lbnRcbiAgICovXG4gIGZ1bmN0aW9uIHNldEludmlzaWJsZShlbCkge1xuICAgICAgaWYgKCFlbC5ob2xkZXJEYXRhLmludmlzaWJsZUlkKSB7XG4gICAgICAgICAgQXBwLnZhcnMuaW52aXNpYmxlSWQgKz0gMTtcbiAgICAgICAgICBBcHAudmFycy5pbnZpc2libGVJbWFnZXNbJ2knICsgQXBwLnZhcnMuaW52aXNpYmxlSWRdID0gZWw7XG4gICAgICAgICAgZWwuaG9sZGVyRGF0YS5pbnZpc2libGVJZCA9IEFwcC52YXJzLmludmlzaWJsZUlkO1xuICAgICAgfVxuICB9XG5cbiAgLy90b2RvOiBzZWUgaWYgcG9zc2libGUgdG8gY29udmVydCBzdGFnaW5nUmVuZGVyZXIgdG8gdXNlIEhUTUwgb25seVxuICB2YXIgc3RhZ2luZ1JlbmRlcmVyID0gKGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIHN2ZyA9IG51bGwsXG4gICAgICAgICAgc3RhZ2luZ1RleHQgPSBudWxsLFxuICAgICAgICAgIHN0YWdpbmdUZXh0Tm9kZSA9IG51bGw7XG4gICAgICByZXR1cm4gZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgICB2YXIgcm9vdE5vZGUgPSBncmFwaC5yb290O1xuICAgICAgICAgIGlmIChBcHAuc2V0dXAuc3VwcG9ydHNTVkcpIHtcbiAgICAgICAgICAgICAgdmFyIGZpcnN0VGltZVNldHVwID0gZmFsc2U7XG4gICAgICAgICAgICAgIHZhciB0bm9kZSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgaWYgKHN2ZyA9PSBudWxsIHx8IHN2Zy5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICAgICAgICAgICAgICBmaXJzdFRpbWVTZXR1cCA9IHRydWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBzdmcgPSBTVkcuaW5pdFNWRyhzdmcsIHJvb3ROb2RlLnByb3BlcnRpZXMud2lkdGgsIHJvb3ROb2RlLnByb3BlcnRpZXMuaGVpZ2h0KTtcbiAgICAgICAgICAgICAgLy9TaG93IHN0YWdpbmcgZWxlbWVudCBiZWZvcmUgc3RhZ2luZ1xuICAgICAgICAgICAgICBzdmcuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cbiAgICAgICAgICAgICAgaWYgKGZpcnN0VGltZVNldHVwKSB7XG4gICAgICAgICAgICAgICAgICBzdGFnaW5nVGV4dCA9IERPTS5uZXdFbCgndGV4dCcsIFNWR19OUyk7XG4gICAgICAgICAgICAgICAgICBzdGFnaW5nVGV4dE5vZGUgPSB0bm9kZShudWxsKTtcbiAgICAgICAgICAgICAgICAgIERPTS5zZXRBdHRyKHN0YWdpbmdUZXh0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgeDogMFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICBzdGFnaW5nVGV4dC5hcHBlbmRDaGlsZChzdGFnaW5nVGV4dE5vZGUpO1xuICAgICAgICAgICAgICAgICAgc3ZnLmFwcGVuZENoaWxkKHN0YWdpbmdUZXh0KTtcbiAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc3ZnKTtcbiAgICAgICAgICAgICAgICAgIHN2Zy5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XG4gICAgICAgICAgICAgICAgICBzdmcuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgICAgICAgc3ZnLnN0eWxlLnRvcCA9ICctMTAwJSc7XG4gICAgICAgICAgICAgICAgICBzdmcuc3R5bGUubGVmdCA9ICctMTAwJSc7XG4gICAgICAgICAgICAgICAgICAvL3RvZG86IHdvcmthcm91bmQgZm9yIHplcm8tZGltZW5zaW9uIDxzdmc+IHRhZyBpbiBPcGVyYSAxMlxuICAgICAgICAgICAgICAgICAgLy9zdmcuc2V0QXR0cmlidXRlKCd3aWR0aCcsIDApO1xuICAgICAgICAgICAgICAgICAgLy9zdmcuc2V0QXR0cmlidXRlKCdoZWlnaHQnLCAwKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHZhciBob2xkZXJUZXh0R3JvdXAgPSByb290Tm9kZS5jaGlsZHJlbi5ob2xkZXJUZXh0R3JvdXA7XG4gICAgICAgICAgICAgIHZhciBodGdQcm9wcyA9IGhvbGRlclRleHRHcm91cC5wcm9wZXJ0aWVzO1xuICAgICAgICAgICAgICBET00uc2V0QXR0cihzdGFnaW5nVGV4dCwge1xuICAgICAgICAgICAgICAgICAgJ3knOiBodGdQcm9wcy5mb250LnNpemUsXG4gICAgICAgICAgICAgICAgICAnc3R5bGUnOiB1dGlscy5jc3NQcm9wcyh7XG4gICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtd2VpZ2h0JzogaHRnUHJvcHMuZm9udC53ZWlnaHQsXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtc2l6ZSc6IGh0Z1Byb3BzLmZvbnQuc2l6ZSArIGh0Z1Byb3BzLmZvbnQudW5pdHMsXG4gICAgICAgICAgICAgICAgICAgICAgJ2ZvbnQtZmFtaWx5JzogaHRnUHJvcHMuZm9udC5mYW1pbHlcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgIC8vVW5lc2NhcGUgSFRNTCBlbnRpdGllcyB0byBnZXQgYXBwcm94aW1hdGVseSB0aGUgcmlnaHQgd2lkdGhcbiAgICAgICAgICAgICAgdmFyIHR4dCA9IERPTS5uZXdFbCgndGV4dGFyZWEnKTtcbiAgICAgICAgICAgICAgdHh0LmlubmVySFRNTCA9IGh0Z1Byb3BzLnRleHQ7XG4gICAgICAgICAgICAgIHN0YWdpbmdUZXh0Tm9kZS5ub2RlVmFsdWUgPSB0eHQudmFsdWU7XG5cbiAgICAgICAgICAgICAgLy9HZXQgYm91bmRpbmcgYm94IGZvciB0aGUgd2hvbGUgc3RyaW5nICh0b3RhbCB3aWR0aCBhbmQgaGVpZ2h0KVxuICAgICAgICAgICAgICB2YXIgc3RhZ2luZ1RleHRCQm94ID0gc3RhZ2luZ1RleHQuZ2V0QkJveCgpO1xuXG4gICAgICAgICAgICAgIC8vR2V0IGxpbmUgY291bnQgYW5kIHNwbGl0IHRoZSBzdHJpbmcgaW50byB3b3Jkc1xuICAgICAgICAgICAgICB2YXIgbGluZUNvdW50ID0gTWF0aC5jZWlsKHN0YWdpbmdUZXh0QkJveC53aWR0aCAvIHJvb3ROb2RlLnByb3BlcnRpZXMud2lkdGgpO1xuICAgICAgICAgICAgICB2YXIgd29yZHMgPSBodGdQcm9wcy50ZXh0LnNwbGl0KCcgJyk7XG4gICAgICAgICAgICAgIHZhciBuZXdsaW5lcyA9IGh0Z1Byb3BzLnRleHQubWF0Y2goL1xcXFxuL2cpO1xuICAgICAgICAgICAgICBsaW5lQ291bnQgKz0gbmV3bGluZXMgPT0gbnVsbCA/IDAgOiBuZXdsaW5lcy5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgLy9HZXQgYm91bmRpbmcgYm94IGZvciB0aGUgc3RyaW5nIHdpdGggc3BhY2VzIHJlbW92ZWRcbiAgICAgICAgICAgICAgc3RhZ2luZ1RleHROb2RlLm5vZGVWYWx1ZSA9IGh0Z1Byb3BzLnRleHQucmVwbGFjZSgvWyBdKy9nLCAnJyk7XG4gICAgICAgICAgICAgIHZhciBjb21wdXRlZE5vU3BhY2VMZW5ndGggPSBzdGFnaW5nVGV4dC5nZXRDb21wdXRlZFRleHRMZW5ndGgoKTtcblxuICAgICAgICAgICAgICAvL0NvbXB1dGUgYXZlcmFnZSBzcGFjZSB3aWR0aFxuICAgICAgICAgICAgICB2YXIgZGlmZkxlbmd0aCA9IHN0YWdpbmdUZXh0QkJveC53aWR0aCAtIGNvbXB1dGVkTm9TcGFjZUxlbmd0aDtcbiAgICAgICAgICAgICAgdmFyIHNwYWNlV2lkdGggPSBNYXRoLnJvdW5kKGRpZmZMZW5ndGggLyBNYXRoLm1heCgxLCB3b3Jkcy5sZW5ndGggLSAxKSk7XG5cbiAgICAgICAgICAgICAgLy9HZXQgd2lkdGhzIGZvciBldmVyeSB3b3JkIHdpdGggc3BhY2Ugb25seSBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lIGxpbmVcbiAgICAgICAgICAgICAgdmFyIHdvcmRXaWR0aHMgPSBbXTtcbiAgICAgICAgICAgICAgaWYgKGxpbmVDb3VudCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgIHN0YWdpbmdUZXh0Tm9kZS5ub2RlVmFsdWUgPSAnJztcbiAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAod29yZHNbaV0ubGVuZ3RoID09PSAwKSBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgICBzdGFnaW5nVGV4dE5vZGUubm9kZVZhbHVlID0gdXRpbHMuZGVjb2RlSHRtbEVudGl0eSh3b3Jkc1tpXSk7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGJib3ggPSBzdGFnaW5nVGV4dC5nZXRCQm94KCk7XG4gICAgICAgICAgICAgICAgICAgICAgd29yZFdpZHRocy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogd29yZHNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBiYm94LndpZHRoXG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAvL0hpZGUgc3RhZ2luZyBlbGVtZW50IGFmdGVyIHN0YWdpbmdcbiAgICAgICAgICAgICAgc3ZnLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIHNwYWNlV2lkdGg6IHNwYWNlV2lkdGgsXG4gICAgICAgICAgICAgICAgICBsaW5lQ291bnQ6IGxpbmVDb3VudCxcbiAgICAgICAgICAgICAgICAgIGJvdW5kaW5nQm94OiBzdGFnaW5nVGV4dEJCb3gsXG4gICAgICAgICAgICAgICAgICB3b3Jkczogd29yZFdpZHRoc1xuICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vdG9kbzogY2FudmFzIGZhbGxiYWNrIGZvciBtZWFzdXJpbmcgdGV4dCBvbiBhbmRyb2lkIDIuM1xuICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgfTtcbiAgfSkoKTtcblxuICAvL0hlbHBlcnNcblxuICAvKipcbiAgICogUHJldmVudHMgYSBmdW5jdGlvbiBmcm9tIGJlaW5nIGNhbGxlZCB0b28gb2Z0ZW4sIHdhaXRzIHVudGlsIGEgdGltZXIgZWxhcHNlcyB0byBjYWxsIGl0IGFnYWluXG4gICAqXG4gICAqIEBwYXJhbSBmbiBGdW5jdGlvbiB0byBjYWxsXG4gICAqL1xuICBmdW5jdGlvbiBkZWJvdW5jZShmbikge1xuICAgICAgaWYgKCFBcHAudmFycy5kZWJvdW5jZVRpbWVyKSBmbi5jYWxsKHRoaXMpO1xuICAgICAgaWYgKEFwcC52YXJzLmRlYm91bmNlVGltZXIpIGdsb2JhbC5jbGVhclRpbWVvdXQoQXBwLnZhcnMuZGVib3VuY2VUaW1lcik7XG4gICAgICBBcHAudmFycy5kZWJvdW5jZVRpbWVyID0gZ2xvYmFsLnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgQXBwLnZhcnMuZGVib3VuY2VUaW1lciA9IG51bGw7XG4gICAgICAgICAgZm4uY2FsbCh0aGlzKTtcbiAgICAgIH0sIEFwcC5zZXR1cC5kZWJvdW5jZSk7XG4gIH1cblxuICAvKipcbiAgICogSG9sZGVyLXNwZWNpZmljIHJlc2l6ZS9vcmllbnRhdGlvbiBjaGFuZ2UgY2FsbGJhY2ssIGRlYm91bmNlZCB0byBwcmV2ZW50IGV4Y2Vzc2l2ZSBleGVjdXRpb25cbiAgICovXG4gIGZ1bmN0aW9uIHJlc2l6ZUV2ZW50KCkge1xuICAgICAgZGVib3VuY2UoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdXBkYXRlUmVzaXphYmxlRWxlbWVudHMobnVsbCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8vU2V0IHVwIGZsYWdzXG5cbiAgZm9yICh2YXIgZmxhZyBpbiBBcHAuZmxhZ3MpIHtcbiAgICAgIGlmICghQXBwLmZsYWdzLmhhc093blByb3BlcnR5KGZsYWcpKSBjb250aW51ZTtcbiAgICAgIEFwcC5mbGFnc1tmbGFnXS5tYXRjaCA9IGZ1bmN0aW9uKHZhbCkge1xuICAgICAgICAgIHJldHVybiB2YWwubWF0Y2godGhpcy5yZWdleCk7XG4gICAgICB9O1xuICB9XG5cbiAgLy9Qcm9wZXJ0aWVzIHNldCBvbmNlIG9uIHNldHVwXG5cbiAgQXBwLnNldHVwID0ge1xuICAgICAgcmVuZGVyZXI6ICdodG1sJyxcbiAgICAgIGRlYm91bmNlOiAxMDAsXG4gICAgICByYXRpbzogMSxcbiAgICAgIHN1cHBvcnRzQ2FudmFzOiBmYWxzZSxcbiAgICAgIHN1cHBvcnRzU1ZHOiBmYWxzZSxcbiAgICAgIGxpbmVXcmFwUmF0aW86IDAuOSxcbiAgICAgIGRhdGFBdHRyOiAnZGF0YS1zcmMnLFxuICAgICAgcmVuZGVyZXJzOiBbJ2h0bWwnLCAnY2FudmFzJywgJ3N2ZyddXG4gIH07XG5cbiAgLy9Qcm9wZXJ0aWVzIG1vZGlmaWVkIGR1cmluZyBydW50aW1lXG5cbiAgQXBwLnZhcnMgPSB7XG4gICAgICBwcmVlbXB0ZWQ6IGZhbHNlLFxuICAgICAgcmVzaXphYmxlSW1hZ2VzOiBbXSxcbiAgICAgIGludmlzaWJsZUltYWdlczoge30sXG4gICAgICBpbnZpc2libGVJZDogMCxcbiAgICAgIHZpc2liaWxpdHlDaGVja1N0YXJ0ZWQ6IGZhbHNlLFxuICAgICAgZGVib3VuY2VUaW1lcjogbnVsbCxcbiAgICAgIGNhY2hlOiB7fVxuICB9O1xuXG4gIC8vUHJlLWZsaWdodFxuXG4gIChmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjYW52YXMgPSBET00ubmV3RWwoJ2NhbnZhcycpO1xuXG4gICAgICBpZiAoY2FudmFzLmdldENvbnRleHQpIHtcbiAgICAgICAgICBpZiAoY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJykuaW5kZXhPZignZGF0YTppbWFnZS9wbmcnKSAhPSAtMSkge1xuICAgICAgICAgICAgICBBcHAuc2V0dXAucmVuZGVyZXIgPSAnY2FudmFzJztcbiAgICAgICAgICAgICAgQXBwLnNldHVwLnN1cHBvcnRzQ2FudmFzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmICghIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyAmJiAhIWRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhTVkdfTlMsICdzdmcnKS5jcmVhdGVTVkdSZWN0KSB7XG4gICAgICAgICAgQXBwLnNldHVwLnJlbmRlcmVyID0gJ3N2Zyc7XG4gICAgICAgICAgQXBwLnNldHVwLnN1cHBvcnRzU1ZHID0gdHJ1ZTtcbiAgICAgIH1cbiAgfSkoKTtcblxuICAvL1N0YXJ0cyBjaGVja2luZyBmb3IgaW52aXNpYmxlIHBsYWNlaG9sZGVyc1xuICBzdGFydFZpc2liaWxpdHlDaGVjaygpO1xuXG4gIGlmIChvbkRvbVJlYWR5KSB7XG4gICAgICBvbkRvbVJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGlmICghQXBwLnZhcnMucHJlZW1wdGVkKSB7XG4gICAgICAgICAgICAgIEhvbGRlci5ydW4oKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKSB7XG4gICAgICAgICAgICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCByZXNpemVFdmVudCwgZmFsc2UpO1xuICAgICAgICAgICAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignb3JpZW50YXRpb25jaGFuZ2UnLCByZXNpemVFdmVudCwgZmFsc2UpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGdsb2JhbC5hdHRhY2hFdmVudCgnb25yZXNpemUnLCByZXNpemVFdmVudCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKHR5cGVvZiBnbG9iYWwuVHVyYm9saW5rcyA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICBnbG9iYWwuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigncGFnZTpjaGFuZ2UnLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIEhvbGRlci5ydW4oKTtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IEhvbGRlcjtcblxuICAvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0pLFxuLyogMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4gIC8qIVxuICAgKiBvbkRvbVJlYWR5LmpzIDEuNC4wIChjKSAyMDEzIFR1YmFsIE1hcnRpbiAtIE1JVCBsaWNlbnNlXG4gICAqXG4gICAqIFNwZWNpYWxseSBtb2RpZmllZCB0byB3b3JrIHdpdGggSG9sZGVyLmpzXG4gICAqL1xuXG4gIGZ1bmN0aW9uIF9vbkRvbVJlYWR5KHdpbikge1xuICAgICAgLy9MYXp5IGxvYWRpbmcgZml4IGZvciBGaXJlZm94IDwgMy42XG4gICAgICAvL2h0dHA6Ly93ZWJyZWZsZWN0aW9uLmJsb2dzcG90LmNvbS8yMDA5LzExLzE5NS1jaGFycy10by1oZWxwLWxhenktbG9hZGluZy5odG1sXG4gICAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PSBudWxsICYmIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiBET01Db250ZW50TG9hZGVkKCkge1xuICAgICAgICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBET01Db250ZW50TG9hZGVkLCBmYWxzZSk7XG4gICAgICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPSBcImNvbXBsZXRlXCI7XG4gICAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICAgIGRvY3VtZW50LnJlYWR5U3RhdGUgPSBcImxvYWRpbmdcIjtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgdmFyIGRvYyA9IHdpbi5kb2N1bWVudCxcbiAgICAgICAgICBkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudCxcbiAgICAgIFxuICAgICAgICAgIExPQUQgPSBcImxvYWRcIixcbiAgICAgICAgICBGQUxTRSA9IGZhbHNlLFxuICAgICAgICAgIE9OTE9BRCA9IFwib25cIitMT0FELFxuICAgICAgICAgIENPTVBMRVRFID0gXCJjb21wbGV0ZVwiLFxuICAgICAgICAgIFJFQURZU1RBVEUgPSBcInJlYWR5U3RhdGVcIixcbiAgICAgICAgICBBVFRBQ0hFVkVOVCA9IFwiYXR0YWNoRXZlbnRcIixcbiAgICAgICAgICBERVRBQ0hFVkVOVCA9IFwiZGV0YWNoRXZlbnRcIixcbiAgICAgICAgICBBRERFVkVOVExJU1RFTkVSID0gXCJhZGRFdmVudExpc3RlbmVyXCIsXG4gICAgICAgICAgRE9NQ09OVEVOVExPQURFRCA9IFwiRE9NQ29udGVudExvYWRlZFwiLFxuICAgICAgICAgIE9OUkVBRFlTVEFURUNIQU5HRSA9IFwib25yZWFkeXN0YXRlY2hhbmdlXCIsXG4gICAgICAgICAgUkVNT1ZFRVZFTlRMSVNURU5FUiA9IFwicmVtb3ZlRXZlbnRMaXN0ZW5lclwiLFxuICAgICAgXG4gICAgICAgICAgLy8gVzNDIEV2ZW50IG1vZGVsXG4gICAgICAgICAgdzNjID0gQURERVZFTlRMSVNURU5FUiBpbiBkb2MsXG4gICAgICAgICAgX3RvcCA9IEZBTFNFLFxuICAgICAgXG4gICAgICAgICAgLy8gaXNSZWFkeTogSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cbiAgICAgICAgICBpc1JlYWR5ID0gRkFMU0UsXG4gICAgICBcbiAgICAgICAgICAvLyBDYWxsYmFja3MgcGVuZGluZyBleGVjdXRpb24gdW50aWwgRE9NIGlzIHJlYWR5XG4gICAgICAgICAgY2FsbGJhY2tzID0gW107XG4gICAgICBcbiAgICAgIC8vIEhhbmRsZSB3aGVuIHRoZSBET00gaXMgcmVhZHlcbiAgICAgIGZ1bmN0aW9uIHJlYWR5KCBmbiApIHtcbiAgICAgICAgICBpZiAoICFpc1JlYWR5ICkge1xuICAgICAgXG4gICAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSBib2R5IGV4aXN0cywgYXQgbGVhc3QsIGluIGNhc2UgSUUgZ2V0cyBhIGxpdHRsZSBvdmVyemVhbG91cyAodGlja2V0ICM1NDQzKS5cbiAgICAgICAgICAgICAgaWYgKCAhZG9jLmJvZHkgKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gZGVmZXIoIHJlYWR5ICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAvLyBSZW1lbWJlciB0aGF0IHRoZSBET00gaXMgcmVhZHlcbiAgICAgICAgICAgICAgaXNSZWFkeSA9IHRydWU7XG4gICAgICBcbiAgICAgICAgICAgICAgLy8gRXhlY3V0ZSBhbGwgY2FsbGJhY2tzXG4gICAgICAgICAgICAgIHdoaWxlICggZm4gPSBjYWxsYmFja3Muc2hpZnQoKSApIHtcbiAgICAgICAgICAgICAgICAgIGRlZmVyKCBmbiApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlclxuICAgICAgZnVuY3Rpb24gY29tcGxldGVkKCBldmVudCApIHtcbiAgICAgICAgICAvLyByZWFkeVN0YXRlID09PSBcImNvbXBsZXRlXCIgaXMgZ29vZCBlbm91Z2ggZm9yIHVzIHRvIGNhbGwgdGhlIGRvbSByZWFkeSBpbiBvbGRJRVxuICAgICAgICAgIGlmICggdzNjIHx8IGV2ZW50LnR5cGUgPT09IExPQUQgfHwgZG9jW1JFQURZU1RBVEVdID09PSBDT01QTEVURSApIHtcbiAgICAgICAgICAgICAgZGV0YWNoKCk7XG4gICAgICAgICAgICAgIHJlYWR5KCk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBDbGVhbi11cCBtZXRob2QgZm9yIGRvbSByZWFkeSBldmVudHNcbiAgICAgIGZ1bmN0aW9uIGRldGFjaCgpIHtcbiAgICAgICAgICBpZiAoIHczYyApIHtcbiAgICAgICAgICAgICAgZG9jW1JFTU9WRUVWRU5UTElTVEVORVJdKCBET01DT05URU5UTE9BREVELCBjb21wbGV0ZWQsIEZBTFNFICk7XG4gICAgICAgICAgICAgIHdpbltSRU1PVkVFVkVOVExJU1RFTkVSXSggTE9BRCwgY29tcGxldGVkLCBGQUxTRSApO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGRvY1tERVRBQ0hFVkVOVF0oIE9OUkVBRFlTVEFURUNIQU5HRSwgY29tcGxldGVkICk7XG4gICAgICAgICAgICAgIHdpbltERVRBQ0hFVkVOVF0oIE9OTE9BRCwgY29tcGxldGVkICk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgXG4gICAgICAvLyBEZWZlcnMgYSBmdW5jdGlvbiwgc2NoZWR1bGluZyBpdCB0byBydW4gYWZ0ZXIgdGhlIGN1cnJlbnQgY2FsbCBzdGFjayBoYXMgY2xlYXJlZC5cbiAgICAgIGZ1bmN0aW9uIGRlZmVyKCBmbiwgd2FpdCApIHtcbiAgICAgICAgICAvLyBBbGxvdyAwIHRvIGJlIHBhc3NlZFxuICAgICAgICAgIHNldFRpbWVvdXQoIGZuLCArd2FpdCA+PSAwID8gd2FpdCA6IDEgKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQXR0YWNoIHRoZSBsaXN0ZW5lcnM6XG4gICAgICBcbiAgICAgIC8vIENhdGNoIGNhc2VzIHdoZXJlIG9uRG9tUmVhZHkgaXMgY2FsbGVkIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuICAgICAgLy8gd2Ugb25jZSB0cmllZCB0byB1c2UgcmVhZHlTdGF0ZSBcImludGVyYWN0aXZlXCIgaGVyZSwgYnV0IGl0IGNhdXNlZCBpc3N1ZXMgbGlrZSB0aGUgb25lXG4gICAgICAvLyBkaXNjb3ZlcmVkIGJ5IENocmlzUyBoZXJlOiBodHRwOi8vYnVncy5qcXVlcnkuY29tL3RpY2tldC8xMjI4MiNjb21tZW50OjE1XG4gICAgICBpZiAoIGRvY1tSRUFEWVNUQVRFXSA9PT0gQ09NUExFVEUgKSB7XG4gICAgICAgICAgLy8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG4gICAgICAgICAgZGVmZXIoIHJlYWR5ICk7XG4gICAgICBcbiAgICAgIC8vIFN0YW5kYXJkcy1iYXNlZCBicm93c2VycyBzdXBwb3J0IERPTUNvbnRlbnRMb2FkZWRcbiAgICAgIH0gZWxzZSBpZiAoIHczYyApIHtcbiAgICAgICAgICAvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG4gICAgICAgICAgZG9jW0FEREVWRU5UTElTVEVORVJdKCBET01DT05URU5UTE9BREVELCBjb21wbGV0ZWQsIEZBTFNFICk7XG4gICAgICBcbiAgICAgICAgICAvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuICAgICAgICAgIHdpbltBRERFVkVOVExJU1RFTkVSXSggTE9BRCwgY29tcGxldGVkLCBGQUxTRSApO1xuICAgICAgXG4gICAgICAvLyBJZiBJRSBldmVudCBtb2RlbCBpcyB1c2VkXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIEVuc3VyZSBmaXJpbmcgYmVmb3JlIG9ubG9hZCwgbWF5YmUgbGF0ZSBidXQgc2FmZSBhbHNvIGZvciBpZnJhbWVzXG4gICAgICAgICAgZG9jW0FUVEFDSEVWRU5UXSggT05SRUFEWVNUQVRFQ0hBTkdFLCBjb21wbGV0ZWQgKTtcbiAgICAgIFxuICAgICAgICAgIC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG4gICAgICAgICAgd2luW0FUVEFDSEVWRU5UXSggT05MT0FELCBjb21wbGV0ZWQgKTtcbiAgICAgIFxuICAgICAgICAgIC8vIElmIElFIGFuZCBub3QgYSBmcmFtZVxuICAgICAgICAgIC8vIGNvbnRpbnVhbGx5IGNoZWNrIHRvIHNlZSBpZiB0aGUgZG9jdW1lbnQgaXMgcmVhZHlcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICBfdG9wID0gd2luLmZyYW1lRWxlbWVudCA9PSBudWxsICYmIGRvY0VsZW07XG4gICAgICAgICAgfSBjYXRjaChlKSB7fVxuICAgICAgXG4gICAgICAgICAgaWYgKCBfdG9wICYmIF90b3AuZG9TY3JvbGwgKSB7XG4gICAgICAgICAgICAgIChmdW5jdGlvbiBkb1Njcm9sbENoZWNrKCkge1xuICAgICAgICAgICAgICAgICAgaWYgKCAhaXNSZWFkeSApIHtcbiAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBVc2UgdGhlIHRyaWNrIGJ5IERpZWdvIFBlcmluaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBodHRwOi8vamF2YXNjcmlwdC5ud2JveC5jb20vSUVDb250ZW50TG9hZGVkL1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfdG9wLmRvU2Nyb2xsKFwibGVmdFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRlZmVyKCBkb1Njcm9sbENoZWNrLCA1MCApO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC8vIGRldGFjaCBhbGwgZG9tIHJlYWR5IGV2ZW50c1xuICAgICAgICAgICAgICAgICAgICAgIGRldGFjaCgpO1xuICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLy8gYW5kIGV4ZWN1dGUgYW55IHdhaXRpbmcgZnVuY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgcmVhZHkoKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICBcbiAgICAgIGZ1bmN0aW9uIG9uRG9tUmVhZHkoIGZuICkge1xuICAgICAgICAgIC8vIElmIERPTSBpcyByZWFkeSwgZXhlY3V0ZSB0aGUgZnVuY3Rpb24gKGFzeW5jKSwgb3RoZXJ3aXNlIHdhaXRcbiAgICAgICAgICBpc1JlYWR5ID8gZGVmZXIoIGZuICkgOiBjYWxsYmFja3MucHVzaCggZm4gKTtcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLy8gQWRkIHZlcnNpb25cbiAgICAgIG9uRG9tUmVhZHkudmVyc2lvbiA9IFwiMS40LjBcIjtcbiAgICAgIC8vIEFkZCBtZXRob2QgdG8gY2hlY2sgaWYgRE9NIGlzIHJlYWR5XG4gICAgICBvbkRvbVJlYWR5LmlzUmVhZHkgPSBmdW5jdGlvbigpe1xuICAgICAgICAgIHJldHVybiBpc1JlYWR5O1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIG9uRG9tUmVhZHk7XG4gIH1cblxuICBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgX29uRG9tUmVhZHkod2luZG93KTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbiAgLy9Nb2RpZmllZCB2ZXJzaW9uIG9mIGNvbXBvbmVudC9xdWVyeXN0cmluZ1xuICAvL0NoYW5nZXM6IHVwZGF0ZWQgZGVwZW5kZW5jaWVzLCBkb3Qgbm90YXRpb24gcGFyc2luZywgSlNIaW50IGZpeGVzXG4gIC8vRm9yayBhdCBodHRwczovL2dpdGh1Yi5jb20vaW1za3kvcXVlcnlzdHJpbmdcblxuICAvKipcbiAgICogTW9kdWxlIGRlcGVuZGVuY2llcy5cbiAgICovXG5cbiAgdmFyIGVuY29kZSA9IGVuY29kZVVSSUNvbXBvbmVudDtcbiAgdmFyIGRlY29kZSA9IGRlY29kZVVSSUNvbXBvbmVudDtcbiAgdmFyIHRyaW0gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xuICB2YXIgdHlwZSA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG5cbiAgdmFyIGFycmF5UmVnZXggPSAvKFxcdyspXFxbKFxcZCspXFxdLztcbiAgdmFyIG9iamVjdFJlZ2V4ID0gL1xcdytcXC5cXHcrLztcblxuICAvKipcbiAgICogUGFyc2UgdGhlIGdpdmVuIHF1ZXJ5IGBzdHJgLlxuICAgKlxuICAgKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gICAqIEByZXR1cm4ge09iamVjdH1cbiAgICogQGFwaSBwdWJsaWNcbiAgICovXG5cbiAgZXhwb3J0cy5wYXJzZSA9IGZ1bmN0aW9uKHN0cil7XG4gICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2Ygc3RyKSByZXR1cm4ge307XG5cbiAgICBzdHIgPSB0cmltKHN0cik7XG4gICAgaWYgKCcnID09PSBzdHIpIHJldHVybiB7fTtcbiAgICBpZiAoJz8nID09PSBzdHIuY2hhckF0KDApKSBzdHIgPSBzdHIuc2xpY2UoMSk7XG5cbiAgICB2YXIgb2JqID0ge307XG4gICAgdmFyIHBhaXJzID0gc3RyLnNwbGl0KCcmJyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwYWlycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhcnRzID0gcGFpcnNbaV0uc3BsaXQoJz0nKTtcbiAgICAgIHZhciBrZXkgPSBkZWNvZGUocGFydHNbMF0pO1xuICAgICAgdmFyIG0sIGN0eCwgcHJvcDtcblxuICAgICAgaWYgKG0gPSBhcnJheVJlZ2V4LmV4ZWMoa2V5KSkge1xuICAgICAgICBvYmpbbVsxXV0gPSBvYmpbbVsxXV0gfHwgW107XG4gICAgICAgIG9ialttWzFdXVttWzJdXSA9IGRlY29kZShwYXJ0c1sxXSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobSA9IG9iamVjdFJlZ2V4LnRlc3Qoa2V5KSkge1xuICAgICAgICBtID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgIGN0eCA9IG9iajtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlIChtLmxlbmd0aCkge1xuICAgICAgICAgIHByb3AgPSBtLnNoaWZ0KCk7XG5cbiAgICAgICAgICBpZiAoIXByb3AubGVuZ3RoKSBjb250aW51ZTtcblxuICAgICAgICAgIGlmICghY3R4W3Byb3BdKSB7XG4gICAgICAgICAgICBjdHhbcHJvcF0gPSB7fTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGN0eFtwcm9wXSAmJiB0eXBlb2YgY3R4W3Byb3BdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFtLmxlbmd0aCkge1xuICAgICAgICAgICAgY3R4W3Byb3BdID0gZGVjb2RlKHBhcnRzWzFdKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjdHggPSBjdHhbcHJvcF07XG4gICAgICAgIH1cblxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgb2JqW3BhcnRzWzBdXSA9IG51bGwgPT0gcGFydHNbMV0gPyAnJyA6IGRlY29kZShwYXJ0c1sxXSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG9iajtcbiAgfTtcblxuICAvKipcbiAgICogU3RyaW5naWZ5IHRoZSBnaXZlbiBgb2JqYC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IG9ialxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIGV4cG9ydHMuc3RyaW5naWZ5ID0gZnVuY3Rpb24ob2JqKXtcbiAgICBpZiAoIW9iaikgcmV0dXJuICcnO1xuICAgIHZhciBwYWlycyA9IFtdO1xuXG4gICAgZm9yICh2YXIga2V5IGluIG9iaikge1xuICAgICAgdmFyIHZhbHVlID0gb2JqW2tleV07XG5cbiAgICAgIGlmICgnYXJyYXknID09IHR5cGUodmFsdWUpKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmFsdWUubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBwYWlycy5wdXNoKGVuY29kZShrZXkgKyAnWycgKyBpICsgJ10nKSArICc9JyArIGVuY29kZSh2YWx1ZVtpXSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBwYWlycy5wdXNoKGVuY29kZShrZXkpICsgJz0nICsgZW5jb2RlKG9ialtrZXldKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhaXJzLmpvaW4oJyYnKTtcbiAgfTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuICBcbiAgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHJpbTtcblxuICBmdW5jdGlvbiB0cmltKHN0cil7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKnxcXHMqJC9nLCAnJyk7XG4gIH1cblxuICBleHBvcnRzLmxlZnQgPSBmdW5jdGlvbihzdHIpe1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXlxccyovLCAnJyk7XG4gIH07XG5cbiAgZXhwb3J0cy5yaWdodCA9IGZ1bmN0aW9uKHN0cil7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHMqJC8sICcnKTtcbiAgfTtcblxuXG4vKioqLyB9KSxcbi8qIDUgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAvKipcbiAgICogdG9TdHJpbmcgcmVmLlxuICAgKi9cblxuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHR5cGUgb2YgYHZhbGAuXG4gICAqXG4gICAqIEBwYXJhbSB7TWl4ZWR9IHZhbFxuICAgKiBAcmV0dXJuIHtTdHJpbmd9XG4gICAqIEBhcGkgcHVibGljXG4gICAqL1xuXG4gIG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odmFsKXtcbiAgICBzd2l0Y2ggKHRvU3RyaW5nLmNhbGwodmFsKSkge1xuICAgICAgY2FzZSAnW29iamVjdCBEYXRlXSc6IHJldHVybiAnZGF0ZSc7XG4gICAgICBjYXNlICdbb2JqZWN0IFJlZ0V4cF0nOiByZXR1cm4gJ3JlZ2V4cCc7XG4gICAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOiByZXR1cm4gJ2FyZ3VtZW50cyc7XG4gICAgICBjYXNlICdbb2JqZWN0IEFycmF5XSc6IHJldHVybiAnYXJyYXknO1xuICAgICAgY2FzZSAnW29iamVjdCBFcnJvcl0nOiByZXR1cm4gJ2Vycm9yJztcbiAgICB9XG5cbiAgICBpZiAodmFsID09PSBudWxsKSByZXR1cm4gJ251bGwnO1xuICAgIGlmICh2YWwgPT09IHVuZGVmaW5lZCkgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIGlmICh2YWwgIT09IHZhbCkgcmV0dXJuICduYW4nO1xuICAgIGlmICh2YWwgJiYgdmFsLm5vZGVUeXBlID09PSAxKSByZXR1cm4gJ2VsZW1lbnQnO1xuXG4gICAgaWYgKGlzQnVmZmVyKHZhbCkpIHJldHVybiAnYnVmZmVyJztcblxuICAgIHZhbCA9IHZhbC52YWx1ZU9mXG4gICAgICA/IHZhbC52YWx1ZU9mKClcbiAgICAgIDogT2JqZWN0LnByb3RvdHlwZS52YWx1ZU9mLmFwcGx5KHZhbCk7XG5cbiAgICByZXR1cm4gdHlwZW9mIHZhbDtcbiAgfTtcblxuICAvLyBjb2RlIGJvcnJvd2VkIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL2Zlcm9zcy9pcy1idWZmZXIvYmxvYi9tYXN0ZXIvaW5kZXguanNcbiAgZnVuY3Rpb24gaXNCdWZmZXIob2JqKSB7XG4gICAgcmV0dXJuICEhKG9iaiAhPSBudWxsICYmXG4gICAgICAob2JqLl9pc0J1ZmZlciB8fCAvLyBGb3IgU2FmYXJpIDUtNyAobWlzc2luZyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yKVxuICAgICAgICAob2JqLmNvbnN0cnVjdG9yICYmXG4gICAgICAgIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiZcbiAgICAgICAgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iaikpXG4gICAgICApKVxuICB9XG5cblxuLyoqKi8gfSksXG4vKiA2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgdmFyIFNjZW5lR3JhcGggPSBmdW5jdGlvbihzY2VuZVByb3BlcnRpZXMpIHtcbiAgICAgIHZhciBub2RlQ291bnQgPSAxO1xuXG4gICAgICAvL3RvZG86IG1vdmUgbWVyZ2UgdG8gaGVscGVycyBzZWN0aW9uXG4gICAgICBmdW5jdGlvbiBtZXJnZShwYXJlbnQsIGNoaWxkKSB7XG4gICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBjaGlsZCkge1xuICAgICAgICAgICAgICBwYXJlbnRbcHJvcF0gPSBjaGlsZFtwcm9wXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHBhcmVudDtcbiAgICAgIH1cblxuICAgICAgdmFyIFNjZW5lTm9kZSA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICAgICAgICBub2RlQ291bnQrKztcbiAgICAgICAgICB0aGlzLnBhcmVudCA9IG51bGw7XG4gICAgICAgICAgdGhpcy5jaGlsZHJlbiA9IHt9O1xuICAgICAgICAgIHRoaXMuaWQgPSBub2RlQ291bnQ7XG4gICAgICAgICAgdGhpcy5uYW1lID0gJ24nICsgbm9kZUNvdW50O1xuICAgICAgICAgIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy54ID0gdGhpcy55ID0gdGhpcy56ID0gMDtcbiAgICAgICAgICB0aGlzLndpZHRoID0gdGhpcy5oZWlnaHQgPSAwO1xuICAgICAgfTtcblxuICAgICAgU2NlbmVOb2RlLnByb3RvdHlwZS5yZXNpemUgPSBmdW5jdGlvbih3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgICAgaWYgKHdpZHRoICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGVpZ2h0ICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgU2NlbmVOb2RlLnByb3RvdHlwZS5tb3ZlVG8gPSBmdW5jdGlvbih4LCB5LCB6KSB7XG4gICAgICAgICAgdGhpcy54ID0geCAhPSBudWxsID8geCA6IHRoaXMueDtcbiAgICAgICAgICB0aGlzLnkgPSB5ICE9IG51bGwgPyB5IDogdGhpcy55O1xuICAgICAgICAgIHRoaXMueiA9IHogIT0gbnVsbCA/IHogOiB0aGlzLno7XG4gICAgICB9O1xuXG4gICAgICBTY2VuZU5vZGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGNoaWxkKSB7XG4gICAgICAgICAgdmFyIG5hbWUgPSBjaGlsZC5uYW1lO1xuICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5jaGlsZHJlbltuYW1lXSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgdGhpcy5jaGlsZHJlbltuYW1lXSA9IGNoaWxkO1xuICAgICAgICAgICAgICBjaGlsZC5wYXJlbnQgPSB0aGlzO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRocm93ICdTY2VuZUdyYXBoOiBjaGlsZCBhbHJlYWR5IGV4aXN0czogJyArIG5hbWU7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgdmFyIFJvb3ROb2RlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgU2NlbmVOb2RlLmNhbGwodGhpcywgJ3Jvb3QnKTtcbiAgICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBzY2VuZVByb3BlcnRpZXM7XG4gICAgICB9O1xuXG4gICAgICBSb290Tm9kZS5wcm90b3R5cGUgPSBuZXcgU2NlbmVOb2RlKCk7XG5cbiAgICAgIHZhciBTaGFwZSA9IGZ1bmN0aW9uKG5hbWUsIHByb3BzKSB7XG4gICAgICAgICAgU2NlbmVOb2RlLmNhbGwodGhpcywgbmFtZSk7XG4gICAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0ge1xuICAgICAgICAgICAgICAnZmlsbCc6ICcjMDAwMDAwJ1xuICAgICAgICAgIH07XG4gICAgICAgICAgaWYgKHR5cGVvZiBwcm9wcyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgbWVyZ2UodGhpcy5wcm9wZXJ0aWVzLCBwcm9wcyk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbmFtZSAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIG5hbWUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIHRocm93ICdTY2VuZUdyYXBoOiBpbnZhbGlkIG5vZGUgbmFtZSc7XG4gICAgICAgICAgfVxuICAgICAgfTtcblxuICAgICAgU2hhcGUucHJvdG90eXBlID0gbmV3IFNjZW5lTm9kZSgpO1xuXG4gICAgICB2YXIgR3JvdXAgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBTaGFwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHRoaXMudHlwZSA9ICdncm91cCc7XG4gICAgICB9O1xuXG4gICAgICBHcm91cC5wcm90b3R5cGUgPSBuZXcgU2hhcGUoKTtcblxuICAgICAgdmFyIFJlY3QgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBTaGFwZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgICAgIHRoaXMudHlwZSA9ICdyZWN0JztcbiAgICAgIH07XG5cbiAgICAgIFJlY3QucHJvdG90eXBlID0gbmV3IFNoYXBlKCk7XG5cbiAgICAgIHZhciBUZXh0ID0gZnVuY3Rpb24odGV4dCkge1xuICAgICAgICAgIFNoYXBlLmNhbGwodGhpcyk7XG4gICAgICAgICAgdGhpcy50eXBlID0gJ3RleHQnO1xuICAgICAgICAgIHRoaXMucHJvcGVydGllcy50ZXh0ID0gdGV4dDtcbiAgICAgIH07XG5cbiAgICAgIFRleHQucHJvdG90eXBlID0gbmV3IFNoYXBlKCk7XG5cbiAgICAgIHZhciByb290ID0gbmV3IFJvb3ROb2RlKCk7XG5cbiAgICAgIHRoaXMuU2hhcGUgPSB7XG4gICAgICAgICAgJ1JlY3QnOiBSZWN0LFxuICAgICAgICAgICdUZXh0JzogVGV4dCxcbiAgICAgICAgICAnR3JvdXAnOiBHcm91cFxuICAgICAgfTtcblxuICAgICAgdGhpcy5yb290ID0gcm9vdDtcbiAgICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIG1vZHVsZS5leHBvcnRzID0gU2NlbmVHcmFwaDtcblxuXG4vKioqLyB9KSxcbi8qIDcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuICAvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi8oZnVuY3Rpb24oZ2xvYmFsKSB7LyoqXG4gICAqIFNoYWxsb3cgb2JqZWN0IGNsb25lIGFuZCBtZXJnZVxuICAgKlxuICAgKiBAcGFyYW0gYSBPYmplY3QgQVxuICAgKiBAcGFyYW0gYiBPYmplY3QgQlxuICAgKiBAcmV0dXJucyB7T2JqZWN0fSBOZXcgb2JqZWN0IHdpdGggYWxsIG9mIEEncyBwcm9wZXJ0aWVzLCBhbmQgYWxsIG9mIEIncyBwcm9wZXJ0aWVzLCBvdmVyd3JpdGluZyBBJ3MgcHJvcGVydGllc1xuICAgKi9cbiAgZXhwb3J0cy5leHRlbmQgPSBmdW5jdGlvbihhLCBiKSB7XG4gICAgICB2YXIgYyA9IHt9O1xuICAgICAgZm9yICh2YXIgeCBpbiBhKSB7XG4gICAgICAgICAgaWYgKGEuaGFzT3duUHJvcGVydHkoeCkpIHtcbiAgICAgICAgICAgICAgY1t4XSA9IGFbeF07XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGIgIT0gbnVsbCkge1xuICAgICAgICAgIGZvciAodmFyIHkgaW4gYikge1xuICAgICAgICAgICAgICBpZiAoYi5oYXNPd25Qcm9wZXJ0eSh5KSkge1xuICAgICAgICAgICAgICAgICAgY1t5XSA9IGJbeV07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYztcbiAgfTtcblxuICAvKipcbiAgICogVGFrZXMgYSBrL3YgbGlzdCBvZiBDU1MgcHJvcGVydGllcyBhbmQgcmV0dXJucyBhIHJ1bGVcbiAgICpcbiAgICogQHBhcmFtIHByb3BzIENTUyBwcm9wZXJ0aWVzIG9iamVjdFxuICAgKi9cbiAgZXhwb3J0cy5jc3NQcm9wcyA9IGZ1bmN0aW9uKHByb3BzKSB7XG4gICAgICB2YXIgcmV0ID0gW107XG4gICAgICBmb3IgKHZhciBwIGluIHByb3BzKSB7XG4gICAgICAgICAgaWYgKHByb3BzLmhhc093blByb3BlcnR5KHApKSB7XG4gICAgICAgICAgICAgIHJldC5wdXNoKHAgKyAnOicgKyBwcm9wc1twXSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHJldC5qb2luKCc7Jyk7XG4gIH07XG5cbiAgLyoqXG4gICAqIEVuY29kZXMgSFRNTCBlbnRpdGllcyBpbiBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gc3RyIElucHV0IHN0cmluZ1xuICAgKi9cbiAgZXhwb3J0cy5lbmNvZGVIdG1sRW50aXR5ID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICB2YXIgYnVmID0gW107XG4gICAgICB2YXIgY2hhckNvZGUgPSAwO1xuICAgICAgZm9yICh2YXIgaSA9IHN0ci5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGNoYXJDb2RlID0gc3RyLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgICAgaWYgKGNoYXJDb2RlID4gMTI4KSB7XG4gICAgICAgICAgICAgIGJ1Zi51bnNoaWZ0KFsnJiMnLCBjaGFyQ29kZSwgJzsnXS5qb2luKCcnKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgYnVmLnVuc2hpZnQoc3RyW2ldKTtcbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYnVmLmpvaW4oJycpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgYW4gaW1hZ2UgZXhpc3RzXG4gICAqXG4gICAqIEBwYXJhbSBzcmMgVVJMIG9mIGltYWdlXG4gICAqIEBwYXJhbSBjYWxsYmFjayBDYWxsYmFjayB0byBjYWxsIG9uY2UgaW1hZ2Ugc3RhdHVzIGhhcyBiZWVuIGZvdW5kXG4gICAqL1xuICBleHBvcnRzLmltYWdlRXhpc3RzID0gZnVuY3Rpb24oc3JjLCBjYWxsYmFjaykge1xuICAgICAgdmFyIGltYWdlID0gbmV3IEltYWdlKCk7XG4gICAgICBpbWFnZS5vbmVycm9yID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCBmYWxzZSk7XG4gICAgICB9O1xuICAgICAgaW1hZ2Uub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgY2FsbGJhY2suY2FsbCh0aGlzLCB0cnVlKTtcbiAgICAgIH07XG4gICAgICBpbWFnZS5zcmMgPSBzcmM7XG4gIH07XG5cbiAgLyoqXG4gICAqIERlY29kZXMgSFRNTCBlbnRpdGllcyBpbiBhIHN0cmluZ1xuICAgKlxuICAgKiBAcGFyYW0gc3RyIElucHV0IHN0cmluZ1xuICAgKi9cbiAgZXhwb3J0cy5kZWNvZGVIdG1sRW50aXR5ID0gZnVuY3Rpb24oc3RyKSB7XG4gICAgICByZXR1cm4gc3RyLnJlcGxhY2UoLyYjKFxcZCspOy9nLCBmdW5jdGlvbihtYXRjaCwgZGVjKSB7XG4gICAgICAgICAgcmV0dXJuIFN0cmluZy5mcm9tQ2hhckNvZGUoZGVjKTtcbiAgICAgIH0pO1xuICB9O1xuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgYW4gZWxlbWVudCdzIGRpbWVuc2lvbnMgaWYgaXQncyB2aXNpYmxlLCBgZmFsc2VgIG90aGVyd2lzZS5cbiAgICpcbiAgICogQHBhcmFtIGVsIERPTSBlbGVtZW50XG4gICAqL1xuICBleHBvcnRzLmRpbWVuc2lvbkNoZWNrID0gZnVuY3Rpb24oZWwpIHtcbiAgICAgIHZhciBkaW1lbnNpb25zID0ge1xuICAgICAgICAgIGhlaWdodDogZWwuY2xpZW50SGVpZ2h0LFxuICAgICAgICAgIHdpZHRoOiBlbC5jbGllbnRXaWR0aFxuICAgICAgfTtcblxuICAgICAgaWYgKGRpbWVuc2lvbnMuaGVpZ2h0ICYmIGRpbWVuc2lvbnMud2lkdGgpIHtcbiAgICAgICAgICByZXR1cm4gZGltZW5zaW9ucztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICB9O1xuXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB2YWx1ZSBpcyB0cnV0aHkgb3IgaWYgaXQgaXMgXCJzZW1hbnRpY2FsbHkgdHJ1dGh5XCJcbiAgICogQHBhcmFtIHZhbFxuICAgKi9cbiAgZXhwb3J0cy50cnV0aHkgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgIGlmICh0eXBlb2YgdmFsID09PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHVybiB2YWwgPT09ICd0cnVlJyB8fCB2YWwgPT09ICd5ZXMnIHx8IHZhbCA9PT0gJzEnIHx8IHZhbCA9PT0gJ29uJyB8fCB2YWwgPT09ICfinJMnO1xuICAgICAgfVxuICAgICAgcmV0dXJuICEhdmFsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQYXJzZXMgaW5wdXQgaW50byBhIHdlbGwtZm9ybWVkIENTUyBjb2xvclxuICAgKiBAcGFyYW0gdmFsXG4gICAqL1xuICBleHBvcnRzLnBhcnNlQ29sb3IgPSBmdW5jdGlvbih2YWwpIHtcbiAgICAgIHZhciBoZXhyZSA9IC8oXig/OiM/KVswLTlhLWZdezZ9JCl8KF4oPzojPylbMC05YS1mXXszfSQpL2k7XG4gICAgICB2YXIgcmdicmUgPSAvXnJnYlxcKChcXGR7MSwzfSlcXHMqLFxccyooXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccypcXCkkLztcbiAgICAgIHZhciByZ2JhcmUgPSAvXnJnYmFcXCgoXFxkezEsM30pXFxzKixcXHMqKFxcZHsxLDN9KVxccyosXFxzKihcXGR7MSwzfSlcXHMqLFxccyooMFxcLlxcZHsxLH18MSlcXCkkLztcblxuICAgICAgdmFyIG1hdGNoID0gdmFsLm1hdGNoKGhleHJlKTtcbiAgICAgIHZhciByZXR2YWw7XG5cbiAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHZhbCA9IG1hdGNoWzFdIHx8IG1hdGNoWzJdO1xuICAgICAgICAgIGlmIChyZXR2YWxbMF0gIT09ICcjJykge1xuICAgICAgICAgICAgICByZXR1cm4gJyMnICsgcmV0dmFsO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXR2YWw7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtYXRjaCA9IHZhbC5tYXRjaChyZ2JyZSk7XG5cbiAgICAgIGlmIChtYXRjaCAhPT0gbnVsbCkge1xuICAgICAgICAgIHJldHZhbCA9ICdyZ2IoJyArIG1hdGNoLnNsaWNlKDEpLmpvaW4oJywnKSArICcpJztcbiAgICAgICAgICByZXR1cm4gcmV0dmFsO1xuICAgICAgfVxuXG4gICAgICBtYXRjaCA9IHZhbC5tYXRjaChyZ2JhcmUpO1xuXG4gICAgICBpZiAobWF0Y2ggIT09IG51bGwpIHtcbiAgICAgICAgICByZXR2YWwgPSAncmdiYSgnICsgbWF0Y2guc2xpY2UoMSkuam9pbignLCcpICsgJyknO1xuICAgICAgICAgIHJldHVybiByZXR2YWw7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBudWxsO1xuICB9O1xuXG4gIC8qKlxuICAgKiBQcm92aWRlcyB0aGUgY29ycmVjdCBzY2FsaW5nIHJhdGlvIGZvciBjYW52YXMgZHJhd2luZyBvcGVyYXRpb25zIG9uIEhpRFBJIHNjcmVlbnMgKGUuZy4gUmV0aW5hIGRpc3BsYXlzKVxuICAgKi9cbiAgZXhwb3J0cy5jYW52YXNSYXRpbyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciBkZXZpY2VQaXhlbFJhdGlvID0gMTtcbiAgICAgIHZhciBiYWNraW5nU3RvcmVSYXRpbyA9IDE7XG5cbiAgICAgIGlmIChnbG9iYWwuZG9jdW1lbnQpIHtcbiAgICAgICAgICB2YXIgY2FudmFzID0gZ2xvYmFsLmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xuICAgICAgICAgIGlmIChjYW52YXMuZ2V0Q29udGV4dCkge1xuICAgICAgICAgICAgICB2YXIgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG4gICAgICAgICAgICAgIGRldmljZVBpeGVsUmF0aW8gPSBnbG9iYWwuZGV2aWNlUGl4ZWxSYXRpbyB8fCAxO1xuICAgICAgICAgICAgICBiYWNraW5nU3RvcmVSYXRpbyA9IGN0eC53ZWJraXRCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGN0eC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGN0eC5tc0JhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY3R4Lm9CYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGN0eC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGV2aWNlUGl4ZWxSYXRpbyAvIGJhY2tpbmdTdG9yZVJhdGlvO1xuICB9O1xuICAvKiBXRUJQQUNLIFZBUiBJTkpFQ1RJT04gKi99LmNhbGwoZXhwb3J0cywgKGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSgpKSkpXG5cbi8qKiovIH0pLFxuLyogOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4gIC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqLyhmdW5jdGlvbihnbG9iYWwpIHt2YXIgRE9NID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcblxuICB2YXIgU1ZHX05TID0gJ2h0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnJztcbiAgdmFyIE5PREVfVFlQRV9DT01NRU5UID0gODtcblxuICAvKipcbiAgICogR2VuZXJpYyBTVkcgZWxlbWVudCBjcmVhdGlvbiBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0gc3ZnIFNWRyBjb250ZXh0LCBzZXQgdG8gbnVsbCBpZiBuZXdcbiAgICogQHBhcmFtIHdpZHRoIERvY3VtZW50IHdpZHRoXG4gICAqIEBwYXJhbSBoZWlnaHQgRG9jdW1lbnQgaGVpZ2h0XG4gICAqL1xuICBleHBvcnRzLmluaXRTVkcgPSBmdW5jdGlvbihzdmcsIHdpZHRoLCBoZWlnaHQpIHtcbiAgICAgIHZhciBkZWZzLCBzdHlsZSwgaW5pdGlhbGl6ZSA9IGZhbHNlO1xuXG4gICAgICBpZiAoc3ZnICYmIHN2Zy5xdWVyeVNlbGVjdG9yKSB7XG4gICAgICAgICAgc3R5bGUgPSBzdmcucXVlcnlTZWxlY3Rvcignc3R5bGUnKTtcbiAgICAgICAgICBpZiAoc3R5bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgaW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBzdmcgPSBET00ubmV3RWwoJ3N2ZycsIFNWR19OUyk7XG4gICAgICAgICAgaW5pdGlhbGl6ZSA9IHRydWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChpbml0aWFsaXplKSB7XG4gICAgICAgICAgZGVmcyA9IERPTS5uZXdFbCgnZGVmcycsIFNWR19OUyk7XG4gICAgICAgICAgc3R5bGUgPSBET00ubmV3RWwoJ3N0eWxlJywgU1ZHX05TKTtcbiAgICAgICAgICBET00uc2V0QXR0cihzdHlsZSwge1xuICAgICAgICAgICAgICAndHlwZSc6ICd0ZXh0L2NzcydcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBkZWZzLmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgICAgICAgICBzdmcuYXBwZW5kQ2hpbGQoZGVmcyk7XG4gICAgICB9XG5cbiAgICAgIC8vSUUgdGhyb3dzIGFuIGV4Y2VwdGlvbiBpZiB0aGlzIGlzIHNldCBhbmQgQ2hyb21lIHJlcXVpcmVzIGl0IHRvIGJlIHNldFxuICAgICAgaWYgKHN2Zy53ZWJraXRNYXRjaGVzU2VsZWN0b3IpIHtcbiAgICAgICAgICBzdmcuc2V0QXR0cmlidXRlKCd4bWxucycsIFNWR19OUyk7XG4gICAgICB9XG5cbiAgICAgIC8vUmVtb3ZlIGNvbW1lbnQgbm9kZXNcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc3ZnLmNoaWxkTm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoc3ZnLmNoaWxkTm9kZXNbaV0ubm9kZVR5cGUgPT09IE5PREVfVFlQRV9DT01NRU5UKSB7XG4gICAgICAgICAgICAgIHN2Zy5yZW1vdmVDaGlsZChzdmcuY2hpbGROb2Rlc1tpXSk7XG4gICAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvL1JlbW92ZSBDU1NcbiAgICAgIHdoaWxlIChzdHlsZS5jaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmNoaWxkTm9kZXNbMF0pO1xuICAgICAgfVxuXG4gICAgICBET00uc2V0QXR0cihzdmcsIHtcbiAgICAgICAgICAnd2lkdGgnOiB3aWR0aCxcbiAgICAgICAgICAnaGVpZ2h0JzogaGVpZ2h0LFxuICAgICAgICAgICd2aWV3Qm94JzogJzAgMCAnICsgd2lkdGggKyAnICcgKyBoZWlnaHQsXG4gICAgICAgICAgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nOiAnbm9uZSdcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gc3ZnO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBzZXJpYWxpemVkIFNWRyB0byBhIHN0cmluZyBzdWl0YWJsZSBmb3IgZGF0YSBVUkkgdXNlXG4gICAqIEBwYXJhbSBzdmdTdHJpbmcgU2VyaWFsaXplZCBTVkcgc3RyaW5nXG4gICAqIEBwYXJhbSBbYmFzZTY0XSBVc2UgYmFzZTY0IGVuY29kaW5nIGZvciBkYXRhIFVSSVxuICAgKi9cbiAgZXhwb3J0cy5zdmdTdHJpbmdUb0RhdGFVUkkgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByYXdQcmVmaXggPSAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTgsJztcbiAgICAgIHZhciBiYXNlNjRQcmVmaXggPSAnZGF0YTppbWFnZS9zdmcreG1sO2NoYXJzZXQ9VVRGLTg7YmFzZTY0LCc7XG5cbiAgICAgIHJldHVybiBmdW5jdGlvbihzdmdTdHJpbmcsIGJhc2U2NCkge1xuICAgICAgICAgIGlmIChiYXNlNjQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGJhc2U2NFByZWZpeCArIGJ0b2EoZ2xvYmFsLnVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChzdmdTdHJpbmcpKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHJhd1ByZWZpeCArIGVuY29kZVVSSUNvbXBvbmVudChzdmdTdHJpbmcpO1xuICAgICAgICAgIH1cbiAgICAgIH07XG4gIH0oKTtcblxuICAvKipcbiAgICogUmV0dXJucyBzZXJpYWxpemVkIFNWRyB3aXRoIFhNTCBwcm9jZXNzaW5nIGluc3RydWN0aW9uc1xuICAgKlxuICAgKiBAcGFyYW0gc3ZnIFNWRyBjb250ZXh0XG4gICAqIEBwYXJhbSBzdHlsZXNoZWV0cyBDU1Mgc3R5bGVzaGVldHMgdG8gaW5jbHVkZVxuICAgKi9cbiAgZXhwb3J0cy5zZXJpYWxpemVTVkcgPSBmdW5jdGlvbihzdmcsIGVuZ2luZVNldHRpbmdzKSB7XG4gICAgICBpZiAoIWdsb2JhbC5YTUxTZXJpYWxpemVyKSByZXR1cm47XG4gICAgICB2YXIgc2VyaWFsaXplciA9IG5ldyBYTUxTZXJpYWxpemVyKCk7XG4gICAgICB2YXIgc3ZnQ1NTID0gJyc7XG4gICAgICB2YXIgc3R5bGVzaGVldHMgPSBlbmdpbmVTZXR0aW5ncy5zdHlsZXNoZWV0cztcblxuICAgICAgLy9FeHRlcm5hbCBzdHlsZXNoZWV0czogUHJvY2Vzc2luZyBJbnN0cnVjdGlvbiBtZXRob2RcbiAgICAgIGlmIChlbmdpbmVTZXR0aW5ncy5zdmdYTUxTdHlsZXNoZWV0KSB7XG4gICAgICAgICAgdmFyIHhtbCA9IERPTS5jcmVhdGVYTUwoKTtcbiAgICAgICAgICAvL0FkZCA8P3htbC1zdHlsZXNoZWV0ID8+IGRpcmVjdGl2ZXNcbiAgICAgICAgICBmb3IgKHZhciBpID0gc3R5bGVzaGVldHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgdmFyIGNzc3BpID0geG1sLmNyZWF0ZVByb2Nlc3NpbmdJbnN0cnVjdGlvbigneG1sLXN0eWxlc2hlZXQnLCAnaHJlZj1cIicgKyBzdHlsZXNoZWV0c1tpXSArICdcIiByZWw9XCJzdHlsZXNoZWV0XCInKTtcbiAgICAgICAgICAgICAgeG1sLmluc2VydEJlZm9yZShjc3NwaSwgeG1sLmZpcnN0Q2hpbGQpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHhtbC5yZW1vdmVDaGlsZCh4bWwuZG9jdW1lbnRFbGVtZW50KTtcbiAgICAgICAgICBzdmdDU1MgPSBzZXJpYWxpemVyLnNlcmlhbGl6ZVRvU3RyaW5nKHhtbCk7XG4gICAgICB9XG5cbiAgICAgIHZhciBzdmdUZXh0ID0gc2VyaWFsaXplci5zZXJpYWxpemVUb1N0cmluZyhzdmcpO1xuICAgICAgc3ZnVGV4dCA9IHN2Z1RleHQucmVwbGFjZSgvXFwmYW1wOyhcXCNbMC05XXsyLH1cXDspL2csICcmJDEnKTtcbiAgICAgIHJldHVybiBzdmdDU1MgKyBzdmdUZXh0O1xuICB9O1xuXG4gIC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSksXG4vKiA5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbiAgLyogV0VCUEFDSyBWQVIgSU5KRUNUSU9OICovKGZ1bmN0aW9uKGdsb2JhbCkgey8qKlxuICAgKiBHZW5lcmljIG5ldyBET00gZWxlbWVudCBmdW5jdGlvblxuICAgKlxuICAgKiBAcGFyYW0gdGFnIFRhZyB0byBjcmVhdGVcbiAgICogQHBhcmFtIG5hbWVzcGFjZSBPcHRpb25hbCBuYW1lc3BhY2UgdmFsdWVcbiAgICovXG4gIGV4cG9ydHMubmV3RWwgPSBmdW5jdGlvbih0YWcsIG5hbWVzcGFjZSkge1xuICAgICAgaWYgKCFnbG9iYWwuZG9jdW1lbnQpIHJldHVybjtcblxuICAgICAgaWYgKG5hbWVzcGFjZSA9PSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIGdsb2JhbC5kb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBnbG9iYWwuZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKG5hbWVzcGFjZSwgdGFnKTtcbiAgICAgIH1cbiAgfTtcblxuICAvKipcbiAgICogR2VuZXJpYyBzZXRBdHRyaWJ1dGUgZnVuY3Rpb25cbiAgICpcbiAgICogQHBhcmFtIGVsIFJlZmVyZW5jZSB0byBET00gZWxlbWVudFxuICAgKiBAcGFyYW0gYXR0cnMgT2JqZWN0IHdpdGggYXR0cmlidXRlIGtleXMgYW5kIHZhbHVlc1xuICAgKi9cbiAgZXhwb3J0cy5zZXRBdHRyID0gZnVuY3Rpb24gKGVsLCBhdHRycykge1xuICAgICAgZm9yICh2YXIgYSBpbiBhdHRycykge1xuICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZShhLCBhdHRyc1thXSk7XG4gICAgICB9XG4gIH07XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBYTUwgZG9jdW1lbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGV4cG9ydHMuY3JlYXRlWE1MID0gZnVuY3Rpb24oKSB7XG4gICAgICBpZiAoIWdsb2JhbC5ET01QYXJzZXIpIHJldHVybjtcbiAgICAgIHJldHVybiBuZXcgRE9NUGFyc2VyKCkucGFyc2VGcm9tU3RyaW5nKCc8eG1sIC8+JywgJ2FwcGxpY2F0aW9uL3htbCcpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhIHZhbHVlIGludG8gYW4gYXJyYXkgb2YgRE9NIG5vZGVzXG4gICAqXG4gICAqIEBwYXJhbSB2YWwgQSBzdHJpbmcsIGEgTm9kZUxpc3QsIGEgTm9kZSwgb3IgYW4gSFRNTENvbGxlY3Rpb25cbiAgICovXG4gIGV4cG9ydHMuZ2V0Tm9kZUFycmF5ID0gZnVuY3Rpb24odmFsKSB7XG4gICAgICB2YXIgcmV0dmFsID0gbnVsbDtcbiAgICAgIGlmICh0eXBlb2YodmFsKSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgIHJldHZhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodmFsKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk5vZGVMaXN0ICYmIHZhbCBpbnN0YW5jZW9mIGdsb2JhbC5Ob2RlTGlzdCkge1xuICAgICAgICAgIHJldHZhbCA9IHZhbDtcbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLk5vZGUgJiYgdmFsIGluc3RhbmNlb2YgZ2xvYmFsLk5vZGUpIHtcbiAgICAgICAgICByZXR2YWwgPSBbdmFsXTtcbiAgICAgIH0gZWxzZSBpZiAoZ2xvYmFsLkhUTUxDb2xsZWN0aW9uICYmIHZhbCBpbnN0YW5jZW9mIGdsb2JhbC5IVE1MQ29sbGVjdGlvbikge1xuICAgICAgICAgIHJldHZhbCA9IHZhbDtcbiAgICAgIH0gZWxzZSBpZiAodmFsIGluc3RhbmNlb2YgQXJyYXkpIHtcbiAgICAgICAgICByZXR2YWwgPSB2YWw7XG4gICAgICB9IGVsc2UgaWYgKHZhbCA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHZhbCA9IFtdO1xuICAgICAgfVxuXG4gICAgICByZXR2YWwgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChyZXR2YWwpO1xuXG4gICAgICByZXR1cm4gcmV0dmFsO1xuICB9O1xuXG4gIC8qIFdFQlBBQ0sgVkFSIElOSkVDVElPTiAqL30uY2FsbChleHBvcnRzLCAoZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KCkpKSlcblxuLyoqKi8gfSksXG4vKiAxMCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4gIHZhciBDb2xvciA9IGZ1bmN0aW9uKGNvbG9yLCBvcHRpb25zKSB7XG4gICAgICAvL3RvZG86IHN1cHBvcnQgcmdiYSwgaHNsYSwgYW5kIHJyZ2diYmFhIG5vdGF0aW9uXG4gICAgICAvL3RvZG86IHVzZSBDSUVMQUIgaW50ZXJuYWxseVxuICAgICAgLy90b2RvOiBhZGQgY2xhbXAgZnVuY3Rpb24gKHdpdGggc2lnbilcbiAgICAgIGlmICh0eXBlb2YgY29sb3IgIT09ICdzdHJpbmcnKSByZXR1cm47XG5cbiAgICAgIHRoaXMub3JpZ2luYWwgPSBjb2xvcjtcblxuICAgICAgaWYgKGNvbG9yLmNoYXJBdCgwKSA9PT0gJyMnKSB7XG4gICAgICAgICAgY29sb3IgPSBjb2xvci5zbGljZSgxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKC9bXmEtZjAtOV0rL2kudGVzdChjb2xvcikpIHJldHVybjtcblxuICAgICAgaWYgKGNvbG9yLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgIGNvbG9yID0gY29sb3IucmVwbGFjZSgvLi9nLCAnJCYkJicpO1xuICAgICAgfVxuXG4gICAgICBpZiAoY29sb3IubGVuZ3RoICE9PSA2KSByZXR1cm47XG5cbiAgICAgIHRoaXMuYWxwaGEgPSAxO1xuXG4gICAgICBpZiAob3B0aW9ucyAmJiBvcHRpb25zLmFscGhhKSB7XG4gICAgICAgICAgdGhpcy5hbHBoYSA9IG9wdGlvbnMuYWxwaGE7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0KHBhcnNlSW50KGNvbG9yLCAxNikpO1xuICB9O1xuXG4gIC8vdG9kbzoganNkb2NzXG4gIENvbG9yLnJnYjJoZXggPSBmdW5jdGlvbihyLCBnLCBiKSB7XG4gICAgICBmdW5jdGlvbiBmb3JtYXQgKGRlY2ltYWwpIHtcbiAgICAgICAgICB2YXIgaGV4ID0gKGRlY2ltYWwgfCAwKS50b1N0cmluZygxNik7XG4gICAgICAgICAgaWYgKGRlY2ltYWwgPCAxNikge1xuICAgICAgICAgICAgICBoZXggPSAnMCcgKyBoZXg7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBoZXg7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBbciwgZywgYl0ubWFwKGZvcm1hdCkuam9pbignJyk7XG4gIH07XG5cbiAgLy90b2RvOiBqc2RvY3NcbiAgQ29sb3IuaHNsMnJnYiA9IGZ1bmN0aW9uIChoLCBzLCBsKSB7XG4gICAgICB2YXIgSCA9IGggLyA2MDtcbiAgICAgIHZhciBDID0gKDEgLSBNYXRoLmFicygyICogbCAtIDEpKSAqIHM7XG4gICAgICB2YXIgWCA9IEMgKiAoMSAtIE1hdGguYWJzKHBhcnNlSW50KEgpICUgMiAtIDEpKTtcbiAgICAgIHZhciBtID0gbCAtIChDIC8gMik7XG5cbiAgICAgIHZhciByID0gMCwgZyA9IDAsIGIgPSAwO1xuXG4gICAgICBpZiAoSCA+PSAwICYmIEggPCAxKSB7XG4gICAgICAgICAgciA9IEM7XG4gICAgICAgICAgZyA9IFg7XG4gICAgICB9IGVsc2UgaWYgKEggPj0gMSAmJiBIIDwgMikge1xuICAgICAgICAgIHIgPSBYO1xuICAgICAgICAgIGcgPSBDO1xuICAgICAgfSBlbHNlIGlmIChIID49IDIgJiYgSCA8IDMpIHtcbiAgICAgICAgICBnID0gQztcbiAgICAgICAgICBiID0gWDtcbiAgICAgIH0gZWxzZSBpZiAoSCA+PSAzICYmIEggPCA0KSB7XG4gICAgICAgICAgZyA9IFg7XG4gICAgICAgICAgYiA9IEM7XG4gICAgICB9IGVsc2UgaWYgKEggPj0gNCAmJiBIIDwgNSkge1xuICAgICAgICAgIHIgPSBYO1xuICAgICAgICAgIGIgPSBDO1xuICAgICAgfSBlbHNlIGlmIChIID49IDUgJiYgSCA8IDYpIHtcbiAgICAgICAgICByID0gQztcbiAgICAgICAgICBiID0gWDtcbiAgICAgIH1cblxuICAgICAgciArPSBtO1xuICAgICAgZyArPSBtO1xuICAgICAgYiArPSBtO1xuXG4gICAgICByID0gcGFyc2VJbnQociAqIDI1NSk7XG4gICAgICBnID0gcGFyc2VJbnQoZyAqIDI1NSk7XG4gICAgICBiID0gcGFyc2VJbnQoYiAqIDI1NSk7XG5cbiAgICAgIHJldHVybiBbciwgZywgYl07XG4gIH07XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIGNvbG9yIGZyb20gYSByYXcgUkdCODg4IGludGVnZXJcbiAgICogQHBhcmFtIHJhdyBSR0I4ODggcmVwcmVzZW50YXRpb24gb2YgY29sb3JcbiAgICovXG4gIC8vdG9kbzogcmVmYWN0b3IgaW50byBhIHN0YXRpYyBtZXRob2RcbiAgLy90b2RvOiBmYWN0b3Igb3V0IGluZGl2aWR1YWwgY29sb3Igc3BhY2VzXG4gIC8vdG9kbzogYWRkIEhTTCwgQ0lFTEFCLCBhbmQgQ0lFTFVWXG4gIENvbG9yLnByb3RvdHlwZS5zZXQgPSBmdW5jdGlvbiAodmFsKSB7XG4gICAgICB0aGlzLnJhdyA9IHZhbDtcblxuICAgICAgdmFyIHIgPSAodGhpcy5yYXcgJiAweEZGMDAwMCkgPj4gMTY7XG4gICAgICB2YXIgZyA9ICh0aGlzLnJhdyAmIDB4MDBGRjAwKSA+PiA4O1xuICAgICAgdmFyIGIgPSAodGhpcy5yYXcgJiAweDAwMDBGRik7XG5cbiAgICAgIC8vIEJULjcwOVxuICAgICAgdmFyIHkgPSAwLjIxMjYgKiByICsgMC43MTUyICogZyArIDAuMDcyMiAqIGI7XG4gICAgICB2YXIgdSA9IC0wLjA5OTkxICogciAtIDAuMzM2MDkgKiBnICsgMC40MzYgKiBiO1xuICAgICAgdmFyIHYgPSAwLjYxNSAqIHIgLSAwLjU1ODYxICogZyAtIDAuMDU2MzkgKiBiO1xuXG4gICAgICB0aGlzLnJnYiA9IHtcbiAgICAgICAgICByOiByLFxuICAgICAgICAgIGc6IGcsXG4gICAgICAgICAgYjogYlxuICAgICAgfTtcblxuICAgICAgdGhpcy55dXYgPSB7XG4gICAgICAgICAgeTogeSxcbiAgICAgICAgICB1OiB1LFxuICAgICAgICAgIHY6IHZcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIC8qKlxuICAgKiBMaWdodGVuIG9yIGRhcmtlbiBhIGNvbG9yXG4gICAqIEBwYXJhbSBtdWx0aXBsaWVyIEFtb3VudCB0byBsaWdodGVuIG9yIGRhcmtlbiAoLTEgdG8gMSlcbiAgICovXG4gIENvbG9yLnByb3RvdHlwZS5saWdodGVuID0gZnVuY3Rpb24obXVsdGlwbGllcikge1xuICAgICAgdmFyIGNtID0gTWF0aC5taW4oMSwgTWF0aC5tYXgoMCwgTWF0aC5hYnMobXVsdGlwbGllcikpKSAqIChtdWx0aXBsaWVyIDwgMCA/IC0xIDogMSk7XG4gICAgICB2YXIgYm0gPSAoMjU1ICogY20pIHwgMDtcbiAgICAgIHZhciBjciA9IE1hdGgubWluKDI1NSwgTWF0aC5tYXgoMCwgdGhpcy5yZ2IuciArIGJtKSk7XG4gICAgICB2YXIgY2cgPSBNYXRoLm1pbigyNTUsIE1hdGgubWF4KDAsIHRoaXMucmdiLmcgKyBibSkpO1xuICAgICAgdmFyIGNiID0gTWF0aC5taW4oMjU1LCBNYXRoLm1heCgwLCB0aGlzLnJnYi5iICsgYm0pKTtcbiAgICAgIHZhciBoZXggPSBDb2xvci5yZ2IyaGV4KGNyLCBjZywgY2IpO1xuICAgICAgcmV0dXJuIG5ldyBDb2xvcihoZXgpO1xuICB9O1xuXG4gIC8qKlxuICAgKiBPdXRwdXQgY29sb3IgaW4gaGV4IGZvcm1hdFxuICAgKiBAcGFyYW0gYWRkSGFzaCBBZGQgYSBoYXNoIGNoYXJhY3RlciB0byB0aGUgYmVnaW5uaW5nIG9mIHRoZSBvdXRwdXRcbiAgICovXG4gIENvbG9yLnByb3RvdHlwZS50b0hleCA9IGZ1bmN0aW9uKGFkZEhhc2gpIHtcbiAgICAgIHJldHVybiAoYWRkSGFzaCA/ICcjJyA6ICcnKSArIHRoaXMucmF3LnRvU3RyaW5nKDE2KTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB3aGV0aGVyIG9yIG5vdCBjdXJyZW50IGNvbG9yIGlzIGxpZ2h0ZXIgdGhhbiBhbm90aGVyIGNvbG9yXG4gICAqIEBwYXJhbSBjb2xvciBDb2xvciB0byBjb21wYXJlIGFnYWluc3RcbiAgICovXG4gIENvbG9yLnByb3RvdHlwZS5saWdodGVyVGhhbiA9IGZ1bmN0aW9uKGNvbG9yKSB7XG4gICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIENvbG9yKSkge1xuICAgICAgICAgIGNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMueXV2LnkgPiBjb2xvci55dXYueTtcbiAgfTtcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIG1peGluZyBjdXJyZW50IGNvbG9yIHdpdGggYW5vdGhlciBjb2xvclxuICAgKiBAcGFyYW0gY29sb3IgQ29sb3IgdG8gbWl4IHdpdGhcbiAgICogQHBhcmFtIG11bHRpcGxpZXIgSG93IG11Y2ggdG8gbWl4IHdpdGggdGhlIG90aGVyIGNvbG9yXG4gICAqL1xuICAvKlxuICBDb2xvci5wcm90b3R5cGUubWl4ID0gZnVuY3Rpb24gKGNvbG9yLCBtdWx0aXBsaWVyKSB7XG4gICAgICBpZiAoIShjb2xvciBpbnN0YW5jZW9mIENvbG9yKSkge1xuICAgICAgICAgIGNvbG9yID0gbmV3IENvbG9yKGNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgdmFyIHIgPSB0aGlzLnJnYi5yO1xuICAgICAgdmFyIGcgPSB0aGlzLnJnYi5nO1xuICAgICAgdmFyIGIgPSB0aGlzLnJnYi5iO1xuICAgICAgdmFyIGEgPSB0aGlzLmFscGhhO1xuXG4gICAgICB2YXIgbSA9IHR5cGVvZiBtdWx0aXBsaWVyICE9PSAndW5kZWZpbmVkJyA/IG11bHRpcGxpZXIgOiAwLjU7XG5cbiAgICAgIC8vdG9kbzogd3JpdGUgYSBsZXJwIGZ1bmN0aW9uXG4gICAgICByID0gciArIG0gKiAoY29sb3IucmdiLnIgLSByKTtcbiAgICAgIGcgPSBnICsgbSAqIChjb2xvci5yZ2IuZyAtIGcpO1xuICAgICAgYiA9IGIgKyBtICogKGNvbG9yLnJnYi5iIC0gYik7XG4gICAgICBhID0gYSArIG0gKiAoY29sb3IuYWxwaGEgLSBhKTtcblxuICAgICAgcmV0dXJuIG5ldyBDb2xvcihDb2xvci5yZ2JUb0hleChyLCBnLCBiKSwge1xuICAgICAgICAgICdhbHBoYSc6IGFcbiAgICAgIH0pO1xuICB9O1xuICAqL1xuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgYmxlbmRpbmcgYW5vdGhlciBjb2xvciBvbiB0b3Agb2YgY3VycmVudCBjb2xvciB3aXRoIGFscGhhXG4gICAqIEBwYXJhbSBjb2xvciBDb2xvciB0byBibGVuZCBvbiB0b3Agb2YgY3VycmVudCBjb2xvciwgaS5lLiBcIkNhXCJcbiAgICovXG4gIC8vdG9kbzogc2VlIGlmIC5ibGVuZEFscGhhIGNhbiBiZSBtZXJnZWQgaW50byAubWl4XG4gIENvbG9yLnByb3RvdHlwZS5ibGVuZEFscGhhID0gZnVuY3Rpb24oY29sb3IpIHtcbiAgICAgIGlmICghKGNvbG9yIGluc3RhbmNlb2YgQ29sb3IpKSB7XG4gICAgICAgICAgY29sb3IgPSBuZXcgQ29sb3IoY29sb3IpO1xuICAgICAgfVxuXG4gICAgICB2YXIgQ2EgPSBjb2xvcjtcbiAgICAgIHZhciBDYiA9IHRoaXM7XG5cbiAgICAgIC8vdG9kbzogd3JpdGUgYWxwaGEgYmxlbmRpbmcgZnVuY3Rpb25cbiAgICAgIHZhciByID0gQ2EuYWxwaGEgKiBDYS5yZ2IuciArICgxIC0gQ2EuYWxwaGEpICogQ2IucmdiLnI7XG4gICAgICB2YXIgZyA9IENhLmFscGhhICogQ2EucmdiLmcgKyAoMSAtIENhLmFscGhhKSAqIENiLnJnYi5nO1xuICAgICAgdmFyIGIgPSBDYS5hbHBoYSAqIENhLnJnYi5iICsgKDEgLSBDYS5hbHBoYSkgKiBDYi5yZ2IuYjtcblxuICAgICAgcmV0dXJuIG5ldyBDb2xvcihDb2xvci5yZ2IyaGV4KHIsIGcsIGIpKTtcbiAgfTtcblxuICBtb2R1bGUuZXhwb3J0cyA9IENvbG9yO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuICBtb2R1bGUuZXhwb3J0cyA9IHtcbiAgICAndmVyc2lvbic6ICcyLjkuNicsXG4gICAgJ3N2Z19ucyc6ICdodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZydcbiAgfTtcblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4gIHZhciBzaGF2ZW4gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcblxuICB2YXIgU1ZHID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcbiAgdmFyIGNvbnN0YW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oMTEpO1xuICB2YXIgdXRpbHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xuXG4gIHZhciBTVkdfTlMgPSBjb25zdGFudHMuc3ZnX25zO1xuXG4gIHZhciB0ZW1wbGF0ZXMgPSB7XG4gICAgJ2VsZW1lbnQnOiBmdW5jdGlvbiAob3B0aW9ucykge1xuICAgICAgdmFyIHRhZyA9IG9wdGlvbnMudGFnO1xuICAgICAgdmFyIGNvbnRlbnQgPSBvcHRpb25zLmNvbnRlbnQgfHwgJyc7XG4gICAgICBkZWxldGUgb3B0aW9ucy50YWc7XG4gICAgICBkZWxldGUgb3B0aW9ucy5jb250ZW50O1xuICAgICAgcmV0dXJuICBbdGFnLCBjb250ZW50LCBvcHRpb25zXTtcbiAgICB9XG4gIH07XG5cbiAgLy90b2RvOiBkZXByZWNhdGUgdGFnIGFyZywgaW5mZXIgdGFnIGZyb20gc2hhcGUgb2JqZWN0XG4gIGZ1bmN0aW9uIGNvbnZlcnRTaGFwZSAoc2hhcGUsIHRhZykge1xuICAgIHJldHVybiB0ZW1wbGF0ZXMuZWxlbWVudCh7XG4gICAgICAndGFnJzogdGFnLFxuICAgICAgJ3dpZHRoJzogc2hhcGUud2lkdGgsXG4gICAgICAnaGVpZ2h0Jzogc2hhcGUuaGVpZ2h0LFxuICAgICAgJ2ZpbGwnOiBzaGFwZS5wcm9wZXJ0aWVzLmZpbGxcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHRleHRDc3MgKHByb3BlcnRpZXMpIHtcbiAgICByZXR1cm4gdXRpbHMuY3NzUHJvcHMoe1xuICAgICAgJ2ZpbGwnOiBwcm9wZXJ0aWVzLmZpbGwsXG4gICAgICAnZm9udC13ZWlnaHQnOiBwcm9wZXJ0aWVzLmZvbnQud2VpZ2h0LFxuICAgICAgJ2ZvbnQtZmFtaWx5JzogcHJvcGVydGllcy5mb250LmZhbWlseSArICcsIG1vbm9zcGFjZScsXG4gICAgICAnZm9udC1zaXplJzogcHJvcGVydGllcy5mb250LnNpemUgKyBwcm9wZXJ0aWVzLmZvbnQudW5pdHNcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG91dGxpbmVQYXRoIChiZ1dpZHRoLCBiZ0hlaWdodCwgb3V0bGluZVdpZHRoKSB7XG4gICAgdmFyIG91dGxpbmVPZmZzZXRXaWR0aCA9IG91dGxpbmVXaWR0aCAvIDI7XG5cbiAgICByZXR1cm4gW1xuICAgICAgJ00nLCBvdXRsaW5lT2Zmc2V0V2lkdGgsIG91dGxpbmVPZmZzZXRXaWR0aCxcbiAgICAgICdIJywgYmdXaWR0aCAtIG91dGxpbmVPZmZzZXRXaWR0aCxcbiAgICAgICdWJywgYmdIZWlnaHQgLSBvdXRsaW5lT2Zmc2V0V2lkdGgsXG4gICAgICAnSCcsIG91dGxpbmVPZmZzZXRXaWR0aCxcbiAgICAgICdWJywgMCxcbiAgICAgICdNJywgMCwgb3V0bGluZU9mZnNldFdpZHRoLFxuICAgICAgJ0wnLCBiZ1dpZHRoLCBiZ0hlaWdodCAtIG91dGxpbmVPZmZzZXRXaWR0aCxcbiAgICAgICdNJywgMCwgYmdIZWlnaHQgLSBvdXRsaW5lT2Zmc2V0V2lkdGgsXG4gICAgICAnTCcsIGJnV2lkdGgsIG91dGxpbmVPZmZzZXRXaWR0aFxuICAgIF0uam9pbignICcpO1xuICB9XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoc2NlbmVHcmFwaCwgcmVuZGVyU2V0dGluZ3MpIHtcbiAgICB2YXIgZW5naW5lU2V0dGluZ3MgPSByZW5kZXJTZXR0aW5ncy5lbmdpbmVTZXR0aW5ncztcbiAgICB2YXIgc3R5bGVzaGVldHMgPSBlbmdpbmVTZXR0aW5ncy5zdHlsZXNoZWV0cztcbiAgICB2YXIgc3R5bGVzaGVldFhtbCA9IHN0eWxlc2hlZXRzLm1hcChmdW5jdGlvbiAoc3R5bGVzaGVldCkge1xuICAgICAgcmV0dXJuICc8P3htbC1zdHlsZXNoZWV0IHJlbD1cInN0eWxlc2hlZXRcIiBocmVmPVwiJyArIHN0eWxlc2hlZXQgKyAnXCI/Pic7XG4gICAgfSkuam9pbignXFxuJyk7XG5cbiAgICB2YXIgaG9sZGVySWQgPSAnaG9sZGVyXycgKyBOdW1iZXIobmV3IERhdGUoKSkudG9TdHJpbmcoMTYpO1xuXG4gICAgdmFyIHJvb3QgPSBzY2VuZUdyYXBoLnJvb3Q7XG4gICAgdmFyIHRleHRHcm91cCA9IHJvb3QuY2hpbGRyZW4uaG9sZGVyVGV4dEdyb3VwO1xuXG4gICAgdmFyIGNzcyA9ICcjJyArIGhvbGRlcklkICsgJyB0ZXh0IHsgJyArIHRleHRDc3ModGV4dEdyb3VwLnByb3BlcnRpZXMpICsgJyB9ICc7XG5cbiAgICAvLyBwdXNoIHRleHQgZG93biB0byBiZSBlcXVhbGx5IHZlcnRpY2FsbHkgYWxpZ25lZCB3aXRoIGNhbnZhcyByZW5kZXJlclxuICAgIHRleHRHcm91cC55ICs9IHRleHRHcm91cC50ZXh0UG9zaXRpb25EYXRhLmJvdW5kaW5nQm94LmhlaWdodCAqIDAuODtcblxuICAgIHZhciB3b3JkVGFncyA9IFtdO1xuXG4gICAgT2JqZWN0LmtleXModGV4dEdyb3VwLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uIChsaW5lS2V5KSB7XG4gICAgICB2YXIgbGluZSA9IHRleHRHcm91cC5jaGlsZHJlbltsaW5lS2V5XTtcblxuICAgICAgT2JqZWN0LmtleXMobGluZS5jaGlsZHJlbikuZm9yRWFjaChmdW5jdGlvbiAod29yZEtleSkge1xuICAgICAgICB2YXIgd29yZCA9IGxpbmUuY2hpbGRyZW5bd29yZEtleV07XG4gICAgICAgIHZhciB4ID0gdGV4dEdyb3VwLnggKyBsaW5lLnggKyB3b3JkLng7XG4gICAgICAgIHZhciB5ID0gdGV4dEdyb3VwLnkgKyBsaW5lLnkgKyB3b3JkLnk7XG4gICAgICAgIHZhciB3b3JkVGFnID0gdGVtcGxhdGVzLmVsZW1lbnQoe1xuICAgICAgICAgICd0YWcnOiAndGV4dCcsXG4gICAgICAgICAgJ2NvbnRlbnQnOiB3b3JkLnByb3BlcnRpZXMudGV4dCxcbiAgICAgICAgICAneCc6IHgsXG4gICAgICAgICAgJ3knOiB5XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHdvcmRUYWdzLnB1c2god29yZFRhZyk7XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIHZhciB0ZXh0ID0gdGVtcGxhdGVzLmVsZW1lbnQoe1xuICAgICAgJ3RhZyc6ICdnJyxcbiAgICAgICdjb250ZW50Jzogd29yZFRhZ3NcbiAgICB9KTtcblxuICAgIHZhciBvdXRsaW5lID0gbnVsbDtcblxuICAgIGlmIChyb290LmNoaWxkcmVuLmhvbGRlckJnLnByb3BlcnRpZXMub3V0bGluZSkge1xuICAgICAgdmFyIG91dGxpbmVQcm9wZXJ0aWVzID0gcm9vdC5jaGlsZHJlbi5ob2xkZXJCZy5wcm9wZXJ0aWVzLm91dGxpbmU7XG4gICAgICBvdXRsaW5lID0gdGVtcGxhdGVzLmVsZW1lbnQoe1xuICAgICAgICAndGFnJzogJ3BhdGgnLFxuICAgICAgICAnZCc6IG91dGxpbmVQYXRoKHJvb3QuY2hpbGRyZW4uaG9sZGVyQmcud2lkdGgsIHJvb3QuY2hpbGRyZW4uaG9sZGVyQmcuaGVpZ2h0LCBvdXRsaW5lUHJvcGVydGllcy53aWR0aCksXG4gICAgICAgICdzdHJva2Utd2lkdGgnOiBvdXRsaW5lUHJvcGVydGllcy53aWR0aCxcbiAgICAgICAgJ3N0cm9rZSc6IG91dGxpbmVQcm9wZXJ0aWVzLmZpbGwsXG4gICAgICAgICdmaWxsJzogJ25vbmUnXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB2YXIgYmcgPSBjb252ZXJ0U2hhcGUocm9vdC5jaGlsZHJlbi5ob2xkZXJCZywgJ3JlY3QnKTtcblxuICAgIHZhciBzY2VuZUNvbnRlbnQgPSBbXTtcblxuICAgIHNjZW5lQ29udGVudC5wdXNoKGJnKTtcbiAgICBpZiAob3V0bGluZVByb3BlcnRpZXMpIHtcbiAgICAgIHNjZW5lQ29udGVudC5wdXNoKG91dGxpbmUpO1xuICAgIH1cbiAgICBzY2VuZUNvbnRlbnQucHVzaCh0ZXh0KTtcblxuICAgIHZhciBzY2VuZSA9IHRlbXBsYXRlcy5lbGVtZW50KHtcbiAgICAgICd0YWcnOiAnZycsXG4gICAgICAnaWQnOiBob2xkZXJJZCxcbiAgICAgICdjb250ZW50Jzogc2NlbmVDb250ZW50XG4gICAgfSk7XG5cbiAgICB2YXIgc3R5bGUgPSB0ZW1wbGF0ZXMuZWxlbWVudCh7XG4gICAgICAndGFnJzogJ3N0eWxlJyxcbiAgICAgIC8vdG9kbzogZmlndXJlIG91dCBob3cgdG8gYWRkIENEQVRBIGRpcmVjdGl2ZVxuICAgICAgJ2NvbnRlbnQnOiBjc3MsXG4gICAgICAndHlwZSc6ICd0ZXh0L2NzcydcbiAgICB9KTtcblxuICAgIHZhciBkZWZzID0gdGVtcGxhdGVzLmVsZW1lbnQoe1xuICAgICAgJ3RhZyc6ICdkZWZzJyxcbiAgICAgICdjb250ZW50Jzogc3R5bGVcbiAgICB9KTtcblxuICAgIHZhciBzdmcgPSB0ZW1wbGF0ZXMuZWxlbWVudCh7XG4gICAgICAndGFnJzogJ3N2ZycsXG4gICAgICAnY29udGVudCc6IFtkZWZzLCBzY2VuZV0sXG4gICAgICAnd2lkdGgnOiByb290LnByb3BlcnRpZXMud2lkdGgsXG4gICAgICAnaGVpZ2h0Jzogcm9vdC5wcm9wZXJ0aWVzLmhlaWdodCxcbiAgICAgICd4bWxucyc6IFNWR19OUyxcbiAgICAgICd2aWV3Qm94JzogWzAsIDAsIHJvb3QucHJvcGVydGllcy53aWR0aCwgcm9vdC5wcm9wZXJ0aWVzLmhlaWdodF0uam9pbignICcpLFxuICAgICAgJ3ByZXNlcnZlQXNwZWN0UmF0aW8nOiAnbm9uZSdcbiAgICB9KTtcblxuICAgIHZhciBvdXRwdXQgPSBzaGF2ZW4oc3ZnKTtcblxuICAgIGlmICgvXFwmYW1wOyh4KT8jWzAtOUEtRmEtZl0vLnRlc3Qob3V0cHV0WzBdKSkge1xuICAgICAgb3V0cHV0WzBdID0gb3V0cHV0WzBdLnJlcGxhY2UoLyZhbXA7Iy9nbSwgJyYjJyk7XG4gICAgfVxuICAgIFxuICAgIG91dHB1dCA9IHN0eWxlc2hlZXRYbWwgKyBvdXRwdXRbMF07XG5cbiAgICB2YXIgc3ZnU3RyaW5nID0gU1ZHLnN2Z1N0cmluZ1RvRGF0YVVSSShvdXRwdXQsIHJlbmRlclNldHRpbmdzLm1vZGUgPT09ICdiYWNrZ3JvdW5kJyk7XG4gICAgcmV0dXJuIHN2Z1N0cmluZztcbiAgfTtcblxuLyoqKi8gfSksXG4vKiAxMyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4gIHZhciBlc2NhcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KVxuXG4gIC8vIFRPRE86IHJlbW92ZSBuYW1lc3BhY2VcblxuICBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHNoYXZlbiAoYXJyYXksIG5hbWVzcGFjZSwgcmV0dXJuT2JqZWN0KSB7XG5cbiAgICAndXNlIHN0cmljdCdcblxuICAgIHZhciBpID0gMVxuICAgIHZhciBkb2VzRXNjYXBlID0gdHJ1ZVxuICAgIHZhciBIVE1MU3RyaW5nXG4gICAgdmFyIGF0dHJpYnV0ZUtleVxuICAgIHZhciBjYWxsYmFja1xuICAgIHZhciBrZXlcblxuXG4gICAgcmV0dXJuT2JqZWN0ID0gcmV0dXJuT2JqZWN0IHx8IHt9XG5cblxuICAgIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQgKHN1Z2FyU3RyaW5nKSB7XG5cbiAgICAgIHZhciB0YWdzID0gc3VnYXJTdHJpbmcubWF0Y2goL15bXFx3LV0rLylcbiAgICAgIHZhciBlbGVtZW50ID0ge1xuICAgICAgICB0YWc6IHRhZ3MgPyB0YWdzWzBdIDogJ2RpdicsXG4gICAgICAgIGF0dHI6IHt9LFxuICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgIH1cbiAgICAgIHZhciBpZCA9IHN1Z2FyU3RyaW5nLm1hdGNoKC8jKFtcXHctXSspLylcbiAgICAgIHZhciByZWZlcmVuY2UgPSBzdWdhclN0cmluZy5tYXRjaCgvXFwkKFtcXHctXSspLylcbiAgICAgIHZhciBjbGFzc05hbWVzID0gc3VnYXJTdHJpbmcubWF0Y2goL1xcLltcXHctXSsvZylcblxuXG4gICAgICAvLyBBc3NpZ24gaWQgaWYgaXMgc2V0XG4gICAgICBpZiAoaWQpIHtcbiAgICAgICAgZWxlbWVudC5hdHRyLmlkID0gaWRbMV1cblxuICAgICAgICAvLyBBZGQgZWxlbWVudCB0byB0aGUgcmV0dXJuIG9iamVjdFxuICAgICAgICByZXR1cm5PYmplY3RbaWRbMV1dID0gZWxlbWVudFxuICAgICAgfVxuXG4gICAgICBpZiAocmVmZXJlbmNlKVxuICAgICAgICByZXR1cm5PYmplY3RbcmVmZXJlbmNlWzFdXSA9IGVsZW1lbnRcblxuICAgICAgaWYgKGNsYXNzTmFtZXMpXG4gICAgICAgIGVsZW1lbnQuYXR0ci5jbGFzcyA9IGNsYXNzTmFtZXMuam9pbignICcpLnJlcGxhY2UoL1xcLi9nLCAnJylcblxuICAgICAgaWYgKHN1Z2FyU3RyaW5nLm1hdGNoKC8mJC9nKSlcbiAgICAgICAgZG9lc0VzY2FwZSA9IGZhbHNlXG5cbiAgICAgIHJldHVybiBlbGVtZW50XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVwbGFjZXIgKGtleSwgdmFsdWUpIHtcblxuICAgICAgaWYgKHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSBmYWxzZSB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm5cblxuICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhbHVlICE9PSAnb2JqZWN0JylcbiAgICAgICAgcmV0dXJuIFN0cmluZyh2YWx1ZSlcblxuICAgICAgcmV0dXJuIHZhbHVlXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXNjYXBlQXR0cmlidXRlIChzdHJpbmcpIHtcbiAgICAgIHJldHVybiAoc3RyaW5nIHx8IHN0cmluZyA9PT0gMCkgP1xuICAgICAgICBTdHJpbmcoc3RyaW5nKVxuICAgICAgICAgIC5yZXBsYWNlKC8mL2csICcmYW1wOycpXG4gICAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKSA6XG4gICAgICAgICcnXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gZXNjYXBlSFRNTCAoc3RyaW5nKSB7XG4gICAgICByZXR1cm4gU3RyaW5nKHN0cmluZylcbiAgICAgICAgLnJlcGxhY2UoLyYvZywgJyZhbXA7JylcbiAgICAgICAgLnJlcGxhY2UoL1wiL2csICcmcXVvdDsnKVxuICAgICAgICAucmVwbGFjZSgvJy9nLCAnJmFwb3M7JylcbiAgICAgICAgLnJlcGxhY2UoLzwvZywgJyZsdDsnKVxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXG4gICAgfVxuXG5cbiAgICBpZiAodHlwZW9mIGFycmF5WzBdID09PSAnc3RyaW5nJylcbiAgICAgIGFycmF5WzBdID0gY3JlYXRlRWxlbWVudChhcnJheVswXSlcblxuICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXlbMF0pKVxuICAgICAgaSA9IDBcblxuICAgIGVsc2VcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0ZpcnN0IGVsZW1lbnQgb2YgYXJyYXkgbXVzdCBiZSBhIHN0cmluZywgJyArXG4gICAgICAgICdvciBhbiBhcnJheSBhbmQgbm90ICcgKyBKU09OLnN0cmluZ2lmeShhcnJheVswXSlcbiAgICAgIClcblxuXG4gICAgZm9yICg7IGkgPCBhcnJheS5sZW5ndGg7IGkrKykge1xuXG4gICAgICAvLyBEb24ndCByZW5kZXIgZWxlbWVudCBpZiB2YWx1ZSBpcyBmYWxzZSBvciBudWxsXG4gICAgICBpZiAoYXJyYXlbaV0gPT09IGZhbHNlIHx8IGFycmF5W2ldID09PSBudWxsKSB7XG4gICAgICAgIGFycmF5WzBdID0gZmFsc2VcbiAgICAgICAgYnJlYWtcbiAgICAgIH1cblxuICAgICAgLy8gQ29udGludWUgd2l0aCBuZXh0IGFycmF5IHZhbHVlIGlmIGN1cnJlbnQgdmFsdWUgaXMgdW5kZWZpbmVkIG9yIHRydWVcbiAgICAgIGVsc2UgaWYgKGFycmF5W2ldID09PSB1bmRlZmluZWQgfHwgYXJyYXlbaV0gPT09IHRydWUpIHtcbiAgICAgICAgY29udGludWVcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAodHlwZW9mIGFycmF5W2ldID09PSAnc3RyaW5nJykge1xuICAgICAgICBpZiAoZG9lc0VzY2FwZSlcbiAgICAgICAgICBhcnJheVtpXSA9IGVzY2FwZUhUTUwoYXJyYXlbaV0pXG5cbiAgICAgICAgYXJyYXlbMF0uY2hpbGRyZW4ucHVzaChhcnJheVtpXSlcbiAgICAgIH1cblxuICAgICAgZWxzZSBpZiAodHlwZW9mIGFycmF5W2ldID09PSAnbnVtYmVyJykge1xuXG4gICAgICAgIGFycmF5WzBdLmNoaWxkcmVuLnB1c2goYXJyYXlbaV0pXG4gICAgICB9XG5cbiAgICAgIGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXlbaV0pKSB7XG5cbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJyYXlbaV1bMF0pKSB7XG4gICAgICAgICAgYXJyYXlbaV0ucmV2ZXJzZSgpLmZvckVhY2goZnVuY3Rpb24gKHN1YkFycmF5KSB7XG4gICAgICAgICAgICBhcnJheS5zcGxpY2UoaSArIDEsIDAsIHN1YkFycmF5KVxuICAgICAgICAgIH0pXG5cbiAgICAgICAgICBpZiAoaSAhPT0gMClcbiAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgaSsrXG4gICAgICAgIH1cblxuICAgICAgICBzaGF2ZW4oYXJyYXlbaV0sIG5hbWVzcGFjZSwgcmV0dXJuT2JqZWN0KVxuXG4gICAgICAgIGlmIChhcnJheVtpXVswXSlcbiAgICAgICAgICBhcnJheVswXS5jaGlsZHJlbi5wdXNoKGFycmF5W2ldWzBdKVxuICAgICAgfVxuXG4gICAgICBlbHNlIGlmICh0eXBlb2YgYXJyYXlbaV0gPT09ICdmdW5jdGlvbicpXG4gICAgICAgIGNhbGxiYWNrID0gYXJyYXlbaV1cblxuXG4gICAgICBlbHNlIGlmICh0eXBlb2YgYXJyYXlbaV0gPT09ICdvYmplY3QnKSB7XG4gICAgICAgIGZvciAoYXR0cmlidXRlS2V5IGluIGFycmF5W2ldKVxuICAgICAgICAgIGlmIChhcnJheVtpXS5oYXNPd25Qcm9wZXJ0eShhdHRyaWJ1dGVLZXkpKVxuICAgICAgICAgICAgaWYgKGFycmF5W2ldW2F0dHJpYnV0ZUtleV0gIT09IG51bGwgJiZcbiAgICAgICAgICAgICAgYXJyYXlbaV1bYXR0cmlidXRlS2V5XSAhPT0gZmFsc2UpXG4gICAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVLZXkgPT09ICdzdHlsZScgJiZcbiAgICAgICAgICAgICAgICB0eXBlb2YgYXJyYXlbaV1bYXR0cmlidXRlS2V5XSA9PT0gJ29iamVjdCcpXG4gICAgICAgICAgICAgICAgYXJyYXlbMF0uYXR0clthdHRyaWJ1dGVLZXldID0gSlNPTlxuICAgICAgICAgICAgICAgICAgLnN0cmluZ2lmeShhcnJheVtpXVthdHRyaWJ1dGVLZXldLCByZXBsYWNlcilcbiAgICAgICAgICAgICAgICAgIC5zbGljZSgyLCAtMilcbiAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIixcIi9nLCAnOycpXG4gICAgICAgICAgICAgICAgICAucmVwbGFjZSgvXCI6XCIvZywgJzonKVxuICAgICAgICAgICAgICAgICAgLnJlcGxhY2UoL1xcXFxcIi9nLCAnXFwnJylcblxuICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgYXJyYXlbMF0uYXR0clthdHRyaWJ1dGVLZXldID0gYXJyYXlbaV1bYXR0cmlidXRlS2V5XVxuICAgICAgfVxuXG4gICAgICBlbHNlXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1wiJyArIGFycmF5W2ldICsgJ1wiIGlzIG5vdCBhbGxvd2VkIGFzIGEgdmFsdWUuJylcbiAgICB9XG5cblxuICAgIGlmIChhcnJheVswXSAhPT0gZmFsc2UpIHtcblxuICAgICAgSFRNTFN0cmluZyA9ICc8JyArIGFycmF5WzBdLnRhZ1xuXG4gICAgICBmb3IgKGtleSBpbiBhcnJheVswXS5hdHRyKVxuICAgICAgICBpZiAoYXJyYXlbMF0uYXR0ci5oYXNPd25Qcm9wZXJ0eShrZXkpKVxuICAgICAgICAgIEhUTUxTdHJpbmcgKz0gJyAnICsga2V5ICsgJz1cIicgK1xuICAgICAgICAgICAgZXNjYXBlQXR0cmlidXRlKGFycmF5WzBdLmF0dHJba2V5XSkgKyAnXCInXG5cbiAgICAgIEhUTUxTdHJpbmcgKz0gJz4nXG5cbiAgICAgIGFycmF5WzBdLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24gKGNoaWxkKSB7XG4gICAgICAgIEhUTUxTdHJpbmcgKz0gY2hpbGRcbiAgICAgIH0pXG5cbiAgICAgIEhUTUxTdHJpbmcgKz0gJzwvJyArIGFycmF5WzBdLnRhZyArICc+J1xuXG4gICAgICBhcnJheVswXSA9IEhUTUxTdHJpbmdcbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gcm9vdCBlbGVtZW50IG9uIGluZGV4IDBcbiAgICByZXR1cm5PYmplY3RbMF0gPSBhcnJheVswXVxuXG4gICAgaWYgKGNhbGxiYWNrKVxuICAgICAgY2FsbGJhY2soYXJyYXlbMF0pXG5cbiAgICAvLyByZXR1cm5zIG9iamVjdCBjb250YWluaW5nIGFsbCBlbGVtZW50cyB3aXRoIGFuIGlkIGFuZCB0aGUgcm9vdCBlbGVtZW50XG4gICAgcmV0dXJuIHJldHVybk9iamVjdFxuICB9XG5cblxuLyoqKi8gfSksXG4vKiAxNCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cykge1xuXG4gIC8qIVxuICAgKiBlc2NhcGUtaHRtbFxuICAgKiBDb3B5cmlnaHQoYykgMjAxMi0yMDEzIFRKIEhvbG93YXljaHVrXG4gICAqIENvcHlyaWdodChjKSAyMDE1IEFuZHJlYXMgTHViYmVcbiAgICogQ29weXJpZ2h0KGMpIDIwMTUgVGlhbmNoZW5nIFwiVGltb3RoeVwiIEd1XG4gICAqIE1JVCBMaWNlbnNlZFxuICAgKi9cblxuICAndXNlIHN0cmljdCc7XG5cbiAgLyoqXG4gICAqIE1vZHVsZSB2YXJpYWJsZXMuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuXG4gIHZhciBtYXRjaEh0bWxSZWdFeHAgPSAvW1wiJyY8Pl0vO1xuXG4gIC8qKlxuICAgKiBNb2R1bGUgZXhwb3J0cy5cbiAgICogQHB1YmxpY1xuICAgKi9cblxuICBtb2R1bGUuZXhwb3J0cyA9IGVzY2FwZUh0bWw7XG5cbiAgLyoqXG4gICAqIEVzY2FwZSBzcGVjaWFsIGNoYXJhY3RlcnMgaW4gdGhlIGdpdmVuIHN0cmluZyBvZiBodG1sLlxuICAgKlxuICAgKiBAcGFyYW0gIHtzdHJpbmd9IHN0cmluZyBUaGUgc3RyaW5nIHRvIGVzY2FwZSBmb3IgaW5zZXJ0aW5nIGludG8gSFRNTFxuICAgKiBAcmV0dXJuIHtzdHJpbmd9XG4gICAqIEBwdWJsaWNcbiAgICovXG5cbiAgZnVuY3Rpb24gZXNjYXBlSHRtbChzdHJpbmcpIHtcbiAgICB2YXIgc3RyID0gJycgKyBzdHJpbmc7XG4gICAgdmFyIG1hdGNoID0gbWF0Y2hIdG1sUmVnRXhwLmV4ZWMoc3RyKTtcblxuICAgIGlmICghbWF0Y2gpIHtcbiAgICAgIHJldHVybiBzdHI7XG4gICAgfVxuXG4gICAgdmFyIGVzY2FwZTtcbiAgICB2YXIgaHRtbCA9ICcnO1xuICAgIHZhciBpbmRleCA9IDA7XG4gICAgdmFyIGxhc3RJbmRleCA9IDA7XG5cbiAgICBmb3IgKGluZGV4ID0gbWF0Y2guaW5kZXg7IGluZGV4IDwgc3RyLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgc3dpdGNoIChzdHIuY2hhckNvZGVBdChpbmRleCkpIHtcbiAgICAgICAgY2FzZSAzNDogLy8gXCJcbiAgICAgICAgICBlc2NhcGUgPSAnJnF1b3Q7JztcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAzODogLy8gJlxuICAgICAgICAgIGVzY2FwZSA9ICcmYW1wOyc7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgMzk6IC8vICdcbiAgICAgICAgICBlc2NhcGUgPSAnJiMzOTsnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDYwOiAvLyA8XG4gICAgICAgICAgZXNjYXBlID0gJyZsdDsnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDYyOiAvLyA+XG4gICAgICAgICAgZXNjYXBlID0gJyZndDsnO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobGFzdEluZGV4ICE9PSBpbmRleCkge1xuICAgICAgICBodG1sICs9IHN0ci5zdWJzdHJpbmcobGFzdEluZGV4LCBpbmRleCk7XG4gICAgICB9XG5cbiAgICAgIGxhc3RJbmRleCA9IGluZGV4ICsgMTtcbiAgICAgIGh0bWwgKz0gZXNjYXBlO1xuICAgIH1cblxuICAgIHJldHVybiBsYXN0SW5kZXggIT09IGluZGV4XG4gICAgICA/IGh0bWwgKyBzdHIuc3Vic3RyaW5nKGxhc3RJbmRleCwgaW5kZXgpXG4gICAgICA6IGh0bWw7XG4gIH1cblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbiAgdmFyIERPTSA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG4gIHZhciB1dGlscyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgY2FudmFzID0gRE9NLm5ld0VsKCdjYW52YXMnKTtcbiAgICAgIHZhciBjdHggPSBudWxsO1xuXG4gICAgICByZXR1cm4gZnVuY3Rpb24oc2NlbmVHcmFwaCkge1xuICAgICAgICAgIGlmIChjdHggPT0gbnVsbCkge1xuICAgICAgICAgICAgICBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgZHByID0gdXRpbHMuY2FudmFzUmF0aW8oKTtcbiAgICAgICAgICB2YXIgcm9vdCA9IHNjZW5lR3JhcGgucm9vdDtcbiAgICAgICAgICBjYW52YXMud2lkdGggPSBkcHIgKiByb290LnByb3BlcnRpZXMud2lkdGg7XG4gICAgICAgICAgY2FudmFzLmhlaWdodCA9IGRwciAqIHJvb3QucHJvcGVydGllcy5oZWlnaHQgO1xuICAgICAgICAgIGN0eC50ZXh0QmFzZWxpbmUgPSAnbWlkZGxlJztcblxuICAgICAgICAgIHZhciBiZyA9IHJvb3QuY2hpbGRyZW4uaG9sZGVyQmc7XG4gICAgICAgICAgdmFyIGJnV2lkdGggPSBkcHIgKiBiZy53aWR0aDtcbiAgICAgICAgICB2YXIgYmdIZWlnaHQgPSBkcHIgKiBiZy5oZWlnaHQ7XG4gICAgICAgICAgLy90b2RvOiBwYXJhbWV0cml6ZSBvdXRsaW5lIHdpZHRoIChlLmcuIGluIHNjZW5lIG9iamVjdClcbiAgICAgICAgICB2YXIgb3V0bGluZVdpZHRoID0gMjtcbiAgICAgICAgICB2YXIgb3V0bGluZU9mZnNldFdpZHRoID0gb3V0bGluZVdpZHRoIC8gMjtcblxuICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBiZy5wcm9wZXJ0aWVzLmZpbGw7XG4gICAgICAgICAgY3R4LmZpbGxSZWN0KDAsIDAsIGJnV2lkdGgsIGJnSGVpZ2h0KTtcblxuICAgICAgICAgIGlmIChiZy5wcm9wZXJ0aWVzLm91dGxpbmUpIHtcbiAgICAgICAgICAgICAgLy90b2RvOiBhYnN0cmFjdCB0aGlzIGludG8gYSBtZXRob2RcbiAgICAgICAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gYmcucHJvcGVydGllcy5vdXRsaW5lLmZpbGw7XG4gICAgICAgICAgICAgIGN0eC5saW5lV2lkdGggPSBiZy5wcm9wZXJ0aWVzLm91dGxpbmUud2lkdGg7XG4gICAgICAgICAgICAgIGN0eC5tb3ZlVG8ob3V0bGluZU9mZnNldFdpZHRoLCBvdXRsaW5lT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICAvLyBUTCwgVFIsIEJSLCBCTFxuICAgICAgICAgICAgICBjdHgubGluZVRvKGJnV2lkdGggLSBvdXRsaW5lT2Zmc2V0V2lkdGgsIG91dGxpbmVPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgIGN0eC5saW5lVG8oYmdXaWR0aCAtIG91dGxpbmVPZmZzZXRXaWR0aCwgYmdIZWlnaHQgLSBvdXRsaW5lT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICBjdHgubGluZVRvKG91dGxpbmVPZmZzZXRXaWR0aCwgYmdIZWlnaHQgLSBvdXRsaW5lT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICBjdHgubGluZVRvKG91dGxpbmVPZmZzZXRXaWR0aCwgb3V0bGluZU9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgLy8gRGlhZ29uYWxzXG4gICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgb3V0bGluZU9mZnNldFdpZHRoKTtcbiAgICAgICAgICAgICAgY3R4LmxpbmVUbyhiZ1dpZHRoLCBiZ0hlaWdodCAtIG91dGxpbmVPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgIGN0eC5tb3ZlVG8oMCwgYmdIZWlnaHQgLSBvdXRsaW5lT2Zmc2V0V2lkdGgpO1xuICAgICAgICAgICAgICBjdHgubGluZVRvKGJnV2lkdGgsIG91dGxpbmVPZmZzZXRXaWR0aCk7XG4gICAgICAgICAgICAgIGN0eC5zdHJva2UoKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgdGV4dEdyb3VwID0gcm9vdC5jaGlsZHJlbi5ob2xkZXJUZXh0R3JvdXA7XG4gICAgICAgICAgY3R4LmZvbnQgPSB0ZXh0R3JvdXAucHJvcGVydGllcy5mb250LndlaWdodCArICcgJyArIChkcHIgKiB0ZXh0R3JvdXAucHJvcGVydGllcy5mb250LnNpemUpICsgdGV4dEdyb3VwLnByb3BlcnRpZXMuZm9udC51bml0cyArICcgJyArIHRleHRHcm91cC5wcm9wZXJ0aWVzLmZvbnQuZmFtaWx5ICsgJywgbW9ub3NwYWNlJztcbiAgICAgICAgICBjdHguZmlsbFN0eWxlID0gdGV4dEdyb3VwLnByb3BlcnRpZXMuZmlsbDtcblxuICAgICAgICAgIGZvciAodmFyIGxpbmVLZXkgaW4gdGV4dEdyb3VwLmNoaWxkcmVuKSB7XG4gICAgICAgICAgICAgIHZhciBsaW5lID0gdGV4dEdyb3VwLmNoaWxkcmVuW2xpbmVLZXldO1xuICAgICAgICAgICAgICBmb3IgKHZhciB3b3JkS2V5IGluIGxpbmUuY2hpbGRyZW4pIHtcbiAgICAgICAgICAgICAgICAgIHZhciB3b3JkID0gbGluZS5jaGlsZHJlblt3b3JkS2V5XTtcbiAgICAgICAgICAgICAgICAgIHZhciB4ID0gZHByICogKHRleHRHcm91cC54ICsgbGluZS54ICsgd29yZC54KTtcbiAgICAgICAgICAgICAgICAgIHZhciB5ID0gZHByICogKHRleHRHcm91cC55ICsgbGluZS55ICsgd29yZC55ICsgKHRleHRHcm91cC5wcm9wZXJ0aWVzLmxlYWRpbmcgLyAyKSk7XG5cbiAgICAgICAgICAgICAgICAgIGN0eC5maWxsVGV4dCh3b3JkLnByb3BlcnRpZXMudGV4dCwgeCwgeSk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gY2FudmFzLnRvRGF0YVVSTCgnaW1hZ2UvcG5nJyk7XG4gICAgICB9O1xuICB9KSgpO1xuXG4vKioqLyB9KVxuLyoqKioqKi8gXSlcbn0pO1xuO1xuKGZ1bmN0aW9uKGN0eCwgaXNNZXRlb3JQYWNrYWdlKSB7XG4gICAgaWYgKGlzTWV0ZW9yUGFja2FnZSkge1xuICAgICAgICBIb2xkZXIgPSBjdHguSG9sZGVyO1xuICAgIH1cbn0pKHRoaXMsIHR5cGVvZiBNZXRlb3IgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBQYWNrYWdlICE9PSAndW5kZWZpbmVkJyk7XG5cblxuIiwibW9kdWxlLmV4cG9ydHMgPSBqUXVlcnk7Il0sInNvdXJjZVJvb3QiOiIifQ==