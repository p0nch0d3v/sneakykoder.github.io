"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8869],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(r),m=o,g=d["".concat(s,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(7462),o=(r(7294),r(3905));const a={title:"2022-09-23 (easy)",slug:"2022-09-23-easy",tags:["coding-problem","easy"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},i=void 0,l={unversionedId:"coding-problems/easy/2022-09-23-easy",id:"coding-problems/easy/2022-09-23-easy",title:"2022-09-23 (easy)",description:"You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:",source:"@site/docs/coding-problems/easy/2022-09-23-easy.md",sourceDirName:"coding-problems/easy",slug:"/coding-problems/easy/2022-09-23-easy",permalink:"/docs/coding-problems/easy/2022-09-23-easy",draft:!1,tags:[{label:"coding-problem",permalink:"/docs/tags/coding-problem"},{label:"easy",permalink:"/docs/tags/easy"}],version:"current",frontMatter:{title:"2022-09-23 (easy)",slug:"2022-09-23-easy",tags:["coding-problem","easy"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Coding Problems",permalink:"/docs/coding-problems/"}},s={},p=[{value:"Proposed solution # 1:",id:"proposed-solution--1",level:3}],c={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You run an e-commerce website and want to record the last ",(0,o.kt)("inlineCode",{parentName:"em"},"N")," ",(0,o.kt)("inlineCode",{parentName:"em"},"order")," ids in a log. Implement a data structure to accomplish this, with the following API:")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"record(order_id)"),": adds the order_id to the log"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"get_last(i)"),": gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"You should be as efficient with time and space as possible.")),(0,o.kt)("h3",{id:"proposed-solution--1"},"Proposed solution # 1:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"TBD")))}u.isMDXComponent=!0}}]);