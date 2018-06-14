/*!
* jquery-sidenav
* https://github.com/attrs/jquery-sidenav
*
* Copyright attrs and others
* Released under the MIT license
* https://github.com/attrs/jquery-sidenav/blob/master/LICENSE
*/
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define("sidenav", ["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["sidenav"] = factory(require("jQuery"));
	else
		root["sidenav"] = factory(root["jQuery"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	var lasturl;
	
	module.exports = $.fn.sidenav = function(action, value) {
	  var arg = arguments;
	  
	  if( arg.length === 1 ) lasturl = action;
	  
	  return this.each(function() {
	    if( !this.__sidenavinit__ ) {
	      this.__sidenavinit__ = true;
	      init(this);
	    }
	    
	    if( arg.length === 1 ) {
	      select(this, action);
	    } else if( !action || action === 'init' ) {
	      init(this);
	      select(this, lasturl);
	    } else if( action === 'select' ) {
	      select(this, value);
	    } else if( action ) {
	      console.warn('unsupported action: ' + action);
	    }
	  });
	};
	
	function ontoggle() {
	  toggle(this);
	  return false;
	}
	
	function onopen() {
	  open(this);
	  return false;
	}
	
	function onclose() {
	  close(this);
	  return false;
	}
	
	function init(root) {
	  $(root).find('.accordion-toggle').each(function() {
	    $(this).off('mousedown', ontoggle);
	    $(this).on('mousedown', ontoggle);
	  });
	  
	  $(root).find('.accordion-open').each(function() {
	    $(this).off('mousedown', onopen);
	    $(this).on('mousedown', onopen);
	  });
	  
	  $(root).find('.accordion-close').each(function() {
	    $(this).off('mousedown', onclose);
	    $(this).on('mousedown', onclose);
	  });
	}
	
	function toggle(target) {
	  var li = $(target);
	  if( target.tagName.toLowerCase() !== 'li' ) li = $(target).closest('li');
	  
	  if( li.hasClass('accordion-opened') ) close(target);
	  else open(target);
	}
	
	function open(target) {
	  var li = $(target);
	  if( target.tagName.toLowerCase() !== 'li' ) li = $(target).closest('li');
	  
	  li.children('ul').slideDown('fast', 'swing', function() {
	    $(this).closest('li').addClass('accordion-opened').children('a').addClass('menu-open');
	  });
	}
	
	function close(target) {
	  var li = $(target);
	  if( target.tagName.toLowerCase() !== 'li' ) li = $(target).closest('li');
	  
	  li.children('ul').slideUp('fast', 'swing', function() {
	    $(this).closest('li').removeClass('accordion-opened').children('a').removeClass('menu-open');
	  });
	}
	
	function closeAll(root) {
	  $(root).find('li.accordion-opened').each(function() {
	    close(this);
	  });
	}
	
	function select(root, url) {
	  if( !url ) return;
	  
	  var tobeselected, targetli, length, coselect, colen;
	  $(root).find('li > a[href]').each(function() {
	    //if( tobeselected ) return;
	    var href = this.getAttribute('href');
	    if( !href ) return;
	    
	    if( href.indexOf(url) === 0 && (!length || length >= href.length) ) {
	      length = href.length;
	      tobeselected = this;
	    }
	    
	    if( href && url.indexOf(href) === 0 && (!colen || colen < href.length) ) {
	      colen = href.length;
	      coselect = this;
	    }
	  });
	  
	  if( !tobeselected && coselect ) tobeselected = coselect;
	  if( !tobeselected ) {
	    return;
	  }
	  
	  targetli = tobeselected.parentNode;
	  
	  $(root).find('li').each(function() {
	    if( this !== targetli ) $(this).removeClass('active').parents('li').removeClass('active');
	  });
	  
	  $(targetli).addClass('active');
	  
	  open(targetli.parentNode);
	}
	
	module.exports = {
	  init: init,
	  select: select,
	  toggle: toggle,
	  open: open,
	  close: close,
	  closeAll: closeAll
	};
	


/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }
/******/ ])
});
;
//# sourceMappingURL=sidenav.js.map