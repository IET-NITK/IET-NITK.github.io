(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[678],{8305:function(e,t,a){"use strict";a.d(t,{k:function(){return l}});var n=a(7294),r=a(5444),l=function(e){var t=e.hide_link;return n.createElement(r.i1,{query:"766751037",render:function(e){var a=e.sigs;return n.createElement("div",{className:"row justify-content-center"},a.nodes.map((function(e,a){return n.createElement("div",{key:a,className:"col-md-5 col-lg-4",style:{marginBottom:"1em"}},n.createElement("div",{className:"clean-pricing-item",style:{height:"100%"}},n.createElement("div",{style:{width:"100%"}},n.createElement("img",{alt:"",src:e.logo.childImageSharp.fixed.srcWebp,style:{width:"150px",height:"auto!important",display:"block",marginLeft:"auto",marginRight:"auto"}})),n.createElement("p",null,e.description),!1===e.no_link&&!1!==t?n.createElement(n.Fragment,null,n.createElement(r.rU,{to:"sigs/"+e.name.toLowerCase(),className:"btn btn-outline-primary btn-block"},"Read More")):null))})))}})}},516:function(e,t,a){"use strict";a.d(t,{u:function(){return l},Qz:function(){return c},Ov:function(){return s},f9:function(){return m},VD:function(){return o},sZ:function(){return i}});var n=a(5444),r=a(7294),l=function(e,t){return e.map((function(a,l){var c=a.name;return r.createElement(r.Fragment,null," ",r.createElement(n.rU,{className:t,key:"x"+l,to:"/members/"+c.toLowerCase().split(" ").join("")},c),l+2===e.length?" and":l+1!==e.length?",":"")}))},c=function(e,t){return e.map((function(e,t){var a=e.name;return r.createElement(r.Fragment,null,r.createElement(n.rU,{className:"pr-3",key:"x"+t,to:"/members/"+a.toLowerCase().split(" ").join(""),style:{display:"inline-block"}},r.createElement("span",{class:"project-auther-name"}," ",a," ")),"")}))},s=function(e,t){return void 0===t&&(t=100),null!=e&&e.length>=t?e.substring(0,t)+"...":e},m=function(e,t){return e.map((function(t,a){var l=t.name;return r.createElement(r.Fragment,null," ",r.createElement(n.rU,{key:"x"+a,to:"/members/"+l.toLowerCase().split(" ").join("")},l),a+2===e.length?" and":a+1!==e.length?",":"")}))},o=function(e){return e.toLowerCase().replace(/^\w|\s\w/g,(function(e){return e.toUpperCase()}))};function i(e,t){var a=new Array(t),n=e.length,r=new Array(n);if(t>n)throw new RangeError("getRandom: more elements taken than available");for(;t--;){var l=Math.floor(Math.random()*n);a[t]=e[l in r?r[l]:l],r[l]=--n in r?r[n]:n}return a}},2354:function(e,t,a){"use strict";a.r(t),a.d(t,{default:function(){return E}});var n=a(7294),r=a(5444),l=a(1974),c=a(3751),s=a.p+"static/iet-upview-61ab8dd7affb661c7a6c2dd1915bdd68.jpg",m=a(516),o=a.p+"static/home-bf28d28f65bca328689ce0938db0011a.mp4",i=a(8305),d=a(4248),u=a.n(d),E=function(e){var t=e.location,a=e.data;return n.createElement(l.Z,{location:t.pathname,title:"Main"},n.createElement(c.Z,{title:"We are IET NITK"}),n.createElement("main",{className:"page landing-page"},n.createElement("div",{className:"video-overlay-wrap"},n.createElement("div",{id:"video-overlay",style:{width:"100%",height:"100vh",position:"absolute",zIndex:2}}),n.createElement("video",{loop:!0,style:{width:"100%",zIndex:"1",backgroundColor:"black"},autoPlay:!0,muted:!0,id:"hero-video"},n.createElement("source",{src:o,type:"video/mp4"}),"Your browser does not support HTML video.")),n.createElement("section",{className:"clean-block about-us",id:"about-us"},n.createElement("div",{className:"container"},n.createElement("div",{className:"block-heading mobile-marginx2"},n.createElement("h2",{className:"text-primary"},"Who are we?")),n.createElement("div",{className:"row"},n.createElement("div",{className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},n.createElement("img",{alt:"IET",src:s,style:{width:"100%",height:"auto",paddingBottom:"1em"}})),n.createElement(u(),{skipHtml:!0,className:"col-lg-6 col-md-6 col-sm-12 col-xs-12"},a.about.main)))),n.createElement("section",{className:"clean-block about-us"},n.createElement("div",{className:"container"},n.createElement("div",{className:"block-heading"},n.createElement("h2",{className:"text-primary"},"Our SIGs"),n.createElement("p",null,"IET NITK consists of three different Special Interest Groups:")),n.createElement(i.k,null))),n.createElement("section",{className:"clean-block about-us"},n.createElement("div",{className:"container"},n.createElement("div",{className:"article-list"},n.createElement("div",{className:"container"},n.createElement("div",{className:"intro"},n.createElement("h2",{className:"text-primary text-center",style:{fontWeight:"500"}},"Latest Articles"),n.createElement("p",{className:"text-center"},"We love to write! Check out more of our stuff on"," ",n.createElement(r.rU,{to:"/blog"},"the IET Blog"))),n.createElement("div",{className:"row",style:{paddingTop:"2em"}},a.blog.nodes.map((function(e,t){var a=e.header.childImageSharp&&e.header.childImageSharp.fixed.srcWebp;return a||(a=e.header.publicURL),n.createElement("div",{key:t,className:"col-sm-6 col-md-4 item h-100"},n.createElement("div",{className:"card clean-blog-card"},n.createElement("img",{alt:e.title,className:"card-img-top w-100 d-block",src:a}),n.createElement("div",{className:"card-body"},n.createElement("h4",{className:"card-title"},e.title),n.createElement("h6",{className:"text-muted card-subtitle mb-2"},n.createElement("footer",{className:"blockquote-footer"},(0,m.u)(e.authors||[],""),", ",e.date))),n.createElement("div",{className:"clean-blog-footer"},n.createElement(r.rU,{className:"btn btn-sm",style:{textDecoration:"none"},to:"blog/"+e.route},"Read More"))))}))))))),n.createElement("section",{className:"clean-block about-us"},n.createElement("div",{className:"container"},n.createElement("div",{className:"article-list"},n.createElement("div",{className:"container"},n.createElement("div",{className:"intro"},n.createElement("h2",{className:"text-primary text-center",style:{fontWeight:"500",paddingBottom:"-1em"}},"Our Projects"),n.createElement("p",{className:"text-center"},"We love doing our projects! Find more"," ",n.createElement(r.rU,{to:"/projects"},"here"))),n.createElement("div",{className:"articles row",style:{paddingTop:"2em"}},(0,m.sZ)(a.projects.nodes,4).map((function(e,t){return n.createElement("div",{key:t,className:"col-lg-6 col-md-6 mt-4"},n.createElement("div",{className:"card h-100 clean-card"},n.createElement("div",{className:"card-body"},n.createElement("h6",{className:"card-title"},e.url?n.createElement(r.rU,{to:"/projects/"+e.title.toLowerCase().split(" ").join(""),className:"card-link text-capitalize"},e.title):e.title),e.sig?n.createElement(r.rU,{to:"/sigs/"+e.sig.name.toLowerCase(),className:"badge badge-info text-uppercase mr-2"},e.sig.name):null,e.label?n.createElement("div",{className:"badge badge-primary "},e.label):null,n.createElement("div",{className:"mb-3"},n.createElement("div",{className:"text-muted"},(0,m.Ov)(e.description,100))),n.createElement("div",{className:"card-text"},(0,m.Qz)(e.authors||[],"")))))}))))))),n.createElement("section",{className:"clean-block about-us"},n.createElement("div",{className:"container"},n.createElement("div",{className:"article-list"},n.createElement("div",{className:"container"},n.createElement("div",{className:"articles row",style:{paddingTop:"2em"}},n.createElement("div",{className:"col-lg-6 col-md-6 mt-4"},n.createElement("div",{className:"intro"},n.createElement("h2",{className:"text-primary text-center",style:{fontWeight:"500",paddingBottom:"-1em"}},"Our Events"),n.createElement("p",{className:"text-center"},"Our latest event was ",a.events.nodes[0].title,", but we conduct many events throughout the year. Find more"," ",n.createElement(r.rU,{to:"/events"},"here")))),n.createElement("div",{className:"col-lg-6 col-md-6 mt-4"},n.createElement("div",{className:"card h-100 clean-card"},n.createElement("div",{className:"card-body"},n.createElement("h6",{className:"card-title"},n.createElement(r.rU,{to:"/events/"+a.events.nodes[0].route,className:"card-link text-capitalize"},a.events.nodes[0].title)),n.createElement("div",{className:"text-muted card-subtitle"},a.events.nodes[0].date),n.createElement("p",{className:"card-text"},a.events.nodes[0].excerpt)))))))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-0f53054b57965e5e91c9.js.map