(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[111],{516:function(e,t,n){"use strict";n.d(t,{u:function(){return r},Qz:function(){return c},Ov:function(){return m},f9:function(){return s},VD:function(){return i},sZ:function(){return o}});var a=n(5444),l=n(7294),r=function(e,t){return e.map((function(n,r){var c=n.name;return l.createElement(l.Fragment,null," ",l.createElement(a.rU,{className:t,key:"x"+r,to:"/members/"+c.toLowerCase().split(" ").join("")},c),r+2===e.length?" and":r+1!==e.length?",":"")}))},c=function(e,t){return e.map((function(e,t){var n=e.name;return l.createElement(l.Fragment,null,l.createElement(a.rU,{className:"pr-3",key:"x"+t,to:"/members/"+n.toLowerCase().split(" ").join(""),style:{display:"inline-block"}},l.createElement("span",{class:"project-auther-name"}," ",n," ")),"")}))},m=function(e,t){return void 0===t&&(t=100),null!=e&&e.length>=t?e.substring(0,t)+"...":e},s=function(e,t){return e.map((function(t,n){var r=t.name;return l.createElement(l.Fragment,null," ",l.createElement(a.rU,{key:"x"+n,to:"/members/"+r.toLowerCase().split(" ").join("")},r),n+2===e.length?" and":n+1!==e.length?",":"")}))},i=function(e){return e.toLowerCase().replace(/^\w|\s\w/g,(function(e){return e.toUpperCase()}))};function o(e,t){var n=new Array(t),a=e.length,l=new Array(a);if(t>a)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var r=Math.floor(Math.random()*a);n[t]=e[r in l?l[r]:r],l[r]=--a in l?l[a]:a}return n}},489:function(e,t,n){"use strict";n.r(t);var a=n(7294),l=n(1974),r=n(3751),c=n(516),m=n(5444),s=n(4248),i=n.n(s),o=n(5769);t.default=function(e){var t=e.data,n=e.location,s=t.smp;return(0,a.useEffect)((function(){!0!==t.smp_basic.open&&(0,m.c4)("/")})),a.createElement(l.Z,{location:n.pathname},!0!==t.smp_basic.open?null:a.createElement(a.Fragment,null," ",a.createElement(r.Z,{title:"SMP "+(new Date).getFullYear()}),a.createElement("main",{className:"page"},a.createElement("section",{className:"clean-block about-us"},a.createElement("div",{className:"container"},a.createElement("div",{className:"block-heading"},a.createElement("h2",{className:"text-primary"},"IET NITK SMP ",(new Date).getFullYear()),a.createElement("p",null,t.smp_basic.description))))),a.createElement("div",{className:"site-section pb-5",style:{paddingTop:"1em"}},a.createElement("div",{className:"container"},s.group.map((function(e,t){return a.createElement(a.Fragment,{key:t},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-6 col-md-8 col-sm-12"},a.createElement("h3",{id:e.fieldValue,className:"smp-signames"},a.createElement(m.rU,{to:"/sigs/"+e.fieldValue.toLowerCase()},e.fieldValue)),e.nodes.map((function(e,t){return a.createElement(a.Fragment,{key:t},a.createElement("h5",{id:s.title},e.title),a.createElement("div",{className:"pb-5"},a.createElement("p",null,e.description,".",a.createElement("br",null),a.createElement("span",{className:"text-muted"},a.createElement("strong",null,"Mentors:"),(0,c.f9)(e.members,"")),a.createElement("br",null),a.createElement(o.MS,{target:"_blank",rel:"noreferrer",className:"btn btn-primary btn-sm mt-2",href:e.url},"Course Curriculum"))))}))),a.createElement("div",{className:"col-lg-6 col-md-4 hidden-sm hidden-xs smp-logo-div"},a.createElement(m.rU,{to:"/sigs/"+e.fieldValue.toLowerCase()},a.createElement("img",{className:"mobile-invisible smp-logo",style:{maxWidth:"150px",paddingTop:"2em"},src:e.nodes[0].sigx.logox.publicURL,alt:e.fieldValue})))),t!==s.group.length-1?a.createElement("hr",null):null)})))),t.smp_basic.form_url?a.createElement("div",{className:"clean-block bg-primary text-center text-light",style:{padding:"30px 0px",marginTop:"2em"}},a.createElement("h2",null,"Sign up for a Course Now!"),a.createElement(o.MS,{href:t.smp_basic.form_url,target:"_blank",rel:"noreferrer",className:"btn btn-light btn-lg mt-5",type:"button"},"Registration Form")):null,t.smp_basic.faq?a.createElement("section",{className:"clean-block clean-faq dark"},a.createElement("div",{className:"container"},a.createElement("div",{className:"block-heading"},a.createElement("h2",{className:"text-primary"},"SMP ",(new Date).getFullYear()," FAQ"),a.createElement("p",null,(new Date).getFullYear()," SMP FAQs and Details")),a.createElement("div",{className:"block-content"},a.createElement(i(),null,t.smp_basic.faq),a.createElement("p",{className:"text-primary mt-5"},"Please stay tuned to our social media pages for updates.")))):null))}}}]);
//# sourceMappingURL=component---src-pages-smp-js-ebca76e0dd5d9f29dbaa.js.map