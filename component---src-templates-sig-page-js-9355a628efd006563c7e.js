"use strict";(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[977],{5995:function(e,t,l){var a=l(3433),n=l(7294),i=l(4299);function c(){0!==document.body.scrollTop?document.body.scrollTop=0:document.documentElement.scrollTop=0}t.Z=function(e){var t=e.max,l=e.list,r=e.item,s=e.noneMessage,m=e.filterBy,o=e.filterLabel,u=(0,n.useState)({pno:1,listState:l,filterType:null,filterCategories:(0,a.Z)(new Set(l.map((function(e){return e[m]}))))}),p=u[0],g=u[1];return p.listState&&0===p.listState.length?n.createElement("div",{className:"text-center"},s):n.createElement(n.Fragment,null,m&&p.listState?n.createElement(i.Z,null,n.createElement(i.Z.Toggle,{className:"mr-4",id:"dropdown-"+m,size:"sm",variant:"outline-primary"},p.filterType?p.filterType:o),n.createElement(i.Z.Menu,null,p.filterCategories&&p.filterCategories.map((function(e,t){var a=e.ex;return n.createElement(i.Z.Item,{key:t,name:a,onClick:function(e){return g(Object.assign({},p,{listState:l.filter((function(t){return t[m]===e.target.name})),filterType:e.target.name}))}},a)})),p.filterType?n.createElement(i.Z.Item,{onClick:function(){g(Object.assign({},p,{listState:l,filterType:null}))}},"Clear Filters"):null),p.listState.length," Items",n.createElement("hr",null)):null,1!==p.pno?n.createElement(n.Fragment,null,n.createElement("h6",{className:"text-primary"},"Page ",p.pno),n.createElement("hr",null),n.createElement("br",null)):null,p.listState&&p.listState.slice((p.pno-1)*t,(p.pno-1)*t+t).map(r),n.createElement("nav",{"aria-label":"Page navigation example"},n.createElement("ul",{className:"pagination justify-content-center"},n.createElement("li",{className:"page-item "+(1===p.pno?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){c(),g(Object.assign({},p,{pno:p.pno-1}))}},n.createElement("i",{className:"fa pt-0 mr-2 fa-angle-double-left"})," Previous")),p.listState&&(0,a.Z)(Array(Math.ceil(p.listState.length/t))).map((function(e,t){return n.createElement("li",{className:"page-item "+(p.pno===t+1?"active":""),key:t},n.createElement("button",{className:"page-link","data-toggle":"tooltip",onClick:function(){c(),g(Object.assign({},p,{pno:t+1}))},title:"Page "+(t+1)},t+1))})),n.createElement("li",{className:"page-item "+(p.listState&&p.pno===Math.ceil(p.listState.length/t)?"disabled":"")},n.createElement("button",{className:"page-link",onClick:function(){c(),g(Object.assign({},p,{pno:p.pno+1}))}},"Next ",n.createElement("i",{className:"fa pt-0 ml-2 fa-angle-double-right"}))))))}},9599:function(e,t,l){l.r(t);var a=l(7294),n=l(5111),i=l(262),c=l(1597),r=l(11),s=l(5995),m=l(1365);t.default=function(e){var t=e.pathname,l=e.data,o=e.uri,u=l.sigDetails,p=l.sigProjects;return a.createElement(n.Z,{location:t&&t.location},a.createElement(i.Z,{title:u.name}),a.createElement("main",{className:"page blog-post-list"},a.createElement("section",{className:"clean-block clean-blog-list dark"},a.createElement("div",{className:"container"},a.createElement("div",{className:"block-heading"},a.createElement(c.rU,{to:"/sigs/"+u.name.toLowerCase()},a.createElement("img",{alt:u.name,className:"sig-logo",src:u.logo.localFile.childImageSharp.fixed.srcWebp,style:{maxWidth:"200px"}})),a.createElement("p",null,u.description)),a.createElement("div",{className:"block-content"},a.createElement(s.Z,{item:function(e,t){return a.createElement("div",{className:"clean-blog-post",key:t},a.createElement("div",{className:"row"},a.createElement("div",{className:"col-lg-12"},a.createElement("h3",null,e.authors&&e.url?a.createElement(c.rU,{to:"/projects/"+(0,r.ub)(e.title)},e.title):e.title),e.label?a.createElement("div",{className:"badge badge-primary"},e.label):null,e.authors.length?a.createElement("div",{className:"info"},a.createElement("span",{className:"text-muted"},"By",(0,r.bC)(e.authors,""))):null,a.createElement("p",null," ",e.description," "))))},list:p.nodes,max:10}))))),a.createElement(m.Z,{currentRoute:o}))}}}]);
//# sourceMappingURL=component---src-templates-sig-page-js-9355a628efd006563c7e.js.map