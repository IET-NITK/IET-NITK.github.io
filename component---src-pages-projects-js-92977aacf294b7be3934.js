"use strict";(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[853],{277:function(e,t,a){var l=a(2438),n=a(7294),i=a(8236);function r(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,a=e.list,c=e.item,s=e.noneMessage,m=e.filterBy,o=e.filterLabel,u=(0,n.useState)({pno:1,listState:a,filterType:null,filterCategories:(0,l.Z)(new Set(a.map((function(e){return e[m]}))))}),p=u[0],g=u[1];return p.listState&&0===p.listState.length?n.createElement("div",{className:"text-center"},s):n.createElement(n.Fragment,null,m&&p.listState?n.createElement(i.Z,null,n.createElement(i.Z.Toggle,{className:"mr-4",id:"dropdown-"+m,size:"sm",variant:"outline-primary"},p.filterType?p.filterType:o),n.createElement(i.Z.Menu,null,p.filterCategories&&p.filterCategories.map((function(e,t){var l=e.ex;return n.createElement(i.Z.Item,{key:t,name:l,onClick:function(e){return g(Object.assign({},p,{listState:a.filter((function(t){return t[m]===e.target.name})),filterType:e.target.name}))}},l)})),p.filterType?n.createElement(i.Z.Item,{onClick:function(){g(Object.assign({},p,{listState:a,filterType:null}))}},"Clear Filters"):null),p.listState.length," Items",n.createElement("hr",null)):null,1!==p.pno?n.createElement(n.Fragment,null,n.createElement("h6",{className:"text-primary"},"Page ",p.pno),n.createElement("hr",null),n.createElement("br",null)):null,p.listState&&p.listState.slice((p.pno-1)*t,(p.pno-1)*t+t).map(c),n.createElement("nav",{"aria-label":"Page navigation example"},n.createElement("ul",{className:"pagination justify-content-center"},n.createElement("li",{className:"page-item "+(1===p.pno?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){r(),g(Object.assign({},p,{pno:p.pno-1}))}},n.createElement("i",{className:"fa pt-0 mr-2 fa-angle-double-left"})," Previous")),p.listState&&(0,l.Z)(Array(Math.ceil(p.listState.length/t))).map((function(e,t){return n.createElement("li",{className:"page-item "+(p.pno===t+1?"active":""),key:t},n.createElement("button",{className:"page-link","data-toggle":"tooltip",onClick:function(){r(),g(Object.assign({},p,{pno:t+1}))},title:"Page "+(t+1)},t+1))})),n.createElement("li",{className:"page-item "+(p.listState&&p.pno===Math.ceil(p.listState.length/t)?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){r(),g(Object.assign({},p,{pno:p.pno+1}))}},"Next ",n.createElement("i",{className:"fa pt-0 ml-2 fa-angle-double-right"}))))))}},7744:function(e,t,a){a.r(t);var l=a(5444),n=a(7294),i=a(516),r=a(8831),c=a(277),s=a(3751);t.default=function(e){var t=e.data,a=e.location;return n.createElement(r.Z,{location:a.pathname,title:"Main"},n.createElement(s.Z,{title:"Projects"}),n.createElement("main",{className:"page blog-post-list"},n.createElement("section",{className:"clean-block clean-blog-list dark"},n.createElement("div",{className:"container"},n.createElement("div",{className:"block-heading"},n.createElement("h2",{className:"text-primary"},"Projects @ IET NITK"),n.createElement("p",null,"We do many projects throughtout the year, here's a glimpse of it all")),n.createElement("div",{className:"block-content"},n.createElement(c.Z,{filterLabel:"Filter by SIG",item:function(e,t){return n.createElement("div",{className:"clean-blog-post",key:t},n.createElement("h3",{className:"text-capitalize"},e.title),e.label?n.createElement("div",{className:"badge badge-primary mr-2 "},e.label):null,n.createElement(l.rU,{className:"badge badge-info text-uppercase",to:"/sigs/"+e.sig.name.toLowerCase()},e.sig.name),n.createElement("p",null,e.description||""),e.authors?n.createElement("p",null,"Built by",(0,i.bC)(e.authors||[],"")):null,e.url?n.createElement(l.rU,{className:"btn btn-outline-primary btn-sm",to:"/projects/"+(0,i.ub)(e.title),type:"button"},"Read More"):null)},list:t.projects.nodes,max:10}))))))}}}]);
//# sourceMappingURL=component---src-pages-projects-js-92977aacf294b7be3934.js.map