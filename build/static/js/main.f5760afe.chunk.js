(this.webpackJsonpprintshop=this.webpackJsonpprintshop||[]).push([[0],{106:function(e,c,s){"use strict";s.r(c);var t=s(2),a=s.n(t),i=s(40),n=s.n(i),r=s(12),l=(s(11),s(53),s(3)),j=s(15),d=s(7),o=s(21),b=s(9),h=s(1);var m=function(){return Object(h.jsxs)("div",{className:"home-screen",children:[Object(h.jsx)(l.Slide,{left:!0,children:Object(h.jsxs)("div",{className:"home-center-info",children:[Object(h.jsx)("div",{children:Object(h.jsx)(l.Flip,{top:!0,children:Object(h.jsx)("h1",{children:"HI, I'm Sachin"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("p",{children:"Software Developer / Free Lancer"})}),Object(h.jsx)("div",{children:Object(h.jsx)("span",{children:"High Level Experience in Web Design & Development"})}),Object(h.jsxs)("div",{className:"top-social-icons",children:[Object(h.jsx)("a",{href:"https://www.youtube.com/sachinnimshan",children:Object(h.jsx)(b.e,{className:"social-media-icon"})}),Object(h.jsx)("a",{href:"https://github.com/Sachinnimshan",children:Object(h.jsx)(b.a,{className:"social-media-icon"})}),Object(h.jsx)("a",{href:"https://www.instagram.com/sachin_nimshan.06/",children:Object(h.jsx)(j.a,{className:"social-media-icon"})}),Object(h.jsx)("a",{href:"https://www.facebook.com/sachin.nimshan/",children:Object(h.jsx)(b.d,{className:"social-media-icon"})}),Object(h.jsx)("a",{href:"https://twitter.com/SachinNimshan",children:Object(h.jsx)(o.a,{className:"social-media-icon"})})]}),Object(h.jsx)("div",{children:Object(h.jsxs)("button",{className:"home-btn",children:[Object(h.jsx)(d.b,{className:"btn-down-icon"}),"Download My CV"]})})]})}),Object(h.jsx)("div",{children:Object(h.jsx)(l.Slide,{right:!0,children:Object(h.jsx)("img",{className:"home-img",src:"/Images/homebg.png"})})})]})},x=s(23),O=s.n(x),p=s(41),v=s(17),u=s(24),N=s(42),g=s.n(N),f=s(13),y=s.n(f),w=function(e){var c=Object(t.useState)({username:"",email:"",message:""}),s=Object(r.a)(c,2),a=s[0],i=s[1],n=Object(t.useState)({}),l=Object(r.a)(n,2),j=l[0],d=l[1];return{handleChange:function(e){var c=e.target,s=c.name,t=c.value;i(Object(u.a)(Object(u.a)({},a),{},Object(v.a)({},s,t)))},values:a,handleSubmit:function(){var c=Object(p.a)(O.a.mark((function c(s){return O.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:if(s.preventDefault(),d(e(a)),j.username&&j.email&&j.message&&y()("Oops","Someting Went Wrong","error"),""===a.username&&y()("Oops","Fields Are Required","warning"),""===a.email&&y()("Oops","Fields Are Required","warning"),""!==a.message){c.next=9;break}y()("Oops","Fields Are Required","warning"),c.next=19;break;case 9:return c.prev=9,c.next=12,g.a.post("/email/sendemail",a);case 12:y()("Good job!","Thank You For Your Support","success"),c.next=18;break;case 15:c.prev=15,c.t0=c.catch(9),y()("Ooops!","Something Went Wrong","error");case 18:i({username:"",email:"",message:""});case 19:case"end":return c.stop()}}),c,null,[[9,15]])})));return function(e){return c.apply(this,arguments)}}(),errors:j}};function S(e){var c={};return e.username.trim()||(c.username="Name is Required"),e.email?/^[A-Z0-9._%+=]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(c.email="Email Address is Invalid"):c.email="Email is Required",e.message||(c.message="Message is Required"),c}var k=s(14),C=s.n(k),F=s(43),I=s(44);var M=function(){var e=w(S),c=e.handleChange,s=e.values,t=e.handleSubmit,a=e.errors;return Object(h.jsxs)("div",{className:"contact-section",children:[Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h1",{children:"Contact"}),Object(h.jsx)("span",{children:"Leave Me A Message"})]}),Object(h.jsxs)("div",{className:"contact-container",children:[Object(h.jsxs)("div",{className:"contact-details-container",children:[Object(h.jsx)(l.Slide,{bottom:!0,children:Object(h.jsx)("div",{className:"contact-details",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(F.a,{className:"contact-icons"})}),Object(h.jsx)("li",{children:Object(h.jsx)("h4",{children:"Call Me"})}),Object(h.jsx)("li",{children:Object(h.jsx)("span",{children:"+94 77 9012 655"})})]})})}),Object(h.jsx)(l.Slide,{bottom:!0,children:Object(h.jsx)("div",{className:"contact-details",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(I.a,{className:"contact-icons"})}),Object(h.jsx)("li",{children:Object(h.jsx)("h4",{children:"Email"})}),Object(h.jsx)("li",{children:Object(h.jsx)("span",{children:"sachinnimshan@gmail.com"})})]})})}),Object(h.jsx)(l.Slide,{bottom:!0,children:Object(h.jsx)("div",{className:"contact-details",children:Object(h.jsxs)("ul",{children:[Object(h.jsx)("li",{children:Object(h.jsx)(b.c,{className:"contact-icons"})}),Object(h.jsx)("li",{children:Object(h.jsx)("h4",{children:"Available Hours"})}),Object(h.jsx)("li",{children:Object(h.jsx)("span",{children:"Monday - Friday"})}),Object(h.jsx)("li",{children:Object(h.jsx)("span",{children:"9:00AM - 05:00PM"})})]})})})]}),Object(h.jsx)(l.Slide,{bottom:!0,children:Object(h.jsx)("div",{className:"contact-form",children:Object(h.jsxs)("form",{onSubmit:t,children:[Object(h.jsxs)("div",{className:"form-group p-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control",style:{fontFamily:"Open Sans",fontSize:"15px"},id:"username","aria-describedby":"emailHelp",placeholder:"Enter Your Name",name:"username",value:s.username,onChange:c}),a.username&&Object(h.jsx)("p",{className:"form-errors",children:a.username})]}),Object(h.jsxs)("div",{className:"form-group p-3",children:[Object(h.jsx)("input",{type:"text",className:"form-control",style:{fontFamily:"Open Sans",fontSize:"15px"},id:"email",placeholder:"Enter Your Email",name:"email",value:s.email,onChange:c}),a.email&&Object(h.jsx)("p",{className:"form-errors",children:a.email})]}),Object(h.jsxs)("div",{className:"form-group p-3",children:[Object(h.jsx)("textarea",{type:"text",className:"form-control",style:{fontFamily:"Open Sans",fontSize:"15px"},id:"message","aria-describedby":"emailHelp",placeholder:"Enter Your Message",name:"message",value:s.message,onChange:c}),a.message&&Object(h.jsx)("p",{className:"form-errors",children:a.message})]}),Object(h.jsx)("div",{className:"form-group p-3",children:Object(h.jsx)("button",{type:"submit",className:"submit-btn",children:"Send Message"})})]})})})]})]})};var A=function(){return Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsx)("div",{children:"\xa9 Copyright | All Rights Reserved"}),Object(h.jsxs)("div",{children:["Designend by ",Object(h.jsx)("a",{style:{textDecoration:"none"},href:"#",children:Object(h.jsx)("strong",{children:"Sachin Nimshan"})})]})]})};s(83),s(84);var W=function(){return Object(h.jsx)("div",{className:"services-container",children:Object(h.jsxs)("div",{className:"services-over",children:[Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h1",{children:"My Services"}),Object(h.jsx)("span",{children:"What I Do"})]}),Object(h.jsx)("div",{className:"service-card-main-container",children:Object(h.jsx)(l.Slide,{bottom:!0,children:Object(h.jsxs)("div",{className:"services-card-container",children:[Object(h.jsxs)("div",{style:{borderBottom:"5px solid #00C7FF"},className:"service-card card1",children:[Object(h.jsx)("div",{className:"service-icons",children:Object(h.jsx)("img",{src:"/Images/s1.png"})}),Object(h.jsx)("h4",{children:"Web Development"})]}),Object(h.jsxs)("div",{style:{borderBottom:"5px solid #F58B09"},className:"service-card card2",children:[Object(h.jsx)("div",{className:"service-icons",children:Object(h.jsx)("img",{src:"/Images/s3.png"})}),Object(h.jsx)("h4",{children:"Mobile App development"})]}),Object(h.jsxs)("div",{style:{borderBottom:"5px solid #08D94E"},className:"service-card card3",children:[Object(h.jsx)("div",{className:"service-icons",children:Object(h.jsx)("img",{src:"/Images/s4.png"})}),Object(h.jsx)("h4",{children:"ui / ux design"})]})]})})})]})})},D=s(16),E=s.n(D),R=s(45),P=s(46);var T=function(){return Object(h.jsxs)("div",{className:"about-container",children:[Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h1",{children:"About Me"}),Object(h.jsx)("span",{children:"What I Do"})]}),Object(h.jsxs)("div",{className:"skill-container container",children:[Object(h.jsx)(E.a,{bottom:!0,children:Object(h.jsx)("div",{className:"container about-description",children:Object(h.jsx)("p",{children:"I have more than 5+ years' experience building softwares in different programming languages since 2016. Below is a quick overview of my main technical skill sets and technologies I use."})})}),Object(h.jsx)(C.a,{bottom:!0,cascade:!0,children:Object(h.jsxs)("div",{className:"container pt-5 pb-5 d-flex justify-content-center gap-5 py-2 px-2 flex-wrap",children:[Object(h.jsx)("div",{children:Object(h.jsx)(d.f,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(d.g,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(d.d,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(R.a,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(d.e,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(b.b,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(d.a,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(d.c,{className:"pro-icons"})}),Object(h.jsx)("div",{children:Object(h.jsx)(P.a,{className:"pro-icons"})})]})})]})]})},Y=(s(26),s(112));var H=function(){return Object(h.jsxs)("div",{className:"project-section",children:[Object(h.jsxs)("div",{className:"section-title",children:[Object(h.jsx)("h1",{children:"Projects"}),Object(h.jsx)("span",{children:"What I Have Done"})]}),Object(h.jsxs)("div",{className:"project-container",children:[Object(h.jsx)(l.Fade,{bottom:!0,children:Object(h.jsxs)("div",{className:"card project-card",children:[Object(h.jsx)("img",{className:"card-img-top",src:"/Images/p1.jpg",alt:"Card image cap"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"pro-title",children:"Amazon Clone"}),Object(h.jsx)("p",{className:"pro-text",children:"MERN Stack | E-Commerce Website"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("a",{href:"https://snmart.herokuapp.com/",target:"_blank",className:"card-link",children:Object(h.jsx)(Y.a,{variant:"outline-primary",children:"View"})}),Object(h.jsx)("a",{href:"https://youtube.com/playlist?list=PLWzNP2iyv9fCSm_ZRnIvOP0tx3eK6upy9",target:"_blank",className:"card-link",children:Object(h.jsx)(Y.a,{variant:"outline-danger",children:"Youtube"})})]})]})}),Object(h.jsx)(l.Fade,{bottom:!0,children:Object(h.jsxs)("div",{className:"card project-card",children:[Object(h.jsx)("img",{className:"card-img-top",src:"/Images/crypto.jpg",alt:"Card image cap"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"pro-title",children:'Crytocurrency Web "cryptsn"'}),Object(h.jsx)("p",{className:"pro-text",children:"Cryptocurrency Website"})]}),Object(h.jsx)("div",{className:"card-body",children:Object(h.jsx)("a",{href:"https://cryptsn.herokuapp.com/",target:"_blank",className:"card-link",children:Object(h.jsx)(Y.a,{variant:"outline-primary",children:"View"})})})]})}),Object(h.jsx)(l.Fade,{bottom:!0,children:Object(h.jsxs)("div",{className:"card project-card",children:[Object(h.jsx)("img",{className:"card-img-top",src:"/Images/tvsn.jpg",alt:"Card image cap"}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("h5",{className:"pro-title",children:'"TVSN" Movie Web'}),Object(h.jsx)("p",{className:"pro-text",children:"Movie & TV series info website"})]}),Object(h.jsxs)("div",{className:"card-body",children:[Object(h.jsx)("a",{href:"https://tvsn.herokuapp.com/",target:"_blank",className:"card-link",children:Object(h.jsx)(Y.a,{variant:"outline-primary",children:"View"})}),Object(h.jsx)("a",{href:"https://www.youtube.com/watch?v=SJC6whT0wQM",target:"_blank",className:"card-link",children:Object(h.jsx)(Y.a,{variant:"outline-danger",children:"Youtube"})})]})]})})]})]})},_=s(22),q=s(47);var B=function(){var e=Object(t.useState)(!1),c=Object(r.a)(e,2),s=c[0],a=c[1],i=function(){return a(!1)};return Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsx)("div",{children:Object(h.jsx)("a",{href:"#",children:Object(h.jsx)("img",{className:"site-logo",src:"/Images/signature.png"})})}),Object(h.jsx)("div",{className:"menu-container",children:Object(h.jsxs)("ul",{className:"menu-item-container",children:[Object(h.jsx)("div",{className:"menu-item",children:Object(h.jsx)("a",{href:"#",children:"Home"})}),Object(h.jsx)("div",{className:"menu-item",children:Object(h.jsx)("a",{href:"#about",children:"About"})}),Object(h.jsx)("div",{className:"menu-item",children:Object(h.jsx)("a",{href:"#services",children:"Services"})}),Object(h.jsx)("div",{className:"menu-item",children:Object(h.jsx)("a",{href:"#projects",children:"Projects"})}),Object(h.jsx)("div",{className:"menu-item",children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})}),Object(h.jsx)("div",{children:Object(h.jsx)(q.a,{onClick:function(){return a(!s)},className:"menu-icon"})}),Object(h.jsx)(l.Slide,{right:!0,children:Object(h.jsx)("div",{className:s?"nav-menu active":"nav-menu",children:Object(h.jsx)(l.Slide,{right:!0,children:Object(h.jsx)("div",{className:"navbar-container",children:Object(h.jsxs)("ul",{className:"nav-item-container",children:[Object(h.jsx)("li",{className:"w-100",style:{listStyleType:"none"},children:Object(h.jsx)("div",{className:"close-menu-container",children:Object(h.jsx)("div",{className:"close-menu",children:Object(h.jsx)(j.b,{onClick:i,className:"close-menu-icon"})})})}),Object(h.jsx)("li",{className:"nav-item",onClick:i,children:Object(h.jsx)("a",{href:"#",children:"Home"})}),Object(h.jsx)("li",{className:"nav-item",onClick:i,children:Object(h.jsx)("a",{href:"#about",children:"About"})}),Object(h.jsx)("li",{className:"nav-item",onClick:i,children:Object(h.jsx)("a",{href:"#services",children:"Services"})}),Object(h.jsx)("li",{className:"nav-item",onClick:i,children:Object(h.jsx)("a",{href:"#projects",children:"Projects"})}),Object(h.jsx)("li",{className:"nav-item",onClick:i,children:Object(h.jsx)("a",{href:"#contact",children:"Contact"})})]})})})})})]})};var L=function(){var e=Object(t.useState)(!1),c=Object(r.a)(e,2),s=c[0],a=c[1];return window.addEventListener("scroll",(function(){!s&&window.pageYOffset>400?a(!0):s&&window.pageYOffset<=400&&a(!1)})),Object(h.jsxs)("div",{className:"app",children:[Object(h.jsx)("section",{id:"header",children:Object(h.jsx)(B,{})}),Object(h.jsx)("div",{children:Object(h.jsx)(_.a,{className:"scrollTop",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},style:{height:40,display:s?"flex":"none"}})}),Object(h.jsx)("section",{id:"home",children:Object(h.jsx)(m,{})}),Object(h.jsx)("section",{id:"about",children:Object(h.jsx)(T,{})}),Object(h.jsx)("section",{id:"services",children:Object(h.jsx)(W,{})}),Object(h.jsx)("section",{id:"projects",children:Object(h.jsx)(H,{})}),Object(h.jsx)("section",{id:"contact",children:Object(h.jsx)(M,{})}),Object(h.jsx)("section",{children:Object(h.jsx)(A,{})})]})},V=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,113)).then((function(c){var s=c.getCLS,t=c.getFID,a=c.getFCP,i=c.getLCP,n=c.getTTFB;s(e),t(e),a(e),i(e),n(e)}))};n.a.render(Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),V()},11:function(e,c,s){},53:function(e,c,s){}},[[106,1,2]]]);
//# sourceMappingURL=main.f5760afe.chunk.js.map