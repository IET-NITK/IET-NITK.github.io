(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[71],{516:function(e,t,a){"use strict";a.d(t,{u:function(){return r},f9:function(){return c},VD:function(){return m}});var l=a(5444),n=a(7294),r=function(e,t){return e.map((function(t,a){var r=t.name;return n.createElement(n.Fragment,null," ",n.createElement(l.rU,{key:"x"+a,to:"/members/"+r.toLowerCase().split(" ").join("")},r),a+2===e.length?" and":a+1!==e.length?",":"")}))},c=function(e,t){return e.map((function(t,a){var r=t.name;return n.createElement(n.Fragment,null," ",n.createElement(l.rU,{key:"x"+a,to:"/members/"+r.toLowerCase().split(" ").join("")},r),a+2===e.length?" and":a+1!==e.length?",":"")}))},m=function(e){return e.toLowerCase().replace(/^\w|\s\w/g,(function(e){return e.toUpperCase()}))}},6894:function(e,t,a){"use strict";a.r(t);var l=a(7294),n=a(1974),r=a(3751),c=a(5444),m=a(516),s=a(4276),o=a(9474),i=function(e){e.articles;var t=e.element,a=e.index;return l.createElement("div",{key:a,className:"clean-blog-post",style:{paddingBottom:"35px"}},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("h3",null,l.createElement(c.rU,{className:"btn-link",to:"/blog/"+t.route},t.title)),l.createElement("div",{className:"info"},l.createElement("span",{className:"text-muted"},"By",(0,m.u)(t.authors,""),l.createElement("br",null),t.birthTime)),l.createElement("p",null," ",t.excerpt," "))))},d=function(e){var t=e.title,a=(e.SIG,e.description),n=e.authors,r=(e.ongoing,e.year),s=e.label,o=e.sig,i=e.url;return l.createElement("div",{className:"clean-blog-post",style:{paddingBottom:"35px"}},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-12"},l.createElement("h3",null,i?l.createElement(c.rU,{to:"/projects/"+t.toLowerCase().split(" ").join("")},t," ",r?"("+r+")":null):l.createElement(l.Fragment,null,t," ",r?"("+r+")":null)),s?l.createElement("div",{className:"badge badge-primary mr-2"},s):null,o?l.createElement(c.rU,{to:"/sigs/"+o.name.toLowerCase(),className:"badge badge-info text-uppercase"},o.name):null,l.createElement("div",{className:"info"},l.createElement("span",{className:"text-muted"},"By",(0,m.u)(n,""))),l.createElement("p",null," ",a," "))))};t.default=function(e){var t=e.data,a=e.location,c=t.member_details,m=t.member_projects,u=t.member_articles;return l.createElement(n.Z,{location:a.pathname},l.createElement(r.Z,{title:"About "+c.name}),l.createElement("main",{className:"page blog-post-list"},l.createElement("section",{className:"clean-block clean-blog-list dark"},l.createElement("div",{className:"container-fluid"},l.createElement("div",{className:"block-content"},l.createElement("div",{className:"row"},l.createElement("div",{className:"col-lg-3 col-md-3 col-sm-12"},l.createElement("div",{className:"card"},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"text-center mt-4"},l.createElement("div",{class:"text-center"},c.image?l.createElement("img",{src:"https://drive.google.com/thumbnail?id="+new URL(c.image).searchParams.get("id"),class:"img-fluid rounded  mb-5",alt:c.name}):null),l.createElement("h5",{className:"text-primary"},c.name),l.createElement("h6",null,c.position),l.createElement("p",null,c.social&&c.social.email?l.createElement(s.Z,{placement:"bottom",delay:{show:250,hide:400},overlay:function(e){return l.createElement(o.Z,e,c.social.email.replace("@"," [at] ").split(".").join(" [dot] "))}},l.createElement("i",{className:"fa fa-envelope text-primary"})):null,c.social&&c.social.facebook?l.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.facebook.com/"+c.social.facebook}," ",l.createElement("i",{className:"fa fa-facebook"})):null,c.social&&c.social.linkedin?l.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.linkedin.com/in/"+c.social.linkedin}," ",l.createElement("i",{className:"fa fa-linkedin"})):null,c.social&&c.social.github?l.createElement("a",{target:"_blank",rel:"noreferrer",className:"mr-1 ml-1",href:"https://www.github.com/"+c.social.github}," ",l.createElement("i",{className:"fa fa-github"})):null))))),l.createElement("div",{className:"col-lg-9 col-md-9 col-sm-12"},l.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"card-title"},l.createElement("h4",null,"Projects")),m.nodes.map((function(e,t){return l.createElement(d,e)})))),l.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"card-title"},l.createElement("h4",null,"Blog Articles")),u.nodes.map((function(e,t){return l.createElement(i,{element:e,index:t})})))),l.createElement("div",{className:"card clean-blog-post mb-3",style:{paddingBottom:"10px"}},l.createElement("div",{className:"card-body"},l.createElement("div",{className:"card-title"},l.createElement("h4",null,"Project Reports")))))))))))}}}]);
//# sourceMappingURL=component---src-templates-author-page-js-b369b34180d8283e9158.js.map