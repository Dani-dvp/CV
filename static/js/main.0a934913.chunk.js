(this.webpackJsonpproject1=this.webpackJsonpproject1||[]).push([[0],{26:function(e,t,a){},31:function(e,t,a){e.exports=a.p+"static/media/Jag.10df0266.jpg"},35:function(e,t,a){e.exports=a(50)},41:function(e,t,a){},42:function(e,t,a){},43:function(e,t,a){},46:function(e,t,a){},50:function(e,t,a){"use strict";a.r(t);a(36);var n=a(0),r=a.n(n),l=a(28),o=a.n(l),c=a(22),i=a(6),s=a(7),m=a(9),u=a(8),p=a(15),d=a(51),h=a(20),b=a(2),f=a(18),E=a(29),g=a(19),v=(a(41),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{className:"ProjectWrap container-fluid"},r.a.createElement(E.a,null,r.a.createElement(b.a,{className:"col-xs-4"},r.a.createElement(b.a.Img,{variant:"top",src:this.props.imageOne}),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,this.props.firstTitle),r.a.createElement(b.a.Text,null,this.props.firstText),r.a.createElement(f.a,{className:"btn btn-primary",a:!0,href:this.props.firstBtn,target:"_blank"},this.props.btnTxt))),r.a.createElement(b.a,{className:"col-xs-4"},r.a.createElement(b.a.Img,{variant:"top",src:this.props.imageTwo}),r.a.createElement(b.a.Body,null,r.a.createElement(b.a.Title,null,this.props.secondTitle),r.a.createElement(b.a.Text,null,this.props.secondText),r.a.createElement(f.a,{className:"btn btn-primary",a:!0,href:this.props.secondBtn,target:"_blank"},this.props.btnTxtTwo)))),r.a.createElement("br",null))}}]),a}(n.Component)),k=a(30),j=(a(42),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).state={repos:[]},n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users/dani-dvp/repos").then((function(e){return e.json()})).then((function(t){e.setState({repos:t.length})}))}},{key:"render",value:function(){return r.a.createElement(g.a,{className:"container-fluid"},r.a.createElement(k.a,{className:"cardWrapper mx-auto d-grid"},r.a.createElement(b.a,null,r.a.createElement(b.a.Img,{className:"rounded-circle",variant:"top",src:"https://sweamfo.se/wp-content/uploads/2013/11/LinkedIn-icon-logo-+small.gif"}),r.a.createElement(b.a.Body,{className:"d-flex flex-column "},r.a.createElement(b.a.Title,null,this.props.firstTitle),r.a.createElement(b.a.Text,{className:"mt-auto"},r.a.createElement("a",{type:"button",className:"btn btn-success",a:!0,href:this.props.link,target:"_blank"},"LinkedIn")))),r.a.createElement(b.a,null,r.a.createElement(b.a.Img,{className:"rounded-circle",variant:"top",src:"https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"}),r.a.createElement(b.a.Body,{className:"d-flex flex-column"},r.a.createElement(b.a.Title,null,this.props.secondTitle),r.a.createElement(b.a.Text,{className:"mt-auto"},"H\xe4r finns ",this.state.repos," repos att kika igenom"),r.a.createElement("a",{type:"button",className:"btn btn-success mt-auto",href:"https://github.com/Dani-dvp?tab=repositories",target:"_blank"},"Github"))),r.a.createElement(b.a,null,r.a.createElement(b.a.Img,{className:"rounded-circle",variant:"top",src:"https://www.cyclonis.com/images/2020/06/gmail-small-logo-765x402.png"}),r.a.createElement(b.a.Body,{className:"d-flex flex-column"},r.a.createElement(b.a.Title,null,this.props.thirdTitle),r.a.createElement(b.a.Text,{className:"mt-auto"},"Kevin1995dani@gmail.com")))))}}]),a}(n.Component)),w=a(31),y=a.n(w),N=(a(26),function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(g.a,{className:"container-fluid"},r.a.createElement("div",{class:"jumbotron"},r.a.createElement("img",{src:y.a,className:"rounded-circle",alt:"..."}),r.a.createElement("h1",{class:"display-4"},this.props.intro),r.a.createElement("h1",{class:"lead"},this.props.description),r.a.createElement("hr",{class:"my-4"}),r.a.createElement("p",{className:"h3"},this.props.text),r.a.createElement(f.a,{variant:"primary",a:!0,href:"#contact"},"Kontakta mig")))}}]),a}(n.Component)),T=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"wrapper"},r.a.createElement("p",{id:"top"}),r.a.createElement(N,{className:"h-5",intro:"Kevin Dani",description:"Systemutvecklare",text:"Jag \xe4r en entusiastisk och detaljorienterad student med en passion\r inom IT. Jobbar h\xe5rt f\xf6r att uppn\xe5 de m\xe5l som f\xf6rv\xe4ntas av mig. Ser\r alltid fram emot nya utmaningar och \xe4r \xf6vertygad om att min kompetens\r och positiva inst\xe4llning \xe4r till stor f\xf6rdel i alla yrkesroller.",Link:"#contact"}),r.a.createElement("br",null),r.a.createElement("h3",{className:"projects mx-auto d-block"},"Mina Projekt"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"projects"},r.a.createElement(v,{className:"eCommerce",firstBtn:"https://github.com/DonOllario/Projektarbete-E-Commerce",imageOne:"https://webbhotells.se/wp-content/uploads/2019/08/085124-que-es-ecommerce.jpg",btnTxt:"Github",firstTitle:"Ett projekt d\xe4r jag och fyra till skapade en e-handel f\xf6r olika produkter i form av en konsolapplikation",secondBtn:"https://github.com/Dani-dvp/WebbApplikation",imageTwo:"https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg",btnTxtTwo:"Github",secondTitle:"Vi skapade en hemsida d\xe4r man kan l\xe4sa reviews p\xe5 olika restauranger och l\xe4gga till nya restauranger om n\xe5gon man vill ha saknas"}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h3",{className:"jobs mx-auto d-block"},"Arbetslivserfarenhet"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("div",{className:"jobs mx-auto d-grid"},r.a.createElement(v,{className:"jobs",secondBtn:"https://www.linkedin.com/company/stormgroup/?originalSubdomain=se",imageOne:"https://cached-images.btdmtech.se/paf-e/s1/?p=/Globals/7f/2e/7f2e4da7-87c8-4074-a67a-da7e956797b7.jpg",btnTxt:"Adient",firstTitle:"Arbetade som events\xe4ljare hos StormGroup p\xe5 uppdrag f\xf6r E-on p\xe5 olika platser runt om V\xe4stra G\xf6taland fr\xe5n 2014 till 2015",firstBtn:"https://www.adient.com/",imageTwo:"https://i.ytimg.com/vi/akBwm8jM2As/maxresdefault.jpg",btnTxtTwo:"StormGroup",secondTitle:"Jag arbetade som mont\xf6r p\xe5 en underleverant\xf6r till Volvo vid namn Adient fr\xe5n 2015 till 2020. H\xe4r monterade vi ihop stolarna f\xf6r Volvos personbilar."}),r.a.createElement("br",null)),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("a",{id:"contact"}),r.a.createElement("h3",{className:" mx-auto d-block"},"Kontakt"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(j,{link:"https://www.linkedin.com/in/kevin-dani-a27ab1172/"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(f.a,{variant:"primary",a:!0,href:"#top"},"Tillbaka till toppen"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null))}}]),a}(n.Component);T.displayName=T.name;a(43);var x=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(i.a)(this,a),(n=t.call(this,e)).toggleNavbar=n.toggleNavbar.bind(Object(h.a)(n)),n.state={collapsed:!0},n}return Object(s.a)(a,[{key:"toggleNavbar",value:function(){this.setState({collapsed:!this.state.collapsed})}},{key:"render",value:function(){return r.a.createElement("header",null)}}]),a}(n.Component);x.displayName=x.name;var O=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x,null),r.a.createElement(d.a,{name:"viewport",content:"width=device-width, initial-scale=1"},this.props.children))}}]),a}(n.Component);O.displayName=O.name;a(46);var B=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement(O,null,r.a.createElement(p.a,{exact:!0,path:"/",component:T}))}}]),a}(n.Component);B.displayName=B.name;var C=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function I(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var A=document.getElementsByTagName("base")[0].getAttribute("href"),G=document.getElementById("root");o.a.render(r.a.createElement(c.a,{basename:A},r.a.createElement(B,null)),G),function(){if("serviceWorker"in navigator){if(new URL("/CV",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/CV","/service-worker.js");C?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):I(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):I(e)}))}}()}},[[35,1,2]]]);
//# sourceMappingURL=main.0a934913.chunk.js.map