(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[994],{516:function(e,t,n){"use strict";n.d(t,{u:function(){return r},f9:function(){return i},VD:function(){return s}});var a=n(5444),l=n(7294),r=function(e,t){return e.map((function(t,n){var r=t.name;return l.createElement(l.Fragment,null," ",l.createElement(a.rU,{key:"x"+n,to:"/members/"+r.toLowerCase().split(" ").join("")},r),n+2===e.length?" and":n+1!==e.length?",":"")}))},i=function(e,t){return e.map((function(t,n){var r=t.name;return l.createElement(l.Fragment,null," ",l.createElement(a.rU,{key:"x"+n,to:"/members/"+r.toLowerCase().split(" ").join("")},r),n+2===e.length?" and":n+1!==e.length?",":"")}))},s=function(e){return e.toLowerCase().replace(/^\w|\s\w/g,(function(e){return e.toUpperCase()}))}},277:function(e,t,n){"use strict";var a=n(18),l=n(7294),r=n(4260);function i(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,n=e.list,s=e.item,c=e.noneMessage,o=e.filterBy,m=e.filterLabel,u=(0,l.useState)({pno:1,list_state:n,filterType:null,filterCategories:(0,a.Z)(new Set(n.map((function(e){return e[o]}))))}),p=u[0],g=u[1];return p.list_state&&0===p.list_state.length?l.createElement("div",{className:"text-center"},c):l.createElement(l.Fragment,null,o&&p.list_state?l.createElement(r.Z,null,l.createElement(r.Z.Toggle,{className:"mr-4",variant:"outline-primary",id:"dropdown-"+o,size:"sm"},p.filterType?p.filterType:m),l.createElement(r.Z.Menu,null,p.filterCategories&&p.filterCategories.map((function(e,t){return l.createElement(r.Z.Item,{name:e,key:t,onClick:function(e){return g(Object.assign({},p,{list_state:n.filter((function(t){return t[o]===e.target.name})),filterType:e.target.name}))}},e)})),p.filterType?l.createElement(r.Z.Item,{onClick:function(e){g(Object.assign({},p,{list_state:n,filterType:null}))}},"Clear Filters"):null),p.list_state.length," Items",l.createElement("hr",null)):null,1!==p.pno?l.createElement(l.Fragment,null,l.createElement("h6",{className:"text-primary"},"Page ",p.pno),l.createElement("hr",null),l.createElement("br",null)):null,p.list_state&&p.list_state.slice((p.pno-1)*t,(p.pno-1)*t+t).map(s),l.createElement("nav",{"aria-label":"Page navigation example"},l.createElement("ul",{className:"pagination justify-content-center"},l.createElement("li",{className:"page-item "+(1===p.pno?"disabled":"")},l.createElement("button",{className:"page-link",onClick:function(){i(),g(Object.assign({},p,{pno:p.pno-1}))}},"Previous")),p.list_state&&(0,a.Z)(Array(Math.ceil(p.list_state.length/t))).map((function(e,t){return l.createElement("li",{className:"page-item "+(p.pno===t+1?"active":""),key:t},l.createElement("button",{className:"page-link","data-toggle":"tooltip",title:"Page "+(t+1),onClick:function(){i(),g(Object.assign({},p,{pno:t+1}))}},t+1))})),l.createElement("li",{className:"page-item "+(p.list_state&&p.pno===Math.ceil(p.list_state.length/t)?"disabled":"")},l.createElement("button",{className:"page-link",onClick:function(){i(),g(Object.assign({},p,{pno:p.pno+1}))}},"Next")))))}},7864:function(e,t,n){"use strict";n.r(t);var a=n(5444),l=n(7294),r=n(516),i=n(1974),s=n(277),c=n(3751);t.default=function(e){var t=e.data,n=e.location;return(0,l.useEffect)((function(){!0!==t.expo.open&&(0,a.c4)("/")})),l.createElement(i.Z,{location:n.pathname,title:"Main"},l.createElement(c.Z,{title:"Expo "+(new Date).getFullYear()}),l.createElement("main",{className:"page blog-post-list"},l.createElement("section",{className:"clean-block clean-blog-list dark"},l.createElement("div",{className:"container"},l.createElement("div",{className:"block-heading"},l.createElement("h2",{className:"text-primary"},"IET NITK @ Expo ",(new Date).getFullYear()),l.createElement("p",null,"Expo '",String((new Date).getFullYear()).slice(2)," is a club-wide project showcase showing the best of the products made by NITK. Here's some of ours.")),l.createElement("div",{className:"block-content"},l.createElement(s.Z,{max:10,list:t.projects.nodes,filterBy:"sig",filterLabel:"Filter by SIG",item:function(e,t){return l.createElement("div",{key:t,className:"clean-blog-post"},l.createElement("h3",{className:"text-capitalize"},e.title),l.createElement("div",{className:"info"},l.createElement("span",{className:"text-muted"},l.createElement(a.rU,{to:"/sigs/"+e.sig.name.toLowerCase()},e.sig.name))),e.description||"",e.authors?l.createElement("p",null,"Built by",(0,r.u)(e.authors,"")):null,e.url?l.createElement(a.rU,{to:"/projects/"+e.title.toLowerCase().split(" ").join(""),className:"btn btn-outline-primary btn-sm",type:"button"},"Read More"):null)}}))))))}}}]);
//# sourceMappingURL=component---src-pages-expo-js-2f20f2208b14291f46d4.js.map