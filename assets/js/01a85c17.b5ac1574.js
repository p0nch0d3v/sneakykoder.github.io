"use strict";
(self["webpackChunkblog"] = self["webpackChunkblog"] || []).push([[4013],{

/***/ 9058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ BlogLayout)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Layout/index.js + 65 modules
var Layout = __webpack_require__(215);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/hooks/useWindowSize.js
var useWindowSize = __webpack_require__(7524);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Translate.js + 1 modules
var Translate = __webpack_require__(5999);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"sidebar":"sidebar_re4s","sidebarItemTitle":"sidebarItemTitle_pO2u","sidebarItemList":"sidebarItemList_Yudw","sidebarItem":"sidebarItem__DBe","sidebarItemLink":"sidebarItemLink_mo7H","sidebarItemLinkActive":"sidebarItemLinkActive_I1ZP"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Desktop/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarDesktop(_ref){let{sidebar}=_ref;return/*#__PURE__*/react.createElement("aside",{className:"col col--3"},/*#__PURE__*/react.createElement("nav",{className:(0,clsx_m/* default */.Z)(styles_module.sidebar,'thin-scrollbar'),"aria-label":(0,Translate/* translate */.I)({id:'theme.blog.sidebar.navAriaLabel',message:'Blog recent posts navigation',description:'The ARIA label for recent posts in the blog sidebar'})},/*#__PURE__*/react.createElement("div",{className:(0,clsx_m/* default */.Z)(styles_module.sidebarItemTitle,'margin-bottom--md')},sidebar.title),/*#__PURE__*/react.createElement("ul",{className:(0,clsx_m/* default */.Z)(styles_module.sidebarItemList,'clean-list')},sidebar.items.map(item=>/*#__PURE__*/react.createElement("li",{key:item.permalink,className:styles_module.sidebarItem},/*#__PURE__*/react.createElement(Link/* default */.Z,{isNavLink:true,to:item.permalink,className:styles_module.sidebarItemLink,activeClassName:styles_module.sidebarItemLinkActive},item.title))))));}
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/contexts/navbarSecondaryMenu/content.js
var content = __webpack_require__(3102);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/Mobile/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebarMobileSecondaryMenu(_ref){let{sidebar}=_ref;return/*#__PURE__*/react.createElement("ul",{className:"menu__list"},sidebar.items.map(item=>/*#__PURE__*/react.createElement("li",{key:item.permalink,className:"menu__list-item"},/*#__PURE__*/react.createElement(Link/* default */.Z,{isNavLink:true,to:item.permalink,className:"menu__link",activeClassName:"menu__link--active"},item.title))));}function BlogSidebarMobile(props){return/*#__PURE__*/react.createElement(content/* NavbarSecondaryMenuFiller */.Zo,{component:BlogSidebarMobileSecondaryMenu,props:props});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogSidebar/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogSidebar(_ref){let{sidebar}=_ref;const windowSize=(0,useWindowSize/* useWindowSize */.i)();if(!sidebar?.items.length){return null;}// Mobile sidebar doesn't need to be server-rendered
if(windowSize==='mobile'){return/*#__PURE__*/react.createElement(BlogSidebarMobile,{sidebar:sidebar});}return/*#__PURE__*/react.createElement(BlogSidebarDesktop,{sidebar:sidebar});}
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/BlogLayout/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogLayout(props){const{sidebar,toc,children,...layoutProps}=props;const hasSidebar=sidebar&&sidebar.items.length>0;return/*#__PURE__*/react.createElement(Layout/* default */.Z,layoutProps,/*#__PURE__*/react.createElement("div",{className:"container margin-vert--lg"},/*#__PURE__*/react.createElement("div",{className:"row"},/*#__PURE__*/react.createElement(BlogSidebar,{sidebar:sidebar}),/*#__PURE__*/react.createElement("main",{className:(0,clsx_m/* default */.Z)('col',{'col--7':hasSidebar,'col--9 col--offset-1':!hasSidebar}),itemScope:true,itemType:"http://schema.org/Blog"},children),toc&&/*#__PURE__*/react.createElement("div",{className:"col col--2"},toc))));}

/***/ }),

/***/ 4524:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ BlogTagsListPage)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6010);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5155);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1944);
/* harmony import */ var _docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5281);
/* harmony import */ var _theme_BlogLayout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9058);
/* harmony import */ var _theme_TagsListByLetter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6090);
/* harmony import */ var _theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(197);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function BlogTagsListPage(_ref){let{tags,sidebar}=_ref;const title=(0,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_4__/* .translateTagsPageTitle */ .M)();return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .HtmlClassNameProvider */ .FG,{className:(0,clsx__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z)(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames.wrapper.blogPages */ .k.wrapper.blogPages,_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_7__/* .ThemeClassNames.page.blogTagsListPage */ .k.page.blogTagsListPage)},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_docusaurus_theme_common__WEBPACK_IMPORTED_MODULE_5__/* .PageMetadata */ .d,{title:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_SearchMetadata__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{tag:"blog_tags_list"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_BlogLayout__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z,{sidebar:sidebar},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("h1",null,title),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_theme_TagsListByLetter__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,{tags:tags})));}

