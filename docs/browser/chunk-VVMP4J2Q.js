import{f as n,o as r}from"./chunk-G77MNJPO.js";var c=(()=>{let e=class e{constructor(){this.loggedInSubject=new n(!1)}checkAuthentication(){return this.loggedInSubject.asObservable()}login(o){sessionStorage.clear(),sessionStorage.setItem("token",o),this.loggedInSubject.next(!0)}logout(){sessionStorage.removeItem("token"),this.loggedInSubject.next(!1)}};e.\u0275fac=function(s){return new(s||e)},e.\u0275prov=r({token:e,factory:e.\u0275fac,providedIn:"root"});let t=e;return t})();export{c as a};
