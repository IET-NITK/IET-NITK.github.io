"use strict";(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[994],{277:function(e,t,l){var a=l(3433),n=l(7294),i=l(4260);function r(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,l=e.list,c=e.item,s=e.noneMessage,o=e.filterBy,m=e.filterLabel,u=(0,n.useState)({pno:1,listState:l,filterType:null,filterCategories:(0,a.Z)(new Set(l.map((function(e){return e[o]}))))}),p=u[0],g=u[1];return p.listState&&0===p.listState.length?n.createElement("div",{className:"text-center"},s):n.createElement(n.Fragment,null,o&&p.listState?n.createElement(i.Z,null,n.createElement(i.Z.Toggle,{className:"mr-4",id:"dropdown-"+o,size:"sm",variant:"outline-primary"},p.filterType?p.filterType:m),n.createElement(i.Z.Menu,null,p.filterCategories&&p.filterCategories.map((function(e,t){var a=e.ex;return n.createElement(i.Z.Item,{key:t,name:a,onClick:function(e){return g(Object.assign({},p,{listState:l.filter((function(t){return t[o]===e.target.name})),filterType:e.target.name}))}},a)})),p.filterType?n.createElement(i.Z.Item,{onClick:function(){g(Object.assign({},p,{listState:l,filterType:null}))}},"Clear Filters"):null),p.listState.length," Items",n.createElement("hr",null)):null,1!==p.pno?n.createElement(n.Fragment,null,n.createElement("h6",{className:"text-primary"},"Page ",p.pno),n.createElement("hr",null),n.createElement("br",null)):null,p.listState&&p.listState.slice((p.pno-1)*t,(p.pno-1)*t+t).map(c),n.createElement("nav",{"aria-label":"Page navigation example"},n.createElement("ul",{className:"pagination justify-content-center"},n.createElement("li",{className:"page-item "+(1===p.pno?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){r(),g(Object.assign({},p,{pno:p.pno-1}))}},"Previous")),p.listState&&(0,a.Z)(Array(Math.ceil(p.listState.length/t))).map((function(e,t){return n.createElement("li",{className:"page-item "+(p.pno===t+1?"active":""),key:t},n.createElement("button",{className:"page-link","data-toggle":"tooltip",onClick:function(){r(),g(Object.assign({},p,{pno:t+1}))},title:"Page "+(t+1)},t+1))})),n.createElement("li",{className:"page-item "+(p.listState&&p.pno===Math.ceil(p.listState.length/t)?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){r(),g(Object.assign({},p,{pno:p.pno+1}))}},"Next")))))}},7864:function(e,t,l){l.r(t);var a=l(5444),n=l(7294),i=l(516),r=l(4126),c=l(277),s=l(3751);t.default=function(e){var t=e.data,l=e.location;return(0,n.useEffect)((function(){!0!==t.expo.open&&(0,a.c4)("/")})),n.createElement(r.Z,{location:l.pathname,title:"Main"},n.createElement(s.Z,{title:"Expo "+(new Date).getFullYear()}),n.createElement("main",{className:"page blog-post-list"},n.createElement("section",{className:"clean-block clean-blog-list dark"},n.createElement("div",{className:"container"},n.createElement("div",{className:"block-heading"},n.createElement("h2",{className:"text-primary"},"IET NITK @ Expo ",(new Date).getFullYear()),n.createElement("p",null,"Expo '",String((new Date).getFullYear()).slice(2)," is a club-wide project showcase showing the best of the products made by NITK. Here's some of ours.")),n.createElement("div",{className:"block-content"},n.createElement(c.Z,{filterBy:"sig",filterLabel:"Filter by SIG",item:function(e,t){return n.createElement("div",{className:"clean-blog-post",key:t},n.createElement("h3",{className:"text-capitalize"},e.title),n.createElement("div",{className:"info"},n.createElement("span",{className:"text-muted"},n.createElement(a.rU,{to:"/sigs/"+e.sig.name.toLowerCase()},e.sig.name))),e.description||"",e.authors?n.createElement("p",null,"Built by",(0,i.bC)(e.authors,"")):null,e.url?n.createElement(a.rU,{className:"btn btn-outline-primary btn-sm",to:"/projects/"+(0,i.ub)(e.title),type:"button"},"Read More"):null)},list:t.projects.nodes,max:10}))))))}}}]);
//# sourceMappingURL=component---src-pages-expo-js-d5d5437f89e222a17a8a.js.map