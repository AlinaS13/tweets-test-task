/*! For license information please see 644.da4775ed.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunktweets_task=self.webpackChunktweets_task||[]).push([[644],{869:function(t,n,e){e.r(n),e.d(n,{default:function(){return $}});var r,o,i,a,c=e(433),u=e(861),s=e(439),l=e(168),f=e(867),p=f.ZP.div(r||(r=(0,l.Z)(["\n  margin-top: 70px;\n  @media screen and (min-width: 768px) {\n    margin-top: 100px;\n  }\n"]))),h=f.ZP.div(o||(o=(0,l.Z)(["\n  display: flex;\n"]))),d=f.ZP.button(i||(i=(0,l.Z)(["\n  margin-bottom: 20px;\n  margin-left: 20px;\n  width: 196px;\n  border-color: transparent;\n  border-radius: 10.311px;\n  background: #5736a3;\n  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px\n    rgba(0, 0, 0, 0.25);\n  padding: 14px 28px;\n  color: #ebd8ff;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    background: #5cd3a8;\n    color: #fff;\n  }\n"]))),g=f.ZP.button(a||(a=(0,l.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 196px;\n  border-color: transparent;\n  border-radius: 10.311px;\n  background: #5736a3;\n  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px\n    rgba(0, 0, 0, 0.25);\n  padding: 14px 28px;\n  color: #ebd8ff;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  text-transform: uppercase;\n  margin: 0 auto;\n  margin-bottom: 20px;\n\n  &:hover,\n  &:focus {\n    background: #5cd3a8;\n    color: #fff;\n  }\n"]))),v=e(689),x=e(791);function y(){y=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(O){u=function(t,n,e){return t[n]=e}}function s(t,n,e,o){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),c=new A(o||[]);return r(a,"_invoke",{value:L(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(O){return{type:"throw",arg:O}}}t.wrap=s;var f={};function p(){}function h(){}function d(){}var g={};u(g,i,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(Z([])));x&&x!==n&&e.call(x,i)&&(g=x);var m=d.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function b(t,n){function o(r,i,a,c){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function L(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=E(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function E(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,E(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function j(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function k(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function A(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function Z(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return h.prototype=d,r(m,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(m),t},t.awrap=function(t){return{__await:t}},w(b.prototype),u(b.prototype,a,(function(){return this})),t.AsyncIterator=b,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new b(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(m),u(m,c,"Generator"),u(m,i,(function(){return this})),u(m,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=Z,A.prototype={constructor:A,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),k(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;k(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:Z(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var m,w,b,L,E,j,k,A,Z,S,O,P,N=e(243).Z.create({baseURL:"https://64ae98dfc85640541d4d59ec.mockapi.io/users/"}),_=function(){var t=(0,u.Z)(y().mark((function t(n){var e,r,o,i=arguments;return y().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e=i.length>1&&void 0!==i[1]?i[1]:3,t.prev=1,t.next=4,N.get("/",{params:{page:n,limit:e}});case 4:return r=t.sent,o=r.data,t.abrupt("return",o);case 9:throw t.prev=9,t.t0=t.catch(1),console.log(t.t0),t.t0;case 13:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(n){return t.apply(this,arguments)}}(),T=e(335),G=e.p+"static/media/main-picture-1-x.032662a2a907475127d7.png",Y=f.ZP.li(m||(m=(0,l.Z)(["\n  position: relative;\n  height: 460px;\n  flex-shrink: 0;\n  padding-top: 38px;\n  padding-bottom: 38px;\n  margin-bottom: 40px;\n\n  margin-bottom: 20px;\n  background-image: url(","),\n    linear-gradient(114.99deg, #471ca9 -0.99%, #5736a3 54.28%, #4b2a99 78.99%);\n  background-size: 308px, contain;\n  background-repeat: no-repeat;\n  background-position: top;\n  background-position-y: 28px, top;\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"])),G),F=f.ZP.img(w||(w=(0,l.Z)(["\n  position: absolute;\n  top: 20px;\n  left: 20px;\n  width: 76px;\n  height: 22px;\n"]))),I=f.ZP.div(b||(b=(0,l.Z)(["\n  position: absolute;\n  top: 214px;\n  left: 0;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n  width: 100%;\n  height: 8px;\n"]))),C=f.ZP.div(L||(L=(0,l.Z)(["\n  position: absolute;\n  width: 80px;\n  height: 80px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  top: 214px;\n  background-color: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n  border-radius: 50%;\n  &::before {\n    content: '';\n    position: absolute;\n    top: 10px;\n    left: 10px;\n    width: 60px;\n    height: 60px;\n    background: transparent;\n    border-radius: 50%;\n    box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n      inset 0px -1.71846px 3.43693px #ae7be3,\n      inset 0px 3.43693px 2.5777px #fbf8ff;\n  }\n"]))),B=f.ZP.div(E||(E=(0,l.Z)(["\n  position: absolute;\n  width: 62px;\n  height: 62px;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  background: #5736a3;\n  border-radius: 50%;\n"]))),Q=f.ZP.img(j||(j=(0,l.Z)(["\n  position: absolute;\n  top: 214px;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  border-radius: 85.92px;\n  width: 62px;\n  height: 62px;\n"]))),R=f.ZP.p(k||(k=(0,l.Z)(["\n  color: #ebd8ff;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n"]))),q=f.ZP.p(A||(A=(0,l.Z)(["\n  color: #ebd8ff;\n  font-size: 20px;\n  font-weight: 500;\n  text-transform: uppercase;\n"]))),U=f.ZP.button(Z||(Z=(0,l.Z)(["\n  width: 196px;\n  border-color: transparent;\n  border-radius: 10.311px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.4369285106658936px 3.4369285106658936px 0px\n    rgba(0, 0, 0, 0.25);\n  padding: 14px 28px;\n  color: #373737;\n  justify-content: center;\n  align-items: center;\n  font-size: 18px;\n  font-style: normal;\n  font-weight: 600;\n  line-height: normal;\n  text-transform: uppercase;\n\n  &:hover,\n  &:focus {\n    background: #5cd3a8;\n    color: #373737;\n  }\n"]))),z=(0,f.ZP)(U)(S||(S=(0,l.Z)(["\n  background: #5cd3a8;\n  &:hover,\n  :focus {\n    background: #ebd8ff;\n  }\n"]))),V=f.ZP.div(O||(O=(0,l.Z)(["\n  position: absolute;\n  bottom: 36px;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  justify-content: center;\n  align-items: center;\n  color: #ebd8ff;\n"]))),W=e(184),D=function(t){var n=t.tweets,r=t.followers,o=t.avatar,i=t.id,a=(0,x.useState)(!1),c=(0,s.Z)(a,2),u=c[0],l=c[1],f=(0,x.useState)((function(){var t=localStorage.getItem(i);return t?JSON.parse(t).followersCount:r})),p=(0,s.Z)(f,2),h=p[0],d=p[1],g=!!localStorage.getItem(i)&&JSON.parse(localStorage.getItem(i)).isFollowing,v=h.toLocaleString("en-US");return(0,W.jsxs)(Y,{children:[(0,W.jsx)(F,{src:e(632),alt:"logo"}),(0,W.jsx)(I,{}),(0,W.jsx)(C,{children:(0,W.jsx)(B,{})}),(0,W.jsx)(Q,{src:o,alt:"User avatar",w:"62"}),(0,W.jsxs)(V,{children:[(0,W.jsxs)(R,{children:[n," tweets"]}),(0,W.jsxs)(q,{children:[v," followers"]}),u||g?(0,W.jsx)(z,{onClick:function(){l(!1),d((function(t){return t-1})),localStorage.setItem(i,JSON.stringify({isFollowing:!1,followersCount:h-1}))},children:"Following"}):(0,W.jsx)(U,{onClick:function(){l(!0),d((function(t){return t+1})),localStorage.setItem(i,JSON.stringify({isFollowing:!0,followersCount:h+1}))},children:"Follow"})]})]},i)},J=f.ZP.ul(P||(P=(0,l.Z)(["\n  @media screen and (min-width: 768px) {\n    display: grid;\n    justify-content: center;\n    grid-template-columns: repeat(2, 336px);\n    gap: 32px;\n    margin-bottom: 24px;\n  }\n  @media screen and (min-width: 1280px) {\n    display: grid;\n    grid-template-columns: repeat(3, 330px);\n    gap: 19px;\n  }\n"]))),M=function(t){var n=t.tweets;return(0,W.jsx)(J,{children:n.map((function(t){var n=t.id,e=t.tweets,r=t.followers,o=t.avatar;return(0,W.jsx)(D,{tweets:e,followers:r,avatar:o,id:n},n)}))})},X=e(686),H=e.n(X);function K(){K=function(){return t};var t={},n=Object.prototype,e=n.hasOwnProperty,r=Object.defineProperty||function(t,n,e){t[n]=e.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,n,e){return Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}),t[n]}try{u({},"")}catch(S){u=function(t,n,e){return t[n]=e}}function s(t,n,e,o){var i=n&&n.prototype instanceof p?n:p,a=Object.create(i.prototype),c=new k(o||[]);return r(a,"_invoke",{value:b(t,e,c)}),a}function l(t,n,e){try{return{type:"normal",arg:t.call(n,e)}}catch(S){return{type:"throw",arg:S}}}t.wrap=s;var f={};function p(){}function h(){}function d(){}var g={};u(g,i,(function(){return this}));var v=Object.getPrototypeOf,x=v&&v(v(A([])));x&&x!==n&&e.call(x,i)&&(g=x);var y=d.prototype=p.prototype=Object.create(g);function m(t){["next","throw","return"].forEach((function(n){u(t,n,(function(t){return this._invoke(n,t)}))}))}function w(t,n){function o(r,i,a,c){var u=l(t[r],t,i);if("throw"!==u.type){var s=u.arg,f=s.value;return f&&"object"==typeof f&&e.call(f,"__await")?n.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):n.resolve(f).then((function(t){s.value=t,a(s)}),(function(t){return o("throw",t,a,c)}))}c(u.arg)}var i;r(this,"_invoke",{value:function(t,e){function r(){return new n((function(n,r){o(t,e,n,r)}))}return i=i?i.then(r,r):r()}})}function b(t,n,e){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return Z()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=L(a,e);if(c){if(c===f)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if("suspendedStart"===r)throw r="completed",e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);r="executing";var u=l(t,n,e);if("normal"===u.type){if(r=e.done?"completed":"suspendedYield",u.arg===f)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(r="completed",e.method="throw",e.arg=u.arg)}}}function L(t,n){var e=n.method,r=t.iterator[e];if(void 0===r)return n.delegate=null,"throw"===e&&t.iterator.return&&(n.method="return",n.arg=void 0,L(t,n),"throw"===n.method)||"return"!==e&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+e+"' method")),f;var o=l(r,t.iterator,n.arg);if("throw"===o.type)return n.method="throw",n.arg=o.arg,n.delegate=null,f;var i=o.arg;return i?i.done?(n[t.resultName]=i.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=void 0),n.delegate=null,f):i:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,f)}function E(t){var n={tryLoc:t[0]};1 in t&&(n.catchLoc=t[1]),2 in t&&(n.finallyLoc=t[2],n.afterLoc=t[3]),this.tryEntries.push(n)}function j(t){var n=t.completion||{};n.type="normal",delete n.arg,t.completion=n}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function A(t){if(t){var n=t[i];if(n)return n.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function n(){for(;++r<t.length;)if(e.call(t,r))return n.value=t[r],n.done=!1,n;return n.value=void 0,n.done=!0,n};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return h.prototype=d,r(y,"constructor",{value:d,configurable:!0}),r(d,"constructor",{value:h,configurable:!0}),h.displayName=u(d,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var n="function"==typeof t&&t.constructor;return!!n&&(n===h||"GeneratorFunction"===(n.displayName||n.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,d):(t.__proto__=d,u(t,c,"GeneratorFunction")),t.prototype=Object.create(y),t},t.awrap=function(t){return{__await:t}},m(w.prototype),u(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(n,e,r,o,i){void 0===i&&(i=Promise);var a=new w(s(n,e,r,o),i);return t.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},m(y),u(y,c,"Generator"),u(y,i,(function(){return this})),u(y,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var n=Object(t),e=[];for(var r in n)e.push(r);return e.reverse(),function t(){for(;e.length;){var r=e.pop();if(r in n)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=A,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(j),!t)for(var n in this)"t"===n.charAt(0)&&e.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(e,r){return a.type="throw",a.arg=t,n.next=e,r&&(n.method="next",n.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=e.call(i,"catchLoc"),u=e.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,n){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&e.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=n&&n<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=n,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,n){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&n&&(this.next=n),f},finish:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),j(e),f}},catch:function(t){for(var n=this.tryEntries.length-1;n>=0;--n){var e=this.tryEntries[n];if(e.tryLoc===t){var r=e.completion;if("throw"===r.type){var o=r.arg;j(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,n,e){return this.delegate={iterator:A(t),resultName:n,nextLoc:e},"next"===this.method&&(this.arg=void 0),f}},t}var $=function(){var t=(0,x.useState)([]),n=(0,s.Z)(t,2),e=n[0],r=n[1],o=(0,x.useState)(1),i=(0,s.Z)(o,2),a=i[0],l=i[1],f=(0,x.useState)(!0),y=(0,s.Z)(f,2),m=y[0],w=y[1],b=(0,x.useState)(!1),L=(0,s.Z)(b,2),E=L[0],j=L[1],k=(0,v.s0)();(0,x.useEffect)((function(){(0,u.Z)(K().mark((function t(){var n;return K().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,w(!0),t.next=4,_(a);case 4:0===(n=t.sent).length&&(j(!0),H().Report.info("Tweets ended(","Sorry, we didn't find any more tweets! Please, try again later")),r((function(t){return[].concat((0,c.Z)(t),(0,c.Z)(n))})),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log(t.t0);case 12:return t.prev=12,w(!1),t.finish(12);case 15:case"end":return t.stop()}}),t,null,[[0,9,12,15]])})))()}),[a]);return(0,W.jsxs)(p,{children:[(0,W.jsx)(h,{children:(0,W.jsx)(d,{onClick:function(){k("/")},children:"Go back"})}),e&&(0,W.jsxs)(W.Fragment,{children:[(0,W.jsx)(M,{tweets:e}),!E&&(0,W.jsx)(g,{id:"moreBtn",onClick:function(){l((function(t){return t+1})),setTimeout((function(){window.scrollBy({top:500,behavior:"smooth"})}),200)},children:"Load more"})]}),m&&(0,W.jsx)(T.a,{})]})}},632:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg=="}}]);
//# sourceMappingURL=644.da4775ed.chunk.js.map