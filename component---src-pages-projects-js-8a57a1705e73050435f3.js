"use strict";(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[853],{5136:function(e,t,a){var l=a(3433),n=a(7294),r=a(4299),i=a(9499);function c(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,a=e.list,o=e.item,s=e.noneMessage,m=e.filterBy,u=e.filterLabel,p=(0,i.useLocation)();console.log(p);var g=(0,n.useState)({pno:1,listState:a,filterType:null,filterCategories:(0,l.Z)(new Set(a.map((function(e){return e[m]}))))}),f=g[0],E=g[1];return f.listState&&0===f.listState.length?n.createElement("div",{className:"text-center"},s):n.createElement(n.Fragment,null,m&&f.listState?n.createElement(r.Z,null,n.createElement(r.Z.Toggle,{className:"mr-4",id:"dropdown-"+m,size:"sm",variant:"outline-primary"},f.filterType?f.filterType:u),n.createElement(r.Z.Menu,null,f.filterCategories&&f.filterCategories.map((function(e,t){var l=e.ex;return n.createElement(r.Z.Item,{key:t,name:l,onClick:function(e){return E(Object.assign({},f,{listState:a.filter((function(t){return t[m]===e.target.name})),filterType:e.target.name}))}},l)})),f.filterType?n.createElement(r.Z.Item,{onClick:function(){E(Object.assign({},f,{listState:a,filterType:null}))}},"Clear Filters"):null),f.listState.length," Items",n.createElement("hr",null)):null,1!==f.pno?n.createElement(n.Fragment,null,n.createElement("h6",{className:"text-primary"},"Page ",f.pno),n.createElement("hr",null),n.createElement("br",null)):null,f.listState&&f.listState.slice((f.pno-1)*t,(f.pno-1)*t+t).map(o),n.createElement("nav",{"aria-label":"Page navigation example"},n.createElement("ul",{className:"pagination justify-content-center"},n.createElement("li",{className:"page-item "+(1===f.pno?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){c(),E(Object.assign({},f,{pno:f.pno-1}))}},n.createElement("i",{className:"fa pt-0 mr-2 fa-angle-double-left"})," Previous")),f.listState&&(0,l.Z)(Array(Math.ceil(f.listState.length/t))).map((function(e,t){return n.createElement("li",{className:"page-item "+(f.pno===t+1?"active":""),key:t},n.createElement("button",{className:"page-link","data-toggle":"tooltip",onClick:function(){c(),"undefined"!=typeof window&&(document.location.search="?p="+(t+1)),E(Object.assign({},f,{pno:t+1}))},title:"Page "+(t+1)},t+1))})),n.createElement("li",{className:"page-item "+(f.listState&&f.pno===Math.ceil(f.listState.length/t)?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){c(),E(Object.assign({},f,{pno:f.pno+1}))}},"Next ",n.createElement("i",{className:"fa pt-0 ml-2 fa-angle-double-right"}))))))}},3725:function(e,t,a){var l=a(7294),n=a(3806),r=a(2117);t.Z=function(e){var t=e.location,a=e.children,i=e.showFooter,c=void 0===i||i,o=e.uri;return l.createElement(r.Z,{location:t,showFooter:c},l.createElement("main",{className:"page blog-post-list"},l.createElement("section",{className:"clean-block clean-blog-list dark"},l.createElement("div",{className:"container"},a))),l.createElement(n.Z,{currentRoute:o}))}},7219:function(e,t,a){a.r(t);var l=a(1597),n=a(7294),r=a(2142),i=a(5136),c=a(615),o=a(3725);t.default=function(e){var t=e.data,a=e.location;return n.createElement(o.Z,{location:a.pathname,title:"Main"},n.createElement(c.Z,{title:"Projects"}),n.createElement("div",{className:"block-heading"},n.createElement("h2",{className:"text-primary"},"Projects @ IET NITK"),n.createElement("p",null,"We do many projects throughtout the year, here's a glimpse of it all")),n.createElement("div",{className:"block-content"},n.createElement(i.Z,{filterLabel:"Filter by SIG",item:function(e,t){return n.createElement("div",{className:"clean-blog-post",key:t},n.createElement("h3",{className:"text-capitalize"},e.title),e.label?n.createElement("div",{className:"badge badge-primary mr-2 "},e.label):null,n.createElement(l.rU,{className:"badge badge-info text-uppercase",to:"/sigs/"+e.sig.name.toLowerCase()},e.sig.name),n.createElement("p",null,e.description||""),e.authors?n.createElement("p",null,"Built by",(0,r.bC)(e.authors||[],"")):null,e.url?n.createElement(l.rU,{className:"btn btn-outline-primary btn-sm",to:"/projects/"+(0,r.ub)(e.title),type:"button"},"Read More"):null)},list:t.projects.nodes,max:10})))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-8a57a1705e73050435f3.js.map