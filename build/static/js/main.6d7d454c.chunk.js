(this.webpackJsonpprintshop=this.webpackJsonpprintshop||[]).push([[0],{105:function(e,c,s){"use strict";s.r(c);var a=s(2),i=s.n(a),t=s(39),n=s.n(t),r=s(15),j=(s(16),s(52),s(46)),l=s(11),d=s(13),o=s(18),m=s(5),b=s(1);var h=function(){return Object(b.jsxs)("div",{className:"home-screen",children:[Object(b.jsx)(l.Slide,{left:!0,children:Object(b.jsxs)("div",{className:"home-center-info",children:[Object(b.jsx)("div",{children:Object(b.jsx)(l.Flip,{top:!0,children:Object(b.jsx)("h1",{children:"HI, I'm Sachin"})})}),Object(b.jsx)("div",{children:Object(b.jsx)("p",{children:"Software Developer / Free Lancer"})}),Object(b.jsx)("div",{children:Object(b.jsx)("span",{children:"High Level Experience in Web Design & Development"})}),Object(b.jsxs)("div",{className:"top-social-icons",children:[Object(b.jsx)("a",{href:"https://www.youtube.com/sachinnimshan",children:Object(b.jsx)(m.e,{className:"social-media-icon"})}),Object(b.jsx)("a",{href:"https://github.com/Sachinnimshan",children:Object(b.jsx)(m.a,{className:"social-media-icon"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/sachin_nimshan.06/",children:Object(b.jsx)(d.a,{className:"social-media-icon"})}),Object(b.jsx)("a",{href:"https://www.facebook.com/sachin.nimshan/",children:Object(b.jsx)(m.c,{className:"social-media-icon"})}),Object(b.jsx)("a",{href:"https://twitter.com/SachinNimshan",children:Object(b.jsx)(o.a,{className:"social-media-icon"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:"home-btn",children:"Download My CV"})})]})}),Object(b.jsx)(l.Slide,{right:!0,children:Object(b.jsx)("div",{children:Object(b.jsx)("img",{className:"home-img",src:"/Images/pro.png"})})})]})},O=s(42),x=s(23),u=s.n(x),v=s(40),p=s(19),N=s(24),g=s(41),f=s.n(g),w=s(12),k=s.n(w),y=function(e){var c=Object(a.useState)({username:"",email:"",message:""}),s=Object(r.a)(c,2),i=s[0],t=s[1],n=Object(a.useState)({}),j=Object(r.a)(n,2),l=j[0],d=j[1];return{handleChange:function(e){var c=e.target,s=c.name,a=c.value;t(Object(N.a)(Object(N.a)({},i),{},Object(p.a)({},s,a)))},values:i,handleSubmit:function(){var c=Object(v.a)(u.a.mark((function c(s){return u.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),d(e(i)),l.username&&l.email&&l.message&&k()("Oops","Someting Went Wrong","error"),""===i.username&&k()("Oops","Fields Are Required","warning"),""===i.email&&k()("Oops","Fields Are Required","warning"),""!==i.message){c.next=9;break}k()("Oops","Fields Are Required","warning"),c.next=19;break;case 9:return c.prev=9,c.next=12,f.a.post("/email/sendemail",i);case 12:k()("Good job!","Thank You For Your Support","success"),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(9),k()("Ooops!","Something Went Wrong","error");case 18:t({username:"",email:"",message:""});case 19:case"end":return c.stop()}}),c,null,[[9,15]])})));return function(e){return c.apply(this,arguments)}}(),errors:l}};function S(e){var c={};return e.username.trim()||(c.username="Name is Required"),e.email?/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(c.email="Email Address is Invalid"):c.email="Email is Required",e.message||(c.message="Message is Required"),c}var I=s(4),E=s.n(I),C=s(17),A=s.n(C);var P=function(){var e=y(S),c=e.handleChange,s=e.values,a=e.handleSubmit,i=e.errors;return Object(b.jsx)("div",{className:"contact-section",style:{backgroundImage:"url(/Images/contactus.jpg)",backgroundSize:"cover"},children:Object(b.jsxs)("div",{className:"contact-over",children:[Object(b.jsx)("div",{className:"section-title1",children:Object(b.jsxs)(E.a,{top:!0,cascade:!0,children:[Object(b.jsx)("h1",{children:"Contact"}),Object(b.jsx)("span",{children:"Leave Me A Message"})]})}),Object(b.jsxs)("div",{className:"contact-container",children:[Object(b.jsxs)("div",{style:{textAlign:"center"},children:[Object(b.jsx)("img",{className:"contact-image",src:"/Images/contact1.png"}),Object(b.jsxs)("div",{className:"social-media-container",children:[Object(b.jsx)("div",{children:Object(b.jsx)("h5",{children:"Follow Me On Social Media"})}),Object(b.jsxs)("div",{children:[Object(b.jsx)("a",{href:"https://www.youtube.com/sachinnimshan",children:Object(b.jsx)(m.e,{className:"social-media-icon1"})}),Object(b.jsx)("a",{href:"https://www.instagram.com/sachin_nimshan.06/",children:Object(b.jsx)(d.a,{className:"social-media-icon1"})}),Object(b.jsx)("a",{href:"https://www.facebook.com/sachin.nimshan/",children:Object(b.jsx)(m.c,{className:"social-media-icon1"})}),Object(b.jsx)("a",{href:"https://twitter.com/SachinNimshan",children:Object(b.jsx)(o.a,{className:"social-media-icon1"})})]})]})]}),Object(b.jsx)("div",{className:"contact-form",children:Object(b.jsxs)("form",{onSubmit:a,children:[Object(b.jsxs)("div",{className:"form-group p-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"label-fonts",children:"Name"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"username","aria-describedby":"emailHelp",placeholder:"Enter Your Name",name:"username",value:s.username,onChange:c}),i.username&&Object(b.jsx)("p",{className:"form-errors",children:i.username})]}),Object(b.jsxs)("div",{className:"form-group p-3",children:[Object(b.jsx)("label",{for:"exampleInputPassword1",className:"label-fonts",children:"Email Address"}),Object(b.jsx)("input",{type:"text",className:"form-control",id:"email",placeholder:"Enter Your Email",name:"email",value:s.email,onChange:c}),i.email&&Object(b.jsx)("p",{className:"form-errors",children:i.email})]}),Object(b.jsxs)("div",{className:"form-group p-3",children:[Object(b.jsx)("label",{for:"exampleInputEmail1",className:"label-fonts",children:"Message"}),Object(b.jsx)("textarea",{type:"text",className:"form-control",id:"message","aria-describedby":"emailHelp",placeholder:"Enter Your Message",name:"message",value:s.message,onChange:c}),i.message&&Object(b.jsx)("p",{className:"form-errors",children:i.message})]}),Object(b.jsx)("div",{className:"form-group p-3",children:Object(b.jsx)("button",{type:"submit",className:"submit-btn",children:"Submit"})})]})}),Object(b.jsx)("div",{className:"contact-card",style:{width:"18rem"},children:Object(b.jsxs)("ul",{className:"list-group",children:[Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(m.d,{className:"contact-icon-email"}),Object(b.jsx)("h5",{children:"Email :"})]}),Object(b.jsx)("span",{children:"sachinnimshan@gmail.com"})]}),Object(b.jsxs)("li",{className:"list-group-item",children:[Object(b.jsxs)("div",{children:[Object(b.jsx)(O.a,{className:"contact-icon-phone"}),Object(b.jsx)("h5",{children:"Phone :"})]}),Object(b.jsx)("span",{children:"(+94)779012655"})]})]})})]})]})})};var M=function(){return Object(b.jsx)("div",{className:"footer-container",children:Object(b.jsx)("div",{children:"Copyright \xa92021 - Sachin Nimshan"})})};s(82),s(83);var D=function(){return Object(b.jsx)("div",{className:"services-container",children:Object(b.jsxs)("div",{className:"services-over",children:[Object(b.jsx)("div",{className:"section-title",children:Object(b.jsxs)(E.a,{top:!0,cascade:!0,children:[Object(b.jsx)("h1",{children:"My Services"}),Object(b.jsx)("span",{children:"What I Do"})]})}),Object(b.jsxs)("div",{className:"service-card-main-container",children:[Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)("img",{className:"serve-img",src:"/Images/bg1.png"})}),Object(b.jsxs)("div",{className:"services-card-container",children:[Object(b.jsx)("div",{className:"service-card",children:Object(b.jsxs)(E.a,{bottom:!0,children:[" ",Object(b.jsx)("div",{className:"service-icons",children:Object(b.jsx)("img",{src:"/Images/web.png"})}),Object(b.jsx)("h4",{children:"WEB DEVELOPMENT"}),Object(b.jsx)("div",{className:"breaker"})]})}),Object(b.jsx)("div",{className:"service-card",children:Object(b.jsxs)(E.a,{bottom:!0,children:[Object(b.jsx)("div",{className:"service-icons",children:Object(b.jsx)("img",{src:"/Images/desktop.png"})}),Object(b.jsx)("h4",{children:"DESKTOP APP DEVELOPMENT"}),Object(b.jsx)("div",{className:"breaker"})]})}),Object(b.jsx)("div",{className:"service-card",children:Object(b.jsxs)(E.a,{bottom:!0,children:[Object(b.jsx)("div",{className:"service-icons",children:Object(b.jsx)("img",{src:"/Images/phone.png"})}),Object(b.jsx)("h4",{children:"MOBILE APP DEVELOPMENT"}),Object(b.jsx)("div",{className:"breaker"})]})}),Object(b.jsx)("div",{className:"service-card",children:Object(b.jsxs)(E.a,{bottom:!0,children:[Object(b.jsx)("div",{className:"service-icons",children:Object(b.jsx)("img",{src:"/Images/ux.png"})}),Object(b.jsx)("h4",{children:"UI / UX DESIGN"}),Object(b.jsx)("div",{className:"breaker"})]})})]})]})]})})},F=s(43),W=s(10),L=s(44);var T=function(){return Object(b.jsx)("div",{className:"about-container",style:{backgroundImage:"url(/Images/service.jpg)",backgroundSize:"cover"},children:Object(b.jsxs)("div",{className:"about-over",children:[Object(b.jsx)("div",{className:"section-title1",children:Object(b.jsxs)(E.a,{top:!0,cascade:!0,children:[Object(b.jsx)("h1",{children:"About Me"}),Object(b.jsx)("span",{children:"What I Do"})]})}),Object(b.jsxs)("div",{className:"skill-container container",children:[Object(b.jsx)(E.a,{bottom:!0,children:Object(b.jsx)("div",{className:"container about-description",children:Object(b.jsx)("p",{children:"I have more than 5+ years' experience building softwares in different programming languages since 2016. Below is a quick overview of my main technical skill sets and technologies I use."})})}),Object(b.jsx)(A.a,{right:!0,cascade:!0,children:Object(b.jsxs)("div",{className:"container pt-5 pb-5 d-flex justify-content-center gap-5 py-2 px-2 flex-wrap",children:[Object(b.jsx)("div",{children:Object(b.jsx)(W.e,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(W.f,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(W.c,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(F.a,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(W.d,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(m.b,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(W.a,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(W.b,{className:"pro-icons"})}),Object(b.jsx)("div",{children:Object(b.jsx)(L.a,{className:"pro-icons"})})]})})]})]})})},Y=s(14),H=s.n(Y),R=s(110);var q=function(){return Object(b.jsxs)("div",{className:"project-section",children:[Object(b.jsx)("div",{className:"section-title",children:Object(b.jsxs)(l.Fade,{top:!0,cascade:!0,children:[Object(b.jsx)("h1",{children:"Projects"}),Object(b.jsx)("span",{children:"What I Have Done"})]})}),Object(b.jsxs)("div",{className:"project-container",children:[Object(b.jsx)("div",{className:"pro-card-container",children:Object(b.jsxs)("div",{className:"card project-card",children:[Object(b.jsx)("img",{className:"card-img-top",src:"/Images/p1.jpg",alt:"Card image cap"}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("h5",{className:"pro-title",children:"Amazon Clone"}),Object(b.jsx)("p",{className:"pro-text",children:"MERN Stack | E-Commerce Website"})]}),Object(b.jsxs)("div",{className:"card-body",children:[Object(b.jsx)("a",{href:"https://snmart.herokuapp.com/",target:"_blank",className:"card-link",children:Object(b.jsx)(R.a,{variant:"outline-primary",children:"View"})}),Object(b.jsx)("a",{href:"https://youtube.com/playlist?list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",target:"_blank",className:"card-link",children:Object(b.jsx)(R.a,{variant:"outline-danger",children:"Youtube"})})]})]})}),Object(b.jsx)("div",{style:{textAlign:"center"},children:Object(b.jsx)(l.Slide,{right:!0,children:Object(b.jsx)("img",{className:"pro-image",src:"/Images/serve.png"})})})]})]})},_=s(45);var B=function(){var e=Object(a.useState)(!1),c=Object(r.a)(e,2),s=c[0],i=c[1],t=Object(a.useState)(!1),n=Object(r.a)(t,2),l=n[0],o=n[1],m=function(){return o(!1)};return window.addEventListener("scroll",(function(){!s&&window.pageYOffset>400?i(!0):s&&window.pageYOffset<=400&&i(!1)})),Object(b.jsxs)("div",{children:[Object(b.jsxs)("div",{className:"header-container",children:[Object(b.jsx)(H.a,{top:!0,children:Object(b.jsx)("div",{children:Object(b.jsx)("a",{href:"#",children:Object(b.jsx)("img",{className:"site-logo",src:"/Images/signature.png"})})})}),Object(b.jsx)("div",{className:"menu-container",children:Object(b.jsx)(H.a,{top:!0,children:Object(b.jsxs)("ul",{className:"menu-item-container",children:[Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)("a",{href:"#",children:"Home"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)("a",{href:"#about",children:"About"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)("a",{href:"#services",children:"Services"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)("a",{href:"#projects",children:"Projects"})}),Object(b.jsx)("li",{className:"menu-item",children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})})}),Object(b.jsx)("div",{children:Object(b.jsx)(_.a,{onClick:function(){return o(!l)},className:"menu-icon"})}),Object(b.jsx)(H.a,{right:!0,children:Object(b.jsx)("div",{className:l?"nav-menu active":"nav-menu",children:Object(b.jsx)(H.a,{right:!0,children:Object(b.jsx)("div",{className:"navbar-container",children:Object(b.jsxs)("ul",{className:"nav-item-container",children:[Object(b.jsx)("li",{className:"container menu-header",children:Object(b.jsxs)("div",{className:"close-menu-container",children:[Object(b.jsx)("div",{className:"menu-title",children:"Hello' You are Welcome"}),Object(b.jsx)("div",{children:Object(b.jsx)(d.b,{onClick:m,className:"close-menu"})})]})}),Object(b.jsx)("li",{className:"nav-item",onClick:m,children:Object(b.jsx)("a",{href:"#",children:"Home"})}),Object(b.jsx)("li",{className:"nav-item",onClick:m,children:Object(b.jsx)("a",{href:"#about",children:"About"})}),Object(b.jsx)("li",{className:"nav-item",onClick:m,children:Object(b.jsx)("a",{href:"#services",children:"Services"})}),Object(b.jsx)("li",{className:"nav-item",onClick:m,children:Object(b.jsx)("a",{href:"#projects",children:"Projects"})}),Object(b.jsx)("li",{className:"nav-item",onClick:m,children:Object(b.jsx)("a",{href:"#contact",children:"Contact"})})]})})})})})]}),Object(b.jsx)(j.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:s?"flex":"none"}}),Object(b.jsx)("section",{id:"home",children:Object(b.jsx)(h,{})}),Object(b.jsx)("section",{id:"about",children:Object(b.jsx)(T,{})}),Object(b.jsx)("section",{id:"services",children:Object(b.jsx)(D,{})}),Object(b.jsx)("div",{className:"container-fluid page-break"}),Object(b.jsx)("section",{id:"projects",children:Object(b.jsx)(q,{})}),Object(b.jsx)("section",{id:"contact",children:Object(b.jsx)(P,{})}),Object(b.jsx)("section",{children:Object(b.jsx)(M,{})})]})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,111)).then((function(c){var s=c.getCLS,a=c.getFID,i=c.getFCP,t=c.getLCP,n=c.getTTFB;s(e),a(e),i(e),t(e),n(e)}))};n.a.render(Object(b.jsx)(i.a.StrictMode,{children:Object(b.jsx)(B,{})}),document.getElementById("root")),V()},16:function(e,c,s){},52:function(e,c,s){}},[[105,1,2]]]);
//# sourceMappingURL=main.6d7d454c.chunk.js.map