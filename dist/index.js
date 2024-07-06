"use strict";var p=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var m=p(function(G,F){
var c=require('@stdlib/number-float64-base-to-float32/dist'),f=5;function b(r,t,o,s,l,i,n,q){var v,e,a,d,u;if(v=t,r<=0)return c(v);if(e=l,a=q,s===1&&n===1){if(d=r%f,d>0)for(u=0;u<d;u++)v+=o[e]*i[a],e+=1,a+=1;if(r<f)return c(v);for(u=d;u<r;u+=f)v+=o[e]*i[a]+o[e+1]*i[a+1]+o[e+2]*i[a+2]+o[e+3]*i[a+3]+o[e+4]*i[a+4],e+=f,a+=f;return c(v)}for(u=0;u<r;u++)v+=o[e]*i[a],e+=s,a+=n;return c(v)}F.exports=b
});var _=p(function(H,T){
var g=require('@stdlib/number-float64-base-to-float32/dist'),R=require('@stdlib/strided-base-stride2offset/dist'),h=m();function k(r,t,o,s,l,i){var n,q;return r<=0?g(t):(n=R(r,s),q=R(r,i),h(r,t,o,s,n,l,i,q))}T.exports=k
});var M=p(function(I,E){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),y=_(),x=m();w(y,"ndarray",x);E.exports=y
});var z=require("path").join,A=require('@stdlib/utils-try-require/dist'),B=require('@stdlib/assert-is-error/dist'),C=M(),j,O=A(z(__dirname,"./native.js"));B(O)?j=C:j=O;module.exports=j;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