/***/ }),

/***/ 3008:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Tag)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/clsx/dist/clsx.m.js
var clsx_m = __webpack_require__(6010);
// EXTERNAL MODULE: ./node_modules/@docusaurus/core/lib/client/exports/Link.js + 1 modules
var Link = __webpack_require__(9960);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_zVej","tagRegular":"tagRegular_sFm0","tagWithCount":"tagWithCount_h2kH"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function Tag(_ref){let{permalink,label,count}=_ref;return/*#__PURE__*/react.createElement(Link/* default */.Z,{href:permalink,className:(0,clsx_m/* default */.Z)(styles_module.tag,count?styles_module.tagWithCount:styles_module.tagRegular)},label,count&&/*#__PURE__*/react.createElement("span",null,count));}

/***/ }),

/***/ 6090:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ TagsListByLetter)
});

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-common/lib/utils/tagsUtils.js
var tagsUtils = __webpack_require__(5155);
// EXTERNAL MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/Tag/index.js + 1 modules
var Tag = __webpack_require__(3008);
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/styles.module.css
// extracted by mini-css-extract-plugin
/* harmony default export */ const styles_module = ({"tag":"tag_Nnez"});
;// CONCATENATED MODULE: ./node_modules/@docusaurus/theme-classic/lib/theme/TagsListByLetter/index.js
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */function TagLetterEntryItem(_ref){let{letterEntry}=_ref;return/*#__PURE__*/react.createElement("article",null,/*#__PURE__*/react.createElement("h2",null,letterEntry.letter),/*#__PURE__*/react.createElement("ul",{className:"padding--none"},letterEntry.tags.map(tag=>/*#__PURE__*/react.createElement("li",{key:tag.permalink,className:styles_module.tag},/*#__PURE__*/react.createElement(Tag/* default */.Z,tag)))),/*#__PURE__*/react.createElement("hr",null));}function TagsListByLetter(_ref2){let{tags}=_ref2;const letterList=(0,tagsUtils/* listTagsByLetters */.P)(tags);return/*#__PURE__*/react.createElement("section",{className:"margin-vert--lg"},letterList.map(letterEntry=>/*#__PURE__*/react.createElement(TagLetterEntryItem,{key:letterEntry.letter,letterEntry:letterEntry})));}

/***/ }),

/***/ 5155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "M": () => (/* binding */ translateTagsPageTitle),
/* harmony export */   "P": () => (/* binding */ listTagsByLetters)
/* harmony export */ });
/* harmony import */ var _docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5999);
/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */const translateTagsPageTitle=()=>(0,_docusaurus_Translate__WEBPACK_IMPORTED_MODULE_0__/* .translate */ .I)({id:'theme.tags.tagsPageTitle',message:'Tags',description:'The title of the tag list page'});function getTagLetter(tag){return tag[0].toUpperCase();}/**
 * Takes a list of tags (as provided by the content plugins), and groups them by
 * their initials.
 */function listTagsByLetters(tags){const groups={};Object.values(tags).forEach(tag=>{const initial=getTagLetter(tag.label);groups[initial]??=[];groups[initial].push(tag);});return Object.entries(groups)// Sort letters
.sort((_ref,_ref2)=>{let[letter1]=_ref;let[letter2]=_ref2;return letter1.localeCompare(letter2);}).map(_ref3=>{let[letter,letterTags]=_ref3;// Sort tags inside a letter
const sortedTags=letterTags.sort((tag1,tag2)=>tag1.label.localeCompare(tag2.label));return{letter,tags:sortedTags};});}

/***/ })

}]);