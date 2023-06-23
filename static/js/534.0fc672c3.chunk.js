/*! For license information please see 534.0fc672c3.chunk.js.LICENSE.txt */
(self.webpackChunk_4list=self.webpackChunk_4list||[]).push([[534],{7534:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return h}});var n=r(2791),a=r(7022),o=r(9743),s=r(2677),i=r(1413),c=r(5987),l=r(1694),u=r.n(l),f=r(2007),d=r.n(f),m=r(162),p=r(184),b=["bsPrefix","className","fluid","rounded","roundedCircle","thumbnail"],v=(d().string,d().bool,d().bool,d().bool,d().bool,n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.className,a=e.fluid,o=e.rounded,s=e.roundedCircle,l=e.thumbnail,f=(0,c.Z)(e,b);return r=(0,m.vE)(r,"img"),(0,p.jsx)("img",(0,i.Z)((0,i.Z)({ref:t},f),{},{className:u()(n,a&&"".concat(r,"-fluid"),o&&"rounded",s&&"rounded-circle",l&&"".concat(r,"-thumbnail"))}))})));v.displayName="Image",v.defaultProps={fluid:!1,rounded:!1,roundedCircle:!1,thumbnail:!1};var x=v,y=r(3360),g=r(9271),h=function(e){var t=(0,g.k6)();return(0,p.jsx)(a.Z,{children:(0,p.jsx)(o.Z,{className:"justify-content-center",children:(0,p.jsx)(s.Z,{md:"8",lg:"7",xxl:"6",className:"d-flex flex-column gap-4",children:(0,p.jsxs)("form",{onSubmit:function(r){e.setLogin(Math.random()),sessionStorage.setItem("cookie",!0),r.preventDefault(),t.goBack()},children:[(0,p.jsx)("p",{className:"h4 text-center mb-4",children:"LOGIN"}),(0,p.jsx)("label",{style:{fontWeight:"bold"},className:"black-text text-left ",children:"Username"}),(0,p.jsx)("input",{id:"inputs",className:"form-control py-3 fs-4",color:"grey"}),(0,p.jsx)("br",{}),(0,p.jsx)("label",{htmlFor:"defaultFormLoginPasswordEx",style:{fontWeight:"bold"},className:"grey-text",children:"Your password"}),(0,p.jsx)("input",{type:"password",id:"inputs",className:"form-control py-3 fs-4"}),(0,p.jsx)("p",{className:"font-small blue-text d-flex py-3",children:(0,p.jsx)("a",{href:"#!",className:"blue-text ml-1",children:"Forgot Password?"})}),(0,p.jsxs)("div",{className:"d-flex flex-column text-center mt-4 gap-4",children:[(0,p.jsxs)("div",{className:"d-flex flex-row align-items-center justify-content-center gap-4",children:[(0,p.jsx)(x,{src:"/HCI-Team-4/apple.png"})," OR ",(0,p.jsx)(x,{src:"/HCI-Team-4/Glogo.png"})]}),(0,p.jsx)(y.Z,{className:"mx-auto",type:"submit",id:"Button",children:"Login"})]}),(0,p.jsxs)("div",{className:"text-left mt-4 ",children:["Dont have an account?",(0,p.jsx)("p",{className:"font-small blue-text d-flex pb-3",children:(0,p.jsx)("a",{href:"#!",className:"blue-text ml-1",children:"Sign Up"})})]})]})})})})}},5341:function(e,t,r){"use strict";r.d(t,{FT:function(){return i}});var n=r(885),a=r(2791),o=r(184),s=["as","disabled"];function i(e){var t=e.tagName,r=e.disabled,n=e.href,a=e.target,o=e.rel,s=e.onClick,i=e.tabIndex,c=void 0===i?0:i,l=e.type;t||(t=null!=n||null!=a||null!=o?"a":"button");var u={tagName:t};if("button"===t)return[{type:l||"button",disabled:r},u];var f=function(e){(r||"a"===t&&function(e){return!e||"#"===e.trim()}(n))&&e.preventDefault(),r?e.stopPropagation():null==s||s(e)};return[{role:"button",disabled:void 0,tabIndex:r?void 0:c,href:"a"===t&&r?void 0:n,target:"a"===t?a:void 0,"aria-disabled":r||void 0,rel:"a"===t?o:void 0,onClick:f,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),f(e))}},u]}var c=a.forwardRef((function(e,t){var r=e.as,a=e.disabled,c=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,s),l=i(Object.assign({tagName:r,disabled:a},c)),u=(0,n.Z)(l,2),f=u[0],d=u[1].tagName;return(0,o.jsx)(d,Object.assign({},c,f,{ref:t}))}));c.displayName="Button"},1694:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var o=typeof r;if("string"===o||"number"===o)e.push(r);else if(Array.isArray(r)){if(r.length){var s=a.apply(null,r);s&&e.push(s)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)n.call(r,i)&&r[i]&&e.push(i);else e.push(r.toString())}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},3360:function(e,t,r){"use strict";var n=r(1413),a=r(885),o=r(5987),s=r(1694),i=r.n(s),c=r(2791),l=r(5341),u=r(162),f=r(184),d=["as","bsPrefix","variant","size","active","className"],m=c.forwardRef((function(e,t){var r=e.as,s=e.bsPrefix,c=e.variant,m=e.size,p=e.active,b=e.className,v=(0,o.Z)(e,d),x=(0,u.vE)(s,"btn"),y=(0,l.FT)((0,n.Z)({tagName:r},v)),g=(0,a.Z)(y,2),h=g[0],j=g[1].tagName;return(0,f.jsx)(j,(0,n.Z)((0,n.Z)((0,n.Z)({},v),h),{},{ref:t,className:i()(b,x,p&&"active",c&&"".concat(x,"-").concat(c),m&&"".concat(x,"-").concat(m),v.href&&v.disabled&&"disabled")}))}));m.displayName="Button",m.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=m},2677:function(e,t,r){"use strict";var n=r(885),a=r(1413),o=r(5987),s=r(1694),i=r.n(s),c=r(2791),l=r(162),u=r(184),f=["as","bsPrefix","className"],d=["className"],m=["xxl","xl","lg","md","sm","xs"];var p=c.forwardRef((function(e,t){var r=function(e){var t=e.as,r=e.bsPrefix,n=e.className,s=(0,o.Z)(e,f);r=(0,l.vE)(r,"col");var c=[],u=[];return m.forEach((function(e){var t,n,a,o=s[e];delete s[e],"object"===typeof o&&null!=o?(t=o.span,n=o.offset,a=o.order):t=o;var i="xs"!==e?"-".concat(e):"";t&&c.push(!0===t?"".concat(r).concat(i):"".concat(r).concat(i,"-").concat(t)),null!=a&&u.push("order".concat(i,"-").concat(a)),null!=n&&u.push("offset".concat(i,"-").concat(n))})),[(0,a.Z)((0,a.Z)({},s),{},{className:i().apply(void 0,[n].concat(c,u))}),{as:t,bsPrefix:r,spans:c}]}(e),s=(0,n.Z)(r,2),c=s[0],p=c.className,b=(0,o.Z)(c,d),v=s[1],x=v.as,y=void 0===x?"div":x,g=v.bsPrefix,h=v.spans;return(0,u.jsx)(y,(0,a.Z)((0,a.Z)({},b),{},{ref:t,className:i()(p,!h.length&&g)}))}));p.displayName="Col",t.Z=p},7022:function(e,t,r){"use strict";var n=r(1413),a=r(5987),o=r(1694),s=r.n(o),i=r(2791),c=r(162),l=r(184),u=["bsPrefix","fluid","as","className"],f=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.fluid,i=e.as,f=void 0===i?"div":i,d=e.className,m=(0,a.Z)(e,u),p=(0,c.vE)(r,"container"),b="string"===typeof o?"-".concat(o):"-fluid";return(0,l.jsx)(f,(0,n.Z)((0,n.Z)({ref:t},m),{},{className:s()(d,o?"".concat(p).concat(b):p)}))}));f.displayName="Container",f.defaultProps={fluid:!1},t.Z=f},9743:function(e,t,r){"use strict";var n=r(1413),a=r(5987),o=r(1694),s=r.n(o),i=r(2791),c=r(162),l=r(184),u=["bsPrefix","className","as"],f=["xxl","xl","lg","md","sm","xs"],d=i.forwardRef((function(e,t){var r=e.bsPrefix,o=e.className,i=e.as,d=void 0===i?"div":i,m=(0,a.Z)(e,u),p=(0,c.vE)(r,"row"),b="".concat(p,"-cols"),v=[];return f.forEach((function(e){var t,r=m[e];delete m[e],t=null!=r&&"object"===typeof r?r.cols:r;var n="xs"!==e?"-".concat(e):"";null!=t&&v.push("".concat(b).concat(n,"-").concat(t))})),(0,l.jsx)(d,(0,n.Z)((0,n.Z)({ref:t},m),{},{className:s().apply(void 0,[o,p].concat(v))}))}));d.displayName="Row",t.Z=d},162:function(e,t,r){"use strict";r.d(t,{SC:function(){return s},vE:function(){return o}});var n=r(2791),a=(r(184),n.createContext({prefixes:{}}));a.Consumer,a.Provider;function o(e,t){var r=(0,n.useContext)(a).prefixes;return e||r[t]||t}function s(){return"rtl"===(0,n.useContext)(a).dir}},4942:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(9142);function a(e,t,r){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}},1413:function(e,t,r){"use strict";r.d(t,{Z:function(){return o}});var n=r(4942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},5987:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(3366);function a(e,t){if(null==e)return{};var r,a,o=(0,n.Z)(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}},9142:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(1002);function a(e){var t=function(e,t){if("object"!==(0,n.Z)(e)||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var a=r.call(e,t||"default");if("object"!==(0,n.Z)(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===(0,n.Z)(t)?t:String(t)}},1002:function(e,t,r){"use strict";function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}r.d(t,{Z:function(){return n}})}}]);
//# sourceMappingURL=534.0fc672c3.chunk.js.map