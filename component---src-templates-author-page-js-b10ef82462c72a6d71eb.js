(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[71],{6894:function(e,t,a){"use strict";a.r(t);var l=a(7294),c=a(1974),n=a(3751),r=a(5444),m=a(516),s=a(4276),i=a(9474),o=a(9871),d=function(e){e.articles;var t=e.element,a=e.index;return l.createElement("div",{key:a,className:"clean-blog-post",style:{paddingBottom:"35px"}},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("h3",null,l.createElement(r.rU,{className:"btn-link",to:"/blog/"+t.route},t.title)),l.createElement("div",{className:"info"},l.createElement("span",{className:"text-muted"},"By",(0,m.u)(t.authors,""),l.createElement("br",null),t.birthTime)),l.createElement("p",null," ",t.excerpt," "))))},E=function(e){var t=e.title,a=(e.SIG,e.description),c=e.authors,n=(e.ongoing,e.year),s=e.label,i=e.sig,o=e.url;return l.createElement("div",{className:"clean-blog-post",style:{paddingBottom:"35px"}},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("h3",null,o?l.createElement(r.rU,{to:"/projects/"+t.toLowerCase().split(" ").join("")},t," ",n?"("+n+")":null):l.createElement(l.Fragment,null,t," ",n?"("+n+")":null)),s?l.createElement("div",{className:"badge badge-primary mr-2"},s):null,i?l.createElement(r.rU,{to:"/sigs/"+i.name.toLowerCase(),className:"badge badge-info text-uppercase"},i.name):null,l.createElement("div",{className:"info"},l.createElement("span",{className:"text-muted"},"By",(0,m.u)(c,""))),l.createElement("p",null," ",a," "))))};t.default=function(e){var t=e.data,a=e.location,r=e.uri,m=t.member_details,u=t.member_projects,p=t.member_articles;return l.createElement(c.Z,{location:a.pathname},l.createElement(n.Z,{title:"About "+m.name}),l.createElement("main",{className:"page blog-post-list"},l.createElement("section",{className:"clean-block clean-blog-list dark"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"block-content"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-3 col-md-3 col-sm-12"},l.createElement("div",{className:"card"},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"text-center mt-4"},l.createElement("div",{class:"text-center"},m.image?l.createElement("img",{src:"https://drive.google.com/thumbnail?id="+new URL(m.image).searchParams.get("id"),class:"img-fluid rounded  mb-5",alt:m.name}):null),l.createElement("h5",{className:"text-primary"},m.name),l.createElement("h6",null,m.position),l.createElement("p",null,m.social&&m.social.email?l.createElement(s.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:function(e){return l.createElement(i.Z,e,m.social.email.replace("@"," [at] ").split(".").join(" [dot] "))}},l.createElement("i",{className:"fa fa-envelope text-primary"})):null,m.social&&m.social.facebook?l.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.facebook.com/"+m.social.facebook}," ",l.createElement("i",{className:"fa fa-facebook"})):null,m.social&&m.social.linkedin?l.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.linkedin.com/in/"+m.social.linkedin}," ",l.createElement("i",{className:"fa fa-linkedin"})):null,m.social&&m.social.github?l.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.github.com/"+m.social.github}," ",l.createElement("i",{className:"fa fa-github"})):null))))),l.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12"},l.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"card-title"},l.createElement("h4",null,"Projects")),u.nodes.map((function(e,t){return l.createElement(E,e)})))),l.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"card-title"},l.createElement("h4",null,"Blog Articles")),p.nodes.map((function(e,t){return l.createElement(d,{element:e,index:t})})))),l.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"card-title"},l.createElement("h4",null,"Project Reports")))))))))),l.createElement(o.Z,{currentRoute:r}))}}}]);
//# sourceMappingURL=component---src-templates-author-page-js-b10ef82462c72a6d71eb.js.map