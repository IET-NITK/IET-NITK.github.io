(self.webpackChunkietnitk=self.webpackChunkietnitk||[]).push([[989],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,n){var r=n(7228);e.exports=function(e){if(Array.isArray(e))return r(e)},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,n){var r=n(3646),o=n(6860),i=n(379),a=n(8206);e.exports=function(e){return r(e)||o(e)||i(e)||a()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,n){var r=n(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},9413:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(7154)),i=r(n(7316)),a=r(n(5354)),c=r(n(7294)),l=r(n(5697)),s=n(9462),u=(0,s.debounce)((function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})}),300,!1),d=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="ietnitk",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.loadInstance=function(){window.document.getElementById("dsq-count-scr")?u():(0,s.insertScript)("https://"+this.shortname+".disqus.com/count.js","dsq-count-scr",window.document.body)},n.cleanInstance=function(){(0,s.removeScript)("dsq-count-scr",window.document.body),window.DISQUSWIDGETS=void 0},n.render=function(){var e=this.props,t=e.config,n=e.placeholder,r=(0,i.default)(e,["config","placeholder"]);return c.default.createElement("span",(0,o.default)({className:"disqus-comment-count","data-disqus-identifier":t.identifier,"data-disqus-url":t.url},r,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentCount.jsx",lineNumber:53,columnNumber:7}}),n)},t}(c.default.Component);t.default=d,d.defaultProps={placeholder:"..."},d.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string}),placeholder:l.default.string}},6748:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(5354)),i=r(n(7294)),a=r(n(5697)),c=function(e){function t(){return e.apply(this,arguments)||this}(0,o.default)(t,e);var n=t.prototype;return n.getSrc=function(){return"https://embed.disqus.com/p/"+Number(this.props.commentId).toString(36)+"?p="+(this.props.showParentComment?"1":"0")+"&m="+(this.props.showMedia?"1":"0")},n.render=function(){return i.default.createElement("iframe",{src:this.getSrc(),width:this.props.width,height:this.props.height,seamless:"seamless",scrolling:"no",frameBorder:"0",__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/CommentEmbed.jsx",lineNumber:17,columnNumber:13}})},t}(i.default.Component);t.default=c,c.defaultProps={width:420,height:320,showMedia:!0,showParentComment:!0},c.propTypes={commentId:a.default.string.isRequired,width:a.default.number,height:a.default.number,showMedia:a.default.bool,showParentComment:a.default.bool}},4838:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.default=void 0;var o=r(n(7154)),i=r(n(7316)),a=r(n(5354)),c=r(n(7294)),l=r(n(5697)),s=n(9462),u=function(e){function t(t){var n;return(n=e.call(this,t)||this).shortname="ietnitk",n.embedUrl="https://"+n.shortname+".disqus.com/embed.js",n}(0,a.default)(t,e);var n=t.prototype;return n.componentDidMount=function(){this.loadInstance()},n.shouldComponentUpdate=function(e){return this.props!==e&&(0,s.shallowComparison)(this.props,e)},n.componentDidUpdate=function(){this.loadInstance()},n.componentWillUnmount=function(){this.cleanInstance()},n.getDisqusConfig=function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,this.language=e.language}},n.loadInstance=function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById("dsq-embed-scr")?this.reloadInstance():(0,s.insertScript)(this.embedUrl,"dsq-embed-scr",window.document.body))},n.reloadInstance=function(){window&&window.DISQUS&&window.DISQUS.reset({reload:!0})},n.cleanInstance=function(){(0,s.removeScript)("dsq-embed-scr",window.document.body);try{delete window.DISQUS}catch(n){window.DISQUS=void 0}var e=window.document.getElementById("disqus_thread");if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);if(window.document.querySelector('[id^="dsq-app"]')){var t=window.document.getElementById(window.document.querySelector('[id^="dsq-app"]').id);t.parentNode.removeChild(t)}},n.render=function(){var e=this.props,t=(e.config,(0,i.default)(e,["config"]));return c.default.createElement("div",(0,o.default)({id:"disqus_thread"},t,{__self:this,__source:{fileName:"/Users/brettstevenson/Desktop/Folder/gatsby-plugin-workspace/gatsby-plugin-disqus/src/components/Disqus.jsx",lineNumber:86,columnNumber:7}}))},t}(c.default.Component);t.default=u,u.propTypes={config:l.default.shape({identifier:l.default.string,title:l.default.string,url:l.default.string,language:l.default.string,remoteAuthS3:l.default.string,apiKey:l.default.string})}},4332:function(e,t,n){"use strict";var r=n(5318);var o=r(n(4838));t.h$=o.default,r(n(9413)).default,r(n(6748)).default,o.default},9462:function(e,t,n){"use strict";var r=n(5318);t.__esModule=!0,t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,a=function(){r=null,n||e.apply(o,i)},c=n&&!r;window.clearTimeout(r),r=setTimeout(a,t),c&&e.apply(o,i)}},t.isReactElement=a,t.shallowComparison=function e(t,n){var r,i=new Set(Object.keys(t).concat(Object.keys(n)));return 0!==(r=[]).concat.apply(r,(0,o.default)(i)).filter((function(r){if("object"==typeof t[r]){if(e(t[r],n[r]))return!0}else if(t[r]!==n[r]&&!a(t[r]))return!0})).length};var o=r(n(319)),i=r(n(7294));function a(e){return!!i.default.isValidElement(e)||!!Array.isArray(e)&&e.some((function(e){return i.default.isValidElement(e)}))}},516:function(e,t,n){"use strict";n.d(t,{Vt:function(){return i},u:function(){return a},f9:function(){return c}});var r=n(5444),o=n(7294),i=function(e){var t={};return e&&e.forEach((function(e){t[e.name]=e.childImageSharp.fixed.srcWebp})),t},a=function(e,t){return e.map((function(t,n){return o.createElement(o.Fragment,null," ",o.createElement(r.rU,{key:"x"+n,to:"/members/"+t.toLowerCase().split(" ").join("")},t),n+2===e.length?" and":n+1!==e.length?",":"")}))},c=function(e,t){return e.map((function(t,n){var i=t.name;return o.createElement(o.Fragment,null," ",o.createElement(r.rU,{key:"x"+n,to:"/members/"+i.toLowerCase().split(" ").join("")},i),n+2===e.length?" and":n+1!==e.length?",":"")}))}},9082:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return $}});var r,o=n(7294),i=n(1974),a=n(5444),c=n(4332),l=n(516),s=n(3751),u=(r=function(e,t){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)},function(e,t){function n(){this.constructor=e}r(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}),d=function(e){function t(t){var n=e.call(this,t)||this;return n.name="AssertionError",n}return u(t,e),t}(Error);function p(e,t){if(!e)throw new d(t)}function f(e){var t=Object.entries(e).filter((function(e){var t=e[1];return null!=t})).map((function(e){var t=e[0],n=e[1];return encodeURIComponent(t)+"="+encodeURIComponent(String(n))}));return t.length>0?"?"+t.join("&"):""}var m=n(5900),h=n.n(m),w=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),b=function(){return(b=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},y=function(e,t,n,r){return new(n||(n=Promise))((function(o,i){function a(e){try{l(r.next(e))}catch(t){i(t)}}function c(e){try{l(r.throw(e))}catch(t){i(t)}}function l(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(a,c)}l((r=r.apply(e,t||[])).next())}))},g=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function c(i){return function(c){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=a.trys,(o=o.length>0&&o[o.length-1])||6!==i[0]&&2!==i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(c){i=[6,c],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,c])}}},v=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n},k=function(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"function"==typeof e.then},E=function(e,t){return{left:window.outerWidth/2+(window.screenX||window.screenLeft||0)-e/2,top:window.outerHeight/2+(window.screenY||window.screenTop||0)-t/2}},S=function(e,t){return{top:(window.screen.height-t)/2,left:(window.screen.width-e)/2}};function C(e,t,n){var r=t.height,o=t.width,i=v(t,["height","width"]),a=b({height:r,width:o,location:"no",toolbar:"no",status:"no",directories:"no",menubar:"no",scrollbars:"yes",resizable:"no",centerscreen:"yes",chrome:"yes"},i),c=window.open(e,"",Object.keys(a).map((function(e){return e+"="+a[e]})).join(", "));if(n)var l=window.setInterval((function(){try{(null===c||c.closed)&&(window.clearInterval(l),n(c))}catch(e){console.error(e)}}),1e3);return c}var _=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.openShareDialog=function(e){var n=t.props,r=n.onShareWindowClose,o=n.windowHeight,i=void 0===o?400:o,a=n.windowPosition,c=void 0===a?"windowCenter":a,l=n.windowWidth,s=void 0===l?550:l;C(e,b({height:i,width:s},"windowCenter"===c?E(s,i):S(s,i)),r)},t.handleClick=function(e){return y(t,void 0,void 0,(function(){var t,n,r,o,i,a,c,l,s,u;return g(this,(function(d){switch(d.label){case 0:return t=this.props,n=t.beforeOnClick,r=t.disabled,o=t.networkLink,i=t.onClick,a=t.url,c=t.openShareDialogOnClick,l=t.opts,s=o(a,l),r?[2]:(e.preventDefault(),n?(u=n(),k(u)?[4,u]:[3,2]):[3,2]);case 1:d.sent(),d.label=2;case 2:return c&&this.openShareDialog(s),i&&i(e,s),[2]}}))}))},t}return w(t,e),t.prototype.render=function(){var e=this.props,t=(e.beforeOnClick,e.children),n=e.className,r=e.disabled,i=e.disabledStyle,a=e.forwardedRef,c=(e.networkLink,e.networkName),l=(e.onShareWindowClose,e.openShareDialogOnClick,e.opts,e.resetButtonStyle),s=e.style,u=(e.url,e.windowHeight,e.windowPosition,e.windowWidth,v(e,["beforeOnClick","children","className","disabled","disabledStyle","forwardedRef","networkLink","networkName","onShareWindowClose","openShareDialogOnClick","opts","resetButtonStyle","style","url","windowHeight","windowPosition","windowWidth"])),d=h()("react-share__ShareButton",{"react-share__ShareButton--disabled":!!r,disabled:!!r},n),p=b(b(l?{backgroundColor:"transparent",border:"none",padding:0,font:"inherit",color:"inherit",cursor:"pointer"}:{},s),r&&i);return o.createElement("button",b({},u,{"aria-label":u["aria-label"]||c,className:d,onClick:this.handleClick,ref:a,style:p}),t)},t.defaultProps={disabledStyle:{opacity:.6},openShareDialogOnClick:!0,resetButtonStyle:!0},t}(o.Component),O=function(){return(O=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};var j=function(e,t,n,r){function i(i,a){var c=n(i),l=O({},i);return Object.keys(c).forEach((function(e){delete l[e]})),o.createElement(_,O({},r,l,{forwardedRef:a,networkName:e,networkLink:t,opts:n(i)}))}return i.displayName="ShareButton-"+e,(0,o.forwardRef)(i)};var x=j("twitter",(function(e,t){var n=t.title,r=t.via,o=t.hashtags,i=void 0===o?[]:o,a=t.related,c=void 0===a?[]:a;return p(e,"twitter.url"),p(Array.isArray(i),"twitter.hashtags is not an array"),p(Array.isArray(c),"twitter.related is not an array"),"https://twitter.com/share"+f({url:e,text:n,via:r,hashtags:i.length>0?i.join(","):void 0,related:c.length>0?c.join(","):void 0})}),(function(e){return{hashtags:e.hashtags,title:e.title,via:e.via,related:e.related}}),{windowWidth:550,windowHeight:400}),M=function(){return(M=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},N=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};function I(e){var t=function(t){var n=t.bgStyle,r=t.borderRadius,i=t.iconFillColor,a=t.round,c=t.size,l=N(t,["bgStyle","borderRadius","iconFillColor","round","size"]);return o.createElement("svg",M({viewBox:"0 0 64 64",width:c,height:c},l),a?o.createElement("circle",{cx:"32",cy:"32",r:"31",fill:e.color,style:n}):o.createElement("rect",{width:"64",height:"64",rx:r,ry:r,fill:e.color,style:n}),o.createElement("path",{d:e.path,fill:i}))};return t.defaultProps={bgStyle:{},borderRadius:0,iconFillColor:"white",size:64},t}var R=I({color:"#00aced",networkName:"twitter",path:"M48,22.1c-1.2,0.5-2.4,0.9-3.8,1c1.4-0.8,2.4-2.1,2.9-3.6c-1.3,0.8-2.7,1.3-4.2,1.6 C41.7,19.8,40,19,38.2,19c-3.6,0-6.6,2.9-6.6,6.6c0,0.5,0.1,1,0.2,1.5c-5.5-0.3-10.3-2.9-13.5-6.9c-0.6,1-0.9,2.1-0.9,3.3 c0,2.3,1.2,4.3,2.9,5.5c-1.1,0-2.1-0.3-3-0.8c0,0,0,0.1,0,0.1c0,3.2,2.3,5.8,5.3,6.4c-0.6,0.1-1.1,0.2-1.7,0.2c-0.4,0-0.8,0-1.2-0.1 c0.8,2.6,3.3,4.5,6.1,4.6c-2.2,1.8-5.1,2.8-8.2,2.8c-0.5,0-1.1,0-1.6-0.1c2.9,1.9,6.4,2.9,10.1,2.9c12.1,0,18.7-10,18.7-18.7 c0-0.3,0-0.6,0-0.8C46,24.5,47.1,23.4,48,22.1z"});var q=j("linkedin",(function(e,t){var n=t.title,r=t.summary,o=t.source;return p(e,"linkedin.url"),"https://linkedin.com/shareArticle"+f({url:e,mini:"true",title:n,summary:r,source:o})}),(function(e){return{title:e.title,summary:e.summary,source:e.source}}),{windowWidth:750,windowHeight:600}),D=I({color:"#007fb1",networkName:"linkedin",path:"M20.4,44h5.4V26.6h-5.4V44z M23.1,18c-1.7,0-3.1,1.4-3.1,3.1c0,1.7,1.4,3.1,3.1,3.1 c1.7,0,3.1-1.4,3.1-3.1C26.2,19.4,24.8,18,23.1,18z M39.5,26.2c-2.6,0-4.4,1.4-5.1,2.8h-0.1v-2.4h-5.2V44h5.4v-8.6 c0-2.3,0.4-4.5,3.2-4.5c2.8,0,2.8,2.6,2.8,4.6V44H46v-9.5C46,29.8,45,26.2,39.5,26.2z"});var P=j("facebook",(function(e,t){var n=t.quote,r=t.hashtag;return p(e,"facebook.url"),"https://www.facebook.com/sharer/sharer.php"+f({u:e,quote:n,hashtag:r})}),(function(e){return{quote:e.quote,hashtag:e.hashtag}}),{windowWidth:550,windowHeight:400}),U=I({color:"#3b5998",networkName:"facebook",path:"M34.1,47V33.3h4.6l0.7-5.3h-5.3v-3.4c0-1.5,0.4-2.6,2.6-2.6l2.8,0v-4.8c-0.5-0.1-2.2-0.2-4.1-0.2 c-4.1,0-6.9,2.5-6.9,7V28H24v5.3h4.6V47H34.1z"});var A=j("pinterest",(function(e,t){var n=t.media,r=t.description;return p(e,"pinterest.url"),p(n,"pinterest.media"),"https://pinterest.com/pin/create/button/"+f({url:e,media:n,description:r})}),(function(e){return{media:e.media,description:e.description}}),{windowWidth:1e3,windowHeight:730}),W=I({color:"#cb2128",networkName:"pinterest",path:"M32,16c-8.8,0-16,7.2-16,16c0,6.6,3.9,12.2,9.6,14.7c0-1.1,0-2.5,0.3-3.7 c0.3-1.3,2.1-8.7,2.1-8.7s-0.5-1-0.5-2.5c0-2.4,1.4-4.1,3.1-4.1c1.5,0,2.2,1.1,2.2,2.4c0,1.5-0.9,3.7-1.4,5.7 c-0.4,1.7,0.9,3.1,2.5,3.1c3,0,5.1-3.9,5.1-8.5c0-3.5-2.4-6.1-6.7-6.1c-4.9,0-7.9,3.6-7.9,7.7c0,1.4,0.4,2.4,1.1,3.1 c0.3,0.3,0.3,0.5,0.2,0.9c-0.1,0.3-0.3,1-0.3,1.3c-0.1,0.4-0.4,0.6-0.8,0.4c-2.2-0.9-3.3-3.4-3.3-6.1c0-4.5,3.8-10,11.4-10 c6.1,0,10.1,4.4,10.1,9.2c0,6.3-3.5,11-8.6,11c-1.7,0-3.4-0.9-3.9-2c0,0-0.9,3.7-1.1,4.4c-0.3,1.2-1,2.5-1.6,3.4 c1.4,0.4,3,0.7,4.5,0.7c8.8,0,16-7.2,16-16C48,23.2,40.8,16,32,16z"});var z=j("whatsapp",(function(e,t){var n=t.title,r=t.separator;return p(e,"whatsapp.url"),"https://"+(/(android|iphone|ipad|mobile)/i.test(navigator.userAgent)?"api":"web")+".whatsapp.com/send"+f({text:n?n+r+e:e})}),(function(e){return{title:e.title,separator:e.separator||" "}}),{windowWidth:550,windowHeight:400}),H=I({color:"#25D366",networkName:"whatsapp",path:"m42.32286,33.93287c-0.5178,-0.2589 -3.04726,-1.49644 -3.52105,-1.66732c-0.4712,-0.17346 -0.81554,-0.2589 -1.15987,0.2589c-0.34175,0.51004 -1.33075,1.66474 -1.63108,2.00648c-0.30032,0.33658 -0.60064,0.36247 -1.11327,0.12945c-0.5178,-0.2589 -2.17994,-0.80259 -4.14759,-2.56312c-1.53269,-1.37217 -2.56312,-3.05503 -2.86603,-3.57283c-0.30033,-0.5178 -0.03366,-0.80259 0.22524,-1.06149c0.23301,-0.23301 0.5178,-0.59547 0.7767,-0.90616c0.25372,-0.31068 0.33657,-0.5178 0.51262,-0.85437c0.17088,-0.36246 0.08544,-0.64725 -0.04402,-0.90615c-0.12945,-0.2589 -1.15987,-2.79613 -1.58964,-3.80584c-0.41424,-1.00971 -0.84142,-0.88027 -1.15987,-0.88027c-0.29773,-0.02588 -0.64208,-0.02588 -0.98382,-0.02588c-0.34693,0 -0.90616,0.12945 -1.37736,0.62136c-0.4712,0.5178 -1.80194,1.76053 -1.80194,4.27186c0,2.51134 1.84596,4.945 2.10227,5.30747c0.2589,0.33657 3.63497,5.51458 8.80262,7.74113c1.23237,0.5178 2.1903,0.82848 2.94111,1.08738c1.23237,0.38836 2.35599,0.33657 3.24402,0.20712c0.99159,-0.15534 3.04985,-1.24272 3.47963,-2.45956c0.44013,-1.21683 0.44013,-2.22654 0.31068,-2.45955c-0.12945,-0.23301 -0.46601,-0.36247 -0.98382,-0.59548m-9.40068,12.84407l-0.02589,0c-3.05503,0 -6.08417,-0.82849 -8.72495,-2.38189l-0.62136,-0.37023l-6.47252,1.68286l1.73463,-6.29129l-0.41424,-0.64725c-1.70875,-2.71846 -2.6149,-5.85116 -2.6149,-9.07706c0,-9.39809 7.68934,-17.06155 17.15993,-17.06155c4.58253,0 8.88029,1.78642 12.11655,5.02268c3.23625,3.21036 5.02267,7.50812 5.02267,12.06476c-0.0078,9.3981 -7.69712,17.06155 -17.14699,17.06155m14.58906,-31.58846c-3.93529,-3.80584 -9.1133,-5.95471 -14.62789,-5.95471c-11.36055,0 -20.60848,9.2065 -20.61625,20.52564c0,3.61684 0.94757,7.14565 2.75211,10.26282l-2.92557,10.63564l10.93337,-2.85309c3.0136,1.63108 6.4052,2.4958 9.85634,2.49839l0.01037,0c11.36574,0 20.61884,-9.2091 20.62403,-20.53082c0,-5.48093 -2.14111,-10.64081 -6.03239,-14.51915"});var B=j("telegram",(function(e,t){var n=t.title;return p(e,"telegram.url"),"https://telegram.me/share/url"+f({url:e,text:n})}),(function(e){return{title:e.title}}),{windowWidth:550,windowHeight:400}),T=I({color:"#37aee2",networkName:"telegram",path:"m45.90873,15.44335c-0.6901,-0.0281 -1.37668,0.14048 -1.96142,0.41265c-0.84989,0.32661 -8.63939,3.33986 -16.5237,6.39174c-3.9685,1.53296 -7.93349,3.06593 -10.98537,4.24067c-3.05012,1.1765 -5.34694,2.05098 -5.4681,2.09312c-0.80775,0.28096 -1.89996,0.63566 -2.82712,1.72788c-0.23354,0.27218 -0.46884,0.62161 -0.58825,1.10275c-0.11941,0.48114 -0.06673,1.09222 0.16682,1.5716c0.46533,0.96052 1.25376,1.35737 2.18443,1.71383c3.09051,0.99037 6.28638,1.93508 8.93263,2.8236c0.97632,3.44171 1.91401,6.89571 2.84116,10.34268c0.30554,0.69185 0.97105,0.94823 1.65764,0.95525l-0.00351,0.03512c0,0 0.53908,0.05268 1.06412,-0.07375c0.52679,-0.12292 1.18879,-0.42846 1.79109,-0.99212c0.662,-0.62161 2.45836,-2.38812 3.47683,-3.38552l7.6736,5.66477l0.06146,0.03512c0,0 0.84989,0.59703 2.09312,0.68132c0.62161,0.04214 1.4399,-0.07726 2.14229,-0.59176c0.70766,-0.51626 1.1765,-1.34683 1.396,-2.29506c0.65673,-2.86224 5.00979,-23.57745 5.75257,-27.00686l-0.02107,0.08077c0.51977,-1.93157 0.32837,-3.70159 -0.87096,-4.74991c-0.60054,-0.52152 -1.2924,-0.7498 -1.98425,-0.77965l0,0.00176zm-0.2072,3.29069c0.04741,0.0439 0.0439,0.0439 0.00351,0.04741c-0.01229,-0.00351 0.14048,0.2072 -0.15804,1.32576l-0.01229,0.04214l-0.00878,0.03863c-0.75858,3.50668 -5.15554,24.40802 -5.74203,26.96472c-0.08077,0.34417 -0.11414,0.31959 -0.09482,0.29852c-0.1756,-0.02634 -0.50045,-0.16506 -0.52679,-0.1756l-13.13468,-9.70175c4.4988,-4.33199 9.09945,-8.25307 13.744,-12.43229c0.8218,-0.41265 0.68483,-1.68573 -0.29852,-1.70681c-1.04305,0.24584 -1.92279,0.99564 -2.8798,1.47502c-5.49971,3.2626 -11.11882,6.13186 -16.55882,9.49279c-2.792,-0.97105 -5.57873,-1.77704 -8.15298,-2.57601c2.2336,-0.89555 4.00889,-1.55579 5.75608,-2.23009c3.05188,-1.1765 7.01687,-2.7042 10.98537,-4.24067c7.94051,-3.06944 15.92667,-6.16346 16.62028,-6.43037l0.05619,-0.02283l0.05268,-0.02283c0.19316,-0.0878 0.30378,-0.09658 0.35471,-0.10009c0,0 -0.01756,-0.05795 -0.00351,-0.04566l-0.00176,0zm-20.91715,22.0638l2.16687,1.60145c-0.93418,0.91311 -1.81743,1.77353 -2.45485,2.38812l0.28798,-3.98957"});var V=j("reddit",(function(e,t){var n=t.title;return p(e,"reddit.url"),"https://www.reddit.com/submit"+f({url:e,title:n})}),(function(e){return{title:e.title}}),{windowWidth:660,windowHeight:460,windowPosition:"windowCenter"}),L=I({color:"#ff4500",networkName:"reddit",path:"m 52.8165,31.942362 c 0,-2.4803 -2.0264,-4.4965 -4.5169,-4.4965 -1.2155,0 -2.3171,0.4862 -3.128,1.2682 -3.077,-2.0247 -7.2403,-3.3133 -11.8507,-3.4782 l 2.5211,-7.9373 6.8272,1.5997 -0.0102,0.0986 c 0,2.0281 1.6575,3.6771 3.6958,3.6771 2.0366,0 3.6924,-1.649 3.6924,-3.6771 0,-2.0281 -1.6575,-3.6788 -3.6924,-3.6788 -1.564,0 -2.8968,0.9758 -3.4357,2.3443 l -7.3593,-1.7255 c -0.3213,-0.0782 -0.6477,0.1071 -0.748,0.4233 L 32,25.212062 c -4.8246,0.0578 -9.1953,1.3566 -12.41,3.4425 -0.8058,-0.7446 -1.8751,-1.2104 -3.0583,-1.2104 -2.4905,0 -4.5152,2.0179 -4.5152,4.4982 0,1.649 0.9061,3.0787 2.2389,3.8607 -0.0884,0.4794 -0.1462,0.9639 -0.1462,1.4569 0,6.6487 8.1736,12.0581 18.2223,12.0581 10.0487,0 18.224,-5.4094 18.224,-12.0581 0,-0.4658 -0.0493,-0.9248 -0.1275,-1.377 1.4144,-0.7599 2.3885,-2.2304 2.3885,-3.9406 z m -29.2808,3.0872 c 0,-1.4756 1.207,-2.6775 2.6894,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 -1.4824,0 -2.6894,-1.2002 -2.6894,-2.6758 z m 15.4037,7.9373 c -1.3549,1.3481 -3.4816,2.0043 -6.5008,2.0043 l -0.0221,-0.0051 -0.0221,0.0051 c -3.0209,0 -5.1476,-0.6562 -6.5008,-2.0043 -0.2465,-0.2448 -0.2465,-0.6443 0,-0.8891 0.2465,-0.2465 0.6477,-0.2465 0.8942,0 1.105,1.0999 2.9393,1.6337 5.6066,1.6337 l 0.0221,0.0051 0.0221,-0.0051 c 2.6673,0 4.5016,-0.5355 5.6066,-1.6354 0.2465,-0.2465 0.6477,-0.2448 0.8942,0 0.2465,0.2465 0.2465,0.6443 0,0.8908 z m -0.3213,-5.2615 c -1.4824,0 -2.6877,-1.2002 -2.6877,-2.6758 0,-1.4756 1.2053,-2.6775 2.6877,-2.6775 1.4824,0 2.6877,1.2019 2.6877,2.6775 0,1.4756 -1.2053,2.6758 -2.6877,2.6758 z"});var F=j("email",(function(e,t){var n=t.subject,r=t.body,o=t.separator;return"mailto:"+f({subject:n,body:r?r+o+e:e})}),(function(e){return{subject:e.subject,body:e.body,separator:e.separator||" "}}),{openShareDialogOnClick:!1,onClick:function(e,t){window.location.href=t}}),Q=I({color:"#7f7f7f",networkName:"email",path:"M17,22v20h30V22H17z M41.1,25L32,32.1L22.9,25H41.1z M20,39V26.6l12,9.3l12-9.3V39H20z"}),K=function(e){var t=e.url,n=e.title,r=e.author,i=e.category,a={url:t,title:n+" by "+r[0]},c={size:32};return o.createElement("div",{className:"pt-4"},o.createElement(x,Object.assign({hashtags:i},a),o.createElement(R,c)),o.createElement(q,Object.assign({summary:n,source:t},a),o.createElement(D,c)),o.createElement(P,Object.assign({quote:n+" by Nirmal Khedkar",hashtag:"#"+i},a),o.createElement(U,c)),o.createElement(A,a,o.createElement(W,c)),o.createElement(z,a,o.createElement(H,c)),o.createElement(B,Object.assign({title:n+" by Nirmal Khedkar"},a),o.createElement(T,c)),o.createElement(V,a,o.createElement(L,c)),o.createElement(F,Object.assign({subject:"Check out this blog on nirmalhk7.tech",body:"I found this interesting blog article that you might like:"},a),o.createElement(Q,c)))},G=function(e){var t=e.post,n=e.isPrevious;return t?o.createElement("div",{className:"m-4"},o.createElement("b",null,!0===n?"Previous Post: ":"Next Up: ",o.createElement(a.rU,{to:"/blog/"+t.relativeDirectory},t.childMarkdownRemark.frontmatter.title)),o.createElement("div",{className:"post-info"},o.createElement("span",null,"By ",o.createElement("b",null,(0,l.u)(t.childMarkdownRemark.frontmatter.authors,""))),o.createElement("br",null),o.createElement("span",null,t.childMarkdownRemark.frontmatter.date)),t.childMarkdownRemark.excerpt):null},$=function(e){var t=e.data,n=e.location;return o.createElement(i.Z,null,o.createElement(s.Z,{title:t.post.childMarkdownRemark.frontmatter.title}),o.createElement("main",{className:"page blog-post"},o.createElement("section",{className:"clean-block clean-post dark"},o.createElement("div",{className:"container"},o.createElement("div",{className:"block-content"},!1===t.post.childMarkdownRemark.frontmatter.displayOnBlog?null:o.createElement(o.Fragment,null,o.createElement("div",{className:"post-image",style:{backgroundImage:"url('"+(t.post.childMarkdownRemark.frontmatter.image&&t.post.childMarkdownRemark.frontmatter.image.publicURL)+"')",backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"}})),o.createElement("div",{className:"post-body"},o.createElement("h3",{className:"pt-4"},t.post.childMarkdownRemark.frontmatter.title),o.createElement("div",{className:"post-info"},t.post.childMarkdownRemark.timeToRead," minute read",o.createElement("br",null),o.createElement("span",null,"By ",o.createElement("b",null,(0,l.u)(t.post.childMarkdownRemark.frontmatter.authors,""))),"-",o.createElement("span",null,t.post.childMarkdownRemark.frontmatter.date),o.createElement("br",null),o.createElement(K,{url:n.href,title:t.post.childMarkdownRemark.frontmatter.title,author:t.post.childMarkdownRemark.frontmatter.authors})),o.createElement("div",{dangerouslySetInnerHTML:{__html:t.post.childMarkdownRemark.html}}),o.createElement("span",null,"Written by ",o.createElement("b",null,(0,l.u)(t.post.childMarkdownRemark.frontmatter.authors,""),o.createElement("br",null),"on ",t.post.childMarkdownRemark.frontmatter.date)),o.createElement("br",null),o.createElement(K,{url:n.href,title:t.post.childMarkdownRemark.frontmatter.title,author:t.post.childMarkdownRemark.frontmatter.authors})),o.createElement("div",{className:"post-body pt-4 pb-4"},o.createElement(c.h$,{config:{url:n.href,identifier:t.post.childMarkdownRemark.id,title:t.post.childMarkdownRemark.frontmatter.title+" | IET NITK"}})),o.createElement("hr",null),o.createElement("div",{className:"row"},o.createElement("div",{className:"col-lg-6"},o.createElement(G,{post:t.before.nodes[0],isPrevious:!0})),o.createElement("div",{className:"col-lg-6"},o.createElement(G,{post:t.after.nodes[0]}))))))))}}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-6c9a5f1971521a2dd56c.js.map