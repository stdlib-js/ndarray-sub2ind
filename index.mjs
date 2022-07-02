// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{primitives as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import{isPrimitive as e}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@esm/index.mjs";var l={mode:["throw"],order:"row-major"};function p(r,e){var s;if(!o(e))return new TypeError(d("0N22h",e));if(i(e,"mode")){if(r.mode=e.mode,n(r.mode)){if(0===r.mode.length)return new TypeError(d("0N265","mode"))}else r.mode=[r.mode];for(s=0;s<r.mode.length;s++)if(!a(r.mode[s]))return new TypeError(d("0N260","mode",r.mode[s]))}return i(e,"order")&&(r.order=e.order,!m(r.order))?new TypeError(d("0N261","order",r.order)):null}function h(){var o,i,n,m,a,h,j,f;if(!r(o=arguments[0]))throw new TypeError(d("0N262",o));if(h=arguments.length,i=o.length,(m={}).mode=l.mode.slice(),m.order=l.order,h>i+1){if(a=p(m,arguments[f=h-1]))throw a}else f=h;if(f-(j=1)!==i)throw new RangeError(d("invalid argument. Number of provided subscripts must match the number of dimensions. ndims: `%u`. Number of subscripts: `%u`.",i,f-j));for((n=new Array(i+4))[0]=o,n[1]=s(o,m.order),n[2]=0;j<f;j++){if(!e(arguments[j]))throw new TypeError(d("invalid argument. Subscripts must be integer valued. Argument: `%u`. Value: `%s`.",j,arguments[j]));n[j+2]=arguments[j]}return n[j+2]=m.mode,t.apply(null,n)}export{h as default};
//# sourceMappingURL=index.mjs.map
