"use strict";(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[736],{4501:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.url,r=e.customClass;return t?t&&"github.com"===new URL(t).hostname?a.createElement("a",{className:"btn btn-outline-dark "+r,href:t,rel:"noreferrer",target:"_blank"},a.createElement("i",{className:"fa fa-github"})," Repository URL"):a.createElement("a",{className:"btn btn-outline-dark "+r,href:t,rel:"noreferrer",target:"_blank"},a.createElement("i",{className:"fa fa-link"})," Project Link"):null}},3725:function(e,t,r){var a=r(7294),l=r(3806),n=r(7363);t.Z=function(e){var t=e.location,r=e.children,c=e.showFooter,o=void 0===c||c,s=e.uri;return a.createElement(n.Z,{location:t,showFooter:o},a.createElement("main",{className:"page blog-post-list"},a.createElement("section",{className:"clean-block clean-blog-list dark"},a.createElement("div",{className:"container"},r))),a.createElement(l.Z,{currentRoute:s}))}},4792:function(e,t,r){r.r(t);var a=r(1597),l=r(7294),n=r(615),c=r(2142),o=r(3725),s=r(6889),m=r(396),i=r(4501),u=r(6806),p=r(3918);t.default=function(e){var t=e.data,r=e.pathname,E=e.uri,d=e.location;return l.createElement(o.Z,{location:r&&r.location,uri:E},l.createElement(n.Z,{title:t.projects.title+" @"+t.projects.sig.name}),l.createElement("div",{className:"block-heading row"},l.createElement("div",{className:"col-lg-9 col-md-9"},l.createElement("h2",{className:"text-primary",style:{paddingTop:"1em"}},t.projects.title),l.createElement("p",null,t.projects.description)),l.createElement("div",{className:"col-lg-3 col-md-3 text-right"},l.createElement(a.rU,{to:"/sig/"+t.projects.sig.name.toLowerCase()},t.projects.sig.logo?l.createElement(m.G,{alt:t.projects.sig.name,className:"sig-logo",image:(0,m.d)(t.projects.sig.logo.localFile),style:{maxWidth:"200px"}}):null))),l.createElement("div",{className:"block-content"},t.projects.label?l.createElement("div",{className:"mb-2 badge badge-primary"},t.projects.label):null,l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-6"},l.createElement("h4",null,"Built by"),l.createElement("ul",null,t.projects.authors&&t.projects.authors.map((function(e){var t=e.name;return l.createElement("li",{key:t},l.createElement(a.rU,{to:"/member/"+(0,c.ub)(t)},t))})))),l.createElement("div",{className:"col-lg-6 text-right"},l.createElement(i.Z,{url:t.projects.url}))),t.projects.report?l.createElement(l.Fragment,null,l.createElement("hr",null),l.createElement("h1",{className:"text-bold text-primary"},"Detailed Project Report"),l.createElement("div",{className:"post-body mt-5"},l.createElement(s.D,{components:c.bp,remarkPlugins:[p.Z]},t.projects.report.content),l.createElement("span",{className:"mt-5"},"Written ",l.createElement("b",null,"on ",t.projects.report.date)),l.createElement("br",null),l.createElement(u.n,{author:t.projects.authors,title:"Detailed report: "+t.projects.title+" from "+t.projects.sig.name+" IET NITK",url:d.href}))):l.createElement(u.n,{author:t.projects.authors,title:t.projects.title+", from "+t.projects.sig.name+" IET NITK",url:d.href})))}}}]);
//# sourceMappingURL=component---src-templates-projects-page-js-b21ab9438683411e42e3.js.map