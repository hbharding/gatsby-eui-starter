(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{52:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(85),i=n(91),l=n(328),c=n(329),u=n(330),f=n(331),p=n(295),s=n(340),y=n(332),b=n(333),m=n(334);function d(e){return(d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function h(e,t){return!t||"object"!==d(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function w(e){return(w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){return(g=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var E=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),h(this,w(t).apply(this,arguments))}var n,r,o;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&g(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return a.a.createElement("h1",null,"My Component")}}])&&v(n.prototype,r),o&&v(n,o),t}();function A(e){return(A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function O(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function T(e,t){return!t||"object"!==A(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function S(e){return(S=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}n.d(t,"default",function(){return P});var P=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),T(this,S(t).apply(this,arguments))}var n,r,d;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(t,a.a.Component),n=t,(r=[{key:"render",value:function(){return a.a.createElement(i.a,null,a.a.createElement(l.a,null,a.a.createElement(c.a,null,a.a.createElement(u.a,null,a.a.createElement(f.a,null,a.a.createElement(p.a,{size:"l"},a.a.createElement("h1",null,"Page title"))),a.a.createElement(f.a,null,"Page abilities")),a.a.createElement(s.a,null,a.a.createElement(y.a,null,a.a.createElement(b.a,null,a.a.createElement(p.a,null,a.a.createElement(E,null))),a.a.createElement(b.a,null,"Content abilities")),a.a.createElement(m.a,null,a.a.createElement(o.a,{to:"page-2"},"Go to Page 2"))))))}}])&&O(n.prototype,r),d&&O(n,d),t}()},69:function(e,t,n){var r;e.exports=(r=n(86))&&r.default||r},85:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(3),i=n.n(o),l=n(9),c=n.n(l);n.d(t,"a",function(){return c.a});n(69),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},86:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(3),i=n.n(o),l=n(16),c=n(2);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=function(e){var t=e.location,n=c.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){u(e,t,n[t])})}return e}({location:t,pageResources:n},n.json)):null};f.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=f},91:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=(n(104),n(105),n(320)),i=n(321),l=n(186),c=n(339),u=n(335),f=n(322),p=n(323),s=n(324),y=n(325),b=n(338),m=n(306),d=n(327),v={color:"subdued",iconType:"starEmpty",iconSize:"s","aria-label":"Add to favorites"},h=[{label:"Recently viewed",iconType:"clock",flyoutMenu:{title:"Recent items",listItems:[{label:"My dashboard",href:"/#/layout/nav-drawer",iconType:"dashboardApp",extraAction:v},{label:"Workpad with title that wraps",href:"/#/layout/nav-drawer",iconType:"canvasApp",extraAction:v},{label:"My logs",href:"/#/layout/nav-drawer",iconType:"loggingApp","aria-label":"This is an alternate aria-label",extraAction:v}]}},{label:"Favorites",iconType:"starEmpty",flyoutMenu:{title:"Favorite items",listItems:[{label:"My workpad",href:"/#/layout/nav-drawer",iconType:"canvasApp",extraAction:{color:"subdued",iconType:"starFilled",iconSize:"s","aria-label":"Remove from favorites",alwaysShow:!0}},{label:"My logs",href:"/#/layout/nav-drawer",iconType:"loggingApp",extraAction:{color:"subdued",iconType:"starFilled",iconSize:"s","aria-label":"Remove from favorites",alwaysShow:!0}}]}}],w={color:"subdued",iconType:"pin",iconSize:"s","aria-label":"Pin to top"},g=[{label:"APM",href:"/#/layout/nav-drawer",iconType:"apmApp",extraAction:w},{label:"Infrastructure",href:"/#/layout/nav-drawer",iconType:"infraApp",extraAction:w},{label:"Log viewer",href:"/#/layout/nav-drawer",iconType:"loggingApp",extraAction:w},{label:"Uptime",href:"/#/layout/nav-drawer",iconType:"upgradeAssistantApp",extraAction:w},{label:"Maps",href:"/#/layout/nav-drawer",iconType:"gisApp",extraAction:w},{label:"SIEM",href:"/#/layout/nav-drawer",iconType:"securityAnalyticsApp",extraAction:w}];function E(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var A=[{label:"Canvas",href:"/#/layout/nav-drawer",iconType:"canvasApp",isActive:!0,extraAction:function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"==typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter(function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),r.forEach(function(t){E(e,t,n[t])})}return e}({},w,{alwaysShow:!0})},{label:"Discover",href:"/#/layout/nav-drawer",iconType:"discoverApp",extraAction:w},{label:"Visualize",href:"/#/layout/nav-drawer",iconType:"visualizeApp",extraAction:w},{label:"Dashboard",href:"/#/layout/nav-drawer",iconType:"dashboardApp",extraAction:w},{label:"Machine learning",href:"/#/layout/nav-drawer",iconType:"machineLearningApp",extraAction:w},{label:"Custom Plugin (no icon)",href:"/#/layout/nav-drawer",extraAction:w}],O=[{label:"Admin",iconType:"managementApp",flyoutMenu:{title:"Tools and settings",listItems:[{label:"Dev tools",href:"/#/layout/nav-drawer",iconType:"devToolsApp",extraAction:{color:"subdued",iconType:"starEmpty",iconSize:"s","aria-label":"Add to favorites"}},{label:"Stack Monitoring",href:"/#/layout/nav-drawer",iconType:"monitoringApp",extraAction:{color:"subdued",iconType:"starEmpty",iconSize:"s","aria-label":"Add to favorites"}},{label:"Stack Management",href:"/#/layout/nav-drawer",iconType:"managementApp",extraAction:{color:"subdued",iconType:"starEmpty",iconSize:"s","aria-label":"Add to favorites"}}]}}];function T(e){return(T="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function S(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function j(e){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function P(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function x(e,t){return(x=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",function(){return k});var k=function(e){function t(){var e,n,r,a;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return r=this,a=(e=j(t)).call.apply(e,[this].concat(i)),n=!a||"object"!==T(a)&&"function"!=typeof a?P(r):a,_(P(n),"navDrawerRef",void 0),_(P(n),"setNavDrawerRef",function(e){return n.navDrawerRef=e}),n}var n,r,v;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&x(e,t)}(t,a.a.Component),n=t,(r=[{key:"renderLogo",value:function(){return a.a.createElement(o.a,{iconType:"logoElastic",href:"/#/layout/nav-drawer","aria-label":"Goes to home"})}},{key:"renderMenuTrigger",value:function(){var e=this;return a.a.createElement(i.a,{"aria-label":"Open nav",onClick:function(){return e.navDrawerRef.toggleOpen()}},a.a.createElement(l.b,{type:"apps",href:"#",size:"m"}))}},{key:"renderBreadcrumbs",value:function(){var e=[{text:"Home",href:"#",onClick:function(e){e.preventDefault(),console.log("You clicked home")},"data-test-subj":"breadcrumbsAnimals",className:"customClass"}];return a.a.createElement(c.a,{breadcrumbs:e})}},{key:"render",value:function(){return console.log(A),a.a.createElement(u.a,null,a.a.createElement("div",{style:{position:"fixed",top:0,left:0,height:"100%",width:"100%"}},a.a.createElement(f.a,null,a.a.createElement(p.a,{grow:!1},a.a.createElement(s.a,{sizes:["xs","s"]},a.a.createElement(y.a,{border:"right"},this.renderMenuTrigger())),a.a.createElement(y.a,{border:"right"},this.renderLogo()),a.a.createElement(y.a,{border:"right"})),this.renderBreadcrumbs(),a.a.createElement(p.a,{side:"right"},a.a.createElement(y.a,null))),a.a.createElement(b.a,{ref:this.setNavDrawerRef},a.a.createElement(m.a,{listItems:h}),a.a.createElement(d.a,{margin:"none"}),a.a.createElement(m.a,{listItems:A}),a.a.createElement(d.a,{margin:"none"}),a.a.createElement(m.a,{listItems:g}),a.a.createElement(d.a,{margin:"none"}),a.a.createElement(m.a,{listItems:O})),a.a.createElement("div",{className:"demoWrapper"},this.props.children)))}}])&&S(n.prototype,r),v&&S(n,v),t}()}}]);
//# sourceMappingURL=component---src-pages-index-tsx-56dfc07467f82e8de195.js.map