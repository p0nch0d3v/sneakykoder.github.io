"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4574],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),p=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},c=function(e){var n=p(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(t),d=o,y=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return t?r.createElement(y,i(i({ref:n},c),{},{components:t})):r.createElement(y,i({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=t[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5465:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var r=t(7462),o=(t(7294),t(3905));const a={title:"2022-09-08 (easy)",slug:"2022-09-08-easy",tags:["coding-problem","easy"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},i=void 0,l={unversionedId:"coding-problems/easy/2022-09-08-easy",id:"coding-problems/easy/2022-09-08-easy",title:"2022-09-08 (easy)",description:"Problem:",source:"@site/docs/coding-problems/easy/2022-09-08-easy.md",sourceDirName:"coding-problems/easy",slug:"/coding-problems/easy/2022-09-08-easy",permalink:"/docs/coding-problems/easy/2022-09-08-easy",draft:!1,tags:[{label:"coding-problem",permalink:"/docs/tags/coding-problem"},{label:"easy",permalink:"/docs/tags/easy"}],version:"current",frontMatter:{title:"2022-09-08 (easy)",slug:"2022-09-08-easy",tags:["coding-problem","easy"],authors:["p0nch0d3v"],pagination_prev:"coding-problems/index",pagination_next:null},sidebar:"tutorialSidebar",previous:{title:"Coding Problems",permalink:"/docs/coding-problems/"}},s={},p=[{value:"Problem:",id:"problem",level:3}],c={toc:p};function m(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"problem"},"Problem:"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Given a list of numbers and a number ",(0,o.kt)("inlineCode",{parentName:"em"},"k"),", return whether any two numbers from the list add up to ",(0,o.kt)("inlineCode",{parentName:"em"},"k"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"For example, given ",(0,o.kt)("inlineCode",{parentName:"em"},"[10, 15, 3, 7]")," and ",(0,o.kt)("inlineCode",{parentName:"em"},"k")," of ",(0,o.kt)("inlineCode",{parentName:"em"},"17"),", return true since ",(0,o.kt)("inlineCode",{parentName:"em"},"10 + 7")," is ",(0,o.kt)("inlineCode",{parentName:"em"},"17"),".")),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Bonus: Can you do this in one pass?")),(0,o.kt)("details",null,(0,o.kt)("summary",null,"Proposed solution # 1 - (Python)"),(0,o.kt)("p",null,(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-python"},'def main (the_list, k):\n    i = 0\n    j = 0\n    success = False\n    while (i < len(the_list)):\n        while (j < len(the_list)):\n            if (i != j):\n                if (the_list[i] + the_list[j] == k):\n                    print(the_list[i])\n                    print(the_list[j])\n                    success = True\n            j = j + 1\n            if (success):\n                break\n        j = 0\n        i = i + 1\n        if (success):\n            break\n    print(success)\n\nif __name__ == "__main__":\n    main([10, 15, 3, 7], 17)\n')))))}m.isMDXComponent=!0}}]);