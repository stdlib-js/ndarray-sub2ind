// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@v0.2.1-esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@v0.2.1-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@v0.2.1-esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@v0.2.1-esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@v0.2.0-esm/index.mjs";var l={mode:["throw"],order:"row-major"};function p(){var p,j,h,f,v,g,b,w;if(!r(p=arguments[0]))throw new TypeError(d("0kF5o",p));if(g=arguments.length,j=p.length,(f={}).mode=l.mode.slice(),f.order=l.order,g>j+1){if(v=function(r,e){var s;if(!o(e))return new TypeError(d("0kF2V",e));if(n(e,"mode")){if(r.mode=e.mode,i(r.mode)){if(0===r.mode.length)return new TypeError(d("0kF5r","mode"))}else r.mode=[r.mode];for(s=0;s<r.mode.length;s++)if(!a(r.mode[s]))return new TypeError(d("0kF5m","mode",r.mode[s]))}return n(e,"order")&&(r.order=e.order,!m(r.order))?new TypeError(d("0kF5n","order",r.order)):null}(f,arguments[w=g-1]),v)throw v}else w=g;if(w-(b=1)!==j)throw new RangeError(d("0kF5p",j,w-b));for((h=new Array(j+4))[0]=p,h[1]=s(p,f.order),h[2]=0;b<w;b++){if(!e(arguments[b]))throw new TypeError(d("0kF5q",b,arguments[b]));h[b+2]=arguments[b]}return h[b+2]=f.mode,t.apply(null,h)}export{p as default};
//# sourceMappingURL=index.mjs.map