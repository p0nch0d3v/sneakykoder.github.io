"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[594],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),i=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=i(n),m=a,f=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(f,l(l({ref:t},u),{},{components:n})):r.createElement(f,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},6504:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return m},frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u}});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=["components"],c={title:"Host domain on local network",slug:"host-domain-local-net",tags:[],authors:["sneakykoder"]},p=void 0,i={permalink:"/host-domain-local-net",source:"@site/blog/2022-03-02-domain-in-local-network.md",title:"Host domain on local network",description:"Prefer used a domain parked on namecheap.",date:"2022-03-02T00:00:00.000Z",formattedDate:"March 2, 2022",tags:[],truncated:!1,authors:[{name:"Sneaky Koder",title:"Software Developer",url:"https://github.com/sneakykoder",imageURL:"https://github.com/sneakykoder.png",key:"sneakykoder"}],frontMatter:{title:"Host domain on local network",slug:"host-domain-local-net",tags:[],authors:["sneakykoder"]},nextItem:{title:"Linux Shell snippets",permalink:"/linux-shell-snippets"}},s={authorsImageUrls:[void 0]},u=[],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Prefer used a domain parked on ",(0,o.kt)("a",{href:"https://www.namecheap.com/",target:"_blank"},"namecheap"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Install ",(0,o.kt)("inlineCode",{parentName:"p"},"ddclient"),", debian base linux distro:")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo apt-get install ddclient -y\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo vim /etc/ddclient.conf\n")),(0,o.kt)("p",null,"Use the following content"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"ssl=yes\nuse=web, web=dynamicdns.park-your-domain.com/getip\nprotocol=namecheap\nserver=dynamicdns.park-your-domain.com\nlogin=dummy-domain.tld\npassword=''\n@\n*\n")),(0,o.kt)("p",null,"Get IP info:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo ddclient -query\n")),(0,o.kt)("p",null,"Restart service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"sudo service ddclient restart\n")),(0,o.kt)("p",null,"References:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.namecheap.com/support/knowledgebase/article.aspx/43/11/how-do-i-set-up-a-host-for-dynamic-dns/"},"https://www.namecheap.com/support/knowledgebase/article.aspx/43/11/how-do-i-set-up-a-host-for-dynamic-dns/")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.namecheap.com/support/knowledgebase/article.aspx/583/11/how-do-i-configure-ddclient/"},"https://www.namecheap.com/support/knowledgebase/article.aspx/583/11/how-do-i-configure-ddclient/"))))}m.isMDXComponent=!0}}]);