// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
var t,o;t=this,o=function(){"use strict";var t,o="function"==typeof Symbol&&"symbol"==typeof Symbol("foo"),e=Object.prototype.toString,n=Object.prototype.hasOwnProperty,r="function"==typeof Symbol?Symbol.toStringTag:"",l=o&&"symbol"==typeof Symbol.toStringTag?function(t){var o,l,a,f,i;if(null==t)return e.call(t);l=t[r],i=r,o=null!=(f=t)&&n.call(f,i);try{t[r]=void 0}catch(o){return e.call(t)}return a=e.call(t),o?t[r]=l:delete t[r],a}:function(t){return e.call(t)},a="function"==typeof Float32Array,f=Number.POSITIVE_INFINITY,i="function"==typeof Float32Array?Float32Array:null,y="function"==typeof Float32Array?Float32Array:void 0;return t=function(){var t,o,e;if("function"!=typeof i)return!1;try{o=new i([1,3.14,-3.14,5e40]),e=o,t=(a&&e instanceof Float32Array||"[object Float32Array]"===l(e))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===f}catch(o){t=!1}return t}()?y:function(){throw new Error(function(){var t,o=arguments,e="https://stdlib.io/e/"+o[0]+"?";for(t=1;t<o.length;t++)e+="&arg[]="+encodeURIComponent(o[t]);return e}("00N00"))},t},"object"==typeof exports&&"undefined"!=typeof module?module.exports=o():"function"==typeof define&&define.amd?define(o):(t="undefined"!=typeof globalThis?globalThis:t||self).Float32Array=o();
//# sourceMappingURL=browser.js.map
