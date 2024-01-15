import{a as M,b as p,c as O,d as I,e as T,f as j,g as A,h as N,i as z}from"./chunk-JI5V2HGE.js";import{a as L,b as u,c as B}from"./chunk-6PMM5T7C.js";import{a as F}from"./chunk-VVMP4J2Q.js";import{D as s,H as c,J as h,O as i,P as n,Q as b,T as x,V as l,X as P,Y as y,ba as _,ca as k,d as U,da as E,ha as w,k as g,o as C,r as m,s as S}from"./chunk-G77MNJPO.js";var v=(()=>{let e=class e{constructor(){this.http=m(E),this.utilsService=m(u),this.API=L.API}createUser(r){return this.http.post(`${this.API}/user`,r).pipe(g(this.utilsService.handleError))}loginUser(r){return this.http.post(`${this.API}/user/login`,r).pipe(g(this.utilsService.handleError))}};e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=C({token:e,factory:e.\u0275fac,providedIn:"root"});let o=e;return o})();var f=U(B());function G(o,e){o&1&&(i(0,"div",14)(1,"p",15),l(2,"Email is invalid"),n()())}function V(o,e){o&1&&(i(0,"div",14)(1,"p",15),l(2,"Password is invalid"),n()())}var le=(()=>{let e=class e{constructor(){this.fb=m(N),this.routerService=m(w),this.userService=m(v),this.authService=m(F),this.loginForm=this.fb.group({email:["admin@gmail.com",[p.required,p.email]],password:["admin123",[p.required,p.minLength(8)]]})}login(){if(this.loginForm.invalid)this.loginForm.markAllAsTouched;else{let r=this.loginForm.value;this.userService.loginUser(r).subscribe(t=>{t.errors?t.errors?.forEach(d=>{f.default.fire({title:"Error",text:d.msg,icon:"error",confirmButtonText:"Ok"})}):(f.default.fire({title:"Welcome",text:"You are logged in!",icon:"success",confirmButtonText:"Cool"}),this.authService.login(t.data?.token),this.routerService.navigate(["/library"]))})}}register(){let r=this.loginForm.value;this.userService.createUser(r).subscribe(t=>{t.errors?t.errors?.forEach(d=>{f.default.fire({title:"Error",text:d.msg,icon:"error",confirmButtonText:"Ok"})}):f.default.fire({title:"User created",text:"Please log in",icon:"success",confirmButtonText:"Cool"})})}};e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=S({type:e,selectors:[["app-login"]],standalone:!0,features:[P([v,u]),y],decls:23,vars:5,consts:[[1,"form-container"],[1,"form-section"],[1,"form-container-image"],[1,"form-text"],[1,"form-title-image"],[1,"form-subtitle"],[1,"form-login",3,"formGroup"],[1,"form-title"],["for","email",1,"form-label"],["formControlName","email","id","email","type","email","placeholder","Email",1,"form-input"],["class","form-error",4,"ngIf"],["for","password",1,"form-label"],["formControlName","password","id","password","type","password","placeholder","Password",1,"form-input"],["type","submit",1,"submit-button",3,"disabled","click"],[1,"form-error"],[1,"form-error-text"]],template:function(t,a){t&1&&(i(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"h1",4),l(5,"Search for your favorite books"),n(),i(6,"p",5),l(7,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."),n()()(),i(8,"form",6)(9,"h1",7),l(10,"Login"),n(),i(11,"label",8),l(12,"Email"),n(),b(13,"input",9),h(14,G,3,0,"div",10),i(15,"label",11),l(16,"Password"),n(),b(17,"input",12),h(18,V,3,0,"div",10),i(19,"button",13),x("click",function(){return a.login()}),l(20,"Sign in"),n(),i(21,"button",13),x("click",function(){return a.register()}),l(22,"Sign up"),n()()()()),t&2&&(s(8),c("formGroup",a.loginForm),s(6),c("ngIf",a.loginForm.get("email").invalid),s(4),c("ngIf",a.loginForm.get("password").invalid),s(1),c("disabled",a.loginForm.invalid),s(2),c("disabled",a.loginForm.invalid))},dependencies:[z,T,M,O,I,j,A,k,_],styles:['.form-container[_ngcontent-%COMP%]{display:flex;justify-content:center;height:100vh;background-color:#2a1067}.form-section[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;width:100%;margin:100px;max-width:1000px;box-shadow:inset 0 -3em 3em #0c0c0cbd,.3em .3em 1em #0c0c0cbd;border-radius:5px}.form-container-image[_ngcontent-%COMP%]{background:url("./media/books-JAV4P3EP.jpg");background-color:#7945e5!important;background-blend-mode:darken;width:50%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;border-radius:5px 0 0 5px;padding:20px}.form-login[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;background-color:#040523;width:50%;height:100%;border-radius:0 5px 5px 0}.form-text[_ngcontent-%COMP%]{color:#fff;font-size:20px;margin:20px 70px}.form-title-image[_ngcontent-%COMP%]{color:#fff;font-size:45px;margin-bottom:15px}.icon-books[_ngcontent-%COMP%]{font-size:370px;color:#fff;max-width:400px}.form-login[_ngcontent-%COMP%]{padding:0 50px;color:#fff}.form-input[_ngcontent-%COMP%]{margin:10px 0;padding:10px;border:none;border-radius:5px;background-color:#040523;border:1px solid #7945e5;color:#fff;font-size:15px}.form-title[_ngcontent-%COMP%]{color:#fff;font-size:35px;margin-bottom:15px}.submit-button[_ngcontent-%COMP%]{margin-top:20px;background-color:#7945e5;color:#fff;border:none;border-radius:20px;padding:10px;font-size:15px;cursor:pointer}.submit-button[_ngcontent-%COMP%]:hover{background-color:#7945e5cc}.form-error-text[_ngcontent-%COMP%]{color:#7945e5;font-size:15px;margin-bottom:10px}.submit-button[disabled][_ngcontent-%COMP%]{background-color:#7945e580;cursor:not-allowed}']});let o=e;return o})();export{le as LoginComponent};
