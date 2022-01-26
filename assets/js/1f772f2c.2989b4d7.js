"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[531],{3905:function(e,t,r){r.d(t,{Zo:function(){return i},kt:function(){return d}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},i=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=u(r),d=o,k=m["".concat(l,".").concat(d)]||m[d]||p[d]||a;return r?n.createElement(k,c(c({ref:t},i),{},{components:r})):n.createElement(k,c({ref:t},i))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,c[1]=s;for(var u=2;u<a;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},3819:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return i},toc:function(){return p},default:function(){return d}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),c=["components"],s={title:"Some scripts",slug:"some-scripts",tags:["bash","powershell"],authors:["sneakykoder"]},l="Some scripts",u={permalink:"/some-scripts",source:"@site/blog/2022-01-24-some-scripts.md",title:"Some scripts",description:"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.",date:"2022-01-24T00:00:00.000Z",formattedDate:"January 24, 2022",tags:[{label:"bash",permalink:"/tags/bash"},{label:"powershell",permalink:"/tags/powershell"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],nextItem:{title:"Git snippets",permalink:"/git-snippets"}},i={authorsImageUrls:[void 0]},p=[{value:"Docker",id:"docker",children:[{value:"Clean up docker",id:"clean-up-docker",children:[],level:3}],level:2}],m={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,c);return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Here is a set of (useful in some way) scripts in different languages such as bash, powershell, etc.")),(0,a.kt)("h2",{id:"docker"},"Docker"),(0,a.kt)("h3",{id:"clean-up-docker"},"Clean up docker"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'docker rm $(docker ps -a -q -f="status=exited")\ndocker rm $(docker ps -a -q -f="status=dead")\ndocker rmi $(docker images -a -q -f="dangling=true")\ndocker volume rm $(docker volume ls -q)\ndocker network rm $(docker network ls -q)\n\ndocker ps -a\ndocker images -a\ndocker volume ls\ndocker network ls\n')),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.sh"},"Download bash"))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/sneakykoder/scripts-labs/master/docker_clean_up.ps1"},"Download powershell"))))}d.isMDXComponent=!0}}]);