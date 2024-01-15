!function(){"use strict";function e(e,t,n,o){return new(n||(n=Promise))((function(i,r){function l(e){try{a(o.next(e))}catch(e){r(e)}}function s(e){try{a(o.throw(e))}catch(e){r(e)}}function a(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(l,s)}a((o=o.apply(e,t||[])).next())}))}let t=!1;try{if("undefined"!=typeof window){const e=Object.defineProperty({},"passive",{get:()=>{t=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(e){console.warn(e)}const n=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function o(e){if(!e)return null;let t=e.getAttributeNames().find((e=>e.startsWith("_bl_")));return t&&(t=t.substring(4)),t}function i(e){if(e instanceof Element){for(var t=[];e.nodeType===Node.ELEMENT_NODE;){var n=e.nodeName.toLowerCase();if(e.id){n="#"+e.id,t.unshift(n);break}for(var o=e,i=1;o=o.previousElementSibling;)o.nodeName.toLowerCase()==n&&i++;1!=i&&(n+=":nth-of-type("+i+")"),t.unshift(n),e=e.parentNode}return t.join(" > ")}}function r(e){let t;try{if(e)if("string"==typeof e)if("document"===e)t=document.documentElement;else if(e.indexOf("__.__")>0){let n=e.split("__.__"),o=0,i=document.querySelector(n[o++]);if(i)for(;n[o];)i=i[n[o]],o++;i instanceof HTMLElement&&(t=i)}else t=document.querySelector(e);else t=e;else t=document.body}catch(e){console.error(e)}return t}const l=!("undefined"==typeof window||"undefined"==typeof document||!window.document||!window.document.createElement),s=["touchcancel","touchend","touchmove","touchenter","touchleave","touchstart"];function a(e){return{detail:e.detail,screenX:e.screenX,screenY:e.screenY,clientX:e.clientX,clientY:e.clientY,offsetX:e.offsetX,offsetY:e.offsetY,pageX:e.pageX,pageY:e.pageY,button:e.button,buttons:e.buttons,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,type:e.type}}function c(e){return{detail:e.detail,touches:u(e.touches),targetTouches:u(e.targetTouches),changedTouches:u(e.changedTouches),ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,altKey:e.altKey,metaKey:e.metaKey,type:e.type}}function u(e){const t=[];for(let n=0;n<e.length;n++){const o=e[n];t.push({identifier:o.identifier,clientX:o.clientX,clientY:o.clientY,screenX:o.screenX,screenY:o.screenY,pageX:o.pageX,pageY:o.pageY})}return t}function d(e,t){Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t,createEventArgs:e=>p("mouse",e)})}function f(e,t){Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t,createEventArgs:e=>{const t=(n=e,Object.assign(Object.assign({},a(n)),{dataTransfer:n.dataTransfer?{dropEffect:n.dataTransfer.dropEffect,effectAllowed:n.dataTransfer.effectAllowed,files:Array.from(n.dataTransfer.files).map((e=>e.name)),items:Array.from(n.dataTransfer.items).map((e=>({kind:e.kind,type:e.type}))),types:n.dataTransfer.types}:null}));var n;const o=e.dataTransfer.getData("data-value"),i=e.dataTransfer.getData("offsetX"),r=e.dataTransfer.getData("offsetY");return t.dataTransfer.data={value:o,offsetX:Number(i),offsetY:Number(r)},t}})}function p(e,t){let n={target:{}};return"mouse"===e?n=Object.assign(Object.assign({},n),a(t)):"touch"===e&&(n=Object.assign(Object.assign({},n),c(t))),n.target=function(e){const t=e,n={},o=t.getAttributeNames().find((e=>e.startsWith("_bl_")));return o?(n.elementReferenceId=o,n.selector=`[${o}]`):n.selector=i(t),n.class=t.getAttribute("class"),n}(t.target),n}let m=0;const h={};var v=Object.freeze({__proto__:null,registerSliderEvents:function(n,o){h[m]=s;const i=document.querySelector("[data-app]"),r=!t||{passive:!0,capture:!0},l=!!t&&{passive:!0};return n.addEventListener("mousedown",s),n.addEventListener("touchstart",s),m++;function s(t){return e(this,void 0,void 0,(function*(){const e="touches"in t;c(t),i.addEventListener(e?"touchmove":"mousemove",c,l),function(e,t,n,o=!1){const i=r=>{n(r),e.removeEventListener(t,i,o)};e.addEventListener(t,i,o)}(i,e?"touchend":"mouseup",a,r),e?yield o.invokeMethodAsync("OnTouchStartInternal",p("touch",t)):yield o.invokeMethodAsync("OnMouseDownInternal",p("mouse",t))}))}function a(t){return e(this,void 0,void 0,(function*(){t.stopPropagation(),i.removeEventListener("touchmove",c,l),i.removeEventListener("mousemove",c,l),yield o.invokeMethodAsync("OnMouseUpInternal")}))}function c(t){return e(this,void 0,void 0,(function*(){const e="touches"in t,n={type:t.type,clientX:e?t.touches[0].clientX:t.clientX,clientY:e?t.touches[0].clientY:t.clientY};yield o.invokeMethodAsync("OnMouseMoveInternal",n)}))}},unregisterSliderEvents:function(e,t){const n=h[t];e.removeEventListener("mousedown",n),e.removeEventListener("touchstart",n),delete h[t]}}),g=function(e,t,n){var o=null,i=null,r=function(){o&&(clearTimeout(o),i=null,o=null)},l=function(){if(!t)return e.apply(this,arguments);var l=this,s=arguments,a=n&&!o;return r(),i=function(){e.apply(l,s)},o=setTimeout((function(){if(o=null,!a){var e=i;return i=null,e()}}),t),a?i():void 0};return l.cancel=r,l.flush=function(){var e=i;r(),e&&e()},l};var y=function(e,t,n){var o=null,i=null,r=n&&n.leading,l=n&&n.trailing;null==r&&(r=!0);null==l&&(l=!r);1==r&&(l=!1);var s=function(){o&&(clearTimeout(o),o=null)},a=function(){var n=r&&!o,s=this,a=arguments;if(i=function(){return e.apply(s,a)},o||(o=setTimeout((function(){if(o=null,l)return i()}),t)),n)return n=!1,i()};return a.cancel=s,a.flush=function(){var e=i;s(),e&&e()},a};function w(){var e,t;d("exmousedown","mousedown"),d("exmouseup","mouseup"),d("exclick","click"),d("exmouseleave","mouseleave"),d("exmouseenter","mouseenter"),d("exmousemove","mousemove"),e="extouchstart",t="touchstart",Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t,createEventArgs:e=>p("touch",e)}),function(e,t){Blazor&&Blazor.registerCustomEventType(e,{browserEventName:t})}("transitionend","transitionend"),f("exdrop","drop"),Blazor&&Blazor.registerCustomEventType("auxclick",{browserEventName:"auxclick",createEventArgs:a})}const E=80;function b(e,t){e.style.transform=t,e.style.webkitTransform=t}function T(e){return"TouchEvent"===e.constructor.name}function L(e){return"KeyboardEvent"===e.constructor.name}const _={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const o=document.createElement("span"),i=document.createElement("span");o.appendChild(i),o.className="m-ripple__container",n.class&&(o.className+=` ${n.class}`);const{radius:r,scale:l,x:s,y:a,centerX:c,centerY:u}=((e,t,n={})=>{let o=0,i=0;if(!L(e)){const n=t.getBoundingClientRect(),r=T(e)?e.touches[e.touches.length-1]:e;o=r.clientX-n.left,i=r.clientY-n.top}let r=0,l=.3;t._ripple&&t._ripple.circle?(l=.15,r=t.clientWidth/2,r=n.center?r:r+Math.sqrt((o-r)**2+(i-r)**2)/4):r=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const s=(t.clientWidth-2*r)/2+"px",a=(t.clientHeight-2*r)/2+"px";return{radius:r,scale:l,x:n.center?s:o-r+"px",y:n.center?a:i-r+"px",centerX:s,centerY:a}})(e,t,n),d=2*r+"px";i.className="m-ripple__animation",i.style.width=d,i.style.height=d,t.appendChild(o);const f=window.getComputedStyle(t);f&&"static"===f.position&&(t.style.position="relative",t.dataset.previousPosition="static"),i.classList.add("m-ripple__animation--enter"),i.classList.add("m-ripple__animation--visible"),b(i,`translate(${s}, ${a}) scale3d(${l},${l},${l})`),i.dataset.activated=String(performance.now()),setTimeout((()=>{i.classList.remove("m-ripple__animation--enter"),i.classList.add("m-ripple__animation--in"),b(i,`translate(${c}, ${u}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("m-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const o=performance.now()-Number(n.dataset.activated),i=Math.max(250-o,0);setTimeout((()=>{n.classList.remove("m-ripple__animation--in"),n.classList.add("m-ripple__animation--out"),setTimeout((()=>{var t;1===e.getElementsByClassName("m-ripple__animation").length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),i)}};function C(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,T(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||L(e),n._ripple.class&&(t.class=n._ripple.class),T(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{_.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),E)}else _.show(e,n,t)}}function x(e){const t=e.currentTarget;if(t&&t._ripple)if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null;t._ripple.showTimer=setTimeout((()=>x(e)))}else window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),_.hide(t)}function S(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}function k(e){const t=e.currentTarget;t.keyboardRipple||e.keyCode!==n.enter&&e.keyCode!==n.space||(t.keyboardRipple=!0,C(e))}function N(e){e.currentTarget.keyboardRipple=!1,x(e)}function O(e){const t=e.currentTarget;!0===t.keyboardRipple&&(t.keyboardRipple=!1,x(e))}function M(e,t,n){let o=!1;t?o=!0:_.hide(e);const i=t||{};e._ripple=e._ripple||{},e._ripple.enabled=o,e._ripple=Object.assign(Object.assign({},e._ripple),{centered:i.center,class:i.class,circle:i.circle}),o&&!n?(e.addEventListener("touchstart",C,{passive:!0}),e.addEventListener("touchend",x,{passive:!0}),e.addEventListener("touchmove",S,{passive:!0}),e.addEventListener("touchcancel",x),e.addEventListener("mousedown",C),e.addEventListener("mouseup",x),e.addEventListener("mouseleave",x),e.addEventListener("keydown",k),e.addEventListener("keyup",N),e.addEventListener("blur",O),e.addEventListener("dragstart",x,{passive:!0})):!o&&n&&A(e)}function A(e){e.removeEventListener("mousedown",C),e.removeEventListener("touchstart",C),e.removeEventListener("touchend",x),e.removeEventListener("touchmove",S),e.removeEventListener("touchcancel",x),e.removeEventListener("mouseup",x),e.removeEventListener("mouseleave",x),e.removeEventListener("keydown",k),e.removeEventListener("keyup",N),e.removeEventListener("dragstart",x),e.removeEventListener("blur",O),e._ripple.enabled=!1}function H(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||H(e.parentNode)}function B(e){var t={};t.offsetTop=e.offsetTop||0,t.offsetLeft=e.offsetLeft||0,t.scrollHeight=e.scrollHeight||0,t.scrollWidth=e.scrollWidth||0,t.scrollLeft=e.scrollLeft||0,t.scrollTop=e.scrollTop||0,t.clientTop=e.clientTop||0,t.clientLeft=e.clientLeft||0,t.clientHeight=e.clientHeight||0,t.clientWidth=e.clientWidth||0;var n=function(e){var t=new Object;if(t.x=0,t.y=0,null!==e&&e.getBoundingClientRect){var n=document.documentElement,o=e.getBoundingClientRect(),i=n.scrollLeft,r=n.scrollTop;t.offsetWidth=o.width,t.offsetHeight=o.height,t.relativeTop=o.top,t.relativeBottom=o.bottom,t.relativeLeft=o.left,t.relativeRight=o.right,t.absoluteLeft=o.left+i,t.absoluteTop=o.top+r}return t}(e);return t.offsetWidth=Math.round(n.offsetWidth)||0,t.offsetHeight=Math.round(n.offsetHeight)||0,t.relativeTop=Math.round(n.relativeTop)||0,t.relativeBottom=Math.round(n.relativeBottom)||0,t.relativeLeft=Math.round(n.relativeLeft)||0,t.relativeRight=Math.round(n.relativeRight)||0,t.absoluteLeft=Math.round(n.absoluteLeft)||0,t.absoluteTop=Math.round(n.absoluteTop)||0,t}window.onload=function(){var e;w(),e="pastewithdata",Blazor&&Blazor.registerCustomEventType(e,{browserEventName:"paste",createEventArgs:e=>({type:e.type,pastedData:e.clipboardData.getData("text")})}),function(){const e=new MutationObserver(((e,n)=>{for(const n of e){if("childList"===n.type&&n.addedNodes.length>0)for(const e of n.addedNodes)e instanceof HTMLElement&&e.nodeType===Node.ELEMENT_NODE&&e.hasAttribute("ripple")&&!e._ripple&&M(e,t(e),!1);if("attributes"===n.type){const e=n.target;e.hasAttribute("ripple")&&!e._ripple&&("ripple"===n.attributeName?M(e,t(e),!1):!e.hasAttribute("ripple")&&e._ripple&&(A(e),delete e._ripple))}if("attributes"===n.type&&"ripple"===n.attributeName){const e=n.target;e._ripple&&M(e,t(e),e._ripple.enabled)}if("childList"===n.type&&n.removedNodes.length>0)for(const e of n.removedNodes)e instanceof HTMLElement&&e.nodeType===Node.ELEMENT_NODE&&e._ripple&&(A(e),delete e._ripple)}}));function t(e){const t=e.getAttribute("ripple");if("string"!=typeof t&&!t||"false"===t)return null;const n={};return t.split("&").forEach((e=>{"center"===e?n.center=!0:"circle"===e?n.circle=!0:n.class=e.trim()})),n}const n=document.querySelectorAll("[ripple]");for(const e of n)M(e,t(e),!1);e.observe(document,{childList:!0,subtree:!0,attributes:!0,attributeFilter:["ripple"],attributeOldValue:!1})}()};var Y={};function I(){return document.activeElement.getAttribute("id")||""}function P(e=[],t=[]){const n={};return e&&e.forEach((e=>n[e]=window[e])),t&&t.forEach((e=>n[e]=document.documentElement[e])),n}function D(e){return"HTML"!==e.tagName&&"BODY"!==e.tagName&&1==e.nodeType}function X(e=[],t){const n=[H(r(t))],o=[...document.getElementsByClassName("m-menu__content--active"),...document.getElementsByClassName("m-dialog__content--active")];for(let t=0;t<o.length;t++)e.includes(o[t])||n.push(H(o[t]));return Math.max(...n)}function W(e,t,n,o,i,r){if(!i){var l=document.querySelector(r);o.nodeType&&l.appendChild(o)}var s={activator:{},content:{},relativeYOffset:0,offsetParentLeft:0};if(e){var a=document.querySelector(t);s.activator=z(a,n),s.activator.offsetLeft=a.offsetLeft,s.activator.offsetTop=n?0:a.offsetTop}return function(e,t){if(!t||!t.style||"none"!==t.style.display)return void e();t.style.display="inline-block",e(),t.style.display="none"}((()=>{if(o){if(o.offsetParent){const t=q(o.offsetParent);s.relativeYOffset=window.pageYOffset+t.top,e?(s.activator.top-=s.relativeYOffset,s.activator.left-=window.pageXOffset+t.left):s.offsetParentLeft=t.left}s.content=z(o,n)}}),o),s}function z(e,t){if(!e)return{};const n=q(e);if(!t){const t=window.getComputedStyle(e);n.left=parseInt(t.marginLeft),n.top=parseInt(t.marginTop)}return n}function q(e){if(!e||!e.nodeType)return null;const t=e.getBoundingClientRect();return{top:Math.round(t.top),left:Math.round(t.left),bottom:Math.round(t.bottom),right:Math.round(t.right),width:Math.round(t.width),height:Math.round(t.height)}}function R(e,t,n,o){e.preventDefault();const i=e.key;if("ArrowLeft"===i||"Backspace"===i){if("Backspace"===i){const e={type:i,index:t,value:""};o&&o.invokeMethodAsync("Invoke",JSON.stringify(e))}$(t-1,n)}else"ArrowRight"===i&&$(t+1,n)}function $(e,t){if(e<0)$(0,t);else if(e>=t.length)$(t.length-1,t);else if(document.activeElement!==t[e]){r(t[e]).focus()}}function F(e,t,n){const o=r(n[t]);o&&document.activeElement===o&&o.select()}function K(e,t,n,o){const i=e.target.value;if(i&&""!==i&&($(t+1,n),o)){const e={type:"Input",index:t,value:i};o.invokeMethodAsync("Invoke",JSON.stringify(e))}}function j(){var e,t,n="weird_get_top_level_domain=cookie",o=document.location.hostname.split(".");for(e=o.length-1;e>=0;e--)if(t=o.slice(e).join("."),document.cookie=n+";domain=."+t+";",document.cookie.indexOf(n)>-1)return document.cookie=n.split("=")[0]+"=;domain=."+t+";expires=Thu, 01 Jan 1970 00:00:01 GMT;",t}function V(e){e.stopPropagation()}var U=Object.freeze({__proto__:null,getZIndex:H,getDomInfo:function(e,t="body"){var n={},o=r(e);if(o)if(o.style&&"none"===o.style.display){var i=o.cloneNode(!0);i.style.display="inline-block",i.style["z-index"]=-1e3,o.parentElement.appendChild(i),n=B(i),o.parentElement.removeChild(i)}else n=B(o);return n},triggerEvent:function(e,t,n,o){var i=r(e),l=document.createEvent(t);return l.initEvent(n),o&&l.stopPropagation(),i.dispatchEvent(l)},setProperty:function(e,t,n){r(e)[t]=n},getBoundingClientRect:function(e,t="body"){var n,o;let i=r(e);var l={};if(i&&i.getBoundingClientRect)if(i.style&&"none"===i.style.display){var s=i.cloneNode(!0);s.style.display="inline-block",s.style["z-index"]=-1e3,null===(n=document.querySelector(t))||void 0===n||n.appendChild(s),l=s.getBoundingClientRect(),null===(o=document.querySelector(t))||void 0===o||o.removeChild(s)}else l=i.getBoundingClientRect();return l},addHtmlElementEventListener:function(e,t,n,o,r){let l;l="window"==e?window:"document"==e?document.documentElement:document.querySelector(e);var a=(null==r?void 0:r.key)||`${e}:${t}`;const u={};var d=e=>{var t;if((null==r?void 0:r.stopPropagation)&&e.stopPropagation(),("boolean"!=typeof e.cancelable||e.cancelable)&&(null==r?void 0:r.preventDefault)&&e.preventDefault(),(null==r?void 0:r.relatedTarget)&&(null===(t=document.querySelector(r.relatedTarget))||void 0===t?void 0:t.contains(e.relatedTarget)))return;let o={};if(s.includes(e.type))o=c(e);else for(var l in e)"string"!=typeof e[l]&&"number"!=typeof e[l]||(o[l]=e[l]);if(e.target&&e.target!==window&&e.target!==document){o.target={};const t=e.target,n=t.getAttributeNames().find((e=>e.startsWith("_bl_")));n?(o.target.elementReferenceId=n,o.target.selector=`[${n}]`):o.target.selector=i(t),o.target.class=t.getAttribute("class")}n.invokeMethodAsync("Invoke",o)};(null==r?void 0:r.debounce)&&r.debounce>0?u.listener=g(d,r.debounce):(null==r?void 0:r.throttle)&&r.throttle>0?u.listener=y(d,r.throttle,{trailing:!0}):u.listener=d,u.options=o,u.handle=n,Y[a]?Y[a].push(u):Y[a]=[u],l&&l.addEventListener(t,u.listener,u.options)},removeHtmlElementEventListener:function(e,t,n){let o;o="window"==e?window:"document"==e?document.documentElement:document.querySelector(e);var i=Y[n=n||`${e}:${t}`];i&&(i.forEach((e=>{e.handle.dispose(),null==o||o.removeEventListener(t,e.listener,e.options)})),Y[n]=[])},addMouseleaveEventListener:function(e){var t=document.querySelector(e);t&&t.addEventListener()},contains:function(e,t){const n=r(e);return!(!n||!n.contains)&&n.contains(r(t))},equalsOrContains:function(e,t){const n=r(e),o=r(t);return!!n&&n.contains&&!!o&&(n==o||n.contains(o))},copy:function(e){navigator.clipboard?navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)})):function(e){var t=document.createElement("textarea");t.value=e,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(t)}(e)},focus:function(e,t=!1){let n=r(e);if(!(n instanceof HTMLElement))throw new Error("Unable to focus an invalid element.");n.focus({preventScroll:t})},select:function(e){let t=r(e);if(!(t instanceof HTMLInputElement||t instanceof HTMLTextAreaElement))throw new Error("Unable to select an invalid element");t.select()},hasFocus:function(e){let t=r(e);return document.activeElement===t},blur:function(e){r(e).blur()},log:function(e){console.log(e)},scrollIntoView:function(e,t){let n=r(e);n instanceof HTMLElement&&(null===t||null==t?n.scrollIntoView():"boolean"==typeof t?n.scrollIntoView(t):n.scrollIntoView({block:null==t.block?void 0:t.block,inline:null==t.inline?void 0:t.inline,behavior:t.behavior}))},scrollIntoParentView:function(e,t=!1,n=!1,o=1,i="smooth"){const l=r(e);if(l instanceof HTMLElement){let e=l;for(;o>0;)if(e=e.parentElement,o--,!e)return;const r={behavior:i};if(t)if(n)r.left=l.offsetLeft;else{const t=l.offsetLeft-e.offsetLeft;t-e.scrollLeft<0?r.left=t:t+l.offsetWidth-e.scrollLeft>e.offsetWidth&&(r.left=t+l.offsetWidth-e.offsetWidth)}else if(n)r.top=l.offsetTop;else{const t=l.offsetTop-e.offsetTop;t-e.scrollTop<0?r.top=t:t+l.offsetHeight-e.scrollTop>e.offsetHeight&&(r.top=t+l.offsetHeight-e.offsetHeight)}(r.left||r.top)&&e.scrollTo(r)}},scrollTo:function(e,t){let n=r(e);if(n instanceof HTMLElement){const e={left:null===t.left?void 0:t.left,top:null===t.top?void 0:t.top,behavior:t.behavior};n.scrollTo(e)}},scrollToElement:function(e,t,n){const o=r(e);if(!o)return;const i=o.getBoundingClientRect().top+window.pageYOffset-t;window.scrollTo({top:i,behavior:n})},scrollToActiveElement:function(e,t=".active",n="center"){let o,i=r(e);"string"==typeof t&&(o=e.querySelector(t)),i&&o&&(i.scrollTop="center"===n?o.offsetTop-i.offsetHeight/2+o.offsetHeight/2:o.offsetTop-n)},addClsToFirstChild:function(e,t){var n=r(e);n.firstElementChild&&n.firstElementChild.classList.add(t)},removeClsFromFirstChild:function(e,t){var n=r(e);n.firstElementChild&&n.firstElementChild.classList.remove(t)},getAbsoluteTop:function e(t){var n=t.offsetTop;return null!=t.offsetParent&&(n+=e(t.offsetParent)),n},getAbsoluteLeft:function e(t){var n=t.offsetLeft;return null!=t.offsetParent&&(n+=e(t.offsetParent)),n},addElementToBody:function(e){document.body.appendChild(e)},delElementFromBody:function(e){document.body.removeChild(e)},addElementTo:function(e,t){let n=r(t);n&&e&&n.appendChild(e)},delElementFrom:function(e,t){let n=r(t);n&&e&&n.removeChild(e)},getActiveElement:I,focusDialog:function e(t,n=0){let o=document.querySelector(t);o&&!o.hasAttribute("disabled")&&setTimeout((()=>{o.focus(),"#"+I()!==t&&n<10&&e(t,n+1)}),10)},getWindow:function(){return{innerWidth:window.innerWidth,innerHeight:window.innerHeight,pageXOffset:window.pageXOffset,pageYOffset:window.pageYOffset,isTop:0==window.scrollY,isBottom:window.scrollY+window.innerHeight==document.body.clientHeight}},getWindowAndDocumentProps:P,css:function(e,t,n=null){var o=r(e);if("string"==typeof t)o.style[t]=n;else for(let e in t)t.hasOwnProperty(e)&&(o.style[e]=t[e])},addCls:function(e,t){let n=r(e);"string"==typeof t?n.classList.add(t):n.classList.add(...t)},removeCls:function(e,t){let n=r(e);"string"==typeof t?n.classList.remove(t):n.classList.remove(...t)},elementScrollIntoView:function(e){let t=r(e);t&&t.scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})},getScroll:function(){return{x:window.pageXOffset,y:window.pageYOffset}},getScrollParent:function(e,t=undefined){null!=t||(t=l?window:void 0);let n=e;for(;n&&n!==t&&D(n);){const{overflowY:e}=window.getComputedStyle(n);if(/scroll|auto|overlay/i.test(e))return n;n=n.parentNode}return t},getScrollTop:function(e){const t="scrollTop"in e?e.scrollTop:e.pageYOffset;return Math.max(t,0)},getInnerText:function(e){return r(e).innerText},getMenuOrDialogMaxZIndex:X,getMaxZIndex:function(){return[...document.all].reduce(((e,t)=>Math.max(e,+window.getComputedStyle(t).zIndex||0)),0)},getStyle:function(e,t){return(e=r(e)).currentStyle?e.currentStyle[t]:window.getComputedStyle?document.defaultView.getComputedStyle(e,null).getPropertyValue(t):void 0},getTextAreaInfo:function(e){var t={},n=r(e);return t.scrollHeight=n.scrollHeight||0,e.currentStyle?(t.lineHeight=parseFloat(e.currentStyle["line-height"]),t.paddingTop=parseFloat(e.currentStyle["padding-top"]),t.paddingBottom=parseFloat(e.currentStyle["padding-bottom"]),t.borderBottom=parseFloat(e.currentStyle["border-bottom"]),t.borderTop=parseFloat(e.currentStyle["border-top"])):window.getComputedStyle&&(t.lineHeight=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("line-height")),t.paddingTop=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("padding-top")),t.paddingBottom=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("padding-bottom")),t.borderBottom=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("border-bottom")),t.borderTop=parseFloat(document.defaultView.getComputedStyle(e,null).getPropertyValue("border-top"))),Object.is(NaN,t.borderTop)&&(t.borderTop=1),Object.is(NaN,t.borderBottom)&&(t.borderBottom=1),t},disposeObj:function(e){},upsertThemeStyle:function(e,t){const n=document.getElementById(e);n&&document.head.removeChild(n);const o=document.createElement("style");o.id=e,o.type="text/css",o.innerHTML=t,document.head.insertAdjacentElement("beforeend",o)},getImageDimensions:function(e){return new Promise((function(t,n){var o=new Image;o.src=e,o.onload=function(){t({width:o.width,height:o.height,hasError:!1})},o.onerror=function(){t({width:0,height:0,hasError:!0})}}))},enablePreventDefaultForEvent:function(e,t,n){const o=r(e);o&&("keydown"===t?o.addEventListener(t,(e=>{Array.isArray(n)?n.includes(e.code)&&e.preventDefault():e.preventDefault()})):o.addEventListener(t,(e=>{e.preventDefault&&e.preventDefault()})))},getBoundingClientRects:function(e){for(var t=document.querySelectorAll(e),n=[],o=0;o<t.length;o++){var i=t[o],r={id:i.id,rect:i.getBoundingClientRect()};n.push(r)}return n},getSize:function(e,t){var n=r(e),o=n.style.display,i=n.style.overflow;n.style.display="",n.style.overflow="hidden";var l=n["offset"+t.charAt(0).toUpperCase()+t.slice(1)]||0;return n.style.display=o,n.style.overflow=i,l},getProp:function(e,t){if("window"===e)return window[t];var n=r(e);return n?n[t]:null},updateWindowTransition:function(e,t,n){var o=r(e),i=o.querySelector(".m-window__container");if(n){var l=r(n);i.style.height=l.clientHeight+"px"}else t?(i.classList.add("m-window__container--is-active"),i.style.height=o.clientHeight+"px"):(i.style.height="",i.classList.remove("m-window__container--is-active"))},getScrollHeightWithoutHeight:function(e){var t=r(e);if(!t)return 0;var n=t.style.height;t.style.height="0";var o=t.scrollHeight;return t.style.height=n,o},registerTextFieldOnMouseDown:function(e,t,n){if(!e||!t)return;const i=e=>{if(e.target!==r(t)&&(e.preventDefault(),e.stopPropagation()),n){const t={Detail:e.detail,ScreenX:e.screenX,ScreenY:e.screenY,ClientX:e.clientX,ClientY:e.clientY,OffsetX:e.offsetX,OffsetY:e.offsetY,PageX:e.pageX,PageY:e.pageY,Button:e.button,Buttons:e.buttons,CtrlKey:e.ctrlKey,ShiftKey:e.shiftKey,AltKey:e.altKey,MetaKey:e.metaKey,Type:e.type};n.invokeMethodAsync("Invoke",t)}};e.addEventListener("mousedown",i);const l={listener:i,handle:n},s=`registerTextFieldOnMouseDown_${o(e)}`;Y[s]=[l]},unregisterTextFieldOnMouseDown:function(e){const t=`registerTextFieldOnMouseDown_${o(e)}`,n=Y[t];n&&n.length&&n.forEach((t=>{t.handle.dispose(),e&&e.removeEventListener("mousedown",t.listener)}))},containsActiveElement:function(e){var t=r(e);return t&&t.contains?t.contains(document.activeElement):null},copyChild:function(e){"string"==typeof e&&(e=document.querySelector(e)),e&&(e.setAttribute("contenteditable","true"),e.focus(),document.execCommand("selectAll",!1,null),document.execCommand("copy"),document.execCommand("unselect"),e.removeAttribute("contenteditable"))},copyText:function(e){if(navigator.clipboard)navigator.clipboard.writeText(e).then((function(){console.log("Async: Copying to clipboard was successful!")}),(function(e){console.error("Async: Could not copy text: ",e)}));else{var t=document.createElement("textarea");t.value=e,t.readOnly=!0,t.style.top="0",t.style.left="0",t.style.position="fixed",document.body.appendChild(t),t.focus(),t.select();try{var n=document.execCommand("copy")?"successful":"unsuccessful";console.log("Fallback: Copying text command was "+n)}catch(e){console.error("Fallback: Oops, unable to copy",e)}document.body.removeChild(t)}},getMenuableDimensions:W,invokeMultipleMethod:function(e,t,n,o,i,r,l,s,a){var c={windowAndDocument:null,dimensions:null,zIndex:0};return c.windowAndDocument=P(e,t),c.dimensions=W(n,o,i,r,l,s),c.zIndex=X([r],a),c},registerOTPInputOnInputEvent:function(e,t){for(let n=0;n<e.length;n++){const o=o=>K(o,n,e,t),i=t=>F(t,n,e),r=o=>R(o,n,e,t);e[n].addEventListener("input",o),e[n].addEventListener("focus",i),e[n].addEventListener("keyup",r),e[n]._optInput={inputListener:o,focusListener:i,keyupListener:r}}},unregisterOTPInputOnInputEvent:function(e){for(let t=0;t<e.length;t++){const n=e[t];n&&n._optInput&&(n.removeEventListener("input",n._optInput.inputListener),n.removeEventListener("focus",n._optInput.focusListener),n.removeEventListener("keyup",n._optInput.keyupListener))}},getListIndexWhereAttributeExists:function(e,t,n){const o=document.querySelectorAll(e);if(!o)return-1;let i=-1;for(let e=0;e<o.length;e++)if(o[e].getAttribute(t)===n){i=e;break}return i},scrollToTile:function(e,t,n,o){var i=document.querySelectorAll(t);if(!i)return;let r=i[n];if(!r)return;const l=document.querySelector(e);if(!l)return;const s=l.scrollTop,a=l.clientHeight;s>r.offsetTop-8?l.scrollTo({top:r.offsetTop-r.clientHeight,behavior:"smooth"}):s+a<r.offsetTop+r.clientHeight+8&&l.scrollTo({top:r.offsetTop-a+2*r.clientHeight,behavior:"smooth"})},getElementTranslateY:function(e){const t=window.getComputedStyle(e),n=t.transform||t.webkitTransform,o=n.slice(7,n.length-1).split(", ")[5];return Number(o)},checkIfThresholdIsExceededWhenScrolling:function(e,t,n){if(!e||!t)return;let o;o="window"==t?window:"document"==t?document.documentElement:document.querySelector(t);const i=e.getBoundingClientRect().top;return(o===window?window.innerHeight:o.getBoundingClientRect().bottom)>=i-n},get_top_domain:j,setCookie:function(e,t){var n=j();n?isNaN(n[0])&&(n=`.${n}`):n="";var o=new Date;o.setTime(o.getTime()+2592e6),document.cookie=`${e}=${escape(null==t?void 0:t.toString())};path=/;expires=${o.toUTCString()};domain=${n}`},getCookie:function(e){const t=new RegExp(`(^| )${e}=([^;]*)(;|$)`),n=document.cookie.match(t);return n?unescape(n[2]):null},registerDragEvent:function(e,t){if(e){const n=o(e),i=e=>{if(t){const n=e.target.getAttribute(t);e.dataTransfer.setData(t,n),e.dataTransfer.setData("offsetX",e.offsetX.toString()),e.dataTransfer.setData("offsetY",e.offsetY.toString())}};Y[`${n}:dragstart`]=[{listener:i}],e.addEventListener("dragstart",i)}},unregisterDragEvent:function(e){const t=o(e);if(t){const n=`${t}:dragstart`;Y[n]&&Y[n].forEach((t=>{e.removeEventListener("dragstart",t.listener)}))}},resizableDataTable:function(e){const t=e.querySelector("table"),n=t.querySelector(".m-data-table-header").getElementsByTagName("tr")[0],o=n?n.children:[];if(!o)return;t.style.overflow="hidden";const i=t.offsetHeight;for(var r=0;r<o.length;r++){const e=o[r],t=e.querySelector(".m-data-table-header__col-resize");if(!t)continue;t.style.height=i+"px";let n=e.firstElementChild.offsetWidth;n=n+32+18+1+1,e.style.minWidth||(e.minWidth=n,e.style.minWidth=n+"px"),l(t)}function l(n){let i,r,l,a,c,u;n.addEventListener("click",(e=>e.stopPropagation())),n.addEventListener("mousedown",(function(e){r=e.target.parentElement,l=r.nextElementSibling,i=e.pageX,u=t.offsetWidth;var n=function(e){if("border-box"==s(e,"box-sizing"))return 0;var t=s(e,"padding-left"),n=s(e,"padding-right");return parseInt(t)+parseInt(n)}(r);a=r.offsetWidth-n,l&&(c=l.offsetWidth-n)})),document.addEventListener("mousemove",(function(n){if(r){let o=n.pageX-i;e.classList.contains("m-data-table--rtl")&&(o=0-o);let s=a+o;r.style.width=s+"px";if(e.classList.contains("m-data-table--resizable-overflow"))return void(t.style.width=u+o+"px");if(e.classList.contains("m-data-table--resizable-independent")){let e=c-o;const t=a+c;o>0?l&&e<l.minWidth&&(e=l.minWidth,s=t-e):s<r.minWidth&&(s=r.minWidth,e=t-s),r.style.width=s+"px",l&&(l.style.width=e+"px")}}})),document.addEventListener("mouseup",(function(e){if(r)for(let e=0;e<o.length;e++){const t=o[e];t.style.width=t.offsetWidth+"px"}r=void 0,l=void 0,i=void 0,c=void 0,a=void 0,u=void 0}))}function s(e,t){return window.getComputedStyle(e,null).getPropertyValue(t)}},updateDataTableResizeHeight:function(e){const t=e.querySelector("table"),n=t.querySelector(".m-data-table-header").getElementsByTagName("tr")[0],o=n?n.children:[];if(!o)return;const i=t.offsetHeight;for(var r=0;r<o.length;r++){o[r].querySelector(".m-data-table-header__col-resize").style.height=i+"px"}},addStopPropagationEvent:function(e,t){r(e).addEventListener(t,V)},removeStopPropagationEvent:function(e,t){r(e).removeEventListener(t,V)}}),J={};function Z(e,t){if(e.hasAttribute("data-app"))return!1;const n=t.shiftKey||t.deltaX?"x":"y",o="y"===n?t.deltaY:t.deltaX||t.deltaY;let i,r;"y"===n?(i=0===e.scrollTop,r=e.scrollTop+e.clientHeight===e.scrollHeight):(i=0===e.scrollLeft,r=e.scrollLeft+e.clientWidth===e.scrollWidth);return!(i||!(o<0))||(!(r||!(o>0))||!(!i&&!r)&&Z(e.parentNode,t))}function G(e,t){return e===t||null!==e&&e!==document.body&&G(e.parentNode,t)}function Q(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth}var ee=Object.freeze({__proto__:null,hideScroll:function(e,o,i,l){if(e)document.documentElement.classList.add("overflow-y-hidden");else{if(!o)return;const e=r(o),d=t=>{!function(e,t,o,i){if("keydown"===e.type){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[n.up,n.pageup],o=[n.down,n.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!o.includes(e.keyCode))return;e.deltaY=1}}(e.target===t||"keydown"!==e.type&&e.target===document.body||function(e,t,n){const o=function(e){if(e.composedPath)return e.composedPath();const t=[];let n=e.target;for(;n;){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}(e);if("keydown"===e.type&&o[0]===document.body){const t=window.getSelection().anchorNode;return!(n&&Q(n)&&G(t,n))||!Z(n,e)}for(let n=0;n<o.length;n++){const i=o[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===t)return!0;if(Q(i))return!Z(i,e)}return!0}(e,o,i))&&e.preventDefault()}(t,e,i,l)};J[`window_${o}`]=d,s=window,a="wheel",c=d,u={passive:!1},s.addEventListener(a,c,!!t&&u),window.addEventListener("keydown",d)}var s,a,c,u},showScroll:function(e){document.documentElement.classList.remove("overflow-y-hidden");var t=J[`window_${e}`];t&&(window.removeEventListener("wheel",t),window.removeEventListener("keydown",t))}});window.BlazorComponent={interop:Object.assign(Object.assign(Object.assign({},U),ee),v)},window.MasaBlazor={xgplayerPlugins:[]}}();
//# sourceMappingURL=blazor-component.js.map
