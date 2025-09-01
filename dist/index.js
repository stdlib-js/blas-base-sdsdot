"use strict";var m=function(r,t){return function(){return t||r((t={exports:{}}).exports,t),t.exports}};var j=m(function(H,_){
var c=require('@stdlib/number-float64-base-to-float32/dist'),f=5;function h(r,t,u,n,p,a,o,q){var s,e,i,d,v;if(s=t,r<=0)return c(s);if(e=p,i=q,n===1&&o===1){if(d=r%f,d>0)for(v=0;v<d;v++)s+=u[e]*a[i],e+=1,i+=1;if(r<f)return c(s);for(v=d;v<r;v+=f)s+=u[e]*a[i]+u[e+1]*a[i+1]+u[e+2]*a[i+2]+u[e+3]*a[i+3]+u[e+4]*a[i+4],e+=f,i+=f;return c(s)}for(v=0;v<r;v++)s+=u[e]*a[i],e+=n,i+=o;return c(s)}_.exports=h
});var E=m(function(I,y){
var k=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/strided-base-stride2offset/dist'),w=j();function x(r,t,u,n,p,a){var o,q;return r<=0?k(t):(o=l(r,n),q=l(r,a),w(r,t,u,n,o,p,a,q))}y.exports=x
});var b=m(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),A=j();z(M,"ndarray",A);O.exports=M
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),R,g=C(B(__dirname,"./native.js"));D(g)?R=F:R=g;module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
