// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
function r(r){if(r.__esModule)return r;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(r).forEach((function(t){var n=Object.getOwnPropertyDescriptor(r,t);Object.defineProperty(e,t,n.get?n:{enumerable:!0,get:function(){return r[t]}})})),e}var e="function"==typeof Object.defineProperty?Object.defineProperty:null;var t=function(){try{return e({},"x",{}),!0}catch(r){return!1}},n=Object.defineProperty,i=Object.prototype,o=i.toString,a=i.__defineGetter__,u=i.__defineSetter__,c=i.__lookupGetter__,s=i.__lookupSetter__;var f=function(r,e,t){var n,f,l,p;if("object"!=typeof r||null===r||"[object Array]"===o.call(r))throw new TypeError("invalid argument. First argument must be an object. Value: `"+r+"`.");if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+t+"`.");if((f="value"in t)&&(c.call(r,e)||s.call(r,e)?(n=r.__proto__,r.__proto__=i,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),l="get"in t,p="set"in t,f&&(l||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return l&&a&&a.call(r,e,t.get),p&&u&&u.call(r,e,t.set),r},l=n,p=f,v=t()?l:p;var g=function(r,e,t){v(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})},m=g;var d=function(r){return"number"==typeof r};var h=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var b=function(){return h&&"symbol"==typeof Symbol.toStringTag},w=Object.prototype.toString,y=w;var j=function(r){return y.call(r)},E=Object.prototype.hasOwnProperty;var P=function(r,e){return null!=r&&E.call(r,e)},O="function"==typeof Symbol?Symbol.toStringTag:"",_=P,T=O,V=w;var x=j,S=function(r){var e,t,n;if(null==r)return V.call(r);t=r[T],e=_(r,T);try{r[T]=void 0}catch(e){return V.call(r)}return n=V.call(r),e?r[T]=t:delete r[T],n},k=b()?S:x,A=Number,I=A.prototype.toString;var F=k,R=A,$=function(r){try{return I.call(r),!0}catch(r){return!1}},M=b();var N=function(r){return"object"==typeof r&&(r instanceof R||(M?$(r):"[object Number]"===F(r)))},C=d,B=N;var G=m,L=function(r){return C(r)||B(r)},Z=N;G(L,"isPrimitive",d),G(L,"isObject",Z);var z=L,W=Number.POSITIVE_INFINITY,X=A.NEGATIVE_INFINITY,U=Math.floor;var Y=function(r){return U(r)===r},D=W,q=X,H=Y;var J=function(r){return r<D&&r>q&&H(r)},K=z.isPrimitive,Q=J;var rr=function(r){return K(r)&&Q(r)},er=z.isObject,tr=J;var nr=function(r){return er(r)&&tr(r.valueOf())},ir=rr,or=nr;var ar=m,ur=function(r){return ir(r)||or(r)},cr=nr;ar(ur,"isPrimitive",rr),ar(ur,"isObject",cr);var sr=ur,fr=sr.isPrimitive;var lr=function(r){return fr(r)&&r>=0},pr=sr.isObject;var vr=function(r){return pr(r)&&r.valueOf()>=0},gr=lr,mr=vr;var dr=m,hr=function(r){return gr(r)||mr(r)},br=vr;dr(hr,"isPrimitive",lr),dr(hr,"isObject",br);var wr=hr,yr=Y;var jr=function(r){return null!=r&&"function"!=typeof r&&"number"==typeof r.length&&yr(r.length)&&r.length>=0&&r.length<=4294967295};var Er=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!jr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}},Pr=wr,Or=m,_r=Er,Tr=_r(Pr);Or(Tr,"primitives",_r(Pr.isPrimitive)),Or(Tr,"objects",_r(Pr.isObject));var Vr=Tr;var xr=function(r,e){return"column-major"===e?function(r){var e,t,n;for(e=[],t=1,n=0;n<r.length;n++)e.push(t),t*=r[n];return e}(r):function(r){var e,t,n,i;for(e=r.length,t=[],i=0;i<e;i++)t.push(0);for(n=1,i=e-1;i>=0;i--)t[i]=n,n*=r[i];return t}(r)};var Sr=function(r,e,t){return"column-major"===e?function(r,e){var t,n;for(t=1,n=0;n<r.length;n++)e[n]=t,t*=r[n];return e}(r,t):function(r,e){var t,n;for(t=1,n=r.length-1;n>=0;n--)e[n]=t,t*=r[n];return e}(r,t)},kr=xr;m(kr,"assign",Sr);var Ar=kr;var Ir=function(){var r,e,t,n,i,o,a,u,c,s,f,l;for(r=arguments[1],e=arguments[2],t=(o=arguments[3+(i=(n=arguments[0]).length)]).length,u=e,l=0;l<i;l++){if(c=n[l],f=arguments[l+3],"clamp"===(a=o[l%t]))f<0?f=0:f>=c&&(f=c-1);else if("wrap"===a)f<0?(f+=c)<0&&0!==(f%=c)&&(f+=c):f>=c&&(f-=c)>=c&&(f%=c);else if(f<0||f>=c)throw new RangeError("invalid argument. Subscripts must not exceed array dimensions. Subscript: "+l+". Value: `"+f+"`.");(s=r[l])<0&&0===e?u-=f*s:u+=f*s}return u},Fr=Ir;var Rr=function(r){return"string"==typeof r},$r=String.prototype.valueOf;var Mr=k,Nr=function(r){try{return $r.call(r),!0}catch(r){return!1}},Cr=b();var Br=function(r){return"object"==typeof r&&(r instanceof String||(Cr?Nr(r):"[object String]"===Mr(r)))},Gr=Rr,Lr=Br;var Zr=m,zr=function(r){return Gr(r)||Lr(r)},Wr=Br;Zr(zr,"isPrimitive",Rr),Zr(zr,"isObject",Wr);var Xr=zr,Ur=Y;var Yr=function(r){return"object"==typeof r&&null!==r&&"number"==typeof r.length&&Ur(r.length)&&r.length>=0&&r.length<=9007199254740991};var Dr=function(r){return r!=r},qr=z.isPrimitive,Hr=Dr;var Jr=function(r){return qr(r)&&Hr(r)},Kr=z.isObject,Qr=Dr;var re=function(r){return Kr(r)&&Qr(r.valueOf())},ee=Jr,te=re;var ne=m,ie=function(r){return ee(r)||te(r)},oe=re;ne(ie,"isPrimitive",Jr),ne(ie,"isObject",oe);var ae=Yr,ue=sr.isPrimitive,ce=Xr.isPrimitive,se=ie.isPrimitive;var fe=function(r,e,t){var n,i,o;if(!ae(r)&&!ce(r))throw new TypeError("invalid argument. First argument must be array-like. Value: `"+r+"`.");if(arguments.length<2)throw new Error("insufficient input arguments. Must provide a search value.");if(arguments.length>2){if(!ue(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");(i=t)<0&&(i=0)}else i=0;if(ce(r)){if(!ce(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");return-1!==r.indexOf(e,i)}if(n=r.length,se(e)){for(o=i;o<n;o++)if(se(r[o]))return!0;return!1}for(o=i;o<n;o++)if(r[o]===e)return!0;return!1},le=fe,pe=Xr.isPrimitive;var ve=function(r){if(!pe(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toLowerCase()},ge=Xr.isPrimitive;var me=function(r){if(!ge(r))throw new TypeError("invalid argument. Must provide a primitive string. Value: `"+r+"`.");return r.toUpperCase()},de=ve,he=me,be=Xr.isPrimitive;var we=function(r){return be(r)&&r===he(r)&&r!==de(r)},ye=W,je=X;var Ee=function(r){return r==r&&r>je&&r<ye},Pe=wr.isPrimitive,Oe=Xr.isPrimitive;var _e=function(r,e){var t,n;if(!Oe(r))throw new TypeError("invalid argument. First argument must be a string. Value: `"+r+"`.");if(!Pe(e))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+e+"`.");if(0===r.length||0===e)return"";if(r.length*e>9007199254740991)throw new RangeError("invalid argument. Output string length exceeds maximum allowed string length.");for(t="",n=e;1==(1&n)&&(t+=r),0!==(n>>>=1);)r+=r;return t},Te=sr.isPrimitive,Ve=Xr.isPrimitive;var xe=_e,Se=function(r,e,t){var n,i;if(!Ve(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(!Ve(e))throw new TypeError("invalid argument. Second argument must be a string primitive. Value: `"+e+"`.");if(arguments.length>2){if(!Te(t))throw new TypeError("invalid argument. Third argument must be an integer. Value: `"+t+"`.");n=t<0?r.length+t:t}else n=0;if(0===e.length)return!0;if(n<0||n+e.length>r.length)return!1;for(i=0;i<e.length;i++)if(r.charCodeAt(n+i)!==e.charCodeAt(i))return!1;return!0};var ke=function(r,e,t){var n=!1,i=e-r.length;return i<0||(Se(r,"-")&&(n=!0,r=r.substr(1)),r=t?r+xe("0",i):xe("0",i)+r,n&&(r="-"+r)),r},Ae=we,Ie=me,Fe=ve,Re=Ee,$e=z.isPrimitive,Me=ke;var Ne=function(r){var e,t,n;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(t=r.arg,n=parseInt(t,10),!Re(n)){if(!$e(t))throw new Error("invalid integer. Value: "+t);n=0}return n<0&&("u"===r.specifier||10!==e)&&(n=4294967295+n+1),n<0?(t=(-n).toString(e),r.precision&&(t=Me(t,r.precision,r.padRight)),t="-"+t):(t=n.toString(e),n||r.precision?r.precision&&(t=Me(t,r.precision,r.padRight)):t="",r.sign&&(t=r.sign+t)),16===e&&(r.alternate&&(t="0x"+t),t=Ae(r.specifier)?Ie(t):Fe(t)),8===e&&r.alternate&&"0"!==t.charAt(0)&&(t="0"+t),t},Ce=Xr.isPrimitive,Be=/[-\/\\^$*+?.()|[\]{}]/g;var Ge=function(r){var e,t;if(!Ce(r))throw new TypeError("invalid argument. Must provide a regular expression string. Value: `"+r+"`.");if("/"===r[0])for(t=r.length-1;t>=0&&"/"!==r[t];t--);return void 0===t||t<=0?r.replace(Be,"\\$&"):(e=(e=r.substring(1,t)).replace(Be,"\\$&"),r=r[0]+e+r.substring(t))},Le=/./;var Ze=function(r){return"boolean"==typeof r},ze=Boolean.prototype.toString;var We=k,Xe=function(r){try{return ze.call(r),!0}catch(r){return!1}},Ue=b();var Ye=function(r){return"object"==typeof r&&(r instanceof Boolean||(Ue?Xe(r):"[object Boolean]"===We(r)))},De=Ze,qe=Ye;var He=m,Je=function(r){return De(r)||qe(r)},Ke=Ye;He(Je,"isPrimitive",Ze),He(Je,"isObject",Ke);var Qe="object"==typeof self?self:null,rt="object"==typeof window?window:null,et=Je.isPrimitive,tt=function(){return new Function("return this;")()},nt=Qe,it=rt,ot=r(Object.freeze({__proto__:null}));var at=function(r){if(arguments.length){if(!et(r))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+r+"`.");if(r)return tt()}if(nt)return nt;if(it)return it;if(ot)return ot;throw new Error("unexpected error. Unable to resolve global object.")},ut=at(),ct=ut.document&&ut.document.childNodes,st=Int8Array,ft=Le,lt=ct,pt=st;var vt=function(){return"function"==typeof ft||"object"==typeof pt||"function"==typeof lt};var gt=function(){return/^\s*function\s*([^(]*)/i},mt=gt;m(mt,"REGEXP",gt());var dt=mt,ht=k;var bt=Array.isArray?Array.isArray:function(r){return"[object Array]"===ht(r)},wt=bt;var yt=function(r){if("function"!=typeof r)throw new TypeError("invalid argument. Must provide a function. Value: `"+r+"`.");return function(e){var t,n;if(!wt(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}};var jt=function(r){return null!==r&&"object"==typeof r};m(jt,"isObjectLikeArray",yt(jt));var Et=jt;var Pt=k,Ot=dt.REGEXP,_t=function(r){return Et(r)&&(r._isBuffer||r.constructor&&"function"==typeof r.constructor.isBuffer&&r.constructor.isBuffer(r))};var Tt=function(r){var e,t,n;if(("Object"===(t=Pt(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=Ot.exec(n.toString()))return e[1]}return _t(r)?"Buffer":t},Vt=Tt;var xt=Tt;var St=function(r){var e;return null===r?"null":"object"===(e=typeof r)?Vt(r).toLowerCase():e},kt=function(r){return xt(r).toLowerCase()},At=vt()?kt:St;var It=function(r){return"function"===At(r)},Ft=RegExp.prototype.exec;var Rt=k,$t=function(r){try{return Ft.call(r),!0}catch(r){return!1}},Mt=b();var Nt=Ge,Ct=It,Bt=Xr.isPrimitive,Gt=function(r){return"object"==typeof r&&(r instanceof RegExp||(Mt?$t(r):"[object RegExp]"===Rt(r)))};var Lt=we,Zt=me,zt=ve,Wt=function(r,e,t){if(!Bt(r))throw new TypeError("invalid argument. First argument must be a string primitive. Value: `"+r+"`.");if(Bt(e))e=Nt(e),e=new RegExp(e,"g");else if(!Gt(e))throw new TypeError("invalid argument. Second argument must be a string primitive or regular expression. Value: `"+e+"`.");if(!Bt(t)&&!Ct(t))throw new TypeError("invalid argument. Third argument must be a string primitive or replacement function. Value: `"+t+"`.");return r.replace(e,t)},Xt=Ee,Ut=z.isPrimitive,Yt=function(r){return Math.abs(r)},Dt=/e\+(\d)$/,qt=/e-(\d)$/,Ht=/^(\d+)$/,Jt=/^(\d+)e/,Kt=/\.0$/,Qt=/\.0*e/,rn=/(\..*[^0])0*e/;var en=function(r){var e,t,n=parseFloat(r.arg);if(!Xt(n)){if(!Ut(r.arg))throw new Error("invalid floating-point number. Value: "+t);n=r.arg}switch(r.specifier){case"e":case"E":t=n.toExponential(r.precision);break;case"f":case"F":t=n.toFixed(r.precision);break;case"g":case"G":Yt(n)<1e-4?((e=r.precision)>0&&(e-=1),t=n.toExponential(e)):t=n.toPrecision(r.precision),r.alternate||(t=Wt(t,rn,"$1e"),t=Wt(t,Qt,"e"),t=Wt(t,Kt,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return t=Wt(t,Dt,"e+0$1"),t=Wt(t,qt,"e-0$1"),r.alternate&&(t=Wt(t,Ht,"$1."),t=Wt(t,Jt,"$1.e")),n>=0&&r.sign&&(t=r.sign+t),t=Lt(r.specifier)?Zt(t):zt(t)},tn=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;var nn=_e;var on=Xr.isPrimitive,an=le,un=Dr,cn=Ne,sn=en,fn=function(r){var e,t,n,i,o;for(e=0,n=[],o=tn.exec(r);o;)(t=r.slice(e,tn.lastIndex-o[0].length)).length&&n.push(t),(i=a(o,n.length))&&n.push(i),e=tn.lastIndex,o=tn.exec(r);return(t=r.slice(e)).length&&n.push(t),n;function a(r){return{mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],hasPeriod:"."===r[4],precision:r[5],specifier:r[6]}}},ln=function(r,e,t){var n=e-r.length;return n<0?r:r=t?r+nn(" ",n):nn(" ",n)+r},pn=ke,vn=String.fromCharCode;var gn=function(r){var e,t,n,i,o,a,u,c,s;if(!on(r))throw new TypeError("invalid argument. Must provide a string. Value: `"+r+"`.");for(e=fn(r),a="",u=1,c=0;c<e.length;c++)if(n=e[c],on(n))a+=n;else{for(n.mapping&&(u=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(i=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=!an(t,"-");break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+i)}if("*"===n.width){if(n.width=parseInt(arguments[u],10),u+=1,un(n.width))throw new TypeError("the argument for * width at position "+u+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if("*"===n.precision&&n.hasPeriod){if(n.precision=parseInt(arguments[u],10),u+=1,un(n.precision))throw new TypeError("the argument for * precision at position "+u+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,n.hasPeriod=!1)}switch(n.arg=arguments[u],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":n.hasPeriod&&(n.padZeros=!1),n.arg=cn(n);break;case"s":n.maxWidth=n.hasPeriod?n.precision:-1;break;case"c":if(!un(n.arg)){if((o=parseInt(n.arg,10))<0||o>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=un(o)?String(n.arg):vn(o)}break;case"e":case"E":case"f":case"F":case"g":case"G":n.hasPeriod||(n.precision=6),n.arg=sn(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=pn(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=ln(n.arg,n.width,n.padRight)),a+=n.arg||"",u+=1}return a},mn={mode:["throw"],order:"row-major"},dn=bt;var hn=function(r){return"object"==typeof r&&null!==r&&!dn(r)},bn=Object.getPrototypeOf;var wn=function(r){return r.__proto__},yn=k,jn=wn;var En=function(r){var e=jn(r);return e||null===e?e:"[object Function]"===yn(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null},Pn=bn,On=En,_n=It(Object.getPrototypeOf)?Pn:On;var Tn=hn,Vn=It,xn=function(r){return null==r?null:(r=Object(r),_n(r))},Sn=P,kn=k,An=Object.prototype;var In=function(r){var e;return!!Tn(r)&&(!(e=xn(r))||!Sn(r,"constructor")&&Sn(e,"constructor")&&Vn(e.constructor)&&"[object Function]"===kn(e.constructor)&&Sn(e,"isPrototypeOf")&&Vn(e.isPrototypeOf)&&(e===An||function(r){var e;for(e in r)if(!Sn(r,e))return!1;return!0}(r)))},Fn=In,Rn=["row-major","column-major"];var $n=function(){return Rn.slice()};m($n,"enum",(function(){return{"row-major":1,"column-major":2}}));var Mn=$n(),Nn=Mn.length;var Cn=function(r){var e;for(e=0;e<Nn;e++)if(r===Mn[e])return!0;return!1},Bn=["throw","clamp","wrap"];var Gn=function(){return Bn.slice()};m(Gn,"enum",(function(){return{throw:1,clamp:2,wrap:3}}));var Ln=Gn(),Zn=Ln.length;var zn=Fn,Wn=P,Xn=bt,Un=Cn,Yn=function(r){var e;for(e=0;e<Zn;e++)if(r===Ln[e])return!0;return!1},Dn=gn;var qn=function(r,e){var t;if(!zn(e))return new TypeError(Dn("invalid argument. Options argument must be an object. Value: `%s`.",e));if(Wn(e,"mode")){if(r.mode=e.mode,Xn(r.mode)){if(0===r.mode.length)return new TypeError(Dn("invalid option. `%s` option cannot be an empty array.","mode"))}else r.mode=[r.mode];for(t=0;t<r.mode.length;t++)if(!Yn(r.mode[t]))return new TypeError(Dn("invalid option. `%s` option must be a supported/recognized mode. Option: `%s`.","mode",r.mode[t]))}return Wn(e,"order")&&(r.order=e.order,!Un(r.order))?new TypeError(Dn("invalid option. `%s` option must be a supported/recognized order. Option: `%s`.","order",r.order)):null},Hn=Vr.primitives,Jn=sr.isPrimitive,Kn=Ar,Qn=Fr,ri=gn,ei=mn,ti=qn;var ni=function(){var r,e,t,n,i,o,a,u;if(!Hn(r=arguments[0]))throw new TypeError(ri("invalid argument. First argument must be an array-like object containing nonnegative integers. Value: `%s`.",r));if(o=arguments.length,e=r.length,(n={}).mode=ei.mode.slice(),n.order=ei.order,o>e+1){if(i=ti(n,arguments[u=o-1]))throw i}else u=o;if(u-(a=1)!==e)throw new RangeError(ri("invalid argument. Number of provided subscripts must match the number of dimensions. ndims: %u. Number of subscripts: %u.",e,u-a));for((t=new Array(e+4))[0]=r,t[1]=Kn(r,n.order),t[2]=0;a<u;a++){if(!Jn(arguments[a]))throw new TypeError(ri("invalid argument. Subscripts must be integer valued. Argument: %u. Value: `%s`.",a,arguments[a]));t[a+2]=arguments[a]}return t[a+2]=n.mode,Qn.apply(null,t)},ii=ni;export{ii as default};
//# sourceMappingURL=mod.js.map
