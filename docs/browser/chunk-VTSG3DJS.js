import{a as m}from"./chunk-VVMP4J2Q.js";import{ha as c,i as a,l as p,r as n}from"./chunk-G77MNJPO.js";var o=(t,r)=>{let i=n(c);return n(m).checkAuthentication().pipe(p(e=>{r.url==="/login"&&e&&i.navigate(["/library"]),r.url!=="/login"&&!e&&i.navigate(["/login"])}),a(e=>!0))};var A=[{path:"",redirectTo:"/login",pathMatch:"full"},{path:"login",canActivate:[o],loadComponent:()=>import("./chunk-BFKAGLTH.js").then(t=>t.LoginComponent)},{path:"library",canActivate:[o],loadComponent:()=>import("./chunk-IU2I76H2.js").then(t=>t.LibraryComponent)},{path:"book/:id",canActivate:[o],loadComponent:()=>import("./chunk-JCEIQSJB.js").then(t=>t.BookComponent)},{path:"create",canActivate:[o],loadComponent:()=>import("./chunk-EPFALLWT.js").then(t=>t.CreateComponent)},{path:"**",redirectTo:"/login"}];export{A as views};
