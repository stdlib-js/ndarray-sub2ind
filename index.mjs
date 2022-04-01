// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-nonnegative-integer-array@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-integer@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-shape2strides@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-sub2ind@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-order@esm/index.mjs";import a from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-assert-is-index-mode@esm/index.mjs";var p={mode:["throw"],order:"row-major"},l=n,u=o,j=d,h=m,g=a,b=i;var f=function(e,r){var s;if(!l(r))return new TypeError(b("invalid argument. Options argument must be an object. Value: `%s`.",r));if(u(r,"mode")){if(e.mode=r.mode,j(e.mode)){if(0===e.mode.length)return new TypeError(b("invalid option. `%s` option cannot be an empty array.","mode"))}else e.mode=[e.mode];for(s=0;s<e.mode.length;s++)if(!g(e.mode[s]))return new TypeError(b("invalid option. `%s` option must be a supported/recognized mode. Option: `%s`.","mode",e.mode[s]))}return u(r,"order")&&(e.order=r.order,!h(e.order))?new TypeError(b("invalid option. `%s` option must be a supported/recognized order. Option: `%s`.","order",e.order)):null},v=e.primitives,c=r.isPrimitive,y=s,w=t,x=i,E=p,T=f;var O=function(){var e,r,s,t,i,n,o,d;if(!v(e=arguments[0]))throw new TypeError(x("invalid argument. First argument must be an array-like object containing nonnegative integers. Value: `%s`.",e));if(n=arguments.length,r=e.length,(t={}).mode=E.mode.slice(),t.order=E.order,n>r+1){if(i=T(t,arguments[d=n-1]))throw i}else d=n;if(d-(o=1)!==r)throw new RangeError(x("invalid argument. Number of provided subscripts must match the number of dimensions. ndims: %u. Number of subscripts: %u.",r,d-o));for((s=new Array(r+4))[0]=e,s[1]=y(e,t.order),s[2]=0;o<d;o++){if(!c(arguments[o]))throw new TypeError(x("invalid argument. Subscripts must be integer valued. Argument: %u. Value: `%s`.",o,arguments[o]));s[o+2]=arguments[o]}return s[o+2]=t.mode,w.apply(null,s)};export{O as default};
//# sourceMappingURL=index.mjs.map