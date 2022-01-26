"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[984],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),g=s(n),m=a,f=g["".concat(c,".").concat(m)]||g[m]||u[m]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},5017:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),i=["components"],l={title:"Git snippets",slug:"git-snippets",tags:["git","bash"],authors:["sneakykoder"]},c="Git snippets",s={permalink:"/git-snippets",source:"@site/blog/2022-01-17-git-snippets.md",title:"Git snippets",description:"Here is a set of some git snippets, useful in some way.",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[{label:"git",permalink:"/tags/git"},{label:"bash",permalink:"/tags/bash"}],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],prevItem:{title:"Some scripts",permalink:"/some-scripts"},nextItem:{title:"Docker CLI's",permalink:"/docker-clis"}},p={authorsImageUrls:[void 0]},u=[{value:"Git log",id:"git-log",children:[{value:"Create alias",id:"create-alias",children:[],level:4}],level:3},{value:"Git config user",id:"git-config-user",children:[],level:3},{value:"Git hook",id:"git-hook",children:[{value:"Git hook to validate branch name",id:"git-hook-to-validate-branch-name",children:[],level:4}],level:3}],g={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Here is a set of some git snippets, useful in some way.")),(0,o.kt)("h3",{id:"git-log"},"Git log"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git log --pretty=oneline --abbrev-commit --graph\ngit log --pretty --oneline --graph --abbrev-commit --relative-date\n")),(0,o.kt)("h4",{id:"create-alias"},"Create alias"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"git config --global alias.graph-log 'log --pretty=oneline --abbrev-commit --graph'\ngit config --global alias.graph-log 'git log --pretty --oneline --graph --abbrev-commit --relative-date'\n")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"git-config-user"},"Git config user"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'git config --local user.email ""\ngit config --local user.name ""\n')),(0,o.kt)("h3",{id:"git-hook"},"Git hook"),(0,o.kt)("h4",{id:"git-hook-to-validate-branch-name"},"Git hook to validate branch name"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'#!/bin/sh\nremote="$1"\nurl="$2"\nLC_ALL=C\nlocal_branch="$(git rev-parse --abbrev-ref HEAD)"\nvalid_branch_regex="^(main|master|develop|development|((feature|bugfix|bug-fix|bug|fix|release|hotfix|hot-fix)+\\/{1,1}[a-zA-Z0-9_.-]+))$"\nmessage="The branch name \\"$local_branch\\" is not correct. Branch names must accomplish the following convention: \\"$valid_branch_regex\\". The branch should be renamed a valid name and try again."\nif [[ ! $local_branch =~ $valid_branch_regex ]]\nthen\n    echo "$message"\n    exit 1\nfi\nexit 0\n')))}m.isMDXComponent=!0}}]);