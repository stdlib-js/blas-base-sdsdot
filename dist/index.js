"use strict";var m=function(r,t){return function(){try{return t||r((t={exports:{}}).exports,t),t.exports}catch(e){throw (t=0, e)}};};var j=m(function(H,_){
var c=require('@stdlib/number-float64-base-to-float32/dist'),f=5;function h(r,t,e,n,p,u,o,q){var s,i,a,d,v;if(s=t,r<=0)return c(s);if(i=p,a=q,n===1&&o===1){if(d=r%f,d>0)for(v=0;v<d;v++)s+=e[i]*u[a],i+=1,a+=1;if(r<f)return c(s);for(v=d;v<r;v+=f)s+=e[i]*u[a]+e[i+1]*u[a+1]+e[i+2]*u[a+2]+e[i+3]*u[a+3]+e[i+4]*u[a+4],i+=f,a+=f;return c(s)}for(v=0;v<r;v++)s+=e[i]*u[a],i+=n,a+=o;return c(s)}_.exports=h
});var E=m(function(I,y){
var k=require('@stdlib/number-float64-base-to-float32/dist'),l=require('@stdlib/strided-base-stride2offset/dist'),w=j();function x(r,t,e,n,p,u){var o,q;return r<=0?k(t):(o=l(r,n),q=l(r,u),w(r,t,e,n,o,p,u,q))}y.exports=x
});var b=m(function(J,O){
var z=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),M=E(),A=j();z(M,"ndarray",A);O.exports=M
});var B=require("path").join,C=require('@stdlib/utils-try-require/dist'),D=require('@stdlib/assert-is-error/dist'),F=b(),R,g=C(B(__dirname,"./native.js"));D(g)?R=F:R=g;module.exports=R;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
