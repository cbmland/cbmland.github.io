(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[823],{12449:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentCount=void 0;var r=c(n(67294)),o=c(n(45697)),i=n(86674),s=n(67990);function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=(0,i.debounce)(function(){window.DISQUSWIDGETS&&window.DISQUSWIDGETS.getCount({reset:!0})},300,!1),p=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(c);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),e&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function c(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;e.getElementById(s.COMMENT_COUNT_SCRIPT_ID)?d():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/count.js"),s.COMMENT_COUNT_SCRIPT_ID,e.body)}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(s.COMMENT_COUNT_SCRIPT_ID,e.body),window.DISQUSWIDGETS=void 0,(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config),n=e.children,o=e.className,i=function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["shortname","config","children","className"]);return r.default.createElement("span",u({},i,{className:"".concat(s.COMMENT_COUNT_CLASS).concat(o?" ".concat(o):""),"data-disqus-identifier":t.identifier,"data-disqus-url":t.url}),n)}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,n),c}(r.default.Component);t.CommentCount=p,p.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string}).isRequired,className:o.default.string,children:o.default.node}},75890:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CommentEmbed=void 0;var r=s(n(67294)),o=s(n(45697)),i=n(67990);function s(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e){return(l=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var f=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}(i,e);var t,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=l(i);return e=t?Reflect.construct(n,arguments,l(this).constructor):n.apply(this,arguments),e&&("object"===c(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function i(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,i),o.apply(this,arguments)}return n=[{key:"getSrc",value:function(){var e=Number(this.props.commentId).toString(36),t=this.props.showParentComment?"1":"0",n=this.props.showMedia?"1":"0";return"https://embed.disqus.com/p/".concat(e,"?p=").concat(t,"&m=").concat(n)}},{key:"render",value:function(){var e=this.props,t=e.width,n=e.height,o=(e.commentId,e.showMedia,e.showParentComment,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["width","height","commentId","showMedia","showParentComment"]));return r.default.createElement("iframe",a({},o,{src:this.getSrc(),width:t,height:n,seamless:"seamless",scrolling:"no",frameBorder:"0"}))}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(i.prototype,n),i}(r.default.Component);t.CommentEmbed=f,f.defaultProps={showMedia:!0,showParentComment:!0,width:i.COMMENT_EMBED_WIDTH,height:i.COMMENT_EMBED_HEIGHT},f.propTypes={commentId:o.default.string.isRequired,showMedia:o.default.bool,showParentComment:o.default.bool,width:o.default.number,height:o.default.number,className:o.default.string}},64811:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.DiscussionEmbed=void 0;var r=c(n(67294)),o=c(n(45697)),i=n(86674),s=n(67990);function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(c);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),e&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function c(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){"undefined"!=typeof window&&window.disqus_shortname&&window.disqus_shortname!==this.props.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(e){this.props.shortname!==e.shortname&&this.cleanInstance(),this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"loadInstance",value:function(){var e=window.document;window&&window.DISQUS&&e.getElementById(s.EMBED_SCRIPT_ID)?window.DISQUS.reset({reload:!0,config:this.getDisqusConfig(this.props.config)}):(window.disqus_config=this.getDisqusConfig(this.props.config),window.disqus_shortname=this.props.shortname,(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/embed.js"),s.EMBED_SCRIPT_ID,e.body))}},{key:"cleanInstance",value:function(){var e=window.document;(0,i.removeScript)(s.EMBED_SCRIPT_ID,e.body),window&&window.DISQUS&&window.DISQUS.reset({});try{delete window.DISQUS}catch(e){window.DISQUS=void 0}var t=e.getElementById(s.THREAD_ID);if(t)for(;t.hasChildNodes();)t.removeChild(t.firstChild);(0,i.removeResources)()}},{key:"getDisqusConfig",value:function(e){return function(){var t=this;this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.page.category_id=e.categoryID,this.page.remote_auth_s3=e.remoteAuthS3,this.page.api_key=e.apiKey,e.sso&&(this.sso=e.sso),e.language&&(this.language=e.language),s.CALLBACKS.forEach(function(n){t.callbacks[n]=[e[n]]})}}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["shortname","config"]));return r.default.createElement("div",u({},t,{id:s.THREAD_ID}))}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,n),c}(r.default.Component);t.DiscussionEmbed=d,d.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string,categoryID:o.default.string,remoteAuthS3:o.default.string,apiKey:o.default.string,preData:o.default.func,preInit:o.default.func,onInit:o.default.func,onReady:o.default.func,afterRender:o.default.func,preReset:o.default.func,onIdentify:o.default.func,beforeComment:o.default.func,onNewComment:o.default.func,onPaginate:o.default.func,sso:o.default.shape({name:o.default.string,button:o.default.string,icon:o.default.string,url:o.default.string,logout:o.default.string,profile_url:o.default.string,width:o.default.string,height:o.default.string})}).isRequired}},64573:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.Recommendations=void 0;var r=c(n(67294)),o=c(n(45697)),i=n(86674),s=n(67990);function c(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(){return(u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function l(e,t){return(l=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var d=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&l(e,t)}(c,e);var t,n,o=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=f(c);return e=t?Reflect.construct(n,arguments,f(this).constructor):n.apply(this,arguments),e&&("object"===a(e)||"function"==typeof e)?e:function(e){if(void 0===e)throw ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(this)});function c(){return!function(e,t){if(!(e instanceof t))throw TypeError("Cannot call a class as a function")}(this,c),o.apply(this,arguments)}return n=[{key:"componentDidMount",value:function(){this.loadInstance()}},{key:"shouldComponentUpdate",value:function(e){return this.props!==e&&(0,i.shallowComparison)(this.props,e)}},{key:"componentDidUpdate",value:function(){this.loadInstance()}},{key:"componentWillUnmount",value:function(){this.cleanInstance()}},{key:"getDisqusConfig",value:function(e){return function(){this.page.identifier=e.identifier,this.page.url=e.url,this.page.title=e.title,this.language=e.language}}},{key:"loadInstance",value:function(){"undefined"!=typeof window&&window.document&&(window.disqus_config=this.getDisqusConfig(this.props.config),window.document.getElementById(s.RECOMMENDATIONS_SCRIPT_ID)?this.reloadInstance():(0,i.insertScript)("https://".concat(this.props.shortname,".disqus.com/recommendations.js"),s.RECOMMENDATIONS_SCRIPT_ID,window.document.body))}},{key:"reloadInstance",value:function(){window&&window.DISQUS_RECOMMENDATIONS&&window.DISQUS_RECOMMENDATIONS.reset({reload:!0})}},{key:"cleanInstance",value:function(){(0,i.removeScript)(s.RECOMMENDATIONS_SCRIPT_ID,window.document.body);try{delete window.DISQUS_RECOMMENDATIONS}catch(e){window.DISQUS_RECOMMENDATIONS=void 0}var e=window.document.getElementById(s.RECOMMENDATIONS_ID);if(e)for(;e.hasChildNodes();)e.removeChild(e.firstChild);(0,i.removeResources)()}},{key:"render",value:function(){var e=this.props,t=(e.shortname,e.config,function(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],!(t.indexOf(n)>=0)&&Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}(e,["shortname","config"]));return r.default.createElement("div",u({},t,{id:s.RECOMMENDATIONS_ID}))}}],function(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(c.prototype,n),c}(r.default.Component);t.Recommendations=d,d.propTypes={shortname:o.default.string.isRequired,config:o.default.shape({identifier:o.default.string,url:o.default.string,title:o.default.string,language:o.default.string})}},67990:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CALLBACKS=t.RECOMMENDATIONS_SCRIPT_ID=t.RECOMMENDATIONS_ID=t.COMMENT_EMBED_HEIGHT=t.COMMENT_EMBED_WIDTH=t.COMMENT_COUNT_SCRIPT_ID=t.COMMENT_COUNT_CLASS=t.EMBED_SCRIPT_ID=t.THREAD_ID=void 0,t.THREAD_ID="disqus_thread",t.EMBED_SCRIPT_ID="dsq-embed-scr",t.COMMENT_COUNT_CLASS="disqus-comment-count",t.COMMENT_COUNT_SCRIPT_ID="dsq-count-scr",t.COMMENT_EMBED_WIDTH=420,t.COMMENT_EMBED_HEIGHT=320,t.RECOMMENDATIONS_ID="disqus_recommendations",t.RECOMMENDATIONS_SCRIPT_ID="dsq-recs-scr",t.CALLBACKS=["preData","preInit","onInit","onReady","afterRender","preReset","onIdentify","beforeComment","onNewComment","onPaginate"]},53944:function(e,t,n){"use strict";Object.defineProperty(t,"qw",{enumerable:!0,get:function(){return i.DiscussionEmbed}});var r=n(12449),o=n(75890),i=n(64811),s=n(64573);r.CommentCount,o.CommentEmbed,i.DiscussionEmbed,s.Recommendations},86674:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.insertScript=function(e,t,n){var r=window.document.createElement("script");return r.async=!0,r.src=e,r.id=t,n.appendChild(r),r},t.removeScript=function(e,t){var n=window.document.getElementById(e);n&&t.removeChild(n)},t.removeResources=function(){window.document.querySelectorAll('link[href*="disquscdn.com/next/embed"], link[href*="disquscdn.com/next/recommendations"], link[href*="disqus.com/next/config.js"], script[src*="disquscdn.com/next/embed"], script[src*="disqus.com/count-data.js"], iframe[title="Disqus"]').forEach(function(e){return e.remove()})},t.debounce=function(e,t,n){var r;return function(){var o=this,i=arguments,s=n&&!r;window.clearTimeout(r),r=setTimeout(function(){r=null,n||e.apply(o,i)},t),s&&e.apply(o,i)}},t.isReactElement=c,t.shallowComparison=function e(t,n){var r,o=function(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=function(e,t){if(e){if("string"==typeof e)return s(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,void 0)}}(e))){var t=0,n=function(){};return{s:n,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:n}}throw TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,o,i=!0,c=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw o}}}}(new Set(Object.keys(t),Object.keys(n)));try{for(o.s();!(r=o.n()).done;){var a=r.value;if("object"===i(t[a])){if(e(t[a],n[a]))return!0}else if(t[a]!==n[a]&&!c(t[a]))return!0}}catch(e){o.e(e)}finally{o.f()}return!1};var r,o=(r=n(67294))&&r.__esModule?r:{default:r};function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function c(e){return!!o.default.isValidElement(e)||!!Array.isArray(e)&&e.some(function(e){return o.default.isValidElement(e)})}},73969:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/posts/[single]",function(){return n(45437)}])},94973:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var r=n(85893),o=n(67294),i=n(41664),s=n.n(i),c=n(8189),a=n(26671),u=n(54208);n(29392);var l={Button:e=>{let{href:t,type:n,rel:o,children:i}=e;return(0,r.jsx)(s(),{href:t,target:"_blank",rel:"noopener noreferrer ".concat(o?"follow"===o?"":o:"nofollow"),className:"btn me-4 mb-4 ".concat("outline"===n?"btn-outline-primary":"btn-primary"," border-primary hover:text-white hover:no-underline"),children:i})},Accordion:e=>{let{title:t,children:n,className:i}=e,[s,c]=(0,o.useState)(!1);return(0,r.jsxs)("div",{className:"rounded border border-border dark:border-darkmode-border ".concat(i),children:[(0,r.jsxs)("button",{className:"relative block w-full bg-theme-light px-4 py-3 text-left text-dark dark:bg-darkmode-theme-dark dark:text-darkmode-light",onClick:()=>c(!s),children:[t,(0,r.jsx)("svg",{className:"absolute right-4 top-1/2 m-0 h-4 w-4 -translate-y-1/2 ".concat(s&&"rotate-180"),x:"0px",y:"0px",viewBox:"0 0 512.011 512.011",xmlSpace:"preserve",children:(0,r.jsx)("path",{fill:"currentColor",d:"M505.755,123.592c-8.341-8.341-21.824-8.341-30.165,0L256.005,343.176L36.421,123.592c-8.341-8.341-21.824-8.341-30.165,0 s-8.341,21.824,0,30.165l234.667,234.667c4.16,4.16,9.621,6.251,15.083,6.251c5.462,0,10.923-2.091,15.083-6.251l234.667-234.667 C514.096,145.416,514.096,131.933,505.755,123.592z"})})]}),(0,r.jsx)("div",{className:"px-4 py-3 ".concat(!s&&"hidden"),children:n})]})},Video:function(e){let{title:t,width:n=500,height:o="auto",src:i,...s}=e;return(0,r.jsxs)("video",{className:"overflow-hidden rounded",width:n,height:o,controls:!0,...s,children:[(0,r.jsx)("source",{src:i.match(/^http/)?i:"/videos/".concat(i),type:"video/mp4"}),t]})},Tab:function(e){let{children:t}=e;return(0,r.jsx)("li",{className:"tab-item my-0 hidden",children:t})},Tabs:function(e){let{children:t}=e,n=(0,o.useRef)(null),i=(e,t)=>{let r=[...e.currentTarget.parentElement.children],o=[...n.current.children],i=o.find(e=>!e.classList.contains("hidden")),s=r.find(e=>e.classList.contains("active-tab"));i!==o[t]&&(s.classList.remove("active-tab"),e.currentTarget.classList.add("active-tab"),i.classList.add("hidden"),o[t].classList.remove("hidden"))};return(0,o.useEffect)(()=>{[...n.current.children][0].classList.remove("hidden")},[]),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("ul",{className:"mb-0 flex list-none items-center space-x-4 pl-0",children:t.map((e,t)=>(0,r.jsx)("li",{className:" m-0 cursor-pointer rounded px-8 py-3 font-bold  text-dark dark:text-darkmode-light ".concat(0===t&&"active-tab"),onClick:e=>i(e,t),children:e.props.name},t))}),(0,r.jsx)("ul",{className:"mt-1 mb-0 list-none rounded bg-theme-light p-6 dark:bg-darkmode-theme-dark",ref:n,children:t})]})},Notice:function(e){let{type:t,children:n}=e;return(0,r.jsxs)("div",{className:"notice ".concat(t," relative mb-8"),children:[(0,r.jsxs)("div",{className:"notice-head absolute top-0 left-0 z-10 flex h-[30px] w-full items-center px-3",children:[(0,r.jsx)("svg",{width:"16px",height:"16px",viewBox:"0 0 512 512",children:(0,r.jsx)("path",{fill:"#fff",d:"M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"})}),(0,r.jsx)("p",{className:"my-0 ml-1.5 text-base capitalize text-white dark:text-white",children:t})]}),(0,r.jsx)("div",{className:"notice-body my-0 p-3 pt-[40px] dark:text-darkmode-light",children:n})]})},Code:e=>{let{children:t,language:n}=e;return(0,r.jsx)(c.Z,{language:n,style:a.Vg,children:t})},Youtube:e=>{let{id:t,title:n,...o}=e;return(0,r.jsx)("div",{className:"overflow-hidden rounded",children:(0,r.jsx)(u.Z,{id:t,title:n,...o})})}}},45437:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return E},default:function(){return C}});var r=n(85893),o=n(56626),i=n(75767),s=n(3338),c=n(41664),a=n.n(c);let{base_url:u}=o.site,{blog_folder:l}=o.settings;var f=e=>{let{posts:t,date:n}=e,o=(0,s.d)(t),i=o.length-1,c=o.findIndex(e=>e.frontmatter.date==n),f=0==c?void 0:o[c-1].slug,d=c==i?void 0:o[c+1].slug,p=d&&(0,r.jsx)(a(),{href:"".concat(u,"/").concat(l,"/").concat(d),className:"btn btn-primary",children:"Prev"}),m=f&&(0,r.jsx)(a(),{href:"".concat(u,"/").concat(l,"/").concat(f),className:"btn btn-primary",children:"Next"});return(0,r.jsxs)("div",{className:"row",children:[(0,r.jsx)("span",{className:"col",children:p}),(0,r.jsx)("span",{className:"col-8"}),(0,r.jsx)("span",{className:"col",children:m})]})},d=n(60235),p=n(9538),m=n(53944),h=n(43305),y=n(82010),b=n(25675),g=n.n(b),v=n(26963),w=n(86396),_=n(27431),O=n(94973);let{disqus:S}=o,{meta_author:x}=o.metadata,{base_url:j}=o.site;var I=e=>{let{frontmatter:t,content:n,mdxContent:s,slug:c,posts:u,allCategories:l,relatedPosts:b}=e,{description:I,title:E,date:C,image:N,categories:D}=t;I=I||n.slice(0,120);let{theme:T}=(0,y.F)(),M=t.author?t.author:x,R=o.disqus.settings;return R.identifier=t.disqusId?t.disqusId:o.settings.blog_folder+"/"+c,(0,r.jsx)(i.Z,{title:E,description:I,children:(0,r.jsxs)("section",{className:"section single-blog",children:[(0,r.jsx)("div",{className:"container",children:(0,r.jsxs)("div",{className:"row",children:[(0,r.jsxs)("div",{className:"lg:col-8",children:[(0,r.jsxs)("article",{children:[(0,r.jsx)("div",{className:"relative h-[208px] overflow-hidden rounded-xl",children:N&&(0,r.jsx)(g(),{src:N,height:"500",width:"1000",alt:E,className:""})}),o.settings.InnerPaginationOptions.enableTop&&(0,r.jsx)("div",{className:"mt-4",children:(0,r.jsx)(f,{posts:u,date:C})}),(0,p.gI)(E,"h1","lg:text-[42px] mt-4"),(0,r.jsxs)("ul",{className:"flex items-center space-x-4 p-2 pb-1",children:[(0,r.jsx)("li",{children:(0,r.jsxs)(a(),{className:"inline-flex items-center font-secondary text-xs leading-3",href:"".concat(j,"/about"),children:[(0,r.jsx)(v.q1E,{className:"mr-1.5"}),M]})}),(0,r.jsxs)("li",{className:"inline-flex items-center font-secondary text-xs leading-3",children:[(0,r.jsx)(v.tpH,{className:"mr-1.5"}),(0,d.Z)(C)]})]}),(0,r.jsx)("ul",{className:"flex items-center space-x-2 p-0",children:D.map((e,t)=>(0,r.jsx)("li",{className:"ml-2 inline-flex rounded-[35px] bg-primary px-2 text-white text-sm",children:(0,r.jsx)(a(),{className:"capitalize truncate",href:"".concat(j,"/categories/").concat(e.replace(" ","-")),children:e})},"tag-"+t))}),(0,r.jsx)("div",{className:"content mb-16",children:(0,r.jsx)(h.R,{...s,components:O.Z})}),o.settings.InnerPaginationOptions.enableBottom&&(0,r.jsx)(f,{posts:u,date:C})]}),(0,r.jsx)("div",{className:"mt-16",children:S.enable&&(0,r.jsx)(m.qw,{shortname:S.shortname,config:R},T)})]}),(0,r.jsx)(_.Z,{posts:u.filter(e=>e.slug!==c),categories:l})]})}),(0,r.jsxs)("div",{className:"container mt-20",children:[(0,r.jsx)("h2",{className:"section-title",children:"Related Posts"}),(0,r.jsx)("div",{className:"row mt-16",children:b.slice(0,3).map((e,t)=>(0,r.jsx)("div",{className:"mb-12 lg:col-4",children:(0,r.jsx)(w.Z,{post:e})},"post-"+t))})]})]})})},E=!0,C=e=>{let{post:t,mdxContent:n,slug:o,allCategories:i,relatedPosts:s,posts:c}=e,{frontmatter:a,content:u}=t;return(0,r.jsx)(I,{frontmatter:a,content:u,mdxContent:n,slug:o,allCategories:i,relatedPosts:s,posts:c})}},92703:function(e,t,n){"use strict";var r=n(50414);function o(){}function i(){}i.resetWarningCache=o,e.exports=function(){function e(e,t,n,o,i,s){if(s!==r){var c=Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw c.name="Invariant Violation",c}}function t(){return e}e.isRequired=e;var n={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:i,resetWarningCache:o};return n.PropTypes=n,n}},45697:function(e,t,n){e.exports=n(92703)()},50414:function(e){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"}},function(e){e.O(0,[260,445,4,722,711,864,767,233,888,774,179],function(){return e(e.s=73969)}),_N_E=e.O()}]);