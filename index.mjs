// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/number-float64-base-to-float32@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/strided-base-stride2offset@esm/index.mjs";var n=5;function s(r,t,s,i,d,o,f,a){var m,l,u,j,p;if(m=t,r<=0)return e(m);if(l=d,u=a,1===i&&1===f){if((j=r%n)>0)for(p=0;p<j;p++)m+=s[l]*o[u],l+=1,u+=1;if(r<n)return e(m);for(p=j;p<r;p+=n)m+=s[l]*o[u]+s[l+1]*o[u+1]+s[l+2]*o[u+2]+s[l+3]*o[u+3]+s[l+4]*o[u+4],l+=n,u+=n;return e(m)}for(p=0;p<r;p++)m+=s[l]*o[u],l+=i,u+=f;return e(m)}function i(r,n,i,d,o,f){return r<=0?e(n):s(r,n,i,d,t(r,d),o,f,t(r,f))}r(i,"ndarray",s);export{i as default,s as ndarray};
//# sourceMappingURL=index.mjs.map
