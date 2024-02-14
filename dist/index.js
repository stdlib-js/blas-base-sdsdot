"use strict";var p=function(a,n){return function(){return n||a((n={exports:{}}).exports,n),n.exports}};var R=p(function(H,M){
var d=require('@stdlib/number-float64-base-to-float32/dist'),j=5;function h(a,n,i,s,v,o){var u,q,t,e,r;if(u=n,a<=0)return d(u);if(s===1&&o===1){if(e=a%j,e>0)for(r=0;r<e;r++)u+=i[r]*v[r];if(a<j)return d(u);for(r=e;r<a;r+=j)u+=i[r]*v[r]+i[r+1]*v[r+1]+i[r+2]*v[r+2]+i[r+3]*v[r+3]+i[r+4]*v[r+4];return d(u)}for(s<0?q=(1-a)*s:q=0,o<0?t=(1-a)*o:t=0,r=0;r<a;r++)u+=i[q]*v[t],q+=s,t+=o;return d(u)}M.exports=h
});var _=p(function(I,T){
var m=require('@stdlib/number-float64-base-to-float32/dist'),l=5;function k(a,n,i,s,v,o,u,q){var t,e,r,c,f;if(t=n,a<=0)return m(t);if(e=v,r=q,s===1&&u===1){if(c=a%l,c>0)for(f=0;f<c;f++)t+=i[e]*o[r],e+=1,r+=1;if(a<l)return m(t);for(f=c;f<a;f+=l)t+=i[e]*o[r]+i[e+1]*o[r+1]+i[e+2]*o[r+2]+i[e+3]*o[r+3]+i[e+4]*o[r+4],e+=l,r+=l;return m(t)}for(f=0;f<a;f++)t+=i[e]*o[r],e+=s,r+=u;return m(t)}T.exports=k
});var b=p(function(J,O){
var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=R(),z=_();w(E,"ndarray",z);O.exports=E
});var A=require("path").join,B=require('@stdlib/utils-try-require/dist'),C=require('@stdlib/assert-is-error/dist'),D=b(),F,g=B(A(__dirname,"./native.js"));C(g)?F=D:F=g;module.exports=F;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
