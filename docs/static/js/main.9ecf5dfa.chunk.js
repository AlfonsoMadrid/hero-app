(this["webpackJsonpheroes-app"]=this["webpackJsonpheroes-app"]||[]).push([[0],Array(26).concat([function(e,t,a){var r={"./dc-arrow.jpg":27,"./dc-batman.jpg":28,"./dc-black.jpg":29,"./dc-blue.jpg":30,"./dc-flash.jpg":31,"./dc-green.jpg":32,"./dc-martian.jpg":33,"./dc-robin.jpg":34,"./dc-superman.jpg":35,"./dc-wonder.jpg":36,"./marvel-captain.jpg":37,"./marvel-cyclops.jpg":38,"./marvel-daredevil.jpg":39,"./marvel-hawkeye.jpg":40,"./marvel-hulk.jpg":41,"./marvel-iron.jpg":42,"./marvel-silver.jpg":43,"./marvel-spider.jpg":44,"./marvel-thor.jpg":45,"./marvel-wolverine.jpg":46};function c(e){var t=s(e);return a(t)}function s(e){if(!a.o(r,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return r[e]}c.keys=function(){return Object.keys(r)},c.resolve=s,e.exports=c,c.id=26},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-arrow.15b27bc2.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-batman.ab9eadc3.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-black.3747c663.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-blue.cc8169a3.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-flash.b3922f25.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-green.01c54ee1.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-martian.78565f7d.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-robin.ea4afe99.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-superman.e9391474.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/dc-wonder.970ba2d6.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-captain.d2c7774d.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-cyclops.f1442408.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-daredevil.2f4f1a57.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-hawkeye.1f78e874.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-hulk.d1af5fe5.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-iron.b394df11.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-silver.1d43a08b.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-spider.054016b4.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-thor.c63e651c.jpg"},function(e,t,a){"use strict";a.r(t),t.default=a.p+"static/media/marvel-wolverine.ee676488.jpg"},,,,,,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var r=a(1),c=a(18),s=a.n(c),n=a(9),i=Object(r.createContext)(),l=a(4),o="[auth] login",d="[auth] logout",u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:return Object(l.a)(Object(l.a)({},t.payload),{},{logged:!0});case d:return{logged:!1};default:return e}},m=a(5),j=a(2),p=a(0),h=function(e){var t=e.history,a=Object(r.useState)(""),c=Object(n.a)(a,2),s=c[0],l=c[1],d=Object(r.useContext)(i).dispatch;return Object(p.jsxs)("div",{className:"mx-3 h-100 card-body",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:[Object(p.jsxs)("div",{className:"container-fluid ",children:[Object(p.jsxs)("div",{className:"row justify-content-center align-items-center",children:[Object(p.jsx)("img",{src:"https://tentulogo.com/wp-content/uploads/2018/12/logo-marvel-comics-de-los-90.jpg",style:{width:"7%"},alt:"Logo"}),Object(p.jsx)("h1",{className:"text-warning display-4-md animate__animated animate__slideInDown m-1",children:"Login Hero App"}),Object(p.jsx)("img",{src:"https://arc-anglerfish-arc2-prod-copesa.s3.amazonaws.com/public/35ZJMJYMK5DVRNBHF34TEA5MF4.png",style:{width:"7%"},alt:"Logo"})]}),Object(p.jsx)("hr",{})]}),Object(p.jsxs)("div",{className:"row  justify-content-center align-items-center",children:[Object(p.jsxs)("div",{className:"input-group mb-5 w-75",children:[Object(p.jsx)("div",{className:"input-group-prepend",children:Object(p.jsx)("span",{className:"input-group-text bg-dark text-info",id:"inputGroup-sizing-default",children:"Your Name"})}),Object(p.jsx)("input",{type:"text",className:"form-control",value:s,onChange:function(e){l(e.target.value)}})]}),Object(p.jsx)("button",{className:"btn btn-info animate__animated animate__slideInLeft mb-5",onClick:function(){var e=localStorage.getItem("lastPath")||"/";d({type:o,payload:{name:s}}),t.replace(e)},children:"See your Heroes"})]})]})},b=[{id:"dc-batman",superhero:"Batman",publisher:"DC Comics",alter_ego:"Bruce Wayne",first_appearance:"Detective Comics #27",characters:"Bruce Wayne"},{id:"dc-superman",superhero:"Superman",publisher:"DC Comics",alter_ego:"Kal-El",first_appearance:"Action Comics #1",characters:"Kal-El"},{id:"dc-flash",superhero:"Flash",publisher:"DC Comics",alter_ego:"Jay Garrick",first_appearance:"Flash Comics #1",characters:"Jay Garrick, Barry Allen, Wally West, Bart Allen"},{id:"dc-green",superhero:"Green Lantern",publisher:"DC Comics",alter_ego:"Alan Scott",first_appearance:"All-American Comics #16",characters:"Alan Scott, Hal Jordan, Guy Gardner, John Stewart, Kyle Raynor, Jade, Sinestro, Simon Baz"},{id:"dc-arrow",superhero:"Green Arrow",publisher:"DC Comics",alter_ego:"Oliver Queen",first_appearance:"More Fun Comics #73",characters:"Oliver Queen"},{id:"dc-wonder",superhero:"Wonder Woman",publisher:"DC Comics",alter_ego:"Princess Diana",first_appearance:"All Star Comics #8",characters:"Princess Diana"},{id:"dc-martian",superhero:"Martian Manhunter",publisher:"DC Comics",alter_ego:"J'onn J'onzz",first_appearance:"Detective Comics #225",characters:"Martian Manhunter"},{id:"dc-robin",superhero:"Robin/Nightwing",publisher:"DC Comics",alter_ego:"Dick Grayson",first_appearance:"Detective Comics #38",characters:"Dick Grayson"},{id:"dc-blue",superhero:"Blue Beetle",publisher:"DC Comics",alter_ego:"Dan Garret",first_appearance:"Mystery Men Comics #1",characters:"Dan Garret, Ted Kord, Jaime Reyes"},{id:"dc-black",superhero:"Black Canary",publisher:"DC Comics",alter_ego:"Dinah Drake",first_appearance:"Flash Comics #86",characters:"Dinah Drake, Dinah Lance"},{id:"marvel-spider",superhero:"Spider Man",publisher:"Marvel Comics",alter_ego:"Peter Parker",first_appearance:"Amazing Fantasy #15",characters:"Peter Parker"},{id:"marvel-captain",superhero:"Captain America",publisher:"Marvel Comics",alter_ego:"Steve Rogers",first_appearance:"Captain America Comics #1",characters:"Steve Rogers"},{id:"marvel-iron",superhero:"Iron Man",publisher:"Marvel Comics",alter_ego:"Tony Stark",first_appearance:"Tales of Suspense #39",characters:"Tony Stark"},{id:"marvel-thor",superhero:"Thor",publisher:"Marvel Comics",alter_ego:"Thor Odinson",first_appearance:"Journey into Myster #83",characters:"Thor Odinson"},{id:"marvel-hulk",superhero:"Hulk",publisher:"Marvel Comics",alter_ego:"Bruce Banner",first_appearance:"The Incredible Hulk #1",characters:"Bruce Banner"},{id:"marvel-wolverine",superhero:"Wolverine",publisher:"Marvel Comics",alter_ego:"James Howlett",first_appearance:"The Incredible Hulk #180",characters:"James Howlett"},{id:"marvel-daredevil",superhero:"Daredevil",publisher:"Marvel Comics",alter_ego:"Matthew Michael Murdock",first_appearance:"Daredevil #1",characters:"Matthew Michael Murdock"},{id:"marvel-hawkeye",superhero:"Hawkeye",publisher:"Marvel Comics",alter_ego:"Clinton Francis Barton",first_appearance:"Tales of Suspense #57",characters:"Clinton Francis Barton"},{id:"marvel-cyclops",superhero:"Cyclops",publisher:"Marvel Comics",alter_ego:"Scott Summers",first_appearance:"X-Men #1",characters:"Scott Summers"},{id:"marvel-silver",superhero:"Silver Surfer",publisher:"Marvel Comics",alter_ego:"Norrin Radd",first_appearance:"The Fantastic Four #48",characters:"Norrin Radd"}],g=a(26),v=function(e){var t=e.id,a=e.superhero,r=(e.publisher,e.alter_ego),c=e.first_appearance,s=e.characters;return Object(p.jsx)("div",{className:"card ms-md-5 bg-light overflow-auto",style:{maxWidth:530},children:Object(p.jsxs)("div",{className:"row no-gutters",children:[Object(p.jsxs)("div",{className:"col-md-4 ",children:[Object(p.jsx)("img",{src:g("./".concat(t,".jpg")),className:"img-fluid img-thumbnail d-none d-sm-none d-md-block",alt:a}),Object(p.jsx)("img",{src:g("./".concat(t,".jpg")),className:"img-thumbnail d-block d-sm-block d-md-none",alt:a,style:{maxHeight:200}})]}),Object(p.jsx)("div",{className:"col-md-8 col-sm-6",children:Object(p.jsxs)("div",{className:"card-body",children:[Object(p.jsx)("h5",{className:"card-title",children:Object(p.jsx)("strong",{children:a})}),Object(p.jsx)("p",{className:"card-text",children:r}),r!==s&&Object(p.jsx)("p",{className:"card-text",children:Object(p.jsx)("small",{className:"text-secondary",children:s})}),Object(p.jsx)("p",{className:"card-text",children:Object(p.jsx)("small",{className:"text-muted",children:c})}),Object(p.jsx)(m.b,{className:"stretched-link text-info",to:"./hero/".concat(t),children:"More info..."})]})})]})})},f=function(e){var t=e.publisher,a=Object(r.useMemo)((function(){return function(e){if(!["Marvel Comics","DC Comics"].includes(e))throw new Error('Publisher "'.concat(e,'" is not correct inmundo animal!!'));return b.filter((function(t){return t.publisher===e}))}(t)}),[t]);return Object(p.jsx)("div",{className:"card-columns animate__animated animate__fadeIn",children:a.map((function(e){return Object(p.jsx)(v,Object(l.a)({},e),e.id)}))})},x=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"text-white display-4 p-2 mt-2 text-center",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:"DC"}),Object(p.jsx)("hr",{}),Object(p.jsx)(f,{publisher:"DC Comics"})]})},O=function(e){var t=e.history,a=Object(j.i)().heroeId,c=Object(r.useMemo)((function(){return e=a,b.find((function(t){return t.id===e}));var e}),[a]);if(!c)return Object(p.jsx)(j.a,{to:"/"});var s=c.superhero,n=c.publisher,i=c.alter_ego,l=c.first_appearance,o=c.characters;return Object(p.jsxs)("div",{className:"row mx-1 animate__animated animate__fadeIn bg-dark  justify-content-center align-items-center text-center",children:[Object(p.jsxs)("div",{className:"col-4-lg col-12-sm px-2  ",children:[Object(p.jsx)("h1",{className:"text-info display-4-lg",children:s}),Object(p.jsx)("img",{src:g("./".concat(a,".jpg")),alt:s,className:"img-thumbnail  animate__animated animate__fadeInLeft",style:{maxHeight:300}}),Object(p.jsx)("h3",{className:"text-warning mb-1-lg",children:i})]}),Object(p.jsx)("div",{className:"mt-5 row-sm justify-content-center align-items-center text-center w-75",children:Object(p.jsxs)("div",{className:"col-6-lg col-12-sm mt-5-lg",children:[Object(p.jsxs)("ul",{className:"list-group list-group-flush mt-5-lg",children:[Object(p.jsxs)("li",{className:"list-group-item text-white bg-info",children:[Object(p.jsx)("b",{children:"Alter Ego: "}),i]}),Object(p.jsxs)("li",{className:"list-group-item text-white bg-info",children:[Object(p.jsx)("b",{children:"Publisher: "}),n]}),Object(p.jsxs)("li",{className:"list-group-item text-white bg-info",children:[Object(p.jsx)("b",{children:"First Appearance: "}),l]})]}),Object(p.jsx)("h5",{className:"text-light mt-4",children:"Characters"}),Object(p.jsx)("p",{className:"text-muted",children:o}),Object(p.jsx)("button",{className:"btn btn-outline-success mb-5",onClick:function(){t.length<=2?t.push("/"):t.goBack()},children:"Return"})]})})]})},N=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)("h1",{className:"text-white display-4 p-2 mt-2 text-center",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:"Marvel"}),Object(p.jsx)("hr",{}),Object(p.jsx)(f,{publisher:"Marvel Comics"})]})},C=a(20),y=a.n(C),_=a(13),w=function(e){var t=e.history,a=Object(j.h)(),c=y.a.parse(a.search).q,s=void 0===c?"":c,i=function(e){var t=Object(r.useState)(e),a=Object(n.a)(t,2),c=a[0],s=a[1];return[c,function(e){var t=e.target;s(Object(l.a)(Object(l.a)({},c),{},Object(_.a)({},t.name,t.value)))},function(){s(e)}]}({searchText:s}),o=Object(n.a)(i,2),d=o[0],u=o[1],m=d.searchText,h=Object(r.useMemo)((function(){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return""===e?[]:(e=e.toLocaleLowerCase(),b.filter((function(t){return t.superhero.toLocaleLowerCase().includes(e)})))}(s)}),[s]);return Object(p.jsxs)("div",{className:"p-2",style:{backgroundColor:"rgba(0, 0, 0, 0.5)"},children:[Object(p.jsx)("h1",{className:"text-light display-4 p-2 mt-2",children:"Search Screen"}),Object(p.jsx)("hr",{}),Object(p.jsxs)("div",{className:"row",children:[Object(p.jsxs)("div",{className:"col-md-5 mb-5",children:[Object(p.jsx)("h4",{className:"text-light",children:"Search Form"}),Object(p.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t.push("?q=".concat(m))},children:[Object(p.jsx)("input",{type:"text",placeholder:"Find your Hero",className:"form-control",autoComplete:"off",name:"searchText",value:m,onChange:u}),Object(p.jsx)("button",{type:"submit",className:"btn mt-1 btn-block btn-outline-info ",children:"Search..."})]})]}),Object(p.jsxs)("div",{className:"col-md-7 mb-5",children:[Object(p.jsx)("h4",{className:"text-light",children:"Results"}),""===s&&Object(p.jsx)("div",{className:"alert alert-success",children:"Search your Hero"}),""!==s&&0===h.length&&Object(p.jsxs)("div",{className:"alert alert-danger",children:["Sorry... ",Object(p.jsx)("br",{})," No hero found under the following parameter:",Object(p.jsx)("br",{})," ",s]}),h.map((function(e){return Object(p.jsx)(v,Object(l.a)({},e),e.id)}))]})]})]})},k=function(){var e=Object(r.useContext)(i),t=e.user.name,a=e.dispatch,c=Object(j.g)();return Object(p.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary sticky-top",children:[Object(p.jsx)("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(p.jsx)("span",{className:"navbar-toggler-icon"})}),Object(p.jsxs)("div",{className:"collapse navbar-collapse",id:"navbarTogglerDemo01",children:[Object(p.jsx)(m.b,{className:"navbar-brand",to:"/",children:"Hero League"}),Object(p.jsx)("div",{className:"navbar-collapse",children:Object(p.jsxs)("div",{className:"navbar-nav ",children:[Object(p.jsx)(m.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/marvel",children:"Marvel"}),Object(p.jsx)(m.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/dc",children:"DC"}),Object(p.jsx)(m.c,{activeClassName:"active",className:"nav-item nav-link",exact:!0,to:"/search",children:"Search"})]})}),Object(p.jsx)("div",{children:Object(p.jsxs)("ul",{className:"navbar-nav ml-auto",children:[Object(p.jsxs)("span",{className:"nav-item nav-link text-warning",children:["Hi! ",t]}),Object(p.jsx)("button",{className:"nav-item nav-link btn btn-outline-dark ml-2",style:{color:"greenyellow"},onClick:function(){c.replace("/login"),a({type:d})},children:"Logout"})]})})]})]})},M=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(k,{}),Object(p.jsx)("div",{className:"container mw-75",children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(j.b,{exact:!0,path:"/marvel",component:N}),Object(p.jsx)(j.b,{exact:!0,path:"/hero/:heroeId",component:O}),Object(p.jsx)(j.b,{exact:!0,path:"/dc",component:x}),Object(p.jsx)(j.b,{exact:!0,path:"/search",component:w}),Object(p.jsx)(j.a,{to:"/marvel"})]})})]})},D=a(14),S=["isAuthenticated","component"],A=function(e){var t=e.isAuthenticated,a=e.component,r=Object(D.a)(e,S);return localStorage.setItem("lastPath",r.location.pathname),Object(p.jsx)(j.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(p.jsx)(a,Object(l.a)({},e)):Object(p.jsx)(j.a,{to:"/login"})}}))},T=["isAuthenticated","component"],B=function(e){var t=e.isAuthenticated,a=e.component,r=Object(D.a)(e,T);return Object(p.jsx)(j.b,Object(l.a)(Object(l.a)({},r),{},{component:function(e){return t?Object(p.jsx)(j.a,{to:"/"}):Object(p.jsx)(a,Object(l.a)({},e))}}))},J=function(){var e=Object(r.useContext)(i).user;return Object(p.jsx)(m.a,{children:Object(p.jsx)("div",{children:Object(p.jsxs)(j.d,{children:[Object(p.jsx)(B,{exact:!0,path:"/login",component:h,isAuthenticated:e.logged}),Object(p.jsx)(A,{path:"/",component:M,isAuthenticated:e.logged})]})})})},H=(a(56),function(){return JSON.parse(localStorage.getItem("user"))||{logged:!1}}),F=function(){var e=Object(r.useReducer)(u,{},H),t=Object(n.a)(e,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){localStorage.setItem("user",JSON.stringify(a))}),[a]),Object(p.jsx)(i.Provider,{value:{user:a,dispatch:c},children:Object(p.jsx)(J,{})})};s.a.render(Object(p.jsx)(F,{}),document.getElementById("root"))}]),[[57,1,2]]]);
//# sourceMappingURL=main.9ecf5dfa.chunk.js.map