// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");var o=Object.prototype.toString;var r=Object.prototype.hasOwnProperty;var n="function"==typeof Symbol?Symbol:void 0,a="function"==typeof n?n.toStringTag:"";var e=t&&"symbol"==typeof Symbol.toStringTag?function(t){var n,e,l,y,f;if(null==t)return o.call(t);e=t[a],f=a,n=null!=(y=t)&&r.call(y,f);try{t[a]=void 0}catch(r){return o.call(t)}return l=o.call(t),n?t[a]=e:delete t[a],l}:function(t){return o.call(t)},l="function"==typeof Float32Array;var y=Number.POSITIVE_INFINITY,f="function"==typeof Float32Array?Float32Array:null;var c="function"==typeof Float32Array?Float32Array:void 0;var u=function(){var t,o,r;if("function"!=typeof f)return!1;try{o=new f([1,3.14,-3.14,5e40]),r=o,t=(l&&r instanceof Float32Array||"[object Float32Array]"===e(r))&&1===o[0]&&3.140000104904175===o[1]&&-3.140000104904175===o[2]&&o[3]===y}catch(o){t=!1}return t}()?c:function(){throw new Error(function(){var t,o=arguments,r="https://stdlib.io/e/"+o[0]+"?";for(t=1;t<o.length;t++)r+="&arg[]="+encodeURIComponent(o[t]);return r}("00l00,Cw"))};export{u as default};
//# sourceMappingURL=mod.js.map
