(this.webpackJsonpprintshop=this.webpackJsonpprintshop||[]).push([[0],{12:function(e,s,c){},48:function(e,s,c){},96:function(e,s,c){"use strict";c.r(s);var a=c(2),n=c.n(a),t=c(36),i=c.n(t),r=c(10),l=(c(12),c(48),c(43)),j=c(37),o=c.n(j),d=c(4),m=c.n(d),b=(c(52),c(14)),h=c(15),O=c(5),x=c(1);var u=function(){return Object(x.jsxs)("div",{className:"home-screen",children:[Object(x.jsxs)("div",{className:"home-center-info",children:[Object(x.jsx)("div",{children:Object(x.jsx)(o.a,{top:!0,children:Object(x.jsx)("h1",{children:"HI, I'm Sachin"})})}),Object(x.jsx)("div",{children:Object(x.jsx)("p",{children:"Software Developer / Free Lancer"})}),Object(x.jsx)("div",{children:Object(x.jsx)("span",{children:"High Level Experience in Web Design & Development"})}),Object(x.jsxs)("div",{className:"top-social-icons",children:[Object(x.jsx)("a",{href:"https://www.youtube.com/sachinnimshan",children:Object(x.jsx)(O.e,{className:"social-media-icon"})}),Object(x.jsx)("a",{href:"https://www.instagram.com/sachin_nimshan.06/",children:Object(x.jsx)(b.a,{className:"social-media-icon"})}),Object(x.jsx)("a",{href:"https://www.facebook.com/sachin.nimshan/",children:Object(x.jsx)(O.b,{className:"social-media-icon"})}),Object(x.jsx)("a",{href:"https://twitter.com/SachinNimshan",children:Object(x.jsx)(h.a,{className:"social-media-icon"})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("button",{className:"home-btn",children:"Download My CV"})})]}),Object(x.jsx)("div",{children:Object(x.jsx)("img",{src:"/Images/banner.png"})})]})},p=c(40),v=c(20),g=c.n(v),N=c(38),f=c(16),w=c(21),y=c(39),S=c.n(y),k=c(7),I=c.n(k),C=function(e){var s=Object(a.useState)({username:"",email:"",message:""}),c=Object(r.a)(s,2),n=c[0],t=c[1],i=Object(a.useState)({}),l=Object(r.a)(i,2),j=l[0],o=l[1];return{handleChange:function(e){var s=e.target,c=s.name,a=s.value;t(Object(w.a)(Object(w.a)({},n),{},Object(f.a)({},c,a)))},values:n,handleSubmit:function(){var s=Object(N.a)(g.a.mark((function s(c){return g.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(c.preventDefault(),o(e(n)),j.username&&j.email&&j.message&&I()("Oops","Someting Went Wrong","error"),""===n.username&&I()("Oops","Fields Are Required","warning"),""===n.email&&I()("Oops","Fields Are Required","warning"),""!==n.message){s.next=9;break}I()("Oops","Fields Are Required","warning"),s.next=19;break;case 9:return s.prev=9,s.next=12,S.a.post("/email/sendemail",n);case 12:I()("Good job!","Thank You For Your Support","success"),s.next=18;break;case 15:s.prev=15,s.t0=s.catch(9),I()("Ooops!","Something Went Wrong","error");case 18:t({username:"",email:"",message:""});case 19:case"end":return s.stop()}}),s,null,[[9,15]])})));return function(e){return s.apply(this,arguments)}}(),errors:j}};function E(e){var s={};return e.username.trim()||(s.username="Name is Required"),e.email?/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(s.email="Email Address is Invalid"):s.email="Email is Required",e.message||(s.message="Message is Required"),s}var A=c(13),F=c.n(A);var M=function(){var e=C(E),s=e.handleChange,c=e.values,a=e.handleSubmit,n=e.errors;return Object(x.jsxs)("div",{className:"contact-section",children:[Object(x.jsx)("div",{className:"section-title",children:Object(x.jsxs)(m.a,{top:!0,cascade:!0,children:[Object(x.jsx)("h1",{children:"Contact"}),Object(x.jsx)("span",{children:"Leave Me A Message"})]})}),Object(x.jsxs)("div",{className:"contact-container",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)("img",{className:"contact-image",src:"/Images/contact.jpg"}),Object(x.jsxs)("div",{className:"social-media-container",children:[Object(x.jsx)("div",{children:Object(x.jsx)("h5",{children:"Follow Me On Social Media"})}),Object(x.jsxs)("div",{children:[Object(x.jsx)("a",{href:"https://www.youtube.com/sachinnimshan",children:Object(x.jsx)(O.e,{className:"social-media-icon"})}),Object(x.jsx)("a",{href:"https://www.instagram.com/sachin_nimshan.06/",children:Object(x.jsx)(b.a,{className:"social-media-icon"})}),Object(x.jsx)("a",{href:"https://www.facebook.com/sachin.nimshan/",children:Object(x.jsx)(O.b,{className:"social-media-icon"})}),Object(x.jsx)("a",{href:"https://twitter.com/SachinNimshan",children:Object(x.jsx)(h.a,{className:"social-media-icon"})})]})]})]}),Object(x.jsx)("div",{className:"contact-form",children:Object(x.jsxs)("form",{onSubmit:a,children:[Object(x.jsxs)("div",{className:"form-group p-3",children:[Object(x.jsx)("label",{for:"exampleInputEmail1",className:"label-fonts",children:"Name"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"username","aria-describedby":"emailHelp",placeholder:"Enter Your Name",name:"username",value:c.username,onChange:s}),n.username&&Object(x.jsx)("p",{className:"form-errors",children:n.username})]}),Object(x.jsxs)("div",{className:"form-group p-3",children:[Object(x.jsx)("label",{for:"exampleInputPassword1",className:"label-fonts",children:"Email Address"}),Object(x.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"Enter Your Email",name:"email",value:c.email,onChange:s}),n.email&&Object(x.jsx)("p",{className:"form-errors",children:n.email})]}),Object(x.jsxs)("div",{className:"form-group p-3",children:[Object(x.jsx)("label",{for:"exampleInputEmail1",className:"label-fonts",children:"Message"}),Object(x.jsx)("textarea",{type:"text",className:"form-control",id:"message","aria-describedby":"emailHelp",placeholder:"Enter Your Message",name:"message",value:c.message,onChange:s}),n.message&&Object(x.jsx)("p",{className:"form-errors",children:n.message})]}),Object(x.jsx)("div",{className:"form-group p-3",children:Object(x.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})})]})}),Object(x.jsx)("div",{className:"contact-card",style:{width:"18rem"},children:Object(x.jsxs)("ul",{className:"list-group",children:[Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(O.c,{className:"contact-icon-email"}),Object(x.jsx)("h5",{children:"Email :"})]}),Object(x.jsx)("span",{children:"sachinnimshan@gmail.com"})]}),Object(x.jsxs)("li",{className:"list-group-item",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(p.a,{className:"contact-icon-phone"}),Object(x.jsx)("h5",{children:"Phone :"})]}),Object(x.jsx)("span",{children:"(+94)779012655"})]})]})})]})]})};var Y=function(){return Object(x.jsx)("div",{className:"footer-container",children:Object(x.jsx)("div",{children:"Copyright \xa92021 - Sachin Nimshan"})})};c(73),c(74),c(17);var q=c(41),D=c(6),R=c(42);var W=function(){return Object(x.jsx)("div",{className:"about-container",style:{backgroundImage:"url(/Images/service.jpg)",backgroundSize:"cover"},children:Object(x.jsxs)("div",{className:"about-over",children:[Object(x.jsx)("div",{className:"section-title",children:Object(x.jsxs)(m.a,{top:!0,cascade:!0,children:[Object(x.jsx)("h1",{children:"About Me"}),Object(x.jsx)("span",{children:"What I Do"})]})}),Object(x.jsxs)("div",{className:"skill-container container",children:[Object(x.jsx)(m.a,{bottom:!0,children:Object(x.jsx)("div",{className:"container about-description",children:Object(x.jsx)("p",{children:"I have more than 5+ years' experience building softwares in different programming languages since 2016. Below is a quick overview of my main technical skill sets and technologies I use."})})}),Object(x.jsx)(F.a,{right:!0,cascade:!0,children:Object(x.jsxs)("div",{className:"container pt-5 pb-5 d-flex justify-content-center gap-5 py-2 px-2 flex-wrap",children:[Object(x.jsxs)("div",{children:[Object(x.jsx)(D.g,{className:"pro-icons"}),"React"]}),Object(x.jsx)("div",{children:Object(x.jsx)(D.h,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(D.e,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(q.a,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(D.f,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(O.a,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(D.c,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(D.d,{className:"pro-icons"})}),Object(x.jsx)("div",{children:Object(x.jsx)(R.a,{className:"pro-icons"})})]})})]})]})})},H=c(22),L=c.n(H);var T=function(){var e=Object(a.useState)(!1),s=Object(r.a)(e,2),c=s[0],n=s[1],t=Object(a.useState)(!1),i=Object(r.a)(t,2),j=i[0],o=i[1];return window.addEventListener("scroll",(function(){!c&&window.pageYOffset>400?n(!0):c&&window.pageYOffset<=400&&n(!1)})),Object(x.jsxs)("div",{children:[Object(x.jsxs)("div",{className:"header-container",children:[Object(x.jsx)("div",{children:Object(x.jsx)("a",{href:"#",children:Object(x.jsx)("img",{className:"site-logo",src:"/Images/signature.png"})})}),Object(x.jsx)("div",{children:Object(x.jsx)(D.b,{onClick:function(){return o(!j)},className:"menu-icon"})}),Object(x.jsx)(L.a,{right:!0,children:Object(x.jsx)("div",{className:j?"nav-menu active":"nav-menu",children:Object(x.jsx)(L.a,{right:!0,children:Object(x.jsx)("div",{className:"navbar-container",children:Object(x.jsxs)("ul",{className:"nav-item-container",children:[Object(x.jsx)("li",{className:"container menu-header",children:Object(x.jsxs)("div",{className:"close-menu-container",children:[Object(x.jsx)("div",{className:"menu-title",children:"Hello' You are Welcome"}),Object(x.jsx)("div",{children:Object(x.jsx)(D.a,{onClick:function(){return o(!1)},className:"close-menu"})})]})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"#",children:"Home"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"#about",children:"About"})}),Object(x.jsx)("li",{className:"nav-item",children:Object(x.jsx)("a",{href:"#contact",children:"Contact"})})]})})})})})]}),Object(x.jsx)(l.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:c?"flex":"none"}}),Object(x.jsx)("section",{id:"home",children:Object(x.jsx)(u,{})}),Object(x.jsx)("section",{id:"about",children:Object(x.jsx)(W,{})}),Object(x.jsx)("section",{id:"contact",children:Object(x.jsx)(M,{})}),Object(x.jsx)("section",{children:Object(x.jsx)(Y,{})})]})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,101)).then((function(s){var c=s.getCLS,a=s.getFID,n=s.getFCP,t=s.getLCP,i=s.getTTFB;c(e),a(e),n(e),t(e),i(e)}))};i.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(T,{})}),document.getElementById("root")),P()}},[[96,1,2]]]);
//# sourceMappingURL=main.3f6f52ca.chunk.js.map