(this["webpackJsonpmy-docs-frontend"]=this["webpackJsonpmy-docs-frontend"]||[]).push([[0],{64:function(e,t,n){},66:function(e,t,n){"use strict";n.r(t);var c=n(8),r=n.n(c),s=n(42),a=n.n(s),j=n(21),i=n(12),b=n(11),u=n(67),o=n(7),l=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("button",{type:"button",children:"Click me!"})})},d=function(){var e=Object(u.a)("content"),t=Object(b.a)(e,1)[0];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)("header",{className:"App-header",children:[Object(o.jsxs)("p",{children:["Edit ",Object(o.jsx)("code",{children:"src/App.tsx"})," and save to reload."]}),Object(o.jsx)("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer",children:t("learn")}),Object(o.jsx)(l,{}),Object(o.jsx)(j.b,{to:"/signin",children:"Sign in"}),Object(o.jsx)("br",{}),Object(o.jsx)(j.b,{to:"/signup",children:"Sign up"})]})})},O=n(0),p=n.n(O),h=n(2),x=n(17),f=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(b.a)(s,2),u=a[0],l=a[1],d=Object(c.useState)(!1),O=Object(b.a)(d,2),f=O[0],m=O[1],v=Object(i.h)(),g=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n&&u){e.next=3;break}return e.abrupt("return");case 3:return m(!0),e.prev=4,c=Object(x.b)(),e.next=8,Object(x.e)(c,n,u);case 8:return r=e.sent,s=r.user,v("/documents"),console.log(s),e.abrupt("return");case 15:e.prev=15,e.t0=e.catch(4),console.error(e.t0);case 18:m(!1);case 19:case"end":return e.stop()}}),e,null,[[4,15]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:g,children:[Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"email",children:["Email",Object(o.jsx)("input",{id:"email",value:n,onChange:function(e){return r(e.target.value)}})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"password",children:["Password",Object(o.jsx)("input",{type:"password",id:"password",value:u,onChange:function(e){return l(e.target.value)}})]})}),Object(o.jsx)("button",{type:"submit",disabled:f,children:"Sign in"}),Object(o.jsx)("br",{}),Object(o.jsx)(j.b,{to:"/forgot-password",children:"Forgot password?"}),Object(o.jsx)("br",{}),Object(o.jsx)(j.b,{to:"/signup",children:"Sign up"})]})})},m=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),a=Object(b.a)(s,2),u=a[0],l=a[1],d=Object(c.useState)(""),O=Object(b.a)(d,2),f=O[0],m=O[1],v=Object(c.useState)(""),g=Object(b.a)(v,2),S=g[0],w=g[1],y=Object(c.useState)(!1),k=Object(b.a)(y,2),C=k[0],F=k[1],I=Object(i.h)(),E=function(){var e=Object(h.a)(p.a.mark((function e(t){var c,r,s;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.preventDefault(),n&&u){e.next=3;break}return e.abrupt("return");case 3:return F(!0),e.prev=4,c=Object(x.b)(),e.next=8,Object(x.a)(c,n,u);case 8:return r=e.sent,s=r.user,e.next=12,Object(x.g)(s,{displayName:"".concat(f," ").concat(S)});case 12:return I("/documents"),console.log(s),e.abrupt("return");case 17:e.prev=17,e.t0=e.catch(4),console.error(e.t0);case 20:F(!1);case 21:case"end":return e.stop()}}),e,null,[[4,17]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:E,children:[Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"email",children:["Email",Object(o.jsx)("input",{id:"email",value:n,onChange:function(e){return r(e.target.value)}})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"firstname",children:["Firstname",Object(o.jsx)("input",{id:"firstname",value:f,onChange:function(e){return m(e.target.value)}})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"lastname",children:["Lastname",Object(o.jsx)("input",{id:"lastname",value:S,onChange:function(e){return w(e.target.value)}})]})}),Object(o.jsx)("div",{children:Object(o.jsxs)("label",{htmlFor:"password",children:["Password",Object(o.jsx)("input",{type:"password",id:"password",value:u,onChange:function(e){return l(e.target.value)}})]})}),Object(o.jsx)("button",{type:"submit",disabled:C,children:"Sign up"}),Object(o.jsx)("br",{}),Object(o.jsx)(j.b,{to:"/signin",children:"Sign in"})]})})},v=function(){var e=Object(c.useState)(!1),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(i.h)(),a=function(){var e=Object(h.a)(p.a.mark((function e(){var t;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r(!0),t=Object(x.b)(),e.prev=2,e.next=5,Object(x.f)(t);case 5:s("/"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(2),console.error(e.t0);case 11:r(!1);case 12:case"end":return e.stop()}}),e,null,[[2,8]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsx)("button",{type:"button",onClick:a,disabled:n,children:"Sign out"})},g=function(){return Object(o.jsxs)("div",{children:["Documents ",Object(o.jsx)(v,{})]})},S=function(){var e=Object(c.useState)(""),t=Object(b.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(!1),a=Object(b.a)(s,2),i=a[0],u=a[1],l=function(){var e=Object(h.a)(p.a.mark((function e(t){var c;return p.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(!0),t.preventDefault(),e.prev=2,c=Object(x.b)(),e.next=6,Object(x.d)(c,n);case 6:return console.log("Email was sent!"),e.abrupt("return");case 10:e.prev=10,e.t0=e.catch(2),console.error(e.t0);case 13:u(!1);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:"Forgot password"}),Object(o.jsx)("div",{children:Object(o.jsxs)("form",{onSubmit:l,children:[Object(o.jsxs)("label",{htmlFor:"email",children:["Email",Object(o.jsx)("input",{type:"email",id:"email",value:n,onChange:function(e){return r(e.target.value)}})]}),Object(o.jsx)("br",{}),Object(o.jsx)(j.b,{to:"/signin",children:"Sign in"}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{type:"submit",disabled:i,children:"Send reset link"})]})})]})},w=function(){var e=function(){var e=Object(c.useRef)(!0),t=Object(c.useState)(!1),n=Object(b.a)(t,2),r=n[0],s=n[1],a=Object(c.useState)(!0),j=Object(b.a)(a,2),i=j[0],u=j[1];return Object(c.useEffect)((function(){if(e){var t=Object(x.b)();Object(x.c)(t,(function(e){e&&s(!0),u(!1)}))}return function(){e.current=!1}})),{loggedIn:r,checkingStatus:i}}(),t=e.loggedIn;return e.checkingStatus?Object(o.jsx)("div",{children:"Loading..."}):t?Object(o.jsx)(i.b,{}):Object(o.jsx)(i.a,{to:"/signin"})},y=function(){return Object(o.jsx)(j.a,{basename:"mydocs",children:Object(o.jsxs)(i.e,{children:[Object(o.jsx)(i.c,{index:!0,element:Object(o.jsx)(d,{})}),Object(o.jsx)(i.c,{path:"/signin",element:Object(o.jsx)(f,{})}),Object(o.jsx)(i.c,{path:"/signup",element:Object(o.jsx)(m,{})}),Object(o.jsx)(i.c,{path:"/forgot-password",element:Object(o.jsx)(S,{})}),Object(o.jsx)(i.c,{path:"/documents",element:Object(o.jsx)(w,{}),children:Object(o.jsx)(i.c,{path:"/documents",element:Object(o.jsx)(g,{})})})]})})},k=(n(64),n(40)),C=n(30),F=n(50),I=n(46);k.a.use(I.a).use(F.a).use(C.e).init({backend:{loadPath:"".concat("/mydocs","/locales/{{lng}}/{{ns}}.json"),allowMultiLoading:!0},fallbackLng:"en-us",lowerCaseLng:!0,load:"currentOnly"});k.a;var E=n(48),A=n(49),D={apiKey:"AIzaSyCJBCllXwg76zvQUnGncnAzoIKQTvnCwJs",authDomain:"mydocs-64c50.firebaseapp.com",projectId:"mydocs-64c50",storageBucket:"mydocs-64c50.appspot.com",messagingSenderId:"562007597192",appId:"1:562007597192:web:3b8d0d7727591669973f3d"};Object(E.a)(D);Object(A.a)();a.a.render(Object(o.jsx)(c.Suspense,{fallback:"loading",children:Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(y,{})})}),document.getElementById("root"))}},[[66,1,2]]]);
//# sourceMappingURL=main.184cf1c2.chunk.js.map