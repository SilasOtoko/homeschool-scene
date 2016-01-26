/**
 * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
 *
 * @version 1.0.3
 * @codingstandard ftlabs-jsv2
 * @copyright The Financial Times Limited [All Rights Reserved]
 * @license MIT License (see LICENSE.txt)
 */
(function(){"use strict";function e(n,r){function s(e,t){return function(){return e.apply(t,arguments)}}var i;r=r||{};this.trackingClick=false;this.trackingClickStart=0;this.targetElement=null;this.touchStartX=0;this.touchStartY=0;this.lastTouchIdentifier=0;this.touchBoundary=r.touchBoundary||10;this.layer=n;this.tapDelay=r.tapDelay||200;if(e.notNeeded(n)){return}var o=["onMouse","onClick","onTouchStart","onTouchMove","onTouchEnd","onTouchCancel"];var u=this;for(var a=0,f=o.length;a<f;a++){u[o[a]]=s(u[o[a]],u)}if(t){n.addEventListener("mouseover",this.onMouse,true);n.addEventListener("mousedown",this.onMouse,true);n.addEventListener("mouseup",this.onMouse,true)}n.addEventListener("click",this.onClick,true);n.addEventListener("touchstart",this.onTouchStart,false);n.addEventListener("touchmove",this.onTouchMove,false);n.addEventListener("touchend",this.onTouchEnd,false);n.addEventListener("touchcancel",this.onTouchCancel,false);if(!Event.prototype.stopImmediatePropagation){n.removeEventListener=function(e,t,r){var i=Node.prototype.removeEventListener;if(e==="click"){i.call(n,e,t.hijacked||t,r)}else{i.call(n,e,t,r)}};n.addEventListener=function(e,t,r){var i=Node.prototype.addEventListener;if(e==="click"){i.call(n,e,t.hijacked||(t.hijacked=function(e){if(!e.propagationStopped){t(e)}}),r)}else{i.call(n,e,t,r)}}}if(typeof n.onclick==="function"){i=n.onclick;n.addEventListener("click",function(e){i(e)},false);n.onclick=null}}var t=navigator.userAgent.indexOf("Android")>0;var n=/iP(ad|hone|od)/.test(navigator.userAgent);var r=n&&/OS 4_\d(_\d)?/.test(navigator.userAgent);var i=n&&/OS ([6-9]|\d{2})_\d/.test(navigator.userAgent);var s=navigator.userAgent.indexOf("BB10")>0;e.prototype.needsClick=function(e){switch(e.nodeName.toLowerCase()){case"button":case"select":case"textarea":if(e.disabled){return true}break;case"input":if(n&&e.type==="file"||e.disabled){return true}break;case"label":case"video":return true}return/\bneedsclick\b/.test(e.className)};e.prototype.needsFocus=function(e){switch(e.nodeName.toLowerCase()){case"textarea":return true;case"select":return!t;case"input":switch(e.type){case"button":case"checkbox":case"file":case"image":case"radio":case"submit":return false}return!e.disabled&&!e.readOnly;default:return/\bneedsfocus\b/.test(e.className)}};e.prototype.sendClick=function(e,t){var n,r;if(document.activeElement&&document.activeElement!==e){document.activeElement.blur()}r=t.changedTouches[0];n=document.createEvent("MouseEvents");n.initMouseEvent(this.determineEventType(e),true,true,window,1,r.screenX,r.screenY,r.clientX,r.clientY,false,false,false,false,0,null);n.forwardedTouchEvent=true;e.dispatchEvent(n)};e.prototype.determineEventType=function(e){if(t&&e.tagName.toLowerCase()==="select"){return"mousedown"}return"click"};e.prototype.focus=function(e){var t;if(n&&e.setSelectionRange&&e.type.indexOf("date")!==0&&e.type!=="time"&&e.type!=="month"){t=e.value.length;e.setSelectionRange(t,t)}else{e.focus()}};e.prototype.updateScrollParent=function(e){var t,n;t=e.fastClickScrollParent;if(!t||!t.contains(e)){n=e;do{if(n.scrollHeight>n.offsetHeight){t=n;e.fastClickScrollParent=n;break}n=n.parentElement}while(n)}if(t){t.fastClickLastScrollTop=t.scrollTop}};e.prototype.getTargetElementFromEventTarget=function(e){if(e.nodeType===Node.TEXT_NODE){return e.parentNode}return e};e.prototype.onTouchStart=function(e){var t,i,s;if(e.targetTouches.length>1){return true}t=this.getTargetElementFromEventTarget(e.target);i=e.targetTouches[0];if(n){s=window.getSelection();if(s.rangeCount&&!s.isCollapsed){return true}if(!r){if(i.identifier&&i.identifier===this.lastTouchIdentifier){e.preventDefault();return false}this.lastTouchIdentifier=i.identifier;this.updateScrollParent(t)}}this.trackingClick=true;this.trackingClickStart=e.timeStamp;this.targetElement=t;this.touchStartX=i.pageX;this.touchStartY=i.pageY;if(e.timeStamp-this.lastClickTime<this.tapDelay){e.preventDefault()}return true};e.prototype.touchHasMoved=function(e){var t=e.changedTouches[0],n=this.touchBoundary;if(Math.abs(t.pageX-this.touchStartX)>n||Math.abs(t.pageY-this.touchStartY)>n){return true}return false};e.prototype.onTouchMove=function(e){if(!this.trackingClick){return true}if(this.targetElement!==this.getTargetElementFromEventTarget(e.target)||this.touchHasMoved(e)){this.trackingClick=false;this.targetElement=null}return true};e.prototype.findControl=function(e){if(e.control!==undefined){return e.control}if(e.htmlFor){return document.getElementById(e.htmlFor)}return e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea")};e.prototype.onTouchEnd=function(e){var s,o,u,a,f,l=this.targetElement;if(!this.trackingClick){return true}if(e.timeStamp-this.lastClickTime<this.tapDelay){this.cancelNextClick=true;return true}this.cancelNextClick=false;this.lastClickTime=e.timeStamp;o=this.trackingClickStart;this.trackingClick=false;this.trackingClickStart=0;if(i){f=e.changedTouches[0];l=document.elementFromPoint(f.pageX-window.pageXOffset,f.pageY-window.pageYOffset)||l;l.fastClickScrollParent=this.targetElement.fastClickScrollParent}u=l.tagName.toLowerCase();if(u==="label"){s=this.findControl(l);if(s){this.focus(l);if(t){return false}l=s}}else if(this.needsFocus(l)){if(e.timeStamp-o>100||n&&window.top!==window&&u==="input"){this.targetElement=null;return false}this.focus(l);this.sendClick(l,e);if(!n||u!=="select"){this.targetElement=null;e.preventDefault()}return false}if(n&&!r){a=l.fastClickScrollParent;if(a&&a.fastClickLastScrollTop!==a.scrollTop){return true}}if(!this.needsClick(l)){e.preventDefault();this.sendClick(l,e)}return false};e.prototype.onTouchCancel=function(){this.trackingClick=false;this.targetElement=null};e.prototype.onMouse=function(e){if(!this.targetElement){return true}if(e.forwardedTouchEvent){return true}if(!e.cancelable){return true}if(!this.needsClick(this.targetElement)||this.cancelNextClick){if(e.stopImmediatePropagation){e.stopImmediatePropagation()}else{e.propagationStopped=true}e.stopPropagation();e.preventDefault();return false}return true};e.prototype.onClick=function(e){var t;if(this.trackingClick){this.targetElement=null;this.trackingClick=false;return true}if(e.target.type==="submit"&&e.detail===0){return true}t=this.onMouse(e);if(!t){this.targetElement=null}return t};e.prototype.destroy=function(){var e=this.layer;if(t){e.removeEventListener("mouseover",this.onMouse,true);e.removeEventListener("mousedown",this.onMouse,true);e.removeEventListener("mouseup",this.onMouse,true)}e.removeEventListener("click",this.onClick,true);e.removeEventListener("touchstart",this.onTouchStart,false);e.removeEventListener("touchmove",this.onTouchMove,false);e.removeEventListener("touchend",this.onTouchEnd,false);e.removeEventListener("touchcancel",this.onTouchCancel,false)};e.notNeeded=function(e){var n;var r;var i;if(typeof window.ontouchstart==="undefined"){return true}r=+(/Chrome\/([0-9]+)/.exec(navigator.userAgent)||[,0])[1];if(r){if(t){n=document.querySelector("meta[name=viewport]");if(n){if(n.content.indexOf("user-scalable=no")!==-1){return true}if(r>31&&document.documentElement.scrollWidth<=window.outerWidth){return true}}}else{return true}}if(s){i=navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/);if(i[1]>=10&&i[2]>=3){n=document.querySelector("meta[name=viewport]");if(n){if(n.content.indexOf("user-scalable=no")!==-1){return true}if(document.documentElement.scrollWidth<=window.outerWidth){return true}}}}if(e.style.msTouchAction==="none"){return true}return false};e.attach=function(t,n){return new e(t,n)};if(typeof define=="function"&&typeof define.amd=="object"&&define.amd){define(function(){return e})}else if(typeof module!=="undefined"&&module.exports){module.exports=e.attach;module.exports.FastClick=e}else{window.FastClick=e}})()
